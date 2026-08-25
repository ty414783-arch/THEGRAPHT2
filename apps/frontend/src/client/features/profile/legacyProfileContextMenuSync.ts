import type { LegacyDialogContextMenuAction } from "../sidebar/legacyDialogContextMenuSync.ts";

export function getProfileLinkContextMenuActions(): LegacyDialogContextMenuAction[] {
  const getIcon = (window as any).getIcon;
  return [
    {
      key: "copy-username-link",
      label: "Copy Username",
      iconHtml: typeof getIcon === "function" ? getIcon("content_copy", "", 'aria-hidden="true"') : ""
    }
  ];
}

export function getGroupMemberContextMenuActions(): LegacyDialogContextMenuAction[] {
  const getIcon = (window as any).getIcon;
  return [
    {
      key: "send-message",
      label: "Send Message",
      iconHtml: typeof getIcon === "function" ? getIcon("chat", "", 'aria-hidden="true"') : ""
    }
  ];
}
