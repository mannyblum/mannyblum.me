import tailwindcss from '@tailwindcss/vite';
//import react from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          '@emotion/react': ['@emotion/react', '@emotion/styled'],
          '@dnd-kit': [
            '@dnd-kit/core',
            '@dnd-kit/sortable',
            '@dnd-kit/helpers',
            '@dnd-kit/react',
          ],
          '@tanstack/react-query': [
            '@tanstack/react-query',
            '@tanstack/react-query-persist-client',
            '@tanstack/query-sync-storage-persister',
          ],
        },
      },
    },
  },
  server: {
    proxy: {
      '/mealdb': {
        target: 'http://www.themealdb.com/api/json/v1/1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mealdb/, ''),
      },
    },
  },
  // base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tailwindcss(),
  ],
});
