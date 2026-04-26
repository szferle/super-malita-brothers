/* ─────────────────────────────────────────────
   BLOG — LANGUAGE DETECTION & SWITCHING
   Detects browser language on first load.
   All content re-renders when language changes.
───────────────────────────────────────────── */
let currentLang = 'en';

function detectLang() {
  const langs = navigator.languages || [navigator.language || 'en'];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase();
    if (code === 'hu') return 'hu';
    if (code === 'ro') return 'ro';
    if (code === 'en') return 'en';
  }
  return 'en';
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderBlog(translations[lang]);
  // Re-run calculators so translated labels refresh
  updateFloorCalc();
  updatePaintCalc();
}

/* ─────────────────────────────────────────────
   CALCULATOR LABELS — translated strings
   Keyed by language for field labels / result
   prefixes used inside the calculators.
───────────────────────────────────────────── */
const calcLabels = {
  en: {
    calcWord: "Calculator",
    roomSize: "Room size", cuttingLoss: "Cutting loss (fixed)",
    floorNeeded: "Floor needed", packSize: "Coverage per pack",
    packsNeeded: "Packs needed", packUnit: "m²/pack", packs: "packs",
    height: "Ceiling height", length: "Room length", width: "Room width",
    doors: "Doors", windows: "Windows", addDoor: "+ Add door", addWin: "+ Add window",
    doorLabel: "Door", winLabel: "Window", heightLbl: "Height", widthLbl: "Width",
    cmUnit: "cm",
    surface: "Surface area", coats: "Coats of paint",
    bucketL: "Bucket size", bucketM2: "Coverage on bucket",
    litresNeeded: "Litres needed", bucketsNeeded: "Buckets needed",
    bucketLUnit: "L/bucket", bucketM2Unit: "m²/bucket",
    bucketLPlaceholder: "e.g. 15", bucketM2Placeholder: "e.g. 135",
    litreUnit: "L", bucketWord: "bucket", bucketsWord: "buckets"
  },
  hu: {
    calcWord: "Kalkulátor",
    roomSize: "Helyiség mérete", cuttingLoss: "Vágási veszteség (rögzített)",
    floorNeeded: "Szükséges padló", packSize: "Csomag tartalma",
    packsNeeded: "Szükséges csomagok", packUnit: "m²/csomag", packs: "csomag",
    height: "Belmagasság", length: "Helyiség hossza", width: "Helyiség szélessége",
    doors: "Ajtók", windows: "Ablakok", addDoor: "+ Ajtó hozzáadása", addWin: "+ Ablak hozzáadása",
    doorLabel: "Ajtó", winLabel: "Ablak", heightLbl: "Magasság", widthLbl: "Szélesség",
    cmUnit: "cm",
    surface: "Felület", coats: "Festési rétegek",
    bucketL: "Vödör mérete", bucketM2: "Fedőképesség",
    litresNeeded: "Szükséges literek", bucketsNeeded: "Szükséges vödrök",
    bucketLUnit: "l/vödör", bucketM2Unit: "m²/vödör",
    bucketLPlaceholder: "pl. 15", bucketM2Placeholder: "pl. 135",
    litreUnit: "l", bucketWord: "vödör", bucketsWord: "vödör"
  },
  ro: {
    calcWord: "Calculator",
    roomSize: "Suprafața camerei", cuttingLoss: "Pierderi la tăiere (fixe)",
    floorNeeded: "Pardoseli necesare", packSize: "Conținut pachet",
    packsNeeded: "Pachete necesare", packUnit: "m²/pachet", packs: "pachete",
    height: "Înălțimea tavanului", length: "Lungimea camerei", width: "Lățimea camerei",
    doors: "Uși", windows: "Ferestre", addDoor: "+ Adaugă ușă", addWin: "+ Adaugă fereastră",
    doorLabel: "Ușa", winLabel: "Fereastra", heightLbl: "Înălțime", widthLbl: "Lățime",
    cmUnit: "cm",
    surface: "Suprafața", coats: "Straturi de vopsea",
    bucketL: "Dimensiune găleată", bucketM2: "Acoperire pe găleată",
    litresNeeded: "Litri necesari", bucketsNeeded: "Găleți necesare",
    bucketLUnit: "L/găleată", bucketM2Unit: "m²/găleată",
    bucketLPlaceholder: "ex. 15", bucketM2Placeholder: "ex. 135",
    litreUnit: "L", bucketWord: "găleată", bucketsWord: "găleți"
  }
};

