export const messengerDesignSystemStyles = `
      /* ================================================================
         TheGraphT messenger design system
         This is intentionally the final cascade layer. It normalizes the
         legacy screens without changing their runtime contracts.
         ================================================================ */
      @property --sidebar-width {
        syntax: "<length>";
        inherits: true;
        initial-value: 380px;
      }

      @property --sidebar-collapse {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
      }

      :root {
        --tg-font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --tg-font-weight-regular: 400;
        --tg-font-weight-medium: 500;
        --tg-font-weight-semibold: 600;
        --tg-font-weight-bold: 700;
        --tg-blue: #2f7df4;
        --tg-blue-strong: #1769e8;
        --tg-violet: #7567de;
        --tg-ink: #172033;
        --tg-muted: #718198;
        --tg-line: rgba(148, 163, 184, 0.24);
        --tg-surface: rgba(255, 255, 255, 0.96);
        --tg-surface-soft: #f5f8fc;
        --tg-surface-hover: #edf3fa;
        --tg-radius-xs: 10px;
        --tg-radius-sm: 14px;
        --tg-radius-md: 18px;
        --tg-radius-lg: 24px;
        --tg-radius-xl: 30px;
        --tg-shadow-panel: 0 22px 70px rgba(15, 23, 42, 0.18), 0 2px 12px rgba(15, 23, 42, 0.07);
        --tg-shadow-float: 0 14px 42px rgba(15, 23, 42, 0.16), 0 2px 8px rgba(15, 23, 42, 0.06);
        --tg-spring: cubic-bezier(0.16, 1, 0.3, 1);
        --tg-soft: cubic-bezier(0.22, 0.61, 0.36, 1);
        --workspace-gutter: 12px;
        --tg-sidebar-column-width: var(--sidebar-width, 380px);
        --sidebar-collapse: 0;
      }

      html,
      body,
      button,
      input,
      textarea,
      select,
      .page {
        font-family: var(--tg-font-family, "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
        font-optical-sizing: auto;
        font-variation-settings: "wdth" 100;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .workspace-sidebar,
      .workspace-main,
      .dialog-item,
      .dialog-title,
      .dialog-preview,
      .dialog-meta,
      .message,
      .message-body,
      .message-meta,
      .message-sender,
      .chat-island,
      .chat-island-text,
      .chat-subtitle,
      .composer,
      .composer-input,
      .composer-input-placeholder,
      .sidebar-search-input,
      .sidebar-search-field,
      .workspace-brand h1,
      .brand-text-title,
      .functional-settings-panel,
      .settings-section,
      .empty-chat-state,
      .toast,
      .modal-card {
        font-family: var(--tg-font-family, "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif) !important;
      }

      html.sidebar-ready,
      html.sidebar-ready .workspace-shell {
        transition: --sidebar-width 0.42s cubic-bezier(0.16, 1, 0.3, 1), --sidebar-collapse 0.42s cubic-bezier(0.16, 1, 0.3, 1);
      }

      html.sidebar-resizing,
      html.sidebar-resizing .workspace-shell {
        transition: none !important;
      }

      html:has(.page.workspace-mode),
      body:has(.page.workspace-mode) {
        width: 100%;
        height: 100%;
        min-height: 100%;
        overflow: hidden !important;
        overscroll-behavior: none;
      }

      .page.workspace-mode {
        box-sizing: border-box;
        width: 100vw !important;
        height: 100dvh !important;
        min-height: 0;
        padding: 12px !important;
        overflow: hidden !important;
        display: flex !important;
        align-items: stretch !important;
        justify-content: stretch !important;
        background: linear-gradient(130deg, #d3e78e 0%, #8ec57f 40%, #74b469 70%, #b2dd94 100%) !important;
        position: relative !important;
      }

      .page.workspace-mode::before {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        background-image: url("/assets/wallpaper.svg") !important;
        background-repeat: repeat !important;
        background-position: center top !important;
        background-size: 540px auto !important;
        opacity: 0.16 !important;
        mix-blend-mode: multiply !important;
        pointer-events: none !important;
        z-index: 0 !important;
      }

      .page.workspace-mode > * {
        position: relative !important;
        z-index: 1 !important;
      }

      html:not(:has(.page.workspace-mode)),
      body:not(:has(.page.workspace-mode)) {
        width: 100% !important;
        height: auto !important;
        min-height: 100dvh !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .auth-bg-canvas {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        pointer-events: none !important;
        z-index: 0 !important;
        overflow: hidden !important;
      }

      .auth-bg-layer {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        pointer-events: none !important;
        background: linear-gradient(130deg, #d3e78e 0%, #8ec57f 40%, #74b469 70%, #b2dd94 100%) !important;
        opacity: 1 !important;
      }

      .auth-bg-wallpaper {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background-image: url("/assets/wallpaper.svg") !important;
        background-repeat: repeat !important;
        background-position: center top !important;
        background-size: 540px auto !important;
        opacity: 0.16 !important;
        mix-blend-mode: multiply !important;
        pointer-events: none !important;
        z-index: 2 !important;
      }

      body:has(.workspace-mode) .auth-bg-canvas,
      .page.workspace-mode .auth-bg-canvas,
      .auth-bg-canvas.hidden {
        display: none !important;
      }

      .page:not(.workspace-mode) {
        box-sizing: border-box !important;
        width: 100% !important;
        min-height: 100dvh !important;
        height: auto !important;
        padding: 32px 16px 48px !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: transparent !important;
        position: relative !important;
      }

      .page:not(.workspace-mode) > * {
        position: relative !important;
        z-index: 1 !important;
      }

      #auth-view,
      #auth-view *,
      .auth-single-tile,
      .auth-single-tile *,
      .auth-panel,
      .auth-panel *,
      .brand-panel,
      .brand-panel *,
      .auth-card,
      .auth-card *,
      .auth-kicker,
      .auth-title,
      .auth-copy,
      .field label,
      .field input,
      #auth-form input,
      #auth-form button,
      #verification-form input,
      #verification-form button,
      #verification-code,
      #submit-button,
      #verify-button,
      #toggle-mode,
      #meta-text,
      .meta-row,
      .resend-btn,
      .resend-timer-text,
      .resend-attempts-text,
      .status {
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      }

      .page:not(.workspace-mode) #auth-view {
        width: 100% !important;
        max-width: 440px !important;
        margin: auto !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .page:not(.workspace-mode) #auth-view.hidden {
        display: none !important;
      }

      .auth-single-tile {
        width: 100% !important;
        max-width: 440px !important;
        border-radius: 28px !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25) !important;
        border: 1px solid rgba(255, 255, 255, 0.9) !important;
        overflow: hidden !important;
        display: flex !important;
        flex-direction: column !important;
        margin: 0 auto !important;
      }

      .brand-panel {
        padding: 36px 24px 16px !important;
        border: none !important;
        background: #ffffff !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .brand-stack {
        text-align: center !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
      }

      .logo-mark {
        width: 110px !important;
        height: 110px !important;
        margin: 0 auto 16px !important;
        border-radius: 50% !important;
        overflow: hidden !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: #ffffff !important;
        box-shadow: 0 10px 28px -4px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
        flex-shrink: 0 !important;
      }

      .logo-mark .logo-image,
      .logo-image {
        width: 100% !important;
        height: 100% !important;
        max-width: none !important;
        max-height: none !important;
        object-fit: cover !important;
        display: block !important;
        border-radius: 50% !important;
      }

      .brand-title-glass {
        margin: 0 !important;
        font-size: 38px !important;
        font-weight: 800 !important;
        color: #0b0d10 !important;
        letter-spacing: -0.04em !important;
      }

      .auth-panel {
        padding: 4px 28px 32px !important;
        background: #ffffff !important;
        border: none !important;
      }

      .auth-card {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
      }

      .auth-inner {
        width: 100% !important;
      }

      .view.hidden,
      .page.workspace-mode .view.hidden,
      .page.workspace-mode #auth-view.hidden,
      .page:not(.workspace-mode) #workspace-view.hidden,
      .hidden {
        display: none !important;
        position: absolute !important;
        visibility: hidden !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        opacity: 0 !important;
      }

      .page.workspace-mode #workspace-view:not(.hidden),
      .page.workspace-mode .view:not(.hidden) {
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
      }

      .workspace-shell {
        width: 100% !important;
        height: 100% !important;
        min-height: 0 !important;
        display: grid !important;
        grid-template-columns: var(--sidebar-width, 380px) minmax(0, 1fr) !important;
        gap: 12px !important;
        overflow: visible !important;
        background: transparent !important;
        margin: 0 !important;
      }

      .workspace-sidebar {
        min-width: 0 !important;
        min-height: 0 !important;
        height: 100% !important;
        border-radius: var(--tg-radius-md) !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
        isolation: isolate;
        margin: 0 !important;
        padding: 12px 12px 10px !important;
        background: rgba(255, 255, 255, 0.985) !important;
        color: var(--tg-ink) !important;
        overflow: hidden !important;
      }

      .workspace-main {
        min-width: 0 !important;
        min-height: 0 !important;
        height: 100% !important;
        border-radius: var(--tg-radius-md) !important;
        border: 0 !important;
        box-shadow: none !important;
        isolation: isolate;
        padding: 0 !important;
        overflow: hidden !important;
        background: transparent !important;
        position: relative !important;
      }

      .workspace-main::before {
        display: none !important;
      }

      .sidebar-resize-handle {
        right: 0 !important;
        width: 10px !important;
        z-index: 30 !important;
        cursor: col-resize !important;
      }

      .sidebar-resize-handle::before {
        right: 3px !important;
        top: 28px !important;
        bottom: 28px !important;
        width: 3px !important;
        border-radius: 999px !important;
        background: rgba(112, 117, 121, 0.28) !important;
        opacity: 0 !important;
        transition: opacity 0.18s ease, background 0.18s ease !important;
      }

      .workspace-sidebar:hover .sidebar-resize-handle::before,
      html.sidebar-resizing .sidebar-resize-handle::before {
        opacity: 1 !important;
        background: rgba(47, 125, 244, 0.55) !important;
      }

      .workspace-brand {
        min-height: 44px !important;
        margin: 0 0 6px !important;
        padding: 0 2px !important;
      }

      .workspace-brand-leading {
        gap: 11px !important;
        overflow: hidden;
      }

      .workspace-brand h1,
      .brand-text-title {
        min-width: 0;
        margin: 0 !important;
        color: #111827 !important;
        font-family: inherit !important;
        font-size: clamp(19px, 1.45vw, 24px) !important;
        font-weight: 650 !important;
        line-height: 1.1 !important;
        letter-spacing: -0.025em !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: opacity 0.22s ease, transform 0.34s var(--tg-spring), color 0.22s ease !important;
      }



      .workspace-brand-menu,
      .sidebar-profile-back,
      .sidebar-profile-edit,
      .sidebar-profile-more,
      .sidebar-profile-search,
      .sidebar-profile-close,
      .functional-settings-nav {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        border: 1px solid rgba(148, 163, 184, 0.22) !important;
        border-radius: 50% !important;
        background: #f1f5f9 !important;
        color: #334155 !important;
        box-shadow: none !important;
        transition: transform 0.2s ease, background 0.18s ease, color 0.18s ease !important;
      }

      .workspace-brand-menu:hover,
      .sidebar-profile-back:hover,
      .sidebar-profile-edit:hover,
      .sidebar-profile-more:hover,
      .sidebar-profile-search:hover,
      .sidebar-profile-close:hover,
      .functional-settings-nav:hover {
        transform: none !important;
        color: #0f172a !important;
        background: #e2e8f0 !important;
        box-shadow: none !important;
      }

      .workspace-brand-menu:active,
      .sidebar-profile-back:active,
      .sidebar-profile-edit:active,
      .sidebar-profile-more:active,
      .sidebar-profile-search:active,
      .sidebar-profile-close:active,
      .functional-settings-nav:active {
        transform: scale(0.95) !important;
      }

      .workspace-brand-menu svg,
      .sidebar-profile-header button svg,
      .functional-settings-nav svg {
        width: 20px !important;
        height: 20px !important;
        stroke-width: 1.85 !important;
      }

      .brand-mini-logo {
        width: 26px !important;
        height: 26px !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        flex: 0 0 auto;
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        filter: none !important;
        overflow: hidden !important;
      }

      .sidebar-search {
        position: relative;
        margin: 0 2px 4px !important;
      }

      .sidebar-search input {
        width: 100% !important;
        height: 44px !important;
        padding: 0 16px !important;
        border: 1px solid rgba(148, 163, 184, 0.24) !important;
        border-radius: 15px !important;
        outline: 0 !important;
        background: #f2f6fb !important;
        color: var(--tg-ink) !important;
        font-size: 14px !important;
        transition: background 0.24s ease, border-color 0.24s ease, box-shadow 0.28s ease !important;
      }

      .sidebar-search input:focus {
        border-color: rgba(47, 125, 244, 0.5) !important;
        background: #fff !important;
        box-shadow: 0 0 0 4px rgba(47, 125, 244, 0.1) !important;
      }

      .dialog-folder-bar {
        display: none !important;
        margin: 0 !important;
        min-height: 0 !important;
        padding: 0 !important;
      }

      .dialog-list {
        flex: 1 1 auto !important;
        min-height: 0 !important;
        padding: 2px 2px 12px !important;
        overflow-x: hidden !important;
      }

      .dialog-item {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 72px !important;
        margin: 0 0 4px !important;
        padding: 9px 11px !important;
        gap: 11px !important;
        border: 1px solid transparent !important;
        border-radius: 18px !important;
        background: transparent !important;
        color: var(--tg-ink) !important;
        box-shadow: none !important;
        transform: scale(1) translateZ(0) !important;
        transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease !important;
      }

      .dialog-item:hover {
        transform: scale(1) translateZ(0) !important;
        border-color: rgba(148, 163, 184, 0.17) !important;
        background: #f0f5fb !important;
      }

      .dialog-item:active {
        transform: scale(0.982) translateZ(0) !important;
        transition: transform 0.1s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }

      .dialog-item.active,
      .dialog-item.is-selected {
        transform: scale(1) translateZ(0) !important;
        border-color: rgba(148, 163, 184, 0.18) !important;
        background: #e2e8f0 !important;
        box-shadow: none !important;
      }

      .dialog-avatar,
      .dialog-item .user-avatar {
        width: 50px !important;
        height: 50px !important;
        min-width: 50px !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1) !important;
      }

      .dialog-body,
      .dialog-line,
      .dialog-title-wrap,
      .dialog-preview-row,
      .dialog-preview-copy {
        min-width: 0 !important;
      }

      .dialog-line { gap: 8px !important; }
      .dialog-title-wrap { display: flex !important; align-items: center; overflow: hidden; }

      .dialog-line strong,
      .dialog-item strong {
        color: #172033 !important;
        font-size: 14px !important;
        font-weight: 720 !important;
        letter-spacing: -0.012em !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .dialog-line span,
      .dialog-meta {
        color: #718198 !important;
        font-size: 11.5px !important;
        font-weight: 540 !important;
      }

      .dialog-preview,
      .dialog-preview-copy {
        color: #64748b !important;
        font-size: 12.5px !important;
        line-height: 1.35 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .dialog-unread-badge {
        min-width: 19px !important;
        height: 19px !important;
        border-radius: 999px !important;
        background: var(--tg-blue) !important;
        box-shadow: 0 3px 10px rgba(47, 125, 244, 0.35) !important;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 700 !important;
      }

      .sidebar-glass-menu,
      .sidebar-compose-menu,
      .static-compose-menu,
      .attach-menu,
      .message-context-menu,
      .dialog-context-menu,
      .avatar-upload-menu {
        border: 1px solid rgba(226, 232, 240, 0.88) !important;
        border-radius: 20px !important;
        background: rgba(255, 255, 255, 0.98) !important;
        color: var(--tg-ink) !important;
        box-shadow: var(--tg-shadow-float) !important;
        backdrop-filter: blur(24px) saturate(150%) !important;
        -webkit-backdrop-filter: blur(24px) saturate(150%) !important;
        padding: 8px !important;
      }

      .sidebar-compose-menu {
        position: absolute !important;
        top: 56px !important;
        bottom: auto !important;
        right: 12px !important;
        left: auto !important;
        width: 220px !important;
        max-width: calc(100vw - 32px) !important;
        height: auto !important;
        max-height: none !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2px !important;
        padding: 6px !important;
        border-radius: 18px !important;
        box-shadow: 0 14px 36px rgba(15, 23, 42, 0.16) !important;
        z-index: 150 !important;
        opacity: 0 !important;
        transform: translateY(8px) scale(0.96) !important;
        pointer-events: none !important;
        transition: opacity 0.18s ease, transform 0.2s cubic-bezier(0.2, 0, 0, 1) !important;
      }

      .workspace-sidebar.compose-open .sidebar-compose-menu {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: auto !important;
      }

      .chat-island-back {
        display: none !important;
      }

      .sidebar-glass-menu-item,
      .sidebar-compose-menu-item,
      .static-compose-menu-item,
      .attach-menu-item,
      .message-context-menu-item,
      .dialog-context-menu-item,
      .avatar-upload-menu-item {
        min-width: 0;
        min-height: 40px !important;
        border-radius: 13px !important;
        color: #1e293b !important;
        font-size: 14.5px !important;
        font-weight: 600 !important;
        display: flex !important;
        align-items: center !important;
        gap: 11px !important;
        padding: 8px 12px !important;
        transition: background 0.16s ease, transform 0.16s ease, color 0.16s ease !important;
      }

      .sidebar-glass-menu-item svg,
      .sidebar-compose-menu-item svg,
      .static-compose-menu-item svg,
      .attach-menu-item svg,
      .message-context-menu-item svg,
      .dialog-context-menu-item svg,
      .avatar-upload-menu-item svg,
      .message-context-menu-item .lucide {
        color: #475569 !important;
        stroke: #475569 !important;
        stroke-width: 1.85 !important;
      }

      .sidebar-glass-menu-item:hover,
      .sidebar-compose-menu-item:hover,
      .static-compose-menu-item:hover,
      .attach-menu-item:hover,
      .message-context-menu-item:hover,
      .dialog-context-menu-item:hover,
      .avatar-upload-menu-item:hover {
        background: #edf3fa !important;
        color: #0f172a !important;
        transform: translateX(2px) !important;
      }

      .message-context-menu-item:hover svg,
      .message-context-menu-item:hover .lucide {
        color: #0f172a !important;
        stroke: #0f172a !important;
      }

      .message-context-menu-item.danger,
      .dialog-context-menu-item.danger {
        color: #ef4444 !important;
      }

      .message-context-menu-item.danger svg,
      .message-context-menu-item.danger .lucide,
      .dialog-context-menu-item.danger svg,
      .dialog-context-menu-item.danger .lucide {
        color: #ef4444 !important;
        stroke: #ef4444 !important;
      }

      .message-context-menu-item.danger:hover,
      .dialog-context-menu-item.danger:hover {
        background: #fee2e2 !important;
        color: #dc2626 !important;
      }

      .message-context-menu-item.danger:hover svg,
      .message-context-menu-item.danger:hover .lucide {
        color: #dc2626 !important;
        stroke: #dc2626 !important;
      }

      .sidebar-compose-menu-item.is-disabled { opacity: 0.42 !important; }

      .static-compose-menu [data-compose-action="secret"] svg,
      .sidebar-compose-menu [id="sidebar-compose-private"] svg,
      .dialog-avatar-secret svg,
      .sidebar-profile-setting-row svg.icon-lock {
        width: 24px !important;
        height: 24px !important;
        min-width: 24px !important;
        fill: none !important;
        stroke: currentColor !important;
        stroke-width: 1.85 !important;
      }

      .workspace-main,
      .chat-window,
      .chat-stage,
      .message-list {
        background: transparent !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        box-shadow: none !important;
      }

      .chat-window {
        width: 100% !important;
        height: 100% !important;
        min-height: 0 !important;
        border-radius: inherit !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }

      .page.ui-telegram-topbar .chat-island,
      .chat-island {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        min-height: 56px !important;
        height: 56px !important;
        padding: 0 10px 0 16px !important;
        gap: 8px !important;
        border: 0 !important;
        border-bottom: 1px solid #e7e7e7 !important;
        border-radius: 0 !important;
        background: #ffffff !important;
        color: var(--tg-ink) !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        transform: none !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        transition: none !important;
      }

      .chat-audio-top-player,
      .page.ui-telegram-topbar .chat-audio-top-player {
        position: absolute !important;
        top: 8px !important;
        left: 50% !important;
        right: auto !important;
        z-index: 120 !important;
        width: min(84%, 720px) !important;
        max-width: 720px !important;
        min-width: 280px !important;
        height: 44px !important;
        min-height: 44px !important;
        padding: 3px 12px !important;
        border: 1px solid rgba(226, 232, 240, 0.9) !important;
        border-radius: 999px !important;
        background: rgba(255, 255, 255, 0.96) !important;
        color: var(--tg-ink) !important;
        box-shadow: 0 8px 28px rgba(2, 8, 23, 0.12) !important;
        backdrop-filter: blur(24px) saturate(160%) !important;
        -webkit-backdrop-filter: blur(24px) saturate(160%) !important;
        transform: translateX(-50%) translateY(-65px) !important;
        opacity: 0 !important;
        pointer-events: none !important;
        transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.22s ease !important;
        display: flex !important;
        align-items: center !important;
        overflow: hidden !important;
      }

      .chat-audio-top-player.visible,
      .page.ui-telegram-topbar .chat-audio-top-player.visible {
        transform: translateX(-50%) translateY(0) !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }

      .chat-window.audio-top-player-visible .chat-island,
      .page.ui-telegram-topbar .chat-window.audio-top-player-visible .chat-island {
        transform: translateX(-50%) translateY(48px) !important;
      }

      .page.ui-telegram-topbar .chat-window.audio-top-player-visible {
        --chat-top-offset: 0px !important;
      }

      .chat-audio-top-inner {
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
      }

      .chat-audio-top-btn {
        width: 32px !important;
        height: 32px !important;
        border-radius: 50% !important;
        border: none !important;
        background: transparent !important;
        color: #2481cc !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        transition: background 0.16s ease, transform 0.16s ease, color 0.16s ease !important;
        flex-shrink: 0 !important;
        padding: 0 !important;
      }

      .chat-audio-top-btn svg {
        width: 18px !important;
        height: 18px !important;
        transition: transform 0.15s ease !important;
      }

      .chat-audio-top-btn:hover {
        background: rgba(37, 99, 235, 0.08) !important;
      }

      .chat-audio-top-btn:active {
        background: rgba(37, 99, 235, 0.14) !important;
        transform: scale(0.92) !important;
      }

      /* Micro-animation: Horizontal stretch on hold/active */
      #chat-audio-top-prev:active svg,
      #chat-audio-top-prev:hover svg,
      #chat-audio-top-next:active svg,
      #chat-audio-top-next:hover svg {
        transform: scaleX(1.24) !important;
      }

      #chat-audio-top-close {
        color: #64748b !important;
      }
      #chat-audio-top-close:hover {
        background: #fee2e2 !important;
        color: #ef4444 !important;
      }

      .chat-audio-top-copy {
        min-width: 0 !important;
        flex: 1 1 auto !important;
        margin: 0 6px !important;
      }

      .chat-audio-top-title {
        color: #172033 !important;
        font-size: 13.5px !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        line-height: 1.2 !important;
      }

      .chat-audio-top-meta {
        color: #718198 !important;
        font-size: 11.5px !important;
        margin-top: 1px !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

      .chat-audio-top-volume-wrap,
      .chat-audio-top-speed-wrap {
        position: relative !important;
        display: flex !important;
        align-items: center !important;
      }

      .chat-audio-top-volume-popover {
        position: absolute !important;
        top: calc(100% + 10px) !important;
        right: -6px !important;
        width: 36px !important;
        height: 120px !important;
        border-radius: 18px !important;
        border: 1px solid rgba(226, 232, 240, 0.9) !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;
        backdrop-filter: blur(16px) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: 0 !important;
        transform: translateY(-6px) scale(0.95) !important;
        pointer-events: none !important;
        transition: opacity 0.18s ease, transform 0.18s ease !important;
        z-index: 130 !important;
      }

      .chat-audio-top-volume-wrap:hover .chat-audio-top-volume-popover,
      .chat-audio-top-volume-popover.open {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: auto !important;
      }

      .chat-audio-top-volume-range {
        width: 90px !important;
        height: 20px !important;
        transform: rotate(-90deg) !important;
        transform-origin: center !important;
        -webkit-appearance: none !important;
        appearance: none !important;
        background: transparent !important;
        cursor: pointer !important;
      }
      .chat-audio-top-volume-range::-webkit-slider-runnable-track {
        height: 4px !important;
        border-radius: 999px !important;
        background: #e2e8f0 !important;
      }
      .chat-audio-top-volume-range::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: 14px !important;
        height: 14px !important;
        margin-top: -5px !important;
        border: 0 !important;
        border-radius: 50% !important;
        background: #2563eb !important;
        box-shadow: 0 1px 4px rgba(37, 99, 235, 0.4) !important;
      }

      .chat-audio-top-speed-popover {
        position: absolute !important;
        top: calc(100% + 10px) !important;
        right: -10px !important;
        width: 80px !important;
        padding: 6px !important;
        border-radius: 16px !important;
        border: 1px solid rgba(226, 232, 240, 0.9) !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;
        backdrop-filter: blur(16px) !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2px !important;
        opacity: 0 !important;
        transform: translateY(-6px) scale(0.95) !important;
        pointer-events: none !important;
        transition: opacity 0.18s ease, transform 0.18s ease !important;
        z-index: 130 !important;
      }

      .chat-audio-top-speed-wrap:hover .chat-audio-top-speed-popover,
      .chat-audio-top-speed-popover.open {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: auto !important;
      }

      .chat-audio-speed-item {
        width: 100% !important;
        border: none !important;
        border-radius: 10px !important;
        background: transparent !important;
        color: #1e293b !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        padding: 6px 10px !important;
        text-align: center !important;
        cursor: pointer !important;
        transition: background 0.14s ease, color 0.14s ease !important;
      }

      .chat-audio-speed-item:hover {
        background: #edf3fa !important;
        color: #2563eb !important;
      }

      .chat-audio-speed-item.active {
        background: rgba(37, 99, 235, 0.1) !important;
        color: #2563eb !important;
      }

      .chat-audio-top-speed {
        padding: 3px 8px !important;
        border-radius: 10px !important;
        border: 1px solid rgba(226, 232, 240, 0.8) !important;
        background: #f1f5f9 !important;
        color: #334155 !important;
        font-size: 11.5px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
        transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease !important;
      }
      .chat-audio-top-speed:hover {
        background: #e2e8f0 !important;
        color: #0f172a !important;
      }

      .chat-audio-top-repeat {
        width: 34px !important;
        height: 34px !important;
        border-radius: 50% !important;
        border: none !important;
        background: transparent !important;
        color: #64748b !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        transition: background 0.16s ease, color 0.16s ease !important;
      }
      .chat-audio-top-repeat:hover {
        background: rgba(15, 23, 42, 0.05) !important;
        color: #0f172a !important;
      }
      .chat-audio-top-repeat.is-active {
        color: #2563eb !important;
        background: rgba(37, 99, 235, 0.1) !important;
      }

      .chat-audio-top-progress {
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: 4px !important;
        border-bottom-left-radius: 999px !important;
        border-bottom-right-radius: 999px !important;
        background: rgba(0, 0, 0, 0.08) !important;
        overflow: hidden !important;
        cursor: pointer !important;
        z-index: 10 !important;
      }

      .chat-audio-top-progress-fill {
        display: block !important;
        height: 100% !important;
        width: var(--audio-top-progress, 0%) !important;
        background: #3390ec !important;
        border-radius: 999px !important;
        transition: width 0.08s linear !important;
      }

      /* Audio card scrubber inside messages */
      .message .tg-audio-play,
      .message-audio-toggle {
        width: 44px !important;
        height: 44px !important;
        border-radius: 50% !important;
        background: #2481cc !important;
        color: #ffffff !important;
        border: none !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        flex-shrink: 0 !important;
        transition: transform 0.16s ease, background 0.16s ease !important;
      }
      .message .tg-audio-play:hover,
      .message-audio-toggle:hover {
        transform: scale(1.04) !important;
      }
      .message .tg-audio-play svg,
      .message-audio-toggle svg {
        width: 22px !important;
        height: 22px !important;
        fill: currentColor !important;
        stroke: none !important;
        color: #ffffff !important;
      }
      .message.incoming .tg-audio-play {
        background: #2481cc !important;
        color: #ffffff !important;
      }

      .message-audio-card .audio-slider,
      .message-audio-card .message-audio-progress,
      .message-audio-card .tg-audio-seek {
        display: none !important;
        opacity: 0 !important;
        max-height: 0 !important;
        pointer-events: none !important;
        transition: opacity 0.24s ease, max-height 0.24s ease, transform 0.24s ease !important;
        transform: translateY(-2px) !important;
      }
      .message-audio-card.is-playing .audio-slider,
      .message-audio-card.is-playing .message-audio-progress,
      .message-audio-card.is-playing .tg-audio-seek,
      .message-audio-card.is-seeking .audio-slider,
      .message-audio-card.is-seeking .message-audio-progress,
      .message-audio-card.is-seeking .tg-audio-seek {
        display: block !important;
        opacity: 1 !important;
        max-height: 16px !important;
        pointer-events: auto !important;
        transform: translateY(0) !important;
      }

      /* Outgoing message sending silky spring animation */
      .message.sending {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      .message.sending.shown {
        opacity: 1 !important;
        transform: none !important;
      }

      /* Outgoing message styling: dark text on the white Telegram bubble */
      .message:not(.incoming) {
        margin-left: 0 !important;
      }
      .message:not(.incoming) .message-card,
      .message:not(.incoming) .message-bubble,
      .message:not(.incoming) .message-body,
      .message:not(.incoming) .tg-audio-title,
      .message:not(.incoming) .message-audio-name,
      .message:not(.incoming) strong,
      .message:not(.incoming) p,
      .message:not(.incoming) span:not(.message-meta-time):not(.message-audio-meta-line):not(.tg-audio-time):not(.message-checks):not(.message-state) {
        color: #0f172a !important;
      }
      .message:not(.incoming) .message-meta-time,
      .message:not(.incoming) .message-audio-meta-line,
      .message:not(.incoming) .tg-audio-time,
      .message:not(.incoming) .tg-audio-meta-row {
        color: #6fa8cb !important;
      }
      .message:not(.incoming) svg.message-status-icon,
      .message:not(.incoming) .message-meta-ticks,
      .message:not(.incoming) .message-checks {
        color: #3390ec !important;
      }

      .message:not(.incoming) .message-checks.message-checks-single {
        color: #5eb3ea !important;
      }

      .message:not(.incoming) .message-checks.message-checks-double {
        color: #3390ec !important;
      }

      /* Audio card inside outgoing message: transparent so it inherits the bubble */
      .message:not(.incoming) .tg-audio-message,
      .message:not(.incoming) .message-audio-card {
        background: transparent !important;
        box-shadow: none !important;
      }
      .message:not(.incoming) .tg-audio-play,
      .message:not(.incoming) .message-audio-toggle {
        background: rgba(255, 255, 255, 0.22) !important;
        color: #ffffff !important;
      }
      .message:not(.incoming) .tg-audio-play:hover,
      .message:not(.incoming) .message-audio-toggle:hover {
        background: rgba(255, 255, 255, 0.32) !important;
      }
      .message:not(.incoming) .tg-audio-play svg,
      .message:not(.incoming) .message-audio-toggle svg {
        color: #ffffff !important;
        fill: #ffffff !important;
      }
      .message:not(.incoming) .tg-audio-seek-track,
      .message:not(.incoming) .message-audio-progress-bar,
      .message:not(.incoming) .audio-slider {
        background: rgba(255, 255, 255, 0.28) !important;
      }
      .message:not(.incoming) .tg-audio-seek-fill,
      .message:not(.incoming) .message-audio-progress-fill {
        background: #ffffff !important;
      }
      .message:not(.incoming) .tg-audio-seek-thumb,
      .message:not(.incoming) .message-audio-progress-thumb {
        background: #ffffff !important;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25) !important;
      }

      .chat-island:hover { box-shadow: 0 14px 40px rgba(2, 8, 23, 0.18) !important; }

      .chat-island-copy {
        min-width: 0 !important;
        flex: 1 1 auto !important;
        gap: 12px !important;
        padding: 3px 10px 3px 6px !important;
        border-radius: 999px !important;
        transition: background 0.18s ease, transform 0.15s ease !important;
        outline: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }

      .chat-island-copy:hover {
        background: rgba(15, 23, 42, 0.04) !important;
      }

      .chat-island-copy:active {
        background: rgba(15, 23, 42, 0.08) !important;
        transform: scale(0.99) !important;
        transform-origin: center center !important;
      }

      .chat-header-avatar {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        border-radius: 50% !important;
        flex-shrink: 0 !important;
        overflow: hidden !important;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.12) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 0 !important;
      }

      .chat-header-avatar .dialog-avatar {
        width: 100% !important;
        height: 100% !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
        position: relative !important;
      }

      .chat-header-avatar .dialog-avatar.saved-avatar,
      .dialog-avatar.saved-avatar {
        background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%) !important;
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
      }

      .chat-header-avatar .dialog-avatar.saved-avatar svg {
        width: 20px !important;
        height: 20px !important;
        fill: #ffffff !important;
        stroke: #ffffff !important;
        stroke-width: 0.5px !important;
        color: #ffffff !important;
        display: block !important;
        margin: auto !important;
      }

      .dialog-item .dialog-avatar.saved-avatar svg {
        width: 24px !important;
        height: 24px !important;
        fill: #ffffff !important;
        stroke: #ffffff !important;
        stroke-width: 0.5px !important;
        color: #ffffff !important;
        display: block !important;
        margin: auto !important;
      }

      .chat-profile-avatar .dialog-avatar.saved-avatar svg,
      .sidebar-profile-avatar-circle .saved-avatar svg,
      .profile-panel-avatar .saved-avatar svg {
        width: 48px !important;
        height: 48px !important;
        fill: #ffffff !important;
        stroke: #ffffff !important;
        stroke-width: 0.5px !important;
        color: #ffffff !important;
        display: block !important;
        margin: auto !important;
      }

      .chat-header-avatar .generated-avatar-photo,
      .chat-header-avatar img {
        width: 100% !important;
        height: 100% !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        display: block !important;
      }

      .chat-island-text { min-width: 0 !important; text-align: left !important; }

      .chat-island strong,
      .chat-island-text strong {
        color: #172033 !important;
        font-size: 15.5px !important;
        font-weight: 700 !important;
        letter-spacing: -0.015em !important;
      }

      .chat-island span,
      .chat-island-text span {
        margin-top: 2px !important;
        color: #718198 !important;
        font-size: 12px !important;
      }

      .chat-island-actions { gap: 4px !important; }

      .chat-island-action {
        width: 38px !important;
        height: 38px !important;
        border-radius: 50% !important;
        color: #475569 !important;
        background: transparent !important;
        transition: transform 0.2s ease, color 0.18s ease, background 0.18s ease !important;
      }

      .chat-island-action:hover {
        transform: none !important;
        color: #0f172a !important;
        background: #e2e8f0 !important;
      }

      .chat-island-action:active { transform: scale(0.93) !important; }
      .chat-island-action svg { width: 20px !important; height: 20px !important; stroke-width: 1.85 !important; }

      .chat-stage,
      .page.ui-telegram-topbar .chat-stage {
        --chat-stage-inline-pad: clamp(12px, 2.1vw, 30px);
        height: 100% !important;
        min-height: 0 !important;
        padding: 0 var(--chat-stage-inline-pad) 12px !important;
        overflow: hidden !important;
        position: relative !important;
      }

      .chat-stage::before,
      .chat-stage::after {
        display: none !important;
      }

      .message-list {
        height: 100% !important;
        min-height: 0 !important;
        gap: 4px !important;
        padding-top: 70px !important;
        padding-bottom: calc(74px + var(--composer-height, 0px)) !important;
        padding-right: calc(var(--chat-stage-inline-pad) + 5px) !important;
        scroll-padding-top: 70px !important;
        scroll-padding-bottom: 84px !important;
        mask-image: linear-gradient(
          to bottom,
          transparent 0px,
          rgba(0, 0, 0, 0.08) 16px,
          rgba(0, 0, 0, 0.85) 54px,
          black 76px,
          black calc(100% - 84px),
          rgba(0, 0, 0, 0.85) calc(100% - 54px),
          rgba(0, 0, 0, 0.08) calc(100% - 16px),
          transparent 100%
        ) !important;
        -webkit-mask-image: linear-gradient(
          to bottom,
          transparent 0px,
          rgba(0, 0, 0, 0.08) 16px,
          rgba(0, 0, 0, 0.85) 54px,
          black 76px,
          black calc(100% - 84px),
          rgba(0, 0, 0, 0.85) calc(100% - 54px),
          rgba(0, 0, 0, 0.08) calc(100% - 16px),
          transparent 100%
        ) !important;
      }

      .message {
        max-width: min(74%, 760px) !important;
        padding: 8px 11px !important;
        border-radius: 18px 18px 6px 18px !important;
        background: linear-gradient(145deg, #8071df 0%, #7161d3 100%) !important;
        box-shadow: 0 3px 12px rgba(36, 25, 104, 0.16) !important;
        line-height: 1.38 !important;
        transition: opacity 0.24s ease, transform 0.38s var(--tg-spring), filter 0.24s ease !important;
      }

      .message::after {
        display: none !important;
        content: "" !important;
        position: absolute !important;
        bottom: 0 !important;
        width: 8px !important;
        height: 17px !important;
        pointer-events: none !important;
      }

      .message.incoming.message-has-tail::after {
        display: block !important;
        left: 0 !important;
        right: auto !important;
        background: #ffffff !important;
        -webkit-mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px !important;
        mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px !important;
        transform: translateX(-6px) !important;
      }

      .message:not(.incoming).message-has-tail::after {
        display: block !important;
        left: auto !important;
        right: 0 !important;
        background: #d9effa !important;
        -webkit-mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px !important;
        mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px !important;
        transform: translateX(6px) scaleX(-1) !important;
      }

      .message.message-media.message-has-tail::after {
        display: none !important;
      }

      .message:hover:not(.sending) { transform: translateY(-1px) !important; }

      .message.incoming.message-seq-single,
      .message.incoming.message-seq-first {
        border-radius: 18px 18px 6px 18px !important;
      }

      .message.incoming.message-seq-middle {
        border-radius: 6px 18px 6px 18px !important;
      }

      .message.incoming.message-seq-last {
        border-radius: 6px 18px 18px 6px !important;
      }

      .message:not(.incoming).message-seq-single,
      .message:not(.incoming).message-seq-first {
        border-radius: 18px 18px 18px 6px !important;
      }

      .message:not(.incoming).message-seq-middle {
        border-radius: 18px 6px 18px 6px !important;
      }

      .message:not(.incoming).message-seq-last {
        border-radius: 18px 6px 18px 18px !important;
      }

      .message.message-seq-continued,
      .group-incoming-row--continued {
        margin-top: 0 !important;
      }

      .group-incoming-row--continued .group-incoming-sender {
        display: none !important;
      }

      .group-incoming-avatar.placeholder {
        visibility: hidden !important;
        opacity: 1 !important;
        transform: none !important;
        pointer-events: none !important;
        flex-shrink: 0 !important;
      }

      .message.incoming {
        max-width: min(74%, 760px) !important;
        border-radius: 18px 18px 18px 6px !important;
        background: #ffffff !important;
        color: #0f172a !important;
        border: 1px solid rgba(226, 232, 240, 0.86) !important;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;
      }

      .message.message-media { border-radius: 20px !important; }
      body.tg-no-message-motion .message:hover { transform: none !important; }
      body.tg-link-previews-disabled .message-link-preview { display: none !important; }
      body.tg-static-emoji .animated-emoji { animation: none !important; }
      body.tg-static-reactions .message-reaction { animation: none !important; transition-duration: 0.01ms !important; }
      body:not(.tg-large-emoji) .message-emoji-only { font-size: 28px !important; }

      .message-day-separator {
        position: relative;
        z-index: 1;
        margin: 12px 0 16px !important;
        pointer-events: none;
      }

      .message-day-separator span {
        min-width: 0 !important;
        min-height: 28px !important;
        padding: 5px 13px !important;
        border: 1px solid rgba(255, 255, 255, 0.72) !important;
        border-radius: 999px !important;
        background: rgba(248, 251, 255, 0.9) !important;
        color: #4c5d74 !important;
        box-shadow: 0 4px 16px rgba(2, 8, 23, 0.13) !important;
        backdrop-filter: blur(14px) saturate(145%) !important;
        -webkit-backdrop-filter: blur(14px) saturate(145%) !important;
        font-size: 11.5px !important;
        font-weight: 750 !important;
        letter-spacing: 0.01em !important;
      }

      .message-unread-divider {
        height: 32px !important;
        margin: 14px calc(-1 * var(--chat-stage-inline-pad)) !important;
        border: 0 !important;
        background: rgba(229, 238, 252, 0.86) !important;
        backdrop-filter: blur(10px);
      }

      .composer {
        position: absolute !important;
        left: 50% !important;
        bottom: 12px !important;
        transform: translateX(-50%) !important;
        width: min(760px, calc(100% - 24px)) !important;
        max-width: 760px !important;
        gap: 8px !important;
        padding: 0 !important;
        margin: 0 !important;
        z-index: 10 !important;
      }

      .composer-shell {
        min-height: 44px !important;
        padding: 0 2px !important;
        border: 0 !important;
        border-radius: 22px !important;
        background: #f1f1f1 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        transition: none !important;
      }

      .composer-shell:focus-within {
        transform: none !important;
        border-color: transparent !important;
        box-shadow: none !important;
      }

      .composer-icon {
        width: 38px !important;
        height: 38px !important;
        border-radius: 13px !important;
        margin: 4px 1px !important;
        color: #64748b !important;
        transition: transform 0.34s var(--tg-spring), background 0.22s ease, color 0.22s ease !important;
      }

      .composer-icon:hover { transform: scale(1.06) !important; background: #eaf2fc !important; color: #2563a9 !important; }
      .composer-icon:active { transform: scale(0.92) !important; }

      #composer-send,
      .composer-send,
      .composer-voice {
        box-shadow: none !important;
        transition: color 0.15s ease !important;
      }

      #composer-send:hover,
      .composer-send:hover,
      .composer-voice:hover { transform: none !important; box-shadow: none !important; }
      #composer-send:active,
      .composer-send:active,
      .composer-voice:active { transform: none !important; }

      .chat-scroll-bottom {
        position: absolute !important;
        left: auto !important;
        right: 24px !important;
        bottom: 78px !important;
        z-index: 100 !important;
        width: 44px !important;
        height: 44px !important;
        border-radius: 50% !important;
        border: 1px solid rgba(226, 232, 240, 0.88) !important;
        background: rgba(255, 255, 255, 0.95) !important;
        color: #1e293b !important;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.14) !important;
        backdrop-filter: blur(14px) !important;
        -webkit-backdrop-filter: blur(14px) !important;
        transition: opacity 0.22s ease, background 0.18s ease !important;
        transform: none !important;
      }

      .chat-scroll-bottom:hover {
        background: #ffffff !important;
        color: #0f172a !important;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.2) !important;
        transform: none !important;
      }

      .chat-scroll-bottom:active {
        transform: none !important;
      }

      .empty-chat-state,
      .empty-stage-card,
      .direct-empty-card,
      .saved-empty-card {
        width: min(440px, calc(100% - 32px)) !important;
        padding: 22px 26px !important;
        border: 1px solid rgba(226, 232, 240, 0.9) !important;
        border-radius: 22px !important;
        background: #ffffff !important;
        color: #0f172a !important;
        box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08) !important;
        text-align: center !important;
      }

      .empty-chat-state h2,
      .empty-chat-state h3,
      .empty-stage-card h2,
      .empty-stage-card h3,
      .direct-empty-card h2,
      .direct-empty-card h3,
      .saved-empty-card h2,
      .saved-empty-card h3 {
        color: #0f172a !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        margin: 0 0 10px !important;
      }

      .empty-chat-state p,
      .empty-stage-card p,
      .direct-empty-card p,
      .saved-empty-card p {
        color: #475569 !important;
        font-size: 14px !important;
        line-height: 1.55 !important;
        margin: 4px 0 !important;
      }

      .empty-chat-state a,
      .empty-stage-card a,
      .direct-empty-card a,
      .saved-empty-card a {
        color: #3390ec !important;
        text-decoration: none !important;
      }

      .direct-empty-state,
      .saved-empty-state {
        width: 100% !important;
        height: 100% !important;
        min-height: 100% !important;
        justify-self: stretch !important;
        align-self: stretch !important;
        grid-column: 1 / -1 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 0 auto !important;
      }

      .message-list.saved-empty,
      .message-list.direct-empty,
      .message-list:has(.direct-empty-state),
      .message-list:has(.saved-empty-state) {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        align-content: center !important;
      }

      .chat-search-panel,
      .attachment-modal-shell,
      .viewer-modal-shell,
      .call-modal,
      .premium-modal-card {
        border-radius: var(--tg-radius-lg) !important;
        border-color: rgba(226, 232, 240, 0.78) !important;
        box-shadow: var(--tg-shadow-panel) !important;
      }

      .media-modal {
        z-index: 100080 !important;
      }

      body.profile-viewer-open .sidebar-profile-panel {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transform: translateX(-110%) !important;
      }

      .chat-window.profile-panel-open {
        padding-right: 0 !important;
      }

      .chat-window.profile-panel-open .chat-stage,
      .chat-window.profile-panel-open .composer {
        margin-right: calc(var(--chat-profile-panel-width) + 16px) !important;
        transition: none !important;
      }

      .chat-window.profile-panel-open .chat-island,
      .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island {
        left: 10px !important;
        right: calc(var(--chat-profile-panel-width) + 26px) !important;
        width: auto !important;
        max-width: none !important;
        min-width: 0 !important;
        transform: none !important;
        transition: top 0.24s ease, opacity 0.24s ease, transform 0.24s ease !important;
      }

      .chat-window.profile-panel-open.audio-top-player-visible .chat-island,
      .page.ui-telegram-topbar .chat-window.profile-panel-open.audio-top-player-visible .chat-island {
        transform: translateY(48px) !important;
      }

      .chat-profile-panel {
        position: absolute !important;
        top: 8px !important;
        right: 8px !important;
        bottom: 8px !important;
        left: auto !important;
        inset: 8px 8px 8px auto !important;
        width: var(--chat-profile-panel-width) !important;
        height: auto !important;
        max-width: calc(100% - 16px) !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 1px solid rgba(0, 0, 0, 0.06) !important;
        border-radius: 16px !important;
        background: #ffffff !important;
        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.12) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: flex-start !important;
        overflow: hidden !important;
        opacity: 1 !important;
        pointer-events: none !important;
        transform: translateX(calc(100% + 24px)) !important;
        transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1) !important;
        z-index: 110 !important;
        box-sizing: border-box !important;
      }

      .chat-profile-panel.open {
        transform: translateX(0) !important;
        pointer-events: auto !important;
        opacity: 1 !important;
      }

      .sidebar-profile-panel {
        position: fixed !important;
        top: var(--workspace-gutter, 12px) !important;
        right: auto !important;
        bottom: var(--workspace-gutter, 12px) !important;
        left: var(--workspace-gutter, 12px) !important;
        inset: var(--workspace-gutter, 12px) auto var(--workspace-gutter, 12px) var(--workspace-gutter, 12px) !important;
        width: clamp(320px, var(--sidebar-width, 380px), 440px) !important;
        height: auto !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        border-radius: var(--tg-radius-md) !important;
        background: #ffffff !important;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: flex-start !important;
        overflow: hidden !important;
        opacity: 1 !important;
        pointer-events: none !important;
        transform: translateX(-110%) !important;
        transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1) !important;
        z-index: 100050 !important;
      }

      .sidebar-profile-panel.open {
        transform: translateX(0) !important;
        pointer-events: auto !important;
        opacity: 1 !important;
      }

      .sidebar-profile-card,
      .active-sessions-card,
      .language-select-card,
      .chat-profile-panel-card {
        width: 100% !important;
        height: 100% !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 16px !important;
        background: #ffffff !important;
        box-shadow: none !important;
        overflow: hidden !important;
        transform: none !important;
        opacity: 1 !important;
        transition: none !important;
      }

      .sidebar-profile-panel.open .sidebar-profile-card,
      .chat-profile-panel.open .chat-profile-panel-card {
        transform: none !important;
      }

      .sidebar-profile-header,
      .functional-settings-header {
        min-height: 76px !important;
        padding: 10px 16px !important;
        border-bottom: 1px solid rgba(226, 232, 240, 0.72) !important;
        background: rgba(255, 255, 255, 0.94) !important;
      }

      .sidebar-profile-title {
        min-width: 0;
        margin: 0 !important;
        color: var(--tg-ink) !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #sidebar-profile-panel .sidebar-profile-title {
        font-size: 42px !important;
        font-weight: 800 !important;
        letter-spacing: -0.04em !important;
        text-transform: uppercase !important;
        line-height: 1.05 !important;
      }

      .functional-settings-heading h3 {
        min-width: 0;
        margin: 0 !important;
        color: var(--tg-ink) !important;
        font-size: 20px !important;
        font-weight: 760 !important;
        letter-spacing: -0.018em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar-profile-body,
      .active-sessions-body,
      .language-select-body,
      .functional-settings-list {
        min-height: 0 !important;
        overflow-x: hidden !important;
        overscroll-behavior: contain !important;
        background: #fff !important;
      }

      .sidebar-profile-body { padding: 0 0 20px !important; }

      .settings-root-search-wrap {
        display: grid;
        grid-template-columns: 20px minmax(0, 1fr);
        align-items: center;
        gap: 9px;
        max-height: 0;
        margin: 0 14px;
        padding: 0 13px;
        border: 0 solid rgba(148, 163, 184, 0.24);
        border-radius: 15px;
        background: #f2f6fb;
        opacity: 0;
        overflow: hidden;
        transform: translateY(-7px);
        transition: max-height 0.42s var(--tg-spring), margin 0.36s var(--tg-spring), padding 0.36s var(--tg-spring), border-width 0.2s ease, opacity 0.24s ease, transform 0.42s var(--tg-spring);
      }

      .settings-root-search-wrap.open {
        max-height: 46px;
        min-height: 44px;
        margin-top: 12px;
        margin-bottom: 2px;
        padding: 0 13px;
        border-width: 1px;
        opacity: 1;
        transform: translateY(0);
      }

      .settings-root-search-wrap:focus-within {
        border-color: rgba(47, 125, 244, 0.46);
        background: #fff;
        box-shadow: 0 0 0 4px rgba(47, 125, 244, 0.09);
      }

      .settings-root-search-wrap svg { width: 19px; height: 19px; color: #8190a4; stroke-width: 1.8; }
      .settings-root-search-input {
        width: 100%;
        min-width: 0;
        height: 42px;
        padding: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--tg-ink);
        font: 500 14px/1 "Open Sans", system-ui, sans-serif;
      }

      .settings-root-more-menu {
        position: absolute;
        top: 57px;
        right: 55px;
        z-index: 20;
        min-width: 170px;
        padding: 7px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        border-radius: 17px;
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--tg-shadow-float);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(-7px) scale(0.96);
        transform-origin: top right;
        transition: opacity 0.22s ease, visibility 0.22s ease, transform 0.38s var(--tg-spring);
      }

      .settings-root-more-menu.open { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0) scale(1); }
      .settings-root-more-menu button {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        min-height: 42px;
        padding: 9px 11px;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #334155;
        text-align: left;
        cursor: pointer;
        transition: background 0.22s ease, transform 0.32s var(--tg-spring);
      }

      .settings-root-more-menu button:hover { background: #edf3fa; transform: translateX(2px); }
      .settings-root-more-menu button:active { transform: scale(0.97); }
      .settings-root-more-menu svg { width: 19px; height: 19px; color: #6b7c93; stroke-width: 1.8; }

      .sidebar-profile-body.settings-search-empty::after {
        content: "—";
        display: grid;
        place-items: center;
        min-height: 90px;
        color: #94a3b8;
        font-size: 22px;
      }

      .sidebar-profile-avatar-zone {
        gap: 18px !important;
        min-width: 0;
        padding: 22px 22px 17px !important;
      }

      .sidebar-profile-avatar-wrapper,
      .sidebar-profile-avatar-circle {
        width: 78px !important;
        height: 78px !important;
      }

      .sidebar-profile-avatar-circle { box-shadow: 0 7px 20px rgba(15, 23, 42, 0.16) !important; }
      .sidebar-profile-identity { min-width: 0; }

      .sidebar-profile-name,
      .sidebar-profile-username-header {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar-profile-name { font-size: 20px !important; font-weight: 730 !important; }

      .sidebar-profile-settings-block,
      .sidebar-profile-premium-block {
        margin: 10px 14px !important;
        border: 1px solid rgba(203, 213, 225, 0.62) !important;
        border-radius: 19px !important;
        background: #f6f9fc !important;
        overflow: hidden !important;
      }

      .sidebar-profile-setting-row,
      .sidebar-profile-premium-row {
        min-width: 0 !important;
        min-height: 57px !important;
        gap: 14px !important;
        padding: 12px 17px !important;
        border-bottom: 1px solid rgba(203, 213, 225, 0.48) !important;
        background: transparent !important;
        transition: background 0.24s ease, transform 0.34s var(--tg-spring) !important;
      }

      .sidebar-profile-setting-row:last-child { border-bottom: 0 !important; }
      .sidebar-profile-setting-row:hover,
      .sidebar-profile-premium-row:hover { background: #ebf2fa !important; transform: translateX(2px) !important; }
      .sidebar-profile-setting-row:active,
      .sidebar-profile-premium-row:active { transform: scale(0.987) !important; }

      .sidebar-profile-setting-icon {
        width: 24px !important;
        height: 24px !important;
        min-width: 24px !important;
        color: #657993 !important;
        stroke-width: 1.75 !important;
      }

      .sidebar-profile-setting-label {
        min-width: 0 !important;
        flex: 1 1 auto !important;
        color: #253247 !important;
        font-size: 14px !important;
        line-height: 1.28 !important;
        overflow-wrap: anywhere;
      }

      .sidebar-profile-setting-value {
        min-width: 0 !important;
        max-width: 38% !important;
        color: #6f7f95 !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sidebar-profile-setting-arrow { width: 17px !important; min-width: 17px !important; }

      .sidebar-profile-device-badge {
        min-width: 23px !important;
        height: 23px !important;
        border-radius: 999px !important;
        background: #e2e7ff !important;
        color: #4b50b8 !important;
      }

      .functional-settings-card {
        display: flex !important;
        flex-direction: column !important;
        color: var(--tg-ink) !important;
      }

      .functional-settings-header {
        display: grid !important;
        grid-template-columns: 42px minmax(0, 1fr) 42px !important;
        gap: 10px !important;
        height: auto !important;
      }

      .functional-settings-heading { min-width: 0; text-align: center; }
      .functional-settings-heading p {
        margin: 3px 0 0 !important;
        color: #7a899d !important;
        font-size: 11px !important;
        line-height: 1.25 !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .functional-settings-list {
        flex: 1 1 auto !important;
        max-height: none !important;
        padding: 11px 12px !important;
      }

      .functional-setting-row {
        width: 100% !important;
        min-width: 0 !important;
        min-height: 70px !important;
        grid-template-columns: minmax(0, 1fr) 48px !important;
        gap: 14px !important;
        padding: 11px 13px !important;
        border: 1px solid transparent !important;
        border-radius: 17px !important;
        background: transparent !important;
        text-align: left;
        transition: transform 0.38s var(--tg-spring), background 0.24s ease, border-color 0.24s ease !important;
      }

      .functional-setting-row:hover {
        transform: translateX(2px) !important;
        border-color: rgba(203, 213, 225, 0.55) !important;
        background: #f1f6fb !important;
      }

      .functional-setting-row:active { transform: scale(0.988) !important; }
      .functional-setting-row > span { min-width: 0 !important; }
      .functional-setting-row strong { color: #202c40 !important; font-size: 14px !important; line-height: 1.25 !important; overflow-wrap: anywhere; }
      .functional-setting-row small { color: #718198 !important; font-size: 11.5px !important; line-height: 1.38 !important; overflow-wrap: anywhere; }

      .functional-setting-row i {
        width: 46px !important;
        height: 28px !important;
        border-radius: 999px !important;
        background: #c8d2df !important;
        transition: transform 0.38s var(--tg-spring), background 0.3s ease, box-shadow 0.3s ease !important;
      }

      .functional-setting-row i::after {
        top: 3px !important;
        left: 3px !important;
        width: 22px !important;
        height: 22px !important;
        transition: transform 0.42s var(--tg-spring) !important;
      }

      .functional-setting-row input:checked + i {
        background: var(--tg-blue) !important;
        box-shadow: 0 5px 14px rgba(47, 125, 244, 0.24) !important;
      }

      .functional-setting-row input:checked + i::after { transform: translateX(18px) !important; }
      .functional-setting-row:active i { transform: scale(1.1) !important; }

      .functional-setting-action {
        display: grid !important;
        color: #d6424e !important;
      }

      .functional-setting-action strong { color: #c73542 !important; }
      .functional-setting-action svg { width: 23px; height: 23px; justify-self: center; stroke-width: 1.8; }

      .functional-settings-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 44px;
        padding: 8px 16px;
        border-top: 1px solid rgba(226, 232, 240, 0.72);
        background: #f8fafc;
        color: #718198;
        font-size: 11.5px;
      }

      .functional-settings-footer svg { width: 16px; height: 16px; color: #23a566; stroke-width: 2.2; }

      .language-select-card { height: min(790px, calc(100dvh - 36px)) !important; }
      .language-select-body { display: flex !important; flex-direction: column !important; flex: 1 1 auto !important; padding: 14px 16px 0 !important; }

      .language-search-wrapper {
        flex: 0 0 auto;
        min-height: 46px !important;
        margin: 0 0 10px !important;
        border: 1px solid rgba(148, 163, 184, 0.24) !important;
        border-radius: 15px !important;
        background: #f2f6fb !important;
        transition: border-color 0.24s ease, box-shadow 0.24s ease, background 0.24s ease !important;
      }

      .language-search-wrapper:focus-within {
        border-color: rgba(47, 125, 244, 0.46) !important;
        background: #fff !important;
        box-shadow: 0 0 0 4px rgba(47, 125, 244, 0.09) !important;
      }

      .language-search-input { min-width: 0 !important; color: var(--tg-ink) !important; }

      .language-list-container {
        flex: 1 1 auto !important;
        min-height: 0 !important;
        height: auto !important;
        max-height: none !important;
        padding: 2px 3px 12px !important;
      }

      .language-option-item {
        min-width: 0 !important;
        min-height: 60px !important;
        margin: 0 0 3px !important;
        padding: 8px 11px !important;
        gap: 11px !important;
        border: 1px solid transparent !important;
        border-radius: 17px !important;
        transition: transform 0.38s var(--tg-spring), background 0.24s ease, border-color 0.24s ease !important;
      }

      .language-option-item:hover { transform: translateX(2px) !important; background: #f1f6fb !important; }
      .language-option-item.active { border-color: rgba(47, 125, 244, 0.12) !important; background: #e6f1ff !important; }
      .language-option-item:active { transform: scale(0.988) !important; }
      .language-option-text { min-width: 0 !important; }
      .language-native-name,
      .language-english-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .language-native-name { color: #202c40 !important; font-size: 14px !important; font-weight: 720 !important; }
      .language-english-name { color: #718198 !important; font-size: 11.5px !important; }

      .language-select-footer {
        min-height: 60px !important;
        padding: 10px 16px !important;
        border-top: 1px solid rgba(226, 232, 240, 0.72) !important;
      }

      .language-select-ok-btn {
        min-width: 78px !important;
        min-height: 40px !important;
        border-radius: 13px !important;
        background: var(--tg-blue) !important;
        box-shadow: 0 7px 18px rgba(47, 125, 244, 0.24) !important;
        transition: transform 0.36s var(--tg-spring), background 0.22s ease, box-shadow 0.22s ease !important;
      }

      .language-select-ok-btn:hover { transform: translateY(-1px) scale(1.03); background: var(--tg-blue-strong) !important; }
      .language-select-ok-btn:active { transform: scale(0.95); }

      .active-sessions-card { height: min(820px, calc(100dvh - 36px)) !important; }
      .active-sessions-body { flex: 1 1 auto !important; padding: 15px 16px 24px !important; }
      .active-sessions-section { min-width: 0; margin-bottom: 20px !important; }
      .active-sessions-section-title { margin: 0 3px 9px !important; color: #e74d57 !important; font-size: 12px !important; font-weight: 760 !important; }

      .session-card {
        display: grid !important;
        grid-template-columns: 48px minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: 13px !important;
        min-width: 0 !important;
        min-height: 86px !important;
        margin: 0 0 9px !important;
        padding: 13px 14px !important;
        border: 1px solid rgba(203, 213, 225, 0.68) !important;
        border-radius: 18px !important;
        background: #f7fafd !important;
        box-shadow: none !important;
        overflow: hidden !important;
        transition: transform 0.42s var(--tg-spring), background 0.24s ease, border-color 0.24s ease, opacity 0.3s ease !important;
      }

      .session-card:hover { transform: translateY(-1px) !important; border-color: rgba(47, 125, 244, 0.24) !important; background: #f1f7fe !important; }
      .session-card.removing { transform: translateX(18px) scale(0.97) !important; opacity: 0 !important; }

      .session-icon-circle {
        width: 46px !important;
        height: 46px !important;
        min-width: 46px !important;
        border-radius: 15px !important;
        box-shadow: 0 6px 15px rgba(15, 23, 42, 0.12) !important;
      }

      .session-card-info { min-width: 0 !important; overflow: hidden !important; }
      .session-device-name,
      .session-app-info,
      .session-location-info {
        display: block !important;
        min-width: 0 !important;
        max-width: 100% !important;
        margin-right: 0 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .session-device-name { color: #202c40 !important; font-size: 14px !important; font-weight: 740 !important; }
      .session-app-info,
      .session-location-info { color: #677991 !important; font-size: 11.5px !important; line-height: 1.45 !important; }

      .session-card-actions { max-width: 145px !important; min-width: 0 !important; justify-self: end; }
      .session-rename-btn {
        max-width: 140px !important;
        padding: 7px 9px !important;
        border-radius: 11px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }

      .session-close-btn {
        width: 36px !important;
        height: 36px !important;
        border-radius: 12px !important;
        font-size: 22px !important;
        transition: transform 0.34s var(--tg-spring), background 0.22s ease, color 0.22s ease !important;
      }

      .session-close-btn:hover { transform: scale(1.06); background: #feecef !important; color: #d63f4c !important; }
      .session-close-btn:active { transform: scale(0.92); }

      .terminate-all-btn {
        width: 100% !important;
        min-height: 50px !important;
        gap: 11px !important;
        padding: 10px 14px !important;
        border-radius: 16px !important;
        transition: transform 0.36s var(--tg-spring), background 0.22s ease, box-shadow 0.22s ease !important;
      }

      .terminate-all-btn:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(225, 55, 69, 0.14); }
      .terminate-all-btn:active { transform: scale(0.985); }
      .active-sessions-help-text { overflow-wrap: anywhere; line-height: 1.42 !important; }

      .session-confirm-modal-box {
        width: min(410px, calc(100vw - 36px)) !important;
        border: 1px solid rgba(226, 232, 240, 0.9) !important;
        border-radius: 23px !important;
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: var(--tg-shadow-panel) !important;
      }

      .session-rename-input { border-radius: 14px !important; }
      .session-confirm-btn { border-radius: 12px !important; transition: transform 0.34s var(--tg-spring), background 0.22s ease !important; }
      .session-confirm-btn:hover { transform: translateY(-1px); }
      .session-confirm-btn:active { transform: scale(0.95); }

      /* Fixed, short pill scrollbars. Native arrows and long proportional
         thumbs are hidden by custom-scrollbars.ts. */
      .tg-custom-scroll {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }

      .tg-custom-scroll::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }

      .tg-scrollbar-rail {
        position: fixed;
        z-index: 1800;
        width: 14px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateX(3px);
        transition: opacity 0.24s ease, visibility 0.24s ease, transform 0.34s var(--tg-spring);
      }

      .tg-scrollbar-rail.visible {
        opacity: 0;
        visibility: hidden;
        transform: translateX(3px);
        pointer-events: none;
      }

      .tg-scrollbar-rail.visible.active {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }

      .tg-scrollbar-thumb {
        position: absolute;
        top: 0;
        right: 3px;
        width: 5px;
        min-height: 44px;
        border-radius: 999px;
        background: rgba(203, 218, 235, 0.74);
        border: 0;
        box-shadow: 0 3px 10px rgba(15, 23, 42, 0.12);
        cursor: grab;
        pointer-events: auto;
        touch-action: none;
        transform-origin: center;
        transition: width 0.42s var(--tg-spring), right 0.42s var(--tg-spring), background 0.28s ease, box-shadow 0.28s ease, filter 0.28s ease;
      }

      .tg-scrollbar-rail:hover .tg-scrollbar-thumb,
      .tg-scrollbar-rail.active .tg-scrollbar-thumb,
      .tg-scrollbar-thumb.dragging {
        right: 2px;
        width: 6px;
        background: rgba(15, 23, 42, 0.28);
        box-shadow: none;
        filter: none;
      }

      .tg-scrollbar-thumb.dragging { cursor: grabbing; }

      ::-webkit-scrollbar-button,
      *::-webkit-scrollbar-button {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(211, 222, 236, 0.82) transparent;
      }

      *::-webkit-scrollbar { width: 7px !important; height: 7px !important; }
      *::-webkit-scrollbar-track { background: transparent !important; }
      *::-webkit-scrollbar-thumb {
        min-height: 42px !important;
        border: 1px solid transparent !important;
        border-radius: 999px !important;
        background: rgba(211, 222, 236, 0.85) !important;
        background-clip: padding-box !important;
      }

      body.tg-compact-dialogs .dialog-item { min-height: 60px !important; padding-top: 6px !important; padding-bottom: 6px !important; }

      /* Toasts belong to the status area, never on top of the composer. */
      .toast-stack {
        top: calc(24px + env(safe-area-inset-top)) !important;
        right: calc(24px + env(safe-area-inset-right)) !important;
        bottom: auto !important;
        width: min(340px, calc(100vw - 32px)) !important;
      }

      .toast {
        border-radius: 16px !important;
        padding: 12px 16px !important;
        pointer-events: auto !important;
        touch-action: pan-x !important;
        cursor: grab !important;
        user-select: none !important;
        -webkit-user-select: none !important;
      }

      .toast.swiping {
        transition: none !important;
        cursor: grabbing !important;
      }

      .toast.dismissing {
        pointer-events: none !important;
      }

      [data-i18n],
      [data-i18n-placeholder],
      button,
      label,
      strong,
      span {
        min-width: 0;
      }

      @media (max-width: 1080px) {
        :root {
          --workspace-gutter: 9px;
          --tg-sidebar-column-width: var(--sidebar-width, 330px);
        }

        .workspace-shell {
          grid-template-columns: var(--sidebar-width, 330px) minmax(0, 1fr) !important;
          gap: 9px !important;
        }

        .page.workspace-mode { padding: 9px !important; }
        .message { max-width: 82% !important; }
        .message.incoming { max-width: 82% !important; }
      }

      @media (max-width: 900px) {
        html:has(.page.workspace-mode),
        body:has(.page.workspace-mode) { height: 100%; min-height: 100%; overflow: hidden !important; }

        :root {
          --workspace-gutter: 0px;
          --tg-sidebar-column-width: 100%;
        }

        .page.workspace-mode { padding: 0 !important; }
        .workspace-shell { display: block !important; height: 100dvh !important; min-height: 0 !important; }

        .chat-window.profile-panel-open {
          padding-right: 0 !important;
        }
        .chat-window.profile-panel-open .chat-stage,
        .chat-window.profile-panel-open .composer {
          margin-right: 0 !important;
        }
        .chat-window.profile-panel-open .chat-island,
        .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island {
          left: 10px !important;
          right: 10px !important;
          width: calc(100% - 20px) !important;
        }
        .chat-profile-panel {
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          inset: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          border-radius: 0 !important;
          border: 0 !important;
          box-shadow: none !important;
          transform: translateX(100%) !important;
        }
        .chat-profile-panel.open {
          transform: translateX(0) !important;
        }
        .sidebar-profile-panel {
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          inset: 0 !important;
          width: 100% !important;
          border-radius: 0 !important;
          border: 0 !important;
        }

        .workspace-sidebar,
        .workspace-main {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100dvh !important;
          min-height: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1) !important;
        }

        .workspace-sidebar {
          padding: 10px 10px max(8px, env(safe-area-inset-bottom)) !important;
          z-index: 2 !important;
        }
        .workspace-main {
          padding: 0 !important;
          z-index: 3 !important;
          transform: translateX(100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
          background: #ffffff !important;
        }
        .workspace-main::before {
          content: "" !important;
          position: absolute !important;
          inset: 0 !important;
          background-image: url("/assets/wallpaper.svg") !important;
          background-repeat: repeat !important;
          background-position: center top !important;
          background-size: 420px auto !important;
          opacity: 0.14 !important;
          mix-blend-mode: normal !important;
          pointer-events: none !important;
          z-index: 0 !important;
          display: block !important;
          will-change: auto !important;
        }
        .workspace-main > * {
          position: relative !important;
          z-index: 1 !important;
        }
        .chat-window { border-radius: 0 !important; }

        .toast-stack {
          top: auto !important;
          right: 12px !important;
          bottom: calc(18px + env(safe-area-inset-bottom)) !important;
          left: 12px !important;
          width: auto !important;
        }

        .page.mobile-chat-open .workspace-sidebar {
          transform: translate3d(-100%, 0, 0) !important;
          opacity: 1 !important;
          pointer-events: none !important;
        }
        .page.mobile-chat-open .workspace-main:not(.empty-chat) {
          transform: translate3d(0, 0, 0) !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
        .workspace-main.empty-chat,
        .page.mobile-chat-open .workspace-main.empty-chat,
        .page.mobile-chat-closing .workspace-main {
          transform: translate3d(100%, 0, 0) !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        .empty-chat-state {
          display: none !important;
        }

        .chat-island-back {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 36px !important;
          height: 36px !important;
          min-width: 36px !important;
          border-radius: 50% !important;
          color: #475569 !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
          cursor: pointer !important;
          flex-shrink: 0 !important;
        }
        .chat-island-back svg {
          width: 20px !important;
          height: 20px !important;
        }
        .chat-island-back:hover,
        .chat-island-back:active {
          background: rgba(15, 23, 42, 0.06) !important;
          color: #0f172a !important;
        }

        .page.ui-telegram-topbar .chat-island,
        .chat-island {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          max-width: none !important;
          min-height: 56px !important;
          height: 56px !important;
          border-radius: 0 !important;
          border-bottom: 1px solid #e7e7e7 !important;
          padding: 0 8px 0 12px !important;
          transform: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 6px !important;
          box-sizing: border-box !important;
          z-index: 100 !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .chat-island-copy {
          flex: 1 1 auto !important;
          min-width: 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 2px 6px !important;
        }

        .chat-island-text {
          flex: 1 1 auto !important;
          min-width: 0 !important;
        }

        .page.ui-telegram-topbar .chat-header-avatar,
        .chat-header-avatar {
          display: none !important;
        }

        .chat-island-actions {
          gap: 2px !important;
          flex-shrink: 0 !important;
        }

        .chat-island-action {
          width: 36px !important;
          height: 36px !important;
          min-width: 36px !important;
          border-radius: 50% !important;
        }

        .chat-audio-top-player,
        .page.ui-telegram-topbar .chat-audio-top-player {
          position: absolute !important;
          top: max(8px, env(safe-area-inset-top)) !important;
          left: 8px !important;
          right: 8px !important;
          width: calc(100% - 16px) !important;
          max-width: none !important;
          height: 44px !important;
          transform: translateY(-65px) !important;
          z-index: 120 !important;
        }

        .chat-audio-top-player.visible,
        .page.ui-telegram-topbar .chat-audio-top-player.visible {
          transform: translateY(0) !important;
        }

        .chat-window.audio-top-player-visible .chat-island,
        .page.ui-telegram-topbar .chat-window.audio-top-player-visible .chat-island {
          transform: translateY(48px) !important;
        }

        .chat-stage,
        .page.ui-telegram-topbar .chat-stage {
          --chat-stage-inline-pad: 8px;
          padding: 0 8px 8px !important;
        }

        .message-list {
          padding-top: calc(var(--chat-header-height, 56px) + 6px) !important;
          padding-bottom: calc(var(--composer-height, 56px) + 6px) !important;
          padding-left: 8px !important;
          padding-right: 8px !important;
          align-content: start !important;
          overflow-y: auto !important;
          touch-action: pan-y !important;
        }

        .message { max-width: 86% !important; }
        .message.incoming { max-width: 86% !important; }

        .composer {
          position: absolute !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          max-width: none !important;
          transform: none !important;
          padding: 6px 8px calc(8px + env(safe-area-inset-bottom, 0px)) !important;
        }
        .composer.channel-guest-mode {
          padding: 0 0 env(safe-area-inset-bottom, 0px) !important;
        }
        .chat-scroll-bottom { right: 16px !important; bottom: 76px !important; }
      }

      @media (max-width: 580px) {
        .workspace-brand { min-height: 50px !important; margin-bottom: 8px !important; }
        .workspace-brand-menu { width: 40px !important; height: 40px !important; min-width: 40px !important; }
        .workspace-brand h1,
        .brand-text-title { font-size: 20px !important; }

        .dialog-item { min-height: 68px !important; padding: 8px 9px !important; }
        .dialog-avatar,
        .dialog-item .user-avatar { width: 48px !important; height: 48px !important; min-width: 48px !important; }

        .sidebar-profile-panel,
        .functional-settings-overlay {
          width: 100% !important;
          max-width: 100% !important;
        }

        .sidebar-profile-card,
        .active-sessions-card,
        .language-select-card,
        .functional-settings-card {
          border-radius: 0 !important;
          max-height: none !important;
        }

        .sidebar-profile-header,
        .functional-settings-header { min-height: 62px !important; padding: 7px 11px !important; }
        .sidebar-profile-avatar-zone { padding: 18px 17px 14px !important; }
        .sidebar-profile-settings-block,
        .sidebar-profile-premium-block { margin-left: 10px !important; margin-right: 10px !important; }

        .language-select-card,
        .active-sessions-card { height: 100% !important; }
        .language-select-body { padding-left: 11px !important; padding-right: 11px !important; }
        .active-sessions-body { padding: 13px 10px 22px !important; }

        .session-card {
          grid-template-columns: 42px minmax(0, 1fr) auto !important;
          gap: 10px !important;
          min-height: 82px !important;
          padding: 11px 10px !important;
        }

        .session-icon-circle { width: 42px !important; height: 42px !important; min-width: 42px !important; border-radius: 14px !important; }
        .session-card-actions { max-width: 86px !important; }
        .session-rename-btn { max-width: 84px !important; padding: 6px !important; font-size: 10.5px !important; }
        .session-app-info,
        .session-location-info { font-size: 10.5px !important; }

        .functional-settings-list { padding: 8px !important; }
        .functional-setting-row { min-height: 67px !important; padding: 9px 10px !important; gap: 10px !important; }
        .functional-settings-heading p { display: none; }

        .chat-island-text strong { font-size: 14px !important; }
        .chat-island-text span { font-size: 11px !important; }
        .chat-header-avatar { width: 34px !important; height: 34px !important; min-width: 34px !important; }
        .chat-island-actions { gap: 1px !important; }
        .chat-island-action,
        .chat-island-back { width: 34px !important; height: 34px !important; min-width: 34px !important; }
        .chat-island-action svg,
        .chat-island-back svg { width: 19px !important; height: 19px !important; }

        .message,
        .message.incoming { max-width: 86% !important; border-radius: 17px 17px 6px 17px !important; }
        .message.incoming { border-radius: 17px 17px 17px 6px !important; }
        .composer-shell { min-height: 48px !important; border-radius: 24px !important; }

        .page:not(.workspace-mode) { padding: 16px 12px 32px !important; }
        .auth-single-tile { border-radius: 24px !important; width: 100% !important; max-width: 100% !important; }
        .brand-panel { padding: 24px 16px 10px !important; }
        .auth-panel { padding: 4px 18px 24px !important; }
        .logo-mark { width: 88px !important; height: 88px !important; margin: 0 auto 12px !important; }
        .brand-title-glass { font-size: 32px !important; }
      }

      @media (prefers-reduced-motion: reduce) {
        .tg-scrollbar-thumb,
        .dialog-item,
        .message,
        .composer-shell,
        .sidebar-profile-card,
        .functional-settings-card {
          transition-duration: 0.01ms !important;
        }
      }

      /* Telegram Desktop sidebar */
      @media (min-width: 901px) {
        .page.workspace-mode {
          padding: 0 12px 0 0 !important;
        }

        .workspace-sidebar {
          border-radius: 0 !important;
          box-shadow: none !important;
        }
      }

      .workspace-sidebar {
        padding: 0 !important;
        background: #ffffff !important;
        color: #000000 !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .workspace-account,
      .workspace-sidebar .brand-text-title,
      .workspace-sidebar .brand-mini-logo {
        display: none !important;
      }

      .workspace-sidebar .workspace-brand {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        gap: 6px !important;
        min-height: 56px !important;
        margin: 0 !important;
        padding: 8px calc(10px - 10px * var(--sidebar-collapse, 0)) 8px calc(4px + 14px * var(--sidebar-collapse, 0)) !important;
        position: static !important;
        flex-shrink: 0 !important;
      }

      .workspace-sidebar .workspace-brand-leading {
        flex: 0 0 auto !important;
        gap: 0 !important;
        overflow: visible !important;
      }

      .workspace-sidebar #sidebar-menu-button.workspace-brand-menu {
        width: 42px !important;
        height: 42px !important;
        min-width: 42px !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        color: #707579 !important;
        box-shadow: none !important;
      }

      .workspace-sidebar #sidebar-menu-button.workspace-brand-menu:hover,
      .workspace-sidebar #sidebar-menu-button.workspace-brand-menu:active {
        background: transparent !important;
        color: #222222 !important;
        transform: none !important;
        box-shadow: none !important;
      }

      .workspace-sidebar #sidebar-menu-button svg,
      .workspace-sidebar #sidebar-menu-button .lucide {
        width: 22px !important;
        height: 22px !important;
        stroke-width: 2 !important;
      }

      .workspace-sidebar .sidebar-search {
        flex: 1 1 auto !important;
        min-width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        position: relative !important;
        max-width: calc((1 - var(--sidebar-collapse, 0)) * 100%) !important;
        opacity: calc(1 - var(--sidebar-collapse, 0)) !important;
        overflow: hidden !important;
        transform: translateX(calc(var(--sidebar-collapse, 0) * -10px));
        pointer-events: auto;
      }

      .workspace-sidebar.sidebar-collapsed .sidebar-search {
        pointer-events: none !important;
      }

      .workspace-sidebar .sidebar-search input,
      .workspace-sidebar .sidebar-search input:focus {
        width: 100% !important;
        height: 36px !important;
        padding: 0 14px !important;
        border: 0 !important;
        border-radius: 18px !important;
        outline: 0 !important;
        background: #f1f1f1 !important;
        color: #000000 !important;
        font-size: 14px !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .sidebar-search input::placeholder {
        color: #8d969c !important;
      }

      .workspace-sidebar .sidebar-glass-menu {
        top: 56px !important;
        left: 8px !important;
      }

      .workspace-sidebar #sidebar-compose-fab.sidebar-compose-corner,
      .workspace-sidebar #sidebar-compose-fab {
        position: absolute !important;
        top: auto !important;
        left: auto !important;
        right: 16px !important;
        bottom: 16px !important;
        width: 54px !important;
        height: 54px !important;
        min-width: 54px !important;
        border: 0 !important;
        border-radius: 50% !important;
        background: #3390ec !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
        z-index: 8 !important;
        opacity: calc(1 - var(--sidebar-collapse, 0)) !important;
        transform: scale(calc(1 - var(--sidebar-collapse, 0) * 0.28)) !important;
        pointer-events: auto;
      }

      .workspace-sidebar.sidebar-collapsed #sidebar-compose-fab {
        pointer-events: none !important;
      }

      .workspace-sidebar #sidebar-compose-fab:hover,
      .workspace-sidebar #sidebar-compose-fab:active {
        background: #2b82d6 !important;
        color: #ffffff !important;
        transform: scale(calc(1 - var(--sidebar-collapse, 0) * 0.28)) !important;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.24) !important;
      }

      .workspace-sidebar #sidebar-compose-fab svg,
      .workspace-sidebar #sidebar-compose-fab .lucide {
        width: 22px !important;
        height: 22px !important;
        color: #ffffff !important;
        stroke: #ffffff !important;
        fill: none !important;
      }

      .workspace-sidebar .sidebar-compose-menu {
        top: auto !important;
        bottom: 80px !important;
        right: 16px !important;
      }

      .workspace-sidebar .dialog-list {
        padding: 0 0 calc(84px - 72px * var(--sidebar-collapse, 0)) !important;
      }

      .workspace-sidebar .dialog-item,
      .workspace-sidebar .dialog-item.saved-item {
        position: relative !important;
        min-height: calc(70px - 8px * var(--sidebar-collapse, 0)) !important;
        margin: 0 !important;
        padding: 8px calc(12px + 4px * var(--sidebar-collapse, 0)) !important;
        gap: calc(10px * (1 - var(--sidebar-collapse, 0))) !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        transform: none !important;
        color: #000000 !important;
        overflow: visible !important;
      }

      .workspace-sidebar .dialog-item:hover {
        background: #f4f4f5 !important;
        border: 0 !important;
        transform: none !important;
      }

      .workspace-sidebar .dialog-item:active {
        transform: none !important;
      }

      .workspace-sidebar .dialog-item.active,
      .workspace-sidebar .dialog-item.is-selected,
      .workspace-sidebar .dialog-item.active:hover,
      .workspace-sidebar .dialog-item.is-selected:hover {
        background: #3390ec !important;
        border: 0 !important;
        box-shadow: none !important;
        transform: none !important;
      }

      .workspace-sidebar .dialog-avatar,
      .workspace-sidebar .dialog-item .user-avatar,
      .workspace-sidebar .dialog-item .group-avatar,
      .workspace-sidebar .dialog-item .channel-avatar,
      .workspace-sidebar .dialog-archive-avatar {
        width: calc(54px - 8px * var(--sidebar-collapse, 0)) !important;
        height: calc(54px - 8px * var(--sidebar-collapse, 0)) !important;
        min-width: calc(54px - 8px * var(--sidebar-collapse, 0)) !important;
        border-radius: 50% !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .dialog-body {
        overflow: hidden !important;
        max-width: calc((1 - min(1, var(--sidebar-collapse, 0) * 1.35)) * 100%) !important;
        flex: 1 1 auto !important;
        min-width: 0 !important;
      }

      .workspace-sidebar .dialog-line,
      .workspace-sidebar .dialog-preview-copy,
      .workspace-sidebar .dialog-open-btn,
      .workspace-sidebar .dialog-archive-preview,
      .workspace-sidebar .dialog-type-icon,
      .workspace-sidebar .dialog-verified,
      .workspace-sidebar .dialog-meta {
        opacity: calc(1 - min(1, var(--sidebar-collapse, 0) * 1.35)) !important;
        transform: translateX(calc(var(--sidebar-collapse, 0) * -14px));
        max-height: calc(24px * (1 - min(1, var(--sidebar-collapse, 0) * 1.2))) !important;
        overflow: hidden !important;
      }

      .workspace-sidebar .dialog-line,
      .workspace-sidebar .dialog-preview-copy {
        overflow: hidden !important;
        max-width: calc((1 - var(--sidebar-collapse, 0)) * 360px) !important;
      }

      .workspace-sidebar .dialog-line {
        gap: 8px !important;
      }

      .workspace-sidebar .dialog-title-wrap {
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        min-width: 0 !important;
        overflow: hidden !important;
      }

      .workspace-sidebar .dialog-type-icon {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 16px !important;
        height: 16px !important;
        flex: 0 0 16px !important;
        color: #8d969c !important;
      }

      .workspace-sidebar .dialog-type-icon svg,
      .workspace-sidebar .dialog-type-icon .lucide {
        width: 16px !important;
        height: 16px !important;
        stroke-width: 2 !important;
      }

      .workspace-sidebar .dialog-verified {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 16px !important;
        height: 16px !important;
        flex: 0 0 16px !important;
        color: #3390ec !important;
      }

      .workspace-sidebar .dialog-verified svg {
        width: 16px !important;
        height: 16px !important;
      }

      .workspace-sidebar .dialog-line strong,
      .workspace-sidebar .dialog-item strong,
      .workspace-sidebar .dialog-item-title {
        color: #000000 !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        letter-spacing: 0 !important;
      }

      .workspace-sidebar .dialog-meta,
      .workspace-sidebar .dialog-line span.dialog-meta {
        color: #8d969c !important;
        font-size: 12px !important;
        font-weight: 400 !important;
      }

      .workspace-sidebar .dialog-preview,
      .workspace-sidebar .dialog-preview-copy,
      .workspace-sidebar .dialog-item-preview {
        color: #8d969c !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 1.25 !important;
      }

      .workspace-sidebar .dialog-preview-row {
        margin-top: 2px !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
      }

      .workspace-sidebar .dialog-sender-prefix {
        color: #3390ec !important;
        font-weight: 500 !important;
      }

      .workspace-sidebar .dialog-archive-preview {
        color: #8a8074 !important;
      }

      .workspace-sidebar .dialog-archive-avatar {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: #c4c9cc !important;
        color: #ffffff !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .dialog-archive-avatar svg,
      .workspace-sidebar .dialog-archive-avatar .lucide {
        width: 24px !important;
        height: 24px !important;
        color: #ffffff !important;
        stroke: #ffffff !important;
      }

      .workspace-sidebar .dialog-open-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        height: 24px !important;
        padding: 0 11px !important;
        border-radius: 12px !important;
        background: #3390ec !important;
        color: #ffffff !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        line-height: 1 !important;
        flex-shrink: 0 !important;
      }

      .workspace-sidebar .dialog-unread-badge,
      .workspace-sidebar .dialog-posts-badge {
        position: absolute !important;
        right: calc(10px - 6px * var(--sidebar-collapse, 0)) !important;
        bottom: calc(10px - 6px * var(--sidebar-collapse, 0)) !important;
        z-index: 2 !important;
        min-width: calc(22px - 2px * var(--sidebar-collapse, 0)) !important;
        height: calc(20px - 2px * var(--sidebar-collapse, 0)) !important;
        margin: 0 !important;
        border-radius: 10px !important;
        background: #3390ec !important;
        box-shadow: none !important;
        color: #ffffff !important;
        font-size: calc(12px - 2px * var(--sidebar-collapse, 0)) !important;
        font-weight: 600 !important;
      }

      .workspace-sidebar .dialog-unread-badge.is-muted,
      .workspace-sidebar .dialog-posts-badge {
        background: #c4c9cc !important;
        color: #ffffff !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-line strong,
      .workspace-sidebar .dialog-item.active .dialog-item-title,
      .workspace-sidebar .dialog-item.active strong,
      .workspace-sidebar .dialog-item.is-selected .dialog-line strong,
      .workspace-sidebar .dialog-item.is-selected strong {
        color: #ffffff !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-meta,
      .workspace-sidebar .dialog-item.active .dialog-preview,
      .workspace-sidebar .dialog-item.active .dialog-preview-copy,
      .workspace-sidebar .dialog-item.active .dialog-archive-preview,
      .workspace-sidebar .dialog-item.active .dialog-sender-prefix,
      .workspace-sidebar .dialog-item.is-selected .dialog-meta,
      .workspace-sidebar .dialog-item.is-selected .dialog-preview-copy {
        color: rgba(255, 255, 255, 0.78) !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-type-icon,
      .workspace-sidebar .dialog-item.is-selected .dialog-type-icon {
        color: rgba(255, 255, 255, 0.86) !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-verified,
      .workspace-sidebar .dialog-item.is-selected .dialog-verified {
        color: #ffffff !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-open-btn,
      .workspace-sidebar .dialog-item.is-selected .dialog-open-btn {
        background: #ffffff !important;
        color: #3390ec !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-unread-badge,
      .workspace-sidebar .dialog-item.is-selected .dialog-unread-badge {
        background: #ffffff !important;
        color: #3390ec !important;
      }

      .workspace-sidebar .dialog-item.active .dialog-unread-badge.is-muted,
      .workspace-sidebar .dialog-item.active .dialog-posts-badge,
      .workspace-sidebar .dialog-item.is-selected .dialog-unread-badge.is-muted,
      .workspace-sidebar .dialog-item.is-selected .dialog-posts-badge {
        background: rgba(255, 255, 255, 0.32) !important;
        color: #ffffff !important;
      }

      .workspace-sidebar.sidebar-collapsed {
        min-width: 0 !important;
      }

      .workspace-sidebar.sidebar-collapsed .dialog-item,
      .workspace-sidebar.sidebar-collapsed .dialog-item.saved-item {
        justify-content: center !important;
        padding-left: 8px !important;
        padding-right: 8px !important;
        min-height: 62px !important;
      }

      .workspace-sidebar.sidebar-collapsed .dialog-body,
      .workspace-sidebar.sidebar-collapsed .dialog-line,
      .workspace-sidebar.sidebar-collapsed .dialog-preview,
      .workspace-sidebar.sidebar-collapsed .dialog-preview-copy,
      .workspace-sidebar.sidebar-collapsed .dialog-meta {
        display: none !important;
      }

      .workspace-sidebar.sidebar-collapsed .dialog-unread-badge,
      .workspace-sidebar.sidebar-collapsed .dialog-posts-badge {
        right: 6px !important;
        bottom: 8px !important;
        min-width: 18px !important;
        height: 18px !important;
        font-size: 11px !important;
      }

      .workspace-sidebar.sidebar-collapsed .sidebar-compose-menu {
        display: none !important;
      }

      .workspace-sidebar.sidebar-collapsed .sidebar-glass-menu {
        left: calc(100% + 6px) !important;
        top: 8px !important;
      }

      .workspace-sidebar .dialog-preview-copy {
        padding-right: calc(28px * (1 - var(--sidebar-collapse, 0))) !important;
      }

      @media (prefers-reduced-motion: reduce) {
        html,
        .workspace-shell {
          transition: none !important;
        }
      }

      /* Telegram Desktop / tweb chat header + composer */
      .chat-window {
        --chat-header-height: 56px !important;
      }

      .page.ui-telegram-topbar .chat-island,
      .chat-island {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        min-height: 56px !important;
        height: 56px !important;
        padding: 0 10px 0 16px !important;
        gap: 8px !important;
        border: 0 !important;
        border-bottom: 1px solid #e7e7e7 !important;
        border-radius: 0 !important;
        background: #ffffff !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        transform: none !important;
        color: #000000 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-sizing: border-box !important;
        z-index: 100 !important;
      }

      .chat-island:hover {
        box-shadow: none !important;
      }

      .workspace-main.empty-chat .chat-island,
      .workspace-main.empty-chat .chat-window.audio-top-player-visible .chat-island {
        transform: none !important;
      }

      .chat-island-copy {
        padding: 0 !important;
        border-radius: 0 !important;
        gap: 0 !important;
        flex: 1 1 auto !important;
        min-width: 0 !important;
      }

      .chat-island-copy:hover,
      .chat-island-copy:active {
        background: transparent !important;
        transform: none !important;
      }

      .page.ui-telegram-topbar .chat-header-avatar,
      .chat-header-avatar {
        display: none !important;
      }

      .chat-island strong,
      .chat-island-text strong,
      .chat-island-copy strong {
        color: #000000 !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        letter-spacing: 0 !important;
      }

      .chat-island span,
      .chat-island-text span,
      .chat-island-copy span {
        color: #707579 !important;
        font-size: 13px !important;
        margin-top: 1px !important;
      }

      .chat-island-actions {
        gap: 0 !important;
        margin-left: auto !important;
        flex-shrink: 0 !important;
      }

      .chat-island-action {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        border-radius: 0 !important;
        background: transparent !important;
        color: #707579 !important;
        box-shadow: none !important;
      }

      .chat-island-action:hover {
        background: transparent !important;
        color: #000000 !important;
        transform: none !important;
      }

      .chat-island-action:active {
        transform: none !important;
      }

      .chat-island-action svg,
      .chat-island-action .lucide {
        width: 22px !important;
        height: 22px !important;
        stroke-width: 1.8 !important;
        color: currentColor !important;
      }

      .chat-island-action .lucide {
        fill: none !important;
        stroke: currentColor !important;
      }

      .chat-island-action svg:not(.lucide) {
        fill: currentColor !important;
        stroke: currentColor !important;
      }

      .chat-window.profile-panel-open .chat-island,
      .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island {
        left: 0 !important;
        right: var(--chat-profile-panel-width, 420px) !important;
        width: auto !important;
        max-width: none !important;
        transform: none !important;
      }

      .chat-window.audio-top-player-visible .chat-island,
      .page.ui-telegram-topbar .chat-window.audio-top-player-visible .chat-island {
        transform: none !important;
      }

      .chat-audio-top-player,
      .page.ui-telegram-topbar .chat-audio-top-player {
        top: 56px !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        border-radius: 0 !important;
        transform: translateY(-100%) !important;
        box-shadow: none !important;
      }

      .chat-audio-top-player.visible,
      .page.ui-telegram-topbar .chat-audio-top-player.visible {
        transform: translateY(0) !important;
      }

      .chat-stage,
      .page.ui-telegram-topbar .chat-stage {
        --chat-stage-inline-pad: 16px;
        padding: 0 var(--chat-stage-inline-pad) 0 !important;
      }

      .message-list {
        padding-top: calc(var(--chat-header-height) + 10px + var(--chat-top-offset, 0px) + var(--chat-group-call-top-offset, 0px) + var(--chat-group-call-join-offset, 0px)) !important;
        padding-bottom: calc(64px + var(--composer-height, 0px)) !important;
        mask-image: none !important;
        -webkit-mask-image: none !important;
      }

      .composer {
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        transform: none !important;
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        gap: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        background: #ffffff !important;
        border-top: 1px solid #e7e7e7 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      .chat-window.profile-panel-open .chat-stage,
      .chat-window.profile-panel-open .composer {
        margin-right: var(--chat-profile-panel-width, 420px) !important;
      }

      .chat-window.emoji-picker-open .chat-stage,
      .chat-window.emoji-picker-open .composer {
        margin-right: var(--chat-emoji-picker-width, min(420px, 38vw)) !important;
        transition: margin-right 0.24s cubic-bezier(0.2, 0.85, 0.3, 1) !important;
      }

      .chat-window.emoji-picker-open .chat-island,
      .page.ui-telegram-topbar .chat-window.emoji-picker-open .chat-island {
        left: 0 !important;
        right: var(--chat-emoji-picker-width, min(420px, 38vw)) !important;
        width: auto !important;
        max-width: none !important;
        transform: none !important;
        transition: right 0.24s cubic-bezier(0.2, 0.85, 0.3, 1) !important;
      }

      .composer-stack {
        gap: 0 !important;
        padding: 6px 10px 8px !important;
      }

      .composer-shell,
      .composer-shell:focus-within {
        min-height: 44px !important;
        padding: 0 2px !important;
        border: 0 !important;
        border-radius: 22px !important;
        background: #f1f1f1 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        transform: none !important;
        gap: 0 !important;
      }

      .composer-actions {
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        flex-shrink: 0 !important;
      }

      .composer-input-wrap {
        flex: 1 1 auto !important;
        min-width: 0 !important;
      }

      .composer-input,
      .composer-input-overlay,
      .composer-input-placeholder {
        color: #000000 !important;
        font-size: 16px !important;
        caret-color: #3390ec !important;
      }

      .composer-input::placeholder,
      .composer-input-placeholder {
        color: #a2acb4 !important;
      }

      .composer-icon,
      .composer-icon:hover,
      .composer-icon:active {
        width: 40px !important;
        height: 40px !important;
        margin: 0 !important;
        border-radius: 50% !important;
        background: transparent !important;
        color: #8d969c !important;
        box-shadow: none !important;
        transform: none !important;
      }

      .composer-icon:hover {
        color: #000000 !important;
      }

      .composer-icon svg,
      .composer-tg-icon,
      .composer-send-icon {
        width: 24px !important;
        height: 24px !important;
        fill: currentColor !important;
        stroke: none !important;
      }

      .composer-tg-icon path,
      .composer-send-icon path {
        fill: currentColor !important;
        stroke: none !important;
      }

      .composer-send,
      #composer-send,
      .composer-send:hover,
      .composer-send:active,
      .composer.send-active .composer-send,
      .composer-voice,
      .composer-voice:hover {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        margin: 0 !important;
        border: 0 !important;
        border-radius: 50% !important;
        background: transparent !important;
        color: #8d969c !important;
        box-shadow: none !important;
        transform: none !important;
        filter: none !important;
      }

      .composer.send-active .composer-send,
      .composer.send-active #composer-send {
        color: #3390ec !important;
      }

      .composer.send-active .composer-send-icon.mic {
        opacity: 0 !important;
      }

      .composer.send-active .composer-send-icon.send {
        opacity: 1 !important;
      }

      .composer-send-icon {
        width: 24px !important;
        height: 24px !important;
        fill: currentColor !important;
        stroke: none !important;
        opacity: 0 !important;
      }

      .composer-send-icon.mic {
        opacity: 1 !important;
      }

      .composer-send-icon path {
        fill: currentColor !important;
        stroke: none !important;
      }

      .chat-scroll-bottom {
        right: 16px !important;
        bottom: 72px !important;
      }

      .composer-reply-preview,
      .composer-attachment-preview {
        margin: 0 !important;
        border-radius: 0 !important;
        border-bottom: 1px solid #e7e7e7 !important;
        background: #ffffff !important;
      }

      @media (max-width: 900px) {
        .page.ui-telegram-topbar .chat-island,
        .chat-island {
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          max-width: none !important;
          transform: none !important;
          border-radius: 0 !important;
        }

        .composer {
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          max-width: none !important;
          transform: none !important;
        }
      }

      /* ================================================================
         Telegram Desktop chat look.
         Flat edge-to-edge panes: no card radius, no gutters, flat top bar
         and composer. All bubbles stack on the left; own messages are
         light blue, everyone else's are white, blue Telegram ticks.
         ================================================================ */
      .page.workspace-mode,
      .page.workspace-mode.ui-side-gutters-only {
        padding: 0 !important;
      }

      .workspace-shell {
        gap: 0 !important;
      }

      .workspace-main,
      .chat-window,
      .chat-stage {
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      .workspace-sidebar {
        border-right: 1px solid #e7e7e7 !important;
      }

      /* Composer: flat white bar, no gray pill */
      .composer-stack {
        gap: 0 !important;
        padding: 6px 8px !important;
      }

      .composer-shell,
      .composer-shell:focus-within {
        min-height: 48px !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .composer-input,
      .composer-input-overlay,
      .composer-input-placeholder {
        padding-left: 6px !important;
      }

      /* Bubbles: incoming on the left, outgoing on the right. Sequence
         radii at the end of this stylesheet override these defaults. */
      .message.incoming {
        justify-self: start !important;
        margin-left: 0 !important;
        margin-right: auto !important;
        border-radius: 12px 12px 12px 4px !important;
        transform-origin: left bottom !important;
        border: 0 !important;
        box-shadow: 0 1px 2px rgba(16, 35, 47, 0.14) !important;
      }

      .message:not(.incoming) {
        justify-self: end !important;
        margin-left: auto !important;
        margin-right: 8px !important;
        border-radius: 12px 12px 4px 12px !important;
        transform-origin: right bottom !important;
        border: 0 !important;
        box-shadow: 0 1px 2px rgba(16, 35, 47, 0.14) !important;
      }

      /* Own messages: Telegram light blue */
      .message:not(.incoming),
      .message:not(.incoming).message-media {
        background: #e1f2fb !important;
        color: #0f172a !important;
      }

      /* Other people's messages: white */
      .message.incoming,
      .message.incoming.message-media {
        background: #ffffff !important;
        color: #0f172a !important;
      }

      .message.incoming .message-meta {
        color: #a1aab3 !important;
      }

      .message:not(.incoming) .message-meta {
        color: #6fa8cb !important;
      }

      .message-checks {
        width: 16px !important;
        min-width: 16px !important;
        max-width: 16px !important;
        height: 14px !important;
        max-height: 14px !important;
        overflow: hidden !important;
        color: #3390ec !important;
        transform: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        top: 0 !important;
      }

      .message-state {
        width: 16px !important;
        min-width: 16px !important;
        max-width: 16px !important;
        height: 14px !important;
        max-height: 14px !important;
        overflow: hidden !important;
        transform: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        top: 0 !important;
        color: #6fa8cb !important;
      }

      .message-state svg {
        width: 12px !important;
        height: 12px !important;
        display: block !important;
      }

      .message-checks.message-checks-single {
        color: #5eb3ea !important;
      }

      .message-checks.message-checks-double {
        color: #3390ec !important;
      }

      .message-checks svg,
      .message-checks.message-checks-single svg,
      .message-checks.message-checks-double svg {
        width: 12px !important;
        height: 12px !important;
        stroke: currentColor !important;
        fill: none !important;
        stroke-width: 1.7 !important;
        stroke-linecap: round !important;
        stroke-linejoin: round !important;
      }

      .message-checks svg path {
        stroke: currentColor !important;
        fill: none !important;
      }

      .message-checks.message-checks-single svg path {
        stroke: #5eb3ea !important;
      }

      .message-checks.message-checks-double svg path {
        stroke: #3390ec !important;
      }

      .message-status-failed .message-meta,
      .message-status-failed .message-state {
        color: #e15555 !important;
      }

      .message .message-link {
        color: #3390ec !important;
      }

      .message .message-link:hover {
        color: #1c7ce0 !important;
      }

      /* Reply quote: Telegram-style bar */
      .message .message-reply,
      .message.incoming .message-reply {
        background: rgba(51, 144, 236, 0.08) !important;
        border-left: 3px solid #3aa3e3 !important;
        border-radius: 6px !important;
        padding: 5px 8px !important;
      }

      .message:not(.incoming) .message-reply {
        background: rgba(51, 144, 236, 0.12) !important;
      }

      .message .message-reply:hover,
      .message.incoming .message-reply:hover {
        background: rgba(51, 144, 236, 0.18) !important;
      }

      .message .message-reply-author,
      .message.incoming .message-reply-author {
        color: #2f95d6 !important;
      }

      .message .message-reply-text,
      .message.incoming .message-reply-text {
        color: #475569 !important;
      }

      .message:not(.incoming) .tg-audio-play,
      .message:not(.incoming) .message-audio-toggle {
        background: #3390ec !important;
        color: #ffffff !important;
      }

      .message:not(.incoming) .tg-audio-play:hover,
      .message:not(.incoming) .message-audio-toggle:hover {
        background: #1c7ce0 !important;
      }

      .message:not(.incoming) .tg-audio-seek-track,
      .message:not(.incoming) .message-audio-progress-bar,
      .message:not(.incoming) .audio-slider {
        background: rgba(51, 144, 236, 0.24) !important;
      }

      .message:not(.incoming) .tg-audio-seek-fill,
      .message:not(.incoming) .message-audio-progress-fill {
        background: #3390ec !important;
      }

      .message:not(.incoming) .tg-audio-seek-thumb,
      .message:not(.incoming) .message-audio-progress-thumb {
        background: #3390ec !important;
        box-shadow: 0 1px 4px rgba(15, 23, 42, 0.25) !important;
      }

      .message:not(.incoming) .message-audio-meta-line,
      .message:not(.incoming) .tg-audio-subtitle,
      .message:not(.incoming) .tg-audio-time {
        color: #6fa8cb !important;
      }

      .message:not(.incoming) .message-call-card {
        background: rgba(51, 144, 236, 0.1) !important;
        color: #0f172a !important;
      }

      .message:not(.incoming) .message-call-title {
        color: #0f172a !important;
      }

      .message:not(.incoming) .message-call-subtitle {
        color: #6fa8cb !important;
      }

      .message:not(.incoming) .message-mention,
      .message:not(.incoming) .message-mention:hover,
      .message-outgoing .message-mention,
      .outgoing .message-mention {
        color: #3390ec !important;
      }

      /* Telegram Desktop reference alignment (blue gradient + doodle wallpaper). */
      .page.workspace-mode,
      .page.workspace-mode.ui-side-gutters-only {
        padding: 0 !important;
        background: linear-gradient(180deg, #7ec0f4 0%, #9fd0f5 55%, #8fc8f7 100%) !important;
      }

      .page.workspace-mode::before {
        content: none !important;
        display: none !important;
        background: none !important;
        opacity: 0 !important;
      }

      .workspace-shell {
        gap: 0 !important;
        overflow: hidden !important;
        background: linear-gradient(180deg, #7ec0f4 0%, #9fd0f5 55%, #8fc8f7 100%) !important;
      }

      .workspace-sidebar {
        border: 0 !important;
        border-right: 1px solid #d8dfe4 !important;
        border-radius: 0 !important;
        background: #ffffff !important;
        box-shadow: none !important;
      }

      .workspace-main,
      .workspace-main.empty-chat {
        background: linear-gradient(180deg, #7ec0f4 0%, #9fd0f5 55%, #8fc8f7 100%) !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        position: relative !important;
        isolation: isolate !important;
      }

      .workspace-main::before {
        content: "" !important;
        display: block !important;
        position: absolute !important;
        inset: 0 !important;
        background-image: url("/assets/wallpaper.svg") !important;
        background-repeat: repeat !important;
        background-position: center top !important;
        background-size: 540px auto !important;
        opacity: 0.17 !important;
        mix-blend-mode: multiply !important;
        pointer-events: none !important;
        z-index: 0 !important;
      }

      .workspace-main > * {
        position: relative !important;
        z-index: 1 !important;
      }

      .chat-window,
      .chat-stage,
      .message-list {
        background: transparent !important;
        background-image: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      .chat-window,
      .chat-stage {
        overflow: hidden !important;
      }

      .chat-stage,
      .page.ui-telegram-topbar .chat-stage {
        --chat-stage-inline-pad: 0px;
        padding: 0 !important;
      }

      @media (min-width: 901px) {
        .workspace-shell {
          grid-template-columns: var(--sidebar-width, 380px) minmax(0, 1fr) !important;
        }
      }

      /* Flat Telegram header. */
      .page.ui-telegram-topbar .chat-island,
      .chat-island {
        height: 56px !important;
        min-height: 56px !important;
        padding: 0 8px 0 10px !important;
        border: 0 !important;
        border-bottom: 1px solid #dfe5e8 !important;
        border-radius: 0 !important;
        background: #ffffff !important;
        box-shadow: none !important;
      }

      .chat-island-copy {
        gap: 10px !important;
        min-height: 56px !important;
      }

      .page.ui-telegram-topbar .chat-header-avatar,
      .chat-header-avatar {
        display: none !important;
      }

      .chat-island strong,
      .chat-island-text strong,
      .chat-island-copy strong {
        font-size: 14px !important;
        font-weight: 600 !important;
        line-height: 18px !important;
      }

      .chat-island span,
      .chat-island-text span,
      .chat-island-copy span {
        font-size: 12px !important;
        line-height: 15px !important;
      }

      .chat-island-action {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        color: #707579 !important;
      }

      .chat-island-action svg,
      .chat-island-action .lucide,
      .chat-island-action svg:not(.lucide) {
        width: 20px !important;
        height: 20px !important;
        fill: none !important;
        stroke: currentColor !important;
        stroke-width: 1.8 !important;
      }

      .message {
        overflow: visible !important;
        contain: none !important;
      }

      /* Messages occupy the full blue pane with compact Telegram spacing. */
      .message-list {
        gap: 2px !important;
        margin: 0 !important;
        padding-top: calc(56px + 10px + var(--chat-top-offset, 0px) + var(--chat-group-call-top-offset, 0px) + var(--chat-group-call-join-offset, 0px)) !important;
        padding-right: 12px !important;
        padding-bottom: calc(var(--composer-height, 58px) + 10px) !important;
        padding-left: 52px !important;
        scroll-padding-top: 66px !important;
        scroll-padding-bottom: 68px !important;
        mask-image: none !important;
        -webkit-mask-image: none !important;
      }

      .message:not(.message-media),
      .message.incoming:not(.message-media) {
        width: max-content !important;
        min-width: min-content !important;
        max-width: min(480px, calc(100vw - 240px)) !important;
        margin-left: 0 !important;
        margin-right: auto !important;
        padding: 5px 8px 5px !important;
        border: 0 !important;
        border-radius: 12px 12px 12px 4px !important;
        box-shadow: 0 1px 1px rgba(31, 74, 98, 0.16) !important;
        transform-origin: left bottom !important;
        display: block !important;
        position: relative !important;
        word-break: normal !important;
        overflow-wrap: break-word !important;
      }

      .message:not(.incoming):not(.message-media) {
        border-radius: 12px 12px 4px 12px !important;
        margin-left: auto !important;
        margin-right: 8px !important;
        transform-origin: right bottom !important;
      }

      .message .message-reply,
      .message .message-visual,
      .message .message-group-video-event,
      .message .message-call-card {
        display: block !important;
        width: 100% !important;
        margin-bottom: 4px !important;
        clear: both !important;
      }

      .message:hover:not(.sending) {
        transform: none !important;
      }

      .message:not(.incoming),
      .message:not(.incoming).message-media {
        background: #d9effa !important;
        color: #17212b !important;
      }

      .message.incoming,
      .message.incoming.message-media {
        background: #ffffff !important;
        color: #17212b !important;
      }

      .message.message-media {
        width: fit-content !important;
        max-width: min(420px, 72%) !important;
        padding: 4px 4px 5px !important;
        border-radius: 12px !important;
      }

      .message::after {
        display: none !important;
      }

      .message.incoming.message-has-tail::after,
      .message:not(.incoming).message-has-tail::after {
        display: block !important;
      }

      .message.incoming.message-seq-single,
      .message.incoming.message-seq-first {
        border-radius: 11px 11px 3px 11px !important;
      }

      .message.incoming.message-seq-middle {
        border-radius: 3px 11px 3px 11px !important;
      }

      .message.incoming.message-seq-last {
        border-radius: 3px 11px 11px 3px !important;
      }

      .message:not(.incoming).message-seq-single,
      .message:not(.incoming).message-seq-first {
        border-radius: 11px 11px 11px 3px !important;
      }

      .message:not(.incoming).message-seq-middle {
        border-radius: 11px 3px 11px 3px !important;
      }

      .message:not(.incoming).message-seq-last {
        border-radius: 11px 3px 11px 11px !important;
      }

      .message.message-seq-continued,
      .group-incoming-row--continued {
        margin-top: 0 !important;
      }

      .group-incoming-row {
        align-items: flex-end !important;
      }

      .group-incoming-avatar.placeholder {
        visibility: hidden !important;
        transform: none !important;
      }

      .message-body {
        font-size: 14px !important;
        line-height: 1.35 !important;
        color: inherit !important;
        display: inline !important;
        word-break: normal !important;
        overflow-wrap: break-word !important;
        white-space: pre-wrap !important;
      }

      .message:not(.message-media) .message-body {
        display: inline !important;
        padding-right: 0 !important;
      }

      .message-meta {
        display: inline-flex !important;
        align-items: center !important;
        float: right !important;
        clear: none !important;
        gap: 2px !important;
        margin-top: 5px !important;
        margin-left: 7px !important;
        margin-right: -1px !important;
        margin-bottom: 0 !important;
        padding-left: 0 !important;
        font-size: 11px !important;
        line-height: 14px !important;
        height: 14px !important;
        max-height: 14px !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        transform: none !important;
        user-select: none !important;
        position: relative !important;
        top: 2px !important;
      }

      .message-meta-time {
        font-variant-numeric: tabular-nums !important;
        letter-spacing: 0 !important;
        white-space: nowrap !important;
      }

      .message.incoming .message-meta {
        color: #99a5ad !important;
      }

      .message:not(.incoming) .message-meta {
        color: #5f9fc5 !important;
      }

      .message-checks {
        width: 16px !important;
        min-width: 16px !important;
        max-width: 16px !important;
        height: 14px !important;
        max-height: 14px !important;
        overflow: hidden !important;
        color: #3390ec !important;
        transform: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        top: 0 !important;
      }

      .message-state {
        width: 16px !important;
        min-width: 16px !important;
        max-width: 16px !important;
        height: 14px !important;
        max-height: 14px !important;
        overflow: hidden !important;
        transform: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        top: 0 !important;
        color: #6fa8cb !important;
      }

      .message-state svg {
        width: 12px !important;
        height: 12px !important;
        display: block !important;
      }

      .message-checks.message-checks-single {
        color: #5eb3ea !important;
      }

      .message-checks.message-checks-double {
        color: #3390ec !important;
      }

      .message-checks svg,
      .message-checks.message-checks-single svg,
      .message-checks.message-checks-double svg {
        width: 12px !important;
        height: 12px !important;
        fill: none !important;
        stroke: currentColor !important;
        stroke-linecap: round !important;
        stroke-linejoin: round !important;
      }

      .message-checks svg path {
        stroke: currentColor !important;
        fill: none !important;
      }

      .message-checks.message-checks-single svg path {
        stroke: #5eb3ea !important;
      }

      .message-checks.message-checks-double svg path {
        stroke: #3390ec !important;
      }

      /* Avatar is kept inside the article DOM so message actions stay intact. */
      .message-avatar {
        position: absolute !important;
        left: -42px !important;
        bottom: 0 !important;
        width: 34px !important;
        height: 34px !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        overflow: hidden !important;
        border-radius: 50% !important;
        background: #5aa9d6 !important;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.22) !important;
        z-index: 2 !important;
        pointer-events: none !important;
      }

      .message-avatar .generated-avatar-photo,
      .message-avatar img {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
        border-radius: 50% !important;
        object-fit: cover !important;
      }

      .group-incoming-row {
        width: min(96%, 720px) !important;
        max-width: 96% !important;
        gap: 8px !important;
        margin-left: -42px !important;
        justify-self: start !important;
        margin-right: auto !important;
        align-items: flex-end !important;
        overflow: visible !important;
      }

      .group-incoming-main .message.incoming {
        max-width: min(680px, calc(100vw - 490px)) !important;
      }

      .group-incoming-avatar {
        width: 34px !important;
        height: 34px !important;
      }

      .group-incoming-sender {
        margin: 0 0 2px 4px !important;
        color: #ffffff;
        font-size: 12px !important;
        text-shadow: 0 1px 1px rgba(15, 54, 78, 0.3) !important;
      }

      .message-day-separator {
        margin: 8px 0 10px -42px !important;
      }

      .message-day-separator span {
        min-width: 0 !important;
        min-height: 22px !important;
        padding: 3px 10px !important;
        border: 0 !important;
        border-radius: 11px !important;
        background: rgba(43, 108, 148, 0.76) !important;
        color: #ffffff !important;
        box-shadow: 0 1px 2px rgba(20, 67, 95, 0.18) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        font-size: 11px !important;
        font-weight: 600 !important;
      }

      /* Telegram-sized media and audio cards. */
      .message.message-media .message-visual,
      .message.message-media .message-audio-wrap {
        gap: 5px !important;
        margin: 0 !important;
      }

      .message-image-shell,
      .message.message-media .message-image-shell {
        max-width: min(420px, 72%) !important;
        max-height: 420px !important;
        min-width: 120px !important;
        min-height: 100px !important;
        border-radius: 8px !important;
      }

      .message.message-media .message-image {
        max-height: 420px !important;
        border-radius: 8px !important;
      }

      .message-caption {
        margin: 4px 4px 0 !important;
      }

      .message-audio-card,
      .message.incoming .message-audio-card {
        min-width: 230px !important;
        max-width: min(340px, 58vw) !important;
        gap: 9px !important;
        padding: 3px 5px 3px 3px !important;
        border-radius: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      .message-audio-toggle,
      .message .tg-audio-play {
        width: 40px !important;
        height: 40px !important;
        background: #3390ec !important;
        color: #ffffff !important;
      }

      .message-audio-name,
      .message.incoming .message-audio-name {
        color: #17212b !important;
        font-size: 13px !important;
        font-weight: 600 !important;
      }

      .message-audio-meta-line,
      .message.incoming .message-audio-meta-line,
      .message:not(.incoming) .message-audio-meta-line {
        color: #6f9fba !important;
        font-size: 11px !important;
      }

      /* Composer: one flat white strip, with no surrounding pill. */
      .composer {
        min-height: 54px !important;
        background: #ffffff !important;
        border: 0 !important;
        border-top: 1px solid #dfe5e8 !important;
      }

      .composer-stack {
        gap: 0 !important;
        padding: 0 7px !important;
      }

      .composer-shell,
      .composer-shell:focus-within {
        min-height: 53px !important;
        padding: 0 !important;
        border: 0 !important;
        border-radius: 0 !important;
        background: #ffffff !important;
        box-shadow: none !important;
      }

      .composer-input-wrap,
      .composer-input {
        min-height: 52px !important;
      }

      .composer-input {
        padding: 15px 6px !important;
        color: #17212b !important;
        font-size: 14px !important;
        line-height: 20px !important;
      }

      .composer-input-overlay {
        padding: 15px 6px !important;
        font-size: 14px !important;
        line-height: 20px !important;
      }

      .composer-icon,
      .composer-send,
      #composer-send {
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        margin: 0 !important;
        color: #8c969c !important;
      }

      .composer-icon svg,
      .composer-tg-icon,
      .composer-send-icon,
      .composer-icon .lucide,
      .composer-send .lucide {
        width: 24px !important;
        height: 24px !important;
        fill: currentColor !important;
        stroke: none !important;
      }

      .composer-tg-icon path,
      .composer-send-icon path {
        fill: currentColor !important;
        stroke: none !important;
      }

      .emoji-picker {
        position: absolute !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        left: auto !important;
        width: 0 !important;
        max-width: none !important;
        height: auto !important;
        max-height: none !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        opacity: 1 !important;
        transform: none !important;
        transition: width 0.24s cubic-bezier(0.2, 0.85, 0.3, 1) !important;
        pointer-events: none !important;
        border: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        z-index: 24 !important;
      }

      .emoji-picker.open {
        display: flex !important;
        width: var(--chat-emoji-picker-width, min(420px, 38vw)) !important;
        pointer-events: auto !important;
        border-left: 1px solid #dfe5e8 !important;
        box-sizing: border-box !important;
      }

      .chat-window.emoji-picker-open {
        overflow: visible !important;
      }

      .chat-window.emoji-picker-open .chat-stage,
      .chat-window.emoji-picker-open .composer {
        margin-right: var(--chat-emoji-picker-width, min(420px, 38vw)) !important;
        transition: margin-right 0.24s cubic-bezier(0.2, 0.85, 0.3, 1) !important;
      }

      .chat-window.emoji-picker-open .chat-island,
      .page.ui-telegram-topbar .chat-window.emoji-picker-open .chat-island {
        left: 0 !important;
        right: var(--chat-emoji-picker-width, min(420px, 38vw)) !important;
        width: auto !important;
        max-width: none !important;
        min-width: 0 !important;
        transform: none !important;
        transition: right 0.24s cubic-bezier(0.2, 0.85, 0.3, 1) !important;
      }

      .chat-window.emoji-picker-open.profile-panel-open .chat-stage,
      .chat-window.emoji-picker-open.profile-panel-open .composer {
        margin-right: var(--chat-profile-panel-width, 420px) !important;
      }

      .emoji-picker-body {
        flex: 1 1 auto !important;
        min-height: 0 !important;
      }

      .workspace-sidebar {
        border-radius: 0 !important;
      }

      .chat-scroll-bottom {
        right: 14px !important;
        bottom: 66px !important;
      }

      @media (max-width: 900px) {
        .message-list {
          padding-left: 8px !important;
          padding-right: 8px !important;
          align-content: start !important;
          overflow-y: auto !important;
          touch-action: pan-y !important;
        }

        .message:not(.message-media),
        .message.incoming:not(.message-media) {
          max-width: min(86%, calc(100% - 12px)) !important;
        }

        .message.message-media {
          max-width: min(420px, 86%) !important;
        }

        .group-incoming-main {
          max-width: min(86%, calc(100% - 12px)) !important;
        }

        .group-incoming-row,
        .message-day-separator {
          margin-left: 0 !important;
        }
      }

      /* Sequence grouping: avatars/tails in-flow. Never set overflow-x:visible
         on .chat-stage/.chat-window — that computes to overflow:auto and lifts
         the composer off the bottom of the viewport. */
      .chat-window,
      .chat-stage {
        overflow: hidden !important;
      }
      .chat-window.emoji-picker-open {
        overflow: visible !important;
      }
      .composer {
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        transform: none !important;
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        z-index: 20 !important;
      }
      .message-list {
        gap: 2px !important;
        padding-left: 10px !important;
        padding-right: 12px !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
      }
      .message,
      .group-incoming-row,
      .group-incoming-main {
        position: relative !important;
        overflow: visible !important;
        contain: none !important;
      }
      .message-avatar {
        display: none !important;
      }
      .group-incoming-row {
        display: flex !important;
        align-items: flex-end !important;
        justify-self: start !important;
        width: max-content !important;
        max-width: calc(100% - 16px) !important;
        margin-left: 0 !important;
        margin-right: auto !important;
        gap: 8px !important;
      }
      .group-incoming-main {
        flex: 0 1 auto !important;
        min-width: min-content !important;
        width: max-content !important;
        max-width: min(480px, calc(100vw - 240px)) !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .group-incoming-avatar,
      .group-incoming-avatar.placeholder {
        width: 36px !important;
        height: 36px !important;
        flex: 0 0 36px !important;
        border-radius: 50% !important;
        overflow: hidden !important;
        align-self: flex-end !important;
        visibility: visible !important;
        opacity: 1 !important;
        transform: none !important;
      }
      .group-incoming-avatar.placeholder {
        visibility: hidden !important;
        background: transparent !important;
        box-shadow: none !important;
      }
      .group-incoming-avatar .generated-avatar-photo,
      .group-incoming-avatar img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block !important;
        border-radius: 50% !important;
      }
      .group-incoming-sender {
        text-shadow: none !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        line-height: 1.2 !important;
        margin: 0 0 2px 6px !important;
      }
      .message-day-separator {
        margin-left: 0 !important;
        justify-self: center !important;
      }
      .message::after,
      .message.incoming.message-has-tail::after,
      .message:not(.incoming).message-has-tail::after,
      .message.message-media.message-has-tail::after {
        display: none !important;
        content: none !important;
      }
      .message:not(.incoming) {
        justify-self: end !important;
        margin-left: auto !important;
        margin-right: 8px !important;
      }
      .message.incoming {
        justify-self: start !important;
        margin-left: 0 !important;
        margin-right: auto !important;
      }
      .group-incoming-main .message.incoming:not(.message-media),
      .group-incoming-main .message:not(.message-media) {
        margin-top: 0 !important;
        margin-left: 0 !important;
        margin-right: auto !important;
        width: max-content !important;
        min-width: min-content !important;
        max-width: min(480px, calc(100vw - 240px)) !important;
      }
      .group-incoming-main .message.message-media,
      .message.message-media {
        max-width: min(420px, 72%) !important;
      }
      .message:not(.incoming).message-seq-single,
      .message:not(.incoming).message-seq-first,
      .message:not(.incoming).message-media.message-seq-single,
      .message:not(.incoming).message-media.message-seq-first {
        margin-top: 8px !important;
        border-radius: 12px 12px 4px 12px !important;
      }
      .message:not(.incoming).message-seq-middle,
      .message:not(.incoming).message-seq-last,
      .message:not(.incoming).message-media.message-seq-middle,
      .message:not(.incoming).message-media.message-seq-last {
        margin-top: 0 !important;
        border-radius: 12px 4px 4px 12px !important;
      }
      .message:not(.incoming).message-seq-continued {
        margin-top: 0 !important;
      }
      .message.incoming.message-seq-single,
      .message.incoming.message-seq-first,
      .message.incoming.message-media.message-seq-single,
      .message.incoming.message-media.message-seq-first {
        border-radius: 12px 12px 12px 4px !important;
      }
      .message.incoming.message-seq-middle,
      .message.incoming.message-seq-last,
      .message.incoming.message-media.message-seq-middle,
      .message.incoming.message-media.message-seq-last {
        border-radius: 4px 12px 12px 4px !important;
      }
      .group-incoming-row:not(.group-incoming-row--continued) {
        margin-top: 8px !important;
      }
      .group-incoming-row--continued,
      .message.message-seq-continued {
        margin-top: 0 !important;
      }
      .tg-bubble-tail {
        position: absolute !important;
        bottom: 0 !important;
        width: 8px !important;
        height: 17px !important;
        pointer-events: none !important;
        display: block !important;
        flex: none !important;
        z-index: 4 !important;
        overflow: visible !important;
        background: none !important;
        -webkit-mask: none !important;
        mask: none !important;
        line-height: 0 !important;
      }
      .tg-bubble-tail-svg {
        display: block !important;
        width: 8px !important;
        height: 17px !important;
      }
      .message.incoming.message-has-tail,
      .message:not(.incoming).message-has-tail {
        overflow: visible !important;
      }
      .message.incoming .tg-bubble-tail {
        left: -8px !important;
        right: auto !important;
        color: #ffffff !important;
        transform: none !important;
      }
      .message:not(.incoming) .tg-bubble-tail {
        left: auto !important;
        right: -8px !important;
        color: #d9effa !important;
        transform: scaleX(-1) !important;
      }
      .group-incoming-avatar.visible {
        animation: groupIncomingAvatarIn 340ms cubic-bezier(0.22, 0.92, 0.28, 1) both !important;
      }
      .group-incoming-row--continued .group-incoming-avatar.visible {
        animation: groupIncomingAvatarSlide 340ms cubic-bezier(0.22, 0.92, 0.28, 1) both !important;
      }
      @keyframes groupIncomingAvatarIn {
        0% {
          opacity: 0;
          transform: translateY(10px) scale(0.94);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes groupIncomingAvatarSlide {
        0% {
          opacity: 0;
          transform: translateY(8px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .workspace-main.empty-chat .composer,
      .workspace-main.empty-chat #chat-composer,
      .chat-stage.empty .composer,
      .chat-stage.empty #chat-composer {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        height: 0 !important;
        min-height: 0 !important;
        max-height: 0 !important;
        overflow: hidden !important;
        border: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
      }

      .workspace-sidebar .dialog-posts-badge {
        display: none !important;
      }

      @media (max-width: 900px) {
        html,
        body,
        html:has(.page.workspace-mode),
        body:has(.page.workspace-mode) {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        .page.workspace-mode {
          width: 100% !important;
          max-width: 100% !important;
          height: 100dvh !important;
          max-height: 100dvh !important;
          padding: 0 !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        .page.workspace-mode::before {
          content: none !important;
          display: none !important;
        }

        .workspace-shell,
        .workspace-sidebar {
          width: 100% !important;
          max-width: 100% !important;
          height: 100dvh !important;
          max-height: 100dvh !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        .workspace-main,
        .chat-window {
          width: 100% !important;
          max-width: 100% !important;
          height: 100dvh !important;
          max-height: 100dvh !important;
          overflow: hidden !important;
        }

        .workspace-main:not(.empty-chat) {
          background: linear-gradient(180deg, #7ec0f4 0%, #9fd0f5 55%, #8fc8f7 100%) !important;
        }

        .chat-window {
          --chat-header-height: calc(60px + env(safe-area-inset-top, 0px)) !important;
        }

        .page.ui-telegram-topbar .chat-island,
        .chat-island {
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          max-width: none !important;
          height: var(--chat-header-height) !important;
          min-height: var(--chat-header-height) !important;
          padding: env(safe-area-inset-top, 0px) 6px 0 4px !important;
          border-radius: 0 !important;
          box-sizing: border-box !important;
        }

        .chat-header-avatar {
          width: 46px !important;
          height: 46px !important;
          min-width: 46px !important;
        }

        .chat-island strong,
        .chat-island-text strong {
          font-size: 17px !important;
        }

        .chat-island span,
        .chat-island-text span {
          font-size: 13px !important;
        }

        .chat-island-action {
          width: 42px !important;
          height: 42px !important;
        }

        .chat-island-action svg {
          width: 22px !important;
          height: 22px !important;
        }

        .chat-stage,
        .page.ui-telegram-topbar .chat-stage {
          padding: 0 !important;
        }

        .message-list {
          padding-top: calc(var(--chat-header-height, 56px) + 6px) !important;
          padding-bottom: calc(var(--composer-height, 56px) + 6px) !important;
          padding-left: 8px !important;
          padding-right: 8px !important;
          align-content: start !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          touch-action: pan-y !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior: contain !important;
          contain: none !important;
        }

        .message-body {
          font-size: 16px !important;
          line-height: 1.4 !important;
        }

        .composer,
        #chat-composer {
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          transform: none !important;
          padding: 8px 10px calc(10px + env(safe-area-inset-bottom, 0px)) !important;
          background: #ffffff !important;
          border-top: 1px solid #e7e7e7 !important;
          box-sizing: border-box !important;
        }

        .composer.channel-guest-mode,
        #chat-composer.channel-guest-mode {
          padding: 0 0 env(safe-area-inset-bottom, 0px) !important;
        }

        .channel-subscribe-button {
          background: transparent !important;
          color: #3390ec !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          width: 100% !important;
          min-width: 0 !important;
          max-width: none !important;
          height: 52px !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
        }

        .composer-stack {
          padding: 0 !important;
          gap: 0 !important;
        }

        .composer-shell,
        .composer-shell:focus-within {
          min-height: 48px !important;
          border-radius: 24px !important;
          background: #f1f1f1 !important;
        }

        .composer-icon,
        .composer-send,
        .composer-voice {
          width: 44px !important;
          height: 44px !important;
          min-width: 44px !important;
        }

        .composer-input,
        .composer-input-placeholder {
          font-size: 16px !important;
        }

        .message:not(.message-media),
        .message.incoming:not(.message-media) {
          max-width: 88% !important;
        }

        .message.message-media {
          max-width: min(420px, 88%) !important;
        }

        .group-incoming-row,
        .message-day-separator {
          margin-left: 0 !important;
        }

        .workspace-main::before {
          content: "" !important;
          display: block !important;
          mix-blend-mode: normal !important;
          opacity: 0.16 !important;
          background-image: url("/assets/wallpaper.svg") !important;
          background-repeat: repeat !important;
          background-position: center top !important;
          background-size: 420px auto !important;
          will-change: auto !important;
          transform: none !important;
          filter: none !important;
        }

        .dialog-list {
          -webkit-overflow-scrolling: touch !important;
          contain: layout paint !important;
        }

        .dialog-item {
          min-height: 80px !important;
          padding: 11px 12px !important;
          gap: 13px !important;
          contain: layout style !important;
          box-shadow: none !important;
        }

        .dialog-avatar,
        .dialog-item .user-avatar {
          width: 58px !important;
          height: 58px !important;
          min-width: 58px !important;
        }

        .dialog-line strong,
        .dialog-item strong {
          font-size: 16.5px !important;
        }

        .dialog-preview,
        .dialog-preview-copy {
          font-size: 14px !important;
        }

        .dialog-line span,
        .dialog-meta {
          font-size: 13px !important;
        }

        .dialog-unread-badge {
          min-width: 22px !important;
          height: 22px !important;
          font-size: 12px !important;
        }

        .sidebar-search-input,
        .sidebar-search-field,
        #sidebar-search {
          font-size: 16px !important;
          min-height: 42px !important;
        }

        .workspace-sidebar,
        .workspace-main {
          transition: transform 0.18s cubic-bezier(0.32, 0.72, 0, 1) !important;
        }
      }
`;
