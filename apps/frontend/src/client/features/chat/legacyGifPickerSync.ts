export type LegacyGifItem = {
  previewUrl: string;
  originalUrl: string;
};

export type LegacyGifPickerViewState = {
  mode: "search-loading" | "search-empty" | "search-results" | "home-loading" | "home-ready" | "search-error" | "trending-unavailable";
  recentGifs: string[];
  searchResults: LegacyGifItem[];
  trendingItems: LegacyGifItem[];
};

export function mapLegacyGifApiItems(items: any[] = []): LegacyGifItem[] {
  return items.map((item) => {
    const previewUrl = item?.images?.fixed_height_downsampled?.url
      || item?.images?.fixed_height?.url
      || item?.images?.original?.url
      || "";
    const originalUrl = item?.images?.downsized?.url
      || item?.images?.original?.url
      || previewUrl;
    return {
      previewUrl: String(previewUrl || ""),
      originalUrl: String(originalUrl || "")
    };
  }).filter((item) => item.originalUrl);
}

export function readLegacyRecentGifs(): string[] {
  const readRecentGifs = (window as any).readRecentGifs;
  return typeof readRecentGifs === "function" ? readRecentGifs() : [];
}

export function buildLegacyGifPickerSearchLoadingState(): LegacyGifPickerViewState {
  return {
    mode: "search-loading",
    recentGifs: [],
    searchResults: [],
    trendingItems: []
  };
}

export function buildLegacyGifPickerSearchEmptyState(): LegacyGifPickerViewState {
  return {
    mode: "search-empty",
    recentGifs: [],
    searchResults: [],
    trendingItems: []
  };
}

export function buildLegacyGifPickerSearchResultsState(items: LegacyGifItem[]): LegacyGifPickerViewState {
  return {
    mode: "search-results",
    recentGifs: [],
    searchResults: items,
    trendingItems: []
  };
}

export function buildLegacyGifPickerSearchErrorState(): LegacyGifPickerViewState {
  return {
    mode: "search-error",
    recentGifs: [],
    searchResults: [],
    trendingItems: []
  };
}

export function buildLegacyGifPickerHomeLoadingState(): LegacyGifPickerViewState {
  return {
    mode: "home-loading",
    recentGifs: readLegacyRecentGifs(),
    searchResults: [],
    trendingItems: []
  };
}

export function buildLegacyGifPickerHomeReadyState(trendingItems: LegacyGifItem[]): LegacyGifPickerViewState {
  return {
    mode: trendingItems.length ? "home-ready" : "trending-unavailable",
    recentGifs: readLegacyRecentGifs(),
    searchResults: [],
    trendingItems
  };
}
