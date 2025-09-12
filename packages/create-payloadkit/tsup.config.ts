import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  target: 'node18',
  onSuccess: async () => {
    // Make the binary executable
    const { chmod } = await import('fs/promises')
    await chmod('dist/index.js', '755').catch(() => {})
  },
})