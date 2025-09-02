# Alexandre Spindola - Portfolio

Modern, responsive portfolio built with Astro, Tailwind, and deployed to Deno Deploy.

## 🚀 Live Demo

Visit the live portfolio at: [https://spindola.me](https://spindola.me)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: Onest Variable
- **Deployment**: [Deno Deploy](https://deno.com/deploy)
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
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Services.astro       # Services section (cards + CTA)
│   │   ├── TechStack.astro      # Tech Stack badges
│   │   ├── SectionContainer.astro # Section wrapper (spacing, container)
│   │   └── icons/
│   │       └── services/        # Custom SVG icons for services
│   ├── data/
│   │   ├── services.ts          # Services data (title, description, features, icon, tags)
│   │   ├── projects.ts          # Projects data
│   │   ├── experience.ts        # Experience data
│   │   └── tags.ts              # Technology tags
│   ├── layouts/
│   │   └── Layout.astro         # App layout (dark-first)
│   └── pages/
│       └── index.astro          # Home (includes final contact CTA)
├── astro.config.mjs             # Astro config
├── tailwind.config.mjs          # Tailwind config (primary/secondary colors)
└── package.json                 # Scripts & dependencies
```

## 🚀 Deployment

This project is configured for deployment on Deno Deploy using the `@astrojs/deno` adapter.

### Deploy Commands

- **Quick Deploy**: `bun run deploy`
- **Manual Deploy**:
  ```bash
  bun run build
  deployctl deploy --project=portfolio-spindola --entrypoint=./dist/server/entry.mjs
  ```

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md).

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run deploy` - Build and deploy to Deno Deploy

## 🎨 Customization

### Updating Content

1. **Services (cards + icons)**
   - Data: `src/data/services.ts`
   - Ícones: `src/components/icons/services/` (cada ícone é um componente Astro que aceita `class`)
2. **Tech Stack**: `src/components/TechStack.astro` e `src/data/tags.ts`
3. **Projects**: `src/data/projects.ts`
4. **Experience**: `src/data/experience.ts`
5. **Layout/cores**: `tailwind.config.mjs` (cores `primary`/`secondary`) e `src/layouts/Layout.astro`

### Styling

The project uses Tailwind CSS. Customize by:

- Modifying `tailwind.config.mjs`
- Editing component styles in `.astro` files
- Adding custom CSS classes

## 📞 Contact

- **Website**: [https://spindola.me](https://spindola.me)
- **GitHub**: [@alexandrespindola](https://github.com/alexandrespindola)

---

Built with ❤️ using Astro and deployed on Deno Deploy
