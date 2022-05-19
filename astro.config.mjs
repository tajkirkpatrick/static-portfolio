import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), turbolinks(), sitemap()],
  site: 'https://www.tajkirkpatrick.com/',
  vite: {
    build: {
      emptyOutDir: true,
    },
    server: {
      host: '127.0.0.1',
    },
  },
});
