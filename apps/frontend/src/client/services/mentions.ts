// Mentions & Profile Integration Service
export {};

let activeHoverMentionEl: HTMLElement | null = null;
let hoverFetchTimer: any = null;
const userCache = new Map<string, any>();

export const fetchUserDataByUsername = async (rawUsername: string): Promise<any | null> => {
  const cleanUsername = rawUsername.replace(/^@/, "").trim().toLowerCase();
  if (!cleanUsername) return null;

  if (userCache.has(cleanUsername)) {
    return userCache.get(cleanUsername);
  }

  const win = window as any;

  // 1. Check current logged-in user
  const currentUsername = String(
    win.currentUserUsername ||
    win.currentUsername ||
    win.currentUser?.username ||
    localStorage.getItem("tg_username") ||
    ""
  ).replace(/^@/, "").trim().toLowerCase();

  const currentUserId = String(
    win.currentUserId ||
    win.currentUser?.id ||
    localStorage.getItem("tg_user_id") ||
    ""
  ).toLowerCase();

  const currentUserDisplayName = String(
    win.currentUserDisplayName ||
    win.currentUser?.displayName ||
    win.workspaceUserName?.textContent ||
    currentUsername ||
    "You"
  ).trim();

  if (cleanUsername && (cleanUsername === currentUsername || (currentUserId && cleanUsername === currentUserId))) {
    const savedDialog = (win.allDialogs || []).find((d: any) => d.type === "saved" || d.publicId === "-1002003143");
    const userObj = {
      id: currentUserId || "saved-self",
      username: currentUsername || cleanUsername,
      displayName: currentUserDisplayName,
      avatarUrl: win.currentUserAvatarUrl || "",
      publicId: savedDialog?.publicId || "-1002003143",
      isSelf: true
    };
    userCache.set(cleanUsername, userObj);
    return userObj;
  }

  // 2. Check local dialogs in allDialogs (ONLY direct or saved user dialogs, ignore group chats)
  const allDialogs = win.allDialogs || [];
  const localMatch = allDialogs.find((d: any) => {
    if (d.type === "group") return false;
    const pId = String(d.publicId || "").replace(/^@/, "").trim().toLowerCase();
    const uName = String(d.username || "").replace(/^@/, "").trim().toLowerCase();
    const peerId = String(d.peerUserId || "").toLowerCase();
    return pId === cleanUsername || uName === cleanUsername || peerId === cleanUsername;
  });

  if (localMatch) {
    const userObj = {
      id: localMatch.peerUserId || localMatch.id,
      username: cleanUsername,
      displayName: localMatch.title || cleanUsername,
      avatarUrl: localMatch.avatarUrl || "",
      publicId: localMatch.publicId,
      dialog: localMatch
    };
    userCache.set(cleanUsername, userObj);
    return userObj;
  }

  // 3. Search via backend API
  try {
    const fetchJson = win.fetchJson;
    const apiBase = win.apiBase || "/api";
    if (typeof fetchJson === "function") {
      const res = await fetchJson(apiBase + "/v1/users/search?q=" + encodeURIComponent(cleanUsername));
      if (res && Array.isArray(res.users) && res.users.length > 0) {
        const match = res.users.find((u: any) => String(u.username || "").toLowerCase() === cleanUsername) || res.users[0];
        if (match) {
          const userObj = {
            id: match.id,
            username: match.username || cleanUsername,
            displayName: match.displayName || match.name || match.username || cleanUsername,
            avatarUrl: match.avatarUrl || "",
            publicId: match.publicId || null
          };
          userCache.set(cleanUsername, userObj);
          return userObj;
        }
      }
    }
  } catch (err) {
    console.warn("User search failed for mention:", cleanUsername, err);
  }

  userCache.set(cleanUsername, null);
  return null;
};

