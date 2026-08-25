import { h, render } from "preact";
import { LegacyGifPickerBody } from "./LegacyGifPickerBody.tsx";
import type { LegacyGifPickerViewState } from "./legacyGifPickerSync.ts";

export function renderLegacyGifPicker(
  bodyEl: HTMLElement,
  state: LegacyGifPickerViewState,
  onGifSelect: (gifUrl: string) => void
) {
  render(
    h(LegacyGifPickerBody, {
      state,
      onGifSelect
    }),
    bodyEl
  );
}
