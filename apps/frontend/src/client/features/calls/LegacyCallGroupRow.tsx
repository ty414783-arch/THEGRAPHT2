import type { LegacyCallGroupRowState } from "./legacyCallUiSync.ts";

type LegacyCallGroupRowProps = LegacyCallGroupRowState;

export function LegacyCallGroupRow({
  name,
  isMuted,
  voiceLevel,
  avatarUrl,
  avatarStyle,
  avatarLetter
}: LegacyCallGroupRowProps) {
  const getIcon = (window as any).getIcon as ((name: string, cls?: string, attrs?: string) => string) | undefined;
  const isSpeaking = !isMuted;
  const isTalkingNow = isSpeaking && voiceLevel > 0.035;
  const rowState = isMuted ? "listening" : "speaking";

  return (
    <div class={"call-group-row" + (isSpeaking ? " speaking" : "")}>
      <div class="call-group-row-left">
        <div
          class={"call-group-row-avatar-shell" + (isTalkingNow ? " talking" : "")}
          style={{ "--voice-level": voiceLevel.toFixed(3) }}
        >
          <div class={"call-group-row-avatar" + (isSpeaking ? " speaking" : "")} style={avatarStyle || undefined}>
            <img class="generated-avatar-photo" src={avatarUrl} alt={avatarLetter} />
          </div>
        </div>
        <div class="call-group-row-meta">
          <div class="call-group-row-name">{name}</div>
          <div class="call-group-row-state">{rowState}</div>
        </div>
      </div>
      {typeof getIcon === "function" ? (
        <span
          style={{ display: "contents" }}
          dangerouslySetInnerHTML={{
            __html: getIcon(
              isMuted ? "mic_off" : "mic",
              "call-group-row-mic" + (isMuted ? " muted" : " active"),
              'aria-hidden="true"'
            )
          }}
        />
      ) : null}
    </div>
  );
}
