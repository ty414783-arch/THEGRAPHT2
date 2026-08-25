export type LegacyToastItem = {
  id: string;
  message: string;
  type: string;
};

export function createLegacyToastItem(message: string, type = "info"): LegacyToastItem {
  return {
    id: "toast_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    message,
    type
  };
}
