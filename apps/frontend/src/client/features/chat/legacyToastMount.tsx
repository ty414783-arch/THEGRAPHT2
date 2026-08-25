import { h, render } from "preact";
import { LegacyToastStackBody } from "./LegacyToastStackBody.tsx";
import { createLegacyToastItem, type LegacyToastItem } from "./legacyToastSync.ts";

let activeToasts: LegacyToastItem[] = [];
let toastStackEl: HTMLElement | null = null;
const dismissTimers = new Map<string, number>();

const renderLegacyToastStack = () => {
  if (!toastStackEl) {
    return;
  }
  render(h(LegacyToastStackBody, { toasts: activeToasts }), toastStackEl);
};

const scheduleLegacyToastDismiss = (toastId: string) => {
  const fadeTimer = window.setTimeout(() => {
    const toastNode = toastStackEl?.querySelector(`[data-legacy-toast-id="${toastId}"]`);
    if (toastNode instanceof HTMLElement) {
      toastNode.style.opacity = "0";
      toastNode.style.transform = "translateY(8px)";
    }
    const removeTimer = window.setTimeout(() => {
      activeToasts = activeToasts.filter((toast) => toast.id !== toastId);
      dismissTimers.delete(toastId);
      renderLegacyToastStack();
    }, 180);
    dismissTimers.set(toastId + ":remove", removeTimer);
  }, 3400);
  dismissTimers.set(toastId, fadeTimer);
};

export function mountLegacyToastStack(rootEl: HTMLElement | null = document.getElementById("toast-stack")) {
  toastStackEl = rootEl;
  renderLegacyToastStack();
}

export function showLegacyToast(message: string, type = "info") {
  if (!message) {
    return;
  }
  if (!toastStackEl) {
    mountLegacyToastStack();
  }
  if (!toastStackEl) {
    return;
  }

  const toast = createLegacyToastItem(message, type);
  activeToasts = activeToasts.concat(toast);
  renderLegacyToastStack();

  scheduleLegacyToastDismiss(toast.id);
}
