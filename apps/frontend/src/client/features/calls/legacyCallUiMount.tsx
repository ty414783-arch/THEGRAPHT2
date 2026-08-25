import { h, render, Fragment } from "preact";
import { LegacyCallDeviceOptions } from "./LegacyCallDeviceOptions.tsx";
import { LegacyCallGroupRow } from "./LegacyCallGroupRow.tsx";
import { LegacyCallParticipantCard } from "./LegacyCallParticipantCard.tsx";
import { LegacyCallAvatarPhoto } from "./LegacyCallAvatarPhoto.tsx";
import { LegacyCallFingerprintBody } from "./LegacyCallFingerprintBody.tsx";
import { LegacyCallParticipantMic } from "./LegacyCallParticipantMic.tsx";
import { LegacyCallScreenOverlayShell } from "./LegacyCallScreenOverlayShell.tsx";
import type {
  LegacyCallAvatarState,
  LegacyCallDeviceOption,
  LegacyCallGroupRowState,
  LegacyCallParticipantCardState
} from "./legacyCallUiSync.ts";

export function renderLegacyCallDeviceOptions(
  selectEl: HTMLSelectElement,
  options: LegacyCallDeviceOption[]
) {
  render(h(LegacyCallDeviceOptions, { options }), selectEl);
}

export function renderLegacyCallParticipantsGrid(
  gridEl: HTMLElement,
  cards: LegacyCallParticipantCardState[]
) {
  render(
    h(Fragment, null, cards.map((card) => h(LegacyCallParticipantCard, { key: card.id, ...card }))),
    gridEl
  );
}

export function clearLegacyCallParticipantsGrid(gridEl: HTMLElement) {
  render(null, gridEl);
}

export function renderLegacyCallGroupList(
  listEl: HTMLElement,
  rows: LegacyCallGroupRowState[]
) {
  render(
    h(Fragment, null, rows.map((row) => h(LegacyCallGroupRow, { key: row.userId || row.name, ...row }))),
    listEl
  );
}

export function renderLegacyCallAvatarPhoto(
  containerEl: HTMLElement,
  state: LegacyCallAvatarState
) {
  containerEl.style.cssText = state.style || "";
  render(h(LegacyCallAvatarPhoto, state), containerEl);
}

export function renderLegacyCallFingerprint(
  nodeEl: HTMLElement,
  markupHtml: string
) {
  render(h(LegacyCallFingerprintBody, { markupHtml }), nodeEl);
}

export function renderLegacyCallParticipantMic(
  micEl: HTMLElement,
  muted: boolean
) {
  render(h(LegacyCallParticipantMic, { muted }), micEl);
}

export function mountLegacyCallScreenOverlayShell(
  overlayEl: HTMLElement,
  getIconHtml: string
) {
  render(h(LegacyCallScreenOverlayShell, { getIconHtml }), overlayEl);
}

export function clearLegacyCallScreenOverlayStage(stageEl: HTMLElement) {
  render(null, stageEl);
}
