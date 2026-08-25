import { t } from "../i18n";

export {};

type ToggleSetting = {
  type: "toggle";
  key: string;
  labelKey: string;
  descriptionKey: string;
  defaultValue: boolean;
};

type ActionSetting = {
  type: "action";
  key: string;
  labelKey: string;
  descriptionKey: string;
};

type Setting = ToggleSetting | ActionSetting;
type SectionDefinition = { titleKey: string; items: Setting[] };

const definitions: Record<string, SectionDefinition> = {
  notifications: { titleKey: "settings.notifications", items: [
    { type: "toggle", key: "desktopNotifications", labelKey: "settings.notifications.desktop.label", descriptionKey: "settings.notifications.desktop.desc", defaultValue: true },
    { type: "toggle", key: "messageSounds", labelKey: "settings.notifications.sounds.label", descriptionKey: "settings.notifications.sounds.desc", defaultValue: true },
    { type: "toggle", key: "previewText", labelKey: "settings.notifications.preview.label", descriptionKey: "settings.notifications.preview.desc", defaultValue: true },
    { type: "toggle", key: "privateNotifications", labelKey: "settings.notifications.private.label", descriptionKey: "settings.notifications.private.desc", defaultValue: true },
    { type: "toggle", key: "groupNotifications", labelKey: "settings.notifications.groups.label", descriptionKey: "settings.notifications.groups.desc", defaultValue: true },
    { type: "toggle", key: "mentionNotifications", labelKey: "settings.notifications.mentions.label", descriptionKey: "settings.notifications.mentions.desc", defaultValue: true }
  ]},
  storage: { titleKey: "settings.dataStorage", items: [
    { type: "toggle", key: "dataSaver", labelKey: "settings.storage.dataSaver.label", descriptionKey: "settings.storage.dataSaver.desc", defaultValue: false },
    { type: "toggle", key: "preloadMedia", labelKey: "settings.storage.preload.label", descriptionKey: "settings.storage.preload.desc", defaultValue: true },
    { type: "toggle", key: "autoDownloadPhotos", labelKey: "settings.storage.autoPhotos.label", descriptionKey: "settings.storage.autoPhotos.desc", defaultValue: true },
    { type: "toggle", key: "autoplayVideo", labelKey: "settings.storage.autoplayVideo.label", descriptionKey: "settings.storage.autoplayVideo.desc", defaultValue: true },
    { type: "toggle", key: "autoplayGif", labelKey: "settings.storage.autoplayGif.label", descriptionKey: "settings.storage.autoplayGif.desc", defaultValue: true },
    { type: "action", key: "clearCache", labelKey: "settings.storage.clearCache.label", descriptionKey: "settings.storage.clearCache.desc" }
  ]},
  privacy: { titleKey: "settings.privacy", items: [
    { type: "toggle", key: "showOnline", labelKey: "settings.privacy.online.label", descriptionKey: "settings.privacy.online.desc", defaultValue: true },
    { type: "toggle", key: "readReceipts", labelKey: "settings.privacy.readReceipts.label", descriptionKey: "settings.privacy.readReceipts.desc", defaultValue: true },
    { type: "toggle", key: "typingIndicators", labelKey: "settings.privacy.typing.label", descriptionKey: "settings.privacy.typing.desc", defaultValue: true },
    { type: "toggle", key: "linkPreviews", labelKey: "settings.privacy.linkPreviews.label", descriptionKey: "settings.privacy.linkPreviews.desc", defaultValue: true },
    { type: "toggle", key: "screenLock", labelKey: "settings.privacy.screenLock.label", descriptionKey: "settings.privacy.screenLock.desc", defaultValue: false },
    { type: "toggle", key: "privateNotificationText", labelKey: "settings.privacy.notificationText.label", descriptionKey: "settings.privacy.notificationText.desc", defaultValue: false }
  ]},
  general: { titleKey: "settings.general", items: [
    { type: "toggle", key: "smoothMotion", labelKey: "settings.general.motion.label", descriptionKey: "settings.general.motion.desc", defaultValue: true },
    { type: "toggle", key: "compactDialogs", labelKey: "settings.general.compact.label", descriptionKey: "settings.general.compact.desc", defaultValue: false },
    { type: "toggle", key: "sendOnEnter", labelKey: "settings.general.enter.label", descriptionKey: "settings.general.enter.desc", defaultValue: true },
    { type: "toggle", key: "spellcheck", labelKey: "settings.general.spellcheck.label", descriptionKey: "settings.general.spellcheck.desc", defaultValue: true },
    { type: "toggle", key: "clock24Hour", labelKey: "settings.general.clock.label", descriptionKey: "settings.general.clock.desc", defaultValue: true },
    { type: "toggle", key: "messageAnimations", labelKey: "settings.general.messageMotion.label", descriptionKey: "settings.general.messageMotion.desc", defaultValue: true }
  ]},
  folders: { titleKey: "settings.chatFolders", items: [
    { type: "toggle", key: "folderUnread", labelKey: "settings.folders.unread.label", descriptionKey: "settings.folders.unread.desc", defaultValue: true },
    { type: "toggle", key: "folderGroups", labelKey: "settings.folders.groups.label", descriptionKey: "settings.folders.groups.desc", defaultValue: true },
    { type: "toggle", key: "folderDirect", labelKey: "settings.folders.direct.label", descriptionKey: "settings.folders.direct.desc", defaultValue: true },
    { type: "toggle", key: "folderMuted", labelKey: "settings.folders.muted.label", descriptionKey: "settings.folders.muted.desc", defaultValue: false }
  ]},
  stickers: { titleKey: "settings.stickers", items: [
    { type: "toggle", key: "animatedEmoji", labelKey: "settings.stickers.animated.label", descriptionKey: "settings.stickers.animated.desc", defaultValue: true },
    { type: "toggle", key: "emojiSuggestions", labelKey: "settings.stickers.suggestions.label", descriptionKey: "settings.stickers.suggestions.desc", defaultValue: true },
    { type: "toggle", key: "largeEmoji", labelKey: "settings.stickers.large.label", descriptionKey: "settings.stickers.large.desc", defaultValue: true },
    { type: "toggle", key: "reactionAnimations", labelKey: "settings.stickers.reactions.label", descriptionKey: "settings.stickers.reactions.desc", defaultValue: true }
  ]}
};

