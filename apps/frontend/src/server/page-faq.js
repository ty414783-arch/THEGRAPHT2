export const buildFaqHtml = ({
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
    <title>Технологии и Документация — TheGraphT</title>
    <meta name="description" content="Техническая спецификация архитектуры, безопасность, протокол WebSocket/MTProto и FAQ платформы TheGraphT." />
    
    <meta property="og:title" content="Технологии & FAQ — TheGraphT" />
    <meta property="og:description" content="Спецификация WebSocket и MTProto, модель Zero-Trust безопасности и FAQ TheGraphT." />
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
        width: min(900px, calc(100% - 32px));
        margin: 0 auto;
        padding: 60px 0 90px;
      }

      .tab-bar {
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
        border-bottom: 1px solid var(--border);
        padding-bottom: 12px;
        overflow-x: auto;
      }
      .tab-btn {
        background: transparent;
        border: 1px solid transparent;
        color: var(--text-muted);
        padding: 8px 16px;
        border-radius: 8px;
        font-family: var(--font-mono);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.15s ease;
      }
      .tab-btn:hover {
        color: var(--text-main);
        background: var(--bg-subtle);
      }
      .tab-btn.active {
        background: var(--accent);
        color: var(--accent-text);
        border-color: var(--accent);
      }

      .section-block {
        margin-bottom: 60px;
      }

      .page-tag {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-muted);
        border: 1px solid var(--border);
        padding: 4px 12px;
        border-radius: 999px;
        display: inline-block;
        margin-bottom: 16px;
        background: var(--bg-subtle);
      }

      h1 {
        font-size: clamp(30px, 4vw, 44px);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.15;
        margin-bottom: 16px;
      }

      .page-desc {
        font-size: 16.5px;
        color: var(--text-muted);
        margin-bottom: 36px;
        line-height: 1.6;
      }

      .doc-card {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 26px;
        background: var(--bg-card);
        margin-bottom: 16px;
        transition: border-color 0.15s ease;
      }
      .doc-card:hover {
        border-color: var(--border-hover);
      }

      .doc-meta {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-dim);
        margin-bottom: 10px;
      }
      .doc-card h3 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: -0.01em;
      }
      .doc-card p {
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
        <div class="tab-bar">
          <a href="#tech" class="tab-btn active" data-i18n="t_tech">Технологии</a>
          <a href="#product" class="tab-btn" data-i18n="t_prod">Архитектура</a>
          <a href="#security" class="tab-btn" data-i18n="t_sec">Безопасность</a>
          <a href="#faq" class="tab-btn">FAQ</a>
        </div>

        <!-- Section: Technologies -->
        <section id="tech" class="section-block">
          <div class="page-tag" data-i18n="tag_tech">// ТЕХНОЛОГИЧЕСКИЙ СТЕК</div>
          <h1 data-i18n="h_tech">Сетевой протокол и производительность</h1>
          <p class="page-desc" data-i18n="desc_tech">Архитектура TheGraphT базируется на высокопроизводительном ядре со сверхнизкой задержкой.</p>

          <div class="doc-card">
            <div class="doc-meta">01 // ТРАНСПОРТ</div>
            <h3 data-i18n="dc1_h">Двухконтурный стек WebSocket + MTProto</h3>
            <p data-i18n="dc1_p">Постоянное дуплексное WebSocket-соединение с резервным MTProto-шлюзом гарантирует доставку сообщений с пингом до 5 мс и автоматическое переподключение без разрыва сессии.</p>
          </div>

          <div class="doc-card">
            <div class="doc-meta">02 // РЕНДЕРИНГ</div>
            <h3 data-i18n="dc2_h">Аппаратное ускорение и 120 FPS</h3>
            <p data-i18n="dc2_p">Виртуализированные списки сообщений, легковесный CSS-слой без тяжелых сторонних фреймворков и оптимизированная отрисовка медиа гарантируют стабильные 120 кадров/с.</p>
          </div>

          <div class="doc-card">
            <div class="doc-meta">03 // ОФЛАЙН И КЭШ</div>
            <h3 data-i18n="dc3_h">Локальный буфер и оптимистичные апдейты</h3>
            <p data-i18n="dc3_p">Сообщения мгновенно отображаются в интерфейсе при отправке, сохраняются в локальный IndexedDB/SQLite кэш и синхронизируются с сервером при восстановлении связи.</p>
          </div>
        </section>

        <!-- Section: Product -->
        <section id="product" class="section-block">
          <div class="page-tag" data-i18n="tag_prod">// ПРОДУКТОВАЯ ЭКОСИСТЕМА</div>
          <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px;" data-i18n="h_prod">Единый клиент на всех платформах</h2>
          <p class="page-desc" data-i18n="desc_prod">Мгновенный обмен сообщениями, аудио и медиа без привязки к проприетарным сервисам.</p>

          <div class="doc-card">
            <div class="doc-meta">01 // КЛИЕНТЫ</div>
            <h3 data-i18n="dc4_h">Web, Android APK и Desktop</h3>
            <p data-i18n="dc4_p">Работает в браузере без установки, нативно на смартфонах с Android и в виде отдельного быстрого приложения для настольных операционных систем.</p>
          </div>

          <div class="doc-card">
            <div class="doc-meta">02 // МУЛЬТИМЕДИА</div>
            <h3 data-i18n="dc5_h">Dynamic Island аудиоплеер и медиа без сжатия</h3>
            <p data-i18n="dc5_p">Встроенный плавающий плеер поддерживает непрерывное воспроизведение подкастов и голосовых заметок в высоком битрейте (48kHz Lossless) с изменением скорости.</p>
          </div>
        </section>

        <!-- Section: Security -->
        <section id="security" class="section-block">
          <div class="page-tag" data-i18n="tag_sec">// МОДЕЛЬ БЕЗОПАСНОСТИ</div>
          <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px;" data-i18n="h_sec">Криптографическая изоляция</h2>
          <p class="page-desc" data-i18n="desc_sec">Zero-Trust подход к хранению и передаче пользовательских пакетов.</p>

          <div class="doc-card">
            <div class="doc-meta">01 // КЛЮЧИ</div>
            <h3 data-i18n="dc6_h">Локальная генерация и хранение</h3>
            <p data-i18n="dc6_p">Криптографические ключи создаются на устройстве пользователя и изолированы в локальной памяти. Сервер не имеет доступа к закрытым ключам клиентов.</p>
          </div>

          <div class="doc-card">
            <div class="doc-meta">02 // ТЕЛЕМЕТРИЯ</div>
            <h3 data-i18n="dc7_h">0% скрытой аналитики</h3>
            <p data-i18n="dc7_p">Полный отказ от Google Analytics, трекеров активности и сбора системных идентификаторов.</p>
          </div>
        </section>

        <!-- Section: FAQ -->
        <section id="faq" class="section-block">
          <div class="page-tag" data-i18n="tag_faq">// ВОПРОСЫ И ОТВЕТЫ</div>
          <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px;" data-i18n="h_faq">Часто задаваемые вопросы</h2>
          <p class="page-desc" data-i18n="desc_faq">Краткие ответы на ключевые вопросы о платформе TheGraphT.</p>

          <div class="doc-card">
            <h3 data-i18n="faq1_q">Нужно ли устанавливать приложение для работы?</h3>
            <p data-i18n="faq1_a">Нет. TheGraphT Web работает мгновенно в любом современном браузере. Для мобильных устройств доступен нативный Android APK с фоновыми уведомлениями.</p>
          </div>

          <div class="doc-card">
            <h3 data-i18n="faq2_q">Где хранятся мои сообщения?</h3>
            <p data-i18n="faq2_a">Сообщения хранятся в защищённом виде на вашем устройстве и временно в очереди доставки до получения адресатом.</p>
          </div>

          <div class="doc-card">
            <h3 data-i18n="faq3_q">Кто разрабатывает TheGraphT?</h3>
            <p data-i18n="faq3_a">Проект разрабатывается независимым коллективом Asymprote как суверенная коммуникационная платформа для свободного общения.</p>
          </div>
        </section>
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
        <div>v0.10.3 // Technical Specs</div>
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
          t_tech: "Технологии",
          t_prod: "Архитектура",
          t_sec: "Безопасность",
          tag_tech: "// ТЕХНОЛОГИЧЕСКИЙ СТЕК",
          h_tech: "Сетевой протокол и производительность",
          desc_tech: "Архитектура TheGraphT базируется на высокопроизводительном ядре со сверхнизкой задержкой.",
          dc1_h: "Двухконтурный стек WebSocket + MTProto",
          dc1_p: "Постоянное дуплексное WebSocket-соединение с резервным MTProto-шлюзом гарантирует доставку сообщений с пингом до 5 мс и автоматическое переподключение без разрыва сессии.",
          dc2_h: "Аппаратное ускорение и 120 FPS",
          dc2_p: "Виртуализированные списки сообщений, легковесный CSS-слой без тяжелых сторонних фреймворков и оптимизированная отрисовка медиа гарантируют стабильные 120 кадров/с.",
          dc3_h: "Локальный буфер и оптимистичные апдейты",
          dc3_p: "Сообщения мгновенно отображаются в интерфейсе при отправке, сохраняются в локальный IndexedDB/SQLite кэш и синхронизируются с сервером при восстановлении связи.",
          tag_prod: "// ПРОДУКТОВАЯ ЭКОСИСТЕМА",
          h_prod: "Единый клиент на всех платформах",
          desc_prod: "Мгновенный обмен сообщениями, аудио и медиа без привязки к проприетарным сервисам.",
          dc4_h: "Web, Android APK и Desktop",
          dc4_p: "Работает в браузере без установки, нативно на смартфонах с Android и в виде отдельного быстрого приложения для настольных операционных систем.",
          dc5_h: "Dynamic Island аудиоплеер и медиа без сжатия",
          dc5_p: "Встроенный плавающий плеер поддерживает непрерывное воспроизведение подкастов и голосовых заметок в высоком битрейте (48kHz Lossless) с изменением скорости.",
          tag_sec: "// МОДЕЛЬ БЕЗОПАСНОСТИ",
          h_sec: "Криптографическая изоляция",
          desc_sec: "Zero-Trust подход к хранению и передаче пользовательских пакетов.",
          dc6_h: "Локальная генерация и хранение",
          dc6_p: "Криптографические ключи создаются на устройстве пользователя и изолированы в локальной памяти. Сервер не имеет доступа к закрытым ключам клиентов.",
          dc7_h: "0% скрытой аналитики",
          dc7_p: "Полный отказ от Google Analytics, трекеров активности и сбора системных идентификаторов.",
          tag_faq: "// ВОПРОСЫ И ОТВЕТЫ",
          h_faq: "Часто задаваемые вопросы",
          desc_faq: "Краткие ответы на ключевые вопросы о платформе TheGraphT.",
          faq1_q: "Нужно ли устанавливать приложение для работы?",
          faq1_a: "Нет. TheGraphT Web работает мгновенно в любом современном браузере. Для мобильных устройств доступен нативный Android APK с фоновыми уведомлениями.",
          faq2_q: "Где хранятся мои сообщения?",
          faq2_a: "Сообщения хранятся в защищённом виде на вашем устройстве и временно в очереди доставки до получения адресатом.",
          faq3_q: "Кто разрабатывает TheGraphT?",
          faq3_a: "Проект разрабатывается независимым коллективом Asymprote как суверенная коммуникационная платформа для свободного общения."
        },
        en: {
          nav_features: "Features",
          nav_platforms: "Platforms",
          nav_tech: "Technologies",
          nav_asymprote: "Asymprote",
          btn_web_app: "Open Web App",
          t_tech: "Technologies",
          t_prod: "Architecture",
          t_sec: "Security",
          tag_tech: "// TECHNOLOGY STACK",
          h_tech: "Network Protocol & Throughput",
          desc_tech: "TheGraphT architecture runs on a high-throughput sub-5ms latency network core.",
          dc1_h: "Dual-Pipe WebSocket + MTProto",
          dc1_p: "Persistent full-duplex WebSocket with MTProto gateway fallback ensures sub-5ms message dispatch and zero-drop reconnection.",
          dc2_h: "Hardware Accelerated 120 FPS",
          dc2_p: "Virtualized list virtualization, lightweight vanilla styling, and GPU-composited rendering deliver rock-solid 120 FPS scroll performance.",
          dc3_h: "Local Offline Buffer & Optimistic Updates",
          dc3_p: "Messages render immediately upon dispatch, store in local IndexedDB/SQLite cache, and reconcile with the cluster upon reconnect.",
          tag_prod: "// PRODUCT ECOSYSTEM",
          h_prod: "Unified Client Across All Platforms",
          desc_prod: "Instant messaging, audio, and media without vendor-locked dependencies.",
          dc4_h: "Web, Android APK & Desktop",
          dc4_p: "Zero-install modern web browser client, native Android APK with push support, and native desktop clients for macOS, Linux, and Windows.",
          dc5_h: "Dynamic Island Player & Uncompressed Media",
          dc5_p: "Floating mini-player supporting continuous playback of high-fidelity voice messages (48kHz Lossless) with variable playback speeds.",
          tag_sec: "// SECURITY MODEL",
          h_sec: "Cryptographic Isolation",
          desc_sec: "Zero-Trust architecture applied to user payload storage and delivery.",
          dc6_h: "Local Key Generation & Storage",
          dc6_p: "Cryptographic keys are created locally and kept in isolated device memory. The central servers possess zero client private keys.",
          dc7_h: "0% Hidden Analytics",
          dc7_p: "Zero trackers, zero Google Analytics, and zero persistent digital device profiling.",
          tag_faq: "// QUESTIONS & ANSWERS",
          h_faq: "Frequently Asked Questions",
          desc_faq: "Concise answers to common technical and platform questions.",
          faq1_q: "Do I need to install an app to use TheGraphT?",
          faq1_a: "No. TheGraphT Web launches instantly in any browser. For mobile devices, a native Android APK is available for download.",
          faq2_q: "Where are messages stored?",
          faq2_a: "Messages are stored securely in local device storage and temporarily in the dispatch queue until delivered to the recipient.",
          faq3_q: "Who is behind TheGraphT?",
          faq3_a: "TheGraphT is engineered by the independent Asymprote collective as an open standard for sovereign communication."
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
