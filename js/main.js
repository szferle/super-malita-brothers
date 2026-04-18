/* ── LANGUAGE ── */
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  render(translations[lang]);
}

function render(t) {
  /* nav */
  document.querySelectorAll('[data-nav]').forEach(el => el.textContent = t.nav[el.dataset.nav]);

  /* hero */
  document.querySelector('.hero-eyebrow-text').textContent = t.hero.eyebrow;
  document.querySelector('.hero-h1').innerHTML = t.hero.h1;
  document.querySelector('.hero-sub').textContent = t.hero.sub;

  /* stats */
  t.stats.forEach((s, i) => {
    const stat = document.querySelectorAll('.stat')[i];
    stat.querySelector('.stat-num').textContent = s.num;
    stat.querySelector('.stat-label').textContent = s.label;
    stat.querySelector('.stat-sub').textContent = s.sub;
  });

  /* best at — eyebrow only, no title */
  document.querySelector('.best-eyebrow').textContent = t.bestAt.eyebrow;
  document.querySelector('.best-grid').innerHTML = t.bestAt.items.map(item => `
    <div class="best-item">
      <div class="best-num">${item.n}</div>
      <h3>${item.h}</h3>
      <p>${item.p}</p>
      ${item.badge ? `<span class="tolerance-badge">${item.badge}</span>` : ''}
    </div>`).join('');

  /* services — eyebrow only, no title, sub text, flip cards */
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

  /* about — no gold rule */
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

  /* references — eyebrow only, build grid from images/ */
  document.querySelector('.refs-eyebrow').textContent = t.references.eyebrow;
  buildRefsGrid();

  /* check this out */
  document.querySelector('.checkthis-eyebrow').textContent = t.checkthis.eyebrow;
  document.querySelector('.checkthis-title').textContent = t.checkthis.title;

  /* contact */
  document.querySelector('.contact-eyebrow').textContent = t.contact.eyebrow;
  document.querySelector('.contact-phone').textContent = t.contact.phone;
  document.querySelector('.contact-email').textContent = t.contact.email;
  document.querySelector('.contact-location').textContent = t.contact.location;
  document.querySelector('.fl-name').textContent = t.contact.fields.name;
  document.querySelector('.fl-phone').textContent = t.contact.fields.phone;
  document.querySelector('.fl-email').textContent = t.contact.fields.email;
  document.querySelector('.fl-msg').textContent = t.contact.fields.message;
  document.querySelector('.fl-file').textContent = t.contact.fields.file;
  document.querySelector('.fl-hint').textContent = t.contact.fields.fileHint;
  document.querySelector('.fl-send').textContent = t.contact.fields.send;
  document.getElementById('f-sent').textContent = t.contact.fields.sent;

  /* sticker */
  document.querySelector('.bk-sticker-txt').textContent = t.sticker.txt;
  document.querySelector('.bk-sticker-cta').textContent = t.sticker.cta;
}

/* ── REFERENCES GRID ── */
// Scans images/ for files starting with "ref"
// Since we can't read the filesystem from JS, we probe known names
const REF_IMAGES = ['ref1.png','ref1.jpg','ref2.jpg','ref2.png','ref3.jpg','ref3.png',
  'ref4.jpg','ref4.png','ref5.jpg','ref5.png','ref6.jpg','ref6.png',
  'ref7.jpg','ref7.png','ref8.jpg','ref8.png','ref9.jpg','ref9.png','ref10.jpg','ref10.png'];

function buildRefsGrid() {
  const grid = document.getElementById('refs-grid');
  if (!grid) return;
  // Build image tiles — ones that 404 will show nothing via onerror
  grid.innerHTML = REF_IMAGES.map(f => `
    <div class="ref-tile" style="background-image:url('images/${f}')" data-src="images/${f}">
    </div>`).join('');
  // Hide tiles whose images fail to load
  grid.querySelectorAll('.ref-tile').forEach(tile => {
    const src = tile.dataset.src;
    const img = new Image();
    img.onerror = () => tile.style.display = 'none';
    img.src = src;
  });
}

/* ── CONTACT FORM → GOOGLE FORM ── */
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
  if (!name) return;

  // Submit to Google Form via hidden iframe (no-cors approach)
  const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSeReplaceWithRealFormId/formResponse';
  const params = new URLSearchParams({
    'entry.1260499549': name,
    'entry.1746099490': phone,
    'entry.2126476456': email,
    'entry.1077404047': msg,
    'submit': 'Submit'
  });

  // POST via hidden iframe trick (works without CORS issue, form receives it)
  let iframe = document.getElementById('gform-submit-frame');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'gform-submit-frame';
    iframe.name = 'gform-submit-frame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://docs.google.com/forms/d/1PJkeX2nVvxpg5WDgE5VcfeqzDQHKUJzNgLzHgP4RLZg/formResponse';
  form.target = 'gform-submit-frame';
  const fields = {
    'entry.1260499549': name,
    'entry.1746099490': phone,
    'entry.2126476456': email,
    'entry.1077404047': msg
  };
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

  // Show confirmation
  document.getElementById('f-sent').style.display = 'block';
  document.getElementById('f-name').value = '';
  document.getElementById('f-phone').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-msg').value = '';
}

/* ── PIXEL CONSTRUCTION WORKERS ── */
function drawPixelArt() {
  const S = 16;

  const _ = null;
  const SK = '#D4A870';
  const BL = '#000000';
  const RE = '#CC1100';
  const GE = '#3A9A1A';
  const OR = '#CC6600';
  const GR = '#888888';
  const GD = '#555555';
  const WH = '#DDDDDD';
  const WD = '#AAAAAA';

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

  function drawChar(canvasId, grid, mirror) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const rows = grid.length, cols = grid[0].length;
    canvas.width = cols * S;
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

  drawChar('mario-canvas', guyA, false);
  drawChar('luigi-canvas', guyB, true);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  drawPixelArt();
});