const storageKey = "thegrapht_user_settings_v1";
const activeFolderKey = "thegrapht_active_dialog_folder";
const escapeHtml = (value: unknown) => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const defaultPreferences = Object.values(definitions)
  .flatMap((section) => section.items)
  .reduce<Record<string, boolean>>((result, item) => {
    if (item.type === "toggle") result[item.key] = item.defaultValue;
    return result;
  }, {});

const readPrefs = (): Record<string, boolean> => {
  try {
    return { ...defaultPreferences, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
  } catch {
    return { ...defaultPreferences };
  }
};

const writePrefs = (preferences: Record<string, boolean>) => {
  localStorage.setItem(storageKey, JSON.stringify(preferences));
};

const icon = (name: string, className = "") => {
  const renderer = (window as any).getIcon;
  return typeof renderer === "function" ? renderer(name, className, 'aria-hidden="true"') : "";
};

const getFolderDefinitions = (preferences: Record<string, boolean>) => [
  { id: "all", label: t("settings.folders.all"), enabled: true },
  { id: "unread", label: t("settings.folders.unread"), enabled: preferences.folderUnread },
  { id: "groups", label: t("settings.folders.groups"), enabled: preferences.folderGroups },
  { id: "direct", label: t("settings.folders.direct"), enabled: preferences.folderDirect },
  { id: "muted", label: t("settings.folders.muted"), enabled: preferences.folderMuted }
].filter((folder) => folder.enabled);

const applyDialogFolderFilter = () => {
  const preferences = readPrefs();
  const available = getFolderDefinitions(preferences);
  let activeFolder = localStorage.getItem(activeFolderKey) || "all";
  if (!available.some((folder) => folder.id === activeFolder)) activeFolder = "all";

  document.querySelectorAll<HTMLElement>(".dialog-item[data-dialog-type]").forEach((dialog) => {
    const type = dialog.dataset.dialogType || "";
    const unread = Number(dialog.dataset.dialogUnread || 0) > 0;
    const muted = dialog.dataset.dialogMuted === "true";
    const visible = activeFolder === "all"
      || (activeFolder === "unread" && unread)
      || (activeFolder === "groups" && type === "group")
      || (activeFolder === "direct" && ["direct", "private", "secret"].includes(type))
      || (activeFolder === "muted" && muted);
    dialog.hidden = !visible;
  });

  document.querySelectorAll<HTMLElement>(".dialog-folder-chip").forEach((chip) => {
    const selected = chip.dataset.folder === activeFolder;
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-selected", String(selected));
  });
};

const renderFolderBar = (preferences: Record<string, boolean>) => {
  const dialogList = document.getElementById("dialog-list");
  const sidebar = dialogList?.parentElement;
  if (!dialogList || !sidebar) return;

  let bar = document.getElementById("dialog-folder-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "dialog-folder-bar";
    bar.className = "dialog-folder-bar";
    bar.setAttribute("role", "tablist");
    sidebar.insertBefore(bar, dialogList);
  }

  const folders = getFolderDefinitions(preferences);
  bar.innerHTML = folders.map((folder) => (
    `<button class="dialog-folder-chip" type="button" role="tab" data-folder="${escapeHtml(folder.id)}">${escapeHtml(folder.label)}</button>`
  )).join("");
  bar.classList.toggle("is-single", folders.length === 1);
  bar.querySelectorAll<HTMLElement>("[data-folder]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(activeFolderKey, button.dataset.folder || "all");
      applyDialogFolderFilter();
    });
  });
  applyDialogFolderFilter();
};

