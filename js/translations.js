/* ─────────────────────────────────────────────
   TRANSLATIONS
   All user-facing text for the three languages:
   English (en), Hungarian (hu), Romanian (ro).
   Each language object mirrors the same structure.
   To add/edit content, change the values here —
   the render() function in main.js picks them up.
───────────────────────────────────────────── */
const translations = {
  /* ── ENGLISH ── */
  en: {
    // nav
    nav: { services: "Services", about: "About", references: "References", contact: "Contact" },
    // hero
    hero: {
      eyebrow: "Szeged & Surroundings",
      h1: "Built by brothers.<br><em>Built to last.</em>",
      sub: "Premium construction and renovation services delivered with craftsmanship and precision."
    },
    // stats
    stats: [
      { num: "15+", label: "Years of experience", sub: "Our father taught us well" },
      { num: "100+", label: "Completed projects", sub: "Internationally" },
      { num: "100%", label: "Client satisfaction", sub: "We are recommended!" }
    ],
    // bestAt
    bestAt: {
      eyebrow: "Our craft",
      items: [
        { n:"01", h:"Smooth surfaces & Q5 grouting", p:"Flawlessly smooth walls, ceilings and professional Q5 joints — the finish that speaks for itself." },
        { n:"02", h:"Walk-in showers", p:"Custom walk-in shower installations designed for comfort, flow, and elegance." },
        { n:"03", h:"Herring pattern", p:"Intricate herringbone tile work laid with geometric precision and an eye for visual rhythm." },
        { n:"04", h:"<1 mm tolerance", p:"We work to sub-millimetre accuracy. Because quality shows in the details." }
      ]
    },
    // services
    services: {
      eyebrow: "What we do",
      sub: "We can work with a designed image or share your ideas with us!",
      items: [
        { icon:"🖌️", h:"Wall painting", p:"Interior and exterior painting with premium finishes. Perfect colour, perfect texture, every time.", img:"images/svc-painting.jpg" },
        { icon:"🏗️", h:"Drywall installation", p:"Precision drywall installation — smooth, straight, durable.", img:"images/svc-drywall.jpg" },
        { icon:"🪟", h:"Tile installation", p:"From herringbone to large-format tiles, installed with meticulous care and sub-mm precision.", img:"images/svc-tile.jpg" }
      ]
    },
    // about
    about: {
      eyebrow: "Who we are",
      title: "Two brothers, one mission",
      p1: "We are Alex and Sergiu, brothers, and we live in Szeged with our families. Together we bring decades of hands-on experience across Europe to every project we take on.",
      p2: "Alex is a painter, drywall installer, and interior designer. Sergiu is a flooring specialist. Both are fully licensed with years of experience working in different countries.",
      p3: "We believe great work comes from people who genuinely care. No subcontractors, no shortcuts — just the two of us, on every job.",
      languages: "We speak:",
      langs: ["English", "French", "German", "Romanian"],
      brothers: [
        { init:"S", name:"Malita Sergiu", title:"Floor installation", desc:"Flooring specialist. Precision tile and surface installation at the highest level." },
        { init:"A", name:"Malita Alex", title:"Paint & drywall", desc:"Painter, drywall installer and interior designer with international experience." }
      ]
    },
    // references
    references: {
      eyebrow: "Our work — References"
    },
    // checkthis
    checkthis: {
      eyebrow: "Check this out",
      title: "From Vision to Built Perfection"
    },
    // contact
    contact: {
      eyebrow: "Get in touch\n— Book a free on-site assessment!",
      phone: "123",
      email: "supermalitabrothers@gmail.com",
      location: "Szeged & surroundings",
      fields: {
        name: "Name", phone: "Phone", email: "Email (Optional)",
        message: "Message",
        file: "Add photos (current state or design ideas)",
        fileHint: "Attach photos of the current state or design ideas — JPG, PNG, PDF",
        send: "Send message",
        sent: "Message received. We'll be in touch soon."
      }
    },
    // sticker
    sticker: { txt: "Book us for your next project!", cta: "Free visit" }
  },

  /* ── HUNGARIAN ── */
  hu: {
    // nav
    nav: { services: "Szolgáltatások", about: "Rólunk", references: "Referenciák", contact: "Kapcsolat" },
    // hero
    hero: {
      eyebrow: "Szeged és Környéke",
      h1: "Fivérek építik.<br><em>Maradandóra.</em>",
      sub: "Prémium építési és felújítási szolgáltatások szakértelemmel és pontossággal."
    },
    // stats
    stats: [
      { num: "15+", label: "Év tapasztalat", sub: "Apánktól tanultuk" },
      { num: "100+", label: "Befejezett projekt", sub: "Nemzetközileg" },
      { num: "100%", label: "Ügyfél-elégedettség", sub: "Ajánlással dolgozunk" }
    ],
    // bestAt
    bestAt: {
      eyebrow: "Szakértelmünk",
      items: [
        { n:"01", h:"Sima felületek & Q5 fugázás", p:"Hibátlanul sima falak, mennyezetek és professzionális Q5 kötések." },
        { n:"02", h:"Walk-in zuhanyzó", p:"Egyedi walk-in zuhanyzó telepítések kényelemre és eleganciára tervezve." },
        { n:"03", h:"Halszálkás minta", p:"Precízen fektetett halszálkás burkolat geometriai pontossággal." },
        { n:"04", h:"<1 mm tűréshatár", p:"Milliméter alatti pontossággal dolgozunk. A minőség a részletekben rejlik." }
      ]
    },
    // services
    services: {
      eyebrow: "Amit csinálunk",
      sub: "Dolgozunk tervezett képpel, vagy ossza meg velünk ötleteit!",
      items: [
        { icon:"🖌️", h:"Festés", p:"Bel- és külső festés prémium felületekkel. Tökéletes szín, tökéletes textúra.", img:"images/svc-painting.jpg" },
        { icon:"🏗️", h:"Gipszkarton szerelés", p:"Precíz gipszkarton munka — sima, egyenes, tartós.", img:"images/svc-drywall.jpg" },
        { icon:"🪟", h:"Csempézés", p:"Halszálkástól a nagyformátumú lapokig, aprólékos gonddal lerakva.", img:"images/svc-tile.jpg" }
      ]
    },
    // about
    about: {
      eyebrow: "Kik vagyunk",
      title: "Két fivér, egy cél",
      p1: "Alex és Sergiu vagyunk, fivérek, Szegeden élünk a családunkkal.",
      p2: "Alex festő, gipszkarton szerelő és belsőépítész. Sergiu padlóburkolat-specialista. Mindketten teljes jogosítvánnyal rendelkeznek.",
      p3: "Nincs alvállalkozó, nincs rövidítés — csak mi ketten, minden munkánál.",
      languages: "Beszélünk:",
      langs: ["Angol", "Francia", "Német", "Román"],
      brothers: [
        { init:"S", name:"Malita Sergiu", title:"Padlóburkolás", desc:"Padlóburkolat-specialista. Precíz csempe a legmagasabb szinten." },
        { init:"A", name:"Malita Alex", title:"Festés & gipszkarton", desc:"Festő, gipszkarton szerelő és belsőépítész." }
      ]
    },
    // references
    references: { eyebrow: "Munkáink — Referenciák" },
    // checkthis
    checkthis: { eyebrow: "Nézd meg", title: "A látomástól a megvalósulásig" },
    // contact
    contact: {
      eyebrow: "Lépj kapcsolatba\n— Foglalj ingyenes helyszíni felmérést!",
      phone: "123", email: "supermalitabrothers@gmail.com", location: "Szeged és környéke",
      fields: {
        name: "Név", phone: "Telefonszám", email: "Email (opcionális)",
        message: "Üzenet",
        file: "Fotók hozzáadása (jelenlegi állapot vagy ötletek)",
        fileHint: "Csatolj fotókat a jelenlegi állapotról — JPG, PNG, PDF",
        send: "Üzenet küldése", sent: "Üzenet megérkezett. Hamarosan felvesszük veled a kapcsolatot."
      }
    },
    // sticker
    sticker: { txt: "Foglalj minket a következő projektedhez!", cta: "Ingyenes felmérés" }
  },

  /* ── ROMANIAN ── */
  ro: {
    // nav
    nav: { services: "Servicii", about: "Despre noi", references: "Referințe", contact: "Contact" },
    // hero
    hero: {
      eyebrow: "Szeged și Împrejurimi",
      h1: "Construit de frați.<br><em>Construit să dureze.</em>",
      sub: "Servicii premium de construcții și renovări cu măiestrie și precizie."
    },
    // stats
    stats: [
      { num: "15+", label: "Ani de experiență", sub: "Tatăl nostru ne-a învățat bine" },
      { num: "100+", label: "Proiecte finalizate", sub: "La nivel internațional" },
      { num: "100%", label: "Satisfacția clienților", sub: "Lucrăm prin recomandare!" }
    ],
    // bestAt
    bestAt: {
      eyebrow: "Meșteșugul nostru",
      items: [
        { n:"01", h:"Suprafețe netede & rostuire Q5", p:"Pereți și tavane perfect netezi cu rosturi Q5 profesionale." },
        { n:"02", h:"Dușuri walk-in", p:"Instalații walk-in pentru confort și eleganță." },
        { n:"03", h:"Model hering", p:"Placaj hering cu precizie geometrică." },
        { n:"04", h:"Toleranță <1 mm", p:"Lucrăm la precizie sub milimetru." }
      ]
    },
    // services
    services: {
      eyebrow: "Ce facem",
      sub: "Putem lucra cu un proiect sau împărtășiți-ne ideile voastre!",
      items: [
        { icon:"🖌️", h:"Vopsitorie", p:"Vopsit interior și exterior cu finisaje premium.", img:"images/svc-painting.jpg" },
        { icon:"🏗️", h:"Montaj rigips", p:"Rigips de precizie — neted, drept, durabil.", img:"images/svc-drywall.jpg" },
        { icon:"🪟", h:"Placaj gresie", p:"De la model hering la plăci mari, cu precizie sub mm.", img:"images/svc-tile.jpg" }
      ]
    },
    // about
    about: {
      eyebrow: "Cine suntem",
      title: "Doi frați, o misiune",
      p1: "Suntem Alex și Sergiu, frați, locuim în Szeged cu familiile noastre.",
      p2: "Alex este vopsitor, montator rigips și designer de interior. Sergiu este specialist în pardoseli.",
      p3: "Fără subcontractori, fără scurtături — doar noi doi, la fiecare lucrare.",
      languages: "Vorbim:",
      langs: ["Engleză", "Franceză", "Germană", "Română"],
      brothers: [
        { init:"S", name:"Malita Sergiu", title:"Montaj pardoseli", desc:"Specialist pardoseli de cea mai înaltă calitate." },
        { init:"A", name:"Malita Alex", title:"Vopsitorie & rigips", desc:"Vopsitor, montator rigips și designer de interior." }
      ]
    },
    // references
    references: { eyebrow: "Lucrările noastre — Referințe" },
    // checkthis
    checkthis: { eyebrow: "Privește asta", title: "De la viziune la perfecțiune" },
    // contact
    contact: {
      eyebrow: "Contactează-ne\n— Programează o evaluare gratuită!",
      phone: "123", email: "supermalitabrothers@gmail.com", location: "Szeged și împrejurimi",
      fields: {
        name: "Nume", phone: "Telefon", email: "Email (opțional)",
        message: "Mesaj",
        file: "Adaugă fotografii (stare actuală sau idei)",
        fileHint: "Atașează fotografii cu starea actuală — JPG, PNG, PDF",
        send: "Trimite mesaj", sent: "Mesaj primit. Te contactăm în curând."
      }
    },
    // sticker
    sticker: { txt: "Rezervă-ne pentru proiectul tău!", cta: "Evaluare gratuită" }
  }
};
