export const buildPrivacyHtml = ({
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
    <title>Политика конфиденциальности — TheGraphT</title>
    <meta name="description" content="Политика конфиденциальности TheGraphT: принципы нулевого сбора данных, сквозное шифрование и защита приватности." />
    
    <meta property="og:title" content="Конфиденциальность — TheGraphT" />
    <meta property="og:description" content="Принципы нулевого сбора данных, защита ключей и сквозное шифрование в TheGraphT." />
    <meta property="og:image" content="${logoDataUrl}" />
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

      .content-wrap {
        width: min(840px, calc(100% - 32px));
        margin: 0 auto;
        padding: 60px 0 90px;
      }

      .page-tag {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-muted);
        border: 1px solid var(--border);
        padding: 4px 12px;
        border-radius: 999px;
        display: inline-block;
        margin-bottom: 20px;
        background: var(--bg-subtle);
      }

      h1 {
        font-size: clamp(32px, 4.5vw, 48px);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.15;
        margin-bottom: 16px;
      }

      .page-desc {
        font-size: 17px;
        color: var(--text-muted);
        margin-bottom: 48px;
        line-height: 1.6;
      }

      .policy-card {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 28px;
        background: var(--bg-card);
        margin-bottom: 20px;
        transition: border-color 0.15s ease;
      }
      .policy-card:hover {
        border-color: var(--border-hover);
      }

      .policy-meta {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-dim);
        margin-bottom: 12px;
      }
      .policy-card h2 {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 10px;
        letter-spacing: -0.01em;
      }
      .policy-card p {
        font-size: 14.5px;
        color: var(--text-muted);
        line-height: 1.65;
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
      <div class="content-wrap">
        <div class="page-tag" data-i18n="priv_tag">// СТАНДАРТ БЕЗОПАСНОСТИ 2026</div>
        <h1 data-i18n="priv_h1">Политика конфиденциальности</h1>
        <p class="page-desc" data-i18n="priv_desc">TheGraphT спроектирован по фундаментальному принципу нулевого доверия и отсутствия сбора пользовательских данных.</p>

        <div class="policy-card">
          <div class="policy-meta">01 // ТЕЛЕМЕТРИЯ И СЛЕЖКА</div>
          <h2 data-i18n="c1_h">Полное отсутствие аналитики</h2>
          <p data-i18n="c1_p">Мы не используем сторонние SDK аналитики, рекламные трекеры и механизмы цифрового отпечатка. Ваша активность внутри приложения остаётся исключительно на вашем устройстве.</p>
        </div>

        <div class="policy-card">
          <div class="policy-meta">02 // ШИФРОВАНИЕ</div>
          <h2 data-i18n="c2_h">Сквозная изоляция переписки</h2>
          <p data-i18n="c2_p">Все личные сообщения и звонки защищены криптографическими протоколами со сквозным шифрованием. Серверная инфраструктура выступает только ретранслятором зашифрованных байтов и не имеет технической возможности прочитать содержимое сообщений.</p>
        </div>

        <div class="policy-card">
          <div class="policy-meta">03 // ХРАНЕНИЕ КЛЮЧЕЙ</div>
          <h2 data-i18n="c3_h">Локальные ключи авторизации</h2>
          <p data-i18n="c3_p">Ключи шифрования и сессионные маркеры генерируются и хранятся в защищённом локальном хранилище клиента. Они никогда не экспортируются и не передаются на центральные серверы.</p>
        </div>

        <div class="policy-card">
          <div class="policy-meta">04 // СУВЕРЕНИТЕТ</div>
          <h2 data-i18n="c4_h">Мгновенное удаление без следа</h2>
          <p data-i18n="c4_p">При удалении сообщения или сессии данные уничтожаются локально и немедленно стираются из кэша очередей. У нас нет скрытых теневых архивов или вечных логов активности.</p>
        </div>

        <div class="policy-card">
          <div class="policy-meta">05 // ТРЕТЬИ ЛИЦА</div>
          <h2 data-i18n="c5_h">Отказ от коммерциализации данных</h2>
          <p data-i18n="c5_p">TheGraphT разрабатывается коллективом Asymprote как общественное благо. Мы не монетизируем персональные данные, не продаём профили пользователей и не сотрудничаем с брокерами данных.</p>
        </div>
      </div>
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
        <div>v0.10.3 // Privacy Standard</div>
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
          priv_tag: "// СТАНДАРТ БЕЗОПАСНОСТИ 2026",
          priv_h1: "Политика конфиденциальности",
          priv_desc: "TheGraphT спроектирован по фундаментальному принципу нулевого доверия и отсутствия сбора пользовательских данных.",
          c1_h: "Полное отсутствие аналитики",
          c1_p: "Мы не используем сторонние SDK аналитики, рекламные трекеры и механизмы цифрового отпечатка. Ваша активность внутри приложения остаётся исключительно на вашем устройстве.",
          c2_h: "Сквозная изоляция переписки",
          c2_p: "Все личные сообщения и звонки защищены криптографическими протоколами со сквозным шифрованием. Серверная инфраструктура выступает только ретранслятором зашифрованных байтов и не имеет технической возможности прочитать содержимое сообщений.",
          c3_h: "Локальные ключи авторизации",
          c3_p: "Ключи шифрования и сессионные маркеры генерируются и хранятся в защищённом локальном хранилище клиента. Они никогда не экспортируются и не передаются на центральные серверы.",
          c4_h: "Мгновенное удаление без следа",
          c4_p: "При удалении сообщения или сессии данные уничтожаются локально и немедленно стираются из кэша очередей. У нас нет скрытых теневых архивов или вечных логов активности.",
          c5_h: "Отказ от коммерциализации данных",
          c5_p: "TheGraphT разрабатывается коллективом Asymprote как общественное благо. Мы не монетизируем персональные данные, не продаём профили пользователей и не сотрудничаем с брокерами данных."
        },
        en: {
          nav_features: "Features",
          nav_platforms: "Platforms",
          nav_tech: "Technologies",
          nav_asymprote: "Asymprote",
          btn_web_app: "Open Web App",
          priv_tag: "// SECURITY STANDARD 2026",
          priv_h1: "Privacy Policy",
          priv_desc: "TheGraphT is engineered on the foundational principle of zero-trust architecture and zero data collection.",
          c1_h: "Zero Telemetry & Trackers",
          c1_p: "We do not embed third-party analytics SDKs, advertising trackers, or digital fingerprinting libraries. Your activity remains solely on your local device.",
          c2_h: "End-to-End Isolation",
          c2_p: "All direct messages and calls are protected with client-side end-to-end encryption. The server infrastructure serves only as a relay and cannot decrypt message contents.",
          c3_h: "Local Key Storage",
          c3_p: "Encryption keys and session tokens are generated and stored exclusively in secure device storage. They are never transmitted to central servers.",
          c4_h: "Instant Trace-Free Deletion",
          c4_p: "Deleting a message or session purges it locally and immediately evicts it from queue caches. We maintain zero shadow archives or eternal activity logs.",
          c5_h: "Zero Data Commercialization",
          c5_p: "TheGraphT is developed by Asymprote collective as a public communication standard. We do not monetize user data or share information with commercial brokers."
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
