export const buildHomeHtml = ({
  inter400Url,
  inter500Url,
  inter600Url,
  inter700Url,
  inter800Url,
  logoDataUrl
}) => `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TheGraphT — Мессенджер без компромиссов</title>
    <meta name="description" content="TheGraphT: Быстрый, приватный мессенджер с WebSocket синхронизацией, MTProto, защитой сессий и сквозным шифрованием." />
    
    <meta property="og:title" content="TheGraphT — Мессенджер без компромиссов" />
    <meta property="og:description" content="Быстрый, приватный мессенджер со сквозным шифрованием и нулевым сбором данных. Релиз TheGraphT 2.0 — 22 августа 2026." />
    <meta property="og:image" content="/assets/thegrapht-2-hero.jpg" />
    <meta name="theme-color" content="#000000" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
      (function() {
        const savedTheme = localStorage.getItem('tg_theme');
        if (savedTheme === 'light') {
          document.documentElement.classList.remove('dark-theme');
        } else {
          document.documentElement.classList.add('dark-theme');
        }
      })();
    </script>

    <style>
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 400; src: url("${inter400Url}") format("truetype"); font-display: swap; }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 500; src: url("${inter500Url}") format("truetype"); font-display: swap; }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 600; src: url("${inter600Url}") format("truetype"); font-display: swap; }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 700; src: url("${inter700Url}") format("truetype"); font-display: swap; }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 800; src: url("${inter800Url}") format("truetype"); font-display: swap; }

      :root {
        --bg: #ffffff;
        --bg-subtle: #f8fafc;
        --bg-card: #ffffff;
        --bg-card-hover: #f1f5f9;
        --text-main: #000000;
        --text-muted: #64748b;
        --text-dim: #94a3b8;
        --border: #e2e8f0;
        --border-hover: #cbd5e1;
        --accent: #000000;
        --accent-hover: #1e293b;
        --accent-text: #ffffff;
        --font-mono: 'JetBrains Mono', ui-monospace, monospace;
        --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      /* Strict Cursor-Style Pitch Black Theme */
      html.dark-theme {
        --bg: #000000;
        --bg-subtle: #09090b;
        --bg-card: #0c0c0e;
        --bg-card-hover: #141418;
        --text-main: #f3f4f6;
        --text-muted: #8e8e99;
        --text-dim: #52525b;
        --border: rgba(255, 255, 255, 0.08);
        --border-hover: rgba(255, 255, 255, 0.16);
        --accent: #ffffff;
        --accent-hover: #e4e4e7;
        --accent-text: #000000;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
      }

      html, body {
        font-family: var(--font-sans);
        background: var(--bg);
        color: var(--text-main);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        transition: background 0.2s ease, color 0.2s ease;
      }

      /* ─── Topbar ──────────────────────────────────────────────────────────── */
      .topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        z-index: 1000;
        display: flex;
        align-items: center;
      }

      .topbar-inner {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .brand-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: var(--text-main);
        font-weight: 700;
        font-size: 17px;
        letter-spacing: -0.02em;
      }
      .brand-wrap img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .nav-links a {
        text-decoration: none;
        color: var(--text-muted);
        font-size: 14px;
        font-weight: 500;
        transition: color 0.15s ease;
      }
      .nav-links a:hover {
        color: var(--text-main);
      }

      .topbar-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-icon {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-muted);
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 12px;
        font-family: var(--font-mono);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      .btn-icon:hover {
        border-color: var(--border-hover);
        color: var(--text-main);
      }

      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        color: var(--accent-text) !important;
        text-decoration: none;
        height: 36px;
        padding: 0 16px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 13.5px;
        transition: opacity 0.15s ease;
      }
      .btn-primary:hover {
        opacity: 0.9;
      }

      /* ─── Hero Section ────────────────────────────────────────────────────── */
      main {
        padding-top: 64px;
      }

      .hero {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        padding: 64px 0 50px;
        text-align: center;
      }

      .hero h1 {
        font-size: clamp(38px, 6vw, 72px);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1.06;
        max-width: 960px;
        margin: 0 auto 20px;
        color: var(--text-main);
      }

      .hero p {
        font-size: clamp(16px, 1.8vw, 19px);
        color: var(--text-muted);
        max-width: 680px;
        margin: 0 auto 32px;
        line-height: 1.6;
      }

      .hero-actions {
        display: flex;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }

      .btn-hero-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        color: var(--accent-text);
        text-decoration: none;
        padding: 14px 28px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 15px;
        transition: opacity 0.15s ease;
      }
      .btn-hero-primary:hover {
        opacity: 0.9;
      }

      .btn-hero-secondary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--bg-subtle);
        border: 1px solid var(--border);
        color: var(--text-main);
        text-decoration: none;
        padding: 14px 24px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.15s ease;
      }
      .btn-hero-secondary:hover {
        border-color: var(--border-hover);
        background: var(--bg-card-hover);
      }

      .hero-specs-row {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-dim);
      }
      .hero-specs-row span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      /* ─── OpenAI Style Giant News Section ────────────────────────────────── */
      .news-section {
        width: min(1180px, calc(100% - 32px));
        margin: 40px auto 90px;
      }

      .news-section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      .news-section-title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--text-main);
      }
      .news-all-link {
        font-size: 13.5px;
        color: var(--text-muted);
        text-decoration: none;
        font-weight: 500;
      }
      .news-all-link:hover {
        color: var(--text-main);
      }

      .news-layout-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
      }

      /* Giant Featured Card */
      .news-card-big {
        border-radius: 16px;
        overflow: hidden;
        text-decoration: none;
        color: var(--text-main);
        display: flex;
        flex-direction: column;
        background: var(--bg-card);
        border: 1px solid var(--border);
        transition: border-color 0.2s ease, transform 0.2s ease;
      }
      .news-card-big:hover {
        border-color: var(--border-hover);
        transform: translateY(-3px);
      }

      .news-big-img-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #000000;
        overflow: hidden;
      }
      .news-big-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .news-big-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.9) 100%);
        display: flex;
        align-items: flex-end;
        padding: 32px;
      }
      .news-big-label {
        font-size: clamp(38px, 6vw, 76px);
        font-weight: 900;
        letter-spacing: -0.05em;
        line-height: 0.95;
        color: #ffffff;
      }

      .news-big-body {
        padding: 24px;
      }
      .news-big-body h3 {
        font-size: clamp(20px, 2.5vw, 26px);
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.25;
        margin-bottom: 12px;
        color: var(--text-main);
      }
      .news-meta-sub {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-dim);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* Side News Cards */
      .news-side-col {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .news-card-small {
        border: 1px solid var(--border);
        border-radius: 14px;
        background: var(--bg-card);
        text-decoration: none;
        color: var(--text-main);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
        transition: border-color 0.2s ease, transform 0.2s ease;
      }
      .news-card-small:hover {
        border-color: var(--border-hover);
        transform: translateY(-2px);
      }

      .news-sm-img-wrap {
        width: 100%;
        height: 130px;
        background: #000000;
        overflow: hidden;
      }
      .news-sm-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .news-sm-body {
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }
      .news-sm-body h4 {
        font-size: 15.5px;
        font-weight: 600;
        line-height: 1.35;
        margin-bottom: 10px;
      }

      /* ─── Clean Feature Grid (Cursor-Style) ──────────────────────────────── */
      .section {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto 90px;
      }

      .section-header {
        margin-bottom: 40px;
      }
      .section-tag {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 8px;
        display: block;
      }
      .section-header h2 {
        font-size: clamp(26px, 3.5vw, 36px);
        font-weight: 700;
        letter-spacing: -0.03em;
        color: var(--text-main);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }

      .feat-card {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        background: var(--bg-card);
        transition: border-color 0.15s ease, background 0.15s ease;
      }
      .feat-card:hover {
        border-color: var(--border-hover);
        background: var(--bg-card-hover);
      }

      .feat-num {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-dim);
        margin-bottom: 16px;
      }
      .feat-card h3 {
        font-size: 17px;
        font-weight: 600;
        margin-bottom: 8px;
        color: var(--text-main);
        letter-spacing: -0.01em;
      }
      .feat-card p {
        font-size: 14px;
        color: var(--text-muted);
        line-height: 1.6;
      }

      /* ─── Platform Hub ───────────────────────────────────────────────────── */
      .platforms-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }

      .platform-card {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        background: var(--bg-card);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 220px;
        text-decoration: none;
        color: var(--text-main);
        transition: border-color 0.15s ease, background 0.15s ease;
      }
      .platform-card:hover {
        border-color: var(--border-hover);
        background: var(--bg-card-hover);
      }

      .plat-icon {
        width: 36px;
        height: 36px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--bg-subtle);
        font-family: var(--font-mono);
        font-size: 14px;
        font-weight: 700;
      }
      .platform-card h4 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
      }
      .platform-card p {
        font-size: 13.5px;
        color: var(--text-muted);
        line-height: 1.5;
      }
      .plat-action {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-main);
        margin-top: 18px;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      /* ─── Asymprote Banner ───────────────────────────────────────────────── */
      .asymprote-box {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 36px;
        background: var(--bg-card);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
      }
      .asymprote-box h3 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .asymprote-box p {
        font-size: 14.5px;
        color: var(--text-muted);
        max-width: 600px;
        line-height: 1.6;
      }

      /* ─── Footer ─────────────────────────────────────────────────────────── */
      footer {
        border-top: 1px solid var(--border);
        padding: 48px 0 32px;
        background: var(--bg-subtle);
      }

      .footer-inner {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 32px;
        margin-bottom: 40px;
      }

      .footer-brand {
        max-width: 300px;
      }
      .footer-brand h5 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .footer-brand p {
        font-size: 13.5px;
        color: var(--text-muted);
        line-height: 1.6;
      }

      .footer-links {
        display: flex;
        gap: 48px;
        flex-wrap: wrap;
      }
      .footer-col h6 {
        font-size: 13px;
        font-family: var(--font-mono);
        text-transform: uppercase;
        color: var(--text-dim);
        margin-bottom: 14px;
      }
      .footer-col a {
        display: block;
        color: var(--text-muted);
        text-decoration: none;
        font-size: 13.5px;
        margin-bottom: 10px;
        transition: color 0.15s ease;
      }
      .footer-col a:hover {
        color: var(--text-main);
      }

      .footer-bottom {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        padding-top: 24px;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        font-size: 12.5px;
        font-family: var(--font-mono);
        color: var(--text-dim);
        flex-wrap: wrap;
        gap: 12px;
      }

      @media (max-width: 900px) {
        .news-layout-grid { grid-template-columns: 1fr; }
        .features-grid { grid-template-columns: 1fr; }
        .platforms-grid { grid-template-columns: 1fr 1fr; }
        .asymprote-box { flex-direction: column; align-items: flex-start; }
      }
      @media (max-width: 640px) {
        .nav-links { display: none; }
        .platforms-grid { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <!-- Topbar -->
    <header class="topbar">
      <div class="topbar-inner">
        <a href="/" class="brand-wrap">
          <img src="${logoDataUrl}" alt="TheGraphT" />
          <span>TheGraphT</span>
        </a>

        <nav class="nav-links">
          <a href="/thegrapht-2-0" style="color: var(--accent); font-weight: 600;">TheGraphT 2.0</a>
          <a href="#features" data-i18n="nav_features">Возможности</a>
          <a href="#platforms" data-i18n="nav_platforms">Платформы</a>
          <a href="/technologies" data-i18n="nav_tech">Технологии</a>
          <a href="/asymprote" data-i18n="nav_asymprote">Asymprote</a>
          <a href="/faq">FAQ</a>
        </nav>

        <div class="topbar-actions">
          <button id="lang-toggle-btn" class="btn-icon" aria-label="Language">RU / EN</button>
          <button id="theme-toggle-btn" class="btn-icon" aria-label="Theme">Theme</button>
          <a href="https://web.thegrapht.su" class="btn-primary" data-i18n="btn_web_app">Открыть Web App</a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="hero">
        <h1 data-i18n="hero_h1">TheGraphT — мессенджер без компромиссов.</h1>
        <p data-i18n="hero_p">Быстрый, приватный, синхронизируется между всеми устройствами. Сквозное шифрование сессий и нулевой сбор данных.</p>

        <div class="hero-actions">
          <a href="https://web.thegrapht.su" class="btn-hero-primary" data-i18n="btn_launch_web">Открыть в браузере →</a>
          <a href="https://dl.thegrapht.su/thegrapht-v0.10.3.apk" download="thegrapht-v0.10.3.apk" class="btn-hero-secondary" data-i18n="btn_dl_apk">Android APK (.apk)</a>
        </div>

        <div class="hero-specs-row">
          <span>● WebSocket Sub-5ms</span>
          <span>● MTProto Dual-Pipe</span>
          <span>● E2E Memory Isolated</span>
          <span>● 0% Telemetry</span>
        </div>
      </section>

      <!-- OpenAI-style Featured News Section -->
      <section class="news-section">
        <div class="news-section-head">
          <h2 class="news-section-title" data-i18n="news_sec_title">Последние новости</h2>
          <a href="/thegrapht-2-0" class="news-all-link" data-i18n="news_sec_more">Подробнее о TheGraphT 2.0 →</a>
        </div>

        <div class="news-layout-grid">
          <!-- Giant Hero News Card -->
          <a href="/thegrapht-2-0" class="news-card-big">
            <div class="news-big-img-wrap">
              <img src="/assets/thegrapht-2-hero.jpg" alt="TheGraphT 2.0 Cosmic Horizon" />
              <div class="news-big-overlay">
                <div class="news-big-label">THEGRAPHT 2.0</div>
              </div>
            </div>
            <div class="news-big-body">
              <h3 data-i18n="big_card_h">TheGraphT 2.0: Передовой мессенджер, соразмерный вашим амбициям</h3>
              <div class="news-meta-sub">
                <span data-i18n="tag_release">Релиз</span>
                <span>·</span>
                <span>22 авг. 2026 г.</span>
                <span>·</span>
                <span data-i18n="read_time">6 мин чтения</span>
              </div>
            </div>
          </a>

          <!-- Side News Column -->
          <div class="news-side-col">
            <a href="/thegrapht-2-0" class="news-card-small">
              <div class="news-sm-img-wrap">
                <img src="/assets/news-amber.jpg" alt="WebSocket 2.0 Amber Wave" />
              </div>
              <div class="news-sm-body">
                <h4 data-i18n="sm_card1_h">Двухконтурный стек: доставка сообщений с задержкой менее 3 мс</h4>
                <div class="news-meta-sub">
                  <span data-i18n="tag_proto">Протокол</span>
                  <span>·</span>
                  <span>22 авг. 2026 г.</span>
                </div>
              </div>
            </a>

            <a href="/thegrapht-2-0" class="news-card-small">
              <div class="news-sm-img-wrap">
                <img src="/assets/news-cyan.jpg" alt="Zero-Trust Cyan Wave" />
              </div>
              <div class="news-sm-body">
                <h4 data-i18n="sm_card2_h">Zero-Trust V2: локальная изоляция ключей и 0% телеметрии</h4>
                <div class="news-meta-sub">
                  <span data-i18n="tag_sec">Безопасность</span>
                  <span>·</span>
                  <span>22 авг. 2026 г.</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Features (6 Strict Cards) -->
      <section id="features" class="section">
        <div class="section-header">
          <span class="section-tag" data-i18n="feat_tag">// ВОЗМОЖНОСТИ</span>
          <h2 data-i18n="feat_title">Сделано для работы, а не показухи.</h2>
        </div>

        <div class="features-grid">
          <div class="feat-card">
            <div class="feat-num">01 // ТРАНСПОРТ</div>
            <h3 data-i18n="f1_h">Мгновенная доставка</h3>
            <p data-i18n="f1_p">Прямой WebSocket и изолированный MTProto-прокси для мгновенной доставки сообщений без задержек даже в нестабильных мобильных сетях.</p>
          </div>

          <div class="feat-card">
            <div class="feat-num">02 // БЕЗОПАСНОСТЬ</div>
            <h3 data-i18n="f2_h">Сквозное шифрование</h3>
            <p data-i18n="f2_p">E2E-шифрование и локальная изоляция ключей сессий. Никаких трекеров, рекламы и сбора скрытой аналитики.</p>
          </div>

          <div class="feat-card">
            <div class="feat-num">03 // ОРГАНИЗАЦИЯ</div>
            <h3 data-i18n="f3_h">Умная организация диалогов</h3>
            <p data-i18n="f3_p">Мгновенный поиск по переписке, закрепление чатов и сохранение важных заметок и файлов без ограничений.</p>
          </div>

          <div class="feat-card">
            <div class="feat-num">04 // СИНХРОНИЗАЦИЯ</div>
            <h3 data-i18n="f4_h">Единая экосистема</h3>
            <p data-i18n="f4_p">Мгновенная синхронизация состояния между Web, Android и Desktop: прочитанность, черновики и история диалогов.</p>
          </div>

          <div class="feat-card">
            <div class="feat-num">05 // МУЛЬТИМЕДИА</div>
            <h3 data-i18n="f5_h">Dynamic Island и медиа</h3>
            <p data-i18n="f5_p">Плавающий мини-плеер с контролем скорости воспроизведения, голосовые сообщения в высоком качестве и быстрый просмотр фото.</p>
          </div>

          <div class="feat-card">
            <div class="feat-num">06 // НЕЗАВИСИМОСТЬ</div>
            <h3 data-i18n="f6_h">Открытый стандарт</h3>
            <p data-i18n="f6_p">Независимая инфраструктура, разработанная коллективом Asymprote для приватного и свободного общения.</p>
          </div>
        </div>
      </section>

      <!-- Platforms (Telegram/Cursor Style) -->
      <section id="platforms" class="section">
        <div class="section-header">
          <span class="section-tag" data-i18n="plat_tag">// ПЛАТФОРМЫ</span>
          <h2 data-i18n="plat_title">Доступен на всех ваших устройствах.</h2>
        </div>

        <div class="platforms-grid">
          <a href="https://web.thegrapht.su" class="platform-card">
            <div>
              <div class="plat-icon">WEB</div>
              <h4>TheGraphT Web</h4>
              <p data-i18n="p_web_desc">Работает в любом современном браузере на смартфонах и ПК без установки.</p>
            </div>
            <div class="plat-action" data-i18n="p_web_act">Открыть в браузере →</div>
          </a>

          <a href="https://dl.thegrapht.su/thegrapht-v0.10.3.apk" download="thegrapht-v0.10.3.apk" class="platform-card">
            <div>
              <div class="plat-icon">APK</div>
              <h4>TheGraphT Android</h4>
              <p data-i18n="p_apk_desc">Нативный клиент для Android с поддержкой push-уведомлений и фоновой синхронизации.</p>
            </div>
            <div class="plat-action" data-i18n="p_apk_act">Скачать .apk →</div>
          </a>

          <a href="#platforms" class="platform-card">
            <div>
              <div class="plat-icon">DESK</div>
              <h4>TheGraphT Desktop</h4>
              <p data-i18n="p_desk_desc">Автономное настольное приложение для macOS, Linux и Windows.</p>
            </div>
            <div class="plat-action" data-i18n="p_desk_act">Скоро доступно →</div>
          </a>

          <a href="/asymprote" class="platform-card">
            <div>
              <div class="plat-icon">SEC</div>
              <h4 data-i18n="p_sec_title">Безопасность</h4>
              <p data-i18n="p_sec_desc">Открытый манифест Asymprote и стандарты сквозной конфиденциальности.</p>
            </div>
            <div class="plat-action" data-i18n="p_sec_act">Манифест →</div>
          </a>
        </div>
      </section>

      <!-- Asymprote Collective Section -->
      <section class="section">
        <div class="asymprote-box">
          <div>
            <span class="section-tag">// ASYMPROTE COLLECTIVE</span>
            <h3 data-i18n="asym_h">Создано для людей, а не для корпораций.</h3>
            <p data-i18n="asym_p">TheGraphT разрабатывается независимым коллективом Asymprote как открытый инструмент для свободного и защищённого общения без коммерческой слежки и продажи данных.</p>
          </div>
          <a href="/asymprote" class="btn-hero-secondary" style="white-space: nowrap;" data-i18n="asym_act">Манифест Asymprote →</a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <h5>TheGraphT</h5>
          <p data-i18n="foot_desc">Быстрый защищённый мессенджер со сквозным шифрованием и синхронизацией сессий.</p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h6>Продукты</h6>
            <a href="https://web.thegrapht.su">TheGraphT Web</a>
            <a href="https://dl.thegrapht.su/thegrapht-v0.10.3.apk">Android APK</a>
            <a href="/#platforms">Desktop (Скоро)</a>
            <a href="/thegrapht-2-0">TheGraphT 2.0 (Релиз)</a>
          </div>

          <div class="footer-col">
            <h6>Экосистема</h6>
            <a href="/asymprote">Asymprote Group</a>
            <a href="/faq">FAQ</a>
            <a href="/privacy" data-i18n="foot_priv">Конфиденциальность</a>
          </div>

          <div class="footer-col">
            <h6>Технологии</h6>
            <a href="/technologies">WebSocket & MTProto</a>
            <a href="/security">Zero-Trust E2E</a>
            <a href="/thegrapht-2-0">Спецификация 2.0</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 Asymprote. All rights reserved.</div>
        <div>TheGraphT 2.0 // Launch 22 August 2026</div>
      </div>
    </footer>

    <!-- Scripts (Language & Theme Toggle) -->
    <script>
      const dict = {
        ru: {
          nav_features: "Возможности",
          nav_platforms: "Платформы",
          nav_tech: "Технологии",
          nav_asymprote: "Asymprote",
          btn_web_app: "Открыть Web App",
          hero_h1: "TheGraphT — мессенджер без компромиссов.",
          hero_p: "Быстрый, приватный, синхронизируется между всеми устройствами. Сквозное шифрование сессий и нулевой сбор данных.",
          btn_launch_web: "Открыть в браузере →",
          btn_dl_apk: "Android APK (.apk)",
          news_sec_title: "Последние новости",
          news_sec_more: "Подробнее о TheGraphT 2.0 →",
          big_card_h: "TheGraphT 2.0: Передовой мессенджер, соразмерный вашим амбициям",
          tag_release: "Релиз",
          read_time: "6 мин чтения",
          sm_card1_h: "Двухконтурный стек: доставка сообщений с задержкой менее 3 мс",
          tag_proto: "Протокол",
          sm_card2_h: "Zero-Trust V2: локальная изоляция ключей и 0% телеметрии",
          tag_sec: "Безопасность",
          feat_tag: "// ВОЗМОЖНОСТИ",
          feat_title: "Сделано для работы, а не показухи.",
          f1_h: "Мгновенная доставка",
          f1_p: "Прямой WebSocket и изолированный MTProto-прокси для мгновенной доставки сообщений без задержек даже в нестабильных мобильных сетях.",
          f2_h: "Сквозное шифрование",
          f2_p: "E2E-шифрование и локальная изоляция ключей сессий. Никаких трекеров, рекламы и сбора скрытой аналитики.",
          f3_h: "Умная организация диалогов",
          f3_p: "Мгновенный поиск по переписке, закрепление чатов и сохранение важных заметок и файлов без ограничений.",
          f4_h: "Единая экосистема",
          f4_p: "Мгновенная синхронизация состояния между Web, Android и Desktop: прочитанность, черновики и история диалогов.",
          f5_h: "Dynamic Island и медиа",
          f5_p: "Плавающий мини-плеер с контролем скорости воспроизведения, голосовые сообщения в высоком качестве и быстрый просмотр фото.",
          f6_h: "Открытый стандарт",
          f6_p: "Независимая инфраструктура, разработанная коллективом Asymprote для приватного и свободного общения.",
          plat_tag: "// ПЛАТФОРМЫ",
          plat_title: "Доступен на всех ваших устройствах.",
          p_web_desc: "Работает в любом современном браузере на смартфонах и ПК без установки.",
          p_web_act: "Открыть в браузере →",
          p_apk_desc: "Нативный клиент для Android с поддержкой push-уведомлений и фоновой синхронизации.",
          p_apk_act: "Скачать .apk →",
          p_desk_desc: "Автономное настольное приложение для macOS, Linux и Windows.",
          p_desk_act: "Скоро доступно →",
          p_sec_title: "Безопасность",
          p_sec_desc: "Открытый манифест Asymprote и стандарты сквозной конфиденциальности.",
          p_sec_act: "Манифест →",
          asym_h: "Создано для людей, а не для корпораций.",
          asym_p: "TheGraphT разрабатывается независимым коллективом Asymprote как открытый инструмент для свободного и защищённого общения без коммерческой слежки и продажи данных.",
          asym_act: "Манифест Asymprote →",
          foot_desc: "Быстрый защищённый мессенджер со сквозным шифрованием и синхронизацией сессий.",
          foot_priv: "Конфиденциальность"
        },
        en: {
          nav_features: "Features",
          nav_platforms: "Platforms",
          nav_tech: "Technologies",
          nav_asymprote: "Asymprote",
          btn_web_app: "Open Web App",
          hero_h1: "TheGraphT — Messaging without compromises.",
          hero_p: "Fast, private, seamlessly synced across all your devices. End-to-end session encryption and zero data collection.",
          btn_launch_web: "Launch in Browser →",
          btn_dl_apk: "Android APK (.apk)",
          news_sec_title: "Latest News",
          news_sec_more: "Read about TheGraphT 2.0 →",
          big_card_h: "TheGraphT 2.0: Next-Generation Sovereign Messenger Built for Scale",
          tag_release: "Release",
          read_time: "6 min read",
          sm_card1_h: "Dual-circuit stack: sub-3ms message delivery latency",
          tag_proto: "Protocol",
          sm_card2_h: "Zero-Trust V2: isolated session keys and 0% telemetry",
          tag_sec: "Security",
          feat_tag: "// CAPABILITIES",
          feat_title: "Built for performance, not hype.",
          f1_h: "Instant Delivery",
          f1_p: "Direct WebSocket and isolated MTProto proxy for zero-delay message delivery even on congested cellular networks.",
          f2_h: "End-to-End Encryption",
          f2_p: "E2E encryption and isolated memory session keys. Zero trackers, zero ads, and zero covert telemetry.",
          f3_h: "Smart Organization",
          f3_p: "Instant message search, pinned chats, and uncompressed saved notes and files.",
          f4_h: "Unified Ecosystem",
          f4_p: "Instantaneous state sync across Web, Android, and Desktop: read receipts, drafts, and media history.",
          f5_h: "Dynamic Island & Media",
          f5_p: "Floating mini-player with speed controls, high-fidelity voice notes, and seamless gesture photo viewing.",
          f6_h: "Open Standard",
          f6_p: "Independent infrastructure engineered by Asymprote collective for private and sovereign communications.",
          plat_tag: "// PLATFORMS",
          plat_title: "Available across all your devices.",
          p_web_desc: "Runs instantly in any modern desktop or mobile browser without installation.",
          p_web_act: "Open in Browser →",
          p_apk_desc: "Native Android client with push notification support and background sync.",
          p_apk_act: "Download .apk →",
          p_desk_desc: "Standalone native desktop application for macOS, Linux, and Windows.",
          p_desk_act: "Coming Soon →",
          p_sec_title: "Security",
          p_sec_desc: "Open Asymprote manifesto and sovereign end-to-end privacy standards.",
          p_sec_act: "Manifesto →",
          asym_h: "Built for people, not corporations.",
          asym_p: "TheGraphT is engineered by the independent Asymprote collective as an open tool for free and sovereign communication without surveillance.",
          asym_act: "Read Asymprote Manifesto →",
          foot_desc: "Fast, secure messenger with end-to-end session encryption and zero telemetry.",
          foot_priv: "Privacy Policy"
        }
      };

      let lang = localStorage.getItem('tg_lang') || 'ru';

      function updateLang(newLang) {
        lang = newLang;
        localStorage.setItem('tg_lang', lang);
        document.documentElement.lang = lang;
        const d = dict[lang] || dict.ru;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
          const k = el.getAttribute('data-i18n');
          if (d[k]) el.innerHTML = d[k];
        });
      }

      document.getElementById('lang-toggle-btn')?.addEventListener('click', () => {
        updateLang(lang === 'ru' ? 'en' : 'ru');
      });

      updateLang(lang);

      document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark-theme');
        localStorage.setItem('tg_theme', isDark ? 'dark' : 'light');
      });
    </script>
  </body>
</html>`;