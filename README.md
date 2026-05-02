# Super Malita Brothers - Website

Premium construction & renovation website for Szeged, Hungary.

## Structure

```
super-malita-brothers/
├── index.html              ← main page (GitHub Pages entry point)
├── contact.html            ← contact form + process steps
├── privacy.html            ← privacy & data policy
├── blog.html               ← blog index (cards linking to subpages)
├── CNAME                   ← custom domain for GitHub Pages
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css           ← all styles for main site
│   └── blog.css            ← blog-specific styles
├── js/
│   ├── translations.js     ← HU / EN / RO content
│   ├── main.js             ← rendering, pixel art, image grid, lightbox
│   └── blog.js             ← blog rendering + calculators
├── images/
│   ├── ref/                ← reference photos (ref1.webp, ref2.webp, …)
│   ├── work/               ← work-in-progress photos (work1.webp, …)
│   ├── check/              ← render vs real pairs (render1.webp, real1.webp, …)
│   ├── svc-painting.webp
│   ├── svc-drywall.webp
│   ├── svc-tile.webp
│   ├── svc-leveling.webp
│   └── blog-*.webp         ← blog card cover images
└── blog/
    ├── burkolas-szeged.html
    ├── szobafesto-szeged.html
    └── burkolasarak-szeged.html
```

## Customization tips

- **Brothers' names / roles**: edit `js/translations.js` → `about.brothers` in each language
- **Phone / email**: edit `js/translations.js` → `contact.phone` and `contact.email`
- **Colors**: all color variables are at the top of `css/style.css` under `:root`
- **Fonts**: loaded from Google Fonts (Cormorant Garamond + Jost) — change in `index.html` `<head>`
- **Reference photos**: drop numbered `.webp` files into `images/ref/` or `images/work/` — the grid auto-discovers them
- **Blog posts**: add entries to `js/translations.js` → `blog.posts` for all three languages
