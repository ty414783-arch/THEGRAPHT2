export const composerStyles = `
      .composer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        flex-shrink: 0;
        margin-top: auto;
        padding-top: 12px;
        position: relative;
        z-index: 6;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
        will-change: transform;
        width: 100%;
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      }
      .composer::before {
        content: none;
        position: absolute;
        left: -18px;
        right: -18px;
        bottom: -14px;
        height: 0;
        pointer-events: none;
        z-index: 0;
        background: transparent;
        display: none;
      }
      .composer-stack {
        width: 100%;
        max-width: none;
        flex: 1 1 auto;
        min-width: 0;
        padding: 0 0 0;
        display: grid;
        gap: 10px;
        position: relative;
        z-index: 1;
        margin: 0;
      }
      .emoji-picker {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 0;
        max-width: none;
        height: auto;
        max-height: none;
        display: none;
        flex-direction: column;
        gap: 0;
        padding: 0;
        border-radius: 0;
        background: #ffffff !important;
        border: 0 !important;
        border-left: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        overflow: hidden;
        color: #0f172a !important;
        opacity: 1;
        transform: none;
        pointer-events: none;
        transition: none;
        z-index: 24;
      }
      .emoji-picker.open {
        display: flex;
        width: var(--chat-emoji-picker-width, min(420px, 38vw));
        pointer-events: auto;
        border-left: 1px solid #dfe5e8 !important;
        box-sizing: border-box;
      }
      .chat-window {
        --chat-emoji-picker-width: min(420px, 38vw);
      }
      .chat-window.emoji-picker-open {
        overflow: visible;
      }
      .chat-window.emoji-picker-open .chat-stage,
      .chat-window.emoji-picker-open .composer {
        margin-right: var(--chat-emoji-picker-width, min(420px, 38vw));
        transition: none;
      }
      .chat-window.emoji-picker-open .chat-island,
      .page.ui-telegram-topbar .chat-window.emoji-picker-open .chat-island {
        left: 10px;
        right: calc(var(--chat-emoji-picker-width, min(420px, 38vw)) + 26px);
        width: auto;
        max-width: none;
        min-width: 0;
        transform: none;
      }
      .emoji-picker-search-wrap {
        padding: 12px 14px 8px;
        flex-shrink: 0;
        position: relative;
      }
      .emoji-picker-search {
        width: 100%;
        box-sizing: border-box;
        height: 36px;
        padding: 0 12px 0 36px;
        border: 1px solid rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        background: #f1f5f9 !important;
        color: #0f172a !important;
        font-size: 14px;
        font-weight: 400;
        outline: none;
        transition: background 0.2s ease, box-shadow 0.2s ease;
      }
      .emoji-picker-search::placeholder {
        color: #94a3b8 !important;
      }
      .emoji-picker-search:focus {
        background: #ffffff !important;
        box-shadow: 0 0 0 2px rgba(51, 144, 236, 0.3) !important;
      }
      .emoji-picker-search-icon {
        position: absolute;
        left: 24px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #64748b !important;
        pointer-events: none;
        margin-top: 2px;
      }
      .emoji-picker-head {
        display: flex;
        align-items: center;
        gap: 6px;
        height: 44px;
        padding: 0 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
        overflow-x: auto;
        overflow-y: clip;
        scrollbar-width: none;
        box-sizing: border-box;
        flex-shrink: 0;
      }

      .emoji-picker-head::-webkit-scrollbar {
        display: none;
      }
      .emoji-picker-tab {
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: #64748b !important;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        padding: 0 !important;
        font-size: 19px;
        line-height: 1;
        flex-shrink: 0;
        outline: none !important;
        box-shadow: none !important;
        -webkit-tap-highlight-color: transparent !important;
        -webkit-touch-callout: none !important;
        user-select: none !important;
        appearance: none;
        -webkit-appearance: none;
        transition: 
          color 0.2s ease, 
          background-color 0.2s ease, 
          transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .emoji-picker-tab:hover {
        color: #0f172a !important;
        background: rgba(0, 0, 0, 0.05) !important;
      }
      .emoji-picker-tab.active {
        color: #3390ec !important;
        background: rgba(51, 144, 236, 0.1) !important;
      }
          background-color 0.2s ease, 
          transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .emoji-button {
        -webkit-tap-highlight-color: transparent !important;
      }
      .emoji-picker *,
      .emoji-picker *:focus,
      .emoji-picker *:active,
      .emoji-picker *:focus-visible,
      .emoji-picker *:focus-within,
      .attachment-modal-emoji-picker *,
      .attachment-modal-emoji-picker *:focus,
      .attachment-modal-emoji-picker *:active,
      .attachment-modal-emoji-picker *:focus-visible,
      .attachment-modal-emoji-picker *:focus-within {
        outline: none !important;
        box-shadow: none !important;
        -webkit-tap-highlight-color: transparent !important;
        -webkit-touch-callout: none !important;
      }
      .emoji-picker-tab::-moz-focus-inner,
      .emoji-button::-moz-focus-inner {
        border: 0 !important;
      }
      .emoji-picker button,
      .attachment-modal-emoji-picker button {
        -webkit-tap-highlight-color: transparent !important;
        user-select: none !important;
      }
      .emoji-picker-tab::after {
        display: none;
      }
      .emoji-picker-tab-image {
        width: 20px;
        height: 20px;
        display: block;
        object-fit: contain;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
      }
      .emoji-picker-tab-icon {
        width: 18px;
        height: 18px;
        display: block;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
        overflow: visible;
        flex-shrink: 0;
      }
      .emoji-picker-tab svg {
        width: 18px !important;
        height: 18px !important;
        display: block !important;
        flex-shrink: 0 !important;
        aspect-ratio: 1 / 1 !important;
      }
      .emoji-picker-tab-icon * {
        vector-effect: non-scaling-stroke;
      }
      .emoji-picker-tab-icon.circle-stroke * {
        stroke: currentColor;
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .emoji-picker-tab-icon.solid-fill * {
        fill: currentColor;
      }
      .emoji-picker-tab:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.06);
      }
      .emoji-picker-tab.active {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
      }
      .emoji-picker-tab.active::after {
        opacity: 1;
        transform: translateX(-50%) scaleX(1);
      }
      .emoji-picker-tab:active {
        transform: scale(0.88);
        background: rgba(255, 255, 255, 0.04) !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .emoji-picker-slide-container {
        flex: 1;
        min-height: 0;
        overflow: hidden;
        position: relative;
        display: flex;
      }
      .emoji-picker-slide-track {
        display: flex;
        width: 200%;
        flex-shrink: 0;
        min-height: 0;
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .emoji-picker-slide-track.no-transition {
        transition: none;
      }
      .emoji-picker-body {
        overflow-y: auto;
        overflow-x: hidden;
        width: 50%;
        flex-shrink: 0;
        padding: 10px 12px 14px;
        min-height: 0;
        position: relative;
        box-sizing: border-box;
      }
      .gif-picker-body {
        overflow-y: auto;
        width: 50%;
        flex-shrink: 0;
        padding: 10px 14px;
        min-height: 0;
        position: relative;
        box-sizing: border-box;
      }
      .emoji-picker-body::-webkit-scrollbar {
        width: 6px;
      }
      .emoji-picker-body::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15) !important;
        border-radius: 999px;
        transition: background 0.2s ease;
      }
      .emoji-picker-body::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.25) !important;
      }
      .emoji-picker-section + .emoji-picker-section {
        margin-top: 12px;
      }
      .emoji-picker-title {
        margin: 6px 0 8px;
        font-size: 11px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #64748b !important;
      }
      .emoji-picker-grid {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
        gap: 2px;
        padding: 0 2px;
      }
      .emoji-button {
        width: 100%;
        aspect-ratio: 1;
        border: 0;
        border-radius: 8px;
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
        font-size: 24px;
        line-height: 1;
        position: relative;
        contain: layout style;
        transition: background-color 0.12s ease, transform 0.12s ease;
      }
      .emoji-button-image {
        width: 26px;
        height: 26px;
        object-fit: contain;
        display: block;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
      }
      .emoji-button:hover {
        background: rgba(0, 0, 0, 0.06) !important;
        transform: none;
        box-shadow: none !important;
      }
      .emoji-button:hover .emoji-button-image {
        transform: none;
      }
      .emoji-button:active {
        transform: scale(0.92);
        background: rgba(0, 0, 0, 0.1) !important;
      }
      .emoji-picker-foot {
        display: none !important;
      }
      .emoji-picker-mode-bar {
        display: flex;
        align-items: center;
        gap: 0;
        padding: 6px 12px max(10px, env(safe-area-inset-bottom, 0px));
        border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      .emoji-picker-mode-tab {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        height: 36px;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #64748b !important;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .emoji-picker-mode-tab .lucide {
        font-size: 20px;
      }
      .emoji-picker-mode-tab:hover {
        background: rgba(0, 0, 0, 0.05) !important;
        color: #0f172a !important;
      }
      .emoji-picker-mode-tab:active {
        transform: scale(0.95);
      }
      .emoji-picker-mode-tab.active {
        background: rgba(51, 144, 236, 0.1) !important;
        color: #3390ec !important;
      }
      .emoji-picker-mode-tab.disabled {
        opacity: 0.35;
        cursor: not-allowed;
        pointer-events: none;
      }
      .emoji-picker-mode-tab.disabled:hover {
        background: transparent;
        color: rgba(255, 255, 255, 0.45);
      }
      .gif-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4px;
      }
      .gif-grid-item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        aspect-ratio: 1;
        background: rgba(255, 255, 255, 0.04);
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
      }
      .gif-grid-item:hover {
        transform: scale(1.04);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      .gif-grid-item:active {
        transform: scale(0.96);
      }
      .gif-grid-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .gif-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 40px 20px;
        text-align: center;
      }
      .gif-empty-state .lucide {
        font-size: 48px;
        color: rgba(255, 255, 255, 0.15);
      }
      .gif-empty-state-text {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.35);
        line-height: 1.5;
      }
      .gif-picker-body::-webkit-scrollbar,
      .emoji-picker-body::-webkit-scrollbar {
        width: 6px;
      }
      .gif-picker-body::-webkit-scrollbar-thumb,
      .emoji-picker-body::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 999px;
      }
      .gif-picker-body::-webkit-scrollbar-thumb:hover,
      .emoji-picker-body::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.24);
      }
      .emoji-picker-no-results {
        padding: 30px 20px;
        text-align: center;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.35);
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .attach-menu {
        position: absolute;
        right: 8px;
        bottom: calc(100% + 18px);
        min-width: 196px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        backdrop-filter: blur(18px);
        opacity: 0;
        transform: translateY(10px) scale(0.985);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
        z-index: 16;
      }
      .attach-menu.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .attach-menu-item {
        width: 100%;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #1e293b;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 12px;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.12s ease, opacity 0.12s ease;
      }
      .attach-menu-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .attach-menu-item:active {
        transform: scale(0.985);
      }
      .attach-menu-item.disabled {
        color: rgba(241,244,251,0.42);
        background: rgba(255,255,255,0.02);
        cursor: not-allowed;
        pointer-events: none;
      }
      .attach-menu-item.disabled:hover {
        background: rgba(255,255,255,0.02);
      }
      .attach-menu-item svg {
        width: 21px;
        height: 21px;
        stroke: currentColor;
        fill: none;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex-shrink: 0;
      }
      .composer-attachment-preview {
        display: none;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(20, 24, 32, 0.94);
      }
      .composer-attachment-preview.visible {
        display: flex;
      }
      .composer-attachment-thumb {
        width: 72px;
        height: 72px;
        border-radius: 18px;
        overflow: hidden;
        flex-shrink: 0;
        background: rgba(255,255,255,0.06);
      }
      .composer-attachment-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .composer-attachment-copy {
        min-width: 0;
        flex: 1;
      }
      .composer-attachment-title {
        margin: 0 0 6px;
        font-size: 15px;
        font-weight: 700;
        color: #eef2fb;
      }
      .composer-attachment-meta {
        margin: 0;
        font-size: 13px;
        color: #95a2b9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .composer-attachment-remove {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 0;
        background: rgba(255,255,255,0.06);
        color: #eef2fb;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        flex-shrink: 0;
      }
      .composer-reply-preview {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 64px;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding: 10px 14px;
        margin: 0;
        border-radius: 18px;
        border-left: 3px solid rgba(255, 184, 77, 0.95);
        background: rgba(75, 54, 35, 0.88);
        color: #fff6ea;
        cursor: pointer;
        transform: translateY(14px) scale(0.985);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform-origin: center bottom;
        transition: opacity 0.24s ease, transform 0.24s cubic-bezier(0.2, 0.85, 0.2, 1);
        will-change: transform, opacity;
      }
      .composer-reply-preview.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        visibility: visible;
        pointer-events: auto;
      }
      .composer-reply-copy {
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .composer-reply-author {
        font-size: 13px;
        font-weight: 800;
        color: #ffb14e;
        line-height: 1.1;
      }
      .composer-reply-text {
        font-size: 14px;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .composer-reply-close {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 0;
        background: rgba(255,255,255,0.08);
        color: #ffd6a8;
        font-size: 24px;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .composer-reply-close:hover {
        background: rgba(255,255,255,0.14);
      }
      .composer-shell {
        min-height: 46px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 6px;
        border-radius: 26px;
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03);
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        transition: border-color 0.2s var(--motion-standard), box-shadow 0.2s var(--motion-standard), transform 0.2s var(--motion-standard), background 0.2s var(--motion-standard), min-height 0.18s ease;
        width: 100%;
        position: relative;
        overflow: visible;
      }
      .composer-shell::after {
        content: none;
      }
      .composer-shell:focus-within {
        border-color: rgba(99, 102, 241, 0.35);
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 6px 24px rgba(99, 102, 241, 0.12), 0 1px 3px rgba(0, 0, 0, 0.04);
        transform: none;
      }
      .composer-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 0;
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #64748b;
        padding: 6px;
        flex-shrink: 0;
        cursor: pointer;
        margin: 5px 4px;
        transition: transform 0.12s ease, opacity 0.12s ease, background 0.12s ease, color 0.12s ease;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
      }
      .composer-icon:hover {
        color: #0f172a;
        background: rgba(0, 0, 0, 0.05);
        opacity: 1;
      }
      .composer-icon:active {
        transform: scale(0.93);
      }
      .composer-icon-image {
        width: 24px;
        height: 24px;
        object-fit: contain;
        display: block;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        pointer-events: none;
      }
      .composer-input {
        flex: 1;
        width: 100%;
        min-width: 0;
        min-height: 46px;
        height: auto;
        max-height: 200px;
        box-sizing: border-box;
        border: 0;
        outline: none;
        background: transparent;
        color: #0f172a;
        caret-color: #6366f1;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Segoe UI", "Open Sans", "Helvetica Neue", Arial, sans-serif;
        font-variant-emoji: emoji;
        font-size: 15.5px;
        font-weight: 400;
        line-height: 20px;
        padding: 13px 0;
        margin: 0;
        letter-spacing: 0;
        resize: none;
        overflow-y: auto;
        white-space: pre-wrap;
        word-break: break-word;
        position: relative;
        z-index: 1;
        transition: height 0.2s ease;
      }
      .composer-input::selection {
        color: #ffffff;
        background: rgba(99, 102, 241, 0.35);
      }
      .composer-input::-moz-selection {
        color: #ffffff;
        background: rgba(99, 102, 241, 0.35);
      }
      .composer-input::placeholder {
        color: #94a3b8;
        line-height: 20px;
      }
      .composer-input-wrap {
        position: relative;
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        min-height: 46px;
        max-height: 200px;
        overflow: hidden;
      }
      .composer-input-overlay {
        position: absolute;
        inset: 0;
        padding: 13px 0;
        display: none;
        min-width: 0;
        color: #edf2fb;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Segoe UI", "Open Sans", "Helvetica Neue", Arial, sans-serif;
        font-variant-emoji: emoji;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0;
        white-space: pre-wrap;
        word-break: break-word;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
      .composer-input::-webkit-scrollbar {
        width: 9px;
      }
      .composer-input::-webkit-scrollbar-track {
        background: transparent;
      }
      .composer-input::-webkit-scrollbar-thumb {
        background: rgba(148, 160, 181, 0.56);
        border-radius: 999px;
        border: 2px solid transparent;
        background-clip: padding-box;
      }
      .composer-input::-webkit-scrollbar-thumb:hover {
        background: rgba(176, 187, 206, 0.8);
      }
      .composer-input {
        scrollbar-width: thin;
        scrollbar-color: rgba(148, 160, 181, 0.56) transparent;
      }
      .composer-input-wrap.has-rendered-emoji .composer-input-overlay {
        display: block;
      }
      .composer-input-wrap.has-rendered-emoji .composer-input {
        color: transparent !important;
        -webkit-text-fill-color: transparent !important;
      }
      .composer-input-wrap.has-rendered-emoji .composer-input::selection {
        color: transparent !important;
        -webkit-text-fill-color: transparent !important;
        background: rgba(80, 145, 255, 0.46) !important;
      }
      .composer-input-wrap.has-rendered-emoji .composer-input::-moz-selection {
        color: transparent !important;
        -webkit-text-fill-color: transparent !important;
        background: rgba(80, 145, 255, 0.46) !important;
      }
      .composer-input-wrap .composer-emoji-slot {
        width: 1.25em !important;
        height: 1.25em !important;
        margin-right: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        vertical-align: -0.16em !important;
      }
      .composer-input-wrap .composer-inline-emoji {
        width: 1.25em !important;
        height: 1.25em !important;
        margin: 0 !important;
        vertical-align: top !important;
      }
      .composer-input-overlay.empty {
        color: #8e96a4;
      }
      .composer-overlay-text {
        color: #edf2fb;
        font: inherit;
        letter-spacing: 0;
      }
      .composer-input-placeholder {
        color: inherit;
      }
      .composer-actions {
        display: inline-flex;
        align-items: center;
        gap: 0;
        margin-left: auto;
        position: relative;
        overflow: visible;
        flex-shrink: 0;
        min-height: 46px;
      }
      .composer-send {
        width: 46px;
        height: 46px;
        margin-bottom: 0;
        margin-left: 8px;
        border: 0;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
        opacity: 1;
        transform: none;
        pointer-events: auto;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        will-change: transform;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        position: relative;
      }
      .composer.send-active .composer-send {
        opacity: 1;
        transform: none;
        pointer-events: auto;
      }
      .composer-send:active {
        transform: scale(0.97);
      }
      .composer-send-icon {
        width: 24px;
        height: 24px;
        display: block;
        position: absolute;
        inset: 50% auto auto 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        pointer-events: none;
        transition: none;
      }
      .composer-send-icon path {
        fill: currentColor;
        stroke: none;
      }
      .composer-send-icon.mic {
        opacity: 1;
      }
      .composer.send-active .composer-send-icon.mic {
        opacity: 0;
      }
      .composer.send-active .composer-send-icon.send {
        opacity: 1;
      }
      .composer-tg-icon {
        width: 24px;
        height: 24px;
        display: block;
        pointer-events: none;
        fill: currentColor;
      }
      .composer-tg-icon path {
        fill: currentColor;
        stroke: none;
      }
      .channel-action-bar {
        display: none;
        width: 100%;
        flex: 1 1 auto;
        min-width: 0;
      }
      .composer.channel-subscriber-mode .channel-subscriber-bar,
      .composer.channel-guest-mode .channel-subscribe-bar {
        display: flex;
      }
      .composer.channel-subscriber-mode .composer-stack,
      .composer.channel-subscriber-mode .composer-send,
      .composer.channel-guest-mode .composer-stack,
      .composer.channel-guest-mode .composer-send {
        display: none !important;
      }
      .channel-subscriber-bar {
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 12px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(15, 23, 42, 0.06);
        box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
      }
      .channel-subscriber-bar-button {
        flex: 1 1 auto;
        min-width: 0;
        height: 48px;
        border: 0;
        border-radius: 24px;
        background: transparent;
        color: #3390ec;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.2s ease;
      }
      .channel-subscriber-bar-button:hover {
        background: rgba(51, 144, 236, 0.08);
      }
      .channel-subscriber-bar-button:active {
        transform: scale(0.985);
      }
      .channel-subscribe-bar {
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 52px;
        padding: 0;
        background: #ffffff;
      }
      .channel-subscribe-button {
        flex: 1 1 auto;
        width: 100%;
        min-width: 0;
        max-width: none;
        height: 52px;
        padding: 0 16px;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #3390ec;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: none;
        transition: color 0.16s ease, opacity 0.16s ease;
      }
      .channel-subscribe-button:hover {
        background: transparent;
        color: #1c7fd6;
      }
      .channel-subscribe-button:active {
        transform: none;
        opacity: 0.72;
      }
      .channel-subscribe-button:disabled {
        opacity: 0.55;
        cursor: wait;
      }
      .composer.channel-guest-mode {
        padding: 0 !important;
        background: #ffffff !important;
      }
`;

