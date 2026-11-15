# Alexandre Spindola — Portfolio

Personal portfolio, live at [spindola.me](https://spindola.me). A static site built with Astro and Tailwind CSS and deployed to Cloudflare Pages.

## Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (static output, Vite 8)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Language**: TypeScript 6
- **Font**: Onest Variable (`@fontsource-variable/onest`)
- **Tests**: Playwright (end-to-end, five viewports)
- **Monorepo**: [Turborepo 2](https://turborepo.com/) with [Bun 1.4.4](https://bun.sh/) workspaces
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/), deployed with Wrangler

## Features

- Home page with hero, selected work, experience timeline, services, education, tech stack, languages, certifications, about and contact sections
- Case study pages (`/projects/<slug>/`) generated from a content collection
- Dark-only theme with a green accent and a neutral gray scale
- Fixed header that highlights the current section, with a mobile menu
- Project details in dialogs
- SEO: canonical URL, Open Graph tags, JSON-LD `Person` schema, sitemap and `robots.txt`

## Prerequisites

- [Bun](https://bun.sh/) 1.4.4
- Node.js 26 (`nvm use` picks it up from `.nvmrc`)
- For deploys: the [1Password CLI](https://developer.1password.com/docs/cli/) (`op`) with "Integrate with 1Password CLI" enabled in the 1Password app

## Getting Started

```bash
git clone https://github.com/alexandrespindola/portfolio-dev.git
cd portfolio-dev
bun install
bun run dev      # http://localhost:4321
```

The build reads no environment variables, so there is no `.env` to create.

## Scripts

Run from the repository root:

| Command | Description |
|---------|-------------|
| `bun run dev` | Start the dev server (localhost:4321) |
| `bun run build` | Build the site |
| `bun run preview` | Preview the production build |
| `bun run check` | Astro type checking |
| `bun run clean` | Remove build artifacts and `node_modules` |
| `bun run deploy` | Build and deploy to production |
| `bun run deploy:preview` | Build and deploy to the `preview` branch |

End-to-end tests:

```bash
cd apps/web && bun run test:e2e
```

## Project Structure

```text
portfolio-dev/
├── apps/
│   └── web/                      # @portfolio/web — the Astro site
│       ├── src/
│       │   ├── assets/           # Images processed by Astro
│       │   ├── components/       # Sections, UI pieces and icons
│       │   ├── content/case-studies/  # Case studies (Markdown frontmatter)
│       │   ├── content.config.ts # Content collection schema
│       │   ├── data/             # projects, experience, services, tags
│       │   ├── layouts/          # Layout.astro (head, SEO, header, footer)
│       │   ├── pages/            # index.astro, projects/[slug].astro
│       │   └── styles/global.css # Tailwind import and theme tokens
│       ├── public/               # favicon, og.jpg, robots.txt, project preview images
│       ├── tests/e2e/            # Playwright specs
│       ├── astro.config.mjs
│       ├── playwright.config.ts
│       └── wrangler.toml         # Cloudflare Pages project config
├── .nvmrc                        # Node version (26)
├── turbo.json                    # Turborepo pipeline
└── package.json                  # Workspaces and root scripts
```

## Updating Content

| What | Where |
|------|-------|
| Projects (cards on the home page) | `apps/web/src/data/projects.ts`; preview images in `apps/web/public/images/projects/` |
| Case study pages | One Markdown file per case study in `apps/web/src/content/case-studies/` |
| Experience | `apps/web/src/data/experience.ts` |
| Services | `apps/web/src/data/services.ts`; icons in `apps/web/src/components/icons/services/` |
| Tech stack and tags | `apps/web/src/data/tags.ts`; icons in `apps/web/src/components/icons/tags/` |
| Header links | `navItems` in `apps/web/src/components/Header.astro` |
| Colors | `@theme` in `apps/web/src/styles/global.css` |

## Deployment

```bash
bun run deploy           # Production (spindola.me)
bun run deploy:preview   # Preview branch
```

Both build the site and then run `bunx wrangler pages deploy` from `apps/web`, uploading the build from your machine to the Cloudflare Pages project `portfolio-dev`. There are no Git-triggered builds.

Authentication uses a Cloudflare API token (`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`) stored in the 1Password Environment `portfolio-web` and injected by `op run` only while Wrangler runs, so no `wrangler login` and no `.env` file are needed. `apps/web/.env.example` lists the variable names.

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — architecture, build and deployment
- [AGENTS.md](./AGENTS.md) — guidelines for AI coding agents (`CLAUDE.md` imports it)

## Contact

- **Website**: [spindola.me](https://spindola.me)
- **GitHub**: [@alexandrespindola](https://github.com/alexandrespindola)
