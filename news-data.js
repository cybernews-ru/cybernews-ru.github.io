// ===== CYBER — ДАННЫЕ НОВОСТЕЙ =====
// Добавляй новые новости сюда, в начало массива.
// Сортировка по дате — автоматическая, порядок в массиве не важен.
// Поле link — путь к HTML-файлу отдельной новости.

const news = [
  {
  cat:'Гаджеты', 
  title:'Shure MV6 Gen 2: микрофон, который сам всё настроит', 
  excerpt:'USB‑микрофон для стримов и игр: ручная настройка, Voice Isolation, цена от 169 долларов',
  img:'img/IMG_20261001_065310.jpg',
  date:'01 окт 2026', link:'news/noviy-mikrofon-dla-strimerov.html'
  },
  {
  cat:'ПК Игры', 
  title:'GTA 6 не получит Disney World и SeaWorld', 
  excerpt:'Rockstar решила, что не всё из Флориды влезет в игру. Зато обещает настоящий флоридский дух.',
  img:'img/IMG_20261001_053413.jpg',
  date:'01 окт 2026', link:'news/gta6-vo-floride.html'
  },
  {
  cat:'ПК Игры', 
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