const tgComposerAttachIcon = '<svg class="composer-tg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.657825,8.68730116 L7.89384699,12.5266719 C6.53977525,13.9078658 6.53979565,16.118605 7.89389288,17.4997739 C9.18119565,18.812813 11.2598788,18.8798255 12.6276396,17.6859428 L12.8071445,17.5177786 L19.3928802,10.8005213 C21.4766204,8.67512215 21.4766204,5.27313659 19.3928802,3.14773741 C17.4051081,1.12022499 14.1862843,1.0310006 12.0906645,2.90336495 L11.834659,3.14773741 L5.26671543,9.84699003 C2.45333216,12.7166196 2.45333216,17.3098454 5.26671543,20.179475 C7.96150749,22.9281424 12.3352577,23.0332941 15.1578204,20.4629606 L15.452067,20.1794113 L19.2160679,16.340063 C19.6027032,15.945688 19.596429,15.3125541 19.202054,14.9259188 C18.8076791,14.5392835 18.1745452,14.5455577 17.7879099,14.9399327 L13.9520378,18.8511531 C11.9281881,20.8353343 8.67903707,20.8031766 6.6948559,18.7793268 C4.64395201,16.6874204 4.64395201,13.3390446 6.6948559,11.2471382 L13.3088798,4.50180526 C14.6072848,3.22884976 16.6917843,3.24948061 17.9647398,4.54788555 C19.2860006,5.89556155 19.2860006,8.05269718 17.9647398,9.40037319 L11.3764629,16.119959 C10.803533,16.6816592 9.88373353,16.6725557 9.32203335,16.0996258 C8.73040544,15.4961698 8.73039653,14.5302606 9.3220133,13.9267937 L13.0859914,10.0874229 C13.4726243,9.6930457 13.4663463,9.05991185 13.0719691,8.67327889 C12.6775919,8.28664594 12.044458,8.29292392 11.657825,8.68730116 Z"/></svg>';

