import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

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
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          id: '8f89565b-6081-4b95-989a-ed4902eaab0d',
          name: 'Taj Kirkpatrick Web Services',
          short_name: 'TKWS',
          description: 'PWA powered by Astro JS',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  },
});
