# Super Malita Brothers — Website

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
└── images/             ← add your own project photos here
```

## GitHub Pages deployment

1. Push this folder to a GitHub repository (or the root of your repo)
2. Go to **Settings → Pages**
3. Set source to **main branch / root** (or `/docs` if you rename the folder)
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Adding real photos

Replace the cat emoji placeholders in the References slider:
- Add your `.jpg` or `.webp` photos to the `images/` folder
- In `js/translations.js`, each slide has `{ h: "Title", p: "Description" }`
- In `js/main.js`, find the `buildSlider` function and replace the `.slide-placeholder` div with:
  ```html
  <img class="slide-img" src="images/your-photo.jpg" alt="Title" />
  ```

## Customization tips

- **Brothers' names / roles**: edit `js/translations.js` → `about.brothers` in each language
- **Phone / email**: edit `js/translations.js` → `contact.phone` and `contact.email`
- **Colors**: all color variables are at the top of `css/style.css` under `:root`
- **Fonts**: loaded from Google Fonts (Cormorant Garamond + Jost) — change in `index.html` `<head>`
