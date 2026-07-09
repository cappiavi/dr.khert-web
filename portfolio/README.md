# Khert Laguna Garde — Personal Portfolio

A premium, fully responsive personal portfolio website built with plain
**HTML5, CSS3, and JavaScript** — no frameworks, no build step. Designed with a
medical + technology aesthetic (deep navy, medical blue, glassmorphism, smooth
animations).

## 📁 Folder structure

```
portfolio/
├── index.html          # All markup / sections
├── style.css           # Design system + all styles (responsive, mobile-first)
├── script.js           # Loader, nav, scroll animations, form validation
├── README.md           # This file
└── assets/
    ├── images/         # profile.jpg, project-*.jpg
    └── icons/          # favicon.svg
```

## ✨ Sections
Hero · About · Medical Journey Timeline · Skills · Projects · Research ·
Certifications · Spotify Playlist · Contact · Footer.

## 🔧 Setup (run locally)

No installation needed — it is a static site.

1. Download / clone the `portfolio` folder.
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   # Option A: Python
   cd portfolio
   python3 -m http.server 5173
   # then open http://localhost:5173

   # Option B: Node (if installed)
   npx serve portfolio
   ```

### Editing content
- **Text/sections:** edit `index.html`.
- **Colors / fonts / spacing:** edit the tokens at the top of `style.css` (`:root`).
- **Projects:** duplicate an `<article class="glass project">` block in `index.html`.
- **Images:** replace files in `assets/images/`.
- **Contact form:** it validates on the client and shows a confirmation. To
  actually receive messages, connect a service (e.g. Formspree, Getform) by
  setting the form `action`/`method` or posting from `script.js`.

### Spotify
The playlist uses the **official Spotify embed player** (iframe only). No login,
no API keys, no credentials — visitors browse songs right inside the page.

## 🚀 Deployment

### GitHub Pages
1. Push the project to a GitHub repository (the `portfolio` files at the repo root,
   or move them to the root of the repo).
2. Repo **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / root.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Vercel
1. Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other** · Build command: *(none)* · Output directory: `./`
   (or `portfolio` if the files live in that subfolder).
3. Click **Deploy**.
   > CLI alternative: `npm i -g vercel` → run `vercel` inside the `portfolio` folder.

### Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Build command: *(leave empty)* · Build output directory: `/` (or `portfolio`).
3. **Save and Deploy**.

## ♿ Accessibility & performance
- Semantic HTML, ARIA labels, keyboard-focus styles, `prefers-reduced-motion` support.
- Lazy-loaded images, system fonts fallback, no heavy dependencies.

© 2026 Khert Laguna Garde. All Rights Reserved.