// Parses a number string accepting both "." and "," as decimal separator
function parseNum(val) {
  if (!val) return 0;
  return parseFloat(String(val).replace(',', '.')) || 0;
}

/* ─────────────────────────────────────────────
   BLOG RENDER
   Builds the full blog page from translations.
   Each post renders intro, body, bullets, calc.
───────────────────────────────────────────── */
function renderBlog(t) {
  // Nav links
  document.querySelectorAll('[data-nav]').forEach(el => el.textContent = t.nav[el.dataset.nav]);

  // Page header
  document.querySelector('.blog-eyebrow').textContent = t.blog.eyebrow;
  document.querySelector('.blog-hero-title').textContent = t.blog.title;

  // Build posts — preserve state of existing calc inputs before re-render
  const floorRoomVal = document.getElementById('floor-room-size')?.value || '';
  const floorPackVal = document.getElementById('floor-pack-size')?.value || '';
  const pHeightVal   = document.getElementById('p-height')?.value || '2.6';
  const pLenVal      = document.getElementById('p-length')?.value || '';
  const pWidVal      = document.getElementById('p-width')?.value || '';
  const pCoatsVal    = document.getElementById('p-coats')?.value || '2';
  const pBLVal       = document.getElementById('p-bucket-litres')?.value || '';
  const pBMVal       = document.getElementById('p-bucket-coverage')?.value || '';

  const container = document.getElementById('blog-posts');
  const lbl = calcLabels[currentLang];

  container.innerHTML = t.blog.posts.map(post => `
    <article class="blog-post" id="${post.id}">
      <div class="blog-post-inner">
        <h2 class="blog-post-title">${post.title}</h2>
        <p class="blog-post-intro">${post.intro}</p>
        ${post.body ? `<p class="blog-post-body">${post.body.replace(/\\n/g,"<br>")}</p>` : ''}
        ${post.bullets ? renderBullets(post.bullets) : ''}
        ${post.calculator === 'floor' ? renderFloorCalc(lbl) : ''}
        ${post.calculator === 'paint' ? renderPaintCalc(lbl) : ''}
      </div>
    </article>
  `).join('');

  // Restore field values after re-render
  const setVal = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
  setVal('floor-room-size', floorRoomVal);
  setVal('floor-pack-size', floorPackVal);
  setVal('p-height', pHeightVal);
  setVal('p-length', pLenVal);
  setVal('p-width', pWidVal);
  setVal('p-coats', pCoatsVal);
  setVal('p-bucket-litres', pBLVal);
  setVal('p-bucket-coverage', pBMVal);

  // Reset door/window counters and re-run calcs
  doorCount = 0; windowCount = 0;
  updateFloorCalc();
  updatePaintCalc();

  // Scroll to hash anchor if present
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
  }
}

/* ─────────────────────────────────────────────
   BULLET LIST RENDERER
───────────────────────────────────────────── */
function renderBullets(bullets) {
  return `<ul class="blog-bullets">
    ${bullets.map(b => `
      <li>
        <strong>${b.title}</strong>
        <p>${b.text}</p>
      </li>`).join('')}
  </ul>`;
}

/* ─────────────────────────────────────────────
   FLOOR CALCULATOR
   Room size × 1.1 = floor needed (m²).
   Floor needed ÷ pack size = packs (rounded UP).
   Accepts "." or "," as decimal separator.
───────────────────────────────────────────── */
function renderFloorCalc(lbl) {
  return `
    <div class="calc-box" id="floor-calc-box">
      <h3 class="calc-title">🧮 ${lbl.calcWord || "Calculator"}</h3>
      <div class="calc-row">
        <label class="calc-label">${lbl.roomSize}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="floor-room-size" placeholder="0" oninput="updateFloorCalc()" />
          <span class="calc-unit">m²</span>
        </div>
      </div>
      <div class="calc-row calc-fixed">
        <span class="calc-label">${lbl.cuttingLoss}</span>
        <span class="calc-value-fixed">10%</span>
      </div>
      <div class="calc-result-row">
        <span class="calc-label">${lbl.floorNeeded}</span>
        <span class="calc-result" id="floor-needed-result">—</span>
      </div>
      <div class="calc-divider"></div>
      <div class="calc-row">
        <label class="calc-label">${lbl.packSize}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="floor-pack-size" placeholder="0" oninput="updateFloorCalc()" />
          <span class="calc-unit">${lbl.packUnit}</span>
        </div>
      </div>
      <div class="calc-result-row">
        <span class="calc-label">${lbl.packsNeeded}</span>
        <span class="calc-result" id="floor-packs-result">—</span>
      </div>
    </div>`;
}

