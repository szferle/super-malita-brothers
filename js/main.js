/* ─────────────────────────────────────────────
   LANGUAGE SWITCHING
   Tracks the active language and re-renders
   all page content when the user switches.
───────────────────────────────────────────── */
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  // Highlight the active language button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  render(translations[lang]);
}

/* ─────────────────────────────────────────────
   MAIN RENDER
   Populates every section with translated text
   from the translations object in translations.js
───────────────────────────────────────────── */
function render(t) {

  // Navigation links
  document.querySelectorAll('[data-nav]').forEach(el => el.textContent = t.nav[el.dataset.nav]);

  // Hero headline and subtext
  document.querySelector('.hero-eyebrow-text').textContent = t.hero.eyebrow;
  document.querySelector('.hero-h1').innerHTML = t.hero.h1;
  document.querySelector('.hero-sub').textContent = t.hero.sub;

  // Stats bar — number, label, and tagline for each of the 3 stats
  t.stats.forEach((s, i) => {
    const stat = document.querySelectorAll('.stat')[i];
    stat.querySelector('.stat-num').textContent = s.num;
    stat.querySelector('.stat-label').textContent = s.label;
    stat.querySelector('.stat-sub').textContent = s.sub;
  });

  // "Our Craft" section — builds the 4 specialty cards dynamically
  document.querySelector('.best-eyebrow').textContent = t.bestAt.eyebrow;
  document.querySelector('.best-grid').innerHTML = t.bestAt.items.map(item => `
    <div class="best-item">
      <div class="best-num">${item.n}</div>
      <h3>${item.h}</h3>
      <p>${item.p}</p>
      ${item.badge ? `<span class="tolerance-badge">${item.badge}</span>` : ''}
    </div>`).join('');

  // "What We Do" section — flip cards that show service image on hover
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

  // "Who We Are" section — bio paragraphs, spoken languages, and brother cards
  document.querySelector('.about-eyebrow').textContent = t.about.eyebrow;
  document.querySelector('.about-title').textContent = t.about.title;
  document.querySelector('.about-p1').textContent = t.about.p1;
  document.querySelector('.about-p2').textContent = t.about.p2;
  document.querySelector('.about-p3').textContent = t.about.p3;
  document.querySelector('.about-lang-label').textContent = t.about.languages;
  document.querySelector('.languages-row').innerHTML = t.about.langs.map(l => `<span class="lang-pill">${l}</span>`).join('');

  // Brother profile cards with avatar, name, title and description
  document.querySelector('.brothers').innerHTML = t.about.brothers.map(b => `
    <div class="brother-card">
      <div class="avatar">${b.init}</div>
      <div class="brother-info">
        <h4>${b.name}</h4>
        <div class="title">${b.title}</div>
        <p>${b.desc}</p>
      </div>
    </div>`).join('');

  // References section — eyebrow label, then grid is built by buildRefsGrid()
  document.querySelector('.refs-eyebrow').textContent = t.references.eyebrow;
  buildRefsGrid();

  // "Check This Out" section — flip cards (render vs real) are static in HTML
  document.querySelector('.checkthis-eyebrow').textContent = t.checkthis.eyebrow;
  document.querySelector('.checkthis-title').textContent = t.checkthis.title;

  // Contact section — eyebrow uses \n to split into two lines
  document.querySelector('.contact-eyebrow').innerHTML = t.contact.eyebrow.replace('\\n', '<br>');
  document.querySelector('.contact-phone').textContent = t.contact.phone;
  document.querySelector('.contact-email').textContent = t.contact.email;
  document.querySelector('.contact-location').textContent = t.contact.location;

  // Contact form field labels and placeholders
  document.querySelector('.fl-name').textContent = t.contact.fields.name;
  document.querySelector('.fl-phone').textContent = t.contact.fields.phone;
  document.querySelector('.fl-email').textContent = t.contact.fields.email;
  document.querySelector('.fl-msg').textContent = t.contact.fields.message;
  document.querySelector('.fl-file').textContent = t.contact.fields.file;
  document.querySelector('.fl-hint').textContent = t.contact.fields.fileHint;
  document.querySelector('.fl-send').textContent = t.contact.fields.send;
  document.getElementById('f-sent').textContent = t.contact.fields.sent;

  // Fixed sticker popup text
  document.querySelector('.bk-sticker-txt').textContent = t.sticker.txt;
  document.querySelector('.bk-sticker-cta').textContent = t.sticker.cta;
}

/* ─────────────────────────────────────────────
   REFERENCES GRID
   Probes a list of known filenames in images/.
   Any image that fails to load (404) is hidden,
   so only real photos appear in the grid.
───────────────────────────────────────────── */
const REF_IMAGES = [
  'ref1.png','ref1.jpg','ref2.jpg','ref2.png','ref3.jpg','ref3.png',
  'ref4.jpg','ref4.png','ref5.jpg','ref5.png','ref6.jpg','ref6.png',
  'ref7.jpg','ref7.png','ref8.jpg','ref8.png','ref9.jpg','ref9.png',
  'ref10.jpg','ref10.png'
];

function buildRefsGrid() {
  const grid = document.getElementById('refs-grid');
  if (!grid) return;

  // Render all candidate tiles as background-image divs
  grid.innerHTML = REF_IMAGES.map(f => `
    <div class="ref-tile" style="background-image:url('images/${f}')" data-src="images/${f}"></div>
  `).join('');

  // Hide any tile whose image doesn't exist
  grid.querySelectorAll('.ref-tile').forEach(tile => {
    const img = new Image();
    img.onerror = () => tile.style.display = 'none';
    img.src = tile.dataset.src;
  });
}

/* ─────────────────────────────────────────────
   CONTACT FORM → GOOGLE FORM SUBMISSION
   Collects field values and POSTs them to the
   Google Form via a hidden iframe (avoids CORS).
   File upload field updates the label on change.
───────────────────────────────────────────── */

// Update file upload label with selected filename(s)
function fileChosen(input) {
  const label = input.closest('.file-upload-label').querySelector('span');
  if (input.files && input.files.length > 0) {
    label.textContent = Array.from(input.files).map(f => f.name).join(', ');
  }
}

function submitForm() {
  const name  = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();

  // Name is required — bail out silently if missing
  if (!name) return;

  // Create a hidden iframe to receive the form POST response
  // (prevents page navigation and avoids CORS errors)
  let iframe = document.getElementById('gform-submit-frame');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'gform-submit-frame';
    iframe.name = 'gform-submit-frame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }

  // Build a temporary form element with Google Form entry IDs as field names
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSeGVlesIFUm-uIUY6xcyr6ORgWLeWA-ishxgBcZnhYBYRg2ow7/formResponse';
  form.target = 'gform-submit-frame';

  // Map our fields to Google Form entry IDs
  const fields = {
    'entry.1806748632': name,
    'entry.73121990':   phone,
    'entry.1419449292': email,
    'entry.313127878':  msg
  };

  // Append each field as a hidden input, then submit
  Object.entries(fields).forEach(([k, v]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = k;
    input.value = v;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);

  // Show confirmation message and clear all fields
  document.getElementById('f-sent').style.display = 'block';
  document.getElementById('f-name').value  = '';
  document.getElementById('f-phone').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-msg').value   = '';
}

/* ─────────────────────────────────────────────
   PIXEL ART — CONSTRUCTION WORKERS
   Draws two characters on <canvas> elements
   using a colour-keyed pixel grid array.
   Guy A faces right, Guy B is mirrored left.
───────────────────────────────────────────── */
function drawPixelArt() {
  const S = 16; // pixel scale in px

  // Colour palette shortcuts
  const _ = null;         // transparent
  const SK = '#D4A870';   // skin
  const BL = '#000000';   // black (eyes, boots)
  const RE = '#CC1100';   // red cap / buttons (Alex)
  const GE = '#3A9A1A';   // green cap / buttons (Sergiu)
  const OR = '#CC6600';   // orange hi-vis vest
  const GR = '#888888';   // grey pants (Alex)
  const GD = '#555555';   // grey shadow
  const WH = '#DDDDDD';   // white pants (Sergiu)
  const WD = '#AAAAAA';   // white shadow

  // Alex — red cap, grey pants, faces right
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

  // Sergiu — green cap, white pants, mirrored to face left
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

  // Draws one character onto a canvas; mirrors the grid if needed
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

  drawChar('mario-canvas', guyA, false);  // Alex — no mirror
  drawChar('luigi-canvas', guyB, true);   // Sergiu — mirrored
}

/* ─────────────────────────────────────────────
   INIT
   Runs after the DOM is ready: set default
   language to English and draw the pixel art.
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  drawPixelArt();
});
