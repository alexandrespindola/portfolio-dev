# Alexandre Spindola - Portfolio

Modern, responsive portfolio built with Astro, Tailwind, and deployed to Cloudflare Pages.

## 🚀 Live Demo

Visit the live portfolio at: [https://spindola.me](https://spindola.me)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: Onest Variable
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Monorepo**: [Turborepo](https://turbo.build/repo)
- **Package Manager**: [Bun](https://bun.sh/)

## 📦 Features

- ⚡ **Performance-first**: Astro + Tailwind
- 📱 **Responsive**: Mobile-first with safe side paddings
- 🎨 **Modern UI**: Clean, green-accent theme (dark-first)
- 🧩 **Services Section**: Data-driven cards with custom SVG icons
- 🧰 **Tech Stack Section**: Logo badges grouped by categories
- 🧭 **Sticky Header**: Top navigation with smooth scroll and “Home” anchor
- 🧾 **Experience Timeline**: Clear work history
- 🗂️ **Projects Gallery**: Real projects with tags, links, and code
- 📣 **CTAs**: Services CTA + final minimal contact CTA

## 🏃‍♂️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- [Git](https://git-scm.com/) for version control
- [Cloudflare account](https://dash.cloudflare.com/) for deployment

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio-dev.git
cd portfolio-dev
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
/
├── apps/
│   └── web/                     # Main Astro application
│       ├── public/              # Static assets
│       ├── src/
│       │   ├── components/      # Astro components
│       │   │   ├── Services.astro       # Services section (cards + CTA)
│       │   │   ├── TechStack.astro      # Tech Stack badges
│       │   │   ├── SectionContainer.astro # Section wrapper (spacing, container)
│       │   │   └── icons/
│       │   │       └── services/        # Custom SVG icons for services
│       │   ├── data/
│       │   │   ├── services.ts          # Services data
│       │   │   ├── projects.ts          # Projects data
│       │   │   ├── experience.ts        # Experience data
│       │   │   └── tags.ts              # Technology tags
│       │   ├── layouts/
│       │   │   └── Layout.astro         # App layout (dark-first)
│       │   └── pages/
│       │       └── index.astro          # Home (includes final contact CTA)
│       ├── astro.config.mjs             # Astro config
│       ├── tailwind.config.mjs          # Tailwind config
│       └── package.json                 # App dependencies
├── packages/
│   └── tsconfig/               # Shared TypeScript configuration
├── turbo.json                  # Turborepo configuration
├── wrangler.toml               # Cloudflare Pages configuration
└── package.json                # Root workspace configuration
```

## 🚀 Deployment

This project is configured for deployment on Cloudflare Pages as a static site.

### Deploy Commands

- **Build**: `bun run build`
- **Preview**: `bun run preview`

### Cloudflare Pages Deployment

1. Connect your repository to Cloudflare Pages
2. Set build configuration:
   - **Build command**: `bun run build`
   - **Build output directory**: `apps/web/dist`
3. Deploy automatically on push to main branch

For detailed deployment instructions, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run Astro type checking

## 🎨 Customization

### Updating Content

1. **Services (cards + icons)**
   - Data: `apps/web/src/data/services.ts`
   - Ícones: `apps/web/src/components/icons/services/` (cada ícone é um componente Astro que aceita `class`)
2. **Tech Stack**: `apps/web/src/components/TechStack.astro` e `apps/web/src/data/tags.ts`
3. **Projects**: `apps/web/src/data/projects.ts`
4. **Experience**: `apps/web/src/data/experience.ts`
5. **Layout/cores**: `apps/web/tailwind.config.mjs` (cores `primary`/`secondary`) e `apps/web/src/layouts/Layout.astro`

### Styling

The project uses Tailwind CSS. Customize by:

- Modifying `apps/web/tailwind.config.mjs`
- Editing component styles in `.astro` files
- Adding custom CSS classes

## 📞 Contact

- **Website**: [https://spindola.me](https://spindola.me)
- **GitHub**: [@alexandrespindola](https://github.com/alexandrespindola)

## 📚 Additional Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project architecture and deployment details
- [AGENTS.md](./AGENTS.md) - AI agents and development tools

---

Built with ❤️ using Astro and deployed on Cloudflare Pages
