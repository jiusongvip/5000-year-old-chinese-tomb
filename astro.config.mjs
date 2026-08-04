 import { defineConfig } from 'astro/config';
 import tailwind from '@astrojs/tailwind';
 import { fileURLToPath } from 'node:url';

 export default defineConfig({
   integrations: [tailwind()],
   vite: {
     resolve: {
       alias: {
         '~': fileURLToPath(new URL('./src', import.meta.url)),
       },
     },
   },
   site: 'https://5000-year-old-chinese-tomb.com',
   trailingSlash: 'never',
 });
