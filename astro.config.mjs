import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // REPLACE with your data:
  site: 'https://DinoJaey.github.io',
  base: '/swrlaw', 

  vite: {
    plugins: [tailwindcss()],
  },
});