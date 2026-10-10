# Kaan Bas — portfolio

A responsive personal portfolio using React, TypeScript and React Router. Vite handles development and production builds. Plain CSS keeps the design easy to change; Lucide supplies icons. There is no backend or contact form.

## Run locally

Node 22.13 or later is recommended. The build and checks also run on the current workspace's Node 22.12; an upstream lint dependency prints an engine warning on that version.

```sh
npm install
npm run dev
```

Open the URL printed by Vite. For the production build:

```sh
npm run lint
npm run build
npm run preview
```

Use `npm run format` to format source files consistently.

## Project structure

```text
src/
  components/       Reusable layout, links, cards and workflow diagrams
  data/
    portfolio.ts    Personal details, links, projects, skills and background
    siemens.ts      Case-study contributions, evaluation and learnings
    seo.json        Titles and descriptions for each route
  pages/
    Home.tsx        Recruiter-focused homepage
    Siemens.tsx     Detailed graduation-project case study
    ProjectPage.tsx Data-driven IDCP and Waternet project pages
    NotFound.tsx    Custom 404
  App.tsx           Route definitions and shared layout
  main.tsx          React entry point and self-hosted font imports
  styles.css        Design tokens, components and responsive layouts
public/
  favicon.svg       Custom KB favicon
  og-image.png      Social-sharing image
scripts/
  build-metadata.mjs       Static route metadata, sitemap and robots.txt
  create-social-image.ps1  Recreates the typographic social image on Windows
tests/portfolio.spec.ts   Browser, navigation, responsive and accessibility checks
```

## Edit your content

Start in **`src/data/portfolio.ts`**:

- `profile`: name, introduction, email, LinkedIn, GitHub and website origin.
- `featuredProject`: homepage Siemens card.
- `projects`: IDCP, Waternet and any additional projects.
- `previewTags`: a short selection of tags for the homepage; `tags` keeps the complete list for each case study.
- `experience`, `education`, `skillGroups`, `about` and `interests`: homepage content.

The contact email and social links are used throughout the site. Clear a social URL to show a labelled placeholder; an empty GitHub URL hides that optional link.

The Siemens story is laid out in **`src/pages/Siemens.tsx`**. Its reusable lists are in **`src/data/siemens.ts`**. Keep the metric tied to the evaluated test cases and describe the solution as a prototype. The architecture in `src/components/Diagrams.tsx` is conceptual and does not reproduce internal systems or confidential data.

## Add a project

1. Add a `Project` object to `projects` in `src/data/portfolio.ts`, including a unique `slug`, the supplied facts and contribution descriptions.
2. Add a title and description for `/projects/your-slug` to `src/data/seo.json`.
3. Reuse an existing `visual`, or add your own labelled conceptual diagram in `src/components/Diagrams.tsx` and update the `Project.visual` union.

The project card and `/projects/:slug` page are generated automatically. For a larger custom case study, add a page and route in `src/App.tsx`.

## Change the design

The top of **`src/styles.css`** contains the main colour and typography variables. Homepage section spacing uses `.home-section`, while project layouts use `.section`. The `--section-alternate` token controls the alternating homepage backgrounds, and page width uses `.container`. Tablet and mobile overrides are grouped at the bottom. Fonts are self-hosted and bundled from Fontsource; visitors do not need a third-party font request.

The `--ai-*`, `--software-*`, `--data-*` and `--automation-*` colour tokens define the coordinated palette. The `area` field on skill groups and `data-area` attributes connect cards to those colours; changing the tokens updates the palette throughout the site.

## Tests

```sh
npx playwright install chromium
npm run build
npm test
```

Playwright tests run against the production preview at desktop (1440px), tablet (768px) and mobile (390px) widths. They cover the recruiter navigation flow, direct project URLs, metadata, overflow, the custom 404, keyboard access and WCAG A/AA checks using axe-core. Chromium is the only required test browser. For interactive inspection, use `npm run test:ui`.

## Hosting and metadata

`npm run build` writes the deployable site to **`dist/`**. Each known route has its own HTML file with its title, description and Open Graph metadata so link previews can read it before JavaScript runs. Page content renders in React. The build also creates a sitemap, robots.txt and `_redirects` for hosts that support that convention.

For a different domain, update `profile.siteUrl` and rebuild. On another static host, serve existing files first and fall back unknown paths to `index.html` so React Router can render the custom 404. If the host supports a dedicated error document, use `404.html` to retain a real HTTP 404 response. The site contains no analytics or external runtime services.

`.openai/hosting.json` tracks the private Sites preview identity and static output directory. Keep its project ID intact when updating that preview.

## Optional assets to provide next

- A portrait, if you want one added to the About section.
- A public CV PDF, if you want a download link.
- Approved, non-confidential project images or diagrams, and public repository links where sharing is allowed.
- Your preferred public domain, when you are ready to share the portfolio with recruiters.

The site is complete without a portrait or project screenshots. All current project visuals are labelled conceptual diagrams. No Siemens screenshots, internal data or source code are included.
