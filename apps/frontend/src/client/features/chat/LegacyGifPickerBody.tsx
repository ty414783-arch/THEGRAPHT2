import type { LegacyGifItem, LegacyGifPickerViewState } from "./legacyGifPickerSync.ts";

type LegacyGifPickerBodyProps = {
  state: LegacyGifPickerViewState;
  onGifSelect: (gifUrl: string) => void;
};

function LegacyGifEmptyState({
  iconName,
  text,
  spinning = false
}: {
  iconName: string;
  text: string;
  spinning?: boolean;
}) {
  return (
    <div class="gif-empty-state">
      <span
        class="lucide"
        aria-hidden="true"
        style={spinning ? "display: inline-block; animation: spin 1s linear infinite;" : undefined}
      >
        {iconName}
      </span>
      <div class="gif-empty-state-text">{text}</div>
    </div>
  );
}

function LegacyGifGrid({
  items,
  onGifSelect,
  className = "gif-grid",
  style
}: {
  items: Array<LegacyGifItem | string>;
  onGifSelect: (gifUrl: string) => void;
  className?: string;
  style?: Record<string, string>;
}) {
  const buttons = items.map((item) => {
    const originalUrl = typeof item === "string" ? item : item.originalUrl;
    const previewUrl = typeof item === "string" ? item : item.previewUrl;
    return (
      <button
        key={originalUrl}
        class="gif-grid-item"
        type="button"
        data-gif-url={originalUrl}
        onClick={() => onGifSelect(originalUrl)}
      >
        <img
          src={previewUrl}
          alt="GIF"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </button>
    );
  });

  if (!className) {
    return <>{buttons}</>;
  }

  return (
    <div class={className} style={style}>
      {buttons}
    </div>
  );
}

export function LegacyGifPickerBody({ state, onGifSelect }: LegacyGifPickerBodyProps) {
  if (state.mode === "search-loading") {
    return <LegacyGifEmptyState iconName="autorenew" text="Поиск в Giphy..." spinning />;
  }

  if (state.mode === "search-empty") {
    return <LegacyGifEmptyState iconName="gif_box" text="Ничего не найдено" />;
  }

  if (state.mode === "search-error") {
    return <LegacyGifEmptyState iconName="error" text="Ошибка поиска" />;
  }

  if (state.mode === "search-results") {
    return (
      <>
        <p class="emoji-picker-title" style={{ marginTop: "4px", marginBottom: "10px" }}>
          Результаты поиска
        </p>
        <LegacyGifGrid items={state.searchResults} onGifSelect={onGifSelect} />
      </>
    );
  }

  return (
    <>
      {state.recentGifs.length > 0 ? (
        <>
          <p class="emoji-picker-title" style={{ marginTop: "4px", marginBottom: "10px" }}>
            Недавние
          </p>
          <LegacyGifGrid
            items={state.recentGifs}
            onGifSelect={onGifSelect}
            style={{ marginBottom: "16px" }}
          />
        </>
      ) : null}
      <p class="emoji-picker-title" style={{ marginTop: "4px", marginBottom: "10px" }}>
        Рекомендуемые
      </p>
      {state.mode === "home-loading" ? (
        <div id="giphy-trending-container">
          <LegacyGifEmptyState iconName="autorenew" text="Загрузка рекомендаций..." spinning />
        </div>
      ) : null}
      {state.mode === "trending-unavailable" ? (
        <div id="giphy-trending-container">
          <LegacyGifEmptyState iconName="gif_box" text="Рекомендации недоступны" />
        </div>
      ) : null}
      {state.mode === "home-ready" ? (
        <div id="giphy-trending-container">
          <LegacyGifGrid items={state.trendingItems} onGifSelect={onGifSelect} />
        </div>
      ) : null}
    </>
  );
}
