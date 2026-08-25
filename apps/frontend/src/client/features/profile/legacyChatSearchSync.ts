export type LegacyChatSearchResultItem = {
  id: string;
  name: string;
  timeLabel: string;
  body: string;
  avatarHtml: string;
};

export type LegacyChatSearchViewState = {
  mode: "empty-query" | "no-results" | "results";
  items: LegacyChatSearchResultItem[];
  emptyMessage?: string;
};

export function buildLegacyChatSearchEmptyQueryState(): LegacyChatSearchViewState {
  return {
    mode: "empty-query",
    items: [],
    emptyMessage: "Type a word or phrase to search messages."
  };
}

export function buildLegacyChatSearchNoResultsState(): LegacyChatSearchViewState {
  return {
    mode: "no-results",
    items: [],
    emptyMessage: "No results found."
  };
}

export function buildLegacyChatSearchResultsState(items: LegacyChatSearchResultItem[]): LegacyChatSearchViewState {
  return {
    mode: "results",
    items
  };
}