const applyMediaPreferences = (preferences: Record<string, boolean>) => {
  document.querySelectorAll<HTMLVideoElement>(".message video, .viewer-modal video, .dialog-list video").forEach((video) => {
    const isGif = video.loop || video.classList.contains("gif-media");
    const allowPlayback = isGif ? preferences.autoplayGif : preferences.autoplayVideo;
    video.autoplay = Boolean(allowPlayback && !preferences.dataSaver);
    video.preload = preferences.preloadMedia && !preferences.dataSaver ? "metadata" : "none";
    if (!video.autoplay && !video.paused) video.pause();
  });
};

const applyComposerPreferences = (preferences: Record<string, boolean>) => {
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("#composer-input, #attachment-modal-caption").forEach((input) => {
    input.spellcheck = preferences.spellcheck;
  });
};

const applyPreferences = (preferences = readPrefs()) => {
  document.body.classList.toggle("tg-compact-dialogs", preferences.compactDialogs);
  document.body.classList.toggle("tg-reduce-motion", !preferences.smoothMotion);
  document.body.classList.toggle("tg-no-message-motion", !preferences.messageAnimations);
  document.body.classList.toggle("tg-data-saver", preferences.dataSaver);
  document.body.classList.toggle("tg-link-previews-disabled", !preferences.linkPreviews);
  document.body.classList.toggle("tg-large-emoji", preferences.largeEmoji);
  document.body.classList.toggle("tg-static-emoji", !preferences.animatedEmoji);
  document.body.classList.toggle("tg-static-reactions", !preferences.reactionAnimations);
  document.body.classList.toggle("tg-emoji-suggestions-disabled", !preferences.emojiSuggestions);
  document.body.classList.toggle("tg-screen-lock-enabled", preferences.screenLock);
  (window as any).__THEGRAPHT_USER_SETTINGS__ = preferences;
  renderFolderBar(preferences);
  applyMediaPreferences(preferences);
  applyComposerPreferences(preferences);
};

const updateWindowPrivacy = () => {
  document.body.classList.remove("tg-window-private");
};

const clearLocalMediaCache = async () => {
  if ("caches" in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
  }
  Object.keys(localStorage)
    .filter((key) => /^thegrapht_(media|image|attachment)_/i.test(key))
    .forEach((key) => localStorage.removeItem(key));
  (window as any).showToast?.(t("settings.storage.cacheCleared"), "success");
};

let currentSection = "";
let rootToolsReady = false;

