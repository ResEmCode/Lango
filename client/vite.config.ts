/// <reference types="vitest/config" />
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';

import removeAttrsPlugin from './configs/vite/removeReactAttr';

export default defineConfig(() => ({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'ie >= 11', 'safari >= 10'],
      modernPolyfills: true,
    }),
    circleDependency({
      exclude: /node_modules/,
      circleImportThrowErr: true,
    }),
    removeAttrsPlugin({
      attrs: ['data-testid'],
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
  },
}));