const tgComposerEmojiIcon = '<svg class="composer-tg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M6.66607426,13.6501686 C7.13342047,13.4117012 7.7055954,13.5972442 7.94406273,14.0645904 C8.71613228,15.5776856 10.2710663,16.5499921 12,16.5499921 C13.7262991,16.5499921 15.2792455,15.5806677 16.0525854,14.0711462 C16.2918118,13.6041881 16.8642875,13.419575 17.3312456,13.6588014 C17.7982037,13.8980278 17.9828168,14.4705034 17.7435904,14.9374615 C16.6482438,17.0755242 14.4462205,18.4499921 12,18.4499921 C9.55003677,18.4499921 7.34521255,17.0713067 6.2516524,14.928157 C6.01318507,14.4608108 6.19872805,13.8886359 6.66607426,13.6501686 Z M8.75,8 C9.44035594,8 10,8.67157288 10,9.5 C10,10.3284271 9.44035594,11 8.75,11 C8.05964406,11 7.5,10.3284271 7.5,9.5 C7.5,8.67157288 8.05964406,8 8.75,8 Z M15.25,8 C15.9403559,8 16.5,8.67157288 16.5,9.5 C16.5,10.3284271 15.9403559,11 15.25,11 C14.5596441,11 14,10.3284271 14,9.5 C14,8.67157288 14.5596441,8 15.25,8 Z"/></svg>';

