type LegacyCallScreenOverlayShellProps = {
  getIconHtml: string;
};

export function LegacyCallScreenOverlayShell({ getIconHtml }: LegacyCallScreenOverlayShellProps) {
  return (
    <>
      <div class="call-screen-overlay-backdrop" data-overlay-dismiss="true" />
      <div class="call-screen-overlay-content">
        <div class="call-screen-overlay-title" />
        <div class="call-screen-overlay-stage" data-overlay-dismiss="true" />
        <div class="call-screen-overlay-hud">
          {getIconHtml ? (
            <span style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: getIconHtml }} />
          ) : null}
          <span class="call-screen-overlay-owner" />
        </div>
      </div>
    </>
  );
}
