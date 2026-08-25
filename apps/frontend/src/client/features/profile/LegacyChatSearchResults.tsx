import type { LegacyChatSearchViewState } from "./legacyChatSearchSync.ts";

type LegacyChatSearchResultsProps = {
  state: LegacyChatSearchViewState;
  onResultClick: (messageId: string) => void;
};

export function LegacyChatSearchResults({ state, onResultClick }: LegacyChatSearchResultsProps) {
  if (state.mode === "empty-query" || state.mode === "no-results") {
    return <div class="chat-search-empty">{state.emptyMessage}</div>;
  }

  return (
    <>
      {state.items.map((item) => (
        <button
          key={item.id}
          class="chat-search-result"
          type="button"
          data-search-message-id={item.id}
          onClick={() => onResultClick(item.id)}
        >
          {item.avatarHtml ? (
            <span style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: item.avatarHtml }} />
          ) : null}
          <div class="chat-search-result-copy">
            <div class="chat-search-result-line">
              <span class="chat-search-result-name">{item.name}</span>
              <span class="chat-search-result-time">{item.timeLabel}</span>
            </div>
            <div class="chat-search-result-text">{item.body}</div>
          </div>
        </button>
      ))}
    </>
  );
}
