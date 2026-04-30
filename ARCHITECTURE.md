# Architecture

This document describes the architecture of the portfolio project, including the monorepo structure, build system, and deployment configuration.

## Overview

The portfolio is a modern, static site built with Astro and deployed to Cloudflare Pages. It uses a monorepo structure managed by Turborepo for efficient development and builds.

## Monorepo Structure

```
portfolio-dev/
├── apps/
│   └── web/                     # Main Astro application
├── packages/
│   └── tsconfig/               # Shared TypeScript configuration
├── turbo.json                  # Turborepo configuration
├── wrangler.toml               # Cloudflare Pages configuration
└── package.json                # Root workspace configuration
```

### Workspaces

The project uses Bun workspaces to manage dependencies:

- **apps/web**: The main Astro application containing the portfolio
- **packages/tsconfig**: Shared TypeScript configuration for consistency across the project

## Build System

### Turborepo

Turborepo is used for:
- **Task orchestration**: Running dev, build, and test commands across workspaces
- **Caching**: Intelligent caching to speed up builds
- **Dependency management**: Automatic task dependency resolution

#### Tasks

- `dev`: Start development server (no cache, persistent)
- `build`: Build for production (depends on other builds, outputs cached)
- `preview`: Preview production build (depends on build, no cache, persistent)
- `check`: Run type checking (depends on build)
- `clean`: Clean build artifacts (no cache)

### Astro Configuration

The Astro app is configured for static site generation:
- **Output mode**: `static` - generates HTML/CSS/JS files
- **Integration**: Tailwind CSS for styling
- **Image service**: No-op service for static asset handling

## Application Architecture

### Component Structure

The portfolio follows a component-based architecture:

```
apps/web/src/
├── components/
│   ├── Services.astro       # Services section with data-driven cards
│   ├── TechStack.astro      # Technology stack display
│   ├── SectionContainer.astro # Reusable section wrapper
│   ├── Hero.astro           # Hero section
│   └── icons/
│       └── services/        # Custom SVG icon components
├── data/
│   ├── services.ts          # Services data source
│   ├── projects.ts          # Projects data source
│   ├── experience.ts        # Work experience data
│   └── tags.ts              # Technology tags
├── layouts/
│   └── Layout.astro         # Main layout with global styles
└── pages/
    └── index.astro          # Homepage composition
```

### Data Flow

- **Data sources**: TypeScript files in `src/data/` export structured data
- **Components**: Import and render data from data sources
- **Composition**: Pages compose components together
- **Static generation**: Astro builds everything to static HTML at build time

## Styling Architecture

### Tailwind CSS

- **Configuration**: `apps/web/tailwind.config.mjs`
- **Custom colors**: `primary` and `secondary` color palette
- **Design system**: Utility-first approach with consistent spacing and typography
- **Dark mode**: Dark-first design with green accent colors

### Font

- **Font family**: Onest Variable
- **Loading**: `@fontsource-variable/onest` package
- **Usage**: Applied globally in Layout.astro

## Deployment Architecture

### Cloudflare Pages

The portfolio is deployed as a static site to Cloudflare Pages:

#### Configuration (wrangler.toml)

```toml
name = "portfolio-dev"
compatibility_date = "2026-04-18"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "apps/web/dist"

[vars]
NODE_ENV = "production"
NODE_VERSION = "24"
BUN_VERSION = "1.3.13"
```

#### Deployment Process

1. **Build**: `bun run build` generates static files in `apps/web/dist`
2. **Upload**: Cloudflare Pages uploads the dist directory
3. **Distribution**: Files are served from Cloudflare's global CDN
4. **Edge caching**: Automatic caching at edge locations worldwide

#### Build Settings

- **Build command**: `bun run build`
- **Build output directory**: `apps/web/dist`
- **Node.js compatibility**: Enabled via `nodejs_compat` flag

### Performance Optimizations

- **Static generation**: No server-side rendering overhead
- **CDN delivery**: Global edge network for fast loading
- **Minimal JavaScript**: Only necessary JS is included
- **Optimized assets**: Images and fonts are optimized
- **CSS purging**: Unused Tailwind styles are removed

## Development Workflow

### Local Development

1. Install dependencies: `bun install`
2. Start dev server: `bun run dev`
3. Visit: `http://localhost:4321`

### Building

1. Build for production: `bun run build`
2. Preview build: `bun run preview`
3. Output: `apps/web/dist/`

### Deployment

1. Push to main branch
2. Cloudflare Pages automatically builds and deploys
3. Site is live on Cloudflare's global CDN

## Technology Stack

- **Framework**: Astro 6.1.7
- **Styling**: Tailwind CSS 3.4.18
- **Package Manager**: Bun 1.3.12
- **Monorepo**: Turborepo 2.9.6
- **Deployment**: Cloudflare Pages
- **TypeScript**: Shared configuration via workspace package

## Security Considerations

- **Static site**: No server-side code execution
- **No database**: No sensitive data storage
- **No authentication**: Public read-only content
- **HTTPS**: Automatic SSL/TLS via Cloudflare
- **CSP**: Content Security Policy can be added if needed

## Future Architecture Considerations

Potential enhancements:
- **Image optimization**: Cloudflare Images integration
- **Analytics**: Cloudflare Web Analytics
- **Forms**: Cloudflare Forms for contact functionality
- **A/B testing**: Cloudflare A/B testing features
- **Edge functions**: Cloudflare Functions for dynamic features