function updateFloorCalc() {
  const roomSize   = parseNum(document.getElementById('floor-room-size')?.value);
  const packSize   = parseNum(document.getElementById('floor-pack-size')?.value);
  const lbl        = calcLabels[currentLang];
  const floorNeeded = roomSize * 1.1;
  const floorEl    = document.getElementById('floor-needed-result');
  const packsEl    = document.getElementById('floor-packs-result');
  if (floorEl) floorEl.textContent = roomSize > 0 ? floorNeeded.toFixed(2) + ' m²' : '—';
  if (packsEl) packsEl.textContent = (roomSize > 0 && packSize > 0)
    ? Math.ceil(floorNeeded / packSize) + ' ' + lbl.packs : '—';
}

/* ─────────────────────────────────────────────
   PAINT CALCULATOR
   Walls + ceiling − doors − windows = surface.
   surface × coats ÷ m²/bucket × L/bucket = litres.
   Buckets = Math.ceil(litres ÷ L/bucket).
   Accepts "." or "," as decimal. All rounded up.
───────────────────────────────────────────── */
let doorCount = 0;
let windowCount = 0;

function renderPaintCalc(lbl) {
  return `
    <div class="calc-box" id="paint-calc-box">
      <h3 class="calc-title">🧮 ${lbl.calcWord || "Calculator"}</h3>
      <div class="calc-row">
        <label class="calc-label">${lbl.height}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-height" value="2.6" oninput="updatePaintCalc()" />
          <span class="calc-unit">m</span>
        </div>
      </div>
      <div class="calc-row">
        <label class="calc-label">${lbl.length}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-length" placeholder="0" oninput="updatePaintCalc()" />
          <span class="calc-unit">m</span>
        </div>
      </div>
      <div class="calc-row">
        <label class="calc-label">${lbl.width}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-width" placeholder="0" oninput="updatePaintCalc()" />
          <span class="calc-unit">m</span>
        </div>
      </div>

      <div class="calc-openings-section">
        <div class="calc-openings-header">
          <span class="calc-label">${lbl.doors}</span>
          <button class="calc-add-btn" onclick="addOpening('door')">${lbl.addDoor}</button>
        </div>
        <div id="door-list"></div>
        <div class="calc-openings-header" style="margin-top:0.75rem;">
          <span class="calc-label">${lbl.windows}</span>
          <button class="calc-add-btn" onclick="addOpening('window')">${lbl.addWin}</button>
        </div>
        <div id="window-list"></div>
      </div>

      <div class="calc-divider"></div>
      <div class="calc-result-row">
        <span class="calc-label">${lbl.surface}</span>
        <span class="calc-result" id="paint-surface-result">—</span>
      </div>
      <div class="calc-divider"></div>

      <div class="calc-row">
        <label class="calc-label">${lbl.coats}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-coats" value="2" oninput="updatePaintCalc()" />
        </div>
      </div>
      <div class="calc-row">
        <label class="calc-label">${lbl.bucketL}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-bucket-litres" placeholder="${lbl.bucketLPlaceholder}" oninput="updatePaintCalc()" />
          <span class="calc-unit">${lbl.bucketLUnit}</span>
        </div>
      </div>
      <div class="calc-row">
        <label class="calc-label">${lbl.bucketM2}</label>
        <div class="calc-input-group">
          <input type="text" inputmode="decimal" id="p-bucket-coverage" placeholder="${lbl.bucketM2Placeholder}" oninput="updatePaintCalc()" />
          <span class="calc-unit">${lbl.bucketM2Unit}</span>
        </div>
      </div>
      <div class="calc-result-row">
        <span class="calc-label">${lbl.litresNeeded}</span>
        <span class="calc-result" id="paint-litres-result">—</span>
      </div>
      <div class="calc-result-row">
        <span class="calc-label">${lbl.bucketsNeeded}</span>
        <span class="calc-result" id="paint-buckets-result">—</span>
      </div>
    </div>`;
}

function addOpening(type) {
  const lbl    = calcLabels[currentLang];
  const listId = type === 'door' ? 'door-list' : 'window-list';
  const list   = document.getElementById(listId);
  if (!list) return;
  const idx  = type === 'door' ? ++doorCount : ++windowCount;
  const id   = `${type}-${idx}`;
  const name = type === 'door' ? lbl.doorLabel : lbl.winLabel;
  const div  = document.createElement('div');
  div.className = 'calc-opening-row';
  div.id = `row-${id}`;
  div.innerHTML = `
    <span class="opening-label">${name} ${idx}</span>
    <div class="calc-input-group small">
      <input type="text" inputmode="decimal" id="${id}-h" placeholder="${lbl.heightLbl}" oninput="updatePaintCalc()" />
      <span class="calc-unit">${lbl.cmUnit}</span>
    </div>
    <span style="color:var(--text-muted);font-size:15px;">×</span>
    <div class="calc-input-group small">
      <input type="text" inputmode="decimal" id="${id}-w" placeholder="${lbl.widthLbl}" oninput="updatePaintCalc()" />
      <span class="calc-unit">${lbl.cmUnit}</span>
    </div>
    <button class="calc-remove-btn" onclick="removeOpening('${id}')">✕</button>`;
  list.appendChild(div);
  updatePaintCalc();
}

function removeOpening(id) {
  const row = document.getElementById(`row-${id}`);
  if (row) row.remove();
  updatePaintCalc();
}

function updatePaintCalc() {
  const lbl = calcLabels[currentLang];
  const h   = parseNum(document.getElementById('p-height')?.value);
  const l   = parseNum(document.getElementById('p-length')?.value);
  const w   = parseNum(document.getElementById('p-width')?.value);

  const clear = () => {
    ['paint-surface-result','paint-litres-result','paint-buckets-result'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = '—';
    });
  };

  if (!h || !l || !w) { clear(); return; }

  // Walls × 2 each side + ceiling
  let surface = (l * h * 2) + (w * h * 2) + (l * w);

  // Subtract doors (entered in cm → convert to m²)
  document.querySelectorAll('[id^="door-"][id$="-h"]').forEach(hEl => {
    const base = hEl.id.replace('-h', '');
    surface -= (parseNum(hEl.value) / 100) * (parseNum(document.getElementById(base + '-w')?.value) / 100);
  });

  // Subtract windows (cm → m²)
  document.querySelectorAll('[id^="window-"][id$="-h"]').forEach(hEl => {
    const base = hEl.id.replace('-h', '');
    surface -= (parseNum(hEl.value) / 100) * (parseNum(document.getElementById(base + '-w')?.value) / 100);
  });

  surface = Math.max(0, surface);

  const coats    = parseNum(document.getElementById('p-coats')?.value) || 2;
  const bucketL  = parseNum(document.getElementById('p-bucket-litres')?.value);
  const bucketM2 = parseNum(document.getElementById('p-bucket-coverage')?.value);

  const surfEl = document.getElementById('paint-surface-result');
  const litEl  = document.getElementById('paint-litres-result');
  const bukEl  = document.getElementById('paint-buckets-result');

  if (surfEl) surfEl.textContent = surface.toFixed(2) + ' m²';

  if (bucketM2 > 0 && bucketL > 0) {
    // Litres = (surface × coats) / (m² per bucket) × (L per bucket)
    const litres  = (surface * coats / bucketM2) * bucketL;
    const buckets = Math.ceil(litres / bucketL);
    if (litEl) litEl.textContent = litres.toFixed(1) + ' ' + lbl.litreUnit;
    if (bukEl) bukEl.textContent = buckets + ' ' + (buckets === 1 ? lbl.bucketWord : lbl.bucketsWord);
  } else {
    if (litEl) litEl.textContent = '—';
    if (bukEl) bukEl.textContent = '—';
  }
}

/* ─────────────────────────────────────────────
   INIT — detect language and render blog
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(detectLang());
});
