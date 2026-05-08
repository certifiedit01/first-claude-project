# first-claude-project

A simple React dashboard built with Vite, Tailwind CSS, and Recharts. Single-page, hardcoded mock data — meant as a first end-to-end deploy (local → GitHub → Vercel).

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy to Vercel

**Option 1 — GitHub integration (recommended)**

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite. Defaults: build command `npm run build`, output dir `dist`. No env vars needed.
4. Click Deploy. Future pushes to `main` redeploy automatically.

**Option 2 — Vercel CLI**

```bash
npm i -g vercel
vercel        # first run links the project
vercel --prod # deploy to production
```

## Project structure

```
src/
├── main.jsx              entry
├── App.jsx               page layout
├── index.css             Tailwind directives
├── data/mock.js          hardcoded stats / chart / activity data
└── components/
    ├── Header.jsx
    ├── StatCard.jsx
    ├── StatGrid.jsx
    ├── ChartCard.jsx
    └── ActivityTable.jsx
```
