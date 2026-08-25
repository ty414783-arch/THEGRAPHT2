import { GENERATED_TRANSLATIONS } from "./i18n-generated";

export interface LanguageItem {
  code: string;
  nativeName: string;
  englishName: string;
  flag: string;
  iso: string;
}

export const LANGUAGES: LanguageItem[] = [
  { code: "en", nativeName: "English", englishName: "English", flag: "🇬🇧", iso: "gb" },
  { code: "ru", nativeName: "Русский", englishName: "Russian", flag: "🇷🇺", iso: "ru" },
  { code: "be", nativeName: "Беларуская", englishName: "Belarusian", flag: "🇧🇾", iso: "by" },
  { code: "ca", nativeName: "Català", englishName: "Catalan", flag: "🇦🇩", iso: "ad" },
  { code: "zh-hans", nativeName: "简体中文", englishName: "Chinese Simplified", flag: "🇨🇳", iso: "cn" },
  { code: "zh-hant", nativeName: "繁體中文", englishName: "Chinese Traditional", flag: "🇹🇼", iso: "tw" },
  { code: "hr", nativeName: "Hrvatski", englishName: "Croatian", flag: "🇭🇷", iso: "hr" },
  { code: "cs", nativeName: "Čeština", englishName: "Czech", flag: "🇨🇿", iso: "cz" },
  { code: "nl", nativeName: "Nederlands", englishName: "Dutch", flag: "🇳🇱", iso: "nl" },
  { code: "fi", nativeName: "Suomi", englishName: "Finnish", flag: "🇫🇮", iso: "fi" },
  { code: "fr", nativeName: "Français", englishName: "French", flag: "🇫🇷", iso: "fr" },
  { code: "de", nativeName: "Deutsch", englishName: "German", flag: "🇩🇪", iso: "de" },
  { code: "id", nativeName: "Bahasa Indonesia", englishName: "Indonesian", flag: "🇮🇩", iso: "id" },
  { code: "it", nativeName: "Italiano", englishName: "Italian", flag: "🇮🇹", iso: "it" },
  { code: "kk", nativeName: "Қазақша", englishName: "Kazakh", flag: "🇰🇿", iso: "kz" },
  { code: "ko", nativeName: "한국어", englishName: "Korean", flag: "🇰🇷", iso: "kr" },
  { code: "ms", nativeName: "Bahasa Melayu", englishName: "Malay", flag: "🇲🇾", iso: "my" },
  { code: "no", nativeName: "Norsk (Bokmål)", englishName: "Norwegian", flag: "🇳🇴", iso: "no" },
  { code: "pl", nativeName: "Polski", englishName: "Polish", flag: "🇵🇱", iso: "pl" },
  { code: "pt-br", nativeName: "Português (Brasil)", englishName: "Portuguese", flag: "🇧🇷", iso: "br" },
  { code: "ro", nativeName: "Română", englishName: "Romanian", flag: "🇷🇴", iso: "ro" },
  { code: "sr", nativeName: "Српски", englishName: "Serbian", flag: "🇷🇸", iso: "rs" },
  { code: "es", nativeName: "Español", englishName: "Spanish", flag: "🇪🇸", iso: "es" },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish", flag: "🇹🇷", iso: "tr" },
  { code: "uk", nativeName: "Українська", englishName: "Ukrainian", flag: "🇺🇦", iso: "ua" }
];

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "settings.title": "Settings",
    "settings.notifications": "Notifications and Sounds",
    "settings.dataStorage": "Data and Storage",
    "settings.privacy": "Privacy and Security",
    "settings.general": "General Settings",
    "settings.chatFolders": "Chat Folders",
    "settings.stickers": "Stickers and Emoji",
    "settings.devices": "Devices",
    "settings.language": "Language",
    "settings.premium": "TheGraphT Premium",

    "menu.profile": "Profile",
    "menu.savedMessages": "Saved Messages",
    "menu.logout": "Log out",
    "menu.account": "Account",

    "composer.placeholder": "Message",
    "emoji.search": "Search Emoji",
    "group.addPeople": "Add people...",
    "media.addCaption": "Add a caption...",

    "date.today": "Today",
    "date.yesterday": "Yesterday",

    "activeSessions.title": "Active sessions",
    "activeSessions.thisDevice": "This device",
    "activeSessions.terminateAll": "Terminate all other sessions",
    "activeSessions.helpText": "Logs out all devices except for this one.",
    "activeSessions.activeDevices": "Active Devices",
    "activeSessions.rename": "Rename",

    "language.title": "Language",
    "language.search": "Search",
    "language.restartTitle": "TheGraphT will restart in order to change the language",
    "language.restartDesc": "The application will reload to apply the chosen locale.",
    "language.notFoundTitle": "Language not found",
    "language.notFoundDesc": "Try searching for a different language.",

    "common.cancel": "Cancel",
    "common.ok": "OK",
    "common.terminate": "Terminate",
    "common.savedMessages": "Saved Messages",
    "search.placeholder": "Search",
    "status.online": "online",
    "status.offline": "offline",
    "status.lastSeen": "last seen",
    "status.recentlyOnline": "recently online",
    "status.lastSeenAt": "last seen at",
    "status.typing": "typing...",
    "status.someoneTyping": "someone is typing...",
    "chat.typing": "typing...",
    "chat.someoneTyping": "someone is typing...",
    "media.photoOrVideo": "Photo or Video",
    "media.file": "File",
    "menu.newChannel": "New Channel",
    "menu.newGroup": "New Group",
    "menu.newSecretChat": "New Secret Chat",
    "info.title": "Info",
    "info.groupLink": "Group link",
    "info.profileLink": "Profile link",
    "info.notifications": "Notifications",
    "info.members": "Members",
    "role.owner": "owner",
    "role.admin": "admin",
    "role.member": "member",
    "search.noResultsTitle": "No results found",
    "search.noResultsDesc": "Try another username or clear the search.",
    "actions.sendPhoto": "Send Photo",
    "actions.sendFile": "Send File",
    "actions.sendAsFile": "Send as File",
    "actions.send": "Send",
    "actions.add": "Add",
    "actions.cancel": "Cancel",
    "media.photos": "Photos",
    "media.files": "Files",
    "media.caption": "Caption",
    "actions.reply": "Reply",
    "actions.copyText": "Copy Text",
    "actions.copyLink": "Copy Link",
    "actions.saveFile": "Save File",
    "actions.delete": "Delete",
    "empty.savedHeader": "Your personal space",
    "empty.savedLine1": "Forward useful messages here.",
    "empty.savedLine2": "Store photos and videos here safely.",

    "auth.verify": "Verify",
    "auth.resendCode": "Resend code",
    "auth.resendTimer": "Resend code in",
    "auth.attemptsRemaining": "Attempts remaining:",
    "auth.backToLogin": "Back to login",
    "auth.noAccount": "No account?",
    "auth.createAccount": "Create account",

    "group.addMembers": "Add Members",
    "group.groupNameLabel": "Group Name",

    "call.audioDevices": "Call audio devices",
    "call.mic": "Microphone",
    "call.output": "Output",
    "call.camera": "Camera",
    "call.screen": "Screen",
    "call.mute": "Mute",
    "call.accept": "Accept",
    "call.decline": "Decline",
    "call.leaveTitle": "Leave video chat",
    "call.leaveDesc": "Are you sure you want to leave this video chat?",
    "call.endVideoChat": "End Video Chat",
    "call.leaveConfirm": "LEAVE",
    "call.liveStream": "Live stream",
    "call.call": "Call",
    "call.connecting": "Connecting...",
    "call.groupChat": "Group video chat"
  },
  ru: {
    "settings.title": "Настройки",
    "settings.notifications": "Уведомления и звуки",
    "settings.dataStorage": "Данные и память",
    "settings.privacy": "Конфиденциальность",
    "settings.general": "Настройки чатов",
    "settings.chatFolders": "Папки с чатами",
    "settings.stickers": "Стикеры и эмодзи",
    "settings.devices": "Устройства",
    "settings.language": "Язык",
    "settings.premium": "TheGraphT Premium",

    "menu.profile": "Профиль",
    "menu.savedMessages": "Избранное",
    "menu.logout": "Выйти",
    "menu.account": "Аккаунт",

    "composer.placeholder": "Сообщение",
    "emoji.search": "Поиск эмодзи",
    "group.addPeople": "Добавить участников...",
    "media.addCaption": "Добавить подпись...",

    "date.today": "Сегодня",
    "date.yesterday": "Вчера",

    "activeSessions.title": "Активные сессии",
    "activeSessions.thisDevice": "Это устройство",
    "activeSessions.terminateAll": "Завершить все остальные сессии",
    "activeSessions.helpText": "Завершает сеанс на всех устройствах, кроме этого.",
    "activeSessions.activeDevices": "Активные устройства",
    "activeSessions.rename": "Переименовать",

    "language.title": "Язык",
    "language.search": "Поиск",
    "language.restartTitle": "Для смены языка приложение перезапустится",
    "language.restartDesc": "Приложение перезагрузит интерфейс для применения локали.",
    "language.notFoundTitle": "Язык не найден",
    "language.notFoundDesc": "Попробуйте ввести другое название языка.",

    "common.cancel": "Отмена",
    "common.ok": "ОК",
    "common.terminate": "Завершить",
    "common.savedMessages": "Избранное",
    "search.placeholder": "Поиск",
    "status.online": "в сети",
    "status.offline": "был(а) в сети",
    "status.lastSeen": "был(а) в сети",
    "status.recentlyOnline": "был(а) недавно",
    "status.lastSeenAt": "был(а) в сети в",
    "status.typing": "печатает...",
    "status.someoneTyping": "кто-то печатает...",
    "chat.typing": "печатает...",
    "chat.someoneTyping": "кто-то печатает...",
    "media.photoOrVideo": "Фото или видео",
    "media.file": "Файл",
    "menu.newChannel": "Создать канал",
    "menu.newGroup": "Создать группу",
    "menu.newSecretChat": "Создать секретный чат",
    "info.title": "Информация",
    "info.groupLink": "Ссылка на группу",
    "info.profileLink": "Ссылка на профиль",
    "info.notifications": "Уведомления",
    "info.members": "Участники",
    "role.owner": "владелец",
    "role.admin": "админ",
    "role.member": "участник",
    "search.noResultsTitle": "Ничего не найдено",
    "search.noResultsDesc": "Попробуйте изменить поисковый запрос.",
    "actions.sendPhoto": "Отправить фото",
    "actions.sendFile": "Отправить файл",
    "actions.sendAsFile": "Отправить как файл",
    "actions.send": "Отправить",
    "actions.add": "Добавить",
    "actions.cancel": "Отмена",
    "media.photos": "Фото",
    "media.files": "Файлы",
    "media.caption": "Подпись",
    "actions.reply": "Ответить",
    "actions.copyText": "Копировать текст",
    "actions.copyLink": "Копировать ссылку",
    "actions.saveFile": "Сохранить файл",
    "actions.delete": "Удалить",
    "empty.savedHeader": "Ваше личное пространство",
    "empty.savedLine1": "Пересылайте сюда нужные сообщения.",
    "empty.savedLine2": "Храните здесь фото и видео.",

    "auth.verify": "Подтвердить",
    "auth.resendCode": "Отправить код повторно",
    "auth.resendTimer": "Повторный код через",
    "auth.attemptsRemaining": "Осталось попыток:",
    "auth.backToLogin": "Назад к входу",
    "auth.noAccount": "Нет аккаунта?",
    "auth.createAccount": "Создать аккаунт",

    "group.addMembers": "Добавить участников",
    "group.groupNameLabel": "Имя группы",

    "call.audioDevices": "Аудиоустройства звонка",
    "call.mic": "Микрофон",
    "call.output": "Динамик",
    "call.camera": "Камера",
    "call.screen": "Экран",
    "call.mute": "Микрофон",
    "call.accept": "Принять",
    "call.decline": "Отклонить",
    "call.leaveTitle": "Выйти из видеочата",
    "call.leaveDesc": "Вы уверены, что хотите покинуть видеочат?",
    "call.endVideoChat": "Завершить видеочат",
    "call.leaveConfirm": "ВЫЙТИ",
    "call.liveStream": "Прямая трансляция",
    "call.call": "Звонок",
    "call.connecting": "Соединение...",
    "call.groupChat": "Групповой видеочат"
  },
  be: {
    "settings.title": "Налады",
    "settings.notifications": "Паведамленні і гукі",
    "settings.dataStorage": "Дадзеныя і памяць",
    "settings.privacy": "Прыватнасць",
    "settings.general": "Налады чатаў",
    "settings.chatFolders": "Папкі з чатамі",
    "settings.stickers": "Стыкеры і эмодзі",
    "settings.devices": "Прылады",
    "settings.language": "Мова",
    "settings.premium": "TheGraphT Premium",

    "menu.profile": "Профіль",
    "menu.savedMessages": "Захаванае",
    "menu.logout": "Выйсці",
    "menu.account": "Акаўнт",

    "composer.placeholder": "Паведамленне",
    "emoji.search": "Пошук эмодзі",
    "group.addPeople": "Дадаць удзельнікаў...",
    "media.addCaption": "Дадаць подпіс...",

    "date.today": "Сёння",
    "date.yesterday": "Учора",

    "activeSessions.title": "Актыўныя сесіі",
    "activeSessions.thisDevice": "Гэтая прылада",
    "activeSessions.terminateAll": "Скончыць усе іншыя сесіі",
    "activeSessions.helpText": "Выходзіць з усіх прылад, акрамя гэтай.",
    "activeSessions.activeDevices": "Актыўныя прылады",
    "activeSessions.rename": "Перайменаваць",

    "language.title": "Мова",
    "language.search": "Пошук",
    "language.restartTitle": "Для змены мовы дадатак перазапусціцца",
    "language.restartDesc": "Дадатак перазагрузіць інтэрфейс для ўжывання лакалі.",
    "language.notFoundTitle": "Мова не знойдзена",
    "language.notFoundDesc": "Паспрабуйце ўвесці іншую назву мовы.",

    "common.cancel": "Адмена",
    "common.ok": "ОК",
    "common.terminate": "Скончыць",
    "common.savedMessages": "Захаванае",
    "search.placeholder": "Пошук",
    "status.online": "у сетцы",
    "status.offline": "быў(ла) у сетцы",
    "status.lastSeen": "быў(ла) у сетцы"
  },
  uk: {
    "settings.title": "Налаштування",
    "settings.notifications": "Сповіщення та звуки",
    "settings.dataStorage": "Дані та пам'ять",
    "settings.privacy": "Приватність і безпека",
    "settings.general": "Налаштування чатів",
    "settings.chatFolders": "Папки з чатами",
    "settings.stickers": "Наліпки та емодзі",
    "settings.devices": "Пристрої",
    "settings.language": "Мова",
    "settings.premium": "TheGraphT Premium",

    "activeSessions.title": "Активні сеанси",
    "activeSessions.thisDevice": "Цей пристрій",
    "activeSessions.terminateAll": "Завершити всі інші сеанси",
    "activeSessions.helpText": "Завершує сеанс на всіх пристроях, крім цього.",
    "activeSessions.activeDevices": "Активні пристрої",
    "activeSessions.rename": "Перейменувати",

    "language.title": "Мова",
    "language.search": "Пошук",
    "language.restartTitle": "Для зміни мови додаток перезапуститься",
    "language.restartDesc": "Додаток перезавантажить інтерфейс для застосування локалі.",
    "language.notFoundTitle": "Мову не знайдено",
    "language.notFoundDesc": "Спробуйте ввести іншу назву мови.",

    "common.cancel": "Скасувати",
    "common.ok": "ОК",
    "common.terminate": "Завершити",
    "common.savedMessages": "Збережене",
    "search.placeholder": "Пошук",
    "status.online": "у мережі",
    "status.offline": "був(ла) у мережі",
    "status.lastSeen": "був(ла) у мережі"
  },
  de: {
    "settings.title": "Einstellungen",
    "settings.notifications": "Mitteilungen und Töne",
    "settings.dataStorage": "Daten und Speicher",
    "settings.privacy": "Privatsphäre und Sicherheit",
    "settings.general": "Chat-Einstellungen",
    "settings.chatFolders": "Ordner",
    "settings.stickers": "Sticker und Emoji",
    "settings.devices": "Geräte",
    "settings.language": "Sprache",
    "settings.premium": "TheGraphT Premium",

    "activeSessions.title": "Aktive Sitzungen",
    "activeSessions.thisDevice": "Dieses Gerät",
    "activeSessions.terminateAll": "Alle anderen Sitzungen beenden",
    "activeSessions.helpText": "Meldet alle anderen Geräte ab.",
    "activeSessions.activeDevices": "Aktive Geräte",
    "activeSessions.rename": "Umbenennen",

    "language.title": "Sprache",
    "language.search": "Suchen",
    "language.restartTitle": "TheGraphT startet neu, um die Sprache zu ändern",
    "language.restartDesc": "Die Anwendung wird neu geladen.",
    "language.notFoundTitle": "Keine Sprache gefunden",
    "language.notFoundDesc": "Versuche es mit einem anderen Begriff.",

    "common.cancel": "Abbrechen",
    "common.ok": "OK",
    "common.terminate": "Beenden",
    "common.savedMessages": "Gespeichertes",
    "search.placeholder": "Suchen",
    "status.online": "online",
    "status.offline": "zulezt gesehen",
    "status.lastSeen": "zulezt gesehen"
  },
  fr: {
    "settings.title": "Paramètres",
    "settings.notifications": "Notifications et sons",
    "settings.dataStorage": "Données et stockage",
    "settings.privacy": "Confidentialité et sécurité",
    "settings.general": "Paramètres des échanges",
    "settings.chatFolders": "Dossiers de réseaux",
    "settings.stickers": "Stickers et emojis",
    "settings.devices": "Appareils",
    "settings.language": "Langue",
    "settings.premium": "TheGraphT Premium",

    "activeSessions.title": "Sessions actives",
    "activeSessions.thisDevice": "Cet appareil",
    "activeSessions.terminateAll": "Fermer toutes les autres sessions",
    "activeSessions.helpText": "Déconnecte tous les appareils sauf celui-ci.",
    "activeSessions.activeDevices": "Appareils actifs",
    "activeSessions.rename": "Renommer",

    "language.title": "Langue",
    "language.search": "Rechercher",
    "language.restartTitle": "TheGraphT va redémarrer pour changer de langue",
    "language.restartDesc": "L'application se rechargera pour appliquer la langue.",
    "language.notFoundTitle": "Langue non trouvée",
    "language.notFoundDesc": "Essayez une autre recherche.",

    "common.cancel": "Annuler",
    "common.ok": "OK",
    "common.terminate": "Terminer",
    "common.savedMessages": "Messages enregistrés",
    "search.placeholder": "Rechercher",
    "status.online": "en ligne",
    "status.offline": "vu(e) récente",
    "status.lastSeen": "vu(e) récente"
  },
  es: {
    "settings.title": "Ajustes",
    "settings.notifications": "Notificaciones y sonidos",
    "settings.dataStorage": "Datos y almacenamiento",
    "settings.privacy": "Privacidad y seguridad",
    "settings.general": "Ajustes de chats",
    "settings.chatFolders": "Carpetas de chats",
    "settings.stickers": "Stickers y emojis",
    "settings.devices": "Dispositivos",
    "settings.language": "Idioma",
    "settings.premium": "TheGraphT Premium",

    "activeSessions.activeDevices": "Dispositivos activos"
  }
};