const ensureRootSettingsTools = () => {
  if (rootToolsReady) return;
  const rootCard = document.querySelector<HTMLElement>("#sidebar-profile-panel > .sidebar-profile-card");
  const rootHeader = rootCard?.querySelector<HTMLElement>(".sidebar-profile-header");
  const rootBody = rootCard?.querySelector<HTMLElement>(".sidebar-profile-body");
  const searchButton = rootHeader?.querySelector<HTMLButtonElement>(".sidebar-profile-search");
  const moreButton = rootHeader?.querySelector<HTMLButtonElement>(".sidebar-profile-more");
  if (!rootCard || !rootHeader || !rootBody || !searchButton || !moreButton) return;

  const searchWrap = document.createElement("div");
  searchWrap.className = "settings-root-search-wrap";
  searchWrap.setAttribute("aria-hidden", "true");
  searchWrap.innerHTML = `${icon("search")}<input class="settings-root-search-input" type="search" autocomplete="off">`;
  rootBody.insertBefore(searchWrap, rootBody.firstChild);
  const searchInput = searchWrap.querySelector<HTMLInputElement>("input");

  const moreMenu = document.createElement("div");
  moreMenu.className = "settings-root-more-menu";
  moreMenu.setAttribute("aria-hidden", "true");
  moreMenu.innerHTML = `<button type="button" data-settings-reset>${icon("autorenew")}<span></span></button>`;
  rootHeader.appendChild(moreMenu);

  const syncLabels = () => {
    if (searchInput) {
      searchInput.placeholder = t("search.placeholder");
      searchInput.setAttribute("aria-label", t("search.placeholder"));
    }
    const resetLabel = moreMenu.querySelector("span");
    if (resetLabel) resetLabel.textContent = t("common.reset");
  };

  const filterRows = () => {
    const query = String(searchInput?.value || "").trim().toLocaleLowerCase();
    rootBody.querySelectorAll<HTMLElement>(".sidebar-profile-setting-row, .sidebar-profile-premium-row").forEach((row) => {
      row.hidden = Boolean(query) && !String(row.textContent || "").toLocaleLowerCase().includes(query);
    });
    const visibleRows = rootBody.querySelectorAll(".sidebar-profile-setting-row:not([hidden]), .sidebar-profile-premium-row:not([hidden])").length;
    rootBody.classList.toggle("settings-search-empty", Boolean(query) && visibleRows === 0);
  };

  const closeSearch = () => {
    searchWrap.classList.remove("open");
    searchWrap.setAttribute("aria-hidden", "true");
    searchButton.setAttribute("aria-expanded", "false");
    if (searchInput) searchInput.value = "";
    filterRows();
  };

  searchButton.setAttribute("aria-expanded", "false");
  searchButton.addEventListener("click", () => {
    const opening = !searchWrap.classList.contains("open");
    moreMenu.classList.remove("open");
    moreMenu.setAttribute("aria-hidden", "true");
    searchWrap.classList.toggle("open", opening);
    searchWrap.setAttribute("aria-hidden", String(!opening));
    searchButton.setAttribute("aria-expanded", String(opening));
    if (opening) window.setTimeout(() => searchInput?.focus(), 30);
    else closeSearch();
  });
  searchInput?.addEventListener("input", filterRows);

  moreButton.setAttribute("aria-expanded", "false");
  moreButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const opening = !moreMenu.classList.contains("open");
    moreMenu.classList.toggle("open", opening);
    moreMenu.setAttribute("aria-hidden", String(!opening));
    moreButton.setAttribute("aria-expanded", String(opening));
  });

  moreMenu.querySelector("[data-settings-reset]")?.addEventListener("click", () => {
    writePrefs({ ...defaultPreferences });
    localStorage.removeItem(activeFolderKey);
    applyPreferences({ ...defaultPreferences });
    updateWindowPrivacy();
    if (currentSection) renderSection(currentSection);
    window.dispatchEvent(new CustomEvent("thegrapht:settings-changed", { detail: { ...defaultPreferences } }));
    (window as any).showToast?.(t("common.reset"), "success");
    moreMenu.classList.remove("open");
    moreMenu.setAttribute("aria-hidden", "true");
    moreButton.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (!moreMenu.contains(event.target as Node) && !moreButton.contains(event.target as Node)) {
      moreMenu.classList.remove("open");
      moreMenu.setAttribute("aria-hidden", "true");
      moreButton.setAttribute("aria-expanded", "false");
    }
  });
  window.addEventListener("thegrapht:language-changed", () => {
    syncLabels();
    filterRows();
  });
  window.addEventListener("thegrapht:settings-root-close-search", closeSearch);
  syncLabels();
  rootToolsReady = true;
};

