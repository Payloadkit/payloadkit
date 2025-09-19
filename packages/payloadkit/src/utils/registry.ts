import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { REGISTRY_URL } from '@payloadkit/core'
import type { PayloadKitRegistry, PayloadKitBlock, PayloadKitComponent, PayloadKitPlugin } from '@payloadkit/core'
import { Logger } from './logger'
import { FileOperations } from './file-operations'

/**
 * Registry client for fetching components
 */
export class Registry {
  private static cache: PayloadKitRegistry | null = null
  private static readonly CACHE_TTL = 5 * 60 * 1000 // 5 minutes

  /**
   * Get the local registry path
   */
  private static getLocalRegistryPath(): string {
    // Try multiple potential registry locations
    const possiblePaths = [
      // For npm installed package: registry is bundled in package root
      path.resolve(__dirname, '../../../registry'),
      // For built CLI in monorepo: dist -> payloadkit -> packages -> root -> registry
      path.resolve(__dirname, '../../../registry'),
      // For npm installed package: try from package root (alternative structure)
      path.resolve(__dirname, '../registry'),
      // Fallback: try from current working directory
      path.resolve(process.cwd(), 'registry'),
      // Try relative to the payloadkit package directory
      path.resolve(__dirname, '../../registry')
    ]

    // Return the first path that exists
    for (const registryPath of possiblePaths) {
      const indexPath = path.join(registryPath, 'index.json')
      if (fs.existsSync(indexPath)) {
        return registryPath
      }
    }

    // If none exist, return the first one as fallback
    return possiblePaths[0]
  }

  /**
   * Fetch the registry data
   */
  static async getRegistry(): Promise<PayloadKitRegistry> {
    if (this.cache) {
      return this.cache
    }

    try {
      Logger.startSpinner('Loading registry...')
      
      // Try to load local registry first
      const localRegistryPath = path.join(this.getLocalRegistryPath(), 'index.json')
      const localRegistry = await FileOperations.readJson<PayloadKitRegistry>(localRegistryPath)
      
      if (localRegistry) {
        this.cache = localRegistry
        Logger.stopSpinner(true, 'Registry loaded from local')
        return localRegistry
      }

      // Fallback to empty registry
      const emptyRegistry: PayloadKitRegistry = {
        version: '0.0.1',
        blocks: {},
        collections: {},
        globals: {},
        components: {},
        plugins: {}
      }

      this.cache = emptyRegistry
      Logger.stopSpinner(true, 'Empty registry loaded')
      
      return emptyRegistry
    } catch (error) {
      Logger.stopSpinner(false, 'Failed to load registry')
      throw new Error(`Failed to load registry: ${error}`)
    }
  }

  /**
   * Get a specific block
   */
  static async getBlock(name: string): Promise<PayloadKitBlock | null> {
    const registry = await this.getRegistry()
    // Try exact match first
    if (registry.blocks[name]) {
      return registry.blocks[name]
    }
    // Try case-insensitive match
    const lowerName = name.toLowerCase()
    for (const [key, value] of Object.entries(registry.blocks)) {
      if (key.toLowerCase() === lowerName) {
        return value
      }
    }
    return null
  }

  /**
   * Get a specific component
   */
  static async getComponent(name: string): Promise<PayloadKitComponent | null> {
    const registry = await this.getRegistry()
    // Try exact match first
    if (registry.components[name]) {
      return registry.components[name]
    }
    // Try case-insensitive match
    const lowerName = name.toLowerCase()
    for (const [key, value] of Object.entries(registry.components)) {
      if (key.toLowerCase() === lowerName) {
        return value
      }
    }
    return null
  }

  /**
   * List all available blocks
   */
  static async listBlocks(): Promise<PayloadKitBlock[]> {
    const registry = await this.getRegistry()
    return Object.values(registry.blocks)
  }

