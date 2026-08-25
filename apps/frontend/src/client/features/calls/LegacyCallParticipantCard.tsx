import type { LegacyCallParticipantCardState } from "./legacyCallUiSync.ts";
import { buildLegacyCallParticipantInitials } from "./legacyCallUiSync.ts";

type LegacyCallParticipantCardProps = LegacyCallParticipantCardState;

export function LegacyCallParticipantCard({
  id,
  name,
  muted,
  imageSrc = "",
  avatarStyle = ""
}: LegacyCallParticipantCardProps) {
  const getIcon = (window as any).getIcon as ((name: string, cls?: string, attrs?: string) => string) | undefined;

  return (
    <div class="participant-card call-participant-card" data-participant-id={id}>
      <div class="participant-avatar call-participant-avatar" style={avatarStyle || undefined}>
        {imageSrc ? (
          <img
            class="generated-avatar-photo"
            src={imageSrc}
            alt={buildLegacyCallParticipantInitials(name)}
          />
        ) : (
          buildLegacyCallParticipantInitials(name)
        )}
      </div>
      <div class="participant-name call-participant-meta">
        <span class="call-participant-name">{name}</span>
        {typeof getIcon === "function" ? (
          <span
            style={{ display: "contents" }}
            dangerouslySetInnerHTML={{
              __html: getIcon(
                muted ? "mic_off" : "mic",
                "participant-mic call-participant-mic" + (muted ? " muted" : ""),
                'aria-hidden="true"'
              )
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