export const showUserNotFoundModal = (username: string) => {
  const cleanUser = username.replace(/^@/, "");
  let modal = document.getElementById("mention-not-found-modal");
  const escapeHtml = (v: any) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const getTranslation = (key: string, fallback: string) => {
    try {
      const val = typeof (window as any).t === "function" ? (window as any).t(key) : "";
      if (val && val !== key && !val.includes("mention.")) {
        return val;
      }
    } catch (_) {}
    return fallback;
  };

  const titleText = getTranslation("mention.notFoundTitle", "Имя");
  const rawBody = getTranslation("mention.notFoundBody", "@{username} не найдено.");
  const bodyText = rawBody.replace(/\{[^}]+\}/g, cleanUser);
  const okText = getTranslation("mention.ok", "ОК");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "mention-not-found-modal";
    modal.className = "session-confirm-modal-overlay mention-not-found-overlay";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="session-confirm-modal-backdrop"></div>
      <div class="session-confirm-modal-shell mention-not-found-shell">
        <div class="mention-not-found-title" id="mention-not-found-title">${escapeHtml(titleText)}</div>
        <div class="mention-not-found-body" id="mention-not-found-body">${escapeHtml(bodyText)}</div>
        <div class="mention-not-found-actions">
          <button id="mention-not-found-ok" class="mention-not-found-btn" type="button">${escapeHtml(okText)}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const titleEl = modal.querySelector("#mention-not-found-title");
  const bodyEl = modal.querySelector("#mention-not-found-body");
  const okBtn = modal.querySelector("#mention-not-found-ok");

  if (titleEl) titleEl.textContent = titleText;
  if (bodyEl) bodyEl.textContent = bodyText;
  if (okBtn) okBtn.textContent = okText;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  const closeFn = () => {
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  };

  const backdrop = modal.querySelector(".session-confirm-modal-backdrop");
  if (backdrop) (backdrop as HTMLElement).onclick = closeFn;
  if (okBtn) (okBtn as HTMLElement).onclick = closeFn;
};

export const handleMentionClick = async (username: string) => {
  const cleanUsername = username.replace(/^@/, "").trim().toLowerCase();
  if (!cleanUsername) return;

  const win = window as any;
  const loadDialog = win.loadDialog;
  const createPreferredDirectDialog = typeof win.createPreferredDirectDialog === "function"
    ? win.createPreferredDirectDialog
    : async (targetUserId: string) => {
        if (typeof win.fetchJson !== "function") {
          throw new Error("Chat API is not available.");
        }
        return win.fetchJson((win.apiBase || "/api") + "/v1/dialogs/direct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ targetUserId })
        });
      };

  const userData = await fetchUserDataByUsername(cleanUsername);

  if (!userData) {
    showUserNotFoundModal(cleanUsername);
    return;
  }

  // 1. If self user -> Open Saved Messages
  if (userData.isSelf) {
    const savedDialog = (win.allDialogs || []).find((d: any) => d.type === "saved" || d.publicId === "-1002003143");
    const targetPublicId = savedDialog?.publicId || "-1002003143";
    if (typeof loadDialog === "function") {
      await loadDialog(targetPublicId);
      return;
    }
  }

  // 2. Filter allDialogs ONLY for direct user dialogs (never match group or secret chats)
  const allDialogs = win.allDialogs || [];
  const existingDirectDialog = allDialogs.find((d: any) => {
    if (d.type === "group" || d.type === "secret" || d.encryptionMode === "e2e_v1") {
      return false; // Skip groups and secret chats when opening user mentions!
    }
    const pId = String(d.publicId || "").replace(/^@/, "").trim().toLowerCase();
    const uName = String(d.username || "").replace(/^@/, "").trim().toLowerCase();
    const peerId = String(d.peerUserId || "").toLowerCase();
    const targetUserId = String(userData.id || "").toLowerCase();

    return (
      (targetUserId && peerId === targetUserId) ||
      (uName && uName === cleanUsername) ||
      (pId && pId === cleanUsername)
    );
  });

  if (existingDirectDialog && existingDirectDialog.publicId && typeof loadDialog === "function") {
    await loadDialog(existingDirectDialog.publicId);
    return;
  }

  // 3. If user exists in DB, create or load preferred direct dialog
  if (userData.id && typeof createPreferredDirectDialog === "function" && typeof loadDialog === "function") {
    try {
      const payload = await createPreferredDirectDialog(userData.id);
      if (payload && payload.dialog && payload.dialog.publicId) {
        if (typeof win.setDialogPayloadCache === "function") {
          win.setDialogPayloadCache(payload.dialog.publicId, payload);
        }
        if (typeof win.updateDialogInState === "function") {
          win.updateDialogInState(payload.dialog);
        } else if (!(win.allDialogs || []).some((dialog: any) => dialog?.publicId === payload.dialog.publicId)) {
          win.allDialogs.unshift(payload.dialog);
        }
        if (typeof win.renderDialogs === "function") {
          win.renderDialogs(win.allDialogs || []);
        }
        await loadDialog(payload.dialog.publicId);
        return;
      }
    } catch (err) {
      console.warn("createPreferredDirectDialog failed for user:", userData.id, err);
      const errorMessage = err instanceof Error ? err.message : "Не удалось создать чат.";
      if (typeof win.showToast === "function") {
        win.showToast(errorMessage, "error");
      }
      return;
    }
  }

  // 4. Fallback: try loadDialog with publicId if available
  if (userData.publicId && typeof loadDialog === "function") {
    try {
      await loadDialog(userData.publicId);
      return;
    } catch (_) {}
  }

  showUserNotFoundModal(cleanUsername);
};

