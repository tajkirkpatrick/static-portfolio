import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
// import { VitePWA } from 'vite-plugin-pwa';

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
    // plugins: [VitePWA()],
  },
});
