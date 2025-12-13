/// <reference types="vitest" />

import { fileURLToPath, URL } from 'url';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url)),
    },
  },
  test: {
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    reporters: ['default', 'html'],
    outputFile: {
      html: './reports/index.html',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: fileURLToPath(new URL('./setup.ts', import.meta.url)),
    include: ['src/**/?(*.)test.ts?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/test/**',
      'src/main.tsx',
      '**/*.config.{js,ts,mjs,cjs,mts,cts}',
      '**/*.d.{js,ts}',
      '**/*.index.{js,ts}',
      '**/*.stories.{jsx,tsx, js, ts, mjx, mtx}',
    ],
  },
});
