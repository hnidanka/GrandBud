import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
   return {
    base: command === 'serve' ? '/' : '/GrandBud/', 
    build: {
        rollupOptions: {
          input: {
            main: 'index.html',
            pricelist: 'pricelist.html',
          },
        },
      },
   }
  });