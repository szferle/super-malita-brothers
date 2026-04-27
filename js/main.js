/* ── FLIP TOGGLE ── */
function toggleFlip(card) {
  card.classList.toggle('flipped');
}

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
  // Highlight the active button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  render(translations[lang]);
}

function render(t) {

  // Navigation links (including Blog)
  document.querySelectorAll('[data-nav]').forEach(el => el.textContent = t.nav[el.dataset.nav]);

  // Hero eyebrow, headline and subtext
  document.querySelector('.hero-eyebrow-text').textContent = t.hero.eyebrow;
  document.querySelector('.hero-h1').innerHTML = t.hero.h1;
  document.querySelector('.hero-sub').textContent = t.hero.sub;

  // Stats bar — 3 numbers with label and tagline
  t.stats.forEach((s, i) => {
    const stat = document.querySelectorAll('.stat')[i];
    stat.querySelector('.stat-num').textContent = s.num;
    stat.querySelector('.stat-label').textContent = s.label;
    stat.querySelector('.stat-sub').textContent = s.sub;
  });

  // Our Craft — 4 specialty cards, no title
  document.querySelector('.best-eyebrow').textContent = t.bestAt.eyebrow;
  document.querySelector('.best-grid').innerHTML = t.bestAt.items.map(item => `
    <div class="best-item">
      <div class="best-num">${item.n}</div>
      <h3>${item.h}</h3>
      <p>${item.p}</p>
      ${item.badge ? `<span class="tolerance-badge">${item.badge}</span>` : ''}
    </div>`).join('');

  // What We Do — flip cards (front: icon+text, back: photo on hover)
  document.querySelector('.services-eyebrow').textContent = t.services.eyebrow;
  document.querySelector('.services-sub').textContent = t.services.sub;
  document.querySelector('.services-grid').innerHTML = t.services.items.map(s => `
    <div class="service-card flip-svc">
      <div class="svc-inner">
        <div class="svc-front">
          <div class="service-icon-wrap">${s.icon}</div>
          <h3>${s.h}</h3>
          <p>${s.p}</p>
        </div>
        <div class="svc-back" style="background-image:url('${s.img}')">
          <div class="svc-back-label">${s.h}</div>
        </div>
      </div>
    </div>`).join('');

  // Who We Are — bio, languages, brother cards
  document.querySelector('.about-eyebrow').textContent = t.about.eyebrow;
  document.querySelector('.about-title').textContent = t.about.title;
  document.querySelector('.about-p1').textContent = t.about.p1;
  document.querySelector('.about-p2').textContent = t.about.p2;
  document.querySelector('.about-p3').textContent = t.about.p3;
  document.querySelector('.about-lang-label').textContent = t.about.languages;
  document.querySelector('.languages-row').innerHTML = t.about.langs.map(l => `<span class="lang-pill">${l}</span>`).join('');
  document.querySelector('.brothers').innerHTML = t.about.brothers.map(b => `
    <div class="brother-card">
      <div class="avatar">${b.init}</div>
      <div class="brother-info">
        <h4>${b.name}</h4>
        <div class="title">${b.title}</div>
        <p>${b.desc}</p>
      </div>
    </div>`).join('');

  // How We Work — photo grid from images/work*.jpg
  document.querySelector('.howwework-eyebrow').textContent = t.howwework.eyebrow;
  buildImageGrid('work-grid', 'work');

  // References — photo grid from images/ref*.jpg
  document.querySelector('.refs-eyebrow').textContent = t.references.eyebrow;
  buildImageGrid('refs-grid', 'ref');

  // Check This Out — static flip cards, just update text
  document.querySelector('.checkthis-eyebrow').textContent = t.checkthis.eyebrow;
  document.querySelector('.checkthis-title').textContent = t.checkthis.title;

  // Contact section (index.html) — split eyebrow into two lines, details + buttons
  const eyebrowParts = t.contact.eyebrow.split('\n');
  const eyeLine1 = document.querySelector('.contact-eyebrow-line1');
  const eyeLine2 = document.querySelector('.contact-eyebrow-line2');
  if (eyeLine1) eyeLine1.textContent = eyebrowParts[0] || '';
  if (eyeLine2) eyeLine2.textContent = eyebrowParts[1] || '';
  document.querySelector('.contact-phone').textContent = t.contact.phone;
  document.querySelector('.contact-email').textContent = t.contact.email;
  document.querySelector('.contact-location').textContent = t.contact.location;
  // Callback and operate buttons
  const cbBtn = document.getElementById('contact-callback-btn');
  if (cbBtn) cbBtn.textContent = t.callbackBtn || 'Request callback';
  const opBtn2 = document.getElementById('contact-operate-btn');
  if (opBtn2) opBtn2.textContent = t.operateBtn || 'See how we work →';

  // Sticker popup
  document.querySelector('.bk-sticker-txt').textContent = t.sticker.txt;
  document.querySelector('.bk-sticker-cta').textContent = t.sticker.cta;
}

function buildImageGrid(gridId, prefix) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  // Build candidate list up to 20 images per prefix
  const candidates = [];
  for (let i = 1; i <= 20; i++) {
    candidates.push(`${prefix}${i}.jpg`);
    candidates.push(`${prefix}${i}.png`);
  }

  grid.innerHTML = candidates.map(f => {
    const webp = f.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return `<div class="ref-tile" data-src="images/${webp}" data-fallback="images/${f}"></div>`;
  }).join('');

  // Try WebP first, fall back to original, hide if neither loads
  grid.querySelectorAll('.ref-tile').forEach(tile => {
    const probe = new Image();
    probe.onload = () => { tile.style.backgroundImage = `url('${tile.dataset.src}')`; };
    probe.onerror = () => {
      const fb = new Image();
      fb.onload = () => { tile.style.backgroundImage = `url('${tile.dataset.fallback}')`; };
      fb.onerror = () => { tile.style.display = 'none'; };
      fb.src = tile.dataset.fallback;
    };
    probe.src = tile.dataset.src;
  });
}

// Updates file upload label with selected filename(s)

function drawPixelArt() {
  const S = 16; // pixel block size in px

  // Colour palette
  const _ = null;         // transparent
  const SK = '#D4A870';   // skin
  const BL = '#000000';   // black (eyes, boots)
  const RE = '#CC1100';   // red cap & buttons (Alex)
  const GE = '#3A9A1A';   // green cap & buttons (Sergiu)
  const OR = '#CC6600';   // orange hi-vis vest
  const GR = '#888888';   // grey pants (Alex)
  const GD = '#555555';   // grey shadow
  const WH = '#DDDDDD';   // white pants (Sergiu)
  const WD = '#AAAAAA';   // white shadow

  // Alex — red cap, grey pants
  const guyA = [
    [_,_,RE,RE,RE,RE,RE,_,_,_],
    [_,_,RE,RE,RE,RE,RE,_,_,_],
    [_,_,RE,RE,RE,RE,RE,RE,RE,_],
    [_,_,SK,SK,SK,SK,SK,_,_,_],
    [_,SK,SK,BL,SK,BL,SK,SK,_,_],
    [_,SK,SK,SK,SK,SK,SK,SK,_,_],
    [_,_,SK,SK,SK,SK,SK,_,_,_],
    [_,OR,OR,OR,OR,OR,OR,OR,_,_],
    [OR,OR,OR,GR,GR,OR,OR,OR,OR,_],
    [OR,OR,GR,GR,GR,GR,OR,OR,OR,_],
    [SK,OR,GR,RE,GR,RE,GR,OR,SK,_],
    [SK,GR,GR,GR,GR,GR,GR,GR,SK,_],
    [_,GR,GR,GR,GR,GR,GR,GR,_,_],
    [_,GD,GR,GR,_,GR,GR,GD,_,_],
    [_,GD,GR,GR,_,GR,GR,GD,_,_],
    [_,GD,GD,GR,_,GR,GD,GD,_,_],
    [BL,BL,BL,BL,_,BL,BL,BL,BL,_],
    [BL,BL,BL,BL,_,BL,BL,BL,BL,_],
  ];

  // Sergiu — green cap, white pants (mirrored in drawChar)
  const guyB = [
    [_,_,_,GE,GE,GE,GE,GE,_,_],
    [_,_,_,GE,GE,GE,GE,GE,_,_],
    [_,GE,GE,GE,GE,GE,GE,GE,_,_],
    [_,_,_,SK,SK,SK,SK,SK,_,_],
    [_,_,SK,SK,BL,SK,BL,SK,SK,_],
    [_,_,SK,SK,SK,SK,SK,SK,SK,_],
    [_,_,_,SK,SK,SK,SK,SK,_,_],
    [_,_,OR,OR,OR,OR,OR,OR,OR,_],
    [_,OR,OR,OR,WH,WH,OR,OR,OR,OR],
    [_,OR,OR,WH,WH,WH,WH,OR,OR,OR],
    [_,SK,OR,WH,GE,WH,GE,WH,OR,SK],
    [_,SK,WH,WH,WH,WH,WH,WH,WH,SK],
    [_,_,WH,WH,WH,WH,WH,WH,WH,_],
    [_,_,WD,WH,WH,_,WH,WH,WD,_],
    [_,_,WD,WH,WH,_,WH,WH,WD,_],
    [_,_,WD,WD,WH,_,WH,WD,WD,_],
    [_,BL,BL,BL,BL,_,BL,BL,BL,BL],
    [_,BL,BL,BL,BL,_,BL,BL,BL,BL],
  ];

  // Render a sprite grid onto a canvas element
  function drawChar(canvasId, grid, mirror) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const rows = grid.length, cols = grid[0].length;
    canvas.width  = cols * S;
    canvas.height = rows * S;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.forEach((row, r) => {
      const dr = mirror ? [...row].reverse() : row;
      dr.forEach((color, c) => {
        if (!color) return;
        ctx.fillStyle = color;
        ctx.fillRect(c * S, r * S, S, S);
      });
    });
  }

  drawChar('mario-canvas', guyA, false); // Alex faces right
  drawChar('luigi-canvas', guyB, true);  // Sergiu mirrored to face left
}

/* ── IMAGE ZOOM — attaches lightbox click to all ref-tile images ── */
function initImageZoom() {
  const lb = document.getElementById('img-lightbox');
  const lbImg = document.getElementById('img-lightbox-img');
  if (!lb || !lbImg) return;

  function attachZoom() {
    document.querySelectorAll('.ref-tile:not([data-zoom])').forEach(tile => {
      tile.setAttribute('data-zoom', '1');
      const raw = tile.style.backgroundImage;
      const src = raw ? raw.replace(/url\(["']?(.+?)["']?\)/, '$1') : '';
      if (src && src !== 'none') {
        tile.addEventListener('click', function() {
          lbImg.src = src;
          lb.classList.add('active');
        });
      }
    });
  }
  attachZoom();
  // Re-run when grid is dynamically populated
  new MutationObserver(attachZoom).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(detectLang());
  drawPixelArt();
  initImageZoom();
});
