/* ─────────────────────────────────────────────
   TRANSLATIONS
   All user-facing text for EN, HU, RO.
   Each language mirrors the same structure.
   Edit values here — main.js picks them up.
───────────────────────────────────────────── */
const translations = {

  /* ── ENGLISH ── */
  en: {
    // Navigation links
    nav: { services: "Services", about: "About", references: "References", contact: "Contact", blog: "Blog" },

    // Hero section
    hero: {
      eyebrow: "Szeged & Surroundings",
      h1: "Built by brothers.<br><em>Built to last.</em>",
      sub: "Premium construction and renovation services delivered with craftsmanship and precision."
    },

    // Stats bar
    stats: [
      { num: "15+", label: "Years of experience", sub: "Our father taught us well" },
      { num: "100+", label: "Completed projects", sub: "Internationally" },
      { num: "100%", label: "Client satisfaction", sub: "We are recommended!" }
    ],

    // Our Craft section
    bestAt: {
      eyebrow: "Our craft",
      items: [
        { n:"01", h:"Smooth surfaces & Q5 gletting", p:"Flawlessly smooth walls, ceilings with high quality classic finishing." },
        { n:"02", h:"Walk-in showers", p:"Custom walk-in shower installations designed for comfort, flow, and elegance." },
        { n:"03", h:"Herring pattern", p:"Intricate herringbone tile work laid with geometric precision and an eye for visual rhythm." },
        { n:"04", h:"<1 mm tolerance", p:"We work to sub-millimetre accuracy. Because quality shows in the details." }
      ]
    },

    // What We Do / Services
    services: {
      eyebrow: "What we do",
      sub: "",
      items: [
        { icon:"🎨", h:"Wall painting", p:"Interior and exterior painting with premium finishes. Perfect colour, perfect texture, every time.", img:"images/svc-painting.jpg" },
        { icon:"🛠️", h:"Drywall installation", p:"Precision drywall installation — smooth, straight, durable.", img:"images/svc-drywall.jpg" },
        { icon:"🧩", h:"Tile installation", p:"From herringbone to large-format tiles, installed with meticulous care and sub-mm precision.", img:"images/svc-tile.jpg" },
        { icon:"📐", h:"Floor leveling", p:"Professional floor leveling for a perfect, even base — essential for flawless tile and laminate results.", img:"images/svc-leveling.jpg" }
      ]
    },

    // How We Operate
    operate: {
      eyebrow: "How we operate",
      title: "Simple, transparent process",
      steps: [
        { icon:"📞", title:"Get in touch", text:"Call or message us about the work and surfaces. Use our calculators to get an idea of the quantities!", cta: null },
        { icon:"📋", title:"Approximate offer", text:"We send you a rough estimate so we both have an idea about the workload and cost — no commitment needed.", cta: null },
        { icon:"🏠", title:"Free on-site assessment", text:"We come to you for free. We finalise ideas, timelines and prices on the spot. We can also help with material selection.", cta: null },
        { icon:"📄", title:"Finalised offer", text:"You receive a clear, detailed written offer with everything agreed — no surprises.", cta: null },
        { icon:"🔨", title:"We do the job!", text:"We show up, we do the work ourselves — no subcontractors — and we deliver the quality you expect.", cta: null }
      ],
      calculatorPrompt: "Not sure how much material you need?",
      calcLinks: [
        { label: "Floor calculator", href: "blog.html#floor-calculator" },
        { label: "Paint calculator", href: "blog.html#paint-calculator" }
      ]
    },

    // Who We Are
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

    // How We Work image section
    howwework: { eyebrow: "How we work" },

    // References image section
    references: { eyebrow: "Our work — References" },

    // Check This Out flip section
    checkthis: {
      eyebrow: "Check this out",
      title: "From Vision to Built Perfection. We collaborate with interior designers!"
    },

    // Contact section
    contact: {
      eyebrow: "Get in touch\n— Book a free on-site assessment!",
      phone: "+36 70 605 6821",
      email: "supermalitabrothers@gmail.com",
      location: "Szeged & surroundings",
      fields: {
        name: "Name", phone: "Phone", email: "Email (Optional)",
        message: "Message",
        file: "Add photos (current state or design ideas)",
        fileHint: "Attach photos of the current state or design ideas — JPG, PNG, PDF",
        send: "Send message",
        sent: "Message received! We'll be in touch soon."
      }
    },

    // Sticker popup
    callbackBtn: "Request callback",
    operateBtn: "See how we work →",
    sticker: { txt: "Book us for your next project!", cta: "Free visit" },

    // Blog page
    blog: {
      title: "Blog",
      eyebrow: "Tips & Calculators",
      posts: [
        {
          id: "floor-calculator",
          title: "Floor Calculator",
          intro: "This simple calculator helps you determine the right quantity of flooring for a given room.",
          body: "The calculation is based on the floor area of the room, to which a 10% cutting allowance is added.<br>The calculator rounds up to a full pack of flooring.",
          calculator: "floor"
        },
        {
          id: "paint-calculator",
          title: "Wall Paint Calculator",
          intro: "Calculating how much paint you need before starting a room is essential — running out mid-job causes colour mismatches and delays.",
          body: "The formula adds up all four walls and the ceiling, then subtracts doors and windows. Multiply by coats and divide by the stated coverage.<br>The calculator rounds up to a full bucket of paint.",
          calculator: "paint"
        },
        {
          id: "flooring-prices",
          title: "What Affects Prices in Flooring?",
          intro: "Flooring prices can vary significantly depending on a range of factors. Understanding what drives cost helps you budget more accurately and make better decisions about materials and contractors.",
          body: "",
          calculator: null,
          bullets: [
            { title: "Room complexity", text: "Rooms with many corners, niches or irregular shapes require more cutting and labour time, raising the cost per m²." },
            { title: "Pattern choice", text: "Herringbone and diagonal layouts waste 15–20% more material than straight patterns and take significantly longer to lay precisely — but it\'s worth it!" },
            { title: "Surface preparation", text: "If the existing floor needs leveling or old tiles need removing, this adds material and labour cost before any new surface is laid." },
            { title: "Other", text: "Carrying heavy tiles to upper floors or difficult access areas adds time and cost. Moving furniture from the work area is also often overlooked when budgeting." }
          ]
        }
      ]
    }
  },

  /* ── HUNGARIAN ── */
  hu: {
    nav: { services: "Szolgáltatások", about: "Rólunk", references: "Referenciák", contact: "Kapcsolat", blog: "Blog" },
    hero: {
      eyebrow: "Szeged és Környéke",
      h1: "Fivérek építik.<br><em>Maradandóra.</em>",
      sub: "Prémium építési és felújítási szolgáltatások szakértelemmel és pontossággal."
    },
    stats: [
      { num: "15+", label: "Év tapasztalat", sub: "Apánktól tanultuk" },
      { num: "100+", label: "Befejezett projekt", sub: "Nemzetközileg" },
      { num: "100%", label: "Ügyfélelégedettség", sub: "Ajánlanak minket" }
    ],
    bestAt: {
      eyebrow: "Szakértelmünk",
      items: [
        { n:"01", h:"Sima felületek & Q5 gletting", p:"Hibátlanul sima falak, mennyezetek magas minőségű klasszikus felülettel." },
        { n:"02", h:"Walk-in zuhanyzó", p:"Egyedi walk-in zuhanyzó telepítések kényelemre és eleganciára tervezve." },
        { n:"03", h:"Halszálkás minta", p:"Precízen fektetett halszálkás burkolat geometriai pontossággal." },
        { n:"04", h:"<1 mm tűréshatár", p:"Milliméter alatti pontossággal dolgozunk. A minőség a részletekben rejlik." }
      ]
    },
    services: {
      eyebrow: "Amit csinálunk",
      sub: "",
      items: [
        { icon:"🎨", h:"Festés", p:"Bel- és külső festés prémium felületekkel. Tökéletes szín, tökéletes textúra.", img:"images/svc-painting.jpg" },
        { icon:"🛠️", h:"Gipszkarton szerelés", p:"Precíz gipszkarton munka — sima, egyenes, tartós.", img:"images/svc-drywall.jpg" },
        { icon:"🧩", h:"Csempézés", p:"Halszálkástól a nagyformátumú lapokig, aprólékos gonddal lerakva.", img:"images/svc-tile.jpg" },
        { icon:"📐", h:"Aljzatkiegyenlítés", p:"Professzionális aljzatkiegyenlítés — tökéletes, egyenletes alap csempéhez és lamináthoz.", img:"images/svc-leveling.jpg" }
      ]
    },
    operate: {
      eyebrow: "Hogyan dolgozunk",
      title: "Egyszerű, átlátható folyamat",
      steps: [
        { icon:"📞", title:"Keress meg minket", text:"Hívj vagy írj nekünk a munkáról és a felületekről. Használd a kalkulátorainkat, hogy képed legyen a mennyiségekről!", cta: null },
        { icon:"📋", title:"Tájékoztató ajánlat", text:"Küldünk egy hozzávetőleges becslést, hogy mindkettőnknek képe legyen a munkáról és a költségekről — kötelezettség nélkül.", cta: null },
        { icon:"🏠", title:"Ingyenes helyszíni felmérés", text:"Kijövünk hozzád ingyen. Helyszínen véglegesítjük az ötleteket, határidőket és árakat. Anyagkiválasztásban is segítünk.", cta: null },
        { icon:"📄", title:"Végleges ajánlat", text:"Részletes írásos ajánlatot kapsz mindennel, amiben megállapodtunk — meglepetések nélkül.", cta: null },
        { icon:"🔨", title:"Elvégezzük a munkát!", text:"Megjelenünk, mi magunk végezzük a munkát — alvállalkozó nélkül — és azt a minőséget szállítjuk, amit elvársz.", cta: null }
      ],
      calculatorPrompt: "Nem tudod, mennyi anyagra lesz szükséged?",
      calcLinks: [
        { label: "Padlókalkulátor", href: "blog.html#floor-calculator" },
        { label: "Festékkalkulátor", href: "blog.html#paint-calculator" }
      ]
    },
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
    howwework: { eyebrow: "Hogyan dolgozunk" },
    references: { eyebrow: "Munkáink — Referenciák" },
    checkthis: {
      eyebrow: "Nézd meg",
      title: "A látomástól a megvalósulásig. Együttműködünk belsőépítészekkel!"
    },
    contact: {
      eyebrow: "Lépj kapcsolatba\n— Foglalj ingyenes helyszíni felmérést!",
      phone: "+36 70 605 6821",
      email: "supermalitabrothers@gmail.com",
      location: "Szeged és környéke",
      fields: {
        name: "Név", phone: "Telefonszám", email: "Email (opcionális)",
        message: "Üzenet",
        file: "Fotók hozzáadása (jelenlegi állapot vagy ötletek)",
        fileHint: "Csatolj fotókat a jelenlegi állapotról — JPG, PNG, PDF",
        send: "Üzenet küldése",
        sent: "Üzenet megérkezett! Hamarosan felvesszük veled a kapcsolatot."
      }
    },
    callbackBtn: "Visszahívást kérek",
    operateBtn: "Nézd meg a folyamatunkat →",
    sticker: { txt: "Foglalj minket a következő projektedhez!", cta: "Ingyenes felmérés" },
    blog: {
      title: "Blog",
      eyebrow: "Tippek & Kalkulátorok",
      posts: [
        {
          id: "floor-calculator",
          title: "Padlókalkulátor",
          intro: "Ez az egyszerű kalkulátor segít meghatározni a szükséges padlómennyiséget egy adott helyiséghez.",
          body: "A számítás alapja a helyiség alapterülete, amelyhez 10% vágási tartalékot ad hozzá.<br>A kalkulátor egész csomagra kerekít fel.",
          calculator: "floor"
        },
        {
          id: "paint-calculator",
          title: "Falfesték-kalkulátor",
          intro: "A szükséges festékmennyiség kiszámítása elengedhetetlen a munka megkezdése előtt — ha elfogy a festék, az színeltéréshez és késedelemhez vezet.",
          body: "A képlet összeadja a négy falat és a mennyezetet, levonja az ajtókat és ablakokat, megszorozza a rétegek számával és elosztja a feltüntetett fedőképességgel.<br>A kalkulátor egész vödörre kerekít fel.",
          calculator: "paint"
        },
        {
          id: "flooring-prices",
          title: "Mi befolyásolja a burkolás árát?",
          intro: "A burkolási árak jelentősen eltérhetnek számos tényező függvényében. Az árat meghatározó szempontok megértése segít pontosabban tervezni a költségvetést.",
          body: "",
          calculator: null,
          bullets: [
            { title: "A helyiség összetettsége", text: "A sok sarokkal, fülkével vagy szabálytalan alakú helyiségek több vágást és munkaidőt igényelnek, ami növeli az m²-enkénti árat." },
            { title: "Mintaválasztás", text: "A halszálkás és átlós elrendezések 15–20%-kal több anyagot pazarolnak, mint az egyenes minták, és jóval több időt vesznek igénybe — de megéri!" },
            { title: "Felület-előkészítés", text: "Ha a meglévő padlót ki kell egyenlíteni vagy a régi burkolatot el kell távolítani, ez anyag- és munkadíjat is hozzáad az új felület fektetéséhez." },
            { title: "Egyéb", text: "A nehéz burkolólapok felső emeletekre szállítása időt és költséget jelent. A bútorok mozgatása szintén sokszor kimarad a tervezésből." }
          ]
        }
      ]
    }
  },

  /* ── ROMANIAN ── */
  ro: {
    nav: { services: "Servicii", about: "Despre noi", references: "Referințe", contact: "Contact", blog: "Blog" },
    hero: {
      eyebrow: "Szeged și Împrejurimi",
      h1: "Construit de frați.<br><em>Construit să dureze.</em>",
      sub: "Servicii premium de construcții și renovări cu măiestrie și precizie."
    },
    stats: [
      { num: "15+", label: "Ani de experiență", sub: "Tatăl nostru ne-a învățat bine" },
      { num: "100+", label: "Proiecte finalizate", sub: "La nivel internațional" },
      { num: "100%", label: "Satisfacția clienților", sub: "Lucrăm prin recomandare!" }
    ],
    bestAt: {
      eyebrow: "Meșteșugul nostru",
      items: [
        { n:"01", h:"Suprafețe netede & Q5 gletting", p:"Pereți și tavane perfect netezi cu finisaj clasic de înaltă calitate." },
        { n:"02", h:"Dușuri walk-in", p:"Instalații walk-in pentru confort și eleganță." },
        { n:"03", h:"Model hering", p:"Placaj hering cu precizie geometrică." },
        { n:"04", h:"Toleranță <1 mm", p:"Lucrăm la precizie sub milimetru." }
      ]
    },
    services: {
      eyebrow: "Ce facem",
      sub: "",
      items: [
        { icon:"🎨", h:"Vopsitorie", p:"Vopsit interior și exterior cu finisaje premium.", img:"images/svc-painting.jpg" },
        { icon:"🛠️", h:"Montaj rigips", p:"Rigips de precizie — neted, drept, durabil.", img:"images/svc-drywall.jpg" },
        { icon:"🧩", h:"Placaj gresie", p:"De la model hering la plăci mari, cu precizie sub mm.", img:"images/svc-tile.jpg" },
        { icon:"📐", h:"Șapă / nivelarea pardoselii", p:"Nivelarea profesională a pardoselii — baza perfectă pentru gresie și parchet.", img:"images/svc-leveling.jpg" }
      ]
    },
    operate: {
      eyebrow: "Cum lucrăm",
      title: "Proces simplu și transparent",
      steps: [
        { icon:"📞", title:"Contactează-ne", text:"Sună sau scrie-ne despre lucrare și suprafețe. Folosește calculatoarele noastre pentru a estima cantitățile!", cta: null },
        { icon:"📋", title:"Ofertă aproximativă", text:"Trimitem o estimare rapidă pentru a avea amândoi o idee despre volumul de muncă și costuri — fără angajament.", cta: null },
        { icon:"🏠", title:"Evaluare gratuită la fața locului", text:"Venim la tine gratuit. Finalizăm ideile, termenele și prețurile pe loc. Te ajutăm și cu selectarea materialelor.", cta: null },
        { icon:"📄", title:"Ofertă finală", text:"Primești o ofertă scrisă clară și detaliată cu tot ce am convenit — fără surprize.", cta: null },
        { icon:"🔨", title:"Executăm lucrarea!", text:"Ne prezentăm, executăm noi înșine lucrarea — fără subcontractori — și livrăm calitatea așteptată.", cta: null }
      ],
      calculatorPrompt: "Nu ești sigur de cantitatea de materiale?",
      calcLinks: [
        { label: "Calculator pardoseli", href: "blog.html#floor-calculator" },
        { label: "Calculator vopsea", href: "blog.html#paint-calculator" }
      ]
    },
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
    howwework: { eyebrow: "Cum lucrăm" },
    references: { eyebrow: "Lucrările noastre — Referințe" },
    checkthis: {
      eyebrow: "Privește asta",
      title: "De la viziune la perfecțiune. Colaborăm cu designeri de interior!"
    },
    contact: {
      eyebrow: "Contactează-ne\n— Programează o evaluare gratuită!",
      phone: "+36 70 605 6821",
      email: "supermalitabrothers@gmail.com",
      location: "Szeged și împrejurimi",
      fields: {
        name: "Nume", phone: "Telefon", email: "Email (opțional)",
        message: "Mesaj",
        file: "Adaugă fotografii (stare actuală sau idei)",
        fileHint: "Atașează fotografii cu starea actuală — JPG, PNG, PDF",
        send: "Trimite mesaj",
        sent: "Mesaj primit! Te contactăm în curând."
      }
    },
    callbackBtn: "Solicit un apel",
    operateBtn: "Cum funcționăm →",
    sticker: { txt: "Rezervă-ne pentru proiectul tău!", cta: "Evaluare gratuită" },
    blog: {
      title: "Blog",
      eyebrow: "Sfaturi & Calculatoare",
      posts: [
        {
          id: "floor-calculator",
          title: "Calculator pardoseli",
          intro: "Acest calculator simplu te ajută să determini cantitatea necesară de pardoseli pentru o cameră.",
          body: "Calculul se bazează pe suprafața camerei, la care se adaugă 10% pentru pierderi la tăiere.<br>Calculatorul rotunjește în sus la un pachet întreg.",
          calculator: "floor"
        },
        {
          id: "paint-calculator",
          title: "Calculator vopsea",
          intro: "Calcularea cantității de vopsea înainte de a începe este esențială.",
          body: "Formula adună pereții și tavanul, scade ușile și ferestrele, înmulțește cu numărul de straturi și împarte la acoperirea indicată.<br>Calculatorul rotunjește în sus la o găleată întreagă.",
          calculator: "paint"
        },
        {
          id: "flooring-prices",
          title: "Ce influențează prețurile la pardoseli?",
          intro: "Prețurile la pardoseli pot varia semnificativ. Înțelegerea factorilor care influențează costul te ajută să bugetezi mai precis.",
          body: "",
          calculator: null,
          bullets: [
            { title: "Complexitatea camerei", text: "Camerele cu colțuri, nișe sau forme neregulate necesită mai multe tăieturi și timp suplimentar de lucru." },
            { title: "Alegerea modelului", text: "Modelele în os de pește și în diagonală risipesc 15–20% mai mult material și durează mult mai mult de montat — dar merită!" },
            { title: "Pregătirea suprafeței", text: "Dacă pardoseala existentă trebuie nivelată sau vechile plăci îndepărtate, acest lucru adaugă costuri suplimentare." },
            { title: "Altele", text: "Transportul materialelor grele la etaje superioare adaugă timp și cost. Mutarea mobilei este adesea trecută cu vederea la bugetare." }
          ]
        }
      ]
    }
  }
};
