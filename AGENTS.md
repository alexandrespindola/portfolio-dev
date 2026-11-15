# AGENTS.md

Guidance for AI coding agents (Claude Code, Codex, Cursor, Zed, …) working in this repository: the personal portfolio of Alexandre Spindola, live at `https://spindola.me`. `CLAUDE.md` only imports this file (`@AGENTS.md`); edit this file, not `CLAUDE.md`.

## Commands

All commands run from the repo root via Bun. **Never use npm, yarn, or pnpm.**

```bash
bun run dev             # Start dev server (localhost:4321)
bun run build           # Build the site
bun run preview         # Preview the production build (requires build first)
bun run check           # Astro type checking
bun run clean           # Clean build artifacts and node_modules
bun run deploy          # Build + deploy to Cloudflare Pages (production)
bun run deploy:preview  # Build + deploy to the `preview` branch
```

End-to-end tests run from the app:

```bash
cd apps/web && bun run test:e2e   # Playwright, 5 viewports, against the static build
```

## Toolchain

- **Bun 1.4.4** (`packageManager` in root `package.json`)
- **Node.js 26 LTS** (`engines.node >=26`, `.nvmrc`)
- **Turborepo 2** for task orchestration
- **TypeScript 6** (TypeScript 7 is not used yet: `@astrojs/check` only supports TS ≤ 6)
- **Astro 7** (bundles **Vite 8**; Vite is not a direct dependency)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- Root devDependencies: `turbo`, `wrangler`

There is no linter or formatter configured; keep the style of the file you edit.

## Monorepo Structure

```text
portfolio-dev/
├── apps/
│   └── web/        # @portfolio/web — Astro 7 static site (the only app)
├── .nvmrc          # Node version (26)
├── package.json    # Root config, workspaces, deploy scripts
└── turbo.json      # Task pipeline (build, dev, preview, check, clean)
```

### apps/web

```text
apps/web/
├── src/
│   ├── assets/               # Images processed by Astro (portrait, education, certifications)
│   ├── components/           # Sections (Hero, Projects, Experience, Services, …) and UI pieces
│   │   └── icons/            # SVG icon components (general, services/, tags/)
│   ├── content/case-studies/ # One Markdown file per case study (only the frontmatter is rendered)
│   ├── content.config.ts     # `caseStudies` collection (glob loader, Zod from astro/zod)
│   ├── data/                 # projects.ts, experience.ts, services.ts, tags.ts
│   ├── layouts/Layout.astro  # <head>, SEO/Open Graph, JSON-LD, analytics, header and footer
│   ├── pages/
│   │   ├── index.astro       # Home (all sections)
│   │   └── projects/[slug].astro  # Case study pages, one per collection entry
│   └── styles/global.css     # Tailwind import, theme tokens and base layer
├── public/                   # favicon, og.jpg, robots.txt, images/projects/ (project previews)
├── tests/e2e/                # Playwright specs (hero, layout, navigation)
├── astro.config.mjs
├── playwright.config.ts
└── wrangler.toml             # Cloudflare Pages project config
```

## Rules

### Content

- The site is in English (`<html lang="en">`), single locale.
- Home sections read their data from `src/data/*.ts`. To add a project, edit `projects.ts`; preview images go in `public/images/projects/` and are referenced by path (`/images/projects/<name>.webp`).
- A case study page needs a Markdown file in `src/content/case-studies/` whose frontmatter matches the schema in `content.config.ts`; the file name is the URL slug (`/projects/<slug>/`).
- The header links are the `navItems` array in `src/components/Header.astro`. When it changes, update `NAV_LINKS` in `tests/e2e/navigation.spec.ts`.

### Astro

- Static output (`output: 'static'`), no adapter, no server runtime.
- Content collections use the `glob()` loader; import Zod from `astro/zod`; use `entry.id`, not `entry.slug`.
- No UI-framework islands (no `client:*`). Interactivity is plain `<script>` in `.astro` files (header: section highlighting and mobile menu; projects: detail dialogs).

### Styling (Tailwind CSS 4)

- Theme tokens live in `src/styles/global.css` under `@theme`: `primary` (`#40ea1e`), `secondary`, `background` and a neutral `gray` scale (the default Tailwind gray leans blue; keep surfaces neutral). There is no `tailwind.config`.
- The site is dark-only: `<html class="dark">`, `bg-background`, no `dark:` variants.
- Use Tailwind 4 utility names (`shadow-xs`, `rounded-sm`, `backdrop-blur-sm`, `ring-3`, `outline-hidden`, `shrink-0`, `bg-linear-to-*`), not the Tailwind 3 ones.
- `@apply` inside a component `<style>` block needs `@reference "../styles/global.css";` at the top (see `Hero.astro`).
- `global.css` keeps two Tailwind 3 defaults on purpose: the default border color and the pointer cursor on buttons.
- In Tailwind 4 a `leading-*` class also applies to responsive text sizes; when combining them, set the line height per breakpoint (see the hero subtitle: `leading-tight sm:text-3xl sm:leading-9`).

### Tests

- `bun run test:e2e` builds the site and serves it with `astro preview` on port 4321, then runs the specs on five viewports (320, 375, 414, 768, 1440).
- Under an AI coding agent, Astro starts `preview` as a background process and Playwright reports "Process from config.webServer exited early". Run the tests with the agent variables unset (it works with `AI_AGENT` and all `CLAUDE*` variables removed from the environment), and stop any leftover server with `bunx astro preview stop`.

## Secrets and Environment Variables (1Password)

The build reads **no environment variables**. Only the deploy needs credentials, and there are **no `.env` files**: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` live in a 1Password Environment (account `my.1password.eu`, ID `jm36yoxgtup7rzbqcvwcsh4zoa`) and are injected by `op run --environment <id>` only while Wrangler runs.

- Requires the 1Password CLI (`op`) with "Integrate with 1Password CLI" enabled in the desktop app; each deploy asks for approval when 1Password is locked.
- The token needs `Account > Cloudflare Pages > Edit` on the account that hosts the `portfolio-dev` Pages project.
- `apps/web/.env.example` lists the variable names with placeholder values only. Never commit `.env` files or copy secret values into docs.

## Deployment

Deploys run **from a local machine** with Wrangler (Cloudflare Pages direct upload); there are no Git-triggered builds.

```bash
bun run deploy           # bun run build && cd apps/web && op run … -- bunx wrangler pages deploy --branch main
bun run deploy:preview   # same, with --branch preview
```

- Pages project `portfolio-dev`: production branch `main` → `https://spindola.me`; the `preview` branch → `https://preview.portfolio-dev-eva.pages.dev`.
- `apps/web/wrangler.toml`: project name, `pages_build_output_dir = "dist"`, `compatibility_date`. No compatibility flags or vars: the site is purely static (no Pages Functions).

## Git

Hosted on GitHub: `github.com/alexandrespindola/portfolio-dev`, branch `main`.

## Before Committing

```bash
bun run build
bun run check
cd apps/web && bun run test:e2e
```
