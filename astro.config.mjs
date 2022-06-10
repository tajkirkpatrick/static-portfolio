import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), turbolinks(), sitemap()],
  site: 'https://www.tajkirkpatrick.com/',
  vite: {
    build: {
      emptyOutDir: true,
    },
    server: {
      host: '127.0.0.1',
    },
    plugins: [
      Unocss(),

      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'apple-touch-icon.png',
          'favicon.ico',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'robots.txt',
        ],
        manifest: {
          id: '8f89565b-6081-4b95-989a-ed4902eaab0d',
          name: 'Taj Kirkpatrick Web Services',
          short_name: 'TKWS',
          description: 'Taj Kirkpatrick Web Services powered by Astro JS',
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
