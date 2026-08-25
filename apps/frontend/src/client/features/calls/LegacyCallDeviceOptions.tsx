import type { LegacyCallDeviceOption } from "./legacyCallUiSync.ts";

type LegacyCallDeviceOptionsProps = {
  options: LegacyCallDeviceOption[];
};

export function LegacyCallDeviceOptions({ options }: LegacyCallDeviceOptionsProps) {
  return (
    <>
      {options.map((option) => (
        <option key={option.deviceId || option.label} value={option.deviceId}>
          {option.label}
        </option>
      ))}
    </>
  );
}
