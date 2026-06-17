# EMPOSSIBLE Landing Page

Production-ready single page landing page for EMPOSSIBLE, built with plain HTML, CSS, and JavaScript for GitHub and Vercel deployment.

## Files Included

- `index.html`
- `css/styles.css`
- `css/animations.css`
- `js/main.js`
- `js/animations.js`
- `README.md`

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- AOS via CDN for scroll animations
- Google Fonts via CDN

## Brand System

- Primary red: `#d50000`
- Black: `#000000`
- White: `#ffffff`
- Background gray: `#cec8c8`
- Display font: Racing Sans One
- Body font: Montserrat Medium

## Features

- Sticky navigation with scroll state
- Mobile hamburger menu with full-screen overlay
- Full-screen hero with animated red glow background
- Vanilla JavaScript typewriter animation for the hero headline
- Scroll animations using AOS
- Responsive service grids
- Accordion FAQ with smooth expand and collapse
- Smooth scrolling anchor links
- Dark cinematic editorial visual system

## Local Preview

Open `index.html` directly in a browser, or use a simple local server.

### Option 1

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`

### Option 2

Use the VS Code Live Server extension.

## GitHub Deployment

### 1. Clone the repository

```bash
git clone https://github.com/marcusworld82/marcuslandingpage.git
cd marcuslandingpage
```

### 2. Copy the files into the repo

Replace the repo contents with these files and folders:

- `index.html`
- `css/`
- `js/`
- `README.md`

### 3. Commit and push

```bash
git add .
git commit -m "Build EMPOSSIBLE production landing page"
git push origin main
```

## Vercel Deployment

### Option 1: Deploy from GitHub

1. Log in to [Vercel](https://vercel.com/)
2. Click **Add New Project**
3. Import `marcusworld82/marcuslandingpage`
4. Keep the framework preset as **Other**
5. Leave build command empty
6. Leave output directory empty
7. Click **Deploy**

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts:

- Set up and deploy: `Y`
- Link to existing project or create new: choose preferred option
- Directory: current directory
- Build command: leave blank
- Output directory: leave blank

For production deployment:

```bash
vercel --prod
```

## Recommended Repo Structure

```text
marcuslandingpage/
├── index.html
├── css/
│   ├── styles.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── animations.js
└── README.md
```

## Notes

- No frameworks are used.
- No libraries are used except AOS via CDN.
- All styling is externalized. No inline styles are used.
- All interactivity is handled with vanilla JavaScript.
- The site is mobile first with breakpoints at 480px, 768px, and 1024px.