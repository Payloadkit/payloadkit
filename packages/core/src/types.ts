import type { Block, CollectionConfig, GlobalConfig } from 'payload'

/**
 * Core PayloadKit types
 */

// Registry Types
export interface PayloadKitBlock {
  name: string
  slug: string
  config: Block
  component?: string
  description?: string
  category?: BlockCategory
  tags?: string[]
  version?: string
  dependencies?: string[]
  registryDependencies?: string[]
}

export interface PayloadKitCollection {
  name: string
  slug: string
  config: CollectionConfig
  description?: string
  category?: CollectionCategory
  dependencies?: string[]
  registryDependencies?: string[]
}

export interface PayloadKitGlobal {
  name: string
  slug: string
  config: GlobalConfig
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
}

// Categories
export type BlockCategory = 
  | 'hero'
  | 'content'
  | 'feature'
  | 'testimonial'
  | 'contact'
  | 'marketing'
  | 'ecommerce'
  | 'other'

export type CollectionCategory =
  | 'content'
  | 'ecommerce'
  | 'user'
  | 'media'
  | 'taxonomy'
  | 'other'

// Registry Schema
export interface PayloadKitRegistry {
  version: string
  blocks: Record<string, PayloadKitBlock>
  collections: Record<string, PayloadKitCollection>
  globals: Record<string, PayloadKitGlobal>
  components: Record<string, PayloadKitComponent>
  plugins: Record<string, PayloadKitPlugin>
}

export interface PayloadKitComponent {
  name: string
  description?: string
  version?: string
  files: string[]
  dependencies?: string[]
  registryDependencies?: string[]
}

// Template Types
export interface PayloadKitTemplate {
  name: string
  description: string
  category: TemplateCategory
  features: string[]
  blocks: string[]
  collections: string[]
  globals: string[]
}

export type TemplateCategory = 
  | 'basic'
  | 'portfolio'
  | 'business' 
  | 'ecommerce'
  | 'blog'
  | 'landing'

// CLI Types
export interface CreateProjectOptions {
  template: string
  name: string
  description?: string
  git?: boolean
  install?: boolean
  typescript?: boolean
}

export interface AddComponentOptions {
  name: string
  overwrite?: boolean
  path?: string
}

// Plugin Types
export interface PayloadKitPlugin {
  name: string
  description?: string
  category?: PluginCategory
  tags?: string[]
  version?: string
  files: string[]
  dependencies?: string[]
  devDependencies?: string[]
  peerDependencies?: string[]
  registryDependencies?: string[]
  features?: string[]
  configuration?: {
    required?: boolean
    minimal?: boolean
    [key: string]: any
  }
}

export type PluginCategory =
  | 'authentication'
  | 'database'
  | 'email'
  | 'storage'
  | 'analytics'
  | 'seo'
  | 'payments'
  | 'cms'
  | 'utilities'
  | 'other'