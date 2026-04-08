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
  document.querySelector('.hero-location').textContent = t.hero.location;

  /* stats */
  t.stats.forEach((s, i) => {
    document.querySelectorAll('.stat')[i].querySelector('.stat-num').textContent = s.num;
    document.querySelectorAll('.stat')[i].querySelector('.stat-label').textContent = s.label;
    document.querySelectorAll('.stat')[i].querySelector('.stat-sub').textContent = s.sub;
  });

  /* best at */
  document.querySelector('.best-eyebrow').textContent = t.bestAt.eyebrow;
  document.querySelector('.best-title').textContent = t.bestAt.title;
  const bestGrid = document.querySelector('.best-grid');
  bestGrid.innerHTML = t.bestAt.items.map(item => `
    <div class="best-item">
      <div class="best-num">${item.n}</div>
      <h3>${item.h}</h3>
      <p>${item.p}</p>
      ${item.badge ? `<span class="tolerance-badge">${item.badge}</span>` : ''}
    </div>`).join('');

  /* services */
  document.querySelector('.services-eyebrow').textContent = t.services.eyebrow;
  document.querySelector('.services-title').textContent = t.services.title;
  const servGrid = document.querySelector('.services-grid');
  servGrid.innerHTML = t.services.items.map(s => `
    <div class="service-card">
      <div class="service-icon-wrap">${s.icon}</div>
      <h3>${s.h}</h3>
      <p>${s.p}</p>
    </div>`).join('');

  /* about */
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

  /* references */
  document.querySelector('.refs-eyebrow').textContent = t.references.eyebrow;
  document.querySelector('.refs-title').textContent = t.references.title;
  buildSlider(t.references.slides);

  /* contact */
  document.querySelector('.contact-eyebrow').textContent = t.contact.eyebrow;
  document.querySelector('.contact-title').textContent = t.contact.title;
  document.querySelector('.contact-phone').textContent = t.contact.phone;
  document.querySelector('.contact-email').textContent = t.contact.email;
  document.querySelector('.contact-location').textContent = t.contact.location;
  document.getElementById('f-name').placeholder = t.contact.fields.name;
  document.getElementById('f-phone').placeholder = t.contact.fields.phone;
  document.getElementById('f-msg').placeholder = t.contact.fields.message;
  document.querySelector('.file-upload-label span').textContent = t.contact.fields.file;
  document.querySelector('.file-hint').textContent = t.contact.fields.fileHint;
  document.querySelector('.t-send').textContent = t.contact.fields.send;
  document.querySelector('.t-sent').textContent = t.contact.fields.sent;
}

/* ── SLIDER ── */
let slideIndex = 0;
let slideTotal = 0;
let autoSlide;

const catEmojis = ['🐱','🐈','😺','😸','🐾','😻','🙀','😹','🐈‍⬛','😾'];

function buildSlider(slides) {
  slideTotal = slides.length;
  slideIndex = 0;
  const track = document.querySelector('.slider-track');
  const nav = document.querySelector('.slider-nav');
  track.innerHTML = slides.map((s, i) => `
    <div class="slide">
      <div class="slide-placeholder">${catEmojis[i % catEmojis.length]}</div>
      <div class="slide-caption"><h4>${s.h}</h4><p>${s.p}</p></div>
    </div>`).join('');
  nav.innerHTML = slides.map((_, i) => `<button class="slider-dot${i===0?' active':''}" onclick="goSlide(${i})"></button>`).join('');
  goSlide(0);
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goSlide((slideIndex + 1) % slideTotal), 4000);
}

function goSlide(i) {
  slideIndex = i;
  document.querySelector('.slider-track').style.transform = `translateX(-${i * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, j) => d.classList.toggle('active', j === i));
}

function prevSlide() { goSlide((slideIndex - 1 + slideTotal) % slideTotal); resetAuto(); }
function nextSlide() { goSlide((slideIndex + 1) % slideTotal); resetAuto(); }
function resetAuto() { clearInterval(autoSlide); autoSlide = setInterval(() => goSlide((slideIndex + 1) % slideTotal), 4000); }

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

/* ── CONTACT FORM ── */
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  if (!name || !msg) return;
  document.querySelector('.t-sent').style.display = 'block';
  document.getElementById('f-name').value = '';
  document.getElementById('f-phone').value = '';
  document.getElementById('f-msg').value = '';
}

/* ── FILE LABEL ── */
function fileChosen(input) {
  const label = input.closest('.file-upload-label').querySelector('span');
  if (input.files && input.files.length > 0) {
    label.textContent = Array.from(input.files).map(f => f.name).join(', ');
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  drawPixelArt();
});
