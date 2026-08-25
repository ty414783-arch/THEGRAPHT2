export type LegacyCallDeviceOption = {
  deviceId: string;
  label: string;
};

export type LegacyCallParticipantCardState = {
  id: string;
  name: string;
  muted: boolean;
  imageSrc?: string;
  avatarStyle?: string;
};

export type LegacyCallGroupRowState = {
  userId: string;
  name: string;
  isMuted: boolean;
  voiceLevel: number;
  avatarUrl: string;
  avatarStyle: string;
  avatarLetter: string;
};

export type LegacyCallAvatarState = {
  avatarUrl: string;
  letter: string;
  style: string;
};

export function buildLegacyCallParticipantInitials(name: string): string {
  const parts = String(name || "Guest")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return ((parts.map((part) => part.charAt(0)).join("")) || "G").toUpperCase();
}

export function buildLegacyCallDeviceOptions(
  devices: MediaDeviceInfo[],
  fallbackPrefix: string
): LegacyCallDeviceOption[] {
  return devices.map((device, index) => ({
    deviceId: device.deviceId,
    label: device.label || `${fallbackPrefix} ${index + 1}`
  }));
}
