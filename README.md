# Kemal Gokhan - Personal Website

Personal portfolio website for **Kemal Gokhan**, DevOps Engineer & AI Cloud Architect. Bilingual (English/Turkish) static site built with Vite.

🌐 **Live:** [kemal.devopsyolu.tr](https://kemal.devopsyolu.tr)

## Features

- **Bilingual** – Full EN/TR support with automatic language detection
- **Responsive** – Modern design with animated backgrounds and gradient accents
- **Pages** – Home, About, Skills, Projects, Contact
- **Tech focus** – Cloud Native, AI/ML, DevOps automation
- **Deployment** – GitHub Pages via GitHub Actions

## Tech Stack

- [Vite](https://vitejs.dev/) – Build tool
- Vanilla HTML, CSS, JavaScript
- Custom design system & components
- Font Awesome icons

## Project Structure

```
├── index.html          # Root – redirects to /en/ or /tr/ based on browser language
├── en/                 # English pages
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
├── tr/                 # Turkish pages
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
├── src/
│   ├── design-system.css
│   ├── components.css
│   ├── i18n.js         # Internationalization
│   ├── translations.js
│   └── home.js
├── public/             # Static assets
└── .github/workflows/
    └── deploy.yml      # GitHub Pages deployment
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is deployed to **GitHub Pages** on every push to `main`. The workflow:

1. Checkout code
2. Install dependencies (`npm ci`)
3. Build (`npm run build`)
4. Deploy `dist/` to GitHub Pages

## Links

- **Website:** [kemal.devopsyolu.tr](https://kemal.devopsyolu.tr)
- **YouTube:** [@devopsyolu](https://youtube.com/@devopsyolu)
- **LinkedIn:** [kemalgokhan](https://linkedin.com/in/kemalgokhan)

---

© 2026 Kemal Gokhan. All rights reserved.
