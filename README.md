# Alexandre Spindola - Portfolio

A modern, responsive portfolio website built with Astro and deployed on Deno Deploy.

## 🚀 Live Demo

Visit the live portfolio at: [https://portfolio-spindola-vnsa8qh0c5jc.deno.dev](https://portfolio-spindola-vnsa8qh0c5jc.deno.dev)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with SSR capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Font**: [Onest Variable](https://fonts.google.com/specimen/Onest) - Modern variable font
- **Deployment**: [Deno Deploy](https://deno.com/deploy) - Edge runtime platform
- **Package Manager**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

## 📦 Features

- ⚡ **Lightning Fast**: Built with Astro for optimal performance
- 📱 **Responsive Design**: Looks great on all devices
- 🌙 **Dark/Light Mode**: Theme toggle with system preference detection
- 🎨 **Modern UI**: Clean and professional design
- 🔧 **Interactive Components**: Smooth animations and transitions
- 📊 **Experience Timeline**: Detailed work experience showcase
- 🚀 **Project Gallery**: Portfolio of development projects
- 🏷️ **Technology Tags**: Visual representation of skills and tools

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
├── public/           # Static assets (images, icons, etc.)
├── src/
│   ├── components/   # Reusable Astro components
│   ├── data/        # Data files (experience, projects, etc.)
│   ├── layouts/     # Page layouts
│   └── pages/       # Site pages
├── astro.config.mjs # Astro configuration
└── package.json     # Dependencies and scripts
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

1. **Experience**: Edit `src/data/experience.ts`
2. **Projects**: Edit `src/data/projects.ts`
3. **Technologies**: Edit `src/data/tags.ts`
4. **Personal Info**: Update components in `src/components/`

### Styling

The project uses Tailwind CSS. You can customize the design by:

- Modifying `tailwind.config.mjs`
- Editing component styles in `.astro` files
- Adding custom CSS classes

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [https://spindola.me](https://spindola.me)
- **GitHub**: [@alexandrespindola](https://github.com/alexandrespindola)

---

Built with ❤️ using Astro and deployed on Deno Deploy