const COMMON_SESSION_COPY: Record<string, string> = {
  "activeSessions.loading": "Loading sessions…",
  "activeSessions.unknownDevice": "Unknown device",
  "activeSessions.unknownLocation": "Unknown location",
  "activeSessions.noOtherSessions": "You have no other active sessions to terminate.",
  "activeSessions.confirmAll": "Are you sure you want to terminate all other sessions?",
  "activeSessions.confirmOne": "Are you sure you want to terminate this session?",
  "activeSessions.renamed": "Device renamed",
  "activeSessions.renameFailed": "Failed to rename device.",
  "activeSessions.renameDevice": "Rename device",
  "activeSessions.deviceName": "Device name",
  "common.save": "Save",
  "common.close": "Close",
  "profile.file": "File",
  "profile.fromClipboard": "From clipboard"
};

const LOCALE_OVERRIDES: Record<string, Record<string, string>> = {
  ca: {
    "settings.title": "Configuració", "settings.devices": "Dispositius", "settings.language": "Idioma",
    "menu.profile": "Perfil", "menu.savedMessages": "Missatges desats", "menu.logout": "Tanca la sessió", "menu.account": "Compte",
    "composer.placeholder": "Missatge", "emoji.search": "Cerca emojis", "group.addPeople": "Afegeix persones...", "media.addCaption": "Afegeix una llegenda...",
    "date.today": "Avui", "date.yesterday": "Ahir", "search.placeholder": "Cerca",
    "status.online": "en línia", "status.recentlyOnline": "vist fa poc", "status.lastSeenAt": "vist per última vegada a les",
    "chat.youPrefix": "Tu", "common.savedMessages": "Missatges desats",
    "activeSessions.title": "Sessions actives", "activeSessions.thisDevice": "Aquest dispositiu", "activeSessions.terminateAll": "Tanca les altres sessions", "activeSessions.helpText": "Tanca la sessió a tots els dispositius excepte en aquest.", "activeSessions.activeDevices": "Dispositius actius", "activeSessions.rename": "Canvia el nom", "language.title": "Idioma", "language.search": "Cerca", "language.restartTitle": "TheGraphT es reiniciarà per canviar l’idioma", "language.restartDesc": "L’aplicació es tornarà a carregar per aplicar l’idioma.", "common.cancel": "Cancel·la", "common.ok": "D’acord", "common.terminate": "Finalitza", "common.save": "Desa"
  },
  "zh-hans": {
    "settings.title": "设置", "settings.devices": "设备", "settings.language": "语言",
    "menu.profile": "个人档案", "menu.savedMessages": "收藏夹", "menu.logout": "退出登录", "menu.account": "账号",
    "composer.placeholder": "输入消息...", "emoji.search": "搜索表情", "group.addPeople": "添加成员...", "media.addCaption": "添加说明...",
    "date.today": "今天", "date.yesterday": "昨天", "search.placeholder": "搜索",
    "status.online": "在线", "status.recentlyOnline": "最近在线", "status.lastSeenAt": "上次在线于",
    "chat.youPrefix": "你", "common.savedMessages": "收藏夹",
    "activeSessions.title": "活跃会话", "activeSessions.thisDevice": "此设备", "activeSessions.terminateAll": "终止所有其他会话", "activeSessions.helpText": "退出除本设备外的所有设备。", "activeSessions.activeDevices": "活跃设备", "activeSessions.rename": "重命名", "language.title": "语言", "language.search": "搜索", "language.restartTitle": "TheGraphT 将重启以更改语言", "language.restartDesc": "应用将重新加载以应用所选语言。", "common.cancel": "取消", "common.ok": "确定", "common.terminate": "终止", "common.save": "保存"
  },
  "zh-hant": {
    "settings.title": "設定", "settings.devices": "裝置", "settings.language": "語言",
    "menu.profile": "個人檔案", "menu.savedMessages": "儲存的訊息", "menu.logout": "登出", "menu.account": "帳號",
    "composer.placeholder": "輸入訊息...", "emoji.search": "搜尋表情", "group.addPeople": "新增成員...", "media.addCaption": "新增說明...",
    "date.today": "今天", "date.yesterday": "昨天", "search.placeholder": "搜尋",
    "status.online": "線上", "status.recentlyOnline": "最近線上", "status.lastSeenAt": "上次發現在",
    "chat.youPrefix": "你", "common.savedMessages": "儲存的訊息",
    "activeSessions.title": "使用中的工作階段", "activeSessions.thisDevice": "此裝置", "activeSessions.terminateAll": "終止所有其他工作階段", "activeSessions.helpText": "登出除本裝置外的所有裝置。", "activeSessions.activeDevices": "使用中的裝置", "activeSessions.rename": "重新命名", "language.title": "語言", "language.search": "搜尋", "language.restartTitle": "TheGraphT 將重新啟動以變更語言", "language.restartDesc": "應用程式會重新載入以套用選取的語言。", "common.cancel": "取消", "common.ok": "確定", "common.terminate": "終止", "common.save": "儲存"
  },
  be: {
    "menu.profile": "Профіль", "menu.savedMessages": "Захаванае", "menu.logout": "Выйсці", "menu.account": "Акаўнт",
    "composer.placeholder": "Паведамленне", "emoji.search": "Пошук эмодзі", "group.addPeople": "Дадаць удзельнікаў...", "media.addCaption": "Дадаць подпіс...",
    "date.today": "Сёння", "date.yesterday": "Учора", "search.placeholder": "Пошук",
    "status.online": "у сетцы", "status.recentlyOnline": "быў(ла) нядаўна", "status.lastSeenAt": "быў(ла) у сетцы ў",
    "chat.youPrefix": "Вы", "common.savedMessages": "Захаванае"
  },
  uk: {
    "menu.profile": "Профіль", "menu.savedMessages": "Збережене", "menu.logout": "Вийти", "menu.account": "Акаунт",
    "composer.placeholder": "Повідомлення", "emoji.search": "Пошук емодзі", "group.addPeople": "Додати учасників...", "media.addCaption": "Додати підпис...",
    "date.today": "Сьогодні", "date.yesterday": "Учора", "search.placeholder": "Пошук",
    "status.online": "у мережі", "status.recentlyOnline": "був(ла) недавно", "status.lastSeenAt": "був(ла) у мережі о",
    "chat.youPrefix": "Ви", "common.savedMessages": "Збережене"
  },
  de: {
    "menu.profile": "Profil", "menu.savedMessages": "Gespeichertes", "menu.logout": "Abmelden", "menu.account": "Konto",
    "composer.placeholder": "Nachricht", "emoji.search": "Emoji suchen", "group.addPeople": "Personen hinzufügen...", "media.addCaption": "Beschriftung hinzufügen...",
    "date.today": "Heute", "date.yesterday": "Gestern", "search.placeholder": "Suchen",
    "status.online": "online", "status.recentlyOnline": "kürzlich gesehen", "status.lastSeenAt": "zuletzt gesehen um",
    "chat.youPrefix": "Du", "common.savedMessages": "Gespeichertes"
  },
  fr: {
    "menu.profile": "Profil", "menu.savedMessages": "Messages enregistrés", "menu.logout": "Déconnexion", "menu.account": "Compte",
    "composer.placeholder": "Message", "emoji.search": "Rechercher des émojis", "group.addPeople": "Ajouter des membres...", "media.addCaption": "Ajouter une légende...",
    "date.today": "Aujourd'hui", "date.yesterday": "Hier", "search.placeholder": "Rechercher",
    "status.online": "en ligne", "status.recentlyOnline": "vu(e) récemment", "status.lastSeenAt": "vu(e) en ligne à",
    "chat.youPrefix": "Vous", "common.savedMessages": "Messages enregistrés"
  },
  es: {
    "menu.profile": "Perfil", "menu.savedMessages": "Mensajes guardados", "menu.logout": "Cerrar sesión", "menu.account": "Cuenta",
    "composer.placeholder": "Mensaje", "emoji.search": "Buscar emojis", "group.addPeople": "Añadir miembros...", "media.addCaption": "Añadir comentario...",
    "date.today": "Hoy", "date.yesterday": "Ayer", "search.placeholder": "Buscar",
    "status.online": "en línea", "status.recentlyOnline": "visto recientemente", "status.lastSeenAt": "visto por última vez a las",
    "chat.youPrefix": "Tú", "common.savedMessages": "Mensajes guardados"
  },
  it: {
    "menu.profile": "Profilo", "menu.savedMessages": "Messaggi salvati", "menu.logout": "Disconnettiti", "menu.account": "Account",
    "composer.placeholder": "Messaggio", "emoji.search": "Cerca emoji", "group.addPeople": "Aggiungi membri...", "media.addCaption": "Aggiungi una didascalia...",
    "date.today": "Oggi", "date.yesterday": "Ieri", "search.placeholder": "Cerca",
    "status.online": "in linea", "status.recentlyOnline": "visto di recente", "status.lastSeenAt": "ultimo accesso alle",
    "chat.youPrefix": "Tu", "common.savedMessages": "Messaggi salvati",
    "settings.title": "Impostazioni", "settings.devices": "Dispositivi", "settings.language": "Lingua", "activeSessions.title": "Sessioni attive", "activeSessions.thisDevice": "Questo dispositivo", "activeSessions.terminateAll": "Termina tutte le altre sessioni", "activeSessions.helpText": "Disconnette tutti i dispositivi tranne questo.", "activeSessions.activeDevices": "Dispositivi attivi", "activeSessions.rename": "Rinomina", "language.title": "Lingua", "language.search": "Cerca", "language.restartTitle": "TheGraphT verrà riavviato per cambiare lingua", "language.restartDesc": "L'app verrà ricaricata.", "common.cancel": "Annulla", "common.ok": "OK", "common.terminate": "Termina", "common.save": "Salva"
  },
  "pt-br": {
    "menu.profile": "Perfil", "menu.savedMessages": "Mensagens Salvas", "menu.logout": "Sair", "menu.account": "Conta",
    "composer.placeholder": "Mensagem", "emoji.search": "Buscar emojis", "group.addPeople": "Adicionar pessoas...", "media.addCaption": "Adicionar legenda...",
    "date.today": "Hoje", "date.yesterday": "Ontem", "search.placeholder": "Pesquisar",
    "status.online": "online", "status.recentlyOnline": "visto recentemente", "status.lastSeenAt": "visto por último às",
    "chat.youPrefix": "Você", "common.savedMessages": "Mensagens Salvas",
    "settings.title": "Configurações", "settings.devices": "Dispositivos", "settings.language": "Idioma", "activeSessions.title": "Sessões ativas", "activeSessions.thisDevice": "Este dispositivo", "activeSessions.terminateAll": "Encerrar todas as outras sessões", "activeSessions.helpText": "Desconecta todos os dispositivos, exceto este.", "activeSessions.activeDevices": "Dispositivos ativos", "activeSessions.rename": "Renomear", "language.title": "Idioma", "language.search": "Pesquisar", "language.restartTitle": "TheGraphT será reiniciado para alterar o idioma", "language.restartDesc": "O aplicativo será recarregado.", "common.cancel": "Cancelar", "common.ok": "OK", "common.terminate": "Encerrar", "common.save": "Salvar"
  },
  pl: {
    "menu.profile": "Profil", "menu.savedMessages": "Zapisane wiadomości", "menu.logout": "Wyloguj", "menu.account": "Konto",
    "composer.placeholder": "Wiadomość", "emoji.search": "Szukaj emoji", "group.addPeople": "Dodaj osoby...", "media.addCaption": "Dodaj podpis...",
    "date.today": "Dzisiaj", "date.yesterday": "Wczoraj", "search.placeholder": "Szukaj",
    "status.online": "online", "status.recentlyOnline": "widziano niedawno", "status.lastSeenAt": "ostatnio widziano o",
    "chat.youPrefix": "Ty", "common.savedMessages": "Zapisane wiadomości",
    "settings.title": "Ustawienia", "settings.devices": "Urządzenia", "settings.language": "Język", "activeSessions.title": "Aktywne sesje", "activeSessions.thisDevice": "To urządzenie", "activeSessions.terminateAll": "Zakończ wszystkie pozostałe sesje", "activeSessions.helpText": "Wylogowuje wszystkie urządzenia poza tym.", "activeSessions.activeDevices": "Aktywne urządzenia", "activeSessions.rename": "Zmień nazwę", "language.title": "Język", "language.search": "Szukaj", "language.restartTitle": "TheGraphT uruchomi się ponownie, aby zmienić język", "language.restartDesc": "Aplikacja zostanie ponownie załadowana.", "common.cancel": "Anuluj", "common.ok": "OK", "common.terminate": "Zakończ", "common.save": "Zapisz"
  },
  tr: {
    "menu.profile": "Profil", "menu.savedMessages": "Kaydedilen Mesajlar", "menu.logout": "Çıkış Yap", "menu.account": "Hesap",
    "composer.placeholder": "Mesaj", "emoji.search": "Emoji ara", "group.addPeople": "Kişi ekle...", "media.addCaption": "Açıklama ekle...",
    "date.today": "Bugün", "date.yesterday": "Dün", "search.placeholder": "Ara",
    "status.online": "çevrimiçi", "status.recentlyOnline": "son görülme yakınlarda", "status.lastSeenAt": "son görülme",
    "chat.youPrefix": "Sen", "common.savedMessages": "Kaydedilen Mesajlar",
    "settings.title": "Ayarlar", "settings.devices": "Cihazlar", "settings.language": "Dil", "activeSessions.title": "Etkin oturumlar", "activeSessions.thisDevice": "Bu cihaz", "activeSessions.terminateAll": "Diğer tüm oturumları sonlandır", "activeSessions.helpText": "Bu cihaz dışındaki tüm cihazlardan çıkış yapar.", "activeSessions.activeDevices": "Etkin cihazlar", "activeSessions.rename": "Yeniden adlandır", "language.title": "Dil", "language.search": "Ara", "language.restartTitle": "Dili değiştirmek için TheGraphT yeniden başlatılacak", "language.restartDesc": "Uygulama yeniden yüklenecek.", "common.cancel": "İptal", "common.ok": "Tamam", "common.terminate": "Sonlandır", "common.save": "Kaydet"
  },
  hr: { "settings.title": "Postavke", "settings.devices": "Uređaji", "settings.language": "Jezik", "menu.profile": "Profil", "menu.savedMessages": "Spremljene poruke", "menu.logout": "Odjava", "menu.account": "Račun", "composer.placeholder": "Poruka", "emoji.search": "Pretraži emojije", "group.addPeople": "Dodaj ljude...", "media.addCaption": "Dodaj opis...", "date.today": "Danas", "date.yesterday": "Jučer", "search.placeholder": "Pretraži", "status.online": "na mreži", "status.recentlyOnline": "nedavno na mreži", "status.lastSeenAt": "zadnje viđeno u", "chat.youPrefix": "Ti", "common.savedMessages": "Spremljene poruke", "activeSessions.title": "Aktivne sesije", "activeSessions.thisDevice": "Ovaj uređaj", "activeSessions.terminateAll": "Prekini sve ostale sesije", "activeSessions.helpText": "Odjavljuje sve uređaje osim ovoga.", "activeSessions.activeDevices": "Aktivni uređaji", "activeSessions.rename": "Preimenuj", "language.title": "Jezik", "language.search": "Pretraži", "language.restartTitle": "TheGraphT će se ponovno pokrenuti radi promjene jezika", "language.restartDesc": "Aplikacija će se ponovno učitati.", "common.cancel": "Odustani", "common.ok": "U redu", "common.terminate": "Prekini", "common.save": "Spremi" },
  cs: { "settings.title": "Nastavení", "settings.devices": "Zařízení", "settings.language": "Jazyk", "menu.profile": "Profil", "menu.savedMessages": "Uložené zprávy", "menu.logout": "Odhlásit se", "menu.account": "Účet", "composer.placeholder": "Zpráva", "emoji.search": "Hledat emoji", "group.addPeople": "Přidat lidi...", "media.addCaption": "Přidat popis...", "date.today": "Dnes", "date.yesterday": "Včera", "search.placeholder": "Hledat", "status.online": "online", "status.recentlyOnline": "naposledy nedávno", "status.lastSeenAt": "naposledy v", "chat.youPrefix": "Ty", "common.savedMessages": "Uložené zprávy", "activeSessions.title": "Aktivní relace", "activeSessions.thisDevice": "Toto zařízení", "activeSessions.terminateAll": "Ukončit všechny ostatní relace", "activeSessions.helpText": "Odhlásí všechna zařízení kromě tohoto.", "activeSessions.activeDevices": "Aktivní zařízení", "activeSessions.rename": "Přejmenovat", "language.title": "Jazyk", "language.search": "Hledat", "language.restartTitle": "TheGraphT se restartuje kvůli změně jazyka", "language.restartDesc": "Aplikace se znovu načte.", "common.cancel": "Zrušit", "common.ok": "OK", "common.terminate": "Ukončit", "common.save": "Uložit" },
  nl: { "settings.title": "Instellingen", "settings.devices": "Apparaten", "settings.language": "Taal", "menu.profile": "Profiel", "menu.savedMessages": "Bewaarde berichten", "menu.logout": "Uitloggen", "menu.account": "Account", "composer.placeholder": "Bericht", "emoji.search": "Emoji zoeken", "group.addPeople": "Mensen toevoegen...", "media.addCaption": "Omschrijving toevoegen...", "date.today": "Vandaag", "date.yesterday": "Gisteren", "search.placeholder": "Zoeken", "status.online": "online", "status.recentlyOnline": "onlangs online", "status.lastSeenAt": "laatst gezien om", "chat.youPrefix": "Jij", "common.savedMessages": "Bewaarde berichten", "activeSessions.title": "Actieve sessies", "activeSessions.thisDevice": "Dit apparaat", "activeSessions.terminateAll": "Alle andere sessies beëindigen", "activeSessions.helpText": "Meldt alle apparaten behalve dit apparaat af.", "activeSessions.activeDevices": "Actieve apparaten", "activeSessions.rename": "Hernoemen", "language.title": "Taal", "language.search": "Zoeken", "language.restartTitle": "TheGraphT start opnieuw op om de taal te wijzigen", "language.restartDesc": "De app wordt opnieuw geladen.", "common.cancel": "Annuleren", "common.ok": "OK", "common.terminate": "Beëindigen", "common.save": "Opslaan" },
  fi: { "settings.title": "Asetukset", "settings.devices": "Laitteet", "settings.language": "Kieli", "menu.profile": "Profiili", "menu.savedMessages": "Tallennetut viestit", "menu.logout": "Kirjaudu ulos", "menu.account": "Tili", "composer.placeholder": "Viesti", "emoji.search": "Etsi emojia", "group.addPeople": "Lisää henkilöitä...", "media.addCaption": "Lisää kuvateksti...", "date.today": "Tänään", "date.yesterday": "Eilen", "search.placeholder": "Hae", "status.online": "paikalla", "status.recentlyOnline": "viimeksi paikalla äskettäin", "status.lastSeenAt": "viimeksi paikalla klo", "chat.youPrefix": "Sinä", "common.savedMessages": "Tallennetut viestit", "activeSessions.title": "Aktiiviset istunnot", "activeSessions.thisDevice": "Tämä laite", "activeSessions.terminateAll": "Lopeta kaikki muut istunnot", "activeSessions.helpText": "Kirjaa ulos kaikki muut laitteet.", "activeSessions.activeDevices": "Aktiiviset laitteet", "activeSessions.rename": "Nimeä uudelleen", "language.title": "Kieli", "language.search": "Hae", "language.restartTitle": "TheGraphT käynnistyy uudelleen kielen vaihtamiseksi", "language.restartDesc": "Sovellus ladataan uudelleen.", "common.cancel": "Peruuta", "common.ok": "OK", "common.terminate": "Lopeta", "common.save": "Tallenna" },
  id: { "settings.title": "Pengaturan", "settings.devices": "Perangkat", "settings.language": "Bahasa", "menu.profile": "Profil", "menu.savedMessages": "Pesan Tersimpan", "menu.logout": "Keluar", "menu.account": "Akun", "composer.placeholder": "Pesan", "emoji.search": "Cari Emoji", "group.addPeople": "Tambah orang...", "media.addCaption": "Tambah keterangan...", "date.today": "Hari ini", "date.yesterday": "Kemarin", "search.placeholder": "Cari", "status.online": "online", "status.recentlyOnline": "terlihat baru saja", "status.lastSeenAt": "terlihat pada", "chat.youPrefix": "Anda", "common.savedMessages": "Pesan Tersimpan", "activeSessions.title": "Sesi aktif", "activeSessions.thisDevice": "Perangkat ini", "activeSessions.terminateAll": "Akhiri semua sesi lain", "activeSessions.helpText": "Keluar dari semua perangkat selain perangkat ini.", "activeSessions.activeDevices": "Perangkat aktif", "activeSessions.rename": "Ganti nama", "language.title": "Bahasa", "language.search": "Cari", "language.restartTitle": "TheGraphT akan dimulai ulang untuk mengubah bahasa", "language.restartDesc": "Aplikasi akan dimuat ulang.", "common.cancel": "Batal", "common.ok": "OK", "common.terminate": "Akhiri", "common.save": "Simpan" },
  kk: { "settings.title": "Баптаулар", "settings.devices": "Құрылғылар", "settings.language": "Тіл", "menu.profile": "Профиль", "menu.savedMessages": "Сақталғандар", "menu.logout": "Шығу", "menu.account": "Тіркелгі", "composer.placeholder": "Хабарлама", "emoji.search": "Эмодзи іздеу", "group.addPeople": "Адамдарды қосу...", "media.addCaption": "Сипаттама қосу...", "date.today": "Бүгін", "date.yesterday": "Кеше", "search.placeholder": "Іздеу", "status.online": "желіде", "status.recentlyOnline": "жақында болды", "status.lastSeenAt": "соңғы рет кірді", "chat.youPrefix": "Сіз", "common.savedMessages": "Сақталғандар", "activeSessions.title": "Белсенді сеанстар", "activeSessions.thisDevice": "Бұл құрылғы", "activeSessions.terminateAll": "Барлық басқа сеанстарды аяқтау", "activeSessions.helpText": "Осы құрылғыдан басқасының барлығынан шығады.", "activeSessions.activeDevices": "Белсенді құрылғылар", "activeSessions.rename": "Атын өзгерту", "language.title": "Тіл", "language.search": "Іздеу", "language.restartTitle": "Тілді өзгерту үшін TheGraphT қайта іске қосылады", "language.restartDesc": "Қолданба қайта жүктеледі.", "common.cancel": "Болдырмау", "common.ok": "OK", "common.terminate": "Аяқтау", "common.save": "Сақтау" },
  ko: { "settings.title": "설정", "settings.devices": "기기", "settings.language": "언어", "menu.profile": "프로필", "menu.savedMessages": "저장된 메시지", "menu.logout": "로그아웃", "menu.account": "계정", "composer.placeholder": "메시지", "emoji.search": "이모지 검색", "group.addPeople": "사람 추가...", "media.addCaption": "캡션 추가...", "date.today": "오늘", "date.yesterday": "어제", "search.placeholder": "검색", "status.online": "온라인", "status.recentlyOnline": "최근에 접속함", "status.lastSeenAt": "마지막 접속", "chat.youPrefix": "나", "common.savedMessages": "저장된 메시지", "activeSessions.title": "활성 세션", "activeSessions.thisDevice": "이 기기", "activeSessions.terminateAll": "다른 모든 세션 종료", "activeSessions.helpText": "이 기기를 제외한 모든 기기에서 로그아웃합니다.", "activeSessions.activeDevices": "활성 기기", "activeSessions.rename": "이름 바꾸기", "language.title": "언어", "language.search": "검색", "language.restartTitle": "언어를 변경하려면 TheGraphT가 다시 시작됩니다", "language.restartDesc": "앱이 새로고침됩니다.", "common.cancel": "취소", "common.ok": "확인", "common.terminate": "종료", "common.save": "저장" },
  ms: { "settings.title": "Tetapan", "settings.devices": "Peranti", "settings.language": "Bahasa", "menu.profile": "Profil", "menu.savedMessages": "Mesej Disimpan", "menu.logout": "Log keluar", "menu.account": "Akaun", "composer.placeholder": "Mesej", "emoji.search": "Cari Emoji", "group.addPeople": "Tambah orang...", "media.addCaption": "Tambah kapsyen...", "date.today": "Hari ini", "date.yesterday": "Semalam", "search.placeholder": "Cari", "status.online": "dalam talian", "status.recentlyOnline": "dilihat baru-baru ini", "status.lastSeenAt": "dilihat pada", "chat.youPrefix": "Anda", "common.savedMessages": "Mesej Disimpan", "activeSessions.title": "Sesi aktif", "activeSessions.thisDevice": "Peranti ini", "activeSessions.terminateAll": "Tamatkan semua sesi lain", "activeSessions.helpText": "Log keluar semua peranti selain yang ini.", "activeSessions.activeDevices": "Peranti aktif", "activeSessions.rename": "Namakan semula", "language.title": "Bahasa", "language.search": "Cari", "language.restartTitle": "TheGraphT akan dimulakan semula untuk menukar bahasa", "language.restartDesc": "Aplikasi akan dimuat semula.", "common.cancel": "Batal", "common.ok": "OK", "common.terminate": "Tamatkan", "common.save": "Simpan" },
  no: { "settings.title": "Innstillinger", "settings.devices": "Enheter", "settings.language": "Språk", "menu.profile": "Profil", "menu.savedMessages": "Lagrede meldinger", "menu.logout": "Logg ut", "menu.account": "Konto", "composer.placeholder": "Melding", "emoji.search": "Søk etter emoji", "group.addPeople": "Legg til personer...", "media.addCaption": "Legg til bildetekst...", "date.today": "I dag", "date.yesterday": "I går", "search.placeholder": "Søk", "status.online": "pålogget", "status.recentlyOnline": "nylig sett", "status.lastSeenAt": "sist sett kl.", "chat.youPrefix": "Du", "common.savedMessages": "Lagrede meldinger", "activeSessions.title": "Aktive økter", "activeSessions.thisDevice": "Denne enheten", "activeSessions.terminateAll": "Avslutt alle andre økter", "activeSessions.helpText": "Logger ut alle enheter unntatt denne.", "activeSessions.activeDevices": "Aktive enheter", "activeSessions.rename": "Gi nytt navn", "language.title": "Språk", "language.search": "Søk", "language.restartTitle": "TheGraphT starter på nytt for å endre språk", "language.restartDesc": "Programmet lastes på nytt.", "common.cancel": "Avbryt", "common.ok": "OK", "common.terminate": "Avslutt", "common.save": "Lagre" },
  ro: { "settings.title": "Setări", "settings.devices": "Dispozitive", "settings.language": "Limbă", "menu.profile": "Profil", "menu.savedMessages": "Mesaje salvate", "menu.logout": "Deconectare", "menu.account": "Cont", "composer.placeholder": "Mesaj", "emoji.search": "Caută emoji", "group.addPeople": "Adaugă persoane...", "media.addCaption": "Adaugă una descriere...", "date.today": "Astăzi", "date.yesterday": "Ieri", "search.placeholder": "Caută", "status.online": "conectat", "status.recentlyOnline": "văzut recent", "status.lastSeenAt": "văzut la", "chat.youPrefix": "Tu", "common.savedMessages": "Mesaje salvate", "activeSessions.title": "Sesiuni active", "activeSessions.thisDevice": "Acest dispozitiv", "activeSessions.terminateAll": "Încheie toate celelalte sesiuni", "activeSessions.helpText": "Deconectează toate dispozitivele, cu excepția acestuia.", "activeSessions.activeDevices": "Dispozitive active", "activeSessions.rename": "Redenumește", "language.title": "Limbă", "language.search": "Caută", "language.restartTitle": "TheGraphT se va reporni pentru a schimba limba", "language.restartDesc": "Aplicația se va reîncărca.", "common.cancel": "Anulează", "common.ok": "OK", "common.terminate": "Încheie", "common.save": "Salvează" },
  sr: { "settings.title": "Подешавања", "settings.devices": "Уређаји", "settings.language": "Језик", "menu.profile": "Профил", "menu.savedMessages": "Сачуване поруке", "menu.logout": "Одјава", "menu.account": "Налог", "composer.placeholder": "Порука", "emoji.search": "Претражи емоџије", "group.addPeople": "Додај људе...", "media.addCaption": "Додај опис...", "date.today": "Данас", "date.yesterday": "Јуче", "search.placeholder": "Претрага", "status.online": "на мрежи", "status.recentlyOnline": "недавно на мрежи", "status.lastSeenAt": "последњи пут виђен у", "chat.youPrefix": "Ти", "common.savedMessages": "Сачуване поруке", "activeSessions.title": "Активне сесије", "activeSessions.thisDevice": "Овај уређај", "activeSessions.terminateAll": "Заврши све друге сесије", "activeSessions.helpText": "Одјављује све уређаје осим овог.", "activeSessions.activeDevices": "Активни уређаји", "activeSessions.rename": "Преименуј", "language.title": "Језик", "language.search": "Претрага", "language.restartTitle": "TheGraphT ће се поново покренути ради промене језика", "language.restartDesc": "Апликација ће се поново учитати.", "common.cancel": "Откажи", "common.ok": "У реду", "common.terminate": "Заврши", "common.save": "Сачувај" }
};

for (const language of LANGUAGES) {
  TRANSLATIONS[language.code] = {
    ...COMMON_SESSION_COPY,
    ...TRANSLATIONS.en,
    ...(GENERATED_TRANSLATIONS[language.code] || {}),
    ...(TRANSLATIONS[language.code] || {}),
    ...(LOCALE_OVERRIDES[language.code] || {})
  };
}

const SETTINGS_KEYS = [
  "settings.notifications", "settings.dataStorage", "settings.privacy", "settings.general", "settings.chatFolders", "settings.stickers"
];
const SETTINGS_LABELS: Record<string, string[]> = {
  ca: ["Notificacions i sons", "Dades i emmagatzematge", "Privadesa i seguretat", "Configuració general", "Carpetes de xat", "Adhesius i emoji"],
  "zh-hans": ["通知和声音", "数据和存储", "隐私与安全", "通用设置", "聊天文件夹", "贴纸和表情"],
  "zh-hant": ["通知與音效", "資料與儲存空間", "隱私與安全", "一般設定", "聊天資料夾", "貼圖與表情符號"],
  hr: ["Obavijesti i zvukovi", "Podaci i pohrana", "Privatnost i sigurnost", "Opće postavke", "Mape razgovora", "Naljepnice i emojiji"],
  cs: ["Oznámení a zvuky", "Data a úložiště", "Soukromí a zabezpečení", "Obecná nastavení", "Složky chatů", "Samolepky a emoji"],
  nl: ["Meldingen en geluiden", "Data en opslag", "Privacy en beveiliging", "Algemene instellingen", "Chatmappen", "Stickers en emoji"],
  fi: ["Ilmoitukset ja äänet", "Tiedot ja tallennustila", "Yksityisyys ja suojaus", "Yleiset asetukset", "Kansiot", "Tarrat ja emojit"],
  id: ["Notifikasi dan suara", "Data dan penyimpanan", "Privasi dan keamanan", "Pengaturan umum", "Folder chat", "Stiker dan emoji"],
  it: ["Notifiche e suoni", "Dati e archiviazione", "Privacy e sicurezza", "Impostazioni generali", "Cartelle chat", "Sticker ed emoji"],
  kk: ["Хабарландырулар мен дыбыстар", "Деректер мен сақтау орны", "Құпиялылық пен қауіпсіздік", "Жалпы баптаулар", "Чат бумалары", "Стикерлер мен эмодзи"],
  ko: ["알림 및 소리", "데이터 및 저장공간", "개인정보 및 보안", "일반 설정", "채팅 폴더", "스티커 및 이모지"],
  ms: ["Pemberitahuan dan bunyi", "Data dan storan", "Privasi dan keselamatan", "Tetapan umum", "Folder sembang", "Pelekat dan emoji"],
  no: ["Varsler og lyder", "Data og lagring", "Personvern og sikkerhet", "Generelle innstillinger", "Chatmapper", "Klistremerker og emoji"],
  pl: ["Powiadomienia i dźwięki", "Dane i pamięć", "Prywatność i bezpieczeństwo", "Ustawienia ogólne", "Foldery czatów", "Naklejki i emoji"],
  "pt-br": ["Notificações e sons", "Dados e armazenamento", "Privacidade e segurança", "Configurações gerais", "Pastas de conversa", "Figurinhas e emoji"],
  ro: ["Notificări și sunete", "Date și stocare", "Confidențialitate și securitate", "Setări generale", "Dosare de chat", "Autocolante și emoji"],
  sr: ["Обавештења и звукови", "Подаци и складиште", "Приватност и безбедност", "Општа подешавања", "Фасцикле за ћаскање", "Налепнице и емоџији"],
  tr: ["Bildirimler ve sesler", "Veriler ve depolama", "Gizlilik ve güvenlik", "Genel ayarlar", "Sohbet klasörleri", "Çıkartmalar ve emoji"]
};
for (const [code, labels] of Object.entries(SETTINGS_LABELS)) {
  Object.assign(TRANSLATIONS[code], Object.fromEntries(SETTINGS_KEYS.map((key, index) => [key, labels[index]])));
}

