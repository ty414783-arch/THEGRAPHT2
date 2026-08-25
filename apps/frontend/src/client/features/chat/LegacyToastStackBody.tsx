import type { LegacyToastItem } from "./legacyToastSync.ts";

type LegacyToastStackBodyProps = {
  toasts: LegacyToastItem[];
};

export function LegacyToastStackBody({ toasts }: LegacyToastStackBodyProps) {
  return (
    <>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          class={"toast " + toast.type}
          data-legacy-toast-id={toast.id}
        >
          {toast.message}
        </div>
      ))}
    </>
  );
}
