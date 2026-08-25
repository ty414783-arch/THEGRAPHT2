type LegacyCallParticipantMicProps = {
  muted: boolean;
};

export function LegacyCallParticipantMic({ muted }: LegacyCallParticipantMicProps) {
  const getIcon = (window as any).getIcon as ((name: string, cls?: string, attrs?: string) => string) | undefined;
  if (typeof getIcon !== "function") {
    return null;
  }

  return (
    <span
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{
        __html: getIcon(
          muted ? "mic_off" : "mic",
          "participant-mic call-participant-mic" + (muted ? " muted" : "")
        )
      }}
    />
  );
}
