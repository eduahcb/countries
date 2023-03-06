/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: path.join(__dirname, 'src', 'setupTests.ts'),
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      all: true,
      functions: 90,
      lines: 90,
      branches: 90,
      statements: 90,
      reporter: ['text', 'lcov', 'html'],
      include: ['**/src/**/**/*.tsx', '**/src/**/**/*.ts'],
      exclude: [
        '**/src/main.tsx',
        '**/src/setupTests.ts',
        '**/src/vite-env.d.ts',
        '**/src/**/*.stories.tsx',
        '**/src/**/*.test.tsx',
        '**/src/**/*.test.ts',
        '**/src/**/repositories/in-memory/*.ts',
        '**/src/fake-api/*.ts'
      ]
    }
  },
  plugins: [
    tsconfigPaths(),
    svgr()
  ]
})