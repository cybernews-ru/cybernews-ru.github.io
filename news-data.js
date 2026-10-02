const news = [
  {
  cat:'Смартфоны', 
  title:'Honor Magic 9 Lite+: 11 000 мАч, Snapdragon 6 Gen 5 и 108 Мп', 
  excerpt:'Глобальная версия Honor с батареей на 11 000 мАч, зарядкой 80 Вт и Android 16 засветилась в Google Play Console',
  img:'img/media-b4efae1ca8c3863df54837d208fbcdee735e7f163f95c88b56be9165628e4323.jpg',
  date:'01 окт 2026', 
  link:'news/honor-gotovit-noviy-smartfon.html'
  },
  {
  cat:'Софт', 
  title:'Хакеры спрятали троян в кастомном ChatGPT и обманули через Google Sites', 
  excerpt:'Фейковый ChatGPT Plus 5.6 заманивал на поддельный сайт, где жертва сама запускала троян удалённого доступа',
  img:'img/chatgpt.webp',
  date:'01 окт 2026', 
  link:'news/poddelniy-chat-gpt.html'
  },
  {
  cat:'Софт', 
  title:'NVIDIA закрыла уязвимости в GeForce GTX 700–1000 драйвером 582.78', 
  excerpt:'Security Update Driver для Maxwell, Pascal и Volta на Windows 10 и 11 — только безопасность, без оптимизаций',
  img:'img/Y7GBKCo56tNp-L-KTpljvg.jpeg.webp',
  date:'01 окт 2026', 
  link:'news/noviy-drayver-na-videokartu-nvidia.html'
  },
  {
  cat:'Игры', 
  title:'Krafton закрыла PUBG: Black Budget: extraction-шутер не выжил', 
  excerpt:'Студия не нашла направление для шутера, проект сворачивают после альфа-тестов',
  img:'img/8_6_5BZX_nEPMJRGe5Zl5w.jpeg.webp',
  date:'01 окт 2026', 
  link:'news/pubg-ostanovili-razrabotku.html'
  },
  {
  cat:'Слухи', 
  title:'HONOR готовит смартфоны с экраном сзади и батареей на 12 000 мАч', 
  excerpt:'HONOR 700 Pro, серия X и два широкоформатных смартфона: утечки от Digital Chat Station',
  img:'img/fit_930_519_false_crop_1200_675_0_62_q90_1298792_c5fb427c4160dc7b369a3c954.webp',
  date:'01 окт 2026', link:'news/neobichnie-smartfoni-honor.html'
  },
  {
  cat:'Технологии', 
  title:'200 ГБ ОЗУ на одного робота: память не подешевеет', 
  excerpt:'Micron: гуманоиды и автономный транспорт поднимут спрос на DRAM и NAND, дефицит усилится в 2027–2028',
  img:'img/AQAKonYzQaDJJ67XXq8zllGYNraOtlT3VSq8UrIXirIoFVZlynVp-oJiZ4i11mwNE8LPNPxy3rpjkO6F_8E_vOj6bTg.webp',
  date:'01 окт 2026', link:'news/operativnaya-pamyat-ne-podesheveet.html'
  },
  {
  cat:'Железо', 
  title:'Новая уязвимость Spectre v2: угроза утечек в Intel, AMD и Arm', 
  excerpt:'Атака BTR: утечка паролей через JIT-компиляторы, защита есть, но не везде',
  img:'img/code_2.webp',
  date:'01 окт 2026', link:'news/naydeni-uyazvimosti-v-processorah-amd-i-arm.html'
  },
  {
  cat:'Железо', 
  title:'Розыгрыш RTX 5080 в стиле CONTROL Resonant', 
  excerpt:'Кастомная GeForce RTX 5080 от NVIDIA: оформление в духе Remedy, стоимость около 1600 долларов',
  img:'img/IMG_20261001_091052.jpg',
  date:'01 окт 2026', link:'news/rozigrish-videokarti-GeForce-RTX-5080.html'
  },
  {
  cat:'Игры', 
  title:'The Witcher 3 Remastered: CDPR чинит HairWorks и DLSS', 
  excerpt:'Проблемы с производительностью в ПК-версии и Xbox Play Anywhere: хотфиксы уже в работе',
  img:'img/R_3zBW8V6I6w_ieHSzX_hQ.png.webp',
  date:'01 окт 2026', link:'news/the-witcher3.html'
  },
  {
  cat:'Гаджеты', 
  title:'Dragonfly A9 Ultimate+: мышь с магнитной зарядкой', 
  excerpt:'Беспроводная игровая мышь ATK: сенсор PixArt, задержка 0,181 мс, цена со скидкой 69,98 доллара',
  img:'img/image-244.png',
  date:'01 окт 2026', link:'news/mish-s-dok-stanciey.html'
  },
  {
  cat:'Гаджеты', 
  title:'Shure MV6 Gen 2: микрофон, который сам всё настроит', 
  excerpt:'USB‑микрофон для стримов и игр: ручная настройка, Voice Isolation, цена от 169 долларов',
  img:'img/IMG_20261001_065310.jpg',
  date:'01 окт 2026', link:'news/noviy-mikrofon-dla-strimerov.html'
  },
  {
  cat:'Игры', 
  title:'GTA 6 не получит Disney World и SeaWorld', 
  excerpt:'Rockstar решила, что не всё из Флориды влезет в игру. Зато обещает настоящий флоридский дух.',
  img:'img/IMG_20261001_053413.jpg',
  date:'01 окт 2026', link:'news/gta6-vo-floride.html'
  },
  {
  cat:'Игры', 
  title:'Silent Hill: Townfall упростит стелс с монстром Бремя', 
  excerpt:'Разработчики готовят патч после вала жалоб на непредсказуемый ИИ монстра',
  img:'img/fXKJecGB4611uJP7LLTS2w.png.webp',
  date:'30 сен 2026', link:'news/splinter-cell.html'
  },
];

// ===== Утилиты =====
const MONTHS = {
  'янв':0,'фев':1,'мар':2,'апр':3,'май':4,'июн':5,
  'июл':6,'авг':7,'сен':8,'окт':9,'ноя':10,'дек':11
};

function parseDate(str) {
  const m = str.match(/(\d+)\s+(\w+)\s+(\d+)/);
  if (!m) return new Date(0);
  return new Date(+m[3], MONTHS[m[2]] || 0, +m[1]);
}

function sortByDate(arr) {
  return arr.slice().sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

function getNewsByCat(cat) {
  if (!cat || cat === 'all') return sortByDate(news);
  return sortByDate(news.filter(n => n.cat === cat));
}