export const initMentionsHandler = () => {
  document.body.addEventListener("mouseover", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const mentionEl = target?.closest(".message-mention") as HTMLElement;
    if (mentionEl && mentionEl !== activeHoverMentionEl) {
      activeHoverMentionEl = mentionEl;
      if (hoverFetchTimer) window.clearTimeout(hoverFetchTimer);

      const username = mentionEl.getAttribute("data-username") || mentionEl.textContent?.trim() || "";
      if (!username) return;

      hoverFetchTimer = window.setTimeout(async () => {
        const userData = await fetchUserDataByUsername(username);
        // Only show tooltip chip if user ACTUALLY exists!
        if (userData && activeHoverMentionEl === mentionEl) {
          const showChip = (window as any).showGlobalChipTooltip;
          if (typeof showChip === "function") {
            const labelText = userData.displayName ? `${userData.displayName} (@${userData.username})` : `@${userData.username}`;
            showChip(mentionEl, labelText);
          }
        }
      }, 180);
    }
  });

  document.body.addEventListener("mouseout", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const mentionEl = target?.closest(".message-mention") as HTMLElement;
    if (mentionEl && mentionEl === activeHoverMentionEl) {
      activeHoverMentionEl = null;
      if (hoverFetchTimer) {
        window.clearTimeout(hoverFetchTimer);
        hoverFetchTimer = null;
      }
      const hideChip = (window as any).hideGlobalChipTooltip;
      if (typeof hideChip === "function") {
        hideChip();
      }
    }
  });

  document.body.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const mentionEl = target?.closest(".message-mention") as HTMLElement;
    if (mentionEl) {
      event.preventDefault();
      event.stopPropagation();
      const hideChip = (window as any).hideGlobalChipTooltip;
      if (typeof hideChip === "function") {
        hideChip();
      }
      const username = mentionEl.getAttribute("data-username") || mentionEl.textContent?.trim() || "";
      if (username) {
        void handleMentionClick(username);
      }
    }
  });
};

(window as any).initMentionsHandler = initMentionsHandler;
(window as any).handleMentionClick = handleMentionClick;
(window as any).showUserNotFoundModal = showUserNotFoundModal;
