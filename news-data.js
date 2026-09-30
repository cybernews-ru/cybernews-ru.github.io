// ===== CYBER — ДАННЫЕ НОВОСТЕЙ =====
// Добавляй новые новости сюда, в начало массива.
// Сортировка по дате — автоматическая, порядок в массиве не важен.
// Поле link — путь к HTML-файлу отдельной новости.

const news = [
  {
  cat:'ПК Игры', 
  title:'Silent Hill: Townfall упростит стелс с монстром Бремя', 
  excerpt:'Разработчики готовят патч после вала жалоб на непредсказуемый ИИ монстра',
  img:'img/fXKJecGB4611uJP7LLTS2w.png.webp',
  date:'30 сен 2026', link:'news/splinter-cell.html'},
  {
  cat:'Гаджеты', 
  title:'Galaxy Tab S12: самые тонкие планшеты Samsung с MediaTek Dimensity 9500', 
  excerpt:'Samsung представила Galaxy Tab S12 Ultra и S12+: толщина от 5,1 мм, экраны Dynamic AMOLED 2X, процессор Dimensity 9500, S Pen в комплекте и батареей до 23 часов.', 
  img:'img/AQAK00JUaMLIBgvPpiFChHd_fCQ1D8AuVqPezdKaw1MLMtggyGMatzSZrwifMDdOLWGXvTHXH0YHiZztq1dfpgCCmxs.webp', 
  date:'30 сен 2026', link:'news/planshet-samsung.html'},
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
