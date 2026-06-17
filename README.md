# EMPOSSIBLE

AI consulting and done for you services landing page for Marcus Collins, owner of EMPOSSIBLE, an AI content agency and consulting service based in Cleveland, Ohio.

Single page site. Plain HTML, CSS, and JavaScript. No frameworks. AOS used via CDN for scroll animations.

## Tech

- HTML5
- CSS3 with custom properties
- Vanilla JavaScript
- AOS (Animate On Scroll) via CDN
- Google Fonts: Racing Sans One, Montserrat

## File Structure

```
/empossible
  index.html
  /css
    styles.css
    animations.css
  /js
    main.js
    animations.js
  README.md
```

## Brand System

Primary red: #d50000
Black: #000000
White: #ffffff
Background gray: #cec8c8
Display font: Racing Sans One
Body font: Montserrat

## Local Preview

Open index.html directly in a browser, or serve the folder with any static server.

```bash
npx serve .
```

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial build -- KING WEB BUILDER"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Vercel Deployment

1. Go to vercel.com and log in
2. Click Add New Project
3. Import your GitHub repository
4. Framework Preset: Other
5. Root Directory: leave as default
6. Click Deploy
7. Vercel auto deploys every time you push to main

## Updating the Site

```bash
git add .
git commit -m "Update: what you changed"
git push
```

Vercel automatically rebuilds and redeploys.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/marcusworld82/marcuslandingpage)
