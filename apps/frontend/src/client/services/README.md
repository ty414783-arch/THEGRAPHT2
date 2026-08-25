# Client services migration status

Legacy imperative services in this directory remain as fallback when `UI_NEW_*=0`.

## Migrated to Preact + store

- Auth → `features/auth/AuthView.tsx` + `BootSplash.tsx` (`UI_NEW_AUTH_UI=1`)
- Message bubbles / status → `features/chat/MessageBubble.tsx`
- Composer + uploads → `features/chat/Composer.tsx` + `store/uploads`
- Dialog list → `features/sidebar/*` (`DialogItem`, search, compose, empty state)
- Workspace routing → `features/workspace/routing.ts`, `WorkspaceRouter.tsx`
- Chat header / profile / context menu → `features/profile/*`
- Media bubbles → `features/chat/ImageMessage.tsx`, `AlbumMessage.tsx`, `AudioMessage.tsx`
- Realtime store bridge → `store/effects/realtime.ts` + `api/realtime.ts`
- Connection banner → `features/realtime/ConnectionBanner.tsx`
- Secure decrypt hook → `features/secure/useSecureMessageBody.ts` (lazy `services/secure.ts`)
- Settings shell → `features/settings/SettingsPanel.tsx`
- Calls shell → `features/calls/CallShell.tsx` (WebRTC/LiveKit stays in `services/calls/*`)
- Thin SSR shell → `server/page-template.js` when any `UI_NEW_*=1`

## Feature flags (dev)

- `UI_NEW_CHAT_UI=1`
- `UI_NEW_SIDEBAR=1`
- `UI_NEW_AUTH_UI=1`

## Still legacy (fallback only)

- `sidebar.ts` — `loadWorkspace`, session bootstrap
- `bootstrap.ts`, `auth.ts` (legacy path)
- `message-rendering.ts` — skipped when `UI_NEW_CHAT_UI=1`
- Full SSR markup — only when all `UI_NEW_*=0`

New UI path lazy-loads legacy modules only where needed (secure, calls signaling). Delete remaining services after production parity and full E2E green.
