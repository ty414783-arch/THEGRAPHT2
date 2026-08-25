type LegacyCallFingerprintBodyProps = {
  markupHtml: string;
};

export function LegacyCallFingerprintBody({ markupHtml }: LegacyCallFingerprintBodyProps) {
  if (!markupHtml) {
    return null;
  }

  return <span style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markupHtml }} />;
}
