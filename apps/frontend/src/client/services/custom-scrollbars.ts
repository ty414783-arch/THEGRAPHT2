export {};

type ScrollbarEntry = {
  element: HTMLElement;
  rail: HTMLDivElement;
  thumb: HTMLDivElement;
  resizeObserver: ResizeObserver | null;
  hideTimer: number | null;
  update: () => void;
};

const entries = new Map<HTMLElement, ScrollbarEntry>();
const scrollableSelector = [
  ".dialog-list",
  ".message-list",
  ".language-list-container",
  ".active-sessions-body",
  ".sidebar-profile-body",
  ".functional-settings-list",
  ".chat-search-results",
  ".chat-profile-panel-body",
  ".group-create-list",
  ".group-create-details-list",
  ".emoji-picker-body",
  ".premium-modal-body",
  ".attachment-modal-strip",
  ".call-devices-panel",
  ".call-participants-grid"
].join(",");

const clamp = (minimum: number, value: number, maximum: number) => Math.min(maximum, Math.max(minimum, value));

const getTopLayer = () => {
  const layers = Array.from(document.querySelectorAll<HTMLElement>([
    ".functional-settings-overlay.open",
    ".session-confirm-modal-overlay.open",
    ".media-modal.open",
    ".premium-modal-overlay.open",
    ".sidebar-profile-panel.open",
    ".group-create-panel.open"
  ].join(","))).filter((layer) => {
    const style = getComputedStyle(layer);
    return style.visibility !== "hidden" && style.display !== "none" && Number(style.opacity || 1) > 0;
  });
  return layers.at(-1) || null;
};

const shouldShowForLayer = (element: HTMLElement) => {
  const topLayer = getTopLayer();
  if (topLayer && !topLayer.contains(element)) return false;

  // Modal shells are intentionally kept mounted for their exit animation.
  // Their content still has geometry while closed, so key visibility off the
  // actual `.open` state rather than that geometry or aria attributes alone.
  const overlay = element.closest<HTMLElement>([
    ".sidebar-profile-panel",
    ".functional-settings-overlay",
    ".session-confirm-modal-overlay",
    ".media-modal",
    ".premium-modal-overlay",
    ".group-create-panel"
  ].join(","));
  if (overlay && !overlay.classList.contains("open")) return false;
  return true;
};

const isActuallyVisible = (element: HTMLElement) => {
  if (!element.isConnected || element.getClientRects().length === 0) return false;
  if (element.closest(".hidden, [aria-hidden='true']")) return false;
  let node: HTMLElement | null = element;
  while (node && node !== document.body) {
    const style = getComputedStyle(node);
    if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity || "1") < 0.05) return false;
    node = node.parentElement;
  }
  return true;
};

const attachScrollbar = (element: HTMLElement) => {
  if (entries.has(element)) return;

  element.classList.add("tg-custom-scroll");
  const rail = document.createElement("div");
  rail.className = "tg-scrollbar-rail";
  rail.setAttribute("aria-hidden", "true");
  const thumb = document.createElement("div");
  thumb.className = "tg-scrollbar-thumb";
  rail.appendChild(thumb);
  document.body.appendChild(rail);

  let dragStartY = 0;
  let dragStartScrollTop = 0;
  let railTravel = 0;
  let contentTravel = 0;
  let hideTimer: number | null = null;

  const setActive = (active: boolean, delay = 0) => {
    if (hideTimer) {
      window.clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (active) {
      rail.classList.add("active");
      return;
    }
    hideTimer = window.setTimeout(() => {
      rail.classList.remove("active");
      hideTimer = null;
    }, delay);
  };

  const pulse = () => {
    setActive(true);
    setActive(false, 900);
  };

  const update = () => {
    if (!element.isConnected) {
      if (hideTimer) window.clearTimeout(hideTimer);
      rail.remove();
      entries.delete(element);
      return;
    }

    const rect = element.getBoundingClientRect();
    const overflow = element.scrollHeight - element.clientHeight;
    const visible = rect.width > 8
      && rect.height > 28
      && overflow > 3
      && rect.bottom > 0
      && rect.top < window.innerHeight
      && isActuallyVisible(element)
      && shouldShowForLayer(element);

    rail.classList.toggle("visible", visible);
    if (!visible) {
      setActive(false);
      return;
    }

    const edgeInset = rect.height < 180 ? 5 : 8;
    const railHeight = Math.max(24, rect.height - edgeInset * 2);
    const thumbHeight = clamp(44, railHeight * 0.16, 68);
    railTravel = Math.max(0, railHeight - thumbHeight);
    contentTravel = overflow;
    const progress = overflow > 0 ? clamp(0, element.scrollTop / overflow, 1) : 0;

    rail.style.top = `${Math.round(rect.top + edgeInset)}px`;
    rail.style.left = `${Math.round(rect.right - 13)}px`;
    rail.style.height = `${Math.round(railHeight)}px`;
    thumb.style.height = `${Math.round(thumbHeight)}px`;
    thumb.style.transform = `translate3d(0, ${Math.round(progress * railTravel)}px, 0)`;
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!thumb.hasPointerCapture(event.pointerId) || contentTravel <= 0 || railTravel <= 0) return;
    const delta = event.clientY - dragStartY;
    element.scrollTop = dragStartScrollTop + (delta / railTravel) * contentTravel;
  };

  const endDrag = (event: PointerEvent) => {
    if (thumb.hasPointerCapture(event.pointerId)) thumb.releasePointerCapture(event.pointerId);
    thumb.classList.remove("dragging");
  };

  thumb.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragStartY = event.clientY;
    dragStartScrollTop = element.scrollTop;
    thumb.setPointerCapture(event.pointerId);
    thumb.classList.add("dragging");
    setActive(true);
  });
  thumb.addEventListener("pointermove", onPointerMove);
  thumb.addEventListener("pointerup", endDrag);
  thumb.addEventListener("pointercancel", endDrag);
  element.addEventListener("scroll", () => {
    update();
    pulse();
  }, { passive: true });
  element.addEventListener("pointerenter", () => setActive(true));
  element.addEventListener("pointerleave", () => {
    if (!thumb.classList.contains("dragging")) setActive(false, 280);
  });

  const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(update) : null;
  resizeObserver?.observe(element);
  entries.set(element, { element, rail, thumb, resizeObserver, hideTimer, update });
  update();
};

let scheduled = false;
const scanAndUpdate = () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    document.querySelectorAll<HTMLElement>(scrollableSelector).forEach(attachScrollbar);
    entries.forEach((entry) => entry.update());
  });
};

const initialize = () => {
  scanAndUpdate();
  const observer = new MutationObserver((mutations) => {
    const isScrollbarMutation = mutations.every((m) => {
      const target = m.target as HTMLElement;
      return target?.classList?.contains("tg-scrollbar-rail") || target?.classList?.contains("tg-scrollbar-thumb");
    });
    if (!isScrollbarMutation) {
      scanAndUpdate();
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class", "style", "hidden"] });
  window.addEventListener("resize", scanAndUpdate, { passive: true });
  window.addEventListener("orientationchange", scanAndUpdate, { passive: true });
  window.addEventListener("thegrapht:language-changed", scanAndUpdate);
  window.addEventListener("thegrapht:settings-changed", scanAndUpdate);
  window.setInterval(scanAndUpdate, 3000);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize, { once: true });
} else {
  initialize();
}
