import { defineConfig, type Options } from 'tsup'

export function createTsupConfig(options: Options = {}): Options {
  return defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    target: 'es2022',
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    minify: false,
    external: [
      'payload',
      'react',
      'react-dom',
      'next'
    ],
    ...options
  })
}