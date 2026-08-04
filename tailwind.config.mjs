 /** @type {import('tailwindcss').Config} */
 export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
     extend: {
       colors: {
         accent: { DEFAULT: '#b6553a', dark: '#8b3e2a' },
         surface: '#faf8f5',
         border: '#e5ded6',
         muted: '#6b6560',
         warm: {
           50: '#fdfaf7',
           100: '#f8f2ea',
           200: '#efe4d5',
           700: '#5c4a3a',
           900: '#2d2218',
         },
       },
       fontFamily: {
         sans: ['Geist Sans', 'system-ui', 'sans-serif'],
         display: ['Outfit', 'Geist Sans', 'system-ui', 'sans-serif'],
       },
     },
   },
   plugins: [],
 };
