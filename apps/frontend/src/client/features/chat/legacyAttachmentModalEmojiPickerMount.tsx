import { h, render } from "preact";
import { LegacyEmojiPickerBody } from "./LegacyEmojiPickerBody.tsx";
import { LegacyEmojiPickerHead } from "./LegacyEmojiPickerHead.tsx";
import { buildLegacyEmojiPickerSections } from "./legacyEmojiPickerSync.ts";

export type LegacyAttachmentModalEmojiPickerOptions = {
  headEl: HTMLElement;
  bodyEl: HTMLElement;
  query: string;
  onEmojiSelect: (emoji: string) => void;
};

let attachmentModalActiveTabKey: string | null = null;

const scrollToEmojiSection = (bodyEl: HTMLElement, key: string) => {
  const targetSection = bodyEl.querySelector('[data-emoji-section="' + key + '"]');
  if (!(targetSection instanceof HTMLElement)) {
    return;
  }
  const targetScrollTop = targetSection.getBoundingClientRect().top
    - bodyEl.getBoundingClientRect().top
    + bodyEl.scrollTop;
  bodyEl.scrollTo({
    top: targetScrollTop,
    behavior: "smooth"
  });
};

export function renderLegacyAttachmentModalEmojiPicker({
  headEl,
  bodyEl,
  query,
  onEmojiSelect
}: LegacyAttachmentModalEmojiPickerOptions) {
  const sections = buildLegacyEmojiPickerSections(query);
  if (!attachmentModalActiveTabKey || !sections.some((section) => section.key === attachmentModalActiveTabKey)) {
    attachmentModalActiveTabKey = sections[0]?.key ?? null;
  }

  const handleTabClick = (key: string) => {
    attachmentModalActiveTabKey = key;
    render(
      h(LegacyEmojiPickerHead, {
        sections,
        activeTabKey: key,
        onTabClick: handleTabClick
      }),
      headEl
    );
    scrollToEmojiSection(bodyEl, key);
  };

  render(
    h(LegacyEmojiPickerHead, {
      sections,
      activeTabKey: attachmentModalActiveTabKey,
      onTabClick: handleTabClick
    }),
    headEl
  );
  render(
    h(LegacyEmojiPickerBody, {
      sections,
      onEmojiSelect
    }),
    bodyEl
  );
}

export function resetLegacyAttachmentModalEmojiPickerTabState() {
  attachmentModalActiveTabKey = null;
}
