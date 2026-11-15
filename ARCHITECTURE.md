# Architecture

Architecture of the portfolio at `https://spindola.me`: monorepo structure, build, application design and deployment.

## Overview

A static site built with Astro 7 (Vite 8) and Tailwind CSS 4. Every page is pre-rendered at build time and served by Cloudflare Pages. The build runs on a local machine and the result is uploaded with Wrangler.

**Toolchain**: Bun 1.4.4, Node.js 26 LTS (`.nvmrc`), Turborepo 2, TypeScript 6, Astro 7, Tailwind CSS 4. Hosted on GitHub (`alexandrespindola/portfolio-dev`).

```text
┌──────────────────────────── Build (local machine) ────────────────────────────┐
│  turbo run build → astro build → apps/web/dist                                │
│  5 static pages · Tailwind CSS 4 · optimized images · sitemap                 │
└───────────────────────────────────┬───────────────────────────────────────────┘
                                    │ op run (1Password) → wrangler pages deploy
                                    ▼
┌──────────────── Cloudflare Pages: project portfolio-dev ───────────────────────┐
│  branch main → spindola.me · branch preview → preview.portfolio-dev-eva.pages.dev │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Monorepo Structure

```text
portfolio-dev/
├── apps/
│   └── web/          # @portfolio/web — the Astro site (the only workspace)
├── .nvmrc            # Node version (26)
├── turbo.json        # Turborepo pipeline
└── package.json      # Workspaces (`apps/*`) and root scripts
```

There are no shared packages: with a single app, TypeScript is configured in `apps/web/tsconfig.json`, which extends `astro/tsconfigs/strict`.

## Build System

### Turborepo tasks (`turbo.json`)

| Task | Behavior |
|------|----------|
| `build` | Depends on `^build`; outputs `dist/**` and `.astro/**` are cached |
| `dev` | Persistent, never cached |
| `preview` | Depends on `build`; persistent, never cached |
| `check` | Depends on `^build`; runs `astro check` |
| `clean` | Never cached |

The build reads no environment variables, so no env inputs are declared.

### Astro configuration (`apps/web/astro.config.mjs`)

- `output: "static"`, `site: "https://spindola.me"`, no adapter
- Integration: `@astrojs/sitemap`
- Vite plugin: `@tailwindcss/vite`

## Application Architecture

```text
apps/web/src/
├── assets/                 # Images processed by Astro (portrait, education, certifications)
├── components/             # Sections and UI pieces
│   ├── Hero, Projects, Experience, Services, Education, TechStack,
│   │   Languages, Certifications, About, Header, Footer
│   ├── Card, Badge, Chip, LinkButton, LinkInline, SocialPill, TagList,
│   │   ProjectCard, ExperienceItem, SectionContainer, TitleSection
│   └── icons/              # SVG icon components (general, services/, tags/)
├── content/case-studies/   # One Markdown file per case study
├── content.config.ts       # `caseStudies` collection
├── data/                   # projects.ts, experience.ts, services.ts, tags.ts
├── layouts/Layout.astro    # <head>, SEO, header, footer, global styles
├── pages/
│   ├── index.astro         # Home
│   └── projects/[slug].astro   # Case study pages
└── styles/global.css       # Tailwind import, theme tokens, base layer
```

### Pages

| Route | Source |
|-------|--------|
| `/` | `pages/index.astro`: composes all sections |
| `/projects/<slug>/` | `pages/projects/[slug].astro`: one page per entry of the `caseStudies` collection (currently four) |

### Data flow

```text
src/data/*.ts ───────────────────────┐
                                     ├→ components → pages → static HTML
src/content/case-studies/*.md ───────┘
   (frontmatter validated by the Zod schema in content.config.ts)
```

- **Typed data files** (`projects`, `experience`, `services`, `tags`) feed the home sections.
- **Content collection** `caseStudies`: `glob()` loader, schema with title, summary, role, challenge, solution, outcomes, metrics, tag keys, visibility and optional links. Pages render the frontmatter fields.
- **Images**: files in `src/assets/` go through Astro's image pipeline (Sharp); project previews are plain files in `public/images/projects/`, lazy-loaded with fixed dimensions.

### Client-side JavaScript

No UI-framework islands. Two small scripts bundled by Vite (header: current-section highlighting and closing the mobile menu; projects: opening and closing the detail dialogs) plus the analytics script; everything else is static HTML and CSS.

## Styling

- **Tailwind CSS 4** through the Vite plugin; there is no `tailwind.config`.
- **Theme tokens** in `src/styles/global.css` (`@theme`): `primary` (`#40ea1e`), `secondary`, `background` and a neutral `gray` scale that replaces Tailwind's blue-leaning default.
- **Base layer** in the same file keeps two Tailwind 3 defaults: the default border color and the pointer cursor on buttons.
- **Dark-only** design (`<html class="dark">`, `bg-background`).
- **Font**: Onest Variable, imported once in `Layout.astro`.

## SEO and Analytics

- `Layout.astro` sets the title, description, canonical URL, Open Graph tags (`public/og.jpg`) and a JSON-LD `Person` schema.
- `@astrojs/sitemap` generates the sitemap; `public/robots.txt` allows everything and links it.
- Analytics: the Ahrefs Web Analytics script, loaded asynchronously.

## Testing

Playwright end-to-end tests in `apps/web/tests/e2e` (`hero`, `layout`, `navigation`), configured in `playwright.config.ts`:

- Five viewport projects: 320, 375, 414 (mobile), 768 (tablet) and 1440 (desktop)
- They run against the **static build** (`bun run build && bun run preview` on port 4321), not the dev server, to avoid HMR reloads during a test

## Deployment

```text
bun run deploy → bun run build → cd apps/web → op run … -- bunx wrangler pages deploy --branch main
```

- **Platform**: Cloudflare Pages, direct upload, static files only (no Functions, no Git-triggered builds)
- **Project**: `portfolio-dev`; production branch `main` serves `spindola.me`; `bun run deploy:preview` publishes the `preview` branch
- **Config**: `apps/web/wrangler.toml` holds the project name, `pages_build_output_dir = "dist"` and the compatibility date; no flags or vars
- **Credentials**: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` come from the 1Password Environment `portfolio-web` and are injected by `op run` only while Wrangler runs; nothing is stored in files. The token is scoped to `Cloudflare Pages: Edit`
- **Versions**: the build uses the local Node (`.nvmrc`) and Bun (`packageManager`); nothing is configured on the Cloudflare side

## Security

- Static site: no server-side code, no database, no authentication
- The build embeds no secrets (it reads no environment variables)
- Deploy credentials live only in 1Password
- HTTPS is provided by Cloudflare
