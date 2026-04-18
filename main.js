// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// ---- 109 manga titles (from asset/manga_name.txt) ----
const MANGA_TITLES = [
  'ARMS','AisazuNihaIrarenai','AkkeraKanjinchou','Akuhamu','AosugiruHaru',
  'AppareKappore','Arisa','BEMADER_P','BakuretsuKungFuGirl','Belmondo',
  'BokuHaSitatakaKun','BurariTessenTorimonocho','ByebyeC-BOY','Count3DeKimeteAgeru',
  'DollGun','Donburakokko','DualJustice','EienNoWith','EvaLady',
  'EverydayOsakanaChan','GOOD_KISS_Ver2','GakuenNoise','GarakutayaManta',
  'GinNoChimera','Hamlet','HanzaiKousyouninMinegishiEitarou','HaruichibanNoFukukoro',
  'HarukaRefrain','HealingPlanet','HeiseiJimen','HighschoolKimengumi_vol01',
  'HighschoolKimengumi_vol20','HinagikuKenzan','HisokaReturns','JangiriPonpon',
  'JijiBabaFight','Joouari','Jyovolley','KarappoHighschool','KimiHaBokuNoTaiyouDa',
  'KoukouNoHitotachi','KuroidoGanka','KyokugenCyclone','LancelotFullThrottle',
  'LoveHina_vol01','LoveHina_vol14','MAD_STONE','MadouTaiga','MagicStarGakuin',
  'MagicianLoad','MariaSamaNihaNaisyo','MayaNoAkaiKutsu','MemorySeijin',
  'MeteoSanStrikeDesu','MiraiSan','MisutenaideDaisy','MoeruOnisan_vol01',
  'MoeruOnisan_vol19','MomoyamaHaikagura','MukoukizuNoChonbo','MutekiBoukenSyakuma',
  'Nekodama','NichijouSoup','Ningyoushi','OL_Lunch','OhWareraRettouSeitokai',
  'PLANET7','ParaisoRoad','PikaruGenkiDesu','PlatinumJungle','PrayerHaNemurenai',
  'PrismHeart','PsychoStaff','Raphael','ReveryEarth','RinToSiteSippuNoNaka',
  'RisingGirl','Saisoku','SaladDays_vol01','SaladDays_vol18',
  'SamayoeruSyonenNiJunaiWo','SeisinkiVulnus','ShimatteIkouze_vol01',
  'ShimatteIkouze_vol26','SonokiDeABC','SyabondamaKieta','TaiyouNiSmash',
  'TapkunNoTanteisitsu','TasogareTsushin','TennenSenshiG','TensiNoHaneToAkumaNoShippo',
  'TetsuSan',"That'sIzumiko",'TotteokiNoABC','ToutaMairimasu','TouyouKidan',
  'TsubasaNoKioku',"UchiNoNyan'sDiary",'UchuKigekiM774','UltraEleven',
  'UnbalanceTokyo','WarewareHaOniDearu','YamatoNoHane','YasasiiAkuma',
  'YouchienBoueigumi','YoumaKourin','YukiNoFuruMachi','YumeNoKayoiji','YumeiroCooking'
];

// ---- soft Japanese color palettes for tiles ----
const palettes = [
  ['#b7282e', '#e5989b'], // 茜 × 桜鼠
  ['#165e83', '#a5c9ca'], // 藍 × 水浅葱
  ['#d9a62e', '#f2d492'], // 山吹 × 鳥の子
  ['#7b8d42', '#c9d6a8'], // 抹茶 × 若苗
  ['#86604a', '#d4b996'], // 胡桃 × 薄茶
  ['#5d3f6a', '#b38bb8'], // 紫苑 × 藤
  ['#d35e60', '#f4cccc'], // 珊瑚 × 撫子
  ['#3a6b35', '#a8c3a1'], // 松葉 × 柳
  ['#b56576', '#e8c8cf'], // 長春 × 一斤染
  ['#4a6fa5', '#b4c5e4'], // 縹 × 瓶覗
  ['#c96f4a', '#f1b98c'], // 黄丹 × 洗柿
  ['#2f4858', '#8fa3ad'], // 濃藍 × 灰青
];

function formatTitle(t) {
  // CamelCase → spaced; trim _volXX for compact display
  const cleaned = t.replace(/_vol\d+$/i, '');
  return cleaned.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
}

function buildRow(id, offset = 0) {
  const row = document.getElementById(id);
  if (!row) return;
  const tiles = [];
  const count = 24;
  for (let i = 0; i < count; i++) {
    const idx = (i + offset) % MANGA_TITLES.length;
    const p = palettes[(i + offset) % palettes.length];
    const title = formatTitle(MANGA_TITLES[idx]);
    const num = String(idx + 1).padStart(3, '0');
    tiles.push(
      `<div class="gallery-tile" style="--c1:${p[0]};--c2:${p[1]}">
         <span class="tile-num">#${num}</span>
         <span class="tile-title">${title}</span>
       </div>`
    );
  }
  row.innerHTML = tiles.join('') + tiles.join('');
}
buildRow('row1', 0);
buildRow('row2', 37);
