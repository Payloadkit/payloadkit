import { defineConfig } from 'tsup'

export default defineConfig([
  // Server executable
  {
    entry: ['src/server.ts'],
    format: ['esm'],
    sourcemap: true,
    clean: true,
    target: 'node18',
    shims: true,
    banner: {
      js: "#!/usr/bin/env node\n"
    }
  },
  // Library exports
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    target: 'node18',
    shims: true
  }
])