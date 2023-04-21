/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    '@': resolve(__dirname, './src'),
    "#root": resolve(__dirname),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['.test/setup.ts'],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
});
