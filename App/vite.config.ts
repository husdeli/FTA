import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@ui': resolve(__dirname, './src/ui'),
      '@data/services': resolve(__dirname, './src/data/services'),
      '@domain/core': resolve(__dirname, './src/domain/features/core'),
      '@domain/types': resolve(__dirname, './src/domain/types'),
      '@domain/features/pdf': resolve(__dirname, './src/domain/features/pdf')
    }
  },
  plugins: [react()]
});
