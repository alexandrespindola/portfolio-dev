// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Ignorar warnings sobre importações não utilizadas em node_modules
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.id?.includes('node_modules')) {
            return;
          }
          warn(warning);
        }
      }
    }
  }
});