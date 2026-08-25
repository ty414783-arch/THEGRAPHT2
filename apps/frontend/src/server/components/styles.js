import { composerStyles } from "./composer.js";
import { messengerDesignSystemStyles } from "./design-system.js";
import { googleSpinnerStyles } from "./google-spinner.js";

export const buildStyles = ({
  inter400Url,
  inter500Url,
  inter600Url,
  inter700Url,
  inter800Url,
  wallpaperDataUrl
}) => `
<style>
      :root {
        color: #eef2fb;
        --tg-font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-family: var(--tg-font-family);
        --motion-standard: cubic-bezier(0.2, 0, 0, 1);
        --motion-emphasized: cubic-bezier(0.2, 0, 0, 1);
        --motion-spring: cubic-bezier(0.2, 0, 0, 1);
        --m3-primary: #d0bcff;
        --m3-secondary: #ccc2dc;
        --m3-tertiary: #efb8c8;
        --m3-surface: #14171f;
      }
      /* Global Modern Smooth Scrollbar System */
      ::-webkit-scrollbar-button,
      *::-webkit-scrollbar-button {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      ::-webkit-scrollbar,
      *::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }
      ::-webkit-scrollbar-track,
      *::-webkit-scrollbar-track {
        background: transparent !important;
      }
      ::-webkit-scrollbar-thumb,
      *::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.28) !important;
        border-radius: 999px !important;
        border: 1px solid transparent !important;
        background-clip: padding-box !important;
        min-height: 36px !important;
        transition: background 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), width 0.24s ease !important;
      }
      ::-webkit-scrollbar-thumb:hover,
      *::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.48) !important;
        border-radius: 999px !important;
      }
      ::-webkit-scrollbar-thumb:active,
      *::-webkit-scrollbar-thumb:active {
        background: rgba(255, 255, 255, 0.75) !important;
        border-radius: 999px !important;
      }

      /* Light Theme / Container Adjustments */
      .page.ui-telegram-topbar ::-webkit-scrollbar-thumb,
      .group-create-panel ::-webkit-scrollbar-thumb,
      .sidebar-profile-body ::-webkit-scrollbar-thumb,
      .language-list-container ::-webkit-scrollbar-thumb,
      .active-sessions-body ::-webkit-scrollbar-thumb,
      .dialog-list ::-webkit-scrollbar-thumb {
        background: rgba(15, 23, 42, 0.22) !important;
      }
      .page.ui-telegram-topbar ::-webkit-scrollbar-thumb:hover,
      .group-create-panel ::-webkit-scrollbar-thumb:hover,
      .sidebar-profile-body ::-webkit-scrollbar-thumb:hover,
      .language-list-container ::-webkit-scrollbar-thumb:hover,
      .active-sessions-body ::-webkit-scrollbar-thumb:hover,
      .dialog-list ::-webkit-scrollbar-thumb:hover {
        background: rgba(15, 23, 42, 0.42) !important;
      }
      .page.ui-telegram-topbar ::-webkit-scrollbar-thumb:active,
      .group-create-panel ::-webkit-scrollbar-thumb:active,
      .sidebar-profile-body ::-webkit-scrollbar-thumb:active,
      .language-list-container ::-webkit-scrollbar-thumb:active,
      .active-sessions-body ::-webkit-scrollbar-thumb:active,
      .dialog-list ::-webkit-scrollbar-thumb:active {
        background: rgba(15, 23, 42, 0.68) !important;
      }
      /* Mention Styling - Clean & Legible Text */
      .message-mention,
      .message-mention:hover,
      .message-mention:focus,
      .message-mention:active {
        text-decoration: none !important;
        border-bottom: none !important;
        outline: none !important;
      }
      .message-mention {
        color: #60a5fa !important;
        font-weight: 600 !important;
        cursor: pointer;
        background: transparent !important;
        padding: 0;
        transition: opacity 0.16s ease;
      }
      .message-mention:hover {
        opacity: 0.85 !important;
        background: transparent !important;
      }
      .message:not(.incoming) .message-mention,
      .message-outgoing .message-mention,
      .outgoing .message-mention {
        color: #ffffff !important;
        font-weight: 600 !important;
        background: transparent !important;
      }
      .message:not(.incoming) .message-mention:hover,
      .message-outgoing .message-mention:hover,
      .outgoing .message-mention:hover {
        color: #ffffff !important;
        opacity: 0.88 !important;
        background: transparent !important;
      }

      /* Mention Hover Card (Image 5 exact replica - White Theme) */
      .mention-hover-card {
        position: fixed;
        z-index: 100060;
        width: 290px;
        background: #ffffff !important;
        border-radius: 20px !important;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14), 0 2px 10px rgba(0, 0, 0, 0.06) !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        padding: 20px 20px 18px 20px !important;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(8px) scale(0.97);
        transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                    visibility 0.22s ease;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", Helvetica, Arial, sans-serif;
        color: #0f172a !important;
        box-sizing: border-box;
      }
      .mention-hover-card.open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }
      .mention-hover-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
        width: 100%;
      }
      .mention-hover-card-title {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a !important;
        letter-spacing: -0.2px;
      }
      .mention-hover-card-close {
        background: #f1f5f9;
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #64748b;
        cursor: pointer;
        transition: background 0.16s ease, color 0.16s ease;
        padding: 0;
      }
      .mention-hover-card-close:hover {
        background: #e2e8f0;
        color: #0f172a;
      }
      .mention-hover-card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
      }
      .mention-hover-card-avatar {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        overflow: hidden;
        background: linear-gradient(135deg, #4ecdc4 0%, #26a69a 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
        font-weight: 700;
        color: #ffffff !important;
        box-shadow: 0 8px 24px rgba(78, 205, 196, 0.3);
        margin-bottom: 12px;
        user-select: none;
        flex-shrink: 0;
      }
      .mention-hover-card-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .mention-hover-card-name {
        font-size: 22px;
        font-weight: 800;
        color: #0f172a !important;
        line-height: 1.25;
        margin-bottom: 4px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mention-hover-card-status {
        font-size: 14px;
        font-weight: 400;
        color: #64748b !important;
        margin-bottom: 18px;
      }
      .mention-hover-card-link-box {
        width: 100%;
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 16px;
        padding: 12px 14px;
        text-align: left;
        box-sizing: border-box;
      }
      .mention-hover-card-link-label {
        font-size: 11px;
        font-weight: 700;
        color: #94a3b8 !important;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 4px;
      }
      .mention-hover-card-link-url {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #2563eb !important;
        text-decoration: none !important;
        word-break: break-all;
        transition: color 0.16s ease, text-decoration 0.16s ease;
      }
      .mention-hover-card-link-url:hover {
        color: #1d4ed8 !important;
        text-decoration: underline !important;
      }

      /* User Not Found Modal (White Theme in App Style) */
      .mention-not-found-overlay {
        position: fixed;
        inset: 0;
        z-index: 100050;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s ease;
      }
      .mention-not-found-overlay.open {
        opacity: 1;
        visibility: visible;
      }
      .mention-not-found-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.45);
        backdrop-filter: blur(4px);
      }
      .mention-not-found-shell {
        position: relative;
        z-index: 1;
        background: #ffffff !important;
        border-radius: 20px !important;
        width: min(90vw, 360px) !important;
        padding: 24px 24px 18px 24px !important;
        box-shadow: 0 20px 48px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.08) !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        color: #0f172a !important;
        transform: scale(0.94);
        transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", Helvetica, Arial, sans-serif;
        box-sizing: border-box;
      }
      .mention-not-found-overlay.open .mention-not-found-shell {
        transform: scale(1);
      }
      .mention-not-found-title {
        font-size: 13px;
        color: #64748b !important;
        margin-bottom: 8px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .mention-not-found-body {
        font-size: 16px;
        font-weight: 600;
        color: #0f172a !important;
        line-height: 1.45;
        margin-bottom: 24px;
        word-break: break-word;
      }
      .mention-not-found-actions {
        display: flex;
        justify-content: flex-end;
      }
      .mention-not-found-btn {
        background: transparent !important;
        border: none !important;
        color: #3b82f6 !important;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 10px;
        transition: background 0.16s ease, color 0.16s ease, transform 0.12s ease;
      }
      .mention-not-found-btn:hover {
        background: #eff6ff !important;
        color: #2563eb !important;
      }
      .mention-not-found-btn:active {
        transform: scale(0.96);
      }
      .lucide,
      .lucide,
      [class^="icon-"],
      [class*=" icon-"] {
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 22px;
        pointer-events: none;
        user-select: none;
      }
      .page.ui-inter-font,
      .page.ui-system-font {
        font-family: var(--tg-font-family, "Open Sans", "Segoe UI", sans-serif);
      }
      .workspace-mode #workspace-view {
        font-family: var(--tg-font-family, "Open Sans", "Segoe UI", sans-serif);
      }
      html, body {
        height: 100%;
        height: 100dvh;
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        overscroll-behavior: none;
        font-family: var(--tg-font-family);
      }
      * {
        box-sizing: border-box;
      }
      button,
      a,
      input,
      img,
      svg,
      [role="button"],
      [tabindex],
      .sidebar-profile-avatar-circle,
      .chat-profile-avatar,
      .dialog-avatar,
      .generated-avatar-photo {
        -webkit-tap-highlight-color: transparent !important;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
      }
      button:focus,
      button:focus-visible,
      a:focus,
      a:focus-visible,
      img:focus,
      img:focus-visible,
      [role="button"]:focus,
      [role="button"]:focus-visible,
      [tabindex]:focus,
      [tabindex]:focus-visible {
        outline: none !important;
      }
      .tg-ripple {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .tg-ripple:hover {
        background-color: rgba(112, 117, 121, 0.08);
      }
      .tg-ripple:active {
        background-color: rgba(112, 117, 121, 0.16);
      }
      .tg-ripple-wave {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 999px;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.08;
        background: rgba(112, 117, 121, 1);
        animation: tgRippleExpand 200ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      @keyframes tgRippleExpand {
        from {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0.08;
        }
        to {
          transform: translate(-50%, -50%) scale(18);
          opacity: 0;
        }
      }
      body {
        margin: 0;
        height: 100%;
        overflow: hidden;
        background: #7ca87c;
        color: #0f172a;
      }
      .page:not(.workspace-mode) {
        background:
          radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.08), transparent 45%),
          radial-gradient(circle at 85% 80%, rgba(168, 85, 247, 0.07), transparent 45%),
          linear-gradient(130deg, #d3e78e 0%, #8ec57f 40%, #74b469 70%, #b2dd94 100%);
        color: #0f172a;
      }
      .page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        position: relative;
        overflow: hidden;
      }
      .app-progress {
        display: none !important;
      }
      .app-progress.active {
        opacity: 1;
      }
      .app-progress.finishing {
        opacity: 0;
      }
      .app-progress-track {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background: rgba(107, 33, 168, 0.15);
      }
      .app-progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #6b21a8, #7e22ce, #9333ea);
        box-shadow: 0 0 10px rgba(126, 34, 206, 0.6);
        transform-origin: left center;
        animation: topProgressBarFill 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes topProgressBarFill {
        0% {
          transform: translateX(-100%) scaleX(0.2);
        }
        50% {
          transform: translateX(0%) scaleX(0.7);
        }
        100% {
          transform: translateX(100%) scaleX(0.2);
        }
      }
      .boot-splash {
        position: fixed;
        inset: 0;
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        opacity: 1;
        transition: opacity 0.38s ease, visibility 0.38s ease;
      }
      .boot-splash.hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
      .boot-splash-inner {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .boot-splash-circular {
        width: 44px;
        height: 44px;
        display: block;
        animation: bootCircularRotate 1.568s linear infinite;
      }
      .boot-splash-circular-track {
        display: block !important;
        fill: none;
        stroke: rgba(107, 33, 168, 0.18) !important;
        stroke-width: 3.8;
      }
      .boot-splash-circular-indicator {
        fill: none;
        stroke: #7e22ce !important;
        stroke-linecap: round;
        stroke-width: 3.8;
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
        animation: bootCircularDash 1.333s ease-in-out infinite;
      }
      @keyframes bootCircularRotate {
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes bootCircularDash {
        0% {
          stroke-dasharray: 1px, 200px;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89px, 200px;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 1px, 200px;
          stroke-dashoffset: -124px;
        }
      }
      .page.workspace-mode {
        --desktop-shell-gutter: 12px;
        width: 100vw;
        height: 100dvh;
        min-height: 0;
        align-items: stretch;
        justify-content: stretch;
        padding: 12px;
        background: linear-gradient(130deg, #d3e78e 0%, #8ec57f 40%, #74b469 70%, #b2dd94 100%);
        position: relative;
        overflow: hidden;
      }
      .page.workspace-mode::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("${wallpaperDataUrl}");
        background-repeat: repeat;
        background-position: center top;
        background-size: 540px auto;
        opacity: 0.16;
        mix-blend-mode: multiply;
        pointer-events: none;
        z-index: 0;
      }
      .page.workspace-mode > * {
        position: relative;
        z-index: 1;
      }
      .page.ui-side-gutters-only.workspace-mode {
        padding: 12px;
        background: linear-gradient(130deg, #d3e78e 0%, #8ec57f 40%, #74b469 70%, #b2dd94 100%);
      }
      .page.booting {
        opacity: 1 !important;
      }
      .page:not(.booting) {
        opacity: 1 !important;
      }
      .view {
        width: min(1420px, 100%);
        max-height: 100%;
      }
      .page.workspace-mode .view:not(.hidden),
      .page.workspace-mode #workspace-view:not(.hidden) {
        width: 100%;
        max-width: 100%;
        height: 100dvh;
        max-height: 100dvh;
      }
      .view.hidden,
      .hidden {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        position: absolute !important;
        width: 0 !important;
        height: 0 !important;
      }
      .auth-single-tile {
        display: grid;
        grid-template-columns: 1fr 1.08fr;
        gap: 0;
        align-items: stretch;
        width: 100%;
        max-width: 940px;
        margin: 0 auto;
        border-radius: 36px;
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.95);
        box-shadow:
          0 30px 80px -15px rgba(0, 0, 0, 0.08),
          0 10px 30px -10px rgba(0, 0, 0, 0.04),
          inset 0 1px 0 rgba(255, 255, 255, 1);
        overflow: hidden;
      }
      .panel {
        border-radius: 0;
        border: none;
        background: transparent;
        box-shadow: none;
      }
      .brand-panel {
        min-height: auto;
        padding: 56px 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: visible;
        background: linear-gradient(135deg, rgba(248, 250, 252, 0.75) 0%, rgba(241, 245, 249, 0.9) 100%);
        border-right: 1px solid rgba(226, 232, 240, 0.6);
      }
      .brand-panel::before {
        display: none;
      }
      .brand-stack {
        position: relative;
        z-index: 1;
        max-width: 440px;
        margin: 0 auto;
        text-align: center;
      }
      .logo-mark {
        width: 150px;
        height: 150px;
        margin: 0 auto 24px;
        border-radius: 50% !important;
        overflow: hidden;
        box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.14);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .logo-mark:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.18);
      }
      .logo-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .brand-title-glass {
        margin: 0;
        font-size: clamp(46px, 4.8vw, 64px);
        line-height: 1;
        letter-spacing: -0.05em;
        font-weight: 900;
        color: #0b0d10;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
      }
      .brand-text-title {
        transition: opacity 0.18s ease, transform 0.18s ease, color 0.18s ease;
        will-change: opacity, transform;
      }
      .brand-text-title[data-connection-state="reconnecting"],
      .brand-text-title[data-connection-state="waiting_for_network"] {
        color: #94a3b8 !important;
        font-weight: 500;
      }
      .brand-text-title[data-connection-state="no_network"] {
        color: #ef4444 !important;
        font-weight: 600;
      }
      .brand-text-title[data-connection-state="weak_signal"] {
        color: #f59e0b !important;
        font-weight: 500;
      }
      .auth-panel {
        min-height: auto;
        padding: 52px 48px 44px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .auth-card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .auth-inner {
        max-width: 520px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .auth-inner.hidden {
        display: none !important;
      }
      .auth-inner.fade-out {
        opacity: 0;
        transform: translateY(-12px);
        pointer-events: none;
      }
      .auth-inner.fade-in {
        opacity: 0;
        transform: translateY(12px);
      }
      .verification-code-input-container {
        position: relative;
        margin-top: 8px;
      }
      #verification-code {
        letter-spacing: 0.35em;
        font-family: "Open Sans", monospace;
        font-size: 26px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        padding-left: 0.35em;
        height: 56px;
        border-radius: 14px;
        border: 1.5px solid #e2e8f0;
        background: #f8fafc;
        color: #0d0f12;
        width: 100%;
        transition: border-color 0.22s, box-shadow 0.22s, background-color 0.22s;
      }
      #verification-code:focus {
        border-color: #0d0f12;
        box-shadow: 0 0 0 3px rgba(13, 15, 18, 0.08);
        background: #ffffff;
        outline: none;
      }
      #verification-code::placeholder {
        letter-spacing: 0.35em;
        color: #cbd5e1;
      }
      .resend-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        text-align: center;
      }
      .resend-btn {
        background: none;
        border: none;
        color: #0d0f12;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
        padding: 6px 12px;
        border-radius: 6px;
      }
      .resend-btn:hover {
        opacity: 0.75;
        text-decoration: underline;
      }
      .resend-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        text-decoration: none !important;
      }
      .resend-timer-text {
        font-size: 14px;
        color: #64748b;
        margin: 0;
      }
      .resend-attempts-text {
        font-size: 13px;
        color: #94a3b8;
        margin: 0;
      }
      .auth-copy-block {
        transition: opacity 0.22s ease, transform 0.22s ease;
      }
      .auth-copy-block.switching {
        opacity: 0;
        transform: translateY(12px);
      }
      .auth-kicker {
        margin: 0 0 10px;
        color: #64748b;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      .auth-title {
        margin: 0 0 10px;
        color: #0d0f12;
        font-weight: 800;
        font-size: clamp(32px, 3.2vw, 42px);
        line-height: 1.05;
        letter-spacing: -0.03em;
      }
      .auth-copy {
        margin: 0 0 26px;
        color: #64748b;
        font-size: 15px;
        line-height: 1.5;
        max-width: 420px;
      }
      .toggle-field {
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transform: translateY(-12px);
        transition: max-height 0.32s ease, opacity 0.28s ease, transform 0.28s ease, margin-bottom 0.28s ease;
        margin-bottom: 0;
      }
      .toggle-field.open {
        max-height: 140px;
        opacity: 1;
        transform: translateY(0);
        margin-bottom: 18px;
      }
      .field label {
        display: block;
        margin-bottom: 8px;
        color: #475569;
        font-size: 14px;
        font-weight: 600;
      }
      .field input {
        width: 100%;
        border: 1.5px solid #e2e8f0;
        background: #f8fafc;
        color: #0d0f12;
        border-radius: 14px;
        padding: 14px 16px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
      }
      .field input::placeholder {
        color: #94a3b8;
      }
      .field input:focus {
        border-color: #0d0f12;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(13, 15, 18, 0.08);
      }
      .field input.invalid,
      .field input[aria-invalid="true"] {
        border-color: #ef4444;
        background: #fef2f2;
        color: #0d0f12;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
      }
      .field input.invalid:focus,
      .field input[aria-invalid="true"]:focus {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
      }
      .field {
        margin-bottom: 18px;
      }
      .submit {
        width: 100%;
        border: 0;
        border-radius: 14px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
        background: #0d0f12;
        cursor: pointer;
        margin-top: 10px;
        box-shadow: 0 10px 20px -5px rgba(13, 15, 18, 0.25);
        transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease, background-color 0.18s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .submit:hover {
        background: #1e242b;
        transform: translateY(-1px);
        box-shadow: 0 14px 24px -5px rgba(13, 15, 18, 0.35);
      }
      .submit:active {
        transform: translateY(0);
      }
      .submit:disabled {
        opacity: 0.85;
        cursor: wait;
      }
      .submit:disabled::after {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 10px;
        border: 2.5px solid rgba(255, 255, 255, 0.3);
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: googleSpinner 0.7s linear infinite;
        flex-shrink: 0;
      }
      @keyframes googleSpinner {
        to {
          transform: rotate(360deg);
        }
      }
      .meta-row {
        margin-top: auto;
        padding-top: 24px;
        color: #64748b;
        font-size: 15px;
      }
      .meta-row button {
        border: 0;
        background: transparent;
        color: #0d0f12;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        padding: 0;
        margin-left: 6px;
        transition: opacity 0.16s ease;
      }
      .meta-row button:hover {
        opacity: 0.75;
        text-decoration: underline;
      }
      .auth-faq-link {
        color: #64748b;
        font-size: 14px;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.16s ease;
      }
      .auth-faq-link:hover {
        color: #0d0f12;
        text-decoration: underline;
      }
      .status {
        min-height: 24px;
        margin: 12px 0 4px;
        font-size: 15px;
      }
      .status.error {
        color: #ef4444;
      }
      .status.success {
        color: #10b981;
      }
      .workspace-shell {
        --sidebar-width: 380px;
        position: relative;
        inset: auto;
        width: 100%;
        height: 100%;
        min-height: 0;
        display: grid;
        grid-template-columns: var(--sidebar-width, 380px) minmax(0, 1fr);
        gap: 12px;
        overflow: visible;
      }
      .workspace-sidebar,
      .workspace-main {
        border-radius: 0;
        border: 0;
        box-shadow: none;
      }
      .workspace-sidebar {
        background: #212121;
        padding: 0;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 78px;
        border-right: 1px solid rgba(0,0,0,0.1);
      }
      .sidebar-resize-handle {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 16px;
        cursor: col-resize;
        z-index: 4;
        touch-action: none;
      }
      .sidebar-resize-handle::before {
        content: "";
        position: absolute;
        top: 24px;
        bottom: 24px;
        right: 5px;
        width: 2px;
        border-radius: 999px;
        background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(132, 154, 192, 0.3) 30%, rgba(132, 154, 192, 0.3) 70%, rgba(255,255,255,0.03) 100%);
        opacity: 0;
        transform: scaleY(0.96);
        transition: opacity 0.18s ease, background 0.18s ease, transform 0.18s ease;
      }
      .workspace-sidebar:hover .sidebar-resize-handle::before,
      .workspace-shell.sidebar-resizing .sidebar-resize-handle::before {
        opacity: 1;
        transform: scaleY(1);
        background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(120, 148, 255, 0.68) 30%, rgba(120, 148, 255, 0.68) 70%, rgba(255,255,255,0.06) 100%);
      }
      .workspace-shell.sidebar-resizing {
        cursor: col-resize;
        user-select: none;
      }
      .workspace-shell.sidebar-resizing * {
        cursor: col-resize !important;
      }
      .workspace-main {
        padding: 0;
        height: 100%;
        overflow: hidden;
        background: transparent;
        border: 0;
        box-shadow: none;
        position: relative;
      }
      .workspace-main::before {
        display: none;
      }
      .workspace-main > * {
        position: relative;
        z-index: 1;
      }
      .multi-tab-blocker {
        position: absolute;
        inset: 0;
        z-index: 60;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        text-align: center;
        background: rgba(9, 13, 21, 0.9);
        backdrop-filter: blur(4px);
      }
      .multi-tab-blocker.visible {
        display: flex;
      }
      .multi-tab-blocker-card {
        width: min(520px, 100%);
        padding: 18px 20px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(22, 28, 40, 0.95);
        color: #eff4ff;
      }
      .multi-tab-blocker-title {
        margin: 0 0 8px;
        font-size: 18px;
        font-weight: 800;
      }
      .multi-tab-blocker-copy {
        margin: 0;
        color: #c3cee3;
        line-height: 1.4;
        font-size: 14px;
      }
      .workspace-main.open-chat {
        display: flex;
        align-items: stretch;
      }
      .workspace-main.empty-chat {
        border: 0;
        background: transparent;
        box-shadow: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .workspace-brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        margin: 12px 0 18px;
        padding: 0 6px;
      }
      .workspace-brand-leading {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .workspace-brand-menu {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.06);
        color: #e8edf9;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, border-color 0.16s ease, transform 0.16s ease;
      }
      .workspace-brand-menu:hover {
        background: rgba(117, 154, 207, 0.2);
        border-color: rgba(173, 202, 243, 0.28);
      }
      .workspace-brand-menu:active {
        transform: scale(0.96);
      }
      .workspace-brand-menu .lucide {
        font-size: 23px;
      }
      .workspace-brand h1 {
        margin: 0;
        font-size: 27px;
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.035em;
        color: #f3f6fd;
      }
      .sidebar-glass-menu {
        position: absolute;
        top: 72px;
        left: 14px;
        width: 248px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.1);
        background: linear-gradient(170deg, rgba(34, 44, 61, 0.8), rgba(20, 26, 38, 0.72));
        box-shadow: 0 16px 34px rgba(3, 8, 16, 0.42);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        opacity: 0;
        transform: translateY(-8px) scale(0.98);
        pointer-events: none;
        transition: opacity 0.16s ease, transform 0.18s ease;
        z-index: 12;
        overflow: hidden;
      }
      .workspace-sidebar.menu-open .sidebar-glass-menu {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .sidebar-glass-menu-items {
        display: grid;
        padding: 10px;
      }
      .sidebar-glass-menu-item {
        border: 0;
        background: transparent;
        color: #e8edf9;
        border-radius: 12px;
        min-height: 42px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.16s ease;
      }
      .sidebar-glass-menu-item:hover {
        background: rgba(255,255,255,0.08);
      }
      .sidebar-glass-menu-item:active {
        transform: scale(0.98);
      }
      .sidebar-glass-menu-item .lucide {
        font-size: 20px;
      }
      .sidebar-glass-menu-sep {
        border: 0;
        height: 1px;
        margin: 8px 0;
        background: rgba(255,255,255,0.08);
      }
      .sidebar-compose-menu {
        position: absolute;
        right: 20px;
        top: 70px;
        width: 252px;
        border-radius: 16px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 8px;
        display: grid;
        gap: 2px;
        opacity: 0;
        transform: translateY(10px) scale(0.97);
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.24s cubic-bezier(0.2, 0, 0, 1);
        z-index: 12;
      }
      .workspace-sidebar.compose-open .sidebar-compose-menu {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      .sidebar-compose-menu-item {
        border: 0;
        background: transparent;
        color: #0f172a;
        border-radius: 12px;
        min-height: 42px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        transform: translateY(6px);
        transition: background 0.16s ease, transform 0.22s cubic-bezier(0.2, 0, 0, 1), opacity 0.22s cubic-bezier(0.2, 0, 0, 1);
      }
      .workspace-sidebar.compose-open .sidebar-compose-menu-item {
        opacity: 1;
        transform: translateY(0);
      }
      .workspace-sidebar.compose-open .sidebar-compose-menu-item:nth-child(1) { transition-delay: 0.02s; }
      .workspace-sidebar.compose-open .sidebar-compose-menu-item:nth-child(2) { transition-delay: 0.05s; }
      .workspace-sidebar.compose-open .sidebar-compose-menu-item:nth-child(3) { transition-delay: 0.08s; }
      .workspace-sidebar.compose-open .sidebar-compose-menu-item:nth-child(4) { transition-delay: 0.11s; }
      .sidebar-compose-menu-item:hover {
        background: #f1f5f9;
      }
      .sidebar-compose-menu-item:active {
        transform: scale(0.98);
      }
      .sidebar-compose-menu-item.is-disabled {
        cursor: not-allowed;
        opacity: 0.45 !important;
        color: #94a3b8;
      }
      .sidebar-compose-menu-item.is-disabled:hover {
        background: transparent;
      }
      .sidebar-compose-menu-item .lucide {
        font-size: 20px;
        color: #475569;
      }
      .group-create-panel {
        position: absolute;
        inset: 0;
        z-index: 26;
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-right: 1px solid rgba(226, 232, 240, 0.9);
        transform: translateX(-100%);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.38s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
        will-change: transform, opacity;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .group-create-panel.open {
        transform: translateX(0) !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      .group-create-step {
        position: absolute;
        inset: 0;
      }
      .group-create-step-members {
        display: flex;
        flex-direction: column;
      }
      .group-create-step-details {
        z-index: 50;
        background: #ffffff;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.2s var(--motion-standard), opacity 0.2s var(--motion-standard);
        display: flex;
        flex-direction: column;
      }
      .workspace-sidebar.group-create-step2-open .group-create-step-details {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
      }
      .workspace-sidebar.group-create-step2-open .group-create-selected {
        display: none !important;
      }
      .group-create-header {
        min-height: 66px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px 8px;
        border-bottom: 1px solid rgba(226, 232, 240, 0.8);
      }
      .group-create-back {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: 0;
        background: transparent;
        color: #475569;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, color 0.16s ease;
      }
      .group-create-back:hover {
        background: rgba(241, 245, 249, 0.9);
        color: #0f172a;
      }
      .group-create-title {
        font-size: 30px;
        line-height: 1.1;
        font-weight: 700;
        color: #0f172a;
        letter-spacing: -0.02em;
      }
      .group-create-panel ::-webkit-scrollbar-button,
      .group-create-selected::-webkit-scrollbar-button,
      .group-create-list::-webkit-scrollbar-button {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .group-create-selected {
        position: relative;
        z-index: 100;
        min-height: 64px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px 14px;
        overflow-x: auto;
        overflow-y: hidden;
        border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        scrollbar-width: thin;
        scrollbar-color: rgba(203, 213, 225, 0.6) transparent;
      }
      .group-create-selected::-webkit-scrollbar {
        height: 4px;
      }
      .group-create-selected::-webkit-scrollbar-track {
        background: transparent;
      }
      .group-create-selected::-webkit-scrollbar-thumb {
        background: rgba(203, 213, 225, 0.6);
        border-radius: 4px;
      }
      .group-create-selected::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.8);
      }
      .group-create-selected:empty {
        display: none;
      }
      .group-selected-chip {
        position: relative;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1.5px solid rgba(203, 213, 225, 0.9);
        overflow: visible;
        flex-shrink: 0;
        transform-origin: center center;
        cursor: pointer;
      }
      .group-selected-chip-tooltip-global {
        position: fixed !important;
        z-index: 999999 !important;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(203, 213, 225, 0.9);
        color: #0f172a;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        padding: 5px 12px;
        border-radius: 8px;
        box-shadow: 0 6px 20px rgba(15, 23, 42, 0.16);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-4px) scale(0.94);
        transition: opacity 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .group-selected-chip-tooltip-global.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      .group-selected-chip-tooltip-global::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px 5px 0 5px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.96) transparent transparent transparent;
      }
      .group-selected-chip-tooltip-global.position-below::after {
        top: auto;
        bottom: 100%;
        border-width: 0 5px 5px 5px;
        border-style: solid;
        border-color: transparent transparent rgba(255, 255, 255, 0.96) transparent;
      }
      .group-selected-chip.is-new {
        animation: group-selected-chip-in 220ms cubic-bezier(0.2, 0.85, 0.3, 1) both;
      }
      @keyframes group-selected-chip-in {
        0% {
          opacity: 0;
          transform: translateY(5px) scale(0.76);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .group-selected-chip .dialog-avatar {
        width: 100%;
        height: 100%;
        min-width: 100%;
        border-radius: 50%;
        overflow: hidden;
      }
      .group-selected-chip .dialog-avatar-presence {
        display: none;
      }
      .group-selected-chip .generated-avatar-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 50%;
      }
      .group-create-search {
        padding: 10px 14px 10px;
      }
      .group-create-search input {
        width: 100%;
        height: 44px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        outline: none;
        border-radius: 12px;
        background: rgba(241, 245, 249, 0.9);
        color: #0f172a;
        padding: 0 14px;
        font-size: 15px;
        transition: border-color 0.16s ease, background 0.16s ease;
      }
      .group-create-search input:focus {
        background: #ffffff;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
      }
      .group-create-search input::placeholder {
        color: #64748b;
      }
      .group-create-list {
        flex: 1;
        overflow: auto;
        padding: 6px 10px 96px;
      }
      .group-create-list::-webkit-scrollbar {
        width: 6px;
      }
      .group-create-list::-webkit-scrollbar-track {
        background: transparent;
      }
      .group-create-list::-webkit-scrollbar-thumb {
        background: rgba(203, 213, 225, 0.6);
        border-radius: 3px;
      }
      .group-create-list::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.8);
      }
      .group-create-item {
        width: 100%;
        border: 0;
        border-radius: 14px;
        background: transparent;
        color: #0f172a;
        display: grid;
        grid-template-columns: 26px 54px minmax(0, 1fr);
        align-items: center;
        gap: 12px;
        padding: 8px 8px;
        cursor: pointer;
        transition: background 0.16s ease;
      }
      .group-create-item:hover {
        background: rgba(241, 245, 249, 0.9);
      }
      .group-create-check {
        width: 22px;
        height: 22px;
        border-radius: 6px;
        border: 2px solid #cbd5e1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: transparent;
        transition: border-color 0.16s ease, background 0.16s ease, color 0.16s ease;
      }
      .group-create-item.selected .group-create-check {
        background: #2563eb;
        border-color: #2563eb;
        color: #ffffff;
      }
      .group-create-item.unavailable {
        opacity: 0.52;
        cursor: not-allowed;
      }
      .group-create-item.unavailable:hover {
        background: transparent;
      }
      .group-create-check .lucide {
        font-size: 14px;
      }
      .group-create-body {
        min-width: 0;
      }
      .group-create-name {
        margin: 0;
        font-size: 16px;
        line-height: 1.25;
        font-weight: 600;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .group-create-status {
        margin: 3px 0 0;
        font-size: 13px;
        line-height: 1.2;
        color: #64748b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .group-create-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 200px;
        width: 100%;
        color: #64748b;
        font-size: 15px;
        font-weight: 500;
        padding: 24px 16px;
      }
      .group-create-next {
        position: absolute !important;
        right: 16px !important;
        bottom: 16px !important;
        left: auto !important;
        top: auto !important;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 0;
        background: #2563eb;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
        cursor: pointer;
        opacity: 0;
        transform: translateY(10px) scale(0.94);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease, background 0.16s ease;
        z-index: 120 !important;
      }
      .group-create-next:hover {
        background: #1d4ed8;
      }
      .group-create-next .lucide {
        font-size: 26px;
      }
      .workspace-sidebar.group-create-next-enabled .group-create-next,
      .workspace-sidebar.group-create-step2-open .group-create-next {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: auto !important;
        z-index: 120 !important;
      }
      .channel-create-panel .channel-create-step-details {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
        z-index: 40;
      }
      .channel-create-panel .channel-create-step-type {
        z-index: 50;
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
      }
      .workspace-sidebar.channel-create-step2-open .channel-create-step-type {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
      }
      .workspace-sidebar.channel-create-step2-open .channel-create-step-details {
        transform: translateX(-18%);
        opacity: 0.35;
        pointer-events: none;
      }
      .channel-create-description-input {
        width: 100%;
        min-height: 88px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        border-radius: 12px;
        background: rgba(241, 245, 249, 0.9);
        color: #0f172a;
        padding: 12px 14px;
        font-size: 15px;
        resize: vertical;
        outline: none;
        transition: border-color 0.16s ease, background 0.16s ease;
      }
      .channel-create-description-input:focus {
        background: #ffffff;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
      }
      .channel-create-type-body {
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .channel-create-type-options {
        border: 0;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .channel-create-type-option {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 14px;
        border: 1px solid rgba(226, 232, 240, 0.95);
        background: rgba(248, 250, 252, 0.95);
        cursor: pointer;
      }
      .channel-create-type-option input {
        margin-top: 4px;
      }
      .channel-create-type-copy {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .channel-create-type-copy strong {
        font-size: 16px;
        color: #0f172a;
      }
      .channel-create-type-copy small {
        font-size: 13px;
        color: #64748b;
        line-height: 1.35;
      }
      .channel-create-slug-field {
        display: flex;
        align-items: center;
        gap: 0;
        border: 1px solid rgba(226, 232, 240, 0.95);
        border-radius: 12px;
        background: rgba(241, 245, 249, 0.9);
        overflow: hidden;
      }
      .channel-create-slug-field.is-invalid {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
      }
      .channel-create-slug-prefix {
        padding: 0 0 0 14px;
        color: #64748b;
        font-size: 14px;
        white-space: nowrap;
      }
      .channel-create-slug-input {
        flex: 1;
        min-width: 0;
        height: 44px;
        border: 0;
        outline: none;
        background: transparent;
        color: #0f172a;
        font-size: 15px;
        padding: 0 14px 0 4px;
      }
      .channel-create-slug-error {
        margin: 8px 0 0;
        color: #ef4444;
        font-size: 13px;
      }
      .channel-create-private-link-preview {
        margin: 0;
        padding: 12px 14px;
        border-radius: 12px;
        background: rgba(241, 245, 249, 0.95);
        color: #475569;
        font-size: 14px;
        word-break: break-all;
      }
      .channel-create-private-note {
        margin: 8px 0 0;
        color: #64748b;
        font-size: 13px;
      }
      .workspace-sidebar.channel-create-open:not(.channel-create-step2-open) #channel-create-next,
      .workspace-sidebar.channel-create-next-enabled #channel-create-next,
      .workspace-sidebar.channel-create-submit-enabled #channel-create-submit {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: auto !important;
        z-index: 120 !important;
      }
      #channel-create-submit {
        display: none;
      }
      .workspace-sidebar.channel-create-step2-open #channel-create-next {
        display: none;
      }
      .workspace-sidebar.channel-create-step2-open #channel-create-submit {
        display: inline-flex;
      }
      .chat-composer.channel-read-only {
        opacity: 0.72;
      }
      .chat-composer.channel-read-only .composer-input,
      .chat-composer.channel-read-only .composer-attach-button,
      .chat-composer.channel-read-only .composer-emoji-button,
      .chat-composer.channel-read-only .composer-send {
        pointer-events: none;
      }
      .group-details-body {
        padding: 18px 18px 14px;
      }
      .group-details-photo-row {
        display: flex;
        justify-content: center;
        margin-bottom: 18px;
      }
      .group-create-photo-button {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 0;
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
      }
      .group-create-photo-button .lucide,
      .group-create-photo-button .group-create-photo-icon {
        width: 46px;
        height: 46px;
        font-size: 46px;
        color: #ffffff;
      }
      .group-create-photo-button.has-photo .lucide,
      .group-create-photo-button.has-photo .group-create-photo-icon {
        display: none;
      }
      .group-create-photo-preview {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: none;
      }
      .group-create-photo-button.has-photo .group-create-photo-preview {
        display: block;
      }
      .group-create-photo-button.has-photo .lucide {
        display: none;
      }
      .group-create-name-label {
        display: block;
        color: #64748b;
        font-size: 13px;
        font-weight: 500;
        margin: 0 0 8px 2px;
      }
      .group-create-name-input {
        width: 100%;
        height: 52px;
        border-radius: 12px;
        border: 1px solid rgba(226, 232, 240, 0.9);
        background: rgba(241, 245, 249, 0.9);
        color: #0f172a;
        font-size: 22px;
        font-weight: 600;
        padding: 0 14px;
        outline: none;
      }
      .group-create-name-input:focus {
        background: #ffffff;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
      }
      .group-details-members {
        border-top: 1px solid rgba(226, 232, 240, 0.8);
        margin-top: 4px;
        padding: 12px 10px 96px;
        overflow: auto;
        flex: 1;
      }
      .group-create-member-count {
        margin: 0 8px 10px;
        color: #2563eb;
        font-size: 15px;
        font-weight: 600;
      }
      .group-create-details-list {
        display: grid;
        gap: 2px;
      }
      .group-create-details-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px;
        border-radius: 12px;
      }
      .group-create-details-item .dialog-avatar {
        width: 46px;
        height: 46px;
      }
      .group-create-details-item .group-create-name {
        font-size: 18px;
      }
      .group-create-details-item .group-create-status {
        font-size: 14px;
        margin-top: 3px;
      }
      .workspace-sidebar.group-create-step2-open .group-create-next {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .workspace-account {
        margin: 4px 4px 12px;
        padding: 12px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        border-radius: 22px;
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.045);
      }
      .workspace-account.is-hidden {
        display: none;
      }
      .workspace-account-copy {
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .workspace-account-label {
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #9da5b4;
      }
      .workspace-account-name {
        font-size: 15px;
        font-weight: 800;
        color: #f3f6fd;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .workspace-account-logout {
        flex-shrink: 0;
        border: 0;
        border-radius: 999px;
        background: rgba(132, 82, 102, 0.72);
        color: #ffffff;
        min-height: 38px;
        padding: 0 18px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.16s ease, opacity 0.16s ease;
      }
      .workspace-account-logout:hover {
        background: rgba(150, 90, 114, 0.84);
      }
      .workspace-account-logout:active {
        transform: scale(0.97);
      }
      .workspace-account-logout:disabled {
        opacity: 0.66;
        cursor: default;
      }
      .chat-subtitle {
        margin: 0;
        color: #9da5b4;
        display: block;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-subtitle .typing-preview {
        color: #2563eb !important;
        font-weight: 500;
        max-width: 100%;
        vertical-align: middle;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .chat-subtitle .typing-preview-dot {
        background: #2563eb !important;
      }
      .dialog-list {
        display: block;
        gap: 0;
        margin-top: 0;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0;
        padding-bottom: 72px;
        min-height: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .sidebar-ai-fab-container {
        position: absolute;
        left: 20px;
        bottom: 20px;
        z-index: 5;
        transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.22s ease;
      }
      .sidebar-ai-button {
        width: 48px;
        height: 48px;
        border: 0;
        border-radius: 16px;
        background: linear-gradient(135deg, #818cf8 0%, #ec4899 50%, #f43f5e 100%);
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(236, 72, 153, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, background 0.25s ease;
        outline: none !important;
        -webkit-tap-highlight-color: transparent;
      }
      .sidebar-ai-button .lucide {
        font-size: 24px;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .sidebar-ai-button:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 12px 30px rgba(236, 72, 153, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        background: linear-gradient(135deg, #6366f1 0%, #db2777 50%, #e11d48 100%);
      }
      .sidebar-ai-button:hover .lucide {
        transform: rotate(20deg) scale(1.1);
      }
      .sidebar-ai-button:active {
        transform: scale(0.95) translateY(0);
        box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
      }
      .sidebar-ai-button.disabled {
        background: rgba(80, 85, 100, 0.5) !important;
        box-shadow: none !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        opacity: 0.5;
        transform: none !important;
      }
      .sidebar-ai-button.disabled:hover {
        transform: none !important;
        box-shadow: none !important;
        background: rgba(80, 85, 100, 0.5) !important;
      }
      .sidebar-ai-fab-container.update-mode {
        left: 18px;
        right: 18px;
        bottom: 18px;
        transform: translateY(-14px);
        opacity: 1;
      }
      .sidebar-ai-fab-container.update-mode .sidebar-ai-tooltip {
        display: none !important;
      }
      .sidebar-ai-button.update-mode {
        width: 100%;
        height: 58px;
        border-radius: 18px;
        justify-content: flex-start;
        gap: 10px;
        padding: 0 16px 0 14px;
        background: linear-gradient(135deg, rgba(90, 97, 111, 0.96) 0%, rgba(56, 61, 72, 0.96) 100%);
        box-shadow: 0 18px 34px rgba(0, 0, 0, 0.24);
        transform: translateY(0);
      }
      .sidebar-ai-button.update-mode .sidebar-ai-button-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .sidebar-ai-button.update-mode.is-busy .sidebar-ai-button-icon .lucide {
        animation: searchSpin 0.9s linear infinite;
      }
      .sidebar-ai-button.update-mode .sidebar-ai-button-copy {
        min-width: 0;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 2px;
        flex: 1;
      }
      .sidebar-ai-button.update-mode .sidebar-ai-button-title {
        font-size: 15px;
        font-weight: 800;
        line-height: 1.1;
      }
      .sidebar-ai-button.update-mode .sidebar-ai-button-subtitle {
        font-size: 12px;
        color: rgba(238, 242, 251, 0.68);
      }
      .sidebar-ai-button.update-mode .sidebar-ai-button-action {
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        color: rgba(255,255,255,0.88);
      }
      .sidebar-ai-tooltip {
        position: absolute;
        left: 60px;
        top: 50%;
        transform: translateY(-50%) translateX(-8px);
        background: rgba(15, 18, 25, 0.94);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #edf2fb;
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        z-index: 10;
      }
      .sidebar-ai-fab-container:hover .sidebar-ai-tooltip {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }
      .dialog-list::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
      }
      .dialog-list.search-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 10px 26px;
      }
      .search-loading-state {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 180px;
        opacity: 0;
        animation: searchEmptyIn 0.12s ease forwards;
      }
      .search-spinner {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 3px solid rgba(238, 242, 251, 0.16);
        border-top-color: rgba(238, 242, 251, 0.86);
        animation: searchSpin 0.78s linear infinite;
      }
      .dialog-list.search-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 10px 26px;
      }
      .dialog-section {
        display: grid;
        gap: 8px;
      }
      .dialog-section-label {
        margin: 6px 4px 2px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #7f8897;
      }
      .search-empty-state {
        width: 100%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
        text-align: center;
        opacity: 0;
        transform: translateY(6px);
        animation: searchEmptyIn 0.14s ease forwards;
      }
      .search-empty-state video {
        width: 100%;
        max-width: 170px;
        border-radius: 24px;
        display: block;
        background: transparent;
        mix-blend-mode: screen;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
      }
      .search-empty-title {
        margin: 0;
        font-size: 22px;
        line-height: 1.1;
        font-weight: 800;
        color: #eef2fb;
        letter-spacing: 0.01em;
      }
      .search-empty-copy {
        margin: 0;
        font-size: 14px;
        line-height: 1.45;
        color: #93a0b7;
      }
      @keyframes searchEmptyIn {
        from {
          opacity: 0;
          transform: translateY(6px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes searchSpin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .sidebar-search {
        margin: 8px 12px 12px;
      }
      .sidebar-search input {
        width: 100%;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
        padding: 0 16px;
        font-size: 15px;
      }
      .sidebar-search input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
      .dialog-item {
        width: 100%;
        text-align: left;
        border: 1px solid transparent;
        background: transparent;
        color: #eef2fb;
        border-radius: 8px;
        padding: 8px 12px;
        min-height: 72px;
        cursor: pointer;
        display: flex;
        align-items: stretch;
        gap: 12px;
        position: relative;
        overflow: hidden;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        transition: background 0.2s ease-out;
      }
      .dialog-item:focus,
      .dialog-item:focus-visible {
        outline: none;
        box-shadow: none;
      }
      .dialog-item.saved-item {
        border-radius: 8px;
      }
      .dialog-item:hover {
        background: rgba(255, 255, 255, 0.08);
      }
      .dialog-item.active {
        background: rgba(255, 255, 255, 0.12);
      }
      .ripple-host {
        position: relative;
        overflow: hidden;
      }
      .ripple-host::after {
        content: "";
        position: absolute;
        left: var(--ripple-x, 50%);
        top: var(--ripple-y, 50%);
        width: 12px;
        height: 12px;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.34) 30%, rgba(255,255,255,0.14) 54%, rgba(255,255,255,0) 78%);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        pointer-events: none;
      }
      .ripple-host.ripple::after {
        animation: uiRippleExpand 0.66s cubic-bezier(0.16, 0.68, 0.2, 1) forwards;
      }
      .dialog-item.ripple-host::after {
        width: 14px;
        height: 14px;
        background: radial-gradient(circle, rgba(255,255,255,0.74) 0%, rgba(186,223,255,0.56) 28%, rgba(118,181,255,0.28) 54%, rgba(118,181,255,0) 80%);
      }
      .dialog-item.ripple-host.ripple::after {
        animation: uiRippleExpandDialog 0.74s cubic-bezier(0.16, 0.68, 0.2, 1) forwards;
      }
      @keyframes uiRippleExpand {
        0% {
          opacity: 0.62;
          transform: translate(-50%, -50%) scale(0);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(24);
        }
      }
      @keyframes uiRippleExpandDialog {
        0% {
          opacity: 0.8;
          transform: translate(-50%, -50%) scale(0);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(28);
        }
      }
      .dialog-item:hover .dialog-line,
      .dialog-item:hover .dialog-meta,
      .dialog-item:hover .dialog-preview {
        color: #dce6f4;
      }
      .dialog-item.active .dialog-line,
      .dialog-item.active .dialog-meta,
      .dialog-item.active .dialog-preview {
        color: #f6fbff;
      }
      .dialog-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(180deg, #6cb5ff 0%, #4a8fe9 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: visible;
      }
      .dialog-avatar.user-avatar {
        background: linear-gradient(180deg, var(--avatar-start, #6cb5ff) 0%, var(--avatar-end, #4a8fe9) 100%);
      }
      .dialog-avatar.saved-avatar {
        background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%) !important;
        color: #ffffff !important;
      }
      .dialog-avatar.saved-avatar svg,
      .dialog-avatar.saved-avatar .lucide,
      .chat-header-avatar .saved-avatar svg,
      .chat-header-avatar .saved-avatar .lucide {
        fill: #ffffff !important;
        stroke: #ffffff !important;
        color: #ffffff !important;
      }
      .dialog-avatar-presence {
        position: absolute;
        right: 0px;
        bottom: 0px;
        left: auto;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #22c55e;
        border: 2px solid #ffffff;
        opacity: 0;
        transform: scale(0.3);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: auto;
        cursor: default;
        z-index: 3;
      }
      .dialog-avatar-presence.online {
        opacity: 1;
        transform: scale(1);
        background: #22c55e;
        border: 2px solid #ffffff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }
      .dialog-avatar-presence.online::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        background: #ffffff;
        color: #0f172a;
        border: 1px solid rgba(0, 0, 0, 0.08);
        font-family: "Open Sans", -apple-system, sans-serif;
        font-size: 11.5px;
        font-weight: 500;
        letter-spacing: 0.01em;
        white-space: nowrap;
        padding: 3px 8px;
        border-radius: 6px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.16s ease, transform 0.16s ease, visibility 0.16s ease;
        z-index: 100;
      }
      .dialog-avatar-presence.online:hover::after {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }
      .dialog-avatar-secret,
      .dialog-avatar-secret:focus,
      .dialog-avatar-secret:active {
        position: absolute !important;
        right: 0px !important;
        bottom: 0px !important;
        width: 16px !important;
        height: 16px !important;
        border-radius: 50% !important;
        background: #2563eb !important;
        border: 2px solid #ffffff !important;
        color: #ffffff !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 0 2px 6px rgba(15, 23, 42, 0.18) !important;
        z-index: 10 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
        outline: none !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .dialog-avatar-secret .lucide,
      .dialog-avatar-secret svg {
        width: 9px !important;
        height: 9px !important;
        font-size: 9px !important;
        color: #ffffff !important;
        fill: none !important;
        stroke: #ffffff !important;
        stroke-width: 2.2 !important;
        stroke-linecap: round !important;
        stroke-linejoin: round !important;
      }
      }
      .dialog-avatar svg {
        width: 22px;
        height: 22px;
        stroke: #ffffff;
        stroke-width: 2.2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .dialog-avatar-text {
        font-size: 22px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1;
      }
      .dialog-avatar.user-avatar .dialog-avatar-text {
        display: none;
      }
      .generated-avatar-photo {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: inherit;
        object-fit: cover;
        pointer-events: none;
        user-select: none;
      }
      .dialog-body {
        min-width: 0;
        flex: 1;
        min-height: 54px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .dialog-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        color: #dde5f2;
      }
      .dialog-line strong {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.25;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .dialog-line.only-title {
        justify-content: flex-start;
      }
      .dialog-title-wrap {
        display: inline-flex;
        align-items: center;
        min-width: 0;
      }
      .dialog-meta {
        color: #8d96a7;
        font-size: 13px;
        flex-shrink: 0;
        transition: color 0.24s ease;
      }
      .dialog-preview-row {
        margin-top: 6px;
        display: flex;
        align-items: center;
        min-width: 0;
        width: 100%;
      }
      .dialog-preview-copy {
        min-width: 0;
        flex: 1;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dialog-unread-badge {
        min-width: 20px;
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
        margin-left: 6px;
        border-radius: 10px;
        background: linear-gradient(135deg, #8774e1 0%, #6b52e6 100%);
        color: #ffffff;
        font-size: 11.5px;
        font-weight: 700;
        text-align: center;
        flex-shrink: 0;
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 2px 6px rgba(107, 82, 230, 0.35);
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .dialog-unread-badge.is-muted {
        background: #4e5766 !important;
        color: #c3ccd7 !important;
        box-shadow: none !important;
      }
      .dialog-item.active .dialog-unread-badge {
        background: #ffffff !important;
        color: #2b5278 !important;
        box-shadow: none !important;
      }
      .dialog-item.active .dialog-unread-badge.is-muted {
        background: rgba(255, 255, 255, 0.3) !important;
        color: #ffffff !important;
        box-shadow: none !important;
      }
      .dialog-unread-badge.is-hidden {
        min-width: 0 !important;
        max-width: 0 !important;
        padding: 0 !important;
        margin-left: 0 !important;
        opacity: 0;
        transform: scale(0.72);
        pointer-events: none;
      }
      .dialog-posts-badge {
        min-width: 20px;
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
        margin-left: 6px;
        border-radius: 10px;
        background: rgba(100, 116, 139, 0.14);
        color: #64748b;
        font-size: 11.5px;
        font-weight: 600;
        text-align: center;
        flex-shrink: 0;
      }
      .dialog-posts-badge.is-hidden {
        min-width: 0 !important;
        max-width: 0 !important;
        padding: 0 !important;
        margin-left: 0 !important;
        opacity: 0;
        pointer-events: none;
      }
      .typing-preview {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        max-width: 100%;
        color: #2563eb !important;
        font-weight: 500;
      }
      .typing-preview-text {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .typing-preview-dots {
        display: inline-flex;
        align-items: flex-end;
        gap: 3px;
        flex-shrink: 0;
        height: 12px;
        padding-top: 1px;
      }
      .typing-preview-dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #2563eb !important;
        opacity: 0.4;
        animation: dialogTypingBounce 1s infinite ease-in-out;
      }
      .typing-preview-dot:nth-child(2) {
        animation-delay: 0.15s;
      }
      .typing-preview-dot:nth-child(3) {
        animation-delay: 0.3s;
      }
      .dialog-item:hover .typing-preview,
      .dialog-item.active .typing-preview {
        color: #2563eb !important;
      }
      @keyframes dialogTypingBounce {
        0%, 80%, 100% {
          transform: translateY(0);
          opacity: 0.34;
        }
        40% {
          transform: translateY(-3px);
          opacity: 1;
        }
      }
      .dialog-preview {
        margin: 4px 0 0;
        color: #cfd7e4;
        font-size: 15px;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: color 0.24s ease;
      }
      .chat-window {
        --chat-profile-panel-width: 420px;
        --chat-emoji-picker-width: min(420px, 38vw);
        --chat-header-height: 72px;
        --chat-top-offset: 0px;
        --chat-group-call-top-offset: 0px;
        --chat-group-call-join-offset: 0px;
        width: 100%;
        height: 100%;
        min-height: 0;
        border-radius: 0;
        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: none;
        padding: 0;
        padding-right: 0;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        transition: opacity 0.14s ease, background 0.14s ease;
      }
      .chat-window.profile-panel-open {
        padding-right: 0;
      }
      .chat-window.profile-panel-open .chat-stage,
      .chat-window.profile-panel-open .composer {
        margin-right: calc(var(--chat-profile-panel-width) + 16px);
      }
      .chat-window.emoji-picker-open .chat-stage,
      .chat-window.emoji-picker-open .composer {
        margin-right: var(--chat-emoji-picker-width);
        transition: none;
      }
      .chat-window.dialog-switching .chat-stage {
        opacity: 0.92;
      }
      .chat-window.dialog-switching .chat-island,
      .chat-window.dialog-switching .composer {
        opacity: 0.94;
      }
      .chat-window.dialog-switching .chat-loading-overlay {
        opacity: 0.54;
        transform: translate(-50%, -50%);
      }
      .chat-window.motion-enter {
        animation: chatSurfaceEnter 0.14s var(--motion-standard) both;
      }
      .chat-window.motion-exit .chat-stage,
      .chat-window.motion-exit .chat-island,
      .chat-window.motion-exit .composer {
        opacity: 0.92;
        transform: translateY(6px);
        transition: opacity 0.14s ease, transform 0.14s ease;
      }
      @keyframes chatSurfaceEnter {
        from {
          opacity: 0.82;
        }
        to {
          opacity: 1;
        }
      }
      .chat-island {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        z-index: 10;
        min-width: 240px;
        max-width: 540px;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 18px 12px 24px;
        border-radius: 999px;
        background: rgba(18, 22, 30, 0.95);
        border: 1px solid rgba(255,255,255,0.07);
        box-shadow: none;
        transition: top 0.24s ease, opacity 0.24s ease, transform 0.24s ease;
      }
      .chat-window.search-open .chat-island {
        transform: translateX(-50%) translateY(0);
      }
      .chat-island-copy {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
        flex: 1;
        cursor: pointer;
        border-radius: 18px;
        transition: opacity 0.16s ease, transform 0.16s ease;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }
      .chat-island-copy:focus,
      .chat-island-copy:focus-visible {
        outline: none;
        box-shadow: none;
      }
      .chat-header-avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: visible !important;
        color: #ffffff;
        position: relative;
      }
      .chat-header-avatar .dialog-avatar {
        width: 100%;
        height: 100%;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
        overflow: visible !important;
        border-radius: 50%;
      }
      .chat-header-avatar .dialog-avatar svg {
        width: 18px;
        height: 18px;
      }
      .chat-header-avatar .dialog-avatar-presence {
        width: 12px;
        height: 12px;
        right: 0px;
        bottom: 0px;
        left: auto;
        border: 2.5px solid #ffffff;
      }
      .chat-header-avatar .dialog-avatar-secret {
        right: -3px !important;
        bottom: -3px !important;
        width: 19px !important;
        height: 19px !important;
        background: #ffffff !important;
        border: 2px solid #ffffff !important;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.18) !important;
        border-radius: 50% !important;
        outline: none !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .chat-header-avatar .dialog-avatar-secret .lucide,
      .chat-header-avatar .dialog-avatar-secret svg {
        width: 11px !important;
        height: 11px !important;
        font-size: 11px !important;
        color: #0f172a !important;
        margin: auto !important;
        display: block !important;
      }
      .chat-island-text {
        min-width: 0;
        flex: 1;
        text-align: center;
      }
      .chat-island-copy:hover {
        opacity: 0.92;
      }
      .chat-island-copy:active {
        transform: scale(0.985);
      }
      .chat-island strong {
        display: block;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-island span {
        display: block;
        margin-top: 4px;
        font-size: 13px;
        color: #97a0ae;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-island-actions {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        transition: opacity 0.2s ease;
      }
      .page.ui-telegram-topbar .chat-island {
        top: 0;
        left: 0;
        right: 0;
        transform: none;
        width: 100%;
        max-width: none;
        min-width: 0;
        gap: 8px;
        min-height: 56px;
        height: 56px;
        padding: 0 10px 0 16px;
        border-radius: 0 !important;
        border: 0 !important;
        border-bottom: 1px solid #e7e7e7 !important;
        background: #ffffff !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        box-shadow: none !important;
        color: #000000 !important;
        transition: none;
      }
      .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island {
        left: 10px;
        right: calc(var(--chat-profile-panel-width) + 26px);
        width: auto;
        min-width: 0;
        max-width: none;
        transform: none;
      }
      .page.ui-telegram-topbar .chat-window.search-open .chat-island {
        transform: none;
      }
      .page.ui-telegram-topbar .chat-island-copy {
        text-align: left;
      }
      .page.ui-telegram-topbar .chat-header-avatar {
        display: none;
      }
      .page.ui-telegram-topbar .chat-island-text {
        text-align: left;
      }
      .page.ui-telegram-topbar .chat-island strong {
        font-size: 17px;
        line-height: 1.05;
      }
      .page.ui-telegram-topbar .chat-island span {
        margin-top: 5px;
        font-size: 13px;
      }
      .page.ui-telegram-topbar .chat-island-actions {
        margin-left: auto;
      }
      .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island-actions {
        margin-right: 0;
      }
      .page.ui-telegram-topbar .chat-search-panel {
        top: calc(var(--chat-header-height) + 8px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
      }
      .page.ui-telegram-topbar .chat-call-chip {
        top: calc(var(--chat-header-height) + 12px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
      }
      .page.ui-telegram-topbar .chat-stage {
        padding-top: calc(var(--chat-header-height) + 4px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
      }
      .page.ui-telegram-topbar .workspace-main.empty-chat .chat-island {
        transform: translateY(-14px);
      }
      .chat-island-action {
        width: 48px;
        height: 48px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: #c8d4e8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, color 0.16s ease, opacity 0.16s ease, transform 0.16s ease;
      }
      .chat-island-action .lucide,
      .chat-search-close .lucide,
      .chat-profile-panel-close .lucide,
      .chat-scroll-bottom .lucide,
      .attach-menu-item .lucide {
        color: currentColor;
      }
      .chat-island-action .lucide {
        font-size: 28px;
        font-variation-settings: "FILL" 0, "wght" 560, "GRAD" 0, "opsz" 28;
      }
      .chat-island-action[hidden] {
        display: none;
      }
      .chat-island-action:hover {
        background: rgba(255,255,255,0.06);
        color: #f2f5fd;
      }
      .chat-island-action:active {
        transform: scale(0.94);
      }
      .chat-island-action svg {
        width: 28px;
        height: 28px;
        stroke: currentColor;
        fill: none;
        stroke-width: 1.85;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .chat-search-backdrop {
        position: absolute;
        inset: 0;
        z-index: 15;
        background: rgba(8, 10, 16, 0.38);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.26s ease;
      }
      .chat-window.search-open .chat-search-backdrop {
        opacity: 1;
        pointer-events: auto;
      }
      .chat-search-panel {
        position: absolute;
        top: 72px;
        left: 50%;
        transform: translateX(-50%) translateY(-14px) scale(0.96);
        z-index: 16;
        width: min(660px, calc(100% - 48px));
        display: flex;
        flex-direction: column;
        background: rgba(20, 23, 32, 0.88);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 22px;
        box-shadow:
          0 8px 32px rgba(0, 0, 0, 0.52),
          0 2px 8px rgba(0, 0, 0, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.07);
        opacity: 0;
        pointer-events: none;
        transition:
          opacity 0.28s cubic-bezier(0.34, 1.36, 0.64, 1),
          transform 0.28s cubic-bezier(0.34, 1.36, 0.64, 1);
        overflow: hidden;
      }
      .chat-search-panel.open {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
        pointer-events: auto;
      }
      .chat-profile-resize-handle {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 6px;
        cursor: col-resize;
        z-index: 100;
        transition: background-color 0.2s ease;
      }
      .chat-profile-resize-handle:hover,
      .chat-profile-resize-handle.active {
        background-color: rgba(99, 102, 241, 0.24);
        box-shadow: inset 1px 0 0 rgba(99, 102, 241, 0.4);
      }
      .chat-profile-panel {
        position: absolute;
        top: 8px;
        right: 8px;
        bottom: 8px;
        left: auto;
        width: var(--chat-profile-panel-width);
        height: auto;
        max-width: calc(100% - 16px);
        max-height: none;
        margin: 0;
        padding: 0;
        z-index: 40;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 16px;
        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.12);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        overflow: hidden;
        opacity: 1;
        pointer-events: none;
        transform: translateX(calc(100% + 24px));
        transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
        overscroll-behavior: contain;
      }
      .chat-profile-panel.open {
        transform: translateX(0);
        pointer-events: auto;
      }
      .chat-profile-panel-card {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: none;
        margin: 0;
        background: #ffffff;
        border: 0;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        opacity: 1;
        transform: none;
        transition: none;
        box-shadow: none;
        overflow: hidden;
        color: #0d0f12;
      }
      .chat-profile-panel.open .chat-profile-panel-card {
        opacity: 1;
        transform: none;
      }
      .chat-profile-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 24px 26px 18px;
        border-bottom: 1px solid #f1f5f9;
      }
      .chat-profile-panel-title {
        font-size: 28px;
        font-weight: 800;
        color: #0d0f12;
      }
      .chat-profile-panel-close {
        width: 38px;
        height: 38px;
        border: 1px solid #e2e8f0;
        border-radius: 50%;
        background: #f1f5f9;
        color: #475569;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, color 0.16s ease, transform 0.16s ease;
      }
      .chat-profile-panel-close:hover {
        background: #e2e8f0;
        color: #0f172a;
      }
      .chat-profile-panel-close:active {
        transform: scale(0.94);
      }
      .chat-profile-panel-body {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 34px 28px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .chat-profile-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: min(100%, 620px);
      }
      .chat-profile-avatar,
      .chat-profile-avatar:active,
      .chat-profile-avatar:focus,
      .chat-profile-avatar:focus-within {
        width: 112px !important;
        height: 112px !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: transparent !important;
        box-shadow: 0 14px 36px rgba(15, 23, 42, 0.16) !important;
        overflow: visible !important;
        outline: none !important;
      }
      .chat-profile-avatar .dialog-avatar,
      .chat-profile-avatar .user-avatar,
      .chat-profile-avatar .dialog-avatar:active,
      .chat-profile-avatar .dialog-avatar:focus {
        width: 100% !important;
        height: 100% !important;
        min-width: 100% !important;
        min-height: 100% !important;
        font-size: 42px !important;
        overflow: visible !important;
        outline: none !important;
        border-radius: 50% !important;
      }
      .chat-profile-avatar .dialog-avatar svg { width: 48px; height: 48px; }
      .chat-profile-avatar .dialog-avatar-presence { width: 18px; height: 18px; right: 4px; bottom: 4px; left: auto; border-width: 3px; }
      .chat-profile-avatar .dialog-avatar-secret {
        right: 0px !important;
        bottom: 0px !important;
        width: 30px !important;
        height: 30px !important;
        background: #ffffff !important;
        border: 2px solid #ffffff !important;
        box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2) !important;
        border-radius: 50% !important;
        outline: none !important;
      }
      .chat-profile-avatar .dialog-avatar-secret .lucide,
      .chat-profile-avatar .dialog-avatar-secret svg {
        width: 18px !important;
        height: 18px !important;
        font-size: 18px !important;
        color: #0f172a !important;
        fill: currentColor !important;
        stroke: none !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .chat-profile-name {
        margin-top: 20px;
        font-size: 36px;
        font-weight: 800;
        color: #0d0f12;
        line-height: 1.08;
      }
      .chat-profile-status { margin-top: 10px; font-size: 17px; color: #64748b; }
      .chat-profile-meta-grid { width: min(100%, 620px); margin-top: 28px; display: grid; gap: 14px; }
      .chat-profile-card {
        padding: 18px 18px 20px;
        border-radius: 24px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
      }
      .chat-profile-card-label {
        display: block;
        margin-bottom: 6px;
        font-size: 12px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #64748b;
        font-weight: 600;
      }
      .chat-profile-card-value { font-size: 15px; line-height: 1.45; color: #0d0f12; word-break: break-word; }
      .chat-profile-link { color: #2563eb; text-decoration: underline; text-underline-offset: 2px; }
      .chat-profile-link:hover { color: #1d4ed8; }
      .chat-profile-link-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .chat-profile-link-row .chat-profile-link {
        flex: 1 1 auto;
        min-width: 0;
      }
      .chat-profile-qr-btn {
        flex: 0 0 auto;
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 999px;
        background: rgba(37, 99, 235, 0.1);
        color: #2563eb;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.15s ease;
      }
      .chat-profile-qr-btn:hover {
        background: rgba(37, 99, 235, 0.16);
      }
      .chat-profile-qr-btn:active {
        transform: scale(0.96);
      }
      .chat-profile-qr-btn .lucide {
        width: 20px;
        height: 20px;
      }
      .qr-share-modal {
        position: fixed;
        inset: 0;
        z-index: 12000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.2s ease, visibility 0.2s ease;
      }
      .qr-share-modal.open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      .qr-share-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.55);
        backdrop-filter: blur(4px);
      }
      .qr-share-card {
        position: relative;
        z-index: 1;
        width: min(360px, 100%);
        padding: 52px 24px 24px;
        border-radius: 28px;
        box-shadow: 0 24px 64px rgba(15, 23, 42, 0.28);
        text-align: center;
        overflow: hidden;
        transition: background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease;
      }
      .qr-share-card--light {
        background-color: #b2dd94;
        background-image:
          linear-gradient(130deg, rgba(211, 231, 142, 0.92) 0%, rgba(142, 197, 127, 0.92) 40%, rgba(116, 180, 105, 0.92) 70%, rgba(178, 221, 148, 0.92) 100%),
          url("/assets/wallpaper.svg");
        background-size: auto, 540px auto;
        background-repeat: no-repeat, repeat;
        background-position: center, center top;
        background-blend-mode: normal, multiply;
      }
      .qr-share-card--dark {
        background-color: #1a1f2e;
        background-image:
          linear-gradient(180deg, rgba(26, 31, 46, 0.94) 0%, rgba(15, 20, 32, 0.98) 100%),
          url("/assets/wallpaper.svg");
        background-size: auto, 540px auto;
        background-repeat: no-repeat, repeat;
        background-position: center, center top;
        background-blend-mode: normal, soft-light;
      }
      .qr-share-toolbar {
        position: absolute;
        top: 12px;
        left: 12px;
        right: 12px;
        z-index: 6;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        pointer-events: none;
      }
      .qr-share-toolbar > * {
        pointer-events: none;
      }
      .qr-share-modal.open .qr-share-toolbar > * {
        pointer-events: auto;
      }
      .qr-share-theme-toggle,
      .qr-share-close {
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
        position: relative;
        z-index: 7;
        flex-shrink: 0;
        padding: 0;
      }
      .qr-share-card--light .qr-share-theme-toggle,
      .qr-share-card--light .qr-share-close {
        background: rgba(255, 255, 255, 0.82);
        color: #1e4620;
        box-shadow: 0 4px 14px rgba(30, 70, 32, 0.12);
      }
      .qr-share-card--dark .qr-share-theme-toggle,
      .qr-share-card--dark .qr-share-close {
        background: rgba(255, 255, 255, 0.12);
        color: #f8fafc;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.24);
      }
      .qr-share-theme-toggle:hover,
      .qr-share-close:hover {
        transform: scale(1.04);
      }
      .qr-share-theme-toggle:active,
      .qr-share-close:active {
        transform: scale(0.96);
      }
      .qr-share-theme-toggle .lucide,
      .qr-share-close .lucide {
        width: 20px;
        height: 20px;
      }
      .qr-share-theme-icon {
        position: absolute;
        inset: 0;
        margin: auto;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }
      .qr-share-card--light .qr-share-theme-icon-moon {
        opacity: 1;
        transform: scale(1);
      }
      .qr-share-card--light .qr-share-theme-icon-sun {
        opacity: 0;
        transform: scale(0.72);
      }
      .qr-share-card--dark .qr-share-theme-icon-moon {
        opacity: 0;
        transform: scale(0.72);
      }
      .qr-share-card--dark .qr-share-theme-icon-sun {
        opacity: 1;
        transform: scale(1);
      }
      .qr-share-title {
        margin: 0 0 18px;
        font-size: 20px;
        font-weight: 600;
        transition: color 0.35s ease;
      }
      .qr-share-card--light .qr-share-title {
        color: #1a3d1a;
      }
      .qr-share-card--dark .qr-share-title {
        color: #f8fafc;
      }
      .qr-share-preview-wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
      }
      .qr-share-tile {
        width: 280px;
        height: 280px;
        max-width: 100%;
        padding: 14px;
        border-radius: 24px;
        box-shadow: 0 10px 28px rgba(15, 23, 42, 0.14);
        transition: background 0.35s ease, box-shadow 0.35s ease;
      }
      .qr-share-card--light .qr-share-tile {
        background: #ffffff;
        box-shadow: 0 10px 28px rgba(30, 70, 32, 0.14);
      }
      .qr-share-card--dark .qr-share-tile {
        background: #2a3142;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
      }
      .qr-share-qr-host,
      .qr-share-qr-host canvas {
        width: 100% !important;
        height: 100% !important;
        display: block;
      }
      .qr-share-qr-host canvas {
        border-radius: 12px;
      }
      .qr-share-url {
        margin: 0 0 18px;
        font-size: 13px;
        line-height: 1.45;
        word-break: break-all;
        padding: 10px 14px;
        border-radius: 14px;
        transition: color 0.35s ease, background 0.35s ease;
      }
      .qr-share-card--light .qr-share-url {
        color: #1e4620;
        background: rgba(255, 255, 255, 0.78);
      }
      .qr-share-card--dark .qr-share-url {
        color: #e2e8f0;
        background: rgba(15, 23, 42, 0.55);
      }
      .qr-share-copy-btn {
        width: 100%;
        border: 0;
        border-radius: 999px;
        padding: 14px 18px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease;
      }
      .qr-share-card--light .qr-share-copy-btn {
        background: #3390ec;
        box-shadow: 0 8px 20px rgba(51, 144, 236, 0.28);
      }
      .qr-share-card--light .qr-share-copy-btn:hover {
        background: #2481cc;
      }
      .qr-share-card--dark .qr-share-copy-btn {
        background: #5eb3f6;
        box-shadow: 0 8px 20px rgba(94, 179, 246, 0.22);
      }
      .qr-share-card--dark .qr-share-copy-btn:hover {
        background: #3d9ee8;
      }
      .qr-share-copy-btn:active {
        transform: scale(0.98);
      }
      #chat-profile-members-section {
        margin-top: 16px;
        margin-left: -28px;
        margin-right: -28px;
        width: calc(100% + 56px);
      }
      .chat-profile-members-label {
        display: block;
        margin: 0 28px 8px;
      }
      #chat-profile-members-list {
        width: 100%;
      }
      .chat-profile-notifications-toggle {
        width: 42px;
        height: 24px;
        border-radius: 999px;
        border: 0;
        background: rgba(255,255,255,0.2);
        padding: 2px;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      .chat-profile-notifications-toggle-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1f2633;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .chat-profile-notifications-toggle.is-on {
        background: #7f67ff;
      }
      .chat-profile-notifications-toggle.is-on .chat-profile-notifications-toggle-thumb {
        transform: translateX(18px);
        background: #ffffff;
      }
      .chat-profile-action-btn {
        min-height: 38px;
        border: 1px solid rgba(125, 185, 255, 0.45);
        border-radius: 12px;
        background: rgba(125, 185, 255, 0.12);
        color: #dcefff;
        font-size: 14px;
        font-weight: 600;
        padding: 0 14px;
        cursor: pointer;
        transition: background 0.16s ease, border-color 0.16s ease;
      }
      .chat-profile-action-btn:hover {
        background: rgba(125, 185, 255, 0.2);
        border-color: rgba(125, 185, 255, 0.68);
      }
      .chat-profile-leave-btn {
        display: block;
        width: calc(100% - 56px);
        margin: 24px auto 8px;
        min-height: 44px;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #ef4444;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.16s ease;
      }
      .chat-profile-leave-btn:hover {
        background: rgba(239, 68, 68, 0.08);
      }
      .chat-profile-leave-btn[hidden] {
        display: none !important;
      }
      .group-member-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        cursor: pointer;
        transition: background 0.16s ease;
      }
      .group-member-row:hover {
        background: rgba(255,255,255,0.04);
      }
      .group-member-row:last-child {
        border-bottom: 0;
      }
      .group-member-avatar {
        width: 42px;
        height: 42px;
        flex-shrink: 0;
      }
      .group-incoming-avatar-hit {
        display: inline-flex;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
      }
      .group-member-main {
        min-width: 0;
        flex: 1;
      }
      .group-member-name {
        color: #eef2fb;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.15;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .group-member-status {
        margin-top: 4px;
        color: #a8b4c7;
        font-size: 14px;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .group-member-role {
        color: #8fa2c6;
        font-size: 14px;
        text-transform: lowercase;
        white-space: nowrap;
        align-self: flex-start;
        margin-top: 1px;
      }
      .chat-search-bar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px 12px 14px;
        background: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        flex-shrink: 0;
      }
      .chat-search-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 800;
        color: #ffffff;
        background: linear-gradient(145deg, var(--avatar-start, #8b6ee8) 0%, var(--avatar-end, #5b41c8) 100%);
        box-shadow: 0 4px 14px rgba(100, 70, 220, 0.38);
        overflow: hidden;
      }
      .chat-search-avatar .dialog-avatar {
        width: 100%;
        height: 100%;
      }
      .chat-search-avatar .dialog-avatar svg {
        width: 18px;
        height: 18px;
      }
      .chat-search-field {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
        background: rgba(255,255,255,0.04);
        border: 1.5px solid rgba(255,255,255,0.07);
        border-radius: 12px;
        padding: 9px 13px;
        transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
      }
      .chat-search-field:focus-within {
        border-color: rgba(141, 115, 240, 0.55);
        background: rgba(141, 115, 240, 0.07);
        box-shadow: 0 0 0 3px rgba(141, 115, 240, 0.12);
      }
      .chat-search-field svg {
        width: 16px;
        height: 16px;
        stroke: #6b5fa0;
        fill: none;
        stroke-width: 2.2;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex-shrink: 0;
        transition: stroke 0.22s ease;
      }
      .chat-search-field:focus-within svg {
        stroke: #b09ef8;
      }
      .chat-search-input {
        width: 100%;
        border: 0;
        outline: none;
        background: transparent;
        color: #eef2fb;
        font-size: 15px;
        font-family: inherit;
        letter-spacing: 0.01em;
      }
      .chat-search-input::placeholder {
        color: #4d5870;
      }
      .chat-search-close {
        width: 32px;
        height: 32px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.05);
        color: #8090a8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: background 0.16s ease, color 0.16s ease, transform 0.16s ease;
      }
      .chat-search-close:hover {
        color: #eef2fb;
        background: rgba(255,255,255,0.1);
      }
      .chat-search-close:active {
        transform: scale(0.9);
      }
      .chat-search-close .lucide {
        font-size: 20px;
      }
      .chat-search-close svg {
        width: 16px;
        height: 16px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2.2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .chat-search-results {
        max-height: min(480px, 60vh);
        overflow-y: auto;
        overflow-x: hidden;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.1) transparent;
      }
      .chat-search-results::-webkit-scrollbar {
        width: 4px;
      }
      .chat-search-results::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.08);
        border-radius: 4px;
      }
      .chat-search-result,
      .chat-search-empty {
        border-radius: 16px;
      }
      .chat-search-result {
        padding: 12px 14px;
        display: grid;
        grid-template-columns: 38px minmax(0, 1fr);
        gap: 12px;
        cursor: pointer;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.05);
        transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s cubic-bezier(0.22, 0.61, 0.36, 1);
        animation: searchResultAppear 0.28s cubic-bezier(0.22, 0.61, 0.36, 1) both;
      }
      @keyframes searchResultAppear {
        from {
          opacity: 0;
          transform: translateX(18px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .chat-search-result:nth-child(1) { animation-delay: 0.03s; }
      .chat-search-result:nth-child(2) { animation-delay: 0.07s; }
      .chat-search-result:nth-child(3) { animation-delay: 0.11s; }
      .chat-search-result:nth-child(4) { animation-delay: 0.15s; }
      .chat-search-result:nth-child(5) { animation-delay: 0.18s; }
      .chat-search-result:hover {
        background: rgba(141, 115, 240, 0.08);
        border-color: rgba(141, 115, 240, 0.18);
      }
      .chat-search-result:active {
        transform: scale(0.98);
      }
      .chat-search-result-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 800;
        color: #ffffff;
        background: linear-gradient(145deg, var(--avatar-start, #8b6ee8) 0%, var(--avatar-end, #5b41c8) 100%);
        flex-shrink: 0;
      }
      .chat-search-result-avatar .dialog-avatar {
        width: 100%;
        height: 100%;
      }
      .chat-search-result-avatar .dialog-avatar svg {
        width: 18px;
        height: 18px;
      }
      .chat-search-result-copy {
        min-width: 0;
      }
      .chat-search-result-line {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
      }
      .chat-search-result-name {
        font-size: 14px;
        font-weight: 700;
        color: #e8edf8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-search-result-time {
        font-size: 11px;
        color: #6070880;
        color: #607088;
        flex-shrink: 0;
      }
      .chat-search-result-text {
        margin-top: 3px;
        font-size: 13px;
        color: #8090a8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-search-empty {
        padding: 32px 20px;
        color: #5c687a;
        font-size: 14px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .message-search-hit,
      .message-jump-highlight {
        position: relative;
        isolation: isolate;
      }
      .message-search-hit::before,
      .message-jump-highlight::before {
        content: "";
        position: absolute;
        left: calc(-100vw - var(--chat-stage-inline-pad));
        right: calc(-100vw - var(--chat-stage-inline-pad) - 14px);
        top: 0;
        bottom: 0;
        z-index: -1;
        pointer-events: none;
        border-radius: 0;
        opacity: 0;
        background:
          linear-gradient(90deg, rgba(124, 90, 220, 0) 0%, rgba(124, 90, 220, 0.24) 18%, rgba(124, 90, 220, 0.32) 50%, rgba(124, 90, 220, 0.24) 82%, rgba(124, 90, 220, 0) 100%);
        animation: messageRowStripePulse 3.2s cubic-bezier(0.22, 0.61, 0.36, 1) both;
      }
      @keyframes messageRowStripePulse {
        0% {
          opacity: 0;
        }
        12% {
          opacity: 1;
        }
        82% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .chat-call-chip {
        position: absolute;
        top: 12px;
        left: 24px;
        z-index: 15;
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 46px;
        padding: 10px 14px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(18, 22, 30, 0.96);
        box-shadow: 0 18px 38px rgba(0,0,0,0.22);
        opacity: 0;
        transform: translateY(-8px);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .chat-call-chip.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      .chat-call-chip-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #68d86f;
        box-shadow: 0 0 0 6px rgba(104, 216, 111, 0.12);
        flex-shrink: 0;
      }
      .chat-call-chip-copy {
        min-width: 0;
      }
      .chat-call-chip-title {
        display: block;
        font-size: 14px;
        font-weight: 700;
        color: #f3f6fd;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-call-chip-time {
        display: block;
        margin-top: 3px;
        font-size: 12px;
        color: #9cadc7;
      }
      .group-call-banner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 18;
        height: 44px;
        border: 0;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 14px;
        padding: 0 14px;
        background:
          radial-gradient(circle at 12% 48%, rgba(255,255,255,0.16) 0%, transparent 22%),
          radial-gradient(circle at 83% 42%, rgba(255,255,255,0.11) 0%, transparent 26%),
          linear-gradient(180deg, #8f9eac 0%, #7e8e9d 100%);
        color: #f7fbff;
        transform: translateY(-46px);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.26s ease, opacity 0.26s ease, background 0.55s ease, box-shadow 0.55s ease;
        text-align: left;
        overflow: hidden;
        box-shadow: inset 0 -1px 0 rgba(255,255,255,0.06);
      }
      .group-call-banner::before,
      .group-call-banner::after {
        content: "";
        position: absolute;
        inset: -26% -18%;
        pointer-events: none;
        opacity: 0.35;
        transition: opacity 0.55s ease;
      }
      .group-call-banner::before {
        background:
          radial-gradient(circle, rgba(255,255,255,0.22) 0 2px, transparent 2px) 8% 18% / 180px 42px repeat,
          radial-gradient(circle, rgba(255,255,255,0.16) 0 1.5px, transparent 1.5px) 30% 68% / 210px 38px repeat;
        animation: groupCallBannerParticles 12s linear infinite;
      }
      .group-call-banner::after {
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 45%, transparent 100%);
        transform: translateX(-110%);
        animation: groupCallBannerShine 3.8s ease-in-out infinite;
      }
      .group-call-banner.visible {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
      .group-call-banner[data-call-status="active"] {
        background:
          radial-gradient(circle at 14% 44%, rgba(220, 255, 236, 0.34) 0%, transparent 26%),
          radial-gradient(circle at 86% 38%, rgba(182, 255, 224, 0.28) 0%, transparent 30%),
          linear-gradient(180deg, #6fbb94 0%, #3f9f71 100%);
        box-shadow: inset 0 -1px 0 rgba(255,255,255,0.1), 0 10px 28px rgba(31, 126, 79, 0.38);
      }
      .group-call-banner[data-call-status="active"]::before {
        opacity: 0.48;
      }
      .group-call-banner[data-call-status="active"]::after {
        opacity: 0.55;
      }
      .group-call-banner-state {
        font-size: 24px;
        line-height: 1;
      }
      .group-call-banner-title {
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .group-call-banner .lucide {
        font-size: 20px;
        color: rgba(255,255,255,0.85);
      }
      .group-call-join-strip {
        position: absolute;
        top: 80px;
        left: 12px;
        right: 12px;
        z-index: 17;
        min-height: 50px;
        padding: 8px 10px 8px 12px;
        border-radius: 12px;
        border: 1px solid rgba(171, 129, 255, 0.36);
        background:
          radial-gradient(circle at 18% 42%, rgba(191, 140, 255, 0.24) 0%, transparent 36%),
          linear-gradient(110deg, rgba(75, 55, 130, 0.97) 0%, rgba(98, 66, 162, 0.97) 46%, rgba(73, 53, 127, 0.97) 100%);
        display: flex;
        align-items: center;
        gap: 12px;
        opacity: 0;
        transform: translateY(-10px) scaleY(0.96);
        pointer-events: none;
        transition: opacity 0.24s ease, transform 0.24s ease, max-height 0.24s ease, margin 0.24s ease, padding 0.24s ease;
        box-shadow: 0 10px 24px rgba(21, 12, 37, 0.35);
        overflow: hidden;
        max-height: 60px;
        font-family: "Open Sans", "Segoe UI", sans-serif;
      }
      .group-call-join-strip::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(96deg, transparent 0%, rgba(255,255,255,0.18) 48%, transparent 100%);
        transform: translateX(-115%);
        animation: groupCallJoinStripShine 3.6s ease-in-out infinite;
      }
      .group-call-join-strip.visible {
        opacity: 1;
        transform: translateY(0) scaleY(1);
        pointer-events: auto;
      }
      .group-call-join-copy {
        min-width: 0;
      }
      .group-call-join-title {
        display: block;
        font-size: 22px;
        line-height: 1;
        font-weight: 600;
        color: #a88bff;
        font-family: "Open Sans", "Segoe UI", sans-serif;
      }
      .group-call-join-meta {
        display: block;
        margin-top: 3px;
        font-size: 15px;
        color: rgba(235, 224, 255, 0.86);
        font-family: "Open Sans", "Segoe UI", sans-serif;
      }
      .group-call-join-button {
        margin-left: auto;
        border: 0;
        border-radius: 999px;
        height: 34px;
        padding: 0 14px;
        font-size: 19px;
        font-weight: 700;
        letter-spacing: 0.02em;
        color: #f9efff;
        background: linear-gradient(180deg, #ea82de 0%, #cd59c2 100%);
        cursor: pointer;
        font-family: "Open Sans", "Segoe UI", sans-serif;
        transition: transform 0.16s ease, filter 0.16s ease;
      }
      .group-call-join-button:hover {
        filter: brightness(1.05);
      }
      .group-call-join-button:active {
        transform: translateY(1px);
      }
      @keyframes groupCallBannerParticles {
        0% { transform: translateX(0); }
        100% { transform: translateX(-120px); }
      }
      @keyframes groupCallBannerShine {
        0%, 100% { transform: translateX(-110%); opacity: 0; }
        45% { opacity: 0.42; }
        60% { transform: translateX(105%); opacity: 0.22; }
      }
      @keyframes groupCallJoinStripShine {
        0%, 100% { transform: translateX(-115%); opacity: 0; }
        44% { opacity: 0.44; }
        62% { transform: translateX(110%); opacity: 0.2; }
      }
      .chat-audio-top-player {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 16;
        height: 54px;
        opacity: 0;
        transform: translateY(-54px);
        pointer-events: none;
        border-top: 1px solid rgba(255,255,255,0.04);
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        background: #1d2129;
        transition: opacity 0.24s ease, transform 0.24s ease;
        overflow: visible;
      }
      .chat-audio-top-player.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
      }
      .chat-audio-top-inner {
        height: 100%;
        display: grid;
        grid-template-columns: auto auto auto minmax(0, 1fr) auto auto auto auto;
        align-items: center;
        gap: 9px;
        padding: 7px 14px 7px 14px;
      }
      .chat-audio-top-btn {
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: #9ea7b8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0;
        transition: background 0.16s ease, color 0.16s ease;
      }
      .chat-audio-top-btn:hover,
      .chat-audio-top-btn:focus,
      .chat-audio-top-btn:active {
        background: rgba(255,255,255,0.08);
        color: #e5ebf7;
        outline: none;
      }
      .chat-audio-top-btn .lucide,
      .chat-audio-top-btn svg {
        width: 18px;
        height: 18px;
        font-size: 18px;
        font-variation-settings: "FILL" 1, "wght" 520, "GRAD" 0, "opsz" 20;
      }
      .chat-audio-top-copy {
        min-width: 0;
      }
      .chat-audio-top-title {
        font-size: 13px;
        line-height: 1.15;
        font-weight: 700;
        color: #eff3fb;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chat-audio-top-meta {
        font-size: 11px;
        line-height: 1.15;
        color: #a4acbb;
        white-space: nowrap;
      }
      .chat-audio-top-progress {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 8px;
        cursor: pointer;
        background: transparent;
        touch-action: none;
      }
      .chat-audio-top-progress-fill {
        display: block;
        width: var(--audio-top-progress, 0%);
        height: 2px;
        margin-top: 6px;
        background: #8ab4ff;
        transition: width 0.14s linear, height 0.16s ease, margin-top 0.16s ease;
      }
      .chat-audio-top-progress:hover .chat-audio-top-progress-fill {
        height: 3px;
        margin-top: 4px;
      }
      .chat-audio-top-progress:active .chat-audio-top-progress-fill {
        height: 4px;
        margin-top: 2px;
      }
      .chat-audio-top-speed,
      .chat-audio-top-repeat {
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: #9ea7b8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0;
        transition: background 0.16s ease, color 0.16s ease;
      }
      .chat-audio-top-speed {
        font-size: 12px;
        font-weight: 700;
      }
      .chat-audio-top-speed:hover,
      .chat-audio-top-repeat:hover,
      .chat-audio-top-speed:focus,
      .chat-audio-top-repeat:focus,
      .chat-audio-top-speed:active,
      .chat-audio-top-repeat:active {
        background: rgba(255,255,255,0.08);
        color: #e5ebf7;
        outline: none;
      }
      .chat-audio-top-repeat.is-active {
        color: #8ab4ff;
        background: rgba(138, 180, 255, 0.12);
      }
      .chat-audio-top-repeat.is-active:hover {
        background: rgba(138, 180, 255, 0.18);
        color: #a3c5ff;
      }
      .chat-audio-top-repeat svg {
        width: 18px;
        height: 18px;
      }
      .chat-audio-top-volume-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
      }
      .chat-audio-top-volume-popover {
        position: absolute;
        top: calc(100% + 8px);
        right: -4px;
        width: 34px;
        height: 124px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(20, 23, 30, 0.98);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(-4px) scale(0.96);
        pointer-events: none;
        transition: opacity 0.16s ease, transform 0.16s ease;
      }
      .chat-audio-top-volume-wrap:hover .chat-audio-top-volume-popover,
      .chat-audio-top-volume-wrap:focus-within .chat-audio-top-volume-popover,
      .chat-audio-top-volume-popover.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .chat-audio-top-volume-range {
        width: 100px;
        height: 22px;
        transform: rotate(-90deg);
        transform-origin: center;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
      }
      .chat-audio-top-volume-range::-webkit-slider-runnable-track {
        height: 4px;
        border-radius: 999px;
        background: rgba(255,255,255,0.22);
      }
      .chat-audio-top-volume-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        margin-top: -4px;
        border: 0;
        border-radius: 50%;
        background: #8ab4ff;
      }
      .chat-audio-top-volume-range::-moz-range-track {
        height: 4px;
        border-radius: 999px;
        background: rgba(255,255,255,0.22);
        border: 0;
      }
      .chat-audio-top-volume-range::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border: 0;
        border-radius: 50%;
        background: #8ab4ff;
      }
      .page.ui-telegram-topbar .chat-audio-top-player {
        top: var(--chat-group-call-top-offset);
        z-index: 16;
      }
      .page.ui-telegram-topbar .chat-window.audio-top-player-visible {
        --chat-top-offset: 0px;
      }
      .page.ui-telegram-topbar .chat-window.group-call-banner-visible {
        --chat-group-call-top-offset: 44px;
      }
      .page.ui-telegram-topbar .chat-window.group-call-join-visible {
        --chat-group-call-join-offset: 58px;
      }
      .call-overlay {
        position: absolute;
        inset: 0;
        z-index: 22;
        pointer-events: none;
      }
      .call-modal {
        position: absolute;
        left: 50%;
        top: 50%;
        width: min(380px, calc(100% - 20px));
        height: min(600px, calc(100% - 20px));
        min-height: min(600px, calc(100% - 20px));
        padding: 0;
        border-radius: 12px;
        border: 0;
        background: linear-gradient(180deg, var(--call-bg-start, #be8b4a) 0%, var(--call-bg-end, #b67f3b) 100%);
        box-shadow: 0 24px 64px rgba(0,0,0,0.45);
        transform: translate(-50%, -50%) scale(0.96);
        opacity: 0;
        pointer-events: none;
        transition: opacity 240ms ease, transform 240ms ease, width 260ms ease, height 260ms ease, border-radius 260ms ease;
        overflow: hidden;
        --call-voice-level: 0;
        animation: none;
      }
      .call-modal::before,
      .call-mini-card::before {
        content: "";
        position: absolute;
        inset: -18%;
        background:
          radial-gradient(circle at 20% 25%, rgba(111, 96, 255, 0.22), transparent 28%),
          radial-gradient(circle at 78% 32%, rgba(48, 198, 255, 0.18), transparent 24%),
          radial-gradient(circle at 52% 82%, rgba(68, 229, 154, 0.14), transparent 28%);
        filter: blur(22px);
        opacity: 0.72;
        pointer-events: none;
      }
      .call-modal.ringing::before,
      .call-mini-card.ringing::before {
        animation: callAuraFlow 4.8s linear infinite;
      }
      @keyframes callAuraFlow {
        0% { transform: translate3d(-2%, -1%, 0) scale(1); }
        50% { transform: translate3d(2%, 2%, 0) scale(1.04); }
        100% { transform: translate3d(-2%, -1%, 0) scale(1); }
      }
      .call-modal.open {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        pointer-events: auto;
      }
      .call-modal.expanded {
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        min-height: calc(100% - 8px);
        border-radius: 6px;
      }
      .call-modal.minimized {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.94);
        pointer-events: none;
      }
      .call-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 16px 16px 0;
      }
      .call-modal-kicker,
      .call-group-kicker {
        font-size: 0;
        color: transparent;
        min-height: 24px;
      }
      .call-group-kicker {
        color: #9be0ff;
      }
      .call-modal-top-actions {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-left: auto;
      }
      .call-icon-button {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: 0;
        background: transparent;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .call-icon-button:hover {
        background: rgba(255,255,255,0.1);
      }
      .call-icon-button svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .call-icon-button .lucide,
      .call-action-button .lucide {
        font-size: 22px;
        line-height: 1;
        font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 24;
      }
      .call-modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 0;
        height: calc(100% - 44px);
        padding: 16px 18px 24px;
        position: relative;
        gap: 0;
      }
      .call-fingerprint {
        width: 100%;
        margin: 8px auto 24px;
        padding: 14px 14px;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(0,0,0,0.18);
      }
      .call-fingerprint-emojis {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 28px;
      }
      .call-fingerprint-emoji {
        width: 25px;
        height: 25px;
        object-fit: contain;
        display: inline-block;
        cursor: help;
      }
      .call-fingerprint-copy {
        margin-top: 8px;
        text-align: center;
        font-size: 11px;
        line-height: 1.35;
        color: rgba(255,255,255,0.92);
      }
      .call-fingerprint-arrow {
        font-size: 13px;
        vertical-align: -2px;
        margin-left: 3px;
      }
      .call-peer-avatar {
        width: 136px;
        height: 136px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 88px;
        font-weight: 800;
        color: rgba(234, 234, 234, 0.96);
        background: transparent;
        box-shadow: none;
        position: relative;
        z-index: 2;
      }
      .call-peer-avatar-shell {
        position: relative;
        width: 176px;
        height: 176px;
        display: grid;
        place-items: center;
        margin-top: 18px;
      }
      .call-voice-ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.26);
        opacity: 0.35;
        transform-origin: center;
        transition: transform 0.14s linear, opacity 0.14s linear;
        pointer-events: none;
      }
      .call-voice-ring.r1 {
        transform: scale(calc(1 + (var(--call-voice-level, 0) * 0.24)));
        opacity: calc(0.2 + (var(--call-voice-level, 0) * 0.55));
      }
      .call-voice-ring.r2 {
        transform: scale(calc(1.1 + (var(--call-voice-level, 0) * 0.36)));
        opacity: calc(0.14 + (var(--call-voice-level, 0) * 0.44));
      }
      .call-voice-ring.r3 {
        transform: scale(calc(1.22 + (var(--call-voice-level, 0) * 0.5)));
        opacity: calc(0.08 + (var(--call-voice-level, 0) * 0.34));
      }
      .call-peer-name {
        margin-top: 10px;
        font-size: 41px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.02em;
        line-height: 1.15;
      }
      .call-peer-status {
        margin-top: 6px;
        font-size: 24px;
        font-weight: 600;
        color: rgba(255,255,255,0.96);
        transition: transform 0.24s ease, opacity 0.24s ease;
        will-change: transform, opacity;
      }
      .call-peer-substatus {
        margin-top: 4px;
        font-size: 18px;
        color: rgba(255,255,255,0.88);
        max-width: 92%;
        line-height: 1.35;
        word-break: break-word;
        transition: transform 0.24s ease, opacity 0.24s ease;
        will-change: transform, opacity;
      }
      .call-peer-substatus:empty {
        display: none;
      }
      .call-video-stage {
        position: fixed;
        z-index: 35;
        border-radius: 12px;
        overflow: hidden;
        background: rgba(8, 10, 16, 0.45);
        border: 1px solid rgba(255,255,255,0.1);
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 8px;
        padding: 8px;
      }
      .call-video-slot {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        background: rgba(13, 16, 23, 0.8);
        border: 1px solid rgba(255,255,255,0.15);
      }
      .call-video-slot.screen-share {
        border-color: rgba(255,255,255,0.3);
      }
      .call-video-slot-label {
        position: absolute;
        left: 8px;
        bottom: 8px;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        line-height: 1.2;
        color: #fff;
        background: rgba(0,0,0,0.42);
        pointer-events: none;
      }
      .call-video-preview {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .call-video-preview.local {
        transform: scaleX(-1);
      }
      .call-video-placeholder {
        position: relative;
        inset: 0;
        display: grid;
        place-items: center;
        color: rgba(255,255,255,0.45);
      }
      .call-screen-share-notice {
        margin-top: 8px;
        margin-bottom: 10px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12px;
        line-height: 1.3;
        color: rgba(255,255,255,0.95);
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(0,0,0,0.22);
      }
      .call-modal.has-direct-visuals .call-peer-avatar-shell,
      .call-modal.has-direct-visuals .call-peer-name,
      .call-modal.has-direct-visuals .call-peer-status,
      .call-modal.has-direct-visuals .call-peer-substatus {
        margin-left: 0;
      }
      .call-modal.has-direct-visuals .call-fingerprint {
        margin-left: 0;
        width: 100%;
      }
      .call-modal.has-direct-visuals .call-actions {
        margin-left: 0;
        width: 100%;
      }
      .call-modal[data-direct-visual-layout="single"] .call-video-stage {
        grid-template-rows: 1fr;
      }
      .call-modal.open.has-direct-visuals {
        transform: translate(-44%, -50%) scale(1);
      }
      .call-modal.expanded.has-direct-visuals .call-fingerprint,
      .call-modal.expanded.has-direct-visuals .call-peer-avatar-shell,
      .call-modal.expanded.has-direct-visuals .call-peer-name,
      .call-modal.expanded.has-direct-visuals .call-peer-status,
      .call-modal.expanded.has-direct-visuals .call-peer-substatus,
      .call-modal.expanded.has-direct-visuals .call-actions {
        margin-left: 0;
        width: 100%;
      }
      .call-modal.expanded.open.has-direct-visuals {
        transform: translate(-47%, -50%) scale(1);
      }
      .call-modal:not(.has-direct-visuals) .call-screen-share-notice {
        display: none;
      }
      .call-actions {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        flex-wrap: nowrap;
        width: 100%;
        padding-bottom: 18px;
      }
      .call-actions[data-call-layout="outgoing"] {
        gap: 14px;
      }
      .call-action {
        width: 72px;
        display: grid;
        gap: 8px;
        justify-items: center;
      }
      .call-action[hidden] {
        display: none;
      }
      .call-action-button {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 0;
        background: rgba(255,255,255,0.2);
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.16s ease, background 0.16s ease, opacity 0.16s ease;
      }
      .call-action-button.muted {
        background: rgba(255, 115, 115, 0.28);
        animation: micMutedPulse 1.2s ease-in-out infinite;
      }
      @keyframes micMutedPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.07); }
      }
      .call-action-button:hover {
        background: rgba(255,255,255,0.22);
      }
      .call-action-button:active {
        transform: scale(0.95);
      }
      .call-action-button:disabled {
        opacity: 0.56;
        cursor: not-allowed;
        transform: none;
      }
      .call-action-button:disabled:hover {
        background: rgba(255,255,255,0.2);
      }
      .call-action-button.end {
        background: #ff5b67;
      }
      .call-action-button.accept {
        background: #4dcc5f;
      }
      .call-action-button.muted {
        background: rgba(22, 29, 38, 0.32);
      }
      .call-action-button.active {
        background: #ffffff;
        color: #1f2633;
      }
      .call-action-button.muted .lucide {
        font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      }
      .call-action-button svg {
        width: 22px;
        height: 22px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .call-action-label {
        font-size: 13px;
        line-height: 1.1;
        color: #ffffff;
      }
      .call-video-stage,
      #call-video-stage,
      #call-remote-slot,
      #call-local-slot,
      #call-remote-video,
      #call-local-video,
      #call-video-placeholder,
      .call-fingerprint,
      #call-fingerprint-emojis {
        display: none !important;
      }
      .tg-call-modal.call-modal {
        left: 50%;
        top: 50%;
        width: min(948px, calc(100% - 36px));
        height: min(680px, calc(100% - 32px));
        min-height: 520px;
        padding: 18px 18px 18px;
        border-radius: 34px;
        background:
          radial-gradient(circle at 24% 18%, rgba(255, 159, 225, 0.36) 0%, transparent 34%),
          radial-gradient(circle at 78% 26%, rgba(255, 210, 245, 0.24) 0%, transparent 36%),
          radial-gradient(circle at 50% 85%, rgba(255, 146, 204, 0.24) 0%, transparent 38%),
          linear-gradient(180deg, rgba(243, 155, 214, 0.98) 0%, rgba(220, 117, 186, 0.98) 100%);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 28px 70px rgba(0,0,0,0.34);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-size: 160% 160%;
        animation: callGradientFlow 10s ease-in-out infinite;
      }
      .tg-call-modal.call-modal::before {
        content: "";
        position: absolute;
        inset: -18%;
        background:
          radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.18), transparent 28%),
          radial-gradient(circle at 78% 32%, rgba(255, 255, 255, 0.12), transparent 24%),
          radial-gradient(circle at 52% 82%, rgba(255, 255, 255, 0.1), transparent 28%);
        filter: blur(22px);
        opacity: 0.62;
        pointer-events: none;
      }
      .tg-call-modal.call-modal.open {
        transform: translate(-50%, -50%) scale(1);
      }
      .tg-call-modal.call-modal.expanded {
        width: min(948px, calc(100% - 36px));
        height: min(680px, calc(100% - 32px));
        min-height: 520px;
      }
      .tg-call-modal.call-modal.open.has-direct-visuals,
      .tg-call-modal.call-modal.expanded.open.has-direct-visuals {
        transform: translate(-50%, -50%) scale(1);
      }
      .tg-call-window-actions {
        position: absolute;
        top: 14px;
        right: 16px;
        z-index: 8;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .tg-call-window-button {
        width: 32px;
        height: 32px;
        color: rgba(255, 255, 255, 0.9);
        background: transparent;
      }
      .tg-call-window-button:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      #call-participants-grid.call-participants-grid {
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: stretch;
        width: 100%;
        height: 0;
        padding: 10px;
        box-sizing: border-box;
        flex: 0 0 0;
        background: transparent;
        border: 0;
        border-radius: 0;
        overflow-x: auto;
        overflow-y: hidden;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-18px);
        transition:
          height 240ms ease,
          flex-basis 240ms ease,
          opacity 220ms ease,
          transform 240ms ease,
          margin 240ms ease;
        margin: 0;
      }
      .participant-card,
      .call-participant-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 192px;
        min-width: 192px;
        height: 108px;
        border-radius: 4px;
        background: #24252d;
        position: relative;
        padding: 10px 10px 10px;
        box-sizing: border-box;
      }
      .participant-avatar,
      .call-participant-avatar {
        width: 64px;
        height: 64px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: #f0b85d;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1f1608;
        font-size: 22px;
        line-height: 1;
        font-weight: 700;
        overflow: hidden;
      }
      .participant-avatar img,
      .call-participant-avatar img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
        max-width: none;
        max-height: none;
      }
      .call-participant-avatar .generated-avatar-photo,
      .call-group-row-avatar .generated-avatar-photo {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center !important;
        display: block;
      }
      #call-participants-grid.call-participants-grid .call-participant-avatar {
        margin-top: 2px;
      }
      .participant-name,
      .call-participant-meta {
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translateX(-50%);
        max-width: calc(100% - 18px);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
        padding: 4px 8px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.72);
        color: #fff;
        font-size: 13px;
        line-height: 16px;
        white-space: nowrap;
      }
      #call-participants-grid.call-participants-grid .call-participant-meta {
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translateX(-50%);
        margin-top: 0;
        max-width: calc(100% - 18px);
      }
      .call-participant-name {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .participant-mic,
      .call-participant-mic {
        flex: 0 0 auto;
        font-size: 15px;
        line-height: 1;
        color: rgba(255, 255, 255, 0.9);
      }
      .participant-mic.muted,
      .call-participant-mic.muted {
        color: rgba(255, 255, 255, 0.88);
      }
      #call-main-stream.call-main-stream {
        flex-grow: 1;
        width: 100%;
        min-height: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: rgba(77, 43, 84, 0.18);
        border: 1px solid rgba(255,255,255,0.16);
        border-radius: 22px;
        margin: 0;
        transition:
          margin 240ms ease,
          border-radius 240ms ease,
          min-height 240ms ease,
          transform 240ms ease;
      }
      .tg-call-modal.call-modal.screen-share-active #call-participants-grid.call-participants-grid {
        height: 120px;
        flex-basis: 120px;
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
        margin: 0 0 8px;
      }
      .tg-call-modal.call-modal.screen-share-active #call-main-stream.call-main-stream {
        margin-top: 8px;
      }
      #remote-screen-video,
      .remote-screen-video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: none;
        background: #000;
      }
      #remote-screen-video.active,
      .remote-screen-video.active {
        display: block;
      }
      #call-main-placeholder.call-main-placeholder {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: transparent;
        color: #fff;
        text-align: center;
      }
      #call-main-placeholder[hidden] {
        display: none !important;
      }
      #local-video-preview {
        position: absolute;
        right: 16px;
        bottom: 16px;
        width: 208px;
        height: 118px;
        object-fit: cover;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.24);
        background: rgba(24, 16, 28, 0.82);
        box-shadow: 0 20px 36px rgba(0,0,0,0.26);
        display: none;
        z-index: 4;
      }
      #local-video-preview.active {
        display: block;
      }
      .tg-call-modal .call-peer-avatar-shell {
        width: 176px;
        height: 176px;
        margin: 0 0 12px;
      }
      .tg-call-modal .call-peer-avatar {
        width: 136px;
        height: 136px;
        border-radius: 50%;
        background: linear-gradient(180deg, rgba(243, 169, 219, 1) 0%, rgba(214, 101, 186, 1) 100%);
        color: #ffffff;
        font-size: 56px;
        font-weight: 800;
      }
      .tg-call-modal .call-peer-name {
        margin: 10px 0 0;
        font-size: 44px;
        line-height: 1.08;
        font-weight: 800;
        color: #fff;
      }
      .tg-call-modal .call-peer-status {
        margin: 8px 0 0;
        font-size: 28px;
        line-height: 1.1;
        font-weight: 600;
        color: rgba(255,255,255,0.94);
      }
      .tg-call-modal .call-peer-substatus,
      .tg-call-modal .call-screen-share-notice,
      .tg-call-modal .call-group-panel {
        display: none !important;
      }
      .tg-call-actions.call-actions {
        flex: 0 0 86px;
        width: 100%;
        margin: 24px 0 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
      }
      .tg-call-actions .call-action {
        width: 76px;
        min-width: 76px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .tg-call-action-button.call-action-button {
        width: 58px;
        height: 58px;
        min-width: 58px;
        min-height: 58px;
        max-width: 58px;
        max-height: 58px;
        border-radius: 50%;
        background: rgba(255,255,255,0.16);
        color: #fff;
        border: 0;
        box-shadow: none;
        box-sizing: border-box;
        flex: 0 0 58px;
        padding: 0;
      }
      .tg-call-action-button.call-action-button:hover {
        background: rgba(255,255,255,0.22);
      }
      .tg-call-action-button.call-action-button.active {
        background: #ffffff;
        color: #5d2d59;
      }
      .tg-call-action-button.call-action-button.end {
        background: #ff5f68;
      }
      .tg-call-action-button.call-action-button.end:hover {
        background: #ff7179;
      }
      .tg-call-actions .call-action-label {
        font-size: 13px;
        line-height: 14px;
        min-height: 14px;
        color: rgba(255, 255, 255, 0.96);
        white-space: nowrap;
      }
      .tg-call-actions .call-action {
        min-height: 82px;
      }
      .tg-call-actions .call-action .lucide {
        font-size: 23px;
        line-height: 1;
        width: 23px;
        height: 23px;
      }
      .tg-call-modal .call-modal-kicker {
        position: absolute;
        top: 18px;
        left: 18px;
        z-index: 8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 72px;
        min-height: 30px;
        padding: 4px 12px;
        border-radius: 999px;
        background: rgba(60, 32, 70, 0.32);
        border: 1px solid rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.92);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      .call-devices-legacy-button {
        display: none !important;
      }
      .call-screen-overlay {
        position: absolute;
        inset: 0;
        z-index: 24;
        opacity: 0;
        pointer-events: none;
        transition: opacity 220ms ease;
      }
      .call-screen-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }
      .call-screen-overlay-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(6, 8, 14, 0.8);
      }
      .call-screen-overlay-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        padding: 28px 18px 18px;
        box-sizing: border-box;
      }
      .call-screen-overlay-title {
        align-self: flex-start;
        margin: 0 0 12px;
        padding: 4px 12px;
        border-radius: 999px;
        background: rgba(31, 22, 40, 0.7);
        border: 1px solid rgba(255,255,255,0.14);
        color: rgba(255,255,255,0.94);
        font-size: 13px;
        line-height: 1.2;
        font-weight: 700;
      }
      .call-screen-overlay-stage {
        position: relative;
        flex: 1 1 auto;
        min-height: 0;
        border-radius: 10px;
        overflow: hidden;
        background: #000;
      }
      .call-screen-overlay-stage::after {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 180ms ease;
      }
      .call-screen-overlay-stage:hover::after {
        opacity: 1;
      }
      .call-screen-overlay-video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #000;
      }
      .call-screen-overlay-hud {
        position: absolute;
        left: 50%;
        bottom: 52px;
        transform: translateX(-50%);
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 11px;
        border-radius: 999px;
        background: rgba(8, 9, 13, 0.72);
        border: 1px solid rgba(255,255,255,0.16);
        color: #fff;
        font-size: 13px;
        line-height: 1.1;
        font-weight: 600;
        opacity: 0;
        transition: opacity 160ms ease;
      }
      .call-screen-overlay-stage:hover ~ .call-screen-overlay-hud,
      .call-screen-overlay-hud:hover {
        opacity: 1;
      }
      .call-screen-overlay-hud .lucide {
        font-size: 16px;
        line-height: 1;
      }
      .call-emoji-tooltip {
        position: absolute;
        z-index: 46;
        max-width: 180px;
        padding: 8px 10px;
        border-radius: 10px;
        background: rgba(18, 21, 27, 0.94);
        color: #ffffff;
        font-size: 12px;
        line-height: 1.3;
        box-shadow: 0 10px 28px rgba(0,0,0,0.3);
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 4px, 0);
        transition: opacity 120ms ease, transform 120ms ease;
        white-space: normal;
      }
      .call-emoji-tooltip.visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      .leave-call-modal {
        position: absolute;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.38);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
        backdrop-filter: blur(3px);
      }
      .leave-call-modal.visible {
        opacity: 1;
        pointer-events: auto;
      }
      .leave-call-modal-card {
        width: min(360px, calc(100% - 28px));
        border-radius: 14px;
        background: #1f2127;
        border: 1px solid rgba(255,255,255,0.08);
        padding: 18px;
        font-family: "Open Sans", "Segoe UI", sans-serif;
        transform: translateY(8px) scale(0.97);
        opacity: 0;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      .leave-call-modal.visible .leave-call-modal-card {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      .leave-call-modal-card h3 {
        margin: 0;
        font-size: 31px;
        color: #ffffff;
      }
      .leave-call-modal-card p {
        margin: 10px 0 0;
        color: #e9eef8;
        font-size: 27px;
        line-height: 1.3;
      }
      .leave-call-modal-checkbox {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 18px;
        color: #f4f7ff;
        font-size: 27px;
      }
      .leave-call-modal-checkbox input {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0.46);
        background: rgba(255,255,255,0.04);
        display: inline-block;
        position: relative;
        cursor: pointer;
        transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
      }
      .leave-call-modal-checkbox input::after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg) scale(0.6);
        opacity: 0;
        transition: opacity 0.16s ease, transform 0.18s ease;
      }
      .leave-call-modal-checkbox input:checked {
        background: #ff5f68;
        border-color: #ff5f68;
      }
      .leave-call-modal-checkbox input:checked::after {
        opacity: 1;
        transform: rotate(45deg) scale(1);
      }
      .leave-call-modal-actions {
        margin-top: 18px;
        display: flex;
        justify-content: flex-end;
        gap: 16px;
      }
      .leave-call-modal-actions button {
        border: 0;
        background: transparent;
        cursor: pointer;
        font-weight: 700;
        padding: 10px 16px;
        border-radius: 10px;
        transition: background 0.15s ease;
      }
      .leave-call-modal-actions button:hover,
      .leave-call-modal-actions button:focus,
      .leave-call-modal-actions button:active {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        outline: none;
      }
      #group-call-leave-cancel {
        color: #9a84ff;
      }
      #group-call-leave-cancel:hover,
      #group-call-leave-cancel:focus,
      #group-call-leave-cancel:active {
        background: rgba(154, 132, 255, 0.12);
      }
      #group-call-leave-confirm {
        color: #ff6670;
      }
      #group-call-leave-confirm:hover,
      #group-call-leave-confirm:focus,
      #group-call-leave-confirm:active {
        background: rgba(255, 102, 112, 0.12);
      }
      .call-modal[data-call-mode="group"] {
        width: min(430px, calc(100% - 22px));
        min-height: min(620px, calc(100% - 24px));
        height: min(620px, calc(100% - 24px));
        border-radius: 16px;
        padding: 0;
        background: #1b1d22;
        border: 1px solid rgba(255,255,255,0.06);
        box-shadow: 0 26px 64px rgba(0,0,0,0.5);
      }
      .call-modal[data-call-mode="group"] .call-modal-header {
        height: 56px;
        padding: 0 12px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        display: grid;
        grid-template-columns: 30px 1fr 30px;
        align-items: center;
        gap: 10px;
      }
      .call-modal[data-call-mode="group"] #call-close-button {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: transparent;
        border: 0;
        justify-self: start;
      }
      .call-modal[data-call-mode="group"] #call-close-button .lucide {
        font-size: 22px;
        color: rgba(255,255,255,0.92);
      }
      .call-modal[data-call-mode="group"] #call-group-kicker {
        display: block !important;
        grid-column: 2;
        font-size: 20px;
        font-weight: 700;
        color: #f0f4fb;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .call-modal[data-call-mode="group"] .call-modal-content {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        text-align: left;
        justify-content: flex-start;
        min-height: 0;
        height: calc(100% - 56px);
        padding: 10px 14px 12px;
      }
      .call-participants-grid {
        display: flex;
        gap: 12px;
        justify-content: center;
        width: 100%;
        height: 120px;
        padding: 10px;
        border-radius: 12px;
        background: rgba(255,255,255,0.04);
        overflow-x: auto;
        overflow-y: hidden;
      }
      .call-participant-card {
        flex: 0 0 150px;
        height: 100%;
        border-radius: 10px;
        background: rgba(26, 29, 37, 0.92);
        border: 1px solid rgba(255,255,255,0.07);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        position: relative;
        padding: 10px 8px 28px;
      }
      .call-participant-avatar {
        width: 66px;
        height: 66px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        overflow: hidden;
        display: grid;
        place-items: center;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(180deg, #f1be64 0%, #d89a3f 100%);
      }
      .call-participant-avatar img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
        max-width: none;
        max-height: none;
      }
      .call-participant-meta {
        position: absolute;
        left: 50%;
        bottom: 8px;
        transform: translateX(-50%);
        max-width: calc(100% - 14px);
        border-radius: 999px;
        background: rgba(8, 9, 12, 0.86);
        border: 1px solid rgba(255,255,255,0.12);
        color: #f2f5fc;
        font-size: 13px;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 9px;
        white-space: nowrap;
      }
      .call-participant-name {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .call-participant-mic {
        font-size: 16px;
        line-height: 1;
      }
      .call-participant-mic.muted {
        color: #ff8d96;
      }
      .call-main-stream {
        width: 100%;
        flex: 1;
        min-height: 220px;
        border-radius: 12px;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
        background: #1f222c;
        border: 1px solid rgba(255,255,255,0.09);
      }
      .call-main-stream-video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: none;
      }
      .call-main-stream-video.active {
        display: block;
      }
      .call-main-stream-placeholder {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        color: rgba(226, 232, 245, 0.8);
        font-size: 14px;
        text-align: center;
        padding: 18px;
      }
      .call-modal[data-call-mode="group"] .call-peer-avatar-shell,
      .call-modal[data-call-mode="group"] .call-peer-name,
      .call-modal[data-call-mode="group"] .call-peer-substatus {
        display: none;
      }
      .call-modal[data-call-mode="group"] .call-peer-status {
        margin: 4px 0 0;
        font-size: 23px;
        color: #aeb8c7;
        text-align: left;
      }
      .call-modal[data-call-mode="group"] .call-fingerprint {
        display: none;
      }
      .call-modal:not([data-call-mode="group"]) .call-participants-grid,
      .call-modal:not([data-call-mode="group"]) .call-main-stream {
        display: none;
      }
      .call-modal[data-call-mode="group"] .call-peer-avatar-shell {
        width: 56px;
        height: 56px;
        margin: 10px 0 0;
      }
      .call-modal[data-call-mode="group"] .call-peer-avatar {
        width: 50px;
        height: 50px;
        font-size: 24px;
      }
      .call-modal[data-call-mode="group"] .call-peer-name {
        margin-top: 8px;
        font-size: 26px;
        line-height: 1.18;
        font-weight: 700;
        letter-spacing: -0.02em;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .call-modal[data-call-mode="group"] .call-peer-status {
        margin-top: 4px;
        font-size: 22px;
        color: #cfd7e5;
      }
      .call-modal[data-call-mode="group"] .call-peer-substatus {
        margin-top: 2px;
        font-size: 28px;
        color: rgba(211, 221, 236, 0.86);
        text-transform: lowercase;
      }
      .call-group-panel {
        display: none;
      }
      .call-group-list {
        display: grid;
        gap: 6px;
      }
      .call-group-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-radius: 9px;
        padding: 10px 10px;
        background: rgba(255,255,255,0.045);
      }
      .call-group-row-left {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
      }
      .call-group-row-avatar-shell {
        position: relative;
        width: 38px;
        height: 38px;
        isolation: isolate;
        --voice-level: 0;
      }
      .call-group-row-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        z-index: 2;
        flex: 0 0 38px;
      }
      .call-group-row-avatar-shell::before,
      .call-group-row-avatar-shell::after {
        content: "";
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: 1.5px solid rgba(79, 220, 136, 0.62);
        opacity: 0;
        transform: scale(0.84);
        z-index: 1;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
      .call-group-row-avatar-shell.talking::before {
        opacity: calc(0.16 + (var(--voice-level, 0) * 0.86));
        animation: groupSpeakerWave 1.45s ease-out infinite;
      }
      .call-group-row-avatar-shell.talking::after {
        opacity: calc(0.1 + (var(--voice-level, 0) * 0.72));
        animation: groupSpeakerWave 1.45s ease-out infinite 0.36s;
      }
      .call-group-row-meta {
        min-width: 0;
      }
      .call-group-row-name {
        color: #f4f8ff;
        font-size: 17px;
        font-weight: 600;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .call-group-row-state {
        color: #b8c3d4;
        font-size: 14px;
        text-transform: lowercase;
        margin-top: 2px;
      }
      .call-group-row.speaking .call-group-row-state {
        color: #39dc83;
        font-weight: 700;
      }
      .call-group-row-mic {
        font-size: 20px;
      }
      .call-group-row-mic.active {
        color: #43d97f;
      }
      .call-group-row-mic.muted {
        color: rgba(185, 196, 212, 0.82);
      }
      .call-modal[data-call-mode="group"] .call-actions {
        margin-top: 10px;
        padding-top: 6px;
        justify-content: center;
        gap: 8px;
        flex-wrap: nowrap;
      }
      .call-modal[data-call-mode="group"] .call-action {
        width: 66px;
        gap: 0;
      }
      .call-modal[data-call-mode="group"] .call-action-button {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: rgba(64, 97, 146, 0.35);
        transition: background 0.95s ease, box-shadow 0.95s ease, transform 0.16s ease;
      }
      .call-modal[data-call-mode="group"] .call-action-button.end {
        background: #6c3636;
      }
      .call-modal[data-call-mode="group"] .call-action-label {
        display: none;
      }
      .call-modal[data-call-mode="group"].group-speaking .call-action-button:not(.end) {
        background: linear-gradient(180deg, #19c788 0%, #0ea867 100%);
        box-shadow: 0 0 0 1px rgba(97, 245, 175, 0.22) inset, 0 10px 24px rgba(15, 151, 96, 0.3);
      }
      .call-modal[data-call-mode="group"].group-listening .call-action-button:not(.end) {
        background: rgba(64, 97, 146, 0.35);
        box-shadow: none;
      }
      .call-modal[data-call-mode="group"] .call-devices-panel {
        bottom: 92px;
      }
      @keyframes groupSpeakerWave {
        0% {
          transform: scale(calc(0.84 + (var(--voice-level, 0) * 0.08)));
          opacity: 0.76;
        }
        100% {
          transform: scale(calc(1.1 + (var(--voice-level, 0) * 0.36)));
          opacity: 0;
        }
      }
      .tg-call-modal.call-modal,
      .tg-call-modal.call-modal[data-call-mode="group"],
      .tg-call-modal.call-modal[data-call-mode="direct"] {
        width: min(948px, calc(100% - 36px)) !important;
        height: min(680px, calc(100% - 32px)) !important;
        min-height: 520px !important;
        padding: 18px 18px 10px !important;
        border-radius: 8px !important;
        background: #111216 !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .tg-call-modal.call-modal .call-participants-grid,
      .tg-call-modal.call-modal:not([data-call-mode="group"]) .call-participants-grid {
        display: flex !important;
      }
      .tg-call-modal.call-modal .call-main-stream,
      .tg-call-modal.call-modal:not([data-call-mode="group"]) .call-main-stream {
        display: flex !important;
      }
      .tg-call-modal.call-modal .call-actions {
        display: flex !important;
      }
      .tg-call-modal.call-modal .call-peer-avatar-shell,
      .tg-call-modal.call-modal .call-peer-name,
      .tg-call-modal.call-modal .call-peer-status {
        display: grid;
      }
      .tg-call-modal.call-modal .call-peer-name,
      .tg-call-modal.call-modal .call-peer-status {
        display: block;
      }
      .call-devices-panel {
        position: absolute;
        left: 50%;
        bottom: 122px;
        width: min(420px, calc(100% - 44px));
        padding: 14px 14px 12px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.12);
        background:
          linear-gradient(180deg, rgba(18, 26, 42, 0.96) 0%, rgba(13, 19, 33, 0.96) 100%);
        box-shadow: 0 22px 48px rgba(0,0,0,0.32);
        transform: translateX(-50%) translateY(12px) scale(0.97);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
        z-index: 25;
      }
      .call-devices-panel.open {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
        pointer-events: auto;
      }
      .call-devices-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
      }
      .call-devices-title {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
        color: #d7e2f5;
        text-transform: uppercase;
      }
      .call-device-field + .call-device-field {
        margin-top: 10px;
      }
      .call-device-label {
        display: block;
        margin-bottom: 7px;
        font-size: 13px;
        color: #b3c1d8;
      }
      .call-device-select {
        width: 100%;
        min-height: 44px;
        border-radius: 12px;
        border: 1px solid rgba(167, 192, 233, 0.28);
        background:
          linear-gradient(180deg, rgba(35, 49, 74, 0.6) 0%, rgba(20, 30, 48, 0.7) 100%);
        color: #eef3ff;
        padding: 0 36px 0 12px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        color-scheme: dark;
        font-size: 16px;
      }
      .call-device-select:focus {
        outline: none;
        border-color: rgba(113, 184, 255, 0.85);
        box-shadow: 0 0 0 2px rgba(67, 159, 255, 0.28);
      }
      .call-device-select option {
        background: #131f33;
        color: #ecf3ff;
      }
      .call-mini-card {
        position: absolute;
        right: 22px;
        bottom: 22px;
        z-index: 23;
        width: 260px;
        padding: 12px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(18, 22, 30, 0.98);
        box-shadow: 0 18px 36px rgba(0,0,0,0.22);
        opacity: 0;
        transform: translateY(10px) scale(0.96);
        pointer-events: none;
        --call-voice-level: 0;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .call-mini-card.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .call-mini-card.dragging {
        cursor: grabbing;
        transition: none;
        user-select: none;
      }
      .call-mini-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        cursor: grab;
        touch-action: none;
      }
      .call-mini-title {
        font-size: 12px;
        color: #9fb0c9;
      }
      .call-mini-name {
        margin-top: 2px;
        font-size: 22px;
        font-weight: 800;
        color: #f5f7ff;
      }
      .call-mini-subtitle {
        margin-top: 4px;
        font-size: 14px;
        color: #c8d3e6;
      }
      .call-mini-cover {
        margin-top: 12px;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 14px;
        overflow: hidden;
        background:
          radial-gradient(circle at 24% 18%, rgba(115, 103, 255, 0.42) 0%, transparent 34%),
          radial-gradient(circle at 78% 26%, rgba(50, 196, 255, 0.34) 0%, transparent 36%),
          radial-gradient(circle at 50% 85%, rgba(69, 227, 154, 0.28) 0%, transparent 38%),
          linear-gradient(180deg, rgba(19, 23, 31, 0.98) 0%, rgba(14, 17, 24, 0.98) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .call-mini-cover .call-peer-avatar {
        width: 88px;
        height: 88px;
        font-size: 34px;
      }
      .call-mini-cover .call-peer-avatar-shell {
        width: 124px;
        height: 124px;
      }
      .call-mini-actions {
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
      }
      .workspace-main.empty-chat .chat-window {
        height: 100%;
        min-height: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        opacity: 1;
        transform: none;
      }
      .workspace-main.empty-chat .chat-island {
        opacity: 0;
        transform: translateX(-50%) translateY(-14px);
        pointer-events: none;
      }
      .workspace-main.empty-chat .chat-window.audio-top-player-visible {
        display: block;
        align-items: stretch;
        justify-content: flex-start;
        opacity: 1;
        transform: none;
        border-radius: 0;
        background: rgba(10, 14, 20, 0.18);
      }
      .workspace-main.empty-chat .chat-window.audio-top-player-visible .chat-island {
        opacity: 0;
        pointer-events: none;
      }
      .workspace-main.empty-chat .chat-window.audio-top-player-visible .chat-stage {
        align-items: stretch;
        justify-content: flex-start;
      }
      .workspace-main.empty-chat .chat-stage {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 0;
        align-items: center;
        justify-content: center;
        border: 0;
        background: transparent;
        padding: 0;
      }
      .workspace-main.empty-chat .composer,
      .workspace-main.empty-chat #chat-composer {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        height: 0 !important;
        min-height: 0 !important;
        overflow: hidden !important;
        border: 0 !important;
        padding: 0 !important;
      }
      .chat-stage.empty .composer,
      .chat-stage.empty #chat-composer {
        display: none !important;
      }
      .workspace-main.empty-chat .message-list {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .chat-head h2 {
        margin: 0 0 6px;
        font-size: 34px;
      }
      .chat-stage {
        position: relative;
        z-index: 1;
        --chat-stage-inline-pad: 22px;
        border-radius: 0;
        border: 0;
        background: transparent;
        min-height: 0;
        height: 100%;
        padding: 78px 22px 18px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.28s ease, border-color 0.28s ease, opacity 0.28s ease;
        will-change: transform;
      }
      .keyboard-active .composer,
      .keyboard-active #composer-send,
      .keyboard-active .chat-scroll-bottom {
        transition: none !important;
      }
      .chat-scroll-bottom {
        position: absolute;
        right: 28px;
        bottom: 114px;
        z-index: 14;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(45, 49, 58, 0.96);
        color: #eef2fb;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 18px 34px rgba(0,0,0,0.22);
        cursor: pointer;
        opacity: 0;
        transform: translateY(14px) scale(0.9);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.18s ease;
        will-change: transform;
      }
      .chat-scroll-bottom.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .chat-scroll-bottom:hover {
        background: rgba(57, 62, 74, 0.98);
      }
      .chat-scroll-bottom svg {
        width: 24px;
        height: 24px;
        stroke: currentColor;
        fill: none;
        stroke-width: 2.2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .chat-stage::before,
      .chat-stage::after {
        display: none;
      }
      .chat-stage::before {
        left: 0;
        background: linear-gradient(90deg, rgba(52, 84, 142, 0.24) 0%, rgba(52, 84, 142, 0.14) 38%, rgba(52, 84, 142, 0) 100%);
      }
      .chat-stage::after {
        right: 0;
        background: linear-gradient(270deg, rgba(118, 98, 210, 0.24) 0%, rgba(118, 98, 210, 0.14) 38%, rgba(118, 98, 210, 0) 100%);
      }
      .chat-loading-overlay {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 8;
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: transparent;
        border: 0;
        box-shadow: none;
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: opacity 0.1s ease;
      }
      .chat-loading-overlay::before {
        display: none;
      }
      @keyframes m3SpinnerGlow {
        to {
          transform: rotate(360deg);
        }
      }
      .chat-loading-overlay .search-spinner {
        width: 36px;
        height: 36px;
      }
      .chat-stage.empty {
        min-height: 0;
        padding: 0;
        border: 0;
        background: transparent;
      }
      .message-list {
        display: grid;
        gap: 3px;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        align-content: start;
        margin-left: calc(-1 * var(--chat-stage-inline-pad));
        margin-right: calc(-1 * var(--chat-stage-inline-pad));
        padding-left: var(--chat-stage-inline-pad);
        padding-right: calc(var(--chat-stage-inline-pad) + 8px);
        padding-bottom: 12px;
        scrollbar-width: thin;
        scrollbar-color: rgba(128, 143, 170, 0.45) transparent;
        background: transparent;
        opacity: 1;
        transform: none;
        transition: none;
      }
      .message-list.loading-messages {
        opacity: 1;
        transform: none;
      }
      #workspace-view,
      #workspace-view * {
        user-select: none;
        -webkit-user-select: none;
      }
      #workspace-view input,
      #workspace-view textarea,
      #workspace-view [contenteditable="true"],
      #workspace-view [contenteditable="plaintext-only"] {
        user-select: text;
        -webkit-user-select: text;
      }
      #workspace-view .message-body,
      #workspace-view .message-body *,
      #workspace-view .message-reply-text,
      #workspace-view .message-reply-text * {
        user-select: text;
        -webkit-user-select: text;
      }
      .message-list.preparing-bottom {
        visibility: hidden;
      }
      .message-list::-webkit-scrollbar {
        width: 10px;
      }
      .message-list::-webkit-scrollbar-track {
        background: transparent;
      }
      .message-list::-webkit-scrollbar-thumb {
        background: rgba(128, 143, 170, 0.45);
        border-radius: 999px;
        border: 2px solid transparent;
        background-clip: padding-box;
      }
      .message-list::-webkit-scrollbar-thumb:hover {
        background: rgba(157, 171, 196, 0.65);
        border-radius: 999px;
        border: 2px solid transparent;
        background-clip: padding-box;
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
      .message {
        max-width: min(78%, 720px);
        width: fit-content;
        padding: 7px 10px 7px;
        border-radius: 12px 12px 2px 12px;
        background: #8774e1;
        color: #ffffff;
        justify-self: end;
        position: relative;
        box-shadow: 0 1px 2px rgba(11, 24, 41, 0.22);
        transform-origin: right bottom;
        max-height: 1400px;
        transition: opacity 0.22s var(--motion-standard), max-height 0.32s ease, margin 0.32s ease, padding 0.32s ease, filter 0.26s ease;
        scroll-margin-top: 116px;
        scroll-margin-bottom: 132px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        align-content: flex-start;
      }
      .message::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 8px;
        height: 17px;
        background: #8774e1;
        -webkit-mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px;
        mask: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%2017%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%220%22%3E%3Cpath%20d%3D%22M%201%2C17%20H%208%20V%200%20H%207%20C%206.807%2C2.8393%206.1238%2C5.7667%204.9504%2C8.7824%204.04603%2C11.1066%202.5041%2C13.2667%200.3247%2C15.2625%20v%200%20c%20-0.40731%2C0.373%20-0.43513%2C1.0056%20-0.062128%2C1.4129%200.18943%2C0.20685%200.45702%2C0.32465%200.7375%2C0.32465%20z%22/%3E%3C/g%3E%3C/svg%3E") no-repeat center / 8px 17px;
        pointer-events: none;
        transform: translateX(6px) scaleX(-1);
      }
      .message:hover:not(.sending) {
        transform: none;
      }
      .message.message-media {
        width: fit-content;
        max-width: min(360px, calc(46vw + 28px));
        padding: 10px 10px 8px;
        border-radius: 14px;
      }
      .message.incoming {
        justify-self: start;
        max-width: 92% !important;
        min-width: 96px;
        border-radius: 12px 12px 12px 2px;
        background: #ffffff;
        color: #0f172a;
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
        transform-origin: left bottom;
      }
      .message.incoming::after {
        left: 0;
        right: auto;
        width: 8px;
        height: 17px;
        background: #ffffff;
        transform: translateX(-6px);
      }
      .message::after {
        display: none;
      }
      .message.incoming.message-has-tail::after,
      .message:not(.incoming).message-has-tail::after {
        display: block;
      }
      .message.message-media::after {
        content: none;
      }
      .message.incoming.message-seq-single,
      .message.incoming.message-seq-first {
        border-radius: 12px 12px 4px 12px;
      }
      .message.incoming.message-seq-middle {
        border-radius: 4px 12px 4px 12px;
      }
      .message.incoming.message-seq-last {
        border-radius: 4px 12px 12px 4px;
      }
      .message:not(.incoming).message-seq-single,
      .message:not(.incoming).message-seq-first {
        border-radius: 12px 12px 12px 4px;
      }
      .message:not(.incoming).message-seq-middle {
        border-radius: 12px 4px 12px 4px;
      }
      .message:not(.incoming).message-seq-last {
        border-radius: 12px 4px 12px 12px;
      }
      .message.message-seq-continued {
        margin-top: -6px;
      }
      .group-incoming-row {
        display: flex;
        align-items: flex-end;
        justify-self: start;
        width: min(96%, 860px);
        max-width: 96%;
        gap: 8px;
        margin-left: 0;
      }
      .group-incoming-row--continued {
        margin-top: -6px;
      }
      .group-incoming-main {
        min-width: 0;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .group-incoming-main .message.incoming {
        width: fit-content;
        max-width: min(820px, calc(100vw - 220px)) !important;
      }
      .group-incoming-sender {
        font-size: 13px;
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 4px 4px;
        letter-spacing: 0.01em;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
      }
      .group-incoming-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
        align-self: end;
        transform: translateY(0);
        opacity: 1;
        transition: opacity 180ms ease, transform 220ms ease;
      }
      .group-incoming-avatar.visible {
        animation: groupIncomingAvatarIn 220ms cubic-bezier(0.2, 0.85, 0.3, 1) both;
      }
      .group-incoming-avatar.placeholder {
        visibility: hidden;
        opacity: 1;
        transform: none;
        pointer-events: none;
        flex-shrink: 0;
      }
      @keyframes groupIncomingAvatarIn {
        0% {
          opacity: 0;
          transform: translateY(7px) scale(0.94);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .group-incoming-avatar .generated-avatar-photo {
        width: 100%;
        height: 100%;
      }
      .message.message-launch {
        animation: none;
      }
      .message.sending {
        opacity: 1;
        transform: none;
        transition: none;
      }
      .message.sending.shown {
        opacity: 1;
        transform: none;
      }
      .message-body {
        font-size: 14px;
        line-height: 1.35;
        font-weight: 400;
        letter-spacing: 0;
        word-break: break-word;
        overflow-wrap: break-word;
        white-space: pre-wrap;
      }
      .message-call-card {
        min-width: 170px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: 14px;
        background: rgba(16, 20, 27, 0.72);
      }
      .message.incoming .message-call-card {
        background: rgba(35, 39, 48, 0.94);
      }
      .message-call-card.missed,
      .message-call-card.declined {
        background: rgba(32, 22, 24, 0.88);
      }
      .message-call-icon {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.11);
        color: #f5f7ff;
        flex-shrink: 0;
      }
      .message-call-icon svg {
        width: 15px;
        height: 15px;
        stroke: currentColor;
        fill: none;
      }
      .message-call-card.missed .message-call-icon,
      .message-call-card.declined .message-call-icon {
        color: #ff9ca6;
      }
      .message-call-copy {
        min-width: 0;
        display: grid;
        gap: 1px;
      }
      .message-call-title {
        font-size: 13.5px;
        font-weight: 700;
        line-height: 1.15;
        color: #f7f9ff;
      }
      .message-call-subtitle {
        font-size: 11.5px;
        line-height: 1.15;
        color: rgba(255,255,255,0.76);
      }
      .message-group-video-event {
        min-width: 0;
        max-width: min(760px, 92vw);
        margin: 0 auto;
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(88, 40, 110, 0.46);
        border: 1px solid rgba(186, 126, 230, 0.28);
        font-size: 14px;
        line-height: 1.25;
        color: rgba(249, 241, 255, 0.98);
        font-weight: 600;
        text-align: center;
        letter-spacing: 0;
      }
      .message-system-row {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2px 0;
      }
      .message-system-pill {
        max-width: min(760px, calc(100% - 24px));
        padding: 7px 14px;
        border-radius: 999px;
        background: rgba(92, 41, 122, 0.52);
        border: 1px solid rgba(189, 129, 233, 0.28);
        color: rgba(247, 239, 255, 0.98);
        font-size: 14px;
        line-height: 1.25;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        animation: systemPillFadeIn 220ms ease both;
      }
      @keyframes systemPillFadeIn {
        0% {
          opacity: 0;
          transform: translateY(6px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .message-audio-wrap {
        display: grid;
        gap: 8px;
      }
      .message-audio-card {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 10px;
        align-items: center;
        min-width: 250px;
        max-width: min(420px, 62vw);
        padding: 8px 10px 8px 8px;
        border-radius: 14px;
        background: rgba(255,255,255,0.11);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.09);
      }
      .message.incoming .message-audio-card {
        background: rgba(255,255,255,0.06);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.07);
      }
      .message-audio-toggle {
        width: 42px;
        height: 42px;
        border: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.86);
        color: #6f80d9;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: transform 0.16s ease, filter 0.16s ease;
      }
      .message-audio-toggle:hover {
        filter: brightness(1.04);
      }
      .message-audio-toggle:active {
        transform: scale(0.98);
      }
      .message-audio-toggle-icon {
        font-size: 28px;
        line-height: 1;
        transition: opacity 0.16s ease, transform 0.16s ease;
      }
      .message-audio-card.is-playing .message-audio-toggle-icon {
        transform: scale(1.05);
      }
      .message-audio-main {
        min-width: 0;
        display: grid;
        gap: 3px;
      }
      .message-audio-name {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f2f4fd;
      }
      .message-audio-meta-line {
        font-size: 12px;
        line-height: 1.2;
        color: rgba(234,239,249,0.74);
      }
      .message.incoming .message-audio-meta-line {
        color: rgba(214,223,238,0.72);
      }
      .message-audio-progress {
        --audio-progress-pct: 0%;
        width: 100%;
        margin: 0;
        height: 16px;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transform: translateY(-3px);
        pointer-events: none;
        transition: opacity 0.2s ease, max-height 0.2s ease, margin 0.2s ease, transform 0.2s ease;
      }
      .message-audio-card.is-playing .message-audio-progress,
      .message-audio-card.is-seeking .message-audio-progress {
        margin-top: 1px;
        opacity: 1;
        max-height: 16px;
        transform: translateY(0);
        pointer-events: auto;
      }
      .message-audio-progress::-webkit-slider-runnable-track {
        height: 3px;
        border-radius: 999px;
        background:
          linear-gradient(to right, rgba(230,238,255,0.95), rgba(230,238,255,0.95)) 0 50% / var(--audio-progress-pct) 100% no-repeat,
          rgba(213,224,245,0.3);
      }
      .message-audio-progress::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        margin-top: -4px;
        border-radius: 50%;
        border: 0;
        background: #f3f7ff;
        box-shadow: 0 0 0 2px rgba(130, 165, 238, 0.26);
        transition: transform 0.14s ease;
      }
      .message-audio-card.is-seeking .message-audio-progress::-webkit-slider-thumb {
        transform: scale(1.08);
      }
      .message-audio-progress::-moz-range-track {
        height: 3px;
        border-radius: 999px;
        border: 0;
        background: rgba(213,224,245,0.3);
      }
      .message-audio-progress::-moz-range-progress {
        height: 3px;
        border-radius: 999px;
        border: 0;
        background: rgba(230,238,255,0.95);
      }
      .message-audio-progress::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 0;
        background: #f3f7ff;
        box-shadow: 0 0 0 2px rgba(130, 165, 238, 0.26);
        transition: transform 0.14s ease;
      }
      .message-audio-card.is-seeking .message-audio-progress::-moz-range-thumb {
        transform: scale(1.08);
      }
      .message-reply {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 10px;
        padding: 8px 10px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.16);
        border-left: 0;
        cursor: pointer;
        transition: background 0.18s ease, transform 0.18s ease, opacity 0.18s ease;
      }
      .message.incoming .message-reply {
        background: #f1f5f9;
      }
      .message-reply:hover {
        background: rgba(255,255,255,0.12);
      }
      .message-reply-author {
        font-size: 13px;
        font-weight: 800;
        color: #ffcf7d;
        line-height: 1.2;
      }
      .message.incoming .message-reply-author {
        color: #2563eb;
      }
      .message-reply-text {
        font-size: 13px;
        line-height: 1.3;
        color: rgba(255,255,255,0.92);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .message.incoming .message-reply-text {
        color: #475569;
      }
      .message-jump-highlight {
        animation: none;
      }
      .message.message-removing {
        opacity: 0;
        transform: scale(0.965) translateY(8px);
        filter: blur(0.9px);
        max-height: 0 !important;
        margin: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        overflow: hidden;
        pointer-events: none;
      }
      .inline-emoji {
        display: inline-block;
        width: 1.18em;
        height: 1.18em;
        margin: 0 0.04em;
        vertical-align: -0.22em;
        object-fit: contain;
        user-select: none;
        -webkit-user-select: none;
        -webkit-user-drag: none;
      }
      .composer-inline-emoji {
        width: 1.08em;
        height: 1.08em;
        margin: 0;
        vertical-align: -0.16em;
      }
      .composer-emoji-slot {
        display: inline-flex;
        width: auto;
        align-items: center;
        justify-content: flex-start;
        vertical-align: -0.16em;
        margin-right: 0.04em;
      }
      .message-visual {
        display: block;
        margin: -2px -2px 0;
      }
      .message.message-media .message-visual {
        display: grid;
        gap: 10px;
        margin: 0;
      }
      .message.message-media .message-audio-wrap {
        margin: 0;
      }
      .message-album {
        display: grid;
        gap: 3px;
        width: min(420px, 78vw);
        max-width: 100%;
        overflow: hidden;
        border-radius: 12px;
        background: transparent;
        transition: height 0.24s ease, max-height 0.24s ease, transform 0.18s ease;
      }
      .message-album.count-2 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 240px;
        height: 240px;
      }
      .message-album.count-3 {
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 125px 125px;
        height: 253px;
      }
      .message-album.count-3 .message-album-item:first-child {
        grid-row: span 2;
        border-radius: 6px;
      }
      .message-album.count-4 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 135px 135px;
        height: 273px;
      }
      .message-album.count-5 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 160px 110px 110px;
        height: 386px;
      }
      .message-album.count-5 .message-album-item:first-child {
        grid-column: span 2;
        border-radius: 6px;
      }
      .message-album.count-6 {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 120px 120px;
        height: 243px;
      }
      .message-album.count-7,
      .message-album.count-8,
      .message-album.count-9,
      .message-album.count-10,
      .message-album.count-11 {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 110px;
      }
      .message-album-item {
        position: relative;
        display: block;
        min-width: 0;
        min-height: 0;
        height: 100%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.04);
        border-radius: 4px;
      }
      .message-image-link {
        display: block;
        width: fit-content;
        border: 0;
        background: transparent;
        padding: 0;
        cursor: pointer;
        border-radius: 16px;
        overflow: hidden;
        max-width: 100%;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }
      .message-image-link:focus,
      .message-image-link:focus-visible,
      .message-image-link:active {
        outline: none;
        box-shadow: none;
      }
      .message-album-item .message-image-link {
        width: 100%;
        max-width: none;
        height: 100%;
        border-radius: 0;
      }
      .message-image-shell {
        position: relative;
        display: block;
        width: auto;
        height: auto;
        max-width: min(440px, 78vw);
        max-height: 480px;
        min-width: 140px;
        min-height: 140px;
        border-radius: 16px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.04);
      }
      .message-image-shell:not(.loaded) {
        min-height: 180px;
      }
      .message.message-media .message-image-shell {
        width: auto;
        height: auto;
        max-width: min(440px, 78vw);
        max-height: 480px;
      }
      .message.message-media .message-image {
        display: block;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 480px;
        object-fit: contain;
        border-radius: 16px;
      }
      .message-album:not(.count-1) .message-album-item .message-image-shell {
        width: 100% !important;
        height: 100% !important;
        min-width: 0 !important;
        min-height: 0 !important;
        max-width: none !important;
        border-radius: 0;
      }
      .message-album:not(.count-1) .message-album-item .message-image {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
      .message-album.count-1 {
        width: fit-content;
      }
      .message-album.count-1 .message-image-shell {
        border-radius: 16px;
      }
      .message-album.count-1 .message-album-item .message-image {
        object-fit: contain;
      }
      .message-image-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 48%, transparent 100%),
          rgba(255,255,255,0.035);
        transform: translateX(-120%);
        animation: messageImageSkeletonSweep 1.15s ease-in-out infinite;
        z-index: 1;
      }
      .message-image-shell.loaded::before {
        opacity: 0;
        transition: opacity 0.22s ease;
        animation: none;
      }
      .message-image {
        display: block;
        width: auto;
        height: auto;
        max-width: 350px;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.18);
        opacity: 0;
        filter: blur(0px) brightness(1);
        transition: opacity 0.5s cubic-bezier(0.2, 0, 0, 1), filter 0.5s cubic-bezier(0.2, 0, 0, 1);
        position: relative;
        z-index: 2;
      }
      .message-image-shell.loaded .message-image {
        opacity: 1;
      }
      .message-image-shell.loaded {
        animation: none;
        background: rgba(0, 0, 0, 0.18);
      }
      .message-image-shell.loaded .m3-spinner-container {
        opacity: 0 !important;
        pointer-events: none !important;
        transform: translate(-50%, -50%) scale(0.85) !important;
      }
      /* M3 progress indicators and photo upload transitions */
      .m3-spinner-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out;
      }
      .m3-spinner {
        animation: m3-spinner-rotate 1.4s linear infinite;
        width: 36px;
        height: 36px;
      }
      .m3-spinner-track {
        stroke: rgba(255, 255, 255, 0.15);
      }
      .m3-spinner-active {
        stroke: var(--m3-primary, #d0bcff);
        stroke-linecap: round;
        animation: m3-spinner-dash 1.4s ease-in-out infinite;
      }
      .message-image-shell.is-pending .message-image {
        opacity: 0.6;
        filter: blur(3px) brightness(0.75);
      }
      .message-image-shell.loaded.is-pending .message-image {
        opacity: 0.6 !important;
        filter: blur(3px) brightness(0.75) !important;
      }
      @keyframes m3-spinner-rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes m3-spinner-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      @keyframes messageImageSkeleton {
        0% {
          background-position: 160% 0;
        }
        100% {
          background-position: -60% 0;
        }
      }
      @keyframes messageImageSkeletonSweep {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(120%);
        }
      }
      .message-caption {
        margin-top: 10px;
      }
      .message-skeleton {
        max-width: 76%;
        padding: 12px 14px 10px;
        border-radius: 20px 20px 8px 20px;
        background: rgba(255, 255, 255, 0.05);
        justify-self: end;
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 60%;
      }
      .message-skeleton.incoming {
        justify-self: start;
        border-radius: 20px 20px 20px 8px;
        background: rgba(255, 255, 255, 0.03);
      }
      .message-skeleton-line {
        height: 12px;
        border-radius: 6px;
        background: linear-gradient(100deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.1) 44%, rgba(255,255,255,0.055) 88%);
        background-size: 220% 100%;
        animation: messageImageSkeleton 1.05s ease-in-out infinite;
      }
      .message-skeleton-line.short {
        width: 40%;
      }
      .message-skeleton-line.medium {
        width: 70%;
      }
      .message-skeleton-line.long {
        width: 90%;
      }
      .chat-spinner-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 78px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        pointer-events: none;
      }
      .chat-spinner-container.top-spinner {
        position: relative;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
        padding: 15px 0;
        height: auto;
        background: transparent;
      }
      .boot-splash-inner {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .boot-splash-circular {
        width: 44px;
        height: 44px;
        display: block;
        animation: bootCircularRotate 1.568s linear infinite;
      }
      .boot-splash-circular-track {
        display: block !important;
        fill: none;
        stroke: rgba(107, 33, 168, 0.18) !important;
        stroke-width: 3.8;
      }
      .boot-splash-circular-indicator {
        fill: none;
        stroke: #7e22ce !important;
        stroke-linecap: round;
        stroke-width: 3.8;
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
        animation: bootCircularDash 1.333s ease-in-out infinite;
      }
      @keyframes bootCircularRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bootCircularDash {
        0% { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0; }
        50% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
        100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -125px; }
      }
      .message-link {
        color: #9fd0ff;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-thickness: 1px;
        transition: color 0.16s ease, opacity 0.16s ease;
      }
      .message-link:hover {
        color: #c6e3ff;
      }
      .message.incoming .message-link {
        color: #2563eb;
      }
      .message-meta {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        font-size: 11px;
        color: rgba(255,255,255,0.78);
        margin-left: auto;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 6px;
        float: none;
        clear: none;
        line-height: 14px;
        height: 14px;
        max-height: 14px;
        transform: none;
        user-select: none;
        position: relative;
        top: 0;
        flex: 0 0 auto;
      }
      .message-meta-time {
        font-variant-numeric: tabular-nums;
      }
      .message.incoming .message-meta {
        color: #64748b;
      }
      .message:not(.message-media) .message-body {
        display: inline;
        padding-right: 0;
      }
      .message:not(.message-media) .message-meta {
        display: inline-flex;
        align-items: center;
        float: right;
        margin-left: 7px;
        margin-top: 5px;
        margin-bottom: 0;
        position: relative;
        top: 2px;
      }
      .message-day-separator {
        display: flex;
        justify-content: center;
        margin: 10px 0 14px;
      }
      .message-day-separator span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 88px;
        min-height: 28px;
        padding: 4px 11px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
        color: #e8efff;
        background: rgba(40, 49, 66, 0.78);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .message-unread-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 16px 0;
        position: relative;
        height: 28px;
        background: rgba(30, 36, 48, 0.55);
        border-top: 1px solid rgba(114, 137, 218, 0.2);
        border-bottom: 1px solid rgba(114, 137, 218, 0.2);
        transition: opacity 0.3s ease, height 0.3s ease, margin 0.3s ease, padding 0.3s ease;
        overflow: hidden;
      }
      .message-unread-divider span {
        font-size: 12px;
        font-weight: 700;
        color: #7289da;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }
      .message-checks {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        min-width: 16px;
        max-width: 16px;
        height: 14px;
        max-height: 14px;
        overflow: hidden;
        line-height: 1;
        transform: none;
        color: #3390ec;
        position: relative;
        top: 0;
      }
      .message-checks.message-checks-single {
        color: #5eb3ea;
      }
      .message-checks.message-checks-double {
        color: #3390ec;
      }
      .message-checks.message-checks-single svg {
        width: 12px;
        height: 12px;
      }
      .message-checks svg {
        width: 12px;
        height: 12px;
        stroke: currentColor;
        fill: none;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .message-state {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        min-width: 16px;
        max-width: 16px;
        height: 14px;
        max-height: 14px;
        overflow: hidden;
        line-height: 1;
        transform: none;
        position: relative;
        top: 0;
        color: #6fa8cb;
      }
      .message-checks svg path {
        stroke: currentColor;
        fill: none;
      }

      .message-checks.message-checks-single svg path {
        stroke: #5eb3ea;
      }

      .message-checks.message-checks-double svg path {
        stroke: #3390ec;
      }

      .message-state svg {
        width: 12px;
        height: 12px;
        display: block;
        stroke: currentColor;
        fill: none;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .message-status-failed .message-meta {
        color: #ffd7dc;
      }
      .message-status-failed .message-state {
        color: #ff6d7d;
        font-size: 18px;
        font-weight: 800;
        line-height: 1;
        transform: translateY(-1px);
      }
      /*
       * Copied from telegram-react-master:
       * - src/Components/Message/Media/Document.css
       * - src/Components/Message/Media/Audio.css
       * - src/Components/Message/Media/AudioAction.css
       * - src/Components/Player/HeaderPlayer.css
       * - src/Components/Player/Time.css
       */
      .message .message-audio-card.audio.document {
        margin: 2px 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        min-width: 270px;
        max-width: 370px;
      }
      .message .message-audio-card.audio.document .audio-content {
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0 9px;
        padding-bottom: 12px;
        margin-right: -9px;
        overflow: hidden;
        min-width: 200px;
        position: relative;
      }
      .message .message-audio-card.audio.document .audio-slider {
        position: absolute;
        left: 9px;
        right: 9px;
        top: auto;
        bottom: 3px;
        margin: 0;
        height: 2px;
        --audio-progress-pct: 0%;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        border-radius: 3px;
        opacity: 1;
        pointer-events: auto;
      }
      .message .message-audio-card.audio.document .audio-slider::-webkit-slider-runnable-track {
        height: 2px;
        border-radius: 3px;
        background:
          linear-gradient(
            to right,
            currentColor 0%,
            currentColor var(--audio-progress-pct),
            rgba(255, 255, 255, 0.22) var(--audio-progress-pct),
            rgba(255, 255, 255, 0.22) 100%
          );
      }
      .message .message-audio-card.audio.document .audio-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        margin-top: -4px;
        border: 0;
        border-radius: 50%;
        background: currentColor;
        box-shadow: none;
      }
      .message .message-audio-card.audio.document .audio-slider::-moz-range-track {
        height: 2px;
        border-radius: 3px;
        border: 0;
        background: rgba(255, 255, 255, 0.2);
      }
      .message .message-audio-card.audio.document .audio-slider::-moz-range-progress {
        height: 2px;
        border-radius: 3px;
        border: 0;
        background: currentColor;
      }
      .message .message-audio-card.audio.document .audio-slider::-moz-range-thumb {
        width: 10px;
        height: 10px;
        border: 0;
        border-radius: 50%;
        background: currentColor;
      }
      .message .message-audio-card.audio.document .audio-action {
        margin-top: 2px;
        font-size: 14px;
        line-height: 19px;
        color: var(--message-in-subtle-color);
        user-select: none;
        overflow: hidden;
        display: flex;
      }
      .message .message-audio-card.audio.document .audio-action span {
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .message-out .message-audio-card.audio.document .audio-action {
        color: var(--message-out-subtle-color);
      }
      .message .message-audio-card.audio.document .document-title {
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 21px;
        margin-top: 7px;
        text-align: start;
      }
      .message .message-audio-card.audio.document .document-name {
        max-width: 110px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .message .message-audio-card.audio.document .document-title a,
      .message .message-audio-card.audio.document .document-title a:hover,
      .message .message-audio-card.audio.document .document-title a:visited {
        color: var(--text-primary);
        text-decoration: none;
      }
      .message .message-audio-card.audio.document .message-audio-name {
        margin-top: 0;
      }
      .message .message-audio-card.audio.document .message-audio-meta-line {
        margin-top: 2px;
      }
      .message .message-audio-card.audio.document .message-audio-toggle {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .chat-audio-top-player.header-player {
        min-height: 43px;
        display: none;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        background: #22252b;
        padding: 0 12px;
        z-index: 16;
      }
      .chat-audio-top-player.header-player.visible {
        display: flex;
      }
      .chat-audio-top-player.header-player .header-player-button {
        padding: 4px;
      }
      .chat-audio-top-player.header-player .header-player-content {
        flex: 1 1 auto;
        display: flex;
        padding: 4px 12px;
        user-select: none;
        font-size: 16px;
        overflow: visible;
        background: transparent;
      }
      .chat-audio-top-player.header-player .header-player-title {
        flex: 1 1 auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        word-wrap: break-word;
      }
      .chat-audio-top-player.header-player .header-player-time {
        background: transparent;
        cursor: pointer;
        user-select: none;
        padding: 4px 12px;
      }
${composerStyles}

      /* Telegram source transplant (verbatim values from telegram-react-master):
         - Components/Message/Media/Document.css
         - Components/Message/Media/Audio.css
         - Components/Message/Media/AudioAction.css
         - Components/Tile/DocumentTile.css
         - Components/Player/HeaderPlayer.css
         - Components/Player/Time.css
      */
      .message .tg-audio-message {
        margin: 2px 0;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        min-width: 270px;
        max-width: 370px;
      }
      .message .tg-audio-play {
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--media-out-tile-background);
        color: var(--message-out-meta-color);
        cursor: pointer;
      }
      .message.incoming .tg-audio-play {
        background: var(--media-in-tile-background);
        color: var(--message-in-meta-color);
      }
      .message .tg-audio-content {
        flex-grow: 1;
        flex-shrink: 1;
        padding: 0 9px;
        margin-right: -9px;
        overflow: hidden;
        min-width: 200px;
        position: relative;
      }
      .message .tg-audio-title {
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        line-height: 21px;
        margin-top: 7px;
        text-align: start;
        color: var(--text-primary);
        font-weight: 600;
      }
      .message .tg-audio-meta-row {
        margin-top: 2px;
        font-size: 14px;
        line-height: 19px;
        color: var(--message-in-subtle-color);
        user-select: none;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .message-out .tg-audio-meta-row {
        color: var(--message-out-subtle-color);
      }
      .message .tg-audio-time {
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .message .tg-audio-seek {
        position: relative;
        flex: 1 1 auto;
        height: 16px;
        min-width: 80px;
      }
      .message .tg-audio-seek-track,
      .message .tg-audio-seek-fill {
        position: absolute;
        top: 7px;
        left: 0;
        right: 0;
        height: 2px;
        border-radius: 3px;
      }
      .message .tg-audio-seek-track {
        opacity: 0.2;
        background: currentColor;
      }
      .message .tg-audio-seek-fill {
        right: auto;
        width: var(--audio-progress-pct, 0%);
        background: currentColor;
      }
      .message .tg-audio-seek-thumb {
        position: absolute;
        top: 3px;
        left: var(--audio-progress-pct, 0%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translateX(-50%);
        background: currentColor;
      }
      .message .tg-audio-seek-input {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 16px;
        margin: 0;
        opacity: 0;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
      }
      .message .tg-audio-seek-input::-webkit-slider-runnable-track {
        height: 2px;
        background: transparent;
      }
      .message .tg-audio-seek-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0;
        height: 0;
        border: 0;
        background: transparent;
        box-shadow: none;
      }
      .message .tg-audio-seek-input::-moz-range-track,
      .message .tg-audio-seek-input::-moz-range-progress {
        height: 2px;
        background: transparent;
        border: 0;
      }
      .message .tg-audio-seek-input::-moz-range-thumb {
        width: 0;
        height: 0;
        border: 0;
        background: transparent;
      }

      .chat-audio-top-player.header-player {
        min-height: 43px;
        display: none;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        background: #22252b;
        padding: 0 12px;
        z-index: 16;
      }
      .chat-audio-top-player.header-player.visible {
        display: flex;
      }
      .chat-audio-top-player.header-player .header-player-button {
        padding: 4px;
      }
      .chat-audio-top-player.header-player .header-player-content {
        flex: 1 1 auto;
        display: flex;
        padding: 4px 12px;
        user-select: none;
        font-size: 16px;
        overflow: visible;
        background: transparent;
      }
      .chat-audio-top-player.header-player .header-player-title {
        flex: 1 1 auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        word-wrap: break-word;
      }
      .chat-audio-top-player.header-player .header-player-time {
        background: transparent;
        cursor: pointer;
        user-select: none;
        padding: 4px 12px;
      }
      .chat-stage.drag-active {
        outline: 2px dashed rgba(122, 182, 255, 0.6);
        outline-offset: -14px;
        border-radius: 28px;
        background: rgba(23, 30, 42, 0.72);
      }
      .media-modal {
        position: fixed !important;
        inset: 0 !important;
        z-index: 100080 !important;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.24s ease;
      }
      body.profile-viewer-open .sidebar-profile-panel {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transform: translateX(-110%) !important;
      }
      .media-modal.open {
        opacity: 1;
        pointer-events: auto;
      }
      .message-context-menu {
        position: fixed;
        z-index: 80;
        min-width: 220px;
        padding: 10px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(29, 31, 37, 0.98);
        box-shadow: 0 26px 48px rgba(0,0,0,0.3);
        backdrop-filter: blur(16px);
        opacity: 0;
        transform: translateY(8px) scale(0.98);
        pointer-events: none;
        transition: opacity 0.16s ease, transform 0.16s ease;
      }
      .message-context-menu.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .dialog-context-menu {
        position: fixed;
        z-index: 82;
        min-width: 244px;
        padding: 10px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(29, 31, 37, 0.98);
        box-shadow: 0 26px 48px rgba(0,0,0,0.3);
        backdrop-filter: blur(16px);
        opacity: 0;
        transform: translateY(8px) scale(0.98);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .dialog-context-menu.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .dialog-context-menu-body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .dialog-context-menu-item {
        width: 100%;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #f1f4fb;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 12px;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.12s ease;
      }
      .dialog-context-menu-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .dialog-context-menu-item .lucide {
        font-size: 21px;
        line-height: 1;
        font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
        flex-shrink: 0;
      }
      .message-context-menu-body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .message-context-menu-item {
        width: 100%;
        border: 0;
        border-radius: 12px;
        background: transparent;
        color: #f1f4fb;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 12px;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.12s ease;
      }
      .message-context-menu-item:hover {
        background: rgba(255,255,255,0.06);
      }
      .message-context-menu-item.danger {
        color: #ff7c86;
      }
      .message-context-menu-item svg {
        width: 19px;
        height: 19px;
        stroke: currentColor;
        fill: none;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex-shrink: 0;
      }
      .message-context-menu-item .lucide {
        font-size: 20px;
        line-height: 1;
        font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
        flex-shrink: 0;
      }
      .media-modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(7, 9, 13, 0.88);
        backdrop-filter: blur(10px);
      }
      .delete-message-modal-shell {
        position: absolute;
        left: 50%;
        top: 50%;
        width: min(460px, calc(100vw - 32px));
        border-radius: 28px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(27, 29, 36, 0.98);
        box-shadow: 0 28px 64px rgba(0,0,0,0.32);
        padding: 26px 26px 22px;
        font-family: "Open Sans", "Segoe UI", sans-serif;
        transform: translate(-50%, -50%) translateY(10px) scale(0.98);
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      .media-modal.open .delete-message-modal-shell {
        transform: translate(-50%, -50%) translateY(0) scale(1);
      }
      .delete-message-title {
        margin: 0 0 14px;
        font-size: 30px;
        font-weight: 800;
      }
      .delete-message-copy {
        margin: 0 0 18px;
        color: #d4dae6;
        font-size: 17px;
        line-height: 1.5;
      }
      .delete-message-checkbox {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 22px;
        color: #f2f4fb;
        font-size: 16px;
      }
      .delete-message-checkbox[hidden] {
        display: none !important;
      }
      .delete-message-checkbox input {
        width: 18px;
        height: 18px;
        accent-color: #8b7df3;
      }
      .delete-message-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
      }
      .delete-message-button {
        border: 0;
        background: transparent;
        color: #a788ff;
        font-size: 17px;
        font-weight: 800;
        text-transform: uppercase;
        cursor: pointer;
        padding: 10px 16px;
        border-radius: 10px;
        transition: background 0.15s ease;
      }
      .delete-message-button:hover,
      .delete-message-button:focus,
      .delete-message-button:active {
        background: rgba(167, 136, 255, 0.12);
        border-radius: 10px;
        outline: none;
      }
      .delete-message-button.danger {
        color: #ff4f58;
      }
      .delete-message-button.danger:hover,
      .delete-message-button.danger:focus,
      .delete-message-button.danger:active {
        background: rgba(255, 79, 88, 0.12);
        border-radius: 10px;
        outline: none;
      }
      .attachment-modal-shell {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(440px, calc(100vw - 24px));
        max-height: min(88vh, 720px);
        display: flex;
        flex-direction: column;
        padding: 18px 20px 14px;
        border-radius: 16px;
        overflow: hidden;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.06);
        color: #0f172a;
      }
      .attachment-modal-shell.is-multi {
        max-height: min(88vh, 760px);
      }
      .attachment-modal-header {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 12px;
        margin: 0;
      }
      .attachment-modal-title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: #0f172a;
        padding: 0;
        line-height: 1.25;
      }
      .attachment-modal-header-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .attachment-modal-icon-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 0;
        background: transparent;
        color: #707579;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
      }
      .attachment-modal-icon-btn:hover {
        background: rgba(0, 0, 0, 0.06);
        color: #0f172a;
      }
      .attachment-modal-stage {
        position: relative;
        z-index: 1;
        flex: 0 0 auto;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
      .attachment-modal-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        gap: 8px;
        min-height: 0;
        max-height: calc(88vh - 130px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-gutter: stable;
        padding: 0;
      }
      .attachment-modal-content::-webkit-scrollbar {
        width: 6px;
      }
      .attachment-modal-content::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 999px;
      }
      .attachment-modal-stage {
        display: none !important;
        position: relative;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
      }
      .attachment-modal-shell.is-image-mode.is-single .attachment-modal-stage {
        display: flex !important;
      }
      .attachment-modal-shell.is-multi .attachment-modal-stage,
      .attachment-modal-shell.is-file-mode .attachment-modal-stage {
        display: none !important;
      }
      .attachment-modal-main {
        position: relative;
        width: 100%;
        max-width: none;
        max-height: min(40vh, 320px);
        min-width: 0;
        min-height: min(200px, 30vh);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        background: rgba(0, 0, 0, 0.04);
      }
      .attachment-modal-main img {
        display: block;
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: min(40vh, 320px);
        object-fit: contain;
        background: rgba(0, 0, 0, 0.02);
      }
      .attachment-modal-main img:not([src]),
      .attachment-modal-main img[src=""] {
        display: none !important;
      }
      .attachment-modal-nav {
        display: none !important;
      }
      .attachment-modal-strip {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0;
        padding: 0;
        background: transparent;
        border-radius: 0;
        overflow: visible;
      }
      .attachment-modal-strip[hidden] { display: none; }
      .attachment-modal-shell.is-file-mode .attachment-modal-strip {
        display: flex;
        flex-direction: column;
        gap: 4px;
        background: transparent;
        border-radius: 0;
        overflow: visible;
      }
      .attachment-modal-file-item {
        width: 100%;
        border: 0;
        border-radius: 12px;
        padding: 8px 10px;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 12px;
        color: #0f172a;
        cursor: pointer;
        text-align: left;
        transition: background 0.15s ease;
      }
      .attachment-modal-file-item:hover {
        background: rgba(0, 0, 0, 0.04);
      }
      .attachment-modal-file-item.active {
        background: rgba(51, 144, 236, 0.08);
      }
      .attachment-modal-file-icon {
        width: 44px;
        height: 44px;
        min-width: 44px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #3390ec;
        color: #ffffff;
        font-size: 16px;
        flex-shrink: 0;
      }
      .attachment-modal-file-copy {
        min-width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .attachment-modal-file-name {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.25;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .attachment-modal-file-meta {
        font-size: 13px;
        color: #707579;
        line-height: 1.2;
      }
      .attachment-modal-file-actions {
        display: flex;
        align-items: center;
        gap: 2px;
        flex-shrink: 0;
      }
      .attachment-modal-file-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        background: transparent;
        color: #707579;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
      }
      .attachment-modal-file-btn:hover {
        background: rgba(0, 0, 0, 0.06);
        color: #0f172a;
      }
      .attachment-modal-thumb {
        display: block;
        width: 60px;
        height: 60px;
        aspect-ratio: 1/1;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid transparent;
        background: rgba(0,0,0,0.04);
        cursor: pointer;
        transition: border-color 0.18s ease;
      }
      .attachment-modal-thumb.active {
        border-color: #3390ec;
      }
      .attachment-modal-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .attachment-modal-shell {
        background: #212121 !important;
        color: #ffffff !important;
        border-radius: 20px !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        overflow: hidden;
      }
      .attachment-modal-header {
        border-bottom: 0 !important;
        padding: 14px 18px 8px !important;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .attachment-modal-title {
        font-size: 17px !important;
        font-weight: 600 !important;
        color: #ffffff !important;
        margin: 0 !important;
        flex: 1;
      }
      .attachment-modal-icon-btn.close-btn {
        color: rgba(255, 255, 255, 0.7) !important;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .attachment-modal-icon-btn.close-btn:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        color: #ffffff !important;
      }
      .attachment-modal-collage {
        display: grid;
        gap: 3px;
        width: 100%;
        max-height: min(480px, 60vh);
        overflow-y: auto;
        border-radius: 12px;
        padding: 0;
        box-sizing: border-box;
        margin-bottom: 8px;
      }
      .attachment-modal-collage::-webkit-scrollbar {
        width: 5px;
      }
      .attachment-modal-collage::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 999px;
      }
      .attachment-modal-collage.count-1 {
        grid-template-columns: 1fr;
        max-height: 380px;
      }
      .attachment-modal-collage.count-1 .attachment-modal-collage-item {
        max-height: 380px;
        min-height: 220px;
      }
      .attachment-modal-collage.count-2 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 240px;
      }
      .attachment-modal-collage.count-3 {
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 125px 125px;
      }
      .attachment-modal-collage.count-3 .attachment-modal-collage-item:first-child {
        grid-row: span 2;
      }
      .attachment-modal-collage.count-4 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 135px 135px;
      }
      .attachment-modal-collage.count-5 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 170px 115px 115px;
      }
      .attachment-modal-collage.count-5 .attachment-modal-collage-item:first-child {
        grid-column: span 2;
      }
      .attachment-modal-collage.count-6 {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 120px 120px;
      }
      .attachment-modal-collage.count-7,
      .attachment-modal-collage.count-8,
      .attachment-modal-collage.count-9,
      .attachment-modal-collage.count-10,
      .attachment-modal-collage.count-many {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 110px;
      }
      .attachment-modal-collage-item {
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        cursor: default;
        height: 100%;
        min-height: 0;
        transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .attachment-modal-collage-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
        pointer-events: none;
        user-select: none;
      }
      .attachment-modal-collage-item .photo-tile-delete {
        position: absolute;
        bottom: 6px;
        right: 6px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.65);
        color: #ffffff;
        border: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: scale(0.85);
        transition: opacity 0.18s ease, transform 0.18s ease, background 0.18s ease;
        z-index: 5;
      }
      .attachment-modal-collage-item:hover .photo-tile-delete,
      .attachment-modal-collage-item:focus-within .photo-tile-delete {
        opacity: 1;
        transform: scale(1);
      }
      .attachment-modal-collage-item .photo-tile-delete:hover {
        background: rgba(239, 68, 68, 0.9);
      }
      .attachment-modal-collage-item.is-removing {
        opacity: 0;
        transform: scale(0.8);
      }
      .attachment-modal-composer {
        position: relative;
        margin-top: 6px;
        padding: 0;
        background: transparent;
        border: 0;
        flex-shrink: 0;
        width: 100%;
      }
      .attachment-modal-caption-pill {
        position: relative;
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 26px;
        padding: 4px 6px 4px 10px;
        box-sizing: border-box;
      }
      .attachment-modal-caption {
        flex: 1;
        min-width: 0;
        background: transparent !important;
        border: 0 !important;
        outline: none !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        caret-color: #8774e1 !important;
        font-family: inherit;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.4;
        padding: 4px 4px;
        resize: none;
        max-height: 100px;
        min-height: 24px;
        overflow-y: auto;
        box-sizing: border-box;
      }
      .attachment-modal-caption::placeholder {
        color: rgba(255, 255, 255, 0.45) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.45) !important;
      }
      .attachment-modal-emoji-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: color 0.15s ease, background 0.15s ease;
        flex-shrink: 0;
      }
      .attachment-modal-emoji-btn:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
      }
      .attachment-modal-send-fab {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 0;
        background: #8774e1;
        color: #ffffff;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: background 0.18s ease, transform 0.15s ease;
      }
      .attachment-modal-send-fab:hover {
        background: #7562d4;
        transform: scale(1.06);
      }
      .attachment-modal-send-fab:active {
        transform: scale(0.94);
      }
      .attachment-modal-emoji-picker {
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(100% + 10px);
        width: 100%;
        max-width: 380px;
        max-height: 340px;
        background: #ffffff !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        border-radius: 20px !important;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25) !important;
        z-index: 100000 !important;
        color: #0f172a !important;
        overflow: hidden;
      }
      .attachment-modal-emoji-picker .emoji-picker-search-wrap {
        padding: 10px 12px 6px;
      }
      .attachment-modal-emoji-picker .emoji-picker-search {
        background: #f1f5f9 !important;
        color: #0f172a !important;
      }
      .attachment-modal-emoji-picker .emoji-picker-title {
        color: #64748b !important;
      }
      .attachment-modal-emoji-picker .emoji-picker-tab {
        color: #64748b !important;
      }
      .attachment-modal-emoji-picker .emoji-picker-tab.active {
        color: #3390ec !important;
        background: rgba(51, 144, 236, 0.1) !important;
      }
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        padding: 0;
        flex-shrink: 0;
      }
      .attachment-modal-footer-right {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .attachment-modal-text-btn {
        border: 0;
        background: transparent;
        color: #3390ec;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.15s ease, opacity 0.15s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .attachment-modal-text-btn:hover {
        background: rgba(51, 144, 236, 0.08);
      }
      .attachment-modal-text-btn:active {
        background: rgba(51, 144, 236, 0.16);
      }
      .attachment-modal-text-btn:disabled {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      @media (max-width: 860px) {
        .attachment-modal-send {
          min-width: 70px;
          height: 44px;
          padding: 0 16px;
          font-size: 24px;
        }
      }
      .viewer-modal-shell {
        position: absolute;
        inset: 0;
        padding: 44px 24px 22px;
      }
      .viewer-modal-header {
        position: relative;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        pointer-events: none;
      }
      #viewer-modal.open .viewer-modal-header {
        pointer-events: auto;
      }
      .viewer-header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        margin-left: auto;
      }
      .viewer-modal-header-btn {
        width: 44px;
        height: 44px;
        border: 0;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.08);
        color: #f5f7ff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.12s ease;
        pointer-events: none;
      }
      #viewer-modal.open .viewer-modal-header-btn {
        pointer-events: auto;
      }
      .viewer-modal-header-btn:hover,
      .media-modal-close:hover {
        background: rgba(255, 255, 255, 0.14);
      }
      .viewer-modal-header-btn:active,
      .media-modal-close:active {
        transform: scale(0.96);
      }
      .viewer-modal-header-btn .lucide {
        width: 22px;
        height: 22px;
      }
      .media-modal-close {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        border: 0;
        background: rgba(255, 255, 255, 0.08);
        color: #f5f7ff;
        font-size: 28px;
        line-height: 1;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        pointer-events: none;
        position: relative;
        z-index: 21;
        transition: background 0.16s ease, transform 0.12s ease;
      }
      #viewer-modal.open .media-modal-close {
        pointer-events: auto;
      }
      .media-modal-close:focus,
      .media-modal-close:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.35);
        outline-offset: 2px;
      }
      @media (max-width: 860px) {
        .message-audio-card {
          max-width: min(88vw, 420px);
        }
        .message-audio-name {
          font-size: 14px;
        }
        .message-audio-meta-line {
          font-size: 12px;
        }
        .attachment-modal-shell {
          width: calc(100vw - 10px);
          max-height: min(92vh, 860px);
          padding: 0;
        }
        .attachment-modal-title {
          font-size: 36px;
        }
        .attachment-modal-main {
          min-width: 0;
          width: 100%;
          min-height: min(200px, 30vh);
          max-height: min(38vh, 330px);
        }
        .attachment-modal-file-name {
          font-size: 15px;
        }
        .attachment-modal-file-meta {
          font-size: 12px;
        }
      }
      .viewer-author {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .viewer-author-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        flex-shrink: 0;
        background: linear-gradient(180deg, var(--avatar-start, #6cb5ff) 0%, var(--avatar-end, #4a8fe9) 100%);
      }
      .viewer-author-copy {
        min-width: 0;
      }
      .viewer-author-name {
        display: block;
        font-size: 16px;
        font-weight: 700;
        color: #f5f7ff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .viewer-author-meta {
        display: block;
        margin-top: 3px;
        font-size: 14px;
        color: #98a6bc;
      }
      .viewer-modal-stage {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 8;
      }
      #viewer-modal.open .viewer-modal-stage {
        pointer-events: auto;
      }
      .viewer-zoom-chip {
        position: absolute;
        left: 50%;
        bottom: 24px;
        z-index: 12;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 16px;
        border-radius: 999px;
        background: rgba(34, 24, 20, 0.84);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 16px 32px rgba(0,0,0,0.26);
        transform: translateX(-50%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .media-modal.open .viewer-zoom-chip {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }
      .viewer-zoom-button {
        width: 34px;
        height: 34px;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: #f6f0eb;
        font-size: 24px;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.16s ease;
      }
      .viewer-zoom-button:hover {
        background: rgba(255,255,255,0.08);
      }
      .viewer-zoom-button:active {
        transform: scale(0.96);
      }
      .viewer-zoom-value {
        min-width: 68px;
        text-align: center;
        font-size: 16px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        color: #ffffff;
        letter-spacing: 0.01em;
      }
      #viewer-modal,
      .viewer-modal-shell,
      .viewer-modal-stage,
      .viewer-modal-image {
        touch-action: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-touch-callout: none !important;
      }
      .viewer-modal-image {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center center;
        border-radius: 24px;
        box-shadow: 0 30px 80px rgba(0,0,0,0.38);
        cursor: grab;
        max-width: none;
        max-height: none;
        pointer-events: none;
        z-index: 12;
        transition: left 0.28s ease, top 0.28s ease, width 0.28s ease, height 0.28s ease, border-radius 0.28s ease, transform 0.08s ease-out;
        will-change: transform;
      }
      #viewer-modal.open .viewer-modal-image {
        pointer-events: auto;
      }
      .viewer-modal-image.dragging {
        transition: none !important;
        cursor: grabbing !important;
      }
      .viewer-modal-image.zoomed {
        cursor: grab;
      }
      .empty-chat-copy {
        margin-top: 8px;
        color: #9da5b4;
        font-size: 18px;
      }
      .empty-chat-state {
        text-align: center;
        max-width: 520px;
        margin: 0 auto;
      }
      .empty-chat-state p {
        margin: 0;
        color: #aeb6c5;
        font-size: 24px;
        line-height: 1.6;
      }
      .empty-chat-state p + p {
        margin-top: 10px;
        font-size: 20px;
        color: #8f97a5;
      }
      .saved-empty-state {
        max-width: 540px;
        text-align: center;
      }
      .saved-empty-state h3 {
        margin: 0 0 16px;
        font-size: 30px;
        color: #eef2fb;
      }
      .saved-empty-state p {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        color: #9da5b4;
      }
      .saved-empty-state p + p {
        margin-top: 8px;
      }
      .direct-empty-state,
      .saved-empty-state {
        height: 100%;
        width: 100%;
        justify-self: stretch;
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 22px 18px;
        animation: directEmptyFade 0.26s ease both;
      }
      .direct-empty-card {
        max-width: 440px;
        padding: 22px 26px;
        border-radius: 22px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background: #ffffff;
        text-align: center;
        box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
        color: #0f172a;
      }
      .direct-empty-card h3 {
        margin: 0 0 10px;
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
      }
      .direct-empty-card p {
        margin: 4px 0;
        font-size: 14px;
        line-height: 1.55;
        color: #475569;
      }
      @keyframes directEmptyFade {
        0% {
          opacity: 0;
          transform: translateY(12px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .toolbar-button {
        border: 0;
        border-radius: 999px;
        background: rgba(255,255,255,0.06);
        color: #eef2fb;
        padding: 12px 16px;
        cursor: pointer;
        transition: background 0.16s ease, opacity 0.16s ease, transform 0.16s ease;
      }
      .toolbar-button:hover {
        background: rgba(255,255,255,0.1);
      }
      .toolbar-button:active {
        transform: scale(0.97);
      }
      .toolbar-button.danger {
        background: rgba(255, 112, 124, 0.14);
        color: #ffd8dc;
      }
      .toolbar-button.danger:hover {
        background: rgba(255, 112, 124, 0.22);
      }
      .toast-stack {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: min(340px, calc(100vw - 32px));
        pointer-events: none;
      }
      .toast {
        pointer-events: auto;
        padding: 14px 20px;
        border-radius: 14px;
        border: 1px solid rgba(226, 232, 240, 0.95);
        border-left: 4px solid #3b82f6;
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #0f172a;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.04);
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: -0.01em;
        opacity: 0;
        transform: translateY(14px) scale(0.95);
        transition: opacity 0.26s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1);
        touch-action: pan-x;
        cursor: grab;
        user-select: none;
      }
      .toast.swiping {
        transition: none;
        cursor: grabbing;
      }
      .toast.dismissing {
        pointer-events: none;
      }
      .toast.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      .toast.success {
        border-left-color: #10b981;
        background: rgba(255, 255, 255, 0.96);
      }
      .toast.error {
        border-left-color: #ef4444;
        background: rgba(255, 255, 255, 0.96);
      }
      .toast.info {
        border-left-color: #3b82f6;
        background: rgba(255, 255, 255, 0.96);
      }
      @media (max-width: 1120px) {
        .auth-single-tile {
          grid-template-columns: 1fr;
        }
        .brand-panel,
        .auth-panel {
          min-height: auto;
        }
      }
      @media (max-width: 900px) {
        html,
        body {
          overflow-y: auto;
          height: auto;
          min-height: 100dvh;
        }
        .page:not(.workspace-mode) {
          height: auto;
          min-height: 100dvh;
          align-items: flex-start;
          overflow-y: auto;
          padding: 18px 14px 34px;
        }
        .page:not(.workspace-mode) .view {
          max-height: none;
        }
        .page.workspace-mode {
          padding: 0;
        }
        .sidebar-resize-handle {
          display: none;
        }
        .workspace-shell {
          position: relative;
          display: block;
          height: 100dvh;
          min-height: 100dvh;
          gap: 0;
        }
        .workspace-sidebar,
        .workspace-main {
          position: absolute;
          inset: 0;
          height: 100dvh;
          min-height: 100dvh;
          border-radius: 0;
          transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
        }
        .workspace-sidebar {
          z-index: 3;
          padding: 18px 14px 16px;
          transform: translateX(0);
        }
        .workspace-main,
        .workspace-main.empty-chat {
          z-index: 4;
          padding: 0;
          opacity: 0;
          pointer-events: none;
          transform: translateX(100%);
        }
        .page.mobile-chat-open .workspace-sidebar {
          transform: translateX(-100%);
          pointer-events: none;
        }
        .page.mobile-chat-open .workspace-main:not(.empty-chat) {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        }
        .empty-chat-state {
          display: none;
        }
        .chat-window,
        .workspace-main.empty-chat .chat-window {
          min-height: 100dvh;
          border-radius: 0;
          --chat-header-height: 64px;
        }
        .workspace-main.empty-chat {
          justify-content: stretch;
        }
        .page.mobile-chat-open .chat-window {
          box-shadow: none;
        }
        .chat-stage {
          padding: 74px 10px 10px;
        }
        .page.ui-telegram-topbar .chat-stage {
          padding-top: calc(var(--chat-header-height) + 10px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
        }
        .chat-island,
        .page.ui-telegram-topbar .chat-island {
          top: 10px;
          left: 10px;
          right: 10px;
          width: calc(100% - 20px);
          border-radius: 24px !important;
          min-height: 56px;
          padding: 8px 14px;
        }
        .chat-window.profile-panel-open {
          padding-right: 0;
        }
        .chat-window.profile-panel-open .chat-stage,
        .chat-window.profile-panel-open .composer {
          margin-right: 0;
        }
        .chat-profile-panel {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          max-width: 100%;
          border-radius: 0;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
        .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island {
          left: 10px;
          right: 10px;
          width: calc(100% - 20px);
        }
        .sidebar-profile-panel {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          border-radius: 0;
          border: 0;
        }
        .page.ui-telegram-topbar .chat-window.profile-panel-open .chat-island-actions {
          margin-right: 0;
        }
        .chat-search-panel {
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
        }
        .message {
          max-width: 84%;
          box-shadow: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .message.message-media {
          max-width: min(320px, 82vw);
        }
        .message-audio-card {
          min-width: 0;
          max-width: min(320px, 82vw);
        }
        .workspace-sidebar .dialog-list {
          content-visibility: auto;
          contain-intrinsic-size: 900px;
        }
        .static-compose-btn {
          right: max(14px, env(safe-area-inset-right));
          bottom: calc(14px + env(safe-area-inset-bottom));
          width: 54px;
          height: 54px;
        }
        .sidebar-compose-menu {
          top: 58px !important;
          bottom: auto !important;
          right: max(12px, env(safe-area-inset-right)) !important;
          width: 220px !important;
          height: auto !important;
        }
        .page.mobile-chat-open .static-compose-btn,
        .page.mobile-chat-open .sidebar-compose-menu {
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px) scale(0.94);
        }
      }
      @media (max-width: 680px) {
        .page {
          padding: 18px;
        }
        .page.workspace-mode {
          padding: 0;
        }
        .brand-panel,
        .auth-panel,
        .workspace-sidebar,
        .workspace-main {
          padding: 20px;
        }
        .auth-card {
          padding: 24px 18px;
        }
        .brand-title-juicy {
          font-size: 42px;
        }
        .workspace-sidebar {
          padding: 18px 12px 14px;
        }
        .workspace-brand img {
          width: 58px;
          height: 58px;
          border-radius: 16px;
        }
        .workspace-brand h1 {
          font-size: 30px;
        }
        .chat-island {
          top: 12px;
          width: min(calc(100vw - 34px), 280px);
        }
        .chat-window {
          --chat-header-height: 68px;
        }
        .page.ui-telegram-topbar .chat-island {
          top: 10px;
          left: 10px;
          right: 10px;
          width: calc(100% - 20px);
          border-radius: 24px !important;
          min-height: 56px;
          padding: 8px 14px;
        }
        .page.ui-telegram-topbar .chat-header-avatar {
          width: 38px;
          height: 38px;
        }
        .chat-search-panel {
          top: 68px;
          width: min(calc(100vw - 24px), 100%);
        }
        .page.ui-telegram-topbar .chat-search-panel {
          top: calc(var(--chat-header-height) + 6px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
        }
        .chat-stage {
          padding: 78px 10px 14px;
        }
        .page.ui-telegram-topbar .chat-stage {
          padding-top: calc(var(--chat-header-height) + 14px + var(--chat-top-offset) + var(--chat-group-call-top-offset) + var(--chat-group-call-join-offset));
        }
        .composer {
          margin-top: 10px;
        }
      }
      .sidebar-ai-panel {
        position: absolute;
        inset: 0;
        z-index: 28;
        background: #0b0f19;
        transform: translateX(-100%);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.38s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
        will-change: transform, opacity;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .sidebar-ai-panel.open {
        transform: translateX(0) !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      .sidebar-ai-inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
      }
      #sidebar-ai-iframe {
        flex: 1;
        width: 100%;
        height: 100%;
        border: 0;
        background: #0b0f19;
        display: block;
      }
      .sidebar-ai-close {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255,255,255,0.12);
        color: #fff;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      .sidebar-ai-close:hover {
        background: rgba(255,255,255,0.15);
      }
      .sidebar-ai-header {
        position: relative;
        z-index: 15;
        min-height: 66px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 16px 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .sidebar-ai-title-wrap {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .sidebar-ai-fab-container,
      .sidebar-ai-button,
      .sidebar-ai-panel {
        display: none !important;
      }
      .sidebar-ai-header-stars {
        font-size: 26px;
        background: linear-gradient(135deg, #a5b4fc 0%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: spin-glow 6s linear infinite;
      }
      @keyframes spin-glow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .sidebar-ai-header-copy {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }
      .sidebar-ai-title {
        font-size: 17px;
        font-weight: 800;
        color: #f3f6fd;
        letter-spacing: -0.01em;
      }

      .sidebar-ai-close {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 0;
        background: rgba(255, 255, 255, 0.05);
        color: #d7deec;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, transform 0.16s ease;
      }
      .sidebar-ai-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
      }
      .sidebar-ai-close:active {
        transform: scale(0.92);
      }
      .sidebar-ai-messages {
        position: relative;
        z-index: 1;
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .sidebar-ai-messages::-webkit-scrollbar {
        width: 6px;
      }
      .sidebar-ai-messages::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 999px;
      }
      .sidebar-ai-welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 40px 16px;
        margin: auto 0;
        max-width: 280px;
        align-self: center;
      }
      .sidebar-ai-welcome-stars {
        width: 64px;
        height: 64px;
        border-radius: 20px;
        background: rgba(129, 140, 248, 0.1);
        border: 1px solid rgba(129, 140, 248, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
        box-shadow: 0 8px 24px rgba(129, 140, 248, 0.15);
      }
      .sidebar-ai-welcome-stars .lucide {
        font-size: 32px;
        background: linear-gradient(135deg, #a5b4fc 0%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .sidebar-ai-welcome h3 {
        margin: 0 0 8px;
        font-size: 19px;
        font-weight: 800;
        color: #edf2fb;
      }
      .sidebar-ai-welcome p {
        margin: 0;
        font-size: 13.5px;
        color: #9da5b4;
        line-height: 1.5;
      }
      .sidebar-ai-bubble {
        max-width: 85%;
        padding: 12px 14px;
        border-radius: 18px;
        font-size: 14.5px;
        line-height: 1.45;
        word-break: break-word;
        position: relative;
        animation: bubble-in 0.22s cubic-bezier(0.2, 0.85, 0.3, 1) both;
        transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
      }
      @keyframes bubble-in {
        from { opacity: 0; transform: translateY(8px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes gemini-glow-border {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes gemini-bubble-pulse {
        0% { transform: translateY(0) scale(1); }
        100% { transform: translateY(0) scale(1.008); }
      }
      .sidebar-ai-bubble.user {
        background: #2563eb;
        color: #ffffff;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
      }
      .sidebar-ai-bubble.assistant {
        background: rgba(255, 255, 255, 0.045);
        color: #edf2fb;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      }
      .sidebar-ai-bubble.assistant::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, rgba(129, 140, 248, 0.25) 0%, rgba(236, 72, 153, 0.15) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .sidebar-ai-bubble.assistant.is-generating {
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.15), 0 0 12px rgba(236, 72, 153, 0.1);
        animation: gemini-bubble-pulse 1.8s ease-in-out infinite alternate;
      }
      .sidebar-ai-bubble.assistant.is-generating::before {
        background: linear-gradient(90deg, #4f46e5, #ec4899, #3b82f6, #8b5cf6, #4f46e5);
        background-size: 400% 400%;
        animation: gemini-glow-border 3s linear infinite;
        opacity: 0.85;
      }
      .sidebar-ai-bubble p {
        margin: 0;
      }
      .sidebar-ai-bubble a {
        color: #4f46e5 !important;
        text-decoration: underline;
        font-weight: 500;
        transition: color 0.15s ease;
      }
      .sidebar-ai-bubble a:hover {
        color: #6366f1 !important;
      }
      .sidebar-ai-bubble p + p {
        margin-top: 8px;
      }
      .sidebar-ai-bubble pre {
        margin: 8px 0;
        padding: 8px 10px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        overflow-x: auto;
        font-family: monospace;
        font-size: 12.5px;
        color: #c7d2fe;
      }
      .sidebar-ai-bubble code {
        font-family: monospace;
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 4px;
        border-radius: 4px;
        color: #f472b6;
        font-size: 13px;
      }
      .sidebar-ai-bubble pre code {
        background: transparent;
        padding: 0;
        color: inherit;
        font-size: inherit;
      }
      .sidebar-ai-cursor {
        display: inline-block;
        width: 2px;
        height: 1em;
        background: #a5b4fc;
        margin-left: 2px;
        vertical-align: text-bottom;
        animation: ai-blink 0.7s steps(2) infinite;
      }
      @keyframes ai-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .sidebar-ai-pills-wrap {
        position: relative;
        z-index: 1;
        padding: 0 16px 8px;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .sidebar-ai-pills-wrap::-webkit-scrollbar {
        display: none;
      }
      .sidebar-ai-pills {
        display: flex;
        gap: 6px;
        width: max-content;
      }
      .sidebar-ai-pill {
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        color: #c3cee3;
        padding: 7px 12px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease, transform 0.12s ease;
      }
      .sidebar-ai-pill:hover {
        background: rgba(129, 140, 248, 0.1);
        border-color: rgba(129, 140, 248, 0.3);
        color: #edf2fb;
        transform: translateY(-1px);
      }
      .sidebar-ai-pill:active {
        transform: translateY(0) scale(0.97);
      }
      /* Model Dropdown Menu */
      .sidebar-ai-model-menu {
        position: absolute;
        top: 56px;
        left: 12px;
        width: calc(100% - 24px);
        background: rgba(23, 28, 41, 0.96);
        backdrop-filter: blur(24px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 16px rgba(99, 102, 241, 0.1);
        padding: 8px;
        z-index: 100;
        opacity: 0;
        transform: translateY(-8px) scale(0.96);
        pointer-events: none;
        transition: all 0.25s cubic-bezier(0.2, 0.85, 0.3, 1);
      }
      .sidebar-ai-model-menu.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }
      .sidebar-ai-model-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 12px;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.1s ease;
      }
      .sidebar-ai-model-menu-item:hover {
        background: rgba(255, 255, 255, 0.04);
        transform: translateY(-0.5px);
      }
      .sidebar-ai-model-menu-item.active {
        background: rgba(99, 102, 241, 0.08);
        border: 1px solid rgba(99, 102, 241, 0.15);
      }
      .sidebar-ai-model-icon {
        font-size: 20px;
        color: #9da5b4;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.03);
      }
      .sidebar-ai-model-icon.pro {
        color: #a5b4fc;
        background: linear-gradient(135deg, rgba(129, 140, 248, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%);
        border: 1px solid rgba(129, 140, 248, 0.2);
      }
      .sidebar-ai-model-info {
        flex: 1;
      }
      .sidebar-ai-model-name {
        font-size: 13.5px;
        font-weight: 600;
        color: #edf2fb;
      }
      .sidebar-ai-model-desc {
        font-size: 11px;
        color: #9da5b4;
        margin-top: 2px;
        line-height: 1.3;
      }
      .sidebar-ai-model-check {
        font-size: 18px;
        color: #6366f1;
      }

      /* API Modal */
      .sidebar-ai-api-modal {
        position: absolute;
        inset: 0;
        background: rgba(10, 12, 18, 0.65);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        z-index: 150;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.22s ease;
      }
      .sidebar-ai-api-modal.open {
        opacity: 1;
        pointer-events: auto;
      }
      .sidebar-ai-api-modal-content {
        background: rgba(23, 28, 41, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(99, 102, 241, 0.15);
        width: 100%;
        max-width: 320px;
        padding: 20px;
        transform: scale(0.95);
        transition: transform 0.22s cubic-bezier(0.2, 0.85, 0.3, 1);
      }
      .sidebar-ai-api-modal.open .sidebar-ai-api-modal-content {
        transform: scale(1);
      }
      .sidebar-ai-api-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }
      .sidebar-ai-api-modal-header strong {
        font-size: 15px;
        color: #edf2fb;
      }
      .sidebar-ai-api-modal-header button {
        background: none;
        border: none;
        color: #9da5b4;
        cursor: pointer;
        font-size: 20px;
        padding: 4px;
        border-radius: 50%;
        transition: background 0.2s;
      }
      .sidebar-ai-api-modal-header button:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .sidebar-ai-api-modal-desc {
        font-size: 12px;
        color: #9da5b4;
        line-height: 1.45;
        margin-bottom: 16px;
      }
      #sidebar-ai-api-input {
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        padding: 10px 12px;
        color: #ffffff;
        font-size: 13px;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
        margin-bottom: 20px;
      }
      #sidebar-ai-api-input:focus {
        border-color: rgba(99, 102, 241, 0.5);
        box-shadow: 0 0 8px rgba(99, 102, 241, 0.2);
      }
      .sidebar-ai-api-modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .sidebar-ai-api-link {
        font-size: 12px;
        color: #a5b4fc;
        text-decoration: none;
        font-weight: 500;
      }
      .sidebar-ai-api-link:hover {
        text-decoration: underline;
      }
      .sidebar-ai-api-save-btn {
        background: #2563eb;
        color: #ffffff;
        border: none;
        border-radius: 10px;
        padding: 8px 16px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s;
      }
      .sidebar-ai-api-save-btn:hover {
        background: #1d4ed8;
      }
      .sidebar-ai-api-save-btn:active {
        transform: scale(0.97);
      }

      .sidebar-ai-footer {
        position: relative;
        z-index: 1;
        padding: 8px 16px 18px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        background: rgba(17, 21, 28, 0.4);
      }
      .sidebar-ai-suggestions-wrap {
        display: block;
        margin-bottom: 12px;
        animation: sidebarAiFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .sidebar-ai-suggestions-wrap.hidden {
        display: none !important;
      }
      .sidebar-ai-suggestions-title {
        font-size: 11px;
        color: #a5b4fc;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-bottom: 6px;
        font-weight: 600;
        opacity: 0.85;
      }
      .sidebar-ai-suggestions {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .sidebar-ai-suggestion-pill {
        display: block;
        width: 100%;
        text-align: left;
        background: rgba(99, 102, 241, 0.08);
        border: 1px solid rgba(99, 102, 241, 0.2);
        border-radius: 12px;
        padding: 8px 12px;
        color: #c7d2fe;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: inherit;
        box-sizing: border-box;
      }
      .sidebar-ai-suggestion-pill:hover {
        background: rgba(99, 102, 241, 0.16);
        border-color: rgba(99, 102, 241, 0.45);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        color: #ffffff;
      }
      .sidebar-ai-suggestion-pill:active {
        transform: scale(0.985);
      }
      
      /* Flyer Animation Element */
      .sidebar-ai-flyer-pill {
        display: block;
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 12px;
        padding: 8px 12px;
        color: #ffffff;
        font-size: 13px;
        font-weight: 500;
        box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
        font-family: inherit;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      @keyframes sidebarAiFadeIn {
        from {
          opacity: 0;
          transform: translateY(4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .sidebar-ai-input-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        padding: 6px 6px 6px 14px;
        box-sizing: border-box;
      }
      .sidebar-ai-input-wrap:focus-within {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(129, 140, 248, 0.35);
        box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.15);
      }
      #sidebar-ai-input {
        flex: 1;
        border: 0;
        background: transparent;
        outline: none;
        color: #edf2fb;
        font-family: inherit;
        font-size: 14.5px;
        resize: none;
        max-height: 100px;
        padding: 6px 0;
        box-sizing: border-box;
      }
      #sidebar-ai-input::placeholder {
        color: rgba(255, 255, 255, 0.35);
      }
      .sidebar-ai-send {
        width: 34px;
        height: 34px;
        min-width: 34px;
        border-radius: 50%;
        border: 0;
        background: #edf2fb;
        color: #11151c;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.15s ease, background 0.15s ease;
      }
      .sidebar-ai-send:hover {
        transform: scale(1.08);
        background: #ffffff;
      }
      .sidebar-ai-send:active {
        transform: scale(0.92);
      }
      .sidebar-ai-send .lucide {
        font-size: 18px;
      }
      .sidebar-ai-send.is-streaming {
        background: rgba(255, 255, 255, 0.08) !important;
      }
      .sidebar-ai-send.is-streaming .lucide {
        display: none !important;
      }
      .sidebar-ai-stopped-label {
        font-size: 12.5px;
        font-style: italic;
        color: rgba(255, 74, 74, 0.85);
        margin: 4px 0 10px 18px;
        align-self: flex-start;
        font-family: inherit;
        animation: bubble-in 0.2s ease both;
      }
      .sidebar-ai-bubble strong {
        color: #ffffff;
        font-weight: 600;
      }
      .sidebar-ai-bubble em {
        color: #e0e7ff;
        font-style: italic;
      }
      .sidebar-ai-bubble {
        transition: max-height 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), padding 0.2s ease;
      }
      .sidebar-ai-follow-up {
        margin-top: 4px;
        align-self: flex-start;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .sidebar-ai-follow-up-pill {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        color: #a5b4fc;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease, transform 0.12s ease;
      }
      .sidebar-ai-follow-up-pill:hover {
        background: rgba(129, 140, 248, 0.12);
        border-color: rgba(129, 140, 248, 0.35);
        color: #edf2fb;
        transform: translateY(-1px);
      }
      .sidebar-ai-follow-up-pill:active {
        transform: translateY(0) scale(0.97);
      }
      /* ========================
         Sidebar Profile Panel
         ======================== */
      .sidebar-profile-panel {
        position: fixed;
        top: var(--workspace-gutter, 12px);
        right: auto;
        bottom: var(--workspace-gutter, 12px);
        left: var(--workspace-gutter, 12px);
        width: clamp(320px, var(--sidebar-width, 380px), 440px);
        height: auto;
        max-width: none;
        margin: 0;
        padding: 0;
        z-index: 100050;
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.45);
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        overflow: hidden;
        opacity: 1;
        pointer-events: none;
        transform: translateX(-110%);
        transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
        overscroll-behavior: contain;
      }
      .sidebar-profile-panel.open {
        transform: translateX(0);
        pointer-events: auto;
      }
      .sidebar-profile-panel.active-sessions-panel,
      .sidebar-profile-panel.language-select-panel {
        z-index: 100051;
      }
      .sidebar-profile-panel::before {
        display: none;
      }
      .sidebar-profile-panel .lucide {
        font-variation-settings: "FILL" 0, "wght" 250, "GRAD" 0, "opsz" 24 !important;
        font-weight: normal;
      }

      .sidebar-profile-card {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: none;
        margin: 0;
        background: #ffffff;
        border: 0;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        opacity: 1;
        transform: none;
        transition: none;
        box-shadow: none;
        overflow: hidden;
        color: #0f172a;
      }
      .sidebar-profile-panel.open .sidebar-profile-card {
        opacity: 1;
        transform: none;
      }
      .sidebar-profile-header {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 72px;
        padding: 10px 16px;
        border-bottom: 1px solid #f1f5f9;
        flex-shrink: 0;
        background: #ffffff;
      }
      .sidebar-profile-header-actions {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .sidebar-profile-back,
      .sidebar-profile-edit,
      .sidebar-profile-more,
      .sidebar-profile-search,
      .sidebar-profile-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50% !important;
        border: none;
        background: transparent;
        color: #64748b;
        cursor: pointer;
        transition: background 0.18s ease, color 0.18s ease;
        flex-shrink: 0;
      }
        border: none;
        background: transparent;
        color: #64748b;
        cursor: pointer;
        transition: background 0.18s ease, color 0.18s ease;
        flex-shrink: 0;
      }
      .sidebar-profile-back:hover,
      .sidebar-profile-edit:hover,
      .sidebar-profile-more:hover,
      .sidebar-profile-search:hover,
      .sidebar-profile-close:hover {
        background: #f1f5f9;
        color: #0f172a;
      }
      .sidebar-profile-back .lucide,
      .sidebar-profile-edit .lucide,
      .sidebar-profile-more .lucide,
      .sidebar-profile-search .lucide,
      .sidebar-profile-close .lucide {
        font-size: 22px;
      }
      .sidebar-profile-title {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
        margin: 0;
      }
      #sidebar-profile-panel .sidebar-profile-title {
        font-size: 42px;
        font-weight: 800;
        letter-spacing: -0.04em;
        text-transform: uppercase;
        line-height: 1.05;
      }
      .sidebar-profile-body {
        position: relative;
        z-index: 1;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 24px;
        background: #ffffff;
        overscroll-behavior: contain;
      }
      .sidebar-profile-body::-webkit-scrollbar { width: 4px; }
      .sidebar-profile-body::-webkit-scrollbar-track { background: transparent; }
      .sidebar-profile-body::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 2px; }
      .sidebar-profile-avatar-zone {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 24px 24px 20px;
        border-bottom: none;
      }
      .sidebar-profile-avatar-wrapper {
        position: relative;
        width: 75px;
        height: 75px;
        flex-shrink: 0;
      }
      .sidebar-profile-avatar-circle {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        transition: opacity 0.2s ease;
      }
      .sidebar-profile-avatar-circle:hover {
        opacity: 0.85;
      }
      .sidebar-profile-avatar-circle img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .avatar-plus-button {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #6366f1;
        border: 2px solid #ffffff;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.35);
        transition: background 0.18s ease, transform 0.18s ease;
        z-index: 10;
        padding: 0;
      }
      .avatar-plus-button:hover {
        background: #4f46e5;
        transform: scale(1.05);
      }
      .avatar-plus-button:active {
        transform: scale(0.95);
      }
      .avatar-upload-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 999;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        padding: 6px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 160px;
        opacity: 0;
        pointer-events: none;
        transform: scale(0.95);
        transform-origin: top left;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .avatar-upload-menu.open {
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
      }
      .avatar-upload-menu-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #1e293b;
        font-size: 13.5px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
        width: 100%;
        text-align: left;
      }
      .avatar-upload-menu-item:hover {
        background: #f1f5f9;
        color: #0f172a;
      }
      .avatar-upload-menu-icon {
        width: 16px;
        height: 16px;
        color: #64748b;
      }
      .sidebar-profile-avatar-zone {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 20px 12px;
        background: #ffffff;
      }
      .sidebar-profile-identity {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        text-align: left;
      }
      .sidebar-profile-name {
        font-size: 17px;
        font-weight: 600;
        color: #0f172a;
        margin: 0;
        letter-spacing: -0.01em;
        line-height: 1.25;
      }
      .sidebar-profile-username-header {
        font-size: 13px;
        color: #64748b;
        font-weight: 400;
        line-height: 1.2;
      }
      .sidebar-profile-online-badge {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        color: #16a34a;
        font-weight: 500;
        line-height: 1.2;
        margin-top: 1px;
      }
      .sidebar-profile-online-dot {
        display: none;
      }
      .sidebar-profile-info-block {
        margin: 6px 14px 10px;
        background: #f8fafc;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        overflow: hidden;
      }
      .sidebar-profile-info-row {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 18px;
        cursor: pointer;
        transition: background 0.16s ease;
        user-select: none;
      }
      .sidebar-profile-info-row:hover {
        background: #f1f5f9;
      }
      .sidebar-profile-info-row:active {
        background: #e2e8f0;
      }
      .sidebar-profile-info-icon {
        font-size: 20px;
        color: #64748b;
        flex-shrink: 0;
      }
      .sidebar-profile-info-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }
      .sidebar-profile-info-value {
        font-size: 14.5px;
        font-weight: 400;
        color: #0f172a;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sidebar-profile-info-label {
        font-size: 12px;
        color: #64748b;
        margin: 0;
        font-weight: 400;
      }
      .sidebar-profile-settings-block {
        margin: 10px 14px;
        background: #f8fafc;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        overflow: hidden;
      }
      .sidebar-profile-setting-row {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 18px;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        color: #0f172a;
        cursor: pointer;
        text-align: left;
        transition: background 0.16s ease;
      }
      .sidebar-profile-setting-row:last-child { border-bottom: none; }
      .sidebar-profile-setting-row:hover { background: #f1f5f9; }
      .sidebar-profile-setting-row:active { background: #e2e8f0; }
      .sidebar-profile-setting-icon {
        font-size: 20px;
        color: #64748b;
        flex-shrink: 0;
      }
      .sidebar-profile-setting-label {
        flex: 1;
        font-size: 14.5px;
        font-weight: 500;
        color: #0f172a;
        min-width: 0;
        line-height: 1.25;
      }
      .sidebar-profile-setting-value {
        font-size: 13.5px;
        color: #64748b;
        margin: 0 4px 0 auto;
        white-space: nowrap;
        line-height: 1.2;
      }
      .sidebar-profile-device-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11.5px;
        font-weight: 500;
        color: #2563eb;
        background: #eff6ff;
        border-radius: 999px;
        padding: 2px 7px;
        line-height: 1.2;
        margin: 0 4px 0 auto;
        flex-shrink: 0;
      }
      .sidebar-profile-setting-arrow {
        display: none;
      }
      .sidebar-profile-premium-block {
        margin: 12px 14px 24px;
        background: #faf5ff;
        border-radius: 16px;
        border: 1px solid #f3e8ff;
        overflow: hidden;
      }
      .sidebar-profile-premium-row {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 18px;
        padding: 14px 20px;
        background: transparent;
        border: none;
        color: #9333ea;
        cursor: pointer;
        text-align: left;
        transition: background 0.16s ease;
      }
      .sidebar-profile-premium-row:hover { background: #f3e8ff; }
      .sidebar-profile-premium-row:active { background: #e9d5ff; }

      /* Active Sessions Modal & Tile Styling (White Theme) */
      .active-sessions-card {
        background: #ffffff !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: none !important;
        transition: filter 0.42s cubic-bezier(0.16, 1, 0.3, 1), transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease !important;
      }
      .active-sessions-card.modal-blur-active,
      body:has(.session-confirm-modal-overlay.open) .active-sessions-card {
        filter: blur(10px) brightness(0.92) !important;
        transform: scale(0.98) !important;
      }
      .active-sessions-header {
        background: #ffffff !important;
        border-bottom: 1px solid #f1f5f9 !important;
      }
      .active-sessions-body {
        padding: 20px 20px 28px;
        background: #ffffff;
        color: #0f172a;
        flex: 1;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #cbd5e1 transparent;
      }
      .active-sessions-body::-webkit-scrollbar {
        width: 6px;
      }
      .active-sessions-body::-webkit-scrollbar-track {
        background: transparent;
      }
      .active-sessions-body::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 10px;
      }
      .active-sessions-body::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }
      .active-sessions-body::-webkit-scrollbar-button {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .active-sessions-section {
        margin-bottom: 24px;
      }
      .active-sessions-section-title {
        font-size: 13.5px;
        font-weight: 600;
        color: #ff595a;
        margin-bottom: 12px;
        letter-spacing: 0.02em;
      }
      .session-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 10px;
        position: relative;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
      }
      .session-card:hover {
        background: #f1f5f9;
        border-color: #cbd5e1;
      }
      .session-card.removing {
        opacity: 0 !important;
        transform: scale(0.92) translateY(-6px) !important;
        max-height: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
        border: none !important;
      }
      .session-icon-circle {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #ffffff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }
      .session-icon-circle.windows,
      .session-icon-circle.desktop {
        background: #3b82f6;
      }
      .session-icon-circle.android {
        background: #22c55e;
      }
      .session-icon-circle.chrome,
      .session-icon-circle.browser {
        background: #ea4335;
      }
      .session-icon-circle.ios,
      .session-icon-circle.mac,
      .session-icon-circle.apple {
        background: #475569;
      }
      .session-icon-circle.linux {
        background: #f59e0b;
      }
      .session-card-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .session-device-name {
        font-size: 15px;
        font-weight: 600;
        color: #0f172a;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .session-app-info {
        font-size: 13px;
        color: #475569;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .session-location-info {
        font-size: 12.5px;
        color: #64748b;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .session-card-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }
      .session-rename-btn {
        font-size: 13.5px;
        color: #ff595a;
        background: transparent;
        border: none;
        cursor: pointer;
        font-weight: 600;
        padding: 4px 8px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .session-rename-btn:hover {
        background: rgba(255, 89, 90, 0.08);
      }
      .session-close-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: none;
        background: transparent;
        color: #64748b;
        font-size: 22px;
        font-weight: 400;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s ease, color 0.16s ease;
      }
      .session-close-btn:hover {
        background: #e2e8f0;
        color: #0f172a;
      }
      .terminate-all-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        padding: 12px 16px;
        background: #fff1f2;
        border: 1px solid #ffe4e6;
        color: #ff595a;
        font-size: 14.5px;
        font-weight: 600;
        cursor: pointer;
        border-radius: 12px;
        transition: all 0.16s ease;
        margin-top: 4px;
      }
      .terminate-all-btn:hover:not(:disabled) {
        background: #ffe4e6;
        border-color: #fecdd3;
      }
      .terminate-all-btn:disabled,
      .terminate-all-btn.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #f8fafc;
        border-color: #e2e8f0;
        color: #94a3b8;
      }
      .active-sessions-help-text {
        font-size: 12.5px;
        color: #64748b;
        margin: 8px 16px 0;
      }
      .active-devices-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* Confirmation Modal Styling (White Theme / Material Design 3) */
      .session-confirm-modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .session-confirm-modal-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }
      .session-confirm-modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        transition: backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                    -webkit-backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                    background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .session-confirm-modal-overlay.open .session-confirm-modal-backdrop {
        background-color: rgba(15, 23, 42, 0.45);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }
      .session-confirm-modal-box {
        position: relative;
        z-index: 2;
        width: min(380px, calc(100vw - 40px));
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        padding: 24px 24px 20px;
        box-shadow: none !important;
        transform: translateY(10px);
        opacity: 0;
        transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.18s ease;
      }
      .session-confirm-modal-overlay.open .session-confirm-modal-box {
        transform: translateY(0);
        opacity: 1;
      }
      .session-confirm-modal-text {
        font-size: 16px;
        font-weight: 600;
        color: #0f172a;
        margin: 0 0 24px;
        line-height: 1.45;
      }
      .session-confirm-modal-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
      }
      .session-confirm-btn {
        background: transparent;
        border: none;
        font-size: 14.5px;
        font-weight: 600;
        cursor: pointer;
        padding: 10px 16px;
        border-radius: 10px;
        transition: background 0.15s ease;
      }
      .session-confirm-btn.cancel {
        color: #64748b;
      }
      .session-confirm-btn.cancel:hover {
        background: #f1f5f9;
        color: #0f172a;
      }
      .session-confirm-btn.terminate {
        color: #ffffff;
        background: #ff595a;
      }
      .session-confirm-btn.terminate:hover {
        background: #e11d48;
      }
      .session-rename-modal-box { width: min(420px, calc(100vw - 40px)); }
      .session-rename-input {
        width: 100%;
        height: 44px;
        margin: -8px 0 22px;
        padding: 0 13px;
        border: 1px solid #dbe3ed;
        border-radius: 10px;
        background: #f8fafc;
        color: #0f172a;
        font: inherit;
        outline: none;
        box-sizing: border-box;
      }
      .session-rename-input:focus { border-color: #318ce7; background: #ffffff; box-shadow: none; }
      .session-rename-save { color: #ffffff; background: #318ce7; }
      .session-rename-save:hover { background: #2179cf; }

      /* Language Select Panel & Confirm Modal (Photo 2 & 3) */
      .language-select-card {
        background: #ffffff !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: none !important;
        will-change: filter, transform;
        transition: filter 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: 580px;
      }
      .language-select-card.modal-blur-active,
      body:has(#language-confirm-modal.open) .language-select-card {
        filter: none !important;
        transform: translateY(-2px) !important;
      }
      .language-select-header {
        background: #ffffff !important;
        border-bottom: 1px solid #f1f5f9 !important;
      }
      .language-select-body {
        padding: 16px 20px;
        background: #ffffff;
        color: #0f172a;
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
        overflow: hidden;
      }
      .language-search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        flex-shrink: 0;
      }
      .language-search-icon {
        position: absolute;
        left: 14px;
        color: #94a3b8;
        pointer-events: none;
      }
      .language-search-input {
        width: 100%;
        height: 40px;
        padding: 0 16px 0 42px;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14.5px;
        color: #0f172a;
        outline: none;
        transition: border-color 0.16s ease, background 0.16s ease;
      }
      .language-search-input:focus {
        border-color: #3390ec;
        background: #ffffff;
      }
      .language-list-container {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-right: 4px;
        scrollbar-width: thin;
        scrollbar-color: #cbd5e1 transparent;
      }
      .language-list-container::-webkit-scrollbar {
        width: 5px;
      }
      .language-list-container::-webkit-scrollbar-track {
        background: transparent;
      }
      .language-list-container::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 10px;
      }
      .language-list-container::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }
      .language-list-container::-webkit-scrollbar-button {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .language-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 20px;
        text-align: center;
      }
      .language-empty-title {
        font-size: 15.5px;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 4px;
      }
      .language-empty-desc {
        font-size: 13.5px;
        color: #64748b;
      }
      .language-option-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 14px;
        border-radius: 12px;
        cursor: pointer;
        user-select: none;
        transition: background 0.16s ease;
      }
      .language-option-item:hover {
        background: #f8fafc;
      }
      .language-option-item.active {
        background: #f0f7ff;
      }
      .language-radio {
        display: none;
      }
      .language-check-box {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .language-check-emoji {
        width: 20px;
        height: 20px;
        object-fit: contain;
        display: block;
        opacity: 0;
        transform: scale(0);
        transition: opacity 0.15s ease, transform 0.15s ease;
        will-change: transform, opacity;
      }
      .language-option-item.active .language-check-emoji {
        opacity: 1;
        transform: scale(1);
        animation: languageCheckPop 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) 1 forwards;
      }
      @keyframes languageCheckPop {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        60% {
          opacity: 1;
          transform: scale(1.22);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      .language-flag-img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        border-radius: 0;
        box-shadow: none;
        flex-shrink: 0;
        display: block;
      }
      .language-option-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1px;
        min-width: 0;
      }
      .language-native-name {
        font-size: 15px;
        font-weight: 600;
        color: #0f172a;
        line-height: 1.25;
      }
      .language-english-name {
        font-size: 13px;
        color: #64748b;
        line-height: 1.25;
      }
      .language-select-footer {
        padding: 12px 20px 16px;
        background: #ffffff;
        border-top: 1px solid #f1f5f9;
        display: flex;
        justify-content: flex-end;
      }
      .language-select-ok-btn {
        background: #3390ec;
        color: #ffffff;
        border: none;
        font-size: 14.5px;
        font-weight: 600;
        padding: 8px 24px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.16s ease;
      }
      .language-select-ok-btn:hover {
        background: #2880d4;
      }

      /* Language Confirm Box (Photo 3) */
      .language-confirm-box {
        border-radius: 16px !important;
        box-shadow: none !important;
      }
      .language-confirm-box .session-confirm-btn.terminate {
        background: #3390ec !important;
      }
      .language-confirm-box .session-confirm-btn.terminate:hover {
        background: #2880d4 !important;
      }
      .language-confirm-title {
        font-size: 16.5px;
        font-weight: 600;
        color: #0f172a;
        margin: 0 0 10px;
        line-height: 1.35;
      }
      .language-confirm-desc {
        font-size: 14px;
        color: #475569;
        margin: 0 0 20px;
        line-height: 1.45;
      }

      .sidebar-profile-premium-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        background: transparent;
        flex-shrink: 0;
        box-shadow: none;
      }
      .sidebar-profile-premium-icon-wrap .lucide {
        font-size: 22px;
        color: #a855f7;
      }
      .sidebar-profile-premium-label {
        flex: 1;
        font-size: 15px;
        font-weight: 600;
        color: #9333ea;
      }
      .material-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.16);
        pointer-events: none;
        transform: scale(0);
        opacity: 0;
        transform-origin: center center;
        transition: transform 0.6s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.45s ease-out;
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.001ms !important;
        }
        .page:not(.booting),
        .chat-window.motion-enter,
        .message.message-launch {
          animation: none !important;
        }
      }
      /* Premium Modal Styling */
      .premium-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background: rgba(8, 10, 15, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
      .premium-modal-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }
      .premium-modal-card {
        position: relative;
        width: 100%;
        max-width: 550px;
        background: #111318;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        transform: scale(0.92);
        opacity: 0;
        transition: transform 0.34s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        overflow: hidden;
      }
      .premium-modal-overlay.open .premium-modal-card {
        transform: scale(1);
        opacity: 1;
      }
      .premium-modal-close {
        position: absolute !important;
        top: 16px !important;
        right: 16px !important;
        background: rgba(255, 255, 255, 0.06) !important;
        border: 0 !important;
        width: 32px !important;
        height: 32px !important;
        border-radius: 50% !important;
        color: rgba(255, 255, 255, 0.6) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        z-index: 99 !important;
        transition: background 0.2s, color 0.2s !important;
      }
      .premium-modal-close:hover {
        background: rgba(255, 255, 255, 0.12) !important;
        color: #fff !important;
      }
      .premium-modal-glow-bg {
        display: none;
      }
      .premium-modal-slider {
        display: flex;
        width: 200%;
        transition: transform 0.38s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .premium-modal-slider.show-detail {
        transform: translateX(-50%);
      }
      .premium-panel {
        width: 50%;
        padding: 32px 28px 24px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
      .premium-modal-header {
        text-align: center;
        margin-bottom: 24px;
        z-index: 1;
      }
      .premium-star-animation {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.25);
        animation: starPulse 2.5s infinite alternate;
      }
      .premium-star-animation .lucide {
        width: 28px;
        height: 28px;
        color: #fff;
        fill: rgba(255, 255, 255, 0.25);
      }
      @keyframes starPulse {
        0% { transform: scale(1); box-shadow: 0 0 15px rgba(168, 85, 247, 0.25); }
        100% { transform: scale(1.06); box-shadow: 0 0 25px rgba(168, 85, 247, 0.45); }
      }
      .premium-modal-title {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 8px;
        background: linear-gradient(90deg, #f3e8ff 0%, #e0e7ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .premium-modal-subtitle {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.54);
        max-width: 360px;
        margin: 0 auto;
        line-height: 1.4;
      }
      .premium-modal-body {
        width: 100%;
        max-height: 320px;
        overflow-y: auto;
        padding-right: 4px;
        z-index: 1;
        margin-bottom: 24px;
      }
      .premium-modal-body::-webkit-scrollbar {
        width: 4px;
      }
      .premium-modal-body::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 2px;
      }
      .premium-features-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .premium-feature-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 10px 12px;
        border-radius: 12px;
        cursor: pointer;
        transition: background 0.2s;
        margin: 0 -8px;
      }
      .premium-feature-item:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .premium-feature-chevron {
        margin-left: auto;
        color: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s, transform 0.2s;
      }
      .premium-feature-item:hover .premium-feature-chevron {
        color: rgba(255, 255, 255, 0.55);
        transform: translateX(2px);
      }
      .premium-feature-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        color: #a855f7;
        flex-shrink: 0;
        border: 1px solid rgba(255, 255, 255, 0.04);
      }
      .premium-feature-icon-wrap .lucide {
        width: 18px;
        height: 18px;
      }
      .theme-gradient {
        background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
        color: #ec4899;
      }
      .avatar-glowing {
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
        color: #a855f7;
      }
      .name-painting {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%);
        color: #3b82f6;
      }
      .gif-avatar {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%);
        color: #f59e0b;
      }
      .offline-status {
        background: linear-gradient(135deg, rgba(107, 114, 128, 0.15) 0%, rgba(75, 85, 99, 0.15) 100%);
        color: #9ca3af;
      }
      .ai-integration {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
        color: #10b981;
      }
      .premium-feature-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
        flex: 1;
      }
      .premium-feature-title {
        font-size: 15px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.95);
      }
      .premium-feature-desc {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.4;
      }
      .premium-modal-footer {
        width: 100%;
        z-index: 1;
      }
      .premium-subscribe-btn {
        width: 100%;
        padding: 14px 20px;
        border-radius: 12px;
        border: 0;
        background: #7c3aed;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: none;
        transition: background 0.2s, transform 0.1s;
      }
      .premium-subscribe-btn:hover {
        background: #8b5cf6;
        box-shadow: none;
      }
      .premium-subscribe-btn:active {
        transform: translateY(1px);
        box-shadow: none;
      }

      /* Detailed View Styles */
      .premium-detail-header {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        z-index: 1;
        width: 100%;
      }
      .premium-detail-back-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.06);
        border: 0;
        color: rgba(255, 255, 255, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 14px;
        transition: background 0.2s, color 0.2s;
      }
      .premium-detail-back-btn:hover {
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
      }
      .premium-detail-back-btn .lucide {
        width: 18px;
        height: 18px;
      }
      .premium-detail-title-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .premium-detail-title {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin: 0;
      }
      .premium-detail-icon-mini {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.08);
      }
      .premium-detail-icon-mini .lucide {
        width: 13px;
        height: 13px;
      }
      .premium-detail-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .premium-detail-item {
        display: flex;
        align-items: flex-start;
        gap: 14px;
      }
      .premium-detail-item-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(124, 58, 237, 0.08);
        color: #c084fc;
        flex-shrink: 0;
        border: 1px solid rgba(124, 58, 237, 0.06);
      }
      .premium-detail-item-icon-wrap .lucide {
        width: 15px;
        height: 15px;
      }
      .premium-detail-item-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .premium-detail-item-title {
        font-size: 14px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.95);
      }
      .premium-detail-item-desc {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.4;
        .app-progress {
          display: none;
        }
      }

      /* Ultra-Stylish Floating White/Light Tile Sidebar & Chat Header Contrast Fixes */
      .workspace-sidebar {
        background: #ffffff !important;
        color: #0d0f12 !important;
        border-radius: 20px !important;
        margin: 0 !important;
        height: 100% !important;
        box-shadow: 0 12px 36px -6px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04) !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        overflow: hidden !important;
        flex-shrink: 0 !important;
      }

      .workspace-shell {
        gap: 12px !important;
        background: #0e1219 !important;
      }

      .workspace-brand {
        padding: 4px 10px !important;
        margin: 6px 0 8px !important;
      }

      .workspace-brand-leading h1,
      .brand-text-title {
        font-weight: 500 !important;
        font-size: 21px !important;
        letter-spacing: -0.02em !important;
        color: #0d0f12 !important;
      }

      .brand-mini-logo {
        width: 22px !important;
        height: 22px !important;
        border-radius: 6px !important;
        margin-left: 8px !important;
        vertical-align: middle !important;
        display: inline-block !important;
        object-fit: cover !important;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important;
      }

      .workspace-brand-menu {
        width: 40px !important;
        height: 40px !important;
        background: #f1f5f9 !important;
        border: 1px solid #e2e8f0 !important;
        color: #0f172a !important;
        border-radius: 50% !important;
        box-shadow: none !important;
        transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease !important;
      }

      #sidebar-compose-fab svg,
      #sidebar-compose-fab .lucide {
        color: #0f172a !important;
        fill: currentColor !important;
      }

      .workspace-brand-menu:hover {
        background: #e2e8f0 !important;
        border-color: #cbd5e1 !important;
        color: #0f172a !important;
        box-shadow: none !important;
      }

      .sidebar-resize-handle::before {
        background: transparent !important;
      }

      .sidebar-search {
        padding: 0 8px 4px !important;
        margin: 0 0 2px !important;
      }

      .sidebar-search input {
        background: #f1f5f9 !important;
        border: 1px solid #e2e8f0 !important;
        color: #0d0f12 !important;
        border-radius: 14px !important;
        font-size: 14px !important;
      }

      .sidebar-search input::placeholder {
        color: #94a3b8 !important;
      }

      .dialog-list {
        padding: 2px 8px 12px !important;
        margin-top: 0 !important;
      }

      .dialog-item {
        color: #0d0f12 !important;
        border-radius: 14px !important;
        transition: background 0.18s ease !important;
      }

      .dialog-item-title,
      .dialog-line strong,
      .dialog-item strong {
        color: #0d0f12 !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        letter-spacing: -0.01em;
      }

      .dialog-item-preview,
      .dialog-preview,
      .dialog-item-meta,
      .dialog-meta {
        color: #64748b !important;
      }

      .dialog-item:hover {
        background: #f1f5f9 !important;
      }

      .dialog-item.active,
      .dialog-item.is-selected {
        background: #e2e8f0 !important;
        box-shadow: none !important;
        border: none !important;
      }

      .dialog-item.active .dialog-line strong,
      .dialog-item.active .dialog-item-title,
      .dialog-item.active strong {
        color: #0d0f12 !important;
        font-weight: 600 !important;
      }

      .dialog-item.active .dialog-preview,
      .dialog-item.active .dialog-meta {
        color: #475569 !important;
      }

      .sidebar-glass-menu {
        background: rgba(255, 255, 255, 0.96) !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12) !important;
        color: #0d0f12 !important;
      }

      .sidebar-glass-menu-item {
        color: #0d0f12 !important;
      }

      .sidebar-glass-menu-item:hover {
        background: #f1f5f9 !important;
      }

      .workspace-account {
        background: #f8fafc !important;
        border-top: 1px solid #e2e8f0 !important;
        color: #0d0f12 !important;
      }

      .workspace-account-name {
        color: #0d0f12 !important;
      }

      .workspace-account-label {
        color: #64748b !important;
      }

      /* Right Chat Top Bar Title & Subtitle Subtle Light Glass Theme */
      .chat-island strong,
      .chat-island-text strong,
      .chat-island-copy strong {
        color: #0d0f12 !important;
        font-weight: 700 !important;
        font-size: 15.5px !important;
      }

      .chat-island span,
      .chat-island-text span,
      .chat-island-copy span {
        color: #64748b !important;
        font-size: 12px !important;
      }

      .chat-island {
        top: calc(6px + var(--chat-top-offset, 0px) + var(--chat-group-call-top-offset, 0px)) !important;
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) !important;
        width: min(84%, 720px) !important;
        max-width: 720px !important;
        min-width: 280px !important;
        min-height: 56px !important;
        padding: 6px 14px !important;
        border-radius: 999px !important;
        background: rgba(255, 255, 255, 0.94) !important;
        backdrop-filter: blur(20px) saturate(160%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(160%) !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04) !important;
        color: #0d0f12 !important;
      }

      .chat-island-action {
        width: 38px !important;
        height: 38px !important;
        border-radius: 50% !important;
        background: transparent !important;
        color: #475569 !important;
        border: none !important;
        box-shadow: none !important;
        transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease !important;
      }

      .chat-island-action:hover {
        background: #e2e8f0 !important;
        color: #0f172a !important;
        box-shadow: none !important;
        transform: none !important;
      }

      .chat-island-action svg,
      .chat-island-action .lucide {
        stroke: #334155 !important;
        color: #334155 !important;
      }

      .chat-island-action svg,
      .chat-island-action .lucide {
        stroke: #334155 !important;
        color: #334155 !important;
      }

      /* Ultra-Smooth Hardware-Accelerated Tablet & Mobile Touch Response for Dialog Items */
      .dialog-list {
        contain: content !important;
      }

      .dialog-item {
        contain: layout style !important;
        transform: translateZ(0) !important;
        -webkit-transform: translateZ(0) !important;
        backface-visibility: hidden !important;
        -webkit-backface-visibility: hidden !important;
        will-change: transform, background-color !important;
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
      }

      .dialog-item:active {
        transform: scale(0.982) translateZ(0) !important;
        -webkit-transform: scale(0.982) translateZ(0) !important;
        background: #e2e8f0 !important;
        transition: transform 0.12s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.12s cubic-bezier(0.25, 1, 0.5, 1) !important;
      }

      .dialog-item.active,
      .dialog-item.is-selected {
        transform: scale(1) translateZ(0) !important;
        -webkit-transform: scale(1) translateZ(0) !important;
        background: #e2e8f0 !important;
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
      }

      .dialog-item.ripple-host::after {
        display: none !important;
        animation: none !important;
      }

      /* Global Ultra-High Performance & Low-Spec Device Engine */
      * {
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
      }

      .message-list,
      .dialog-list {
        contain: content !important;
        will-change: scroll-position !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .message {
        content-visibility: auto !important;
        contain-intrinsic-size: 72px !important;
        contain: layout style paint !important;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
      }

      .dialog-item {
        content-visibility: auto !important;
        contain-intrinsic-size: 68px !important;
      }

      .message-bubble,
      .message-image,
      .dialog-avatar,
      .chat-island,
      .composer,
      .workspace-sidebar,
      .workspace-main,
      .sidebar-glass-menu,
      .message-context-menu {
        transform: translateZ(0) !important;
        -webkit-transform: translateZ(0) !important;
        backface-visibility: hidden !important;
        -webkit-backface-visibility: hidden !important;
      }

      /* Unified compact pill scrollbars. The transparent border makes the
         thumb grow smoothly on hover/drag without a harsh rectangular rail. */
      * { scrollbar-width: thin; scrollbar-color: rgba(148, 163, 184, .58) transparent; }
      *::-webkit-scrollbar { width: 11px !important; height: 11px !important; }
      *::-webkit-scrollbar-track { background: transparent !important; }
      *::-webkit-scrollbar-button,
      *::-webkit-scrollbar-button:single-button { display: none !important; width: 0 !important; height: 0 !important; }
      *::-webkit-scrollbar-thumb {
        min-height: 42px !important;
        border: 4px solid transparent !important;
        border-radius: 999px !important;
        background: rgba(148, 163, 184, .62) padding-box !important;
        box-shadow: none !important;
        transition: border-width .42s cubic-bezier(.16,1,.3,1), background-color .42s cubic-bezier(.16,1,.3,1) !important;
      }
      *::-webkit-scrollbar-thumb:hover {
        border-width: 2px !important;
        background: rgba(148, 163, 184, .82) padding-box !important;
      }
      *::-webkit-scrollbar-thumb:active {
        border-width: 1px !important;
        background: rgba(100, 116, 139, .96) padding-box !important;
      }

      .message-day-separator { margin: 14px 0 18px !important; }
      .message-day-separator span {
        min-width: 0 !important;
        min-height: 25px !important;
        padding: 3px 14px !important;
        color: #334155 !important;
        background: rgba(248, 250, 252, .94) !important;
        border: 1px solid rgba(226, 232, 240, .95) !important;
        box-shadow: 0 5px 16px rgba(15, 23, 42, .12) !important;
        backdrop-filter: blur(14px) !important;
      }

      .dialog-avatar-secret svg,
      .static-compose-menu [data-compose-action="secret"] svg,
      .sidebar-profile-setting-row svg.icon-lock {
        width: 23px !important;
        height: 23px !important;
        stroke-width: 1.8 !important;
        fill: none !important;
      }

      .session-card { min-height: 72px; padding: 13px 16px !important; }
      .session-card-info { overflow: hidden; }
      .session-device-name, .session-app-info, .session-location-info { max-width: 100%; }
      .session-card-actions { max-width: 42%; }
      .session-rename-btn { max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      @media (max-width: 560px) {
        .active-sessions-body { padding: 14px 12px 22px !important; }
        .session-card { gap: 10px; padding: 12px !important; }
        .session-icon-circle { width: 40px; height: 40px; }
        .session-rename-btn { max-width: 92px; font-size: 12px; padding: 4px; }
      }

      .workspace-sidebar, .chat-island, .composer, .sidebar-profile-panel,
      .active-sessions-card, .language-panel-card, .session-card,
      .sidebar-profile-settings-block, .dialog-item {
        transition-timing-function: cubic-bezier(.16,1,.3,1) !important;
      }

      .functional-settings-overlay {
        position: fixed; inset: 0; z-index: 100050 !important; display: grid; place-items: center;
        padding: 18px; background: rgba(15, 23, 42, .38) !important;
        opacity: 0; visibility: hidden; pointer-events: none;
        backdrop-filter: blur(0); -webkit-backdrop-filter: blur(0); transition: opacity .28s ease, visibility .28s ease, backdrop-filter .36s ease;
      }
      .functional-settings-overlay.open { opacity: 1; visibility: visible; pointer-events: auto; backdrop-filter: blur(14px) saturate(140%) !important; -webkit-backdrop-filter: blur(14px) saturate(140%) !important; }
      .functional-settings-card {
        width: min(500px, 100%); max-height: min(720px, calc(100vh - 36px)); overflow: hidden;
        border: 1px solid #e2e8f0; border-radius: 27px; background: rgba(255,255,255,.98);
        box-shadow: 0 28px 80px rgba(15,23,42,.26); transform: translateY(16px) scale(.97);
        transition: transform .42s cubic-bezier(.16,1,.3,1);
      }
      .functional-settings-overlay.open .functional-settings-card { transform: translateY(0) scale(1); }
      .functional-settings-card header {
        height: 68px; display: grid; grid-template-columns: 42px 1fr 42px; align-items: center;
        padding: 0 16px; border-bottom: 1px solid #edf2f7;
      }
      .functional-settings-card h3 { margin: 0; text-align: center; color: #172033; font-size: 19px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .functional-settings-card header button {
        width: 38px; height: 38px; border: 0; border-radius: 13px; background: transparent;
        color: #64748b; font: 400 27px/1 system-ui; cursor: pointer; transition: background .25s ease, transform .25s ease;
      }
      .functional-settings-card header button:hover { background: #f1f5f9; transform: scale(1.06); }
      .functional-settings-list { overflow: auto; max-height: calc(min(720px, 100vh - 36px) - 68px); padding: 12px; }
      .functional-setting-row {
        min-height: 70px; display: grid; grid-template-columns: minmax(0,1fr) 48px; align-items: center; gap: 16px;
        padding: 12px 14px; border-radius: 17px; cursor: pointer; transition: background .28s ease, transform .28s cubic-bezier(.16,1,.3,1);
      }
      .functional-setting-row:hover { background: #f3f7fb; transform: translateX(2px); }
      .functional-setting-row span { min-width: 0; }
      .functional-setting-row strong, .functional-setting-row small { display: block; }
      .functional-setting-row strong { color: #172033; font-size: 15px; }
      .functional-setting-row small { margin-top: 4px; color: #71819a; font-size: 12px; line-height: 1.35; }
      .functional-setting-row input { position: absolute; opacity: 0; pointer-events: none; }
      .functional-setting-row i {
        position: relative; width: 46px; height: 27px; border-radius: 999px; background: #cbd5e1;
        box-shadow: inset 0 0 0 1px rgba(100,116,139,.12); transition: background .34s ease, transform .34s cubic-bezier(.16,1,.3,1);
      }
      .functional-setting-row i::after {
        content: ""; position: absolute; top: 3px; left: 3px; width: 21px; height: 21px; border-radius: 50%;
        background: #fff; box-shadow: 0 2px 7px rgba(15,23,42,.24); transition: transform .38s cubic-bezier(.16,1,.3,1);
      }
      .functional-setting-row input:checked + i { background: #3b82f6; }
      .functional-setting-row input:checked + i::after { transform: translateX(19px); }
      .functional-setting-row:active i { transform: scale(1.09); }
      body.tg-compact-dialogs .dialog-item { min-height: 58px !important; padding-top: 7px !important; padding-bottom: 7px !important; }
      body.tg-reduce-motion *, body.tg-reduce-motion *::before, body.tg-reduce-motion *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; }
${messengerDesignSystemStyles}
${googleSpinnerStyles}
    </style>
`;
