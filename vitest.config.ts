import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test-setup.ts',
        '**/*.d.ts',
        '**/*.config.*',
        '**/build/**',
        '**/dist/**',
        '**/__tests__/**',
      ],
    },
    // Mock les imports qui posent problème
    deps: {
      inline: [/@testing-library/],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './registry'),
      '@/components/ui': resolve(__dirname, './apps/docs/src/components/ui'),
    },
  },
})