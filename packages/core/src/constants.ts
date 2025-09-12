/**
 * PayloadKit Constants
 */

// Package info
export const PAYLOADKIT_VERSION = '0.0.1'
export const PAYLOADKIT_NAME = 'PayloadKit'

// Registry URLs
export const REGISTRY_URL = 'https://registry.payloadkit.dev'
export const GITHUB_URL = 'https://github.com/j-corral/payloadkit'
export const DOCS_URL = 'https://payloadkit.dev'

// Supported file extensions
export const SUPPORTED_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx']

// Default paths
export const DEFAULT_COMPONENTS_PATH = 'src/components'
export const DEFAULT_BLOCKS_PATH = 'src/blocks'
export const DEFAULT_COLLECTIONS_PATH = 'src/collections'
export const DEFAULT_GLOBALS_PATH = 'src/globals'

// Template categories
export const TEMPLATE_CATEGORIES = [
  'basic',
  'portfolio',
  'business',
  'ecommerce',
  'blog',
  'landing'
] as const

// Block categories
export const BLOCK_CATEGORIES = [
  'hero',
  'content',
  'feature',
  'testimonial',
  'contact',
  'marketing',
  'ecommerce',
  'other'
] as const

// Collection categories
export const COLLECTION_CATEGORIES = [
  'content',
  'ecommerce',
  'user',
  'media',
  'taxonomy',
  'other'
] as const

// Minimum supported versions
export const MIN_PAYLOAD_VERSION = '3.55.0'
export const MIN_NODE_VERSION = '18.20.2'
export const MIN_NEXT_VERSION = '15.0.0'

// Default config files
export const CONFIG_FILES = {
  payload: 'payload.config.ts',
  next: 'next.config.js',
  tailwind: 'tailwind.config.js',
  typescript: 'tsconfig.json',
  package: 'package.json'
}