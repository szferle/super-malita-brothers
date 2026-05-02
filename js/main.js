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
  try { localStorage.setItem('smb_lang', lang); } catch(e) {}
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

  // Stats bar - 3 numbers with label and tagline
  t.stats.forEach((s, i) => {
    const stat = document.querySelectorAll('.stat')[i];
    stat.querySelector('.stat-num').textContent = s.num;
    stat.querySelector('.stat-label').textContent = s.label;
    stat.querySelector('.stat-sub').textContent = s.sub;
  });

  // Our Craft - 4 specialty cards, no title
  document.querySelector('.best-eyebrow').textContent = t.bestAt.eyebrow;
  document.querySelector('.best-grid').innerHTML = t.bestAt.items.map(item => `
    <div class="best-item">
      <div class="best-num">${item.n}</div>
      <h3>${item.h}</h3>
      <p>${item.p}</p>
      ${item.badge ? `<span class="tolerance-badge">${item.badge}</span>` : ''}
    </div>`).join('');

  // What We Do - flip cards (front: icon+text, back: photo on hover)
  document.querySelector('.services-eyebrow').textContent = t.services.eyebrow;
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

  // Who We Are - bio, languages, brother cards
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

  // References - ref images then work images
  document.querySelector('.refs-eyebrow').textContent = t.references.eyebrow;
  buildImageGrid('refs-grid', 'ref');
  buildImageGrid('work-grid', 'work');

  // Check This Out - static flip cards, just update text
  document.querySelector('.checkthis-eyebrow').textContent = t.checkthis.eyebrow;
  document.querySelector('.checkthis-title').textContent = t.checkthis.title;

  // Contact section (index.html) - split eyebrow into two lines, details + buttons
  const eyebrowParts = t.contact.eyebrow.split('\n');
  const eyeLine1 = document.querySelector('.contact-eyebrow-line1');
  const eyeLine2 = document.querySelector('.contact-eyebrow-line2');
  if (eyeLine1) eyeLine1.textContent = eyebrowParts[0] || '';
  if (eyeLine2) eyeLine2.textContent = eyebrowParts[1] || '';
  const phEl = document.querySelector('.contact-phone');
  if (phEl) { phEl.textContent = t.contact.phone; phEl.href = 'tel:' + t.contact.phone.replace(/\s/g, ''); }
  const emEl = document.querySelector('.contact-email');
  if (emEl) { emEl.textContent = t.contact.email; emEl.href = 'mailto:' + t.contact.email; }
  document.querySelector('.contact-location').textContent = t.contact.location;
  // Callback and operate buttons
  const cbBtn = document.getElementById('contact-callback-btn');
  if (cbBtn) cbBtn.textContent = t.callbackBtn || 'Request callback';

  // Sticker popup
  document.querySelector('.bk-sticker-txt').textContent = t.sticker.txt;
  document.querySelector('.bk-sticker-cta').textContent = t.sticker.cta;
}

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

  // Alex - red cap, grey pants
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

  // Sergiu - green cap, white pants (mirrored in drawChar)
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

/* ── IMAGE ZOOM - attaches lightbox click to all ref-tile images ── */
function initImageZoom() {
  const lb = document.getElementById('img-lightbox');
  const lbImg = document.getElementById('img-lightbox-img');
  if (!lb || !lbImg) return;
  let zoomSrcs = [], zoomIdx = 0;

  function showLightbox(srcs, idx) {
    zoomSrcs = srcs; zoomIdx = idx;
    lbImg.src = srcs[idx];
    lb.style.display = 'flex';
    const counter = document.getElementById('lb-counter');
    const prev = document.getElementById('lb-prev');
    const next = document.getElementById('lb-next');
    if (counter) counter.textContent = (idx + 1) + ' / ' + srcs.length;
    if (prev) prev.style.display = srcs.length > 1 ? 'flex' : 'none';
    if (next) next.style.display = srcs.length > 1 ? 'flex' : 'none';
  }

  window.lbPrev = function(e) {
    e.stopPropagation();
    zoomIdx = (zoomIdx - 1 + zoomSrcs.length) % zoomSrcs.length;
    showLightbox(zoomSrcs, zoomIdx);
  };
  window.lbNext = function(e) {
    e.stopPropagation();
    zoomIdx = (zoomIdx + 1) % zoomSrcs.length;
    showLightbox(zoomSrcs, zoomIdx);
  };

  lb.onclick = function(e) {
    if (e.target === lb || e.target === lbImg) lb.style.display = 'none';
  };

  document.addEventListener('keydown', function(e) {
    if (lb.style.display === 'none') return;
    if (e.key === 'ArrowLeft') lbPrev(e);
    if (e.key === 'ArrowRight') lbNext(e);
    if (e.key === 'Escape') lb.style.display = 'none';
  });

  function getSrc(el) {
    return el.getAttribute('data-img-src') ||
      (el.style.backgroundImage || '').replace(/url\(["']?(.+?)["']?\)/, '$1');
  }

  function attachGridZoom(selector) {
    document.querySelectorAll(selector + ':not([data-zoom])').forEach(grid => {
      grid.setAttribute('data-zoom', '1');
      grid.addEventListener('click', function(e) {
        const tile = e.target.closest('.ref-tile, .check-img');
        if (!tile) return;
        const tiles = Array.from(grid.querySelectorAll('.ref-tile, .check-img'));
        const srcs = tiles.map(getSrc).filter(Boolean);
        const idx = tiles.indexOf(tile);
        if (idx >= 0 && srcs[idx]) showLightbox(srcs, idx);
      });
    });
  }

  function attachAll() {
    attachGridZoom('#refs-grid');
    attachGridZoom('#work-grid');
    attachGridZoom('#check-grid');
  }

  attachAll();
  new MutationObserver(attachAll).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(detectLang());
  drawPixelArt();
  initImageZoom();
});function buildImageGrid(gridId, prefix) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';

  // Map prefix to image subfolder
  const folderMap = { ref: 'images/ref/', work: 'images/work/', check: 'images/check/' };
  const folder = folderMap[prefix] || ('images/' + prefix + '/');

  // Probe sequentially: webp only
  let i = 1, consecutive404 = 0;

  function probeNext() {
    if (consecutive404 >= 3) return;
    const idx = i++;
    const webpSrc = folder + prefix + idx + '.webp';

    const probe = new Image();
    probe.onload = function() {
      consecutive404 = 0;
      addTile(webpSrc);
      probeNext();
    };
    probe.onerror = function() {
      consecutive404++;
      probeNext();
    };
    probe.src = webpSrc;
  }

  function addTile(src) {
    const tile = document.createElement('div');
    tile.className = 'ref-tile';
    tile.style.backgroundImage = "url('" + src + "')";
    tile.setAttribute('data-img-src', src);
    grid.appendChild(tile);
  }

  probeNext();
}
