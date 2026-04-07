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

/* ── PIXEL MARIO ART ── */
function drawPixelArt() {
  const scale = 14;

  /* Mario — red cap, grey pants */
  const marioData = [
    [0,0,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,2,2,3,3,3,2,3,0,0],
    [2,3,2,3,3,3,2,3,3,2],
    [2,3,2,2,3,3,3,2,3,2],
    [2,2,3,3,3,3,2,2,2,2],
    [0,0,1,1,4,1,1,0,0,0],
    [0,1,1,1,4,1,1,1,0,0],
    [1,1,1,1,4,4,1,1,1,0],
    [3,3,1,4,5,4,1,3,3,0],
    [3,3,3,4,5,4,3,3,3,0],
    [3,3,4,4,0,4,4,3,0,0],
    [0,2,2,0,0,0,2,2,0,0],
    [2,2,2,0,0,0,2,2,2,0],
  ];

  /* Luigi — green cap, white pants */
  const luigiData = [
    [0,0,6,6,6,6,6,0,0,0],
    [0,6,6,6,6,6,6,6,6,0],
    [0,2,2,3,3,3,2,3,0,0],
    [2,3,2,3,3,3,2,3,3,2],
    [2,3,2,2,3,3,3,2,3,2],
    [2,2,3,3,3,3,2,2,2,2],
    [0,0,6,6,4,6,6,0,0,0],
    [0,6,6,6,4,6,6,6,0,0],
    [6,6,6,6,4,4,6,6,6,0],
    [3,3,6,4,5,4,6,3,3,0],
    [3,3,3,4,5,4,3,3,3,0],
    [3,3,4,4,0,4,4,3,0,0],
    [0,7,7,0,0,0,7,7,0,0],
    [7,7,7,0,0,0,7,7,7,0],
  ];

  const colors = {
    0: null,
    1: '#CC2200', // Mario red
    2: '#F5A623', // skin
    3: '#5D3A1A', // brown hair/shoes
    4: '#7A7A7A', // grey pants (Mario)
    5: '#5A5A5A', // grey pants shadow
    6: '#2A8C2A', // Luigi green
    7: '#F5F5F5', // white pants (Luigi)
    8: '#D4D4D4', // white pants shadow
  };
  // override luigi's leg color
  const luigiColors = { ...colors, 4: '#E0E0E0', 5: '#C8C8C8' };

  function drawChar(canvasId, data, colorMap) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const rows = data.length, cols = data[0].length;
    canvas.width = cols * scale;
    canvas.height = rows * scale;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach((row, r) => {
      row.forEach((cell, c) => {
        const color = colorMap[cell];
        if (!color) return;
        ctx.fillStyle = color;
        ctx.fillRect(c * scale, r * scale, scale, scale);
      });
    });
  }

  drawChar('mario-canvas', marioData, colors);
  drawChar('luigi-canvas', luigiData, luigiColors);
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
