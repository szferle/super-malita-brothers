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

/* ── CALENDAR / BOOKING ── */

// Blocked dates loaded from blocked-dates.txt (parsed at runtime)
// Format: YYYY-MM-DD singles, or YYYY-MM-DD to YYYY-MM-DD ranges
const BLOCKED_DATES_TEXT = `2026-05-10
2026-05-20 to 2026-05-25`;

function parseBlockedDates(text) {
  const blocked = new Set();
  text.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    if (line.includes(' to ')) {
      const [startStr, endStr] = line.split(' to ').map(s => s.trim());
      const start = new Date(startStr);
      const end = new Date(endStr);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        blocked.add(d.toISOString().slice(0, 10));
      }
    } else {
      blocked.add(line);
    }
  });
  return blocked;
}

const blockedDates = parseBlockedDates(BLOCKED_DATES_TEXT);

let calYear, calMonth, selectedDate = null;

function initCalendar() {
  const now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth();
  renderCalendar();
}

function renderCalendar() {
  const monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
  document.getElementById('cal-month-label').textContent = monthNames[calMonth] + ' ' + calYear;

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  const today = new Date();
  today.setHours(0,0,0,0);

  // First day of month (0=Sun..6=Sat), convert to Mon-first (0=Mon..6=Sun)
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const offset = (firstDay === 0) ? 6 : firstDay - 1;
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  // Empty cells
  for (let i = 0; i < offset; i++) {
    const el = document.createElement('div');
    el.className = 'cal-day empty';
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement('div');
    el.textContent = d;
    const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const date = new Date(calYear, calMonth, d);

    if (date < today) {
      el.className = 'cal-day past';
    } else if (blockedDates.has(dateStr)) {
      el.className = 'cal-day blocked';
      el.title = 'Not available';
    } else {
      el.className = 'cal-day available';
      if (dateStr === selectedDate) el.classList.add('selected');
      if (date.getTime() === today.getTime()) el.classList.add('today');
      el.onclick = () => selectDate(dateStr, d);
    }
    grid.appendChild(el);
  }
}

function selectDate(dateStr, day) {
  selectedDate = dateStr;
  renderCalendar();
  const form = document.getElementById('booking-form');
  form.style.display = 'block';
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  document.getElementById('booking-selected-date').textContent =
    '📅 ' + months[calMonth] + ' ' + day + ', ' + calYear;
  document.getElementById('bk-sent').style.display = 'none';
  form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function calPrev() {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
}

function calNext() {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
}

function submitBooking() {
  const name = document.getElementById('bk-name').value.trim();
  if (!name || !selectedDate) return;
  const sent = document.getElementById('bk-sent');
  sent.style.display = 'block';
  document.getElementById('bk-name').value = '';
  document.getElementById('bk-phone').value = '';
  document.getElementById('bk-note').value = '';
  selectedDate = null;
  setTimeout(() => {
    document.getElementById('booking-form').style.display = 'none';
    renderCalendar();
  }, 3000);
}

/* ── BOOKING TRANSLATIONS ── */
const bookingT = {
  en: {
    eyebrow: 'Free assessment',
    title: 'Book a free on-site assessment!',
    sub: 'Pick an available date and we\'ll come to you — no obligation, no cost.',
    legAvail: 'Available', legBlocked: 'Not available', legSel: 'Selected',
    labelName: 'Your name', labelPhone: 'Phone number', labelNote: 'Project notes (optional)',
    sendBtn: 'Confirm booking',
    sent: 'Booking received! We\'ll confirm your appointment shortly.',
    sticker: 'Book us for your next project!', stickerCta: 'Book free visit →'
  },
  hu: {
    eyebrow: 'Ingyenes felmérés',
    title: 'Foglalj ingyenes helyszíni felmérést!',
    sub: 'Válassz szabad napot és kimegyünk hozzád — kötelezettség és költség nélkül.',
    legAvail: 'Szabad', legBlocked: 'Foglalt', legSel: 'Kiválasztva',
    labelName: 'Neved', labelPhone: 'Telefonszám', labelNote: 'Megjegyzés (opcionális)',
    sendBtn: 'Foglalás megerősítése',
    sent: 'Foglalás megérkezett! Hamarosan visszaigazoljuk.',
    sticker: 'Foglalj minket a következő projektedhez!', stickerCta: 'Ingyenes felmérés →'
  },
  ro: {
    eyebrow: 'Evaluare gratuită',
    title: 'Programează o evaluare gratuită la fața locului!',
    sub: 'Alege o dată disponibilă și venim la tine — fără obligații, fără costuri.',
    legAvail: 'Disponibil', legBlocked: 'Indisponibil', legSel: 'Selectat',
    labelName: 'Numele tău', labelPhone: 'Număr de telefon', labelNote: 'Note proiect (opțional)',
    sendBtn: 'Confirmă programarea',
    sent: 'Programare primită! Te confirmăm în scurt timp.',
    sticker: 'Rezervă-ne pentru următorul tău proiect!', stickerCta: 'Evaluare gratuită →'
  }
};

function renderBookingLang(lang) {
  const t = bookingT[lang];
  document.querySelector('.booking-eyebrow').textContent = t.eyebrow;
  document.querySelector('.booking-title').textContent = t.title;
  document.querySelector('.booking-sub').textContent = t.sub;
  document.querySelector('.leg-txt-available').textContent = t.legAvail;
  document.querySelector('.leg-txt-blocked').textContent = t.legBlocked;
  document.querySelector('.leg-txt-selected').textContent = t.legSel;
  document.querySelector('.bk-label-name').textContent = t.labelName;
  document.querySelector('.bk-label-phone').textContent = t.labelPhone;
  document.querySelector('.bk-label-note').textContent = t.labelNote;
  document.querySelector('.bk-send-btn').textContent = t.sendBtn;
  document.getElementById('bk-sent').textContent = t.sent;
  document.querySelector('.bk-sticker-txt').textContent = t.sticker;
  document.querySelector('.bk-sticker-cta').textContent = t.stickerCta;
}

// Hook into existing setLang
const _origSetLang = setLang;
setLang = function(lang) {
  _origSetLang(lang);
  renderBookingLang(lang);
};

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();
  renderBookingLang('en');
});