  /**
   * List all available components
   */
  static async listComponents(): Promise<PayloadKitComponent[]> {
    const registry = await this.getRegistry()
    return Object.values(registry.components)
  }

  /**
   * Get a specific global
   */
  static async getGlobal(name: string): Promise<any | null> {
    const registry = await this.getRegistry()
    // Try exact match first
    if (registry.globals[name]) {
      return registry.globals[name]
    }
    // Try case-insensitive match
    const lowerName = name.toLowerCase()
    for (const [key, value] of Object.entries(registry.globals)) {
      if (key.toLowerCase() === lowerName) {
        return value
      }
    }
    return null
  }

  /**
   * Get a specific collection
   */
  static async getCollection(name: string): Promise<any | null> {
    const registry = await this.getRegistry()
    // Try exact match first
    if (registry.collections[name]) {
      return registry.collections[name]
    }
    // Try case-insensitive match
    const lowerName = name.toLowerCase()
    for (const [key, value] of Object.entries(registry.collections)) {
      if (key.toLowerCase() === lowerName) {
        return value
      }
    }
    return null
  }

  /**
   * Get a specific plugin
   */
  static async getPlugin(name: string): Promise<PayloadKitPlugin | null> {
    const registry = await this.getRegistry()
    // Try exact match first
    if (registry.plugins[name]) {
      return registry.plugins[name]
    }
    // Try case-insensitive match
    const lowerName = name.toLowerCase()
    for (const [key, value] of Object.entries(registry.plugins)) {
      if (key.toLowerCase() === lowerName) {
        return value
      }
    }
    return null
  }

  /**
   * List all available globals
   */
  static async listGlobals(): Promise<any[]> {
    const registry = await this.getRegistry()
    return Object.values(registry.globals)
  }

  /**
   * List all available collections
   */
  static async listCollections(): Promise<any[]> {
    const registry = await this.getRegistry()
    return Object.values(registry.collections)
  }

  /**
   * List all available plugins
   */
  static async listPlugins(): Promise<PayloadKitPlugin[]> {
    const registry = await this.getRegistry()
    return Object.values(registry.plugins)
  }

  /**
   * Search blocks by category or name
   */
  static async searchBlocks(query: string): Promise<PayloadKitBlock[]> {
    const blocks = await this.listBlocks()
    const lowerQuery = query.toLowerCase()
    
    return blocks.filter(block => 
      block.name.toLowerCase().includes(lowerQuery) ||
      block.description?.toLowerCase().includes(lowerQuery) ||
      block.category?.toLowerCase().includes(lowerQuery) ||
      block.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  /**
   * Get the source path for a block
   */
  static getBlockSourcePath(blockName: string): string {
    const registryPath = this.getLocalRegistryPath()
    return path.join(registryPath, 'blocks', blockName)
  }

  /**
   * Get the source path for a component
   */
  static getComponentSourcePath(componentName: string): string {
    const registryPath = this.getLocalRegistryPath()
    return path.join(registryPath, 'components', componentName)
  }

  /**
   * Get the source path for a global
   */
  static getGlobalSourcePath(globalName: string): string {
    const registryPath = this.getLocalRegistryPath()
    return path.join(registryPath, 'globals', globalName)
  }

  /**
   * Get the source path for a collection
   */
  static getCollectionSourcePath(collectionName: string): string {
    const registryPath = this.getLocalRegistryPath()
    return path.join(registryPath, 'collections', collectionName)
  }

  /**
   * Get the source path for a plugin
   */
  static getPluginSourcePath(pluginName: string): string {
    const registryPath = this.getLocalRegistryPath()
    return path.join(registryPath, 'plugins', pluginName)
  }

  /**
   * Check if a block exists in the local registry
   */
  static async blockExists(blockName: string): Promise<boolean> {
    const blockPath = this.getBlockSourcePath(blockName)
    return await FileOperations.exists(blockPath)
  }

  /**
   * Clear cache
   */
  static clearCache() {
    this.cache = null
  }
}