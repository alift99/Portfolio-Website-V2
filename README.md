# Portfolio Website

Personal portfolio of Alif Daffa' Yusof — built with React + Vite, deployable as a static site or Docker container.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot module reload.

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Docker

Build and run the production image (nginx serving the static build):

```bash
docker build -t portfolio . && docker run -p 8080:80 portfolio
```

Opens at `http://localhost:8080`.

## Content

All portfolio content lives in `src/data.js` — projects, experience, skills, achievements. Edit that file to update the site.

## Deployment

The `dist/` folder is a fully static site compatible with any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

For GitHub Pages: set `base` in `vite.config.js` to your repo name if deploying to a subdirectory (e.g. `base: '/Portfolio-Website/'`), then push `dist/` to the `gh-pages` branch.
