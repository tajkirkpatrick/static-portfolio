import presetIcons from '@unocss/preset-icons';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then((i) => i),
      },
    }),
  ],
});
