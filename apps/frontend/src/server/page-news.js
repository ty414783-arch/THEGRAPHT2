export const buildNewsHtml = ({
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
    <title>TheGraphT 2.0: Передовой мессенджер нового поколения — TheGraphT</title>
    <meta name="description" content="TheGraphT 2.0: Официальный анонс масштабного обновления. Сверхбыстрый протокол, Zero-Trust безопасность и релиз 22 августа 2026 года." />
    
    <meta property="og:title" content="TheGraphT 2.0 — Релиз 22 августа 2026" />
    <meta property="og:description" content="Масштабное обновление TheGraphT 2.0: суб-миллисекундный протокол и Zero-Trust безопасность." />
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

      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        font-family: var(--font-sans);
        background: var(--bg);
        color: var(--text-main);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        transition: background 0.2s ease, color 0.2s ease;
      }

      .topbar {
        position: fixed;
        top: 0; left: 0; right: 0;
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
      }
      .brand-wrap img { width: 28px; height: 28px; border-radius: 50%; }

      .nav-links { display: flex; align-items: center; gap: 24px; }
      .nav-links a { text-decoration: none; color: var(--text-muted); font-size: 14px; font-weight: 500; }
      .nav-links a:hover { color: var(--text-main); }

      .topbar-actions { display: flex; align-items: center; gap: 12px; }
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
      }
      .btn-primary {
        display: inline-flex;
        align-items: center;
        background: var(--accent);
        color: var(--accent-text) !important;
        text-decoration: none;
        height: 36px;
        padding: 0 16px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 13.5px;
      }

      main {
        padding-top: 64px;
      }

      .article-wrap {
        width: min(960px, calc(100% - 32px));
        margin: 0 auto;
        padding: 60px 0 100px;
      }

      .article-meta-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        font-family: var(--font-mono);
        font-size: 12.5px;
        color: var(--text-dim);
      }
      .article-badge {
        background: var(--bg-subtle);
        border: 1px solid var(--border);
        padding: 4px 10px;
        border-radius: 6px;
        color: var(--text-muted);
        font-weight: 600;
      }

      .article-h1 {
        font-size: clamp(34px, 5.5vw, 60px);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1.1;
        margin-bottom: 20px;
        color: var(--text-main);
      }

      .article-lead {
        font-size: clamp(17px, 2vw, 21px);
        color: var(--text-muted);
        line-height: 1.55;
        margin-bottom: 40px;
        max-width: 860px;
      }

      /* Hero Visual Media Banner */
      .news-media-box {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--border);
        background: #000000;
        margin-bottom: 60px;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
      }
      .news-media-box img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }
      .news-media-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.85) 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 36px;
      }
      .news-big-title {
        font-size: clamp(44px, 8vw, 96px);
        font-weight: 900;
        letter-spacing: -0.05em;
        line-height: 0.95;
        color: #ffffff;
        text-shadow: 0 10px 30px rgba(0,0,0,0.8);
      }
      .news-date-tag {
        font-family: var(--font-mono);
        font-size: 14px;
        font-weight: 700;
        color: #e4e4e7;
        margin-top: 12px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      /* Article Body */
      .article-content {
        max-width: 780px;
        margin: 0 auto;
      }

      .article-content h2 {
        font-size: clamp(22px, 3vw, 30px);
        font-weight: 700;
        letter-spacing: -0.02em;
        margin: 48px 0 16px;
        color: var(--text-main);
      }

      .article-content p {
        font-size: 16px;
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .article-highlight-card {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        background: var(--bg-card);
        margin: 32px 0;
      }
      .article-highlight-card h4 {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .article-highlight-card p {
        font-size: 14.5px;
        margin-bottom: 0;
      }

      .article-actions {
        margin-top: 48px;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

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
      .footer-links { display: flex; gap: 48px; flex-wrap: wrap; }
      .footer-col h6 { font-size: 13px; font-family: var(--font-mono); text-transform: uppercase; color: var(--text-dim); margin-bottom: 14px; }
      .footer-col a { display: block; color: var(--text-muted); text-decoration: none; font-size: 13.5px; margin-bottom: 10px; }
      .footer-col a:hover { color: var(--text-main); }
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
      }

      @media (max-width: 640px) {
        .nav-links { display: none; }
        .news-media-overlay { padding: 20px; }
      }
    </style>
  </head>
  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a href="/" class="brand-wrap">
          <img src="${logoDataUrl}" alt="TheGraphT" />
          <span>TheGraphT</span>
        </a>

        <nav class="nav-links">
          <a href="/#features" data-i18n="nav_features">Возможности</a>
          <a href="/#platforms" data-i18n="nav_platforms">Платформы</a>
          <a href="/technologies" data-i18n="nav_tech">Технологии</a>
          <a href="/asymprote" data-i18n="nav_asymprote">Asymprote</a>
          <a href="/faq">FAQ</a>
        </nav>

        <div class="topbar-actions">
          <button id="lang-toggle-btn" class="btn-icon">RU / EN</button>
          <button id="theme-toggle-btn" class="btn-icon">Theme</button>
          <a href="https://web.thegrapht.su" class="btn-primary" data-i18n="btn_web_app">Открыть Web App</a>
        </div>
      </div>
    </header>

    <main>
      <article class="article-wrap">
        <div class="article-meta-row">
          <span class="article-badge" data-i18n="news_badge">ГЛАВНЫЙ РЕЛИЗ</span>
          <span>22 августа 2026 г.</span>
          <span>·</span>
          <span data-i18n="news_read_time">6 мин чтения</span>
        </div>

        <h1 class="article-h1" data-i18n="news_h1">TheGraphT 2.0: Передовой мессенджер, созданный для абсолютной скорости и приватности</h1>
        <p class="article-lead" data-i18n="news_lead">Больше скорости на каждом пакете, суб-миллисекундная синхронизация, аппаратная оптимизация 120 FPS и Zero-Trust изоляция сессий. Официальный релиз обновления — 22 августа 2026 года.</p>

        <!-- Big Hero Visual -->
        <div class="news-media-box">
          <img src="/assets/thegrapht-2-hero.jpg" alt="TheGraphT 2.0 Cosmic Visual" />
          <div class="news-media-overlay">
            <div class="news-big-title">THEGRAPHT 2.0</div>
            <div class="news-date-tag" data-i18n="news_release_date">ОФИЦИАЛЬНЫЙ РЕЛИЗ // 22 АВГУСТА 2026</div>
          </div>
        </div>

        <div class="article-content">
          <h2 data-i18n="art_s1_h">1. Новая эра коммуникаций</h2>
          <p data-i18n="art_s1_p1">TheGraphT 2.0 — это фундаментальное обновление всей инфраструктуры и клиентских приложений. Мы полностью переписали сетевое ядро, отказавшись от любых сторонних тяжелых библиотек и промежуточных прокси в пользу прямого двухконтурного соединения.</p>
          <p data-i18n="art_s1_p2">В центре обновления — уважение к пользователю: нулевой сбор телеметрии, отсутствие рекламных трекеров и абсолютная прозрачность работы протокола.</p>

          <div class="article-highlight-card">
            <h4 data-i18n="art_hl1_h">⚡ Ключевые показатели TheGraphT 2.0:</h4>
            <p data-i18n="art_hl1_p">● Задержка доставки сообщений: менее 3 мс (Sub-3ms Sync)<br>● Потребление оперативной памяти: снижено на 65%<br>● Скорость рендеринга ленты: стабильные 120 FPS<br>● Архитектура безопасности: Zero-Trust E2E</p>
          </div>

          <h2 data-i18n="art_s2_h">2. Двухконтурный стек WebSocket + MTProto 2.0</h2>
          <p data-i18n="art_s2_p">Обновлённое ядро поддерживает интеллектуальное переключение между постоянным WebSocket-каналом и MTProto-туннелем. Если мобильная сеть нестабильна или глушит сокеты, транспорт мгновенно маршрутизирует пакеты через резервный MTProto-пул без разрыва текущей сессии.</p>

          <h2 data-i18n="art_s3_h">3. Zero-Trust криптографическое ядро</h2>
          <p data-i18n="art_s3_p">Ключи шифрования и сессионные маркеры создаются локально на вашем устройстве. Серверная часть выступает лишь криптографически слепым ретранслятором байтов. Никто — включая администраторов узлов — не может получить доступ к содержимому ваших диалогов.</p>

          <h2 data-i18n="art_s4_h">4. Дата выхода и доступность</h2>
          <p data-i18n="art_s4_p">Обновление TheGraphT 2.0 станет доступно <strong>22 августа 2026 года</strong> одновременно для всех платформ: Web App, нативного Android APK и настольных версий для Windows, Linux и macOS.</p>

          <div class="article-actions">
            <a href="https://web.thegrapht.su" class="btn-primary" style="padding: 12px 24px; height: auto;" data-i18n="btn_open_web">Открыть TheGraphT Web →</a>
            <a href="https://dl.thegrapht.su/thegrapht-v0.10.3.apk" class="btn-icon" style="padding: 12px 20px; height: auto; font-family: var(--font-sans);" data-i18n="btn_dl_apk">Скачать Android APK (.apk)</a>
          </div>
        </div>
      </article>
    </main>

    <footer>
      <div class="footer-inner">
        <div>
          <h5>TheGraphT</h5>
          <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 6px;">Быстрый защищённый мессенджер со сквозным шифрованием.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h6>Продукты</h6>
            <a href="https://web.thegrapht.su">TheGraphT Web</a>
            <a href="https://dl.thegrapht.su/thegrapht-v0.10.3.apk">Android APK</a>
            <a href="/#platforms">Desktop (Скоро)</a>
          </div>
          <div class="footer-col">
            <h6>Экосистема</h6>
            <a href="/asymprote">Asymprote Group</a>
            <a href="/faq">FAQ</a>
            <a href="/privacy">Конфиденциальность</a>
          </div>
          <div class="footer-col">
            <h6>Технологии</h6>
            <a href="/technologies">WebSocket & MTProto</a>
            <a href="/security">Zero-Trust E2E</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 Asymprote. All rights reserved.</div>
        <div>v0.10.3 // Release 22 Aug 2026</div>
      </div>
    </footer>

    <script>
      const dict = {
        ru: {
          nav_features: "Возможности",
          nav_platforms: "Платформы",
          nav_tech: "Технологии",
          nav_asymprote: "Asymprote",
          btn_web_app: "Открыть Web App",
          news_badge: "ГЛАВНЫЙ РЕЛИЗ",
          news_read_time: "6 мин чтения",
          news_h1: "TheGraphT 2.0: Передовой мессенджер, созданный для абсолютной скорости и приватности",
          news_lead: "Больше скорости на каждом пакете, суб-миллисекундная синхронизация, аппаратная оптимизация 120 FPS и Zero-Trust изоляция сессий. Официальный релиз обновления — 22 августа 2026 года.",
          news_release_date: "ОФИЦИАЛЬНЫЙ РЕЛИЗ // 22 АВГУСТА 2026",
          art_s1_h: "1. Новая эра коммуникаций",
          art_s1_p1: "TheGraphT 2.0 — это фундаментальное обновление всей инфраструктуры и клиентских приложений. Мы полностью переписали сетевое ядро, отказавшись от любых сторонних тяжелых библиотек и промежуточных прокси в пользу прямого двухконтурного соединения.",
          art_s1_p2: "В центре обновления — уважение к пользователю: нулевой сбор телеметрии, отсутствие рекламных трекеров и абсолютная прозрачность работы протокола.",
          art_hl1_h: "⚡ Ключевые показатели TheGraphT 2.0:",
          art_hl1_p: "● Задержка доставки сообщений: менее 3 мс (Sub-3ms Sync)<br>● Потребление оперативной памяти: снижено на 65%<br>● Скорость рендеринга ленты: стабильные 120 FPS<br>● Архитектура безопасности: Zero-Trust E2E",
          art_s2_h: "2. Двухконтурный стек WebSocket + MTProto 2.0",
          art_s2_p: "Обновлённое ядро поддерживает интеллектуальное переключение между постоянным WebSocket-каналом и MTProto-туннелем. Если мобильная сеть нестабильна или глушит сокеты, транспорт мгновенно маршрутизирует пакеты через резервный MTProto-пул без разрыва текущей сессии.",
          art_s3_h: "3. Zero-Trust криптографическое ядро",
          art_s3_p: "Ключи шифрования и сессионные маркеры создаются локально на вашем устройстве. Серверная часть выступает лишь криптографически слепым ретранслятором байтов. Никто — включая администраторов узлов — не может получить доступ к содержимому ваших диалогов.",
          art_s4_h: "4. Дата выхода и доступность",
          art_s4_p: "Обновление TheGraphT 2.0 станет доступно 22 августа 2026 года одновременно для всех платформ: Web App, нативного Android APK и настольных версий для Windows, Linux и macOS.",
          btn_open_web: "Открыть TheGraphT Web →",
          btn_dl_apk: "Скачать Android APK (.apk)"
        },
        en: {
          nav_features: "Features",
          nav_platforms: "Platforms",
          nav_tech: "Technologies",
          nav_asymprote: "Asymprote",
          btn_web_app: "Open Web App",
          news_badge: "MAJOR RELEASE",
          news_read_time: "6 min read",
          news_h1: "TheGraphT 2.0: Next-Generation Sovereign Messenger Built for Speed and Privacy",
          news_lead: "Maximum throughput per packet, sub-millisecond sync, 120 FPS GPU rendering, and Zero-Trust session isolation. Launching August 22, 2026.",
          news_release_date: "OFFICIAL RELEASE // AUGUST 22, 2026",
          art_s1_h: "1. A New Era of Communications",
          art_s1_p1: "TheGraphT 2.0 is a comprehensive overhaul of our entire network protocol and client ecosystem. We re-engineered the network stack from the ground up, eliminating bloated third-party dependencies.",
          art_s1_p2: "At the core of this release is user sovereignty: zero telemetry collection, zero trackers, and complete protocol transparency.",
          art_hl1_h: "⚡ TheGraphT 2.0 Key Metrics:",
          art_hl1_p: "● Message delivery latency: under 3ms (Sub-3ms Sync)<br>● Memory footprint: reduced by 65%<br>● UI framerate: rock-solid 120 FPS<br>● Security model: Zero-Trust E2E",
          art_s2_h: "2. Dual-Circuit WebSocket + MTProto 2.0",
          art_s2_p: "The upgraded core dynamically balances between a low-overhead WebSocket tunnel and an MTProto gateway fallback for instant reconnections.",
          art_s3_h: "3. Zero-Trust Cryptographic Core",
          art_s3_p: "Session keys are isolated in local device storage. The server infrastructure functions purely as an encrypted packet relay with zero decryption capabilities.",
          art_s4_h: "4. Launch Date & Availability",
          art_s4_p: "TheGraphT 2.0 launches on August 22, 2026 simultaneously across Web, native Android APK, and standalone Desktop applications.",
          btn_open_web: "Launch TheGraphT Web →",
          btn_dl_apk: "Download Android APK (.apk)"
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
