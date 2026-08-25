// UI Controls Service for Preact / TypeScript Migration
import { t } from "../i18n";
import { onDomReady } from "../shared/lib/on-dom-ready.ts";
export {};

declare const currentDialogSnapshot: any;
declare const chatSearchToggle: HTMLElement;
declare const chatSearchPanel: HTMLElement;
declare const chatIslandCopy: HTMLElement;
declare const chatProfilePanel: HTMLElement;
declare const chatProfileClose: HTMLElement;
declare const groupMemberContextMenu: HTMLElement;
declare const profileLinkContextMenu: HTMLElement;
declare const chatProfileName: HTMLElement;
declare const chatProfileLink: HTMLAnchorElement;
declare const chatSearchClose: HTMLElement;
declare const chatSearchBackdrop: HTMLElement;
declare const chatSearchInput: HTMLInputElement;
declare const chatCallButton: HTMLElement;
declare const chatGroupVideoButton: HTMLElement;
declare const chatCallChip: HTMLElement;
declare const callCloseButton: HTMLElement;
declare const callExpandButton: HTMLElement;
declare const callModal: HTMLElement;
declare const callMiniOpen: HTMLElement;
declare const callMiniClose: HTMLElement;
declare const callMiniEnd: HTMLElement;
declare const groupCallBanner: HTMLElement;
declare const activeCall: any;
declare const groupCallJoinStrip: HTMLElement;
declare const groupCallJoinButton: HTMLElement;
declare const groupCallLeaveCancel: HTMLElement;
declare const groupCallLeaveConfirm: HTMLElement;
declare const groupCallEndForAll: HTMLInputElement;
declare const callMiniDragHandle: HTMLElement;
declare const callOverlay: HTMLElement;
declare const callMiniCard: HTMLElement;
declare const callAcceptButton: HTMLElement;
declare const callEndButton: HTMLElement;
declare const callMuteButton: HTMLElement;
declare const currentUserId: string;
declare const currentUserDisplayName: string;
declare const workspaceUserName: HTMLElement;
declare const groupCallStateByDialog: Map<string, any>;
declare const groupLocalVoiceLastLevel: number;
declare const callVideoButton: HTMLElement;
declare const callScreenButton: HTMLElement;
declare const callDevicesButton: HTMLElement;
declare const callDevicesPanel: HTMLElement;
declare const callDevicesClose: HTMLElement;
declare const callEmojiTooltip: HTMLElement;
declare const callInputDevice: HTMLSelectElement;
declare const callOutputDevice: HTMLSelectElement;

declare const closeChatSearch: () => void;
declare const setChatSearchPanelOpen: (open: boolean) => void;
declare const renderChatSearchResults: () => void;
declare const closeChatProfilePanel: () => void;
declare const openChatProfilePanel: () => void;
declare const closeGroupMemberContextMenuSoon: () => void;
declare const closeGroupMemberContextMenu: () => void;
declare const closeProfileLinkContextMenuSoon: () => void;
declare const closeProfileLinkContextMenu: () => void;
declare const openDirectDialogForUser: (userId: string, opts?: any) => Promise<void>;
declare const openGroupMemberContextMenu: (event: MouseEvent, userId: string) => void;
declare const openProfileLinkContextMenu: (event: MouseEvent, url: string) => void;
declare const getChatProfileDetails: (dialog: any) => any;
declare const showToast: (msg: string, type?: string) => void;
declare const renderDialogs: (dialogs: any[]) => void;
declare const closeDialog: () => void;
declare const beginOutgoingCall: () => Promise<void>;
declare const beginGroupVideoCall: () => Promise<void>;
declare const restoreCallModal: () => void;
declare const endOrRejectCall: () => Promise<void>;
declare const dismissMiniCallCard: () => void;
declare const closeGroupLeaveModal: () => void;
declare const confirmLeaveGroupCall: (opts?: any) => Promise<void>;
declare const acceptIncomingCall: () => Promise<void>;
declare const toggleDirectCallCamera: () => Promise<void>;
declare const toggleDirectCallScreenShare: () => Promise<void>;
declare const closeExpandedScreenPreview: () => void;
declare const openExpandedScreenPreview: () => void;
declare const closeCallDevicesPanel: () => void;
declare const loadCallDevices: () => Promise<void>;
declare const openCallDevicesPanel: () => void;
declare const replaceLocalAudioTrack: (id: string) => Promise<void>;
declare const applyCallOutputDevice: (id: string) => Promise<void>;

// Global helpers/variables
declare const currentUserUsername: string;
declare const isDialogNotificationsEnabled: (id: string) => boolean;
declare const setDialogNotificationsEnabled: (id: string, enabled: boolean) => void;
declare const isGroupNotificationsEnabled: (id: string) => boolean;
declare const setGroupNotificationsEnabled: (id: string, enabled: boolean) => void;
declare const syncGroupNotificationsToggle: () => void;
declare const upsertGroupParticipant: (a: any, b: any, c: any, d: any, e: any) => void;
declare const sendCallRealtime: (data: any) => void;
declare const clampVoiceLevel: (v: number) => number;
declare const syncCallUi: () => void;

const getWin = () => window as any;

onDomReady(() => {
  if (typeof chatSearchToggle !== 'undefined' && chatSearchToggle) {
    chatSearchToggle.addEventListener("click", () => {
      if (!getWin().currentDialogSnapshot) {
        return;
      }

      if (typeof chatSearchPanel !== 'undefined' && chatSearchPanel && chatSearchPanel.classList.contains("open")) {
        if (typeof closeChatSearch === 'function') {
          closeChatSearch();
        }
        return;
      }

      if (typeof setChatSearchPanelOpen === 'function') {
        setChatSearchPanelOpen(true);
      }
      if (typeof renderChatSearchResults === 'function') {
        renderChatSearchResults();
      }
    });
  }

  const toggleChatInfoPanel = () => {
    if (!getWin().currentDialogSnapshot) {
      return;
    }
    if (typeof chatProfilePanel !== "undefined" && chatProfilePanel && chatProfilePanel.classList.contains("open")) {
      if (typeof closeChatProfilePanel === "function") {
        closeChatProfilePanel();
      }
      return;
    }
    if (typeof openChatProfilePanel === "function") {
      openChatProfilePanel();
    }
  };

  document.getElementById("chat-info-button")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleChatInfoPanel();
  });
  document.getElementById("chat-more-button")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleChatInfoPanel();
  });

  const islandCopyNode = getWin().chatIslandCopy || document.querySelector(".chat-island-copy");
  if (islandCopyNode) {
    islandCopyNode.addEventListener("click", () => {
      if (!getWin().currentDialogSnapshot) {
        return;
      }

      if (typeof chatProfilePanel !== 'undefined' && chatProfilePanel && chatProfilePanel.classList.contains("open")) {
        if (typeof closeChatProfilePanel === 'function') {
          closeChatProfilePanel();
        }
        return;
      }

      if (typeof openChatProfilePanel === 'function') {
        openChatProfilePanel();
      }
    });

    islandCopyNode.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      islandCopyNode.click();
    });
  }

  const chatBackBtn = document.getElementById("chat-back-button");
  if (chatBackBtn) {
    chatBackBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pageRoot = document.getElementById("page-root");
      pageRoot?.classList.remove("mobile-chat-open");
      if (typeof getWin().closeDialog === "function") {
        getWin().closeDialog();
      }
    });
  }

  if (typeof chatProfileClose !== 'undefined' && chatProfileClose) {
    chatProfileClose.addEventListener("click", () => {
      if (typeof closeChatProfilePanel === 'function') {
        closeChatProfilePanel();
      }
    });
  }

  const profilePanelEl = document.getElementById("chat-profile-panel");
  if (profilePanelEl) {
    profilePanelEl.addEventListener("click", (e) => {
      if (e.target === profilePanelEl) {
        if (typeof closeChatProfilePanel === 'function') {
          closeChatProfilePanel();
        }
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && profilePanelEl?.classList.contains("open")) {
      if (typeof closeChatProfilePanel === 'function') {
        closeChatProfilePanel();
      }
    }
  });

  const chatProfileAvatarEl = document.getElementById("chat-profile-avatar");
  if (chatProfileAvatarEl) {
    chatProfileAvatarEl.addEventListener("click", () => {
      const dialog = getWin().currentDialogSnapshot;
      const realAvatarUrl = String(dialog?.avatarUrl || "").trim();
      const avatarImg = chatProfileAvatarEl.querySelector("img") as HTMLImageElement | null;
      const avatarUrl = avatarImg ? avatarImg.src : "";
      const targetSrc = (realAvatarUrl && !realAvatarUrl.startsWith("data:image/svg+xml")) ? realAvatarUrl : avatarUrl;
      if (targetSrc && !targetSrc.startsWith("data:image/svg+xml")) {
        const title = dialog?.title || "Profile";
        (window as any).openViewerModal?.({
          src: targetSrc,
          senderName: title,
          senderId: dialog?.peerUserId || dialog?.id,
          createdAt: dialog?.avatarUpdatedAt || dialog?.createdAt || dialog?.lastMessageCreatedAt
        });
      }
    });
  }

  if (typeof groupMemberContextMenu !== 'undefined' && groupMemberContextMenu) {
    groupMemberContextMenu.addEventListener("mouseenter", () => {
      if (getWin().groupMemberContextMenuCloseTimer) {
        window.clearTimeout(getWin().groupMemberContextMenuCloseTimer);
        getWin().groupMemberContextMenuCloseTimer = null;
      }
    });

    groupMemberContextMenu.addEventListener("mouseleave", () => {
      if (typeof closeGroupMemberContextMenuSoon === 'function') {
        closeGroupMemberContextMenuSoon();
      }
    });
  }

  if (typeof profileLinkContextMenu !== 'undefined' && profileLinkContextMenu) {
    profileLinkContextMenu.addEventListener("mouseenter", () => {
      if (getWin().profileLinkContextMenuCloseTimer) {
        window.clearTimeout(getWin().profileLinkContextMenuCloseTimer);
        getWin().profileLinkContextMenuCloseTimer = null;
      }
    });
    profileLinkContextMenu.addEventListener("mouseleave", () => {
      if (typeof closeProfileLinkContextMenuSoon === 'function') {
        closeProfileLinkContextMenuSoon();
      }
    });
  }

  document.addEventListener("pointerdown", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }
    if (event.button === 2) {
      return;
    }
    if (!target.closest("#group-member-context-menu")) {
      if (typeof closeGroupMemberContextMenu === 'function') {
        closeGroupMemberContextMenu();
      }
    }
    if (!target.closest("#profile-link-context-menu")) {
      if (typeof closeProfileLinkContextMenu === 'function') {
        closeProfileLinkContextMenu();
      }
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && typeof groupMemberContextMenu !== 'undefined' && groupMemberContextMenu?.classList.contains("open")) {
      event.preventDefault();
      event.stopPropagation();
      if (typeof closeGroupMemberContextMenu === 'function') {
        closeGroupMemberContextMenu();
      }
      return;
    }
    if (event.key === "Escape" && typeof profileLinkContextMenu !== 'undefined' && profileLinkContextMenu?.classList.contains("open")) {
      event.preventDefault();
      event.stopPropagation();
      if (typeof closeProfileLinkContextMenu === 'function') {
        closeProfileLinkContextMenu();
      }
    }
  });

  const chatProfileMembersList = document.getElementById("chat-profile-members-list");
  chatProfileMembersList?.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".group-member-row[data-member-user-id]") : null;
    if (!target) {
      return;
    }
    const memberUserId = String(target.getAttribute("data-member-user-id") || "").trim();
    if (!memberUserId) {
      return;
    }
    if (typeof closeGroupMemberContextMenu === 'function') {
      closeGroupMemberContextMenu();
    }
    if (typeof openDirectDialogForUser === 'function') {
      void openDirectDialogForUser(memberUserId, { openProfile: true });
    }
  });

  chatProfileMembersList?.addEventListener("contextmenu", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".group-member-row[data-member-user-id]") : null;
    if (!target) {
      return;
    }
    const memberUserId = String(target.getAttribute("data-member-user-id") || "").trim();
    if (!memberUserId) {
      return;
    }

    const isSameTargetOpen = Boolean(
      typeof groupMemberContextMenu !== 'undefined' && groupMemberContextMenu?.classList.contains("open")
      && getWin().groupMemberContextMenuState?.userId
      && String(getWin().groupMemberContextMenuState.userId) === memberUserId
    );

    event.preventDefault();
    if (isSameTargetOpen) {
      if (typeof closeGroupMemberContextMenu === 'function') {
        closeGroupMemberContextMenu();
      }
      return;
    }
    if (typeof openGroupMemberContextMenu === 'function') {
      openGroupMemberContextMenu(event as MouseEvent, memberUserId);
    }
  });

  const onProfileIdentityContextMenu = (event: Event) => {
    if (!getWin().currentDialogSnapshot) {
      return;
    }
    if (typeof getChatProfileDetails !== 'function') {
      return;
    }
    const details = getChatProfileDetails(getWin().currentDialogSnapshot);
    if (!details || !details.username || getWin().currentDialogSnapshot.type === "group") {
      return;
    }
    const isSameTargetOpen = Boolean(
      typeof profileLinkContextMenu !== 'undefined' && profileLinkContextMenu?.classList.contains("open")
      && getWin().profileLinkContextMenuState?.profileUrl
      && String(getWin().profileLinkContextMenuState.profileUrl) === String(details.profileUrl)
    );

    event.preventDefault();
    if (isSameTargetOpen) {
      if (typeof closeProfileLinkContextMenu === 'function') {
        closeProfileLinkContextMenu();
      }
      return;
    }
    if (typeof openProfileLinkContextMenu === 'function') {
      openProfileLinkContextMenu(event as MouseEvent, details.profileUrl);
    }
  };

  if (typeof chatProfileName !== 'undefined' && chatProfileName) {
    chatProfileName.addEventListener("contextmenu", onProfileIdentityContextMenu);
  }
  if (typeof chatProfileLink !== 'undefined' && chatProfileLink) {
    chatProfileLink.addEventListener("contextmenu", onProfileIdentityContextMenu);
  }

  const sidebarProfileUsernameEl = document.getElementById("sidebar-profile-username");
  const sidebarProfileUsernameRow = sidebarProfileUsernameEl?.closest(".sidebar-profile-info-row");

  sidebarProfileUsernameRow?.addEventListener("contextmenu", (event) => {
    const rawUsername = String(getWin().currentUserUsername || "").trim();
    if (!rawUsername) {
      return;
    }
    const profileUrl = window.location.origin + "/@" + encodeURIComponent(rawUsername);

    const isSameTargetOpen = Boolean(
      typeof profileLinkContextMenu !== 'undefined' && profileLinkContextMenu?.classList.contains("open")
      && getWin().profileLinkContextMenuState?.profileUrl
      && String(getWin().profileLinkContextMenuState.profileUrl) === String(profileUrl)
    );

    event.preventDefault();
    if (isSameTargetOpen) {
      if (typeof closeProfileLinkContextMenu === 'function') {
        closeProfileLinkContextMenu();
      }
      return;
    }
    if (typeof openProfileLinkContextMenu === 'function') {
      openProfileLinkContextMenu(event as MouseEvent, profileUrl);
    }
  });

  sidebarProfileUsernameRow?.addEventListener("click", async (event) => {
    if ((event as MouseEvent).button === 2) {
      return;
    }
    const rawUsername = String(getWin().currentUserUsername || "").trim();
    if (!rawUsername) {
      return;
    }
    const profileUrl = window.location.origin + "/@" + encodeURIComponent(rawUsername);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profileUrl);
      } else {
        throw new Error("Clipboard API is not available");
      }
      if (typeof showToast === 'function') {
        showToast("Username link copied", "success");
      }
    } catch {
      if (typeof showToast === 'function') {
        showToast("Failed to copy username link", "error");
      }
    }
  });

  document.getElementById("chat-profile-notifications-btn")?.addEventListener("click", () => {
    const dialog = getWin().currentDialogSnapshot;
    if (!dialog?.publicId || (dialog.type !== "group" && dialog.type !== "channel")) {
      return;
    }
    const readEnabled = typeof isDialogNotificationsEnabled === "function"
      ? isDialogNotificationsEnabled
      : isGroupNotificationsEnabled;
    const writeEnabled = typeof setDialogNotificationsEnabled === "function"
      ? setDialogNotificationsEnabled
      : (typeof setGroupNotificationsEnabled !== "undefined" ? setGroupNotificationsEnabled : null);
    if (typeof readEnabled === "function" && typeof writeEnabled === "function" && typeof syncGroupNotificationsToggle === "function") {
      const nextEnabled = !readEnabled(dialog.publicId);
      writeEnabled(dialog.publicId, nextEnabled);
      syncGroupNotificationsToggle();
      if (typeof getWin().syncComposerState === "function") {
        getWin().syncComposerState();
      }
      if (typeof showToast === "function") {
        showToast(nextEnabled ? t("toast.notificationsEnabled") : t("toast.notificationsMuted"), "info");
      }
    }
  });

  document.getElementById("chat-profile-delete-btn")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this group?")) {
      if (typeof showToast === 'function') {
        showToast("Group deleted", "success");
      }
      if (typeof closeChatProfilePanel === 'function') {
        closeChatProfilePanel();
      }
      if (getWin().currentDialogSnapshot) {
        getWin().allDialogs = getWin().allDialogs.filter((d: any) => d.id !== getWin().currentDialogSnapshot.id);
        if (typeof renderDialogs === 'function') {
          renderDialogs(getWin().allDialogs);
        }
        if (typeof closeDialog === 'function') {
          closeDialog();
        }
      }
    }
  });

  document.getElementById("chat-profile-leave-channel-btn")?.addEventListener("click", async () => {
    const dialog = getWin().currentDialogSnapshot;
    if (!dialog || dialog.type !== "channel" || dialog.channelIsMember !== true || dialog.channelCanPost) {
      return;
    }

    const body: Record<string, string> = {};
    if (dialog.publicId) {
      body.publicId = dialog.publicId;
    } else if (dialog.channelSlug) {
      body.slug = dialog.channelSlug;
    } else if (dialog.channelInviteToken) {
      body.inviteToken = dialog.channelInviteToken;
    } else {
      return;
    }

    try {
      const response = await fetch((getWin().apiBase || "/api") + "/v1/channels/leave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-THG-Protocol": "1"
        },
        body: JSON.stringify(body)
      });
      const payload = await response.json();
      if (!response.ok || !payload?.left) {
        throw new Error(payload?.error || "Failed to leave channel.");
      }

      getWin().allDialogs = (getWin().allDialogs || []).filter((d: any) => d.id !== dialog.id && d.publicId !== dialog.publicId);
      if (typeof renderDialogs === "function") {
        renderDialogs(getWin().allDialogs);
      }
      if (typeof closeChatProfilePanel === "function") {
        closeChatProfilePanel();
      }
      if (typeof closeDialog === "function") {
        closeDialog();
      }
      if (typeof showToast === "function") {
        showToast(t("channel.left") === "channel.left" ? "You left the channel" : t("channel.left"), "success");
      }
    } catch (error) {
      if (typeof showToast === "function") {
        showToast(error instanceof Error ? error.message : "Failed to leave channel.", "error");
      }
    }
  });

  if (typeof chatSearchClose !== 'undefined' && chatSearchClose) {
    chatSearchClose.addEventListener("click", () => {
      if (typeof closeChatSearch === 'function') {
        closeChatSearch();
      }
    });
  }

  if (typeof chatSearchBackdrop !== 'undefined' && chatSearchBackdrop) {
    chatSearchBackdrop.addEventListener("click", () => {
      if (typeof closeChatSearch === 'function') {
        closeChatSearch();
      }
    });
  }

  if (typeof chatSearchInput !== 'undefined' && chatSearchInput) {
    chatSearchInput.addEventListener("input", () => {
      getWin().chatSearchQuery = chatSearchInput.value || "";
      if (typeof renderChatSearchResults === 'function') {
        renderChatSearchResults();
      }
    });

    chatSearchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (typeof closeChatSearch === 'function') {
          closeChatSearch();
        }
      }
    });
  }

  if (typeof chatCallButton !== 'undefined' && chatCallButton) {
    chatCallButton.addEventListener("click", () => {
      if (typeof beginOutgoingCall === 'function') {
        void beginOutgoingCall();
      }
    });
  }

  if (typeof chatGroupVideoButton !== 'undefined' && chatGroupVideoButton) {
    chatGroupVideoButton.addEventListener("click", () => {
      if (typeof beginGroupVideoCall === 'function') {
        void beginGroupVideoCall();
      }
    });
  }

  if (typeof chatCallChip !== 'undefined' && chatCallChip) {
    chatCallChip.addEventListener("click", () => {
      if (typeof restoreCallModal === 'function') {
        restoreCallModal();
      }
    });
  }

  if (typeof callCloseButton !== 'undefined' && callCloseButton) {
    callCloseButton.addEventListener("click", () => {
      if (typeof endOrRejectCall === 'function') {
        void endOrRejectCall();
      }
    });
  }

  if (typeof callExpandButton !== 'undefined' && callExpandButton) {
    callExpandButton.addEventListener("click", () => {
      if (typeof callModal === 'undefined' || !(callModal instanceof HTMLElement)) {
        return;
      }
      const nextExpanded = !callModal.classList.contains("expanded");
      callModal.classList.toggle("expanded", nextExpanded);
      const iconNode = callExpandButton.querySelector(".lucide");
      if (iconNode && getWin().getIcon) {
        iconNode.outerHTML = getWin().getIcon(nextExpanded ? "close_fullscreen" : "open_in_full", iconNode.className);
      }
    });
  }

  if (typeof callMiniOpen !== 'undefined' && callMiniOpen) {
    callMiniOpen.addEventListener("click", () => {
      if (typeof restoreCallModal === 'function') {
        restoreCallModal();
      }
    });
  }

  if (typeof callMiniClose !== 'undefined' && callMiniClose) {
    callMiniClose.addEventListener("click", () => {
      if (typeof dismissMiniCallCard === 'function') {
        dismissMiniCallCard();
      }
    });
  }

  if (typeof callMiniEnd !== 'undefined' && callMiniEnd) {
    callMiniEnd.addEventListener("click", () => {
      if (typeof endOrRejectCall === 'function') {
        void endOrRejectCall();
      }
    });
  }

  if (typeof groupCallBanner !== 'undefined' && groupCallBanner) {
    groupCallBanner.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const endIconPressed = Boolean(target?.closest(".lucide"));
      if (endIconPressed && getWin().activeCall?.mode === "group") {
        event.preventDefault();
        event.stopPropagation();
        if (typeof endOrRejectCall === 'function') {
          void endOrRejectCall();
        }
        return;
      }
      if (getWin().activeCall?.mode === "group") {
        if (typeof restoreCallModal === 'function') {
          restoreCallModal();
        }
        return;
      }
      if (typeof beginGroupVideoCall === 'function') {
        void beginGroupVideoCall();
      }
    });
  }

  if (typeof groupCallJoinStrip !== 'undefined' && groupCallJoinStrip) {
    groupCallJoinStrip.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target && target.closest("button") && !target.closest("#group-call-join-button")) {
        return;
      }
      if (typeof beginGroupVideoCall === 'function') {
        void beginGroupVideoCall();
      }
    });
  }

  if (typeof groupCallJoinButton !== 'undefined' && groupCallJoinButton) {
    groupCallJoinButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (typeof beginGroupVideoCall === 'function') {
        void beginGroupVideoCall();
      }
    });
  }

  if (typeof groupCallLeaveCancel !== 'undefined' && groupCallLeaveCancel) {
    groupCallLeaveCancel.addEventListener("click", () => {
      if (typeof closeGroupLeaveModal === 'function') {
        closeGroupLeaveModal();
      }
    });
  }

  if (typeof groupCallLeaveConfirm !== 'undefined' && groupCallLeaveConfirm) {
    groupCallLeaveConfirm.addEventListener("click", () => {
      if (typeof confirmLeaveGroupCall === 'function') {
        void confirmLeaveGroupCall({
          endForEveryone: Boolean(typeof groupCallEndForAll !== 'undefined' && groupCallEndForAll?.checked)
        });
      }
    });
  }

  if (typeof callMiniDragHandle !== 'undefined' && callMiniDragHandle) {
    callMiniDragHandle.addEventListener("pointerdown", (event) => {
      if (!getWin().activeCall || !getWin().activeCall.minimized || event.button !== 0) {
        return;
      }
      const targetNode = event.target instanceof Element ? event.target : null;
      if (targetNode && targetNode.closest("button")) {
        return;
      }

      if (typeof callOverlay === 'undefined' || typeof callMiniCard === 'undefined') {
        return;
      }
      const overlayRect = callOverlay.getBoundingClientRect();
      const cardRect = callMiniCard.getBoundingClientRect();
      const dragState = {
        pointerId: event.pointerId,
        offsetX: event.clientX - cardRect.left,
        offsetY: event.clientY - cardRect.top,
        cardWidth: cardRect.width,
        cardHeight: cardRect.height,
        overlayLeft: overlayRect.left,
        overlayTop: overlayRect.top,
        overlayWidth: overlayRect.width,
        overlayHeight: overlayRect.height
      };

      callMiniCard.classList.add("dragging");
      callMiniDragHandle.setPointerCapture(event.pointerId);

      const applyPosition = (clientX: number, clientY: number) => {
        const maxLeft = Math.max(0, dragState.overlayWidth - dragState.cardWidth);
        const maxTop = Math.max(0, dragState.overlayHeight - dragState.cardHeight);
        const left = Math.max(0, Math.min(maxLeft, clientX - dragState.overlayLeft - dragState.offsetX));
        const top = Math.max(0, Math.min(maxTop, clientY - dragState.overlayTop - dragState.offsetY));

        callMiniCard.style.left = left + "px";
        callMiniCard.style.top = top + "px";
        callMiniCard.style.right = "auto";
        callMiniCard.style.bottom = "auto";
        if (getWin().activeCall) {
          getWin().activeCall.miniPosition = { left, top };
        }
      };

      const onMove = (moveEvent: PointerEvent) => {
        if (moveEvent.pointerId !== dragState.pointerId) {
          return;
        }
        moveEvent.preventDefault();
        applyPosition(moveEvent.clientX, moveEvent.clientY);
      };

      const finishDrag = (finishEvent: PointerEvent) => {
        if (finishEvent.pointerId !== dragState.pointerId) {
          return;
        }
        window.removeEventListener("pointermove", onMove as any);
        window.removeEventListener("pointerup", finishDrag as any);
        window.removeEventListener("pointercancel", finishDrag as any);
        try {
          callMiniDragHandle.releasePointerCapture(finishEvent.pointerId);
        } catch {}
        callMiniCard.classList.remove("dragging");
      };

      window.addEventListener("pointermove", onMove as any);
      window.addEventListener("pointerup", finishDrag as any);
      window.addEventListener("pointercancel", finishDrag as any);
    });
  }

  if (typeof callAcceptButton !== 'undefined' && callAcceptButton) {
    callAcceptButton.addEventListener("click", () => {
      if (typeof acceptIncomingCall === 'function') {
        void acceptIncomingCall();
      }
    });
  }

  if (typeof callEndButton !== 'undefined' && callEndButton) {
    callEndButton.addEventListener("click", () => {
      if (typeof endOrRejectCall === 'function') {
        void endOrRejectCall();
      }
    });
  }

  if (typeof callMuteButton !== 'undefined' && callMuteButton) {
    callMuteButton.addEventListener("click", () => {
      if (!getWin().activeCall?.localStream) {
        return;
      }

      getWin().activeCall.isMuted = !getWin().activeCall.isMuted;
      getWin().activeCall.localStream.getAudioTracks().forEach((track: any) => {
        track.enabled = !getWin().activeCall.isMuted;
      });
      if (getWin().activeCall.mode === "group") {
        if (typeof upsertGroupParticipant === "function") {
          upsertGroupParticipant(
            getWin().activeCall,
            getWin().currentUserId,
            getWin().currentUserDisplayName || workspaceUserName.textContent || "You",
            Boolean(getWin().activeCall.isMuted),
            !getWin().activeCall.isMuted
          );
        }
        const groupState = typeof groupCallStateByDialog !== "undefined"
          ? groupCallStateByDialog.get(getWin().activeCall.dialogId)
          : null;
        if (groupState) {
          if (!(groupState.participantIds instanceof Set)) {
            groupState.participantIds = new Set();
          }
          groupState.participantIds.add(getWin().currentUserId);
          if (groupState.participantLastSeenAtMap instanceof Map) {
            groupState.participantLastSeenAtMap.set(getWin().currentUserId, Date.now());
          }
          groupState.participantCount = groupState.participantIds.size;
          groupCallStateByDialog.set(getWin().activeCall.dialogId, groupState);
        }
        if (typeof sendCallRealtime === 'function') {
          sendCallRealtime({
            type: "call_presence",
            mode: "group",
            callId: getWin().activeCall.callId,
            dialogId: getWin().activeCall.dialogId,
            dialogPublicId: getWin().activeCall.dialogPublicId,
            participantUserId: getWin().currentUserId,
            participantName: getWin().currentUserDisplayName || workspaceUserName.textContent || "You",
            isMuted: Boolean(getWin().activeCall.isMuted),
            isSpeaking: !getWin().activeCall.isMuted,
            voiceLevel: getWin().activeCall.isMuted ? 0 : (typeof clampVoiceLevel === "function" ? clampVoiceLevel(getWin().groupLocalVoiceLastLevel || 0) : 0)
          });
        }
      } else {
        if (typeof sendCallRealtime === 'function') {
          sendCallRealtime({
            type: "call_mute_state",
            callId: getWin().activeCall.callId,
            dialogId: getWin().activeCall.dialogId,
            dialogPublicId: getWin().activeCall.dialogPublicId,
            isMuted: Boolean(getWin().activeCall.isMuted)
          });
        }
      }
      if (typeof syncCallUi === 'function') {
        syncCallUi();
      }
    });
  }

  if (typeof callVideoButton !== 'undefined' && callVideoButton) {
    callVideoButton.addEventListener("click", () => {
      if (typeof toggleDirectCallCamera === 'function') {
        void toggleDirectCallCamera();
      }
    });
  }

  if (typeof callScreenButton !== 'undefined' && callScreenButton) {
    callScreenButton.addEventListener("click", () => {
      if (typeof toggleDirectCallScreenShare === 'function') {
        void toggleDirectCallScreenShare();
      }
    });
  }

  const mainStageVideoNode = document.getElementById("remote-screen-video");
  mainStageVideoNode?.addEventListener("click", () => {
    if (!getWin().activeCall || getWin().activeCall.mode === "group") {
      return;
    }
    const overlayNode = typeof callModal !== 'undefined' ? callModal?.querySelector?.(".call-screen-overlay") : null;
    const isOverlayOpen = Boolean(overlayNode instanceof HTMLElement && overlayNode.classList.contains("open"));
    if (isOverlayOpen) {
      if (typeof closeExpandedScreenPreview === "function") {
        closeExpandedScreenPreview();
      }
      return;
    }
    if (typeof openExpandedScreenPreview === "function") {
      openExpandedScreenPreview();
    }
  });

  if (typeof callModal !== 'undefined' && callModal) {
    callModal.addEventListener("click", (event) => {
      const targetNode = event.target instanceof Element ? event.target : null;
      if (!targetNode) {
        return;
      }
      if (targetNode.closest("[data-overlay-dismiss='true']")) {
        if (typeof closeExpandedScreenPreview === "function") {
          closeExpandedScreenPreview();
        }
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const overlayNode = typeof callModal !== 'undefined' ? callModal?.querySelector?.(".call-screen-overlay") : null;
      const isOverlayOpen = Boolean(overlayNode instanceof HTMLElement && overlayNode.classList.contains("open"));
      const isCallExpanded = Boolean(typeof callModal !== 'undefined' && callModal instanceof HTMLElement && callModal.classList.contains("expanded"));
      if (isOverlayOpen || isCallExpanded) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (typeof closeExpandedScreenPreview === "function") {
        closeExpandedScreenPreview();
      }
      if (isCallExpanded && typeof callModal !== 'undefined' && callModal instanceof HTMLElement) {
        callModal.classList.remove("expanded");
        if (typeof callExpandButton !== 'undefined' && callExpandButton instanceof HTMLElement) {
          const iconNode = callExpandButton.querySelector(".lucide");
          if (iconNode && getWin().getIcon) {
            iconNode.outerHTML = getWin().getIcon("open_in_full", iconNode.className);
          }
        }
      }
    }
  });

  if (typeof callDevicesButton !== 'undefined' && callDevicesButton) {
    callDevicesButton.addEventListener("click", () => {
      if (typeof callDevicesPanel !== 'undefined' && callDevicesPanel && callDevicesPanel.classList.contains("open")) {
        if (typeof closeCallDevicesPanel === 'function') {
          closeCallDevicesPanel();
        }
        return;
      }

      if (typeof loadCallDevices === 'function' && typeof openCallDevicesPanel === 'function') {
        void loadCallDevices().then(() => {
          openCallDevicesPanel();
        });
      }
    });
  }

  if (typeof callDevicesClose !== 'undefined' && callDevicesClose) {
    callDevicesClose.addEventListener("click", () => {
      if (typeof closeCallDevicesPanel === 'function') {
        closeCallDevicesPanel();
      }
    });
  }

  if (typeof callModal !== 'undefined' && callModal) {
    callModal.addEventListener("pointerdown", (event) => {
      if (typeof callDevicesPanel === 'undefined' || !callDevicesPanel || !callDevicesPanel.classList.contains("open")) {
        return;
      }
      const targetNode = event.target instanceof Node ? event.target : null;
      if (!targetNode) {
        return;
      }
      if (callDevicesPanel.contains(targetNode) || (typeof callDevicesButton !== 'undefined' && callDevicesButton && callDevicesButton.contains(targetNode))) {
        return;
      }
      if (typeof closeCallDevicesPanel === 'function') {
        closeCallDevicesPanel();
      }
    });
  }

  const hideCallEmojiTooltip = () => {
    if (typeof callEmojiTooltip === 'undefined' || !(callEmojiTooltip instanceof HTMLElement)) {
      return;
    }
    callEmojiTooltip.classList.remove("visible");
    callEmojiTooltip.setAttribute("aria-hidden", "true");
  };

  const positionCallEmojiTooltip = (clientX: number, clientY: number) => {
    if (typeof callEmojiTooltip === 'undefined' || !(callEmojiTooltip instanceof HTMLElement) || typeof callOverlay === 'undefined' || !(callOverlay instanceof HTMLElement)) {
      return;
    }
    const offsetX = 14;
    const offsetY = 18;
    const overlayRect = callOverlay.getBoundingClientRect();
    const tooltipWidth = callEmojiTooltip.offsetWidth || 160;
    const tooltipHeight = callEmojiTooltip.offsetHeight || 36;
    const localX = clientX - overlayRect.left;
    const localY = clientY - overlayRect.top;
    const maxLeft = Math.max(8, overlayRect.width - tooltipWidth - 8);
    const maxTop = Math.max(8, overlayRect.height - tooltipHeight - 8);
    const nextLeft = Math.min(maxLeft, Math.max(8, localX + offsetX));
    const nextTop = Math.min(maxTop, Math.max(8, localY + offsetY));
    callEmojiTooltip.style.left = nextLeft + "px";
    callEmojiTooltip.style.top = nextTop + "px";
  };

  if (typeof callOverlay !== 'undefined' && callOverlay) {
    callOverlay.addEventListener("pointermove", (event) => {
      const target = event.target instanceof Element ? event.target.closest(".call-fingerprint-emoji[data-emoji-hint]") : null;
      if (!(target instanceof HTMLElement) || typeof callEmojiTooltip === 'undefined' || !(callEmojiTooltip instanceof HTMLElement)) {
        hideCallEmojiTooltip();
        return;
      }
      const hint = String(target.getAttribute("data-emoji-hint") || "").trim();
      if (!hint) {
        hideCallEmojiTooltip();
        return;
      }
      callEmojiTooltip.textContent = hint;
      callEmojiTooltip.setAttribute("aria-hidden", "false");
      callEmojiTooltip.classList.add("visible");
      positionCallEmojiTooltip(event.clientX, event.clientY);
    });

    callOverlay.addEventListener("pointerleave", () => {
      hideCallEmojiTooltip();
    });
  }

  if (typeof callInputDevice !== 'undefined' && callInputDevice) {
    callInputDevice.addEventListener("change", () => {
      if (typeof replaceLocalAudioTrack === 'function') {
        void replaceLocalAudioTrack(callInputDevice.value);
      }
    });
  }

  if (typeof callOutputDevice !== 'undefined' && callOutputDevice) {
    callOutputDevice.addEventListener("change", () => {
      if (typeof applyCallOutputDevice === 'function') {
        void applyCallOutputDevice(callOutputDevice.value);
      }
    });
  }

  // Smooth Virtual Keyboard & Viewport Handler for tablets & mobile devices
  const initVisualViewportKeyboardHandler = () => {
    const composerInput = document.getElementById("composer-input") as HTMLTextAreaElement | null;
    const composer = document.querySelector(".composer") as HTMLElement | null;
    const chatScrollBottom = document.getElementById("chat-scroll-bottom") as HTMLElement | null;
    const messageList = document.getElementById("message-list") as HTMLElement | null;

    if (!composerInput || !composer) return;

    const syncComposerHeightVar = () => {
      const height = Math.ceil(composer.getBoundingClientRect().height || composer.offsetHeight || 56);
      document.documentElement.style.setProperty("--composer-height", `${Math.max(48, height)}px`);
    };

    let lastKeyboardOffset = 0;
    let rAFId: number | null = null;

    const syncKeyboardOffset = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      syncComposerHeightVar();

      if (!window.visualViewport) return;

      const viewport = window.visualViewport;
      const windowHeight = window.innerHeight;
      const keyboardHeight = Math.max(0, windowHeight - viewport.height - viewport.offsetTop);

      const isInputActive = document.activeElement === composerInput;
      const offset = (isInputActive && keyboardHeight > 50) ? keyboardHeight : 0;

      if (offset !== lastKeyboardOffset) {
        lastKeyboardOffset = offset;
        if (offset > 0) {
          document.body.classList.add("keyboard-active");
          composer.style.transform = `translate3d(0, -${offset}px, 0)`;
          if (chatScrollBottom) {
            chatScrollBottom.style.transform = `translate3d(0, -${offset}px, 0)`;
          }
          if (messageList) {
            messageList.style.paddingBottom = `${offset + Math.max(48, composer.offsetHeight)}px`;
          }
        } else {
          document.body.classList.remove("keyboard-active");
          composer.style.transform = "translate3d(0, 0, 0)";
          if (chatScrollBottom) {
            chatScrollBottom.style.transform = "translate3d(0, 0, 0)";
          }
          if (messageList) {
            messageList.style.paddingBottom = "";
          }
        }
      }
    };

    const scheduleSync = () => {
      if (rAFId) cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(syncKeyboardOffset);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", scheduleSync);
      window.visualViewport.addEventListener("scroll", scheduleSync);
    }

    composerInput.addEventListener("focus", () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      scheduleSync();
      window.setTimeout(scheduleSync, 40);
      window.setTimeout(scheduleSync, 120);
      window.setTimeout(scheduleSync, 250);
      window.setTimeout(scheduleSync, 400);
    });

    composerInput.addEventListener("blur", () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      scheduleSync();
      window.setTimeout(scheduleSync, 40);
      window.setTimeout(scheduleSync, 150);
    });

    window.addEventListener("orientationchange", () => {
      window.setTimeout(scheduleSync, 200);
    });

    syncComposerHeightVar();
    window.addEventListener("resize", syncComposerHeightVar);
    if (typeof ResizeObserver !== "undefined") {
      const composerResizeObserver = new ResizeObserver(() => syncComposerHeightVar());
      composerResizeObserver.observe(composer);
    }
  };

  initVisualViewportKeyboardHandler();

  const initDesktopUpdateHandler = () => {
    const win = window as any;
    if (!win.tgDesktop) {
      return;
    }
    const container = document.querySelector('.sidebar-ai-fab-container');
    const button = document.getElementById('sidebar-ai-button');
    const tooltip = document.querySelector('.sidebar-ai-tooltip');
    if (!(container instanceof HTMLElement) || !(button instanceof HTMLButtonElement)) {
      return;
    }

    const getDownloadIconHtml = (percent: number, isBusy: boolean) => {
      const dashOffset = 100 - percent;
      return '<svg class="sidebar-ai-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36" style="display: block; transform: rotate(-90deg);">' +
        '<defs>' +
          '<linearGradient id="update-grad" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="#818cf8" />' +
            '<stop offset="100%" stop-color="#c084fc" />' +
          '</linearGradient>' +
        '</defs>' +
        '<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2.5" />' +
        '<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="' + (isBusy ? 'url(#update-grad)' : 'rgba(255, 255, 255, 0.3)') + '" stroke-width="3" stroke-dasharray="100, 100" stroke-dashoffset="' + dashOffset + '" stroke-linecap="round" style="transition: stroke-dashoffset 0.15s ease;" />' +
        '<g transform="translate(6, 6)" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M12 3v12" />' +
          '<path d="m7 10 5 5 5-5" />' +
          '<path d="M5 21h14" />' +
        '</g>' +
      '</svg>';
    };

    const applyUpdateMode = (state: any) => {
      const updateStatus = String(state?.status || '');
      const isBusy = updateStatus === 'downloading' || updateStatus === 'installing';
      const isAvailable = updateStatus === 'available' || updateStatus === 'current' || updateStatus === 'idle' || updateStatus === 'error' || updateStatus === 'cancelled';
      if (!isAvailable && !isBusy) {
        return;
      }
      container.classList.add('update-mode');
      button.classList.add('update-mode');
      button.classList.toggle('is-busy', isBusy);
      button.classList.remove('disabled');
      button.disabled = false;
      button.innerHTML = '';
      const iconWrap = document.createElement('span');
      iconWrap.className = 'sidebar-ai-button-icon';
      const percentVal = Math.max(0, Math.min(100, Number(state?.progress || 0)));
      iconWrap.innerHTML = getDownloadIconHtml(percentVal, isBusy);
      const copy = document.createElement('span');
      copy.className = 'sidebar-ai-button-copy';
      const title = document.createElement('span');
      title.className = 'sidebar-ai-button-title';
      title.textContent = isBusy ? 'Updating' : 'Update';
      const subtitle = document.createElement('span');
      subtitle.className = 'sidebar-ai-button-subtitle';
      subtitle.textContent = isBusy ? (Math.max(0, Math.min(100, Number(state?.progress || 0))) + '%') : ('Version ' + String(state?.version || '').replace(/^v/i, ''));
      const action = document.createElement('span');
      action.className = 'sidebar-ai-button-action';
      action.textContent = isBusy ? 'Cancel' : 'Update';
      copy.appendChild(title);
      copy.appendChild(subtitle);
      button.appendChild(iconWrap);
      button.appendChild(copy);
      button.appendChild(action);
      if (tooltip instanceof HTMLElement) {
        tooltip.style.display = 'none';
      }
      button.onclick = () => {
        if (button.dataset.busy === '1') {
          win.tgDesktop.window.cancelUpdate();
          return;
        }
        win.tgDesktop.window.updateApp();
      };
      button.dataset.busy = isBusy ? '1' : '0';
    };

    const blockRefresh = (event: KeyboardEvent) => {
      const key = String(event.key || '').toLowerCase();
      if (key === 'f5' || ((event.ctrlKey || event.metaKey) && key === 'r') || ((event.ctrlKey || event.metaKey) && key === 'f5')) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    window.addEventListener('keydown', blockRefresh, true);

    if (win.tgDesktop.onUpdateState) {
      win.tgDesktop.onUpdateState((state: any) => {
        if (state?.status === 'available' || state?.status === 'downloading' || state?.status === 'installing' || state?.status === 'error' || state?.status === 'cancelled') {
          applyUpdateMode(state);
        }
      });
    }
    if (win.tgDesktop.onUpdateProgress) {
      win.tgDesktop.onUpdateProgress((progress: number) => {
        applyUpdateMode({ status: 'downloading', progress });
      });
    }
  };

  initDesktopUpdateHandler();
});
