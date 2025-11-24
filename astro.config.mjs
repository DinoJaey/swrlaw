import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dinojaey.github.io/swrlaw',
  base: '/swrlaw',

  vite: {
    plugins: [tailwindcss()],
  },
});
