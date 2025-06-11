# Deno Deploy Configuration

This project is configured to deploy on Deno Deploy using the `@astrojs/deno` adapter.

## Setup

1. **Astro Adapter**: Configured in `astro.config.mjs` to use `@astrojs/deno`
2. **Output**: Set to `server` for SSR (Server-Side Rendering)
3. **Entrypoint**: `./dist/server/entry.mjs` (generated after build)

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build the application
- `bun run deploy` - Build and deploy automatically

## How to Deploy

### Option 1: Using the npm script
```bash
bun run deploy
```

### Option 2: Manual deployment
```bash
# 1. Build the project
bun run build

# 2. Deploy to Deno Deploy
deployctl deploy --project=portfolio-spindola --entrypoint=./dist/server/entry.mjs
```

## URLs

- **Production**: https://portfolio-spindola-vnsa8qh0c5jc.deno.dev
- **Dashboard**: https://dash.deno.com/projects/portfolio-spindola

## Important Notes

- The build generates necessary files in the `dist/` folder
- The entrypoint is always `./dist/server/entry.mjs` after build
- Make sure to build before each deployment
- The Deno adapter doesn't support Sharp (for image optimization), but the project works normally
- All static assets are automatically included in the deployment
- The project uses SSR mode for dynamic content rendering

## Troubleshooting

### Common Issues

1. **"Index of home/" page showing**: 
   - Make sure you're using the correct entrypoint: `./dist/server/entry.mjs`
   - Ensure the build was successful before deploying

2. **Build fails**:
   - Check that all dependencies are installed: `bun install`
   - Verify the Astro configuration is correct

3. **Deploy command not found**:
   - Install Deno CLI: `curl -fsSL https://deno.land/install.sh | sh`
   - Install deployctl: `deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts`

## Project Configuration Files

- **astro.config.mjs**: Contains the Deno adapter configuration
- **deno.json**: Contains Deno Deploy project settings
- **package.json**: Contains build and deploy scripts

## Performance Optimization

- Static assets are served from CDN
- Server-side rendering for dynamic content
- Optimized bundle size with Astro's build process
- Edge deployment for global fast access
