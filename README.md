# Super Malita Brothers - Website

Premium construction & renovation website for Szeged, Hungary.

## Structure

```
super-malita-brothers/
├── index.html          ← main page (GitHub Pages entry point)
├── css/
│   └── style.css       ← all styles
├── js/
│   ├── translations.js ← HU / EN / RO content
│   └── main.js         ← rendering, slider, pixel art, form
└── images/             ← project photos
```




## Customization tips

- **Brothers' names / roles**: edit `js/translations.js` → `about.brothers` in each language
- **Phone / email**: edit `js/translations.js` → `contact.phone` and `contact.email`
- **Colors**: all color variables are at the top of `css/style.css` under `:root`
- **Fonts**: loaded from Google Fonts (Cormorant Garamond + Jost) - change in `index.html` `<head>`
