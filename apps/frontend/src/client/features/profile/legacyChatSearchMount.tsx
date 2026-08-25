import { h, render } from "preact";
import { LegacyChatSearchResults } from "./LegacyChatSearchResults.tsx";
import type { LegacyChatSearchViewState } from "./legacyChatSearchSync.ts";

export function renderLegacyChatSearchResults(
  resultsEl: HTMLElement,
  state: LegacyChatSearchViewState,
  onResultClick: (messageId: string) => void
) {
  render(
    h(LegacyChatSearchResults, {
      state,
      onResultClick
    }),
    resultsEl
  );
}

export function clearLegacyChatSearchResults(resultsEl: HTMLElement | null) {
  if (!resultsEl) {
    return;
  }
  render(null, resultsEl);
}