const tgComposerMicIcon = '<svg class="composer-send-icon mic" viewBox="0 0 24 24" aria-hidden="true"><path d="M19,10 C19.5522847,10 20,10.4477153 20,11 C20,15.0792885 16.9468043,18.445465 13.0009551,18.9379871 L13,22 C13,22.5522847 12.5522847,23 12,23 C11.4871642,23 11.0644928,22.6139598 11.0067277,22.1166211 L11,22 L11.0000487,18.9381123 C7.05371356,18.4460359 4,15.0796344 4,11 C4,10.4477153 4.44771525,10 5,10 C5.55228475,10 6,10.4477153 6,11 C6,14.3137085 8.6862915,17 12,17 C15.3137085,17 18,14.3137085 18,11 C18,10.4477153 18.4477153,10 19,10 Z M12,2 C14.209139,2 16,3.790861 16,6 L16,11 C16,13.209139 14.209139,15 12,15 C9.790861,15 8,13.209139 8,11 L8,6 C8,3.790861 9.790861,2 12,2 Z M12,4 C10.8954305,4 10,4.8954305 10,6 L10,11 C10,12.1045695 10.8954305,13 12,13 C13.1045695,13 14,12.1045695 14,11 L14,6 C14,4.8954305 13.1045695,4 12,4 Z"/></svg>';

