export const buildFeaturesHtml = ({ inter400Url, inter500Url, inter600Url, inter700Url, inter800Url, logoDataUrl, locale = "en-US" }) => {
  const titleByLocale = {
    "ru-RU": "Функции TheGraphT",
    "en-US": "TheGraphT features",
    "es-ES": "Funciones de TheGraphT",
    "fr-FR": "Fonctions de TheGraphT",
    "de-DE": "Funktionen von TheGraphT",
    "pt-PT": "Funcionalidades do TheGraphT",
    "it-IT": "Funzioni di TheGraphT",
    "tr-TR": "TheGraphT özellikleri",
    "pl-PL": "Funkcje TheGraphT",
    "uk-UA": "Можливості TheGraphT",
    "ja-JP": "TheGraphT の機能",
    "ko-KR": "TheGraphT 기능",
    "zh-CN": "TheGraphT 功能",
    "ar-SA": "ميزات TheGraphT",
    "hi-IN": "TheGraphT की सुविधाएँ",
    "id-ID": "Fitur TheGraphT"
  };
  const title = titleByLocale[locale] || titleByLocale["en-US"];
  const introByLocale = {
    "ru-RU": "Здесь коротко и по-человечески собраны основные вещи, которые делает TheGraphT.",
    "en-US": "A short, human list of the main things TheGraphT does.",
    "es-ES": "Una lista breve y humana de lo principal de TheGraphT.",
    "fr-FR": "Une liste courte et simple des points forts de TheGraphT.",
    "de-DE": "Eine kurze, menschliche Liste der wichtigsten Funktionen.",
    "pt-PT": "Uma lista curta e humana do que o TheGraphT faz.",
    "it-IT": "Un elenco breve e semplice delle cose principali di TheGraphT.",
    "tr-TR": "TheGraphT'nin yaptığı işleri kısa ve sade şekilde anlatan bir liste.",
    "pl-PL": "Krotka, ludzka lista najwazniejszych rzeczy w TheGraphT.",
    "uk-UA": "Короткий і людяний список головних можливостей TheGraphT.",
    "ja-JP": "TheGraphT の主な機能を短くわかりやすくまとめました。",
    "ko-KR": "TheGraphT의 핵심 기능을 짧고 쉽게 정리했습니다.",
    "zh-CN": "用简单的话整理了 TheGraphT 的主要功能。",
    "ar-SA": "قائمة قصيرة وواضحة بأهم ما يقدمه TheGraphT.",
    "hi-IN": "TheGraphT क्या करता है, यह एक छोटी और आसान सूची में दिया गया है।",
    "id-ID": "Daftar singkat dan mudah tentang hal-hal utama di TheGraphT."
  };
  const intro = introByLocale[locale] || introByLocale["en-US"];
  const cardsByLocale = {
    "en-US": [
      ["Fast chats", "Open a conversation and keep talking without extra clicks, extra noise, or extra waiting."],
      ["Realtime sync", "Messages, presence, and dialog state stay in step across web and desktop."],
      ["Desktop build", "A Windows app is available for people who want a native window on their machine."],
      ["Simple sharing", "Photos, voice notes, and files fit into the normal flow without ceremony."],
      ["Human wording", "The public site speaks like a product people can understand, not a spec sheet."],
      ["Local routes", "Each language has its own route so the site feels settled and easy to share."]
    ],
    "ru-RU": [
      ["Быстрые чаты", "Открываешь диалог и просто продолжаешь разговор без лишних кликов и ожиданий."],
      ["Синхронизация", "Сообщения, статус и изменения диалогов идут в ногу между вебом и десктопом."],
      ["Десктоп-сборка", "Есть Windows-приложение для тех, кто хочет нативное окно на компьютере."],
      ["Обычный шаринг", "Фото, голосовые и файлы идут в один поток, без лишнего ритуала."],
      ["Живой текст", "Публичный сайт говорит как обычный продукт, а не как техническая справка."],
      ["Свои маршруты", "У каждого языка свой адрес, чтобы сайт выглядел цельно и нормально делился."]
    ]
  };
  const cards = cardsByLocale[locale] || cardsByLocale["en-US"];

  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 400; src: url("${inter400Url}") format("truetype"); }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 500; src: url("${inter500Url}") format("truetype"); }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 600; src: url("${inter600Url}") format("truetype"); }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 700; src: url("${inter700Url}") format("truetype"); }
      @font-face { font-family: "Inter"; font-style: normal; font-weight: 800; src: url("${inter800Url}") format("truetype"); }
      body{margin:0;font-family:"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f6f8fd;color:#0f172a}
      .wrap{width:min(1100px,calc(100% - 32px));margin:0 auto}
      .top{padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:16px}
      .brand{display:flex;align-items:center;gap:12px;font-weight:800;text-decoration:none;color:inherit}
      .brand img{width:38px;height:38px;border-radius:12px}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 16px;border-radius:999px;border:1px solid #dbe4ee;background:#fff;text-decoration:none;color:inherit;font-weight:700}
      .hero{padding:54px 0 22px}
      h1{font-size:clamp(40px,6vw,72px);line-height:.95;letter-spacing:-.06em;margin:0 0 14px}
      p{color:#64748b;line-height:1.8;font-size:17px;max-width:760px}
      .grid{padding:26px 0 54px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .card{background:#fff;border:1px solid #dbe4ee;border-radius:24px;padding:22px;box-shadow:0 12px 30px rgba(15,23,42,.05);min-height:168px}
      .card h3{margin:0 0 8px;font-size:20px}
      @media (max-width: 800px){.grid{grid-template-columns:1fr}}
    </style>
  </head>
  <body>
    <header class="wrap top">
      <a class="brand" href="/${locale}/">
        <img src="${logoDataUrl}" alt="TheGraphT" />
        <span>TheGraphT</span>
      </a>
      <a class="btn" href="/${locale}/faq">FAQ</a>
    </header>
    <main class="wrap">
      <section class="hero">
        <h1>${title}</h1>
        <p>${intro}</p>
      </section>
      <section class="grid">
        ${cards.map(([name, text]) => `<article class="card"><h3>${name}</h3><p>${text}</p></article>`).join("")}
      </section>
    </main>
  </body>
</html>`;
};
