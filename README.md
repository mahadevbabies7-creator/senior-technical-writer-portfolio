# Suntul Mahadik — Senior Technical Writer Portfolio

A premium, responsive single-page portfolio website for Suntul Mahadik, a Senior Technical Writer with 10+ years of experience. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech stack

- React 18 + TypeScript
- Vite (build tool and dev server)
- Tailwind CSS (styling)
- Lucide React (icons)

No backend, database, authentication, or API keys are required. The site is fully static.

## Local development

```bash
npm install
npm run dev
```

The dev server starts on http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

The production-ready static files are output to the `dist/` directory.

## Deployment to Vercel

1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Vercel auto-detects Vite. Use these settings if prompted:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. No environment variables are required.

## Adding the resume PDF

1. Place the PDF at `public/resume/Suntul_Mahadik_Resume.pdf`.
2. In `src/data/portfolio.ts`, set `resumeReady` to `true`.
3. Rebuild. The resume buttons will activate and download the PDF.

## Editing content

All site content is centralized in `src/data/portfolio.ts`:

- `profile` — name, headline, tagline, introduction, expertise tags, location, highlights.
- `contact` — email and LinkedIn URL. Leave empty to show "Available on request" placeholders.
- `experience`, `certifications`, `education`, `awards`, `portfolio`, `tools` — structured data for each section.

## Project structure

```
src/
  components/    Reusable UI components (Header, Hero, About, etc.)
  data/          Centralized portfolio content (portfolio.ts)
  hooks/         Custom hooks (useReveal for scroll animations)
  App.tsx        Page composition
  main.tsx       Entry point
  index.css      Global styles and Tailwind directives
```

## License

Personal portfolio. All rights reserved.