const tgComposerSendIcon = '<svg class="composer-send-icon send" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.65383364,2.92607697 L4.145798,9.778632 C4.26700994,10.3353554 4.73555061,10.7489799 5.30300879,10.8002098 L16.196355,11.7836569 C16.3159306,11.7944521 16.4041145,11.9001385 16.3933192,12.0197141 C16.3838746,12.1243302 16.3009783,12.2072294 16.1963626,12.2166777 L5.30295988,13.2005138 C4.73552551,13.2517615 4.26701089,13.6653731 4.14579755,14.2220735 L2.65385781,21.074154 C2.55168485,21.543407 2.84926209,22.0066394 3.31851517,22.1088123 C3.50628037,22.1496954 3.70229947,22.1272304 3.87594675,22.0449272 L23.4110848,12.7858981 C23.8450551,12.5802101 24.0301144,12.0616646 23.8244264,11.6276943 C23.7384721,11.4463438 23.5924353,11.300307 23.4110848,11.2143527 L3.87592461,1.95531307 C3.44195432,1.74962507 2.92340882,1.93468443 2.71772082,2.36865471 C2.63541897,2.54229904 2.61295329,2.73831451 2.65383364,2.92607697 Z"/></svg>';

export const buildEmojiPickerMarkup = ({ getIconHtml }) => `
              <div id="emoji-picker" class="emoji-picker" aria-hidden="true">
                <div class="emoji-picker-search-wrap">
                  ${getIconHtml("search", "emoji-picker-search-icon", "aria-hidden=\"true\"")}
                  <input id="emoji-picker-search" class="emoji-picker-search" type="text" placeholder="Search Emoji" autocomplete="off" />
                </div>
                <div id="emoji-picker-head" class="emoji-picker-head"></div>
                <div class="emoji-picker-slide-container">
                  <div id="emoji-picker-slide-track" class="emoji-picker-slide-track">
                    <div id="emoji-picker-body" class="emoji-picker-body"></div>
                    <div id="gif-picker-body" class="gif-picker-body"></div>
                  </div>
                </div>
                <div class="emoji-picker-mode-bar">
                  <button id="emoji-mode-tab-emoji" class="emoji-picker-mode-tab active" type="button" data-picker-mode="emoji">
                    ${getIconHtml("sentiment_satisfied", "", "aria-hidden=\"true\"")}
                  </button>
                  <button id="emoji-mode-tab-gif" class="emoji-picker-mode-tab disabled" type="button" data-picker-mode="gif" disabled>
                    ${getIconHtml("gif_box", "", "aria-hidden=\"true\"")}
                  </button>
                </div>
              </div>`;