const languageCodeSet = new Set(LANGUAGES.map((language) => language.code));
const browserLocaleByCode: Record<string, string> = {
  "zh-hans": "zh-Hans",
  "zh-hant": "zh-Hant",
  "pt-br": "pt-BR"
};
const normalizeLanguageCode = (code: string | null | undefined): string =>
  code && languageCodeSet.has(code) ? code : "en";

let currentLangCode = typeof localStorage !== "undefined"
  ? normalizeLanguageCode(localStorage.getItem("thegrapht_language"))
  : "en";

export function getCurrentLanguageCode(): string {
  return currentLangCode;
}

export function getCurrentLanguageItem(): LanguageItem {
  return LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];
}

export function t(key: string): string {
  const langDict = TRANSLATIONS[currentLangCode] || TRANSLATIONS["en"];
  if (langDict && langDict[key]) {
    return langDict[key];
  }
  return TRANSLATIONS["en"][key] || key;
}

export function setLanguageCode(code: string): void {
  const nextLanguageCode = normalizeLanguageCode(code);
  const changed = nextLanguageCode !== currentLangCode;
  currentLangCode = nextLanguageCode;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("thegrapht_language", currentLangCode);
  }
  applyTranslations();
  if (changed && typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("thegrapht:language-changed", { detail: { code: currentLangCode } }));
  }
}

export function applyTranslations(): void {
  if (typeof document === "undefined") return;

  document.documentElement.lang = browserLocaleByCode[currentLangCode] || currentLangCode;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (key) {
      elem.textContent = t(key);
    }
  });

  const inputs = document.querySelectorAll("[data-i18n-placeholder]");
  inputs.forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (key && input instanceof HTMLInputElement) {
      input.placeholder = t(key);
    }
  });

  const currentLangLabel = document.getElementById("sidebar-profile-language-value");
  if (currentLangLabel) {
    currentLangLabel.textContent = getCurrentLanguageItem().nativeName;
  }
}