const ensurePanel = () => {
  let panel = document.getElementById("functional-settings-panel");
  if (panel) return panel;

  panel = document.createElement("aside");
  panel.id = "functional-settings-panel";
  panel.className = "functional-settings-overlay";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="functional-settings-card" role="dialog" aria-modal="true">
      <header class="functional-settings-header">
        <button class="functional-settings-nav" data-settings-close type="button" aria-label="${escapeHtml(t("common.back"))}">${icon("arrow_back")}</button>
        <div class="functional-settings-heading"><h3></h3><p>${escapeHtml(t("settings.sectionHint"))}</p></div>
        <button class="functional-settings-nav" data-settings-close type="button" aria-label="${escapeHtml(t("common.close"))}">${icon("close")}</button>
      </header>
      <div class="functional-settings-list"></div>
      <footer class="functional-settings-footer">${icon("check")}<span>${escapeHtml(t("common.savedAutomatically"))}</span></footer>
    </div>`;
  document.body.appendChild(panel);
  panel.querySelectorAll("[data-settings-close]").forEach((button) => button.addEventListener("click", () => {
    panel?.classList.remove("open");
    panel?.setAttribute("aria-hidden", "true");
  }));
  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      panel?.classList.remove("open");
      panel?.setAttribute("aria-hidden", "true");
    }
  });
  return panel;
};

const renderSection = (section: string) => {
  const definition = definitions[section];
  if (!definition) return;
  currentSection = section;
  const panel = ensurePanel();
  const title = panel.querySelector("h3");
  const hint = panel.querySelector(".functional-settings-heading p");
  const footer = panel.querySelector(".functional-settings-footer span");
  const list = panel.querySelector(".functional-settings-list");
  if (title) title.textContent = t(definition.titleKey);
  if (hint) hint.textContent = t("settings.sectionHint");
  if (footer) footer.textContent = t("common.savedAutomatically");

  const preferences = readPrefs();
  if (list) {
    list.innerHTML = definition.items.map((item) => {
      if (item.type === "action") {
        return `<button class="functional-setting-row functional-setting-action" type="button" data-setting-action="${escapeHtml(item.key)}">
          <span><strong>${escapeHtml(t(item.labelKey))}</strong><small>${escapeHtml(t(item.descriptionKey))}</small></span>${icon("trash-2")}
        </button>`;
      }
      const checked = preferences[item.key];
      return `<label class="functional-setting-row">
        <span><strong>${escapeHtml(t(item.labelKey))}</strong><small>${escapeHtml(t(item.descriptionKey))}</small></span>
        <input type="checkbox" data-pref-key="${escapeHtml(item.key)}" ${checked ? "checked" : ""}>
        <i class="functional-toggle" aria-hidden="true"></i>
      </label>`;
    }).join("");
  }

  list?.querySelectorAll<HTMLInputElement>("[data-pref-key]").forEach((input) => input.addEventListener("change", async () => {
    const next = readPrefs();
    next[input.dataset.prefKey || ""] = input.checked;
    writePrefs(next);
    applyPreferences(next);
    updateWindowPrivacy();
    if (input.dataset.prefKey === "desktopNotifications" && input.checked && "Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission().catch(() => "denied");
    }
    if (input.dataset.prefKey === "showOnline" && !input.checked) {
      (window as any).sendActiveState?.(false);
    } else if (input.dataset.prefKey === "showOnline" && input.checked) {
      (window as any).sendCurrentPresence?.();
    }
    window.dispatchEvent(new CustomEvent("thegrapht:settings-changed", { detail: next }));
  }));
  list?.querySelectorAll<HTMLElement>("[data-setting-action]").forEach((button) => button.addEventListener("click", async () => {
    if (button.dataset.settingAction === "clearCache") await clearLocalMediaCache();
  }));
};

const openSection = (section: string) => {
  renderSection(section);
  const panel = ensurePanel();
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
};

const initialize = () => {
  applyPreferences();
  updateWindowPrivacy();
  ensureRootSettingsTools();
  document.querySelectorAll<HTMLElement>("[data-settings-section]").forEach((row) => {
    row.addEventListener("click", () => openSection(row.dataset.settingsSection || ""));
  });
};

(window as any).getTheGraphTPreferences = readPrefs;
(window as any).applyDialogFolderFilter = applyDialogFolderFilter;

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
else initialize();

window.addEventListener("thegrapht:settings-changed", updateWindowPrivacy);
window.addEventListener("thegrapht:language-changed", () => {
  applyPreferences();
  if (currentSection && document.getElementById("functional-settings-panel")?.classList.contains("open")) renderSection(currentSection);
});
window.addEventListener("play", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLVideoElement) || !target.closest(".message, .viewer-modal, .dialog-list")) return;
  const preferences = readPrefs();
  const isGif = target.loop || target.classList.contains("gif-media");
  if (preferences.dataSaver || (isGif ? !preferences.autoplayGif : !preferences.autoplayVideo)) target.pause();
}, true);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const panel = document.getElementById("functional-settings-panel");
  if (panel?.classList.contains("open")) {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }
});