export const buildComposerMarkup = ({
  emojiIconDataUrl,
  settingsKeyboardIconDataUrl,
  getIconHtml
}) => `
                <div id="chat-composer" class="composer">
                  <div class="composer-stack">
                    <div id="composer-reply-preview" class="composer-reply-preview" aria-hidden="true">
                      <div class="composer-reply-copy">
                        <span id="composer-reply-author" class="composer-reply-author">~author</span>
                        <span id="composer-reply-text" class="composer-reply-text">Message</span>
                      </div>
                      <button id="composer-reply-close" class="composer-reply-close" type="button" aria-label="Cancel reply">&times;</button>
                    </div>
                    <div id="composer-attachment-preview" class="composer-attachment-preview" aria-live="polite">
                      <div class="composer-attachment-thumb">
                        <img id="composer-attachment-image" src="" alt="" />
                      </div>
                      <div class="composer-attachment-copy">
                        <p class="composer-attachment-title">1 photo</p>
                        <p id="composer-attachment-meta" class="composer-attachment-meta">PNG</p>
                      </div>
                      <button id="composer-attachment-remove" class="composer-attachment-remove" type="button" aria-label="Remove photo">&times;</button>
                    </div>
                    <div class="composer-shell">
                      <span class="composer-actions">
                        <button id="composer-attach-button" class="composer-icon" type="button" aria-label="Add photo" title="File">
                          ${tgComposerAttachIcon}
                        </button>
                        <div id="attach-menu" class="attach-menu" aria-hidden="true">
                          <button class="attach-menu-item" type="button" aria-label="Photo or Video" title="Photo or Video" data-attach-action="media">
                            ${getIconHtml("photo_library", "", "aria-hidden=\"true\"")}
                            <span data-i18n="media.photoOrVideo">Photo or Video</span>
                          </button>
                          <button class="attach-menu-item" type="button" aria-label="File" title="File" data-attach-action="file">
                            ${getIconHtml("draft", "", "aria-hidden=\"true\"")}
                            <span data-i18n="media.file">File</span>
                          </button>
                        </div>
                      </span>
                      <div class="composer-input-wrap">
                        <div id="composer-input-overlay" class="composer-input-overlay empty" aria-hidden="true"><span class="composer-input-placeholder" data-i18n="composer.placeholder">Message...</span></div>
                        <textarea id="composer-input" class="composer-input" placeholder="Message..." data-i18n-placeholder="composer.placeholder" rows="1"></textarea>
                      </div>
                      <button id="composer-emoji-button" class="composer-icon" type="button" aria-label="Emoji" title="Emoji">
                        ${tgComposerEmojiIcon}
                      </button>
                      <button id="composer-send" class="composer-send" type="button" aria-label="Send">
                    ${tgComposerMicIcon}
                    ${tgComposerSendIcon}
                  </button>
                      <input id="composer-file-input" type="file" accept="image/png,image/jpeg,image/webp,image/gif" multiple hidden />
                    </div>
                  </div>
                  <div id="channel-subscriber-bar" class="channel-action-bar channel-subscriber-bar" hidden>
                    <button id="channel-mute-toggle" class="channel-subscriber-bar-button" type="button">
                      <span id="channel-mute-toggle-label" data-i18n="channel.mute">Mute</span>
                    </button>
                  </div>
                  <div id="channel-subscribe-bar" class="channel-action-bar channel-subscribe-bar" hidden>
                    <button id="channel-subscribe-button" class="channel-subscribe-button" type="button" data-i18n="channel.subscribe">ПОДПИСАТЬСЯ</button>
                  </div>
                </div>
`;
