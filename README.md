# Portfolio

My personal portfolio — a single-page site with a light/dark theme.

**Live:** https://ssalvation0.github.io

## Built with

React · TypeScript · Vite · Tailwind CSS v4 · Framer Motion. Deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev        # local dev server (Vite prints the URL)
npm run build      # type-check + production build
npm run preview    # serve the production build locally
```

## Deploying

```bash
npm run deploy     # build + push dist/ to the gh-pages branch
```

The site serves from the `gh-pages` branch (Settings → Pages). It's the
`ssalvation0.github.io` user repo, so it lives at the root domain — that's why
`vite.config.ts` keeps `base: '/'`.

## Editing content

All the copy lives in `src/data/` — `profile.ts`, `skills.ts`, `projects.ts`,
`education.ts`. You don't need to touch the components to change text.

## Screenshots

Project images are in `public/projects/`. Regenerate them straight from the live
sites (needs Google Chrome installed):

```bash
npm run screenshots
```

It captures two crops per project — a tall one for the desktop cards and a wide
one for mobile.
