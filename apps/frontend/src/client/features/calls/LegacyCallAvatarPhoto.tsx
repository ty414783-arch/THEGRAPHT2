import type { LegacyCallAvatarState } from "./legacyCallUiSync.ts";

type LegacyCallAvatarPhotoProps = LegacyCallAvatarState;

export function LegacyCallAvatarPhoto({
  avatarUrl,
  letter,
  style
}: LegacyCallAvatarPhotoProps) {
  return (
    <img
      class="generated-avatar-photo"
      src={avatarUrl}
      alt={letter}
      style={style ? undefined : undefined}
    />
  );
}

export function renderLegacyCallAvatarContainer(
  containerEl: HTMLElement,
  state: LegacyCallAvatarState
) {
  containerEl.style.cssText = state.style || "";
}
