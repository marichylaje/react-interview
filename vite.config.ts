/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
  define: {
    'process.env.VITE_CONTENTFUL_SPACE': process.env.CONTENTFUL_SPACE,
    'process.env.VITE_CONTENTFUL_ENVIRONMENT': process.env.CONTENTFUL_ENVIRONMENT,
    'process.env.VITE_CONTENTFUL_ACCESS_TOKEN': process.env.CONTENTFUL_ACCESS_TOKEN,
  },
});
