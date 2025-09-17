import fetch from 'node-fetch'
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
    // Get the path to the registry folder in the PayloadKit monorepo
    // For built CLI, __dirname points to packages/payloadkit/dist/
    // So we need to go up 3 levels: dist -> payloadkit -> packages -> root
    if (typeof __dirname !== 'undefined') {
      return path.resolve(__dirname, '../../../registry')
    }
    
    // Fallback: try to find from current working directory
    return path.resolve(process.cwd(), 'registry')
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
    return registry.blocks[name] || null
  }

  /**
   * Get a specific component
   */
  static async getComponent(name: string): Promise<PayloadKitComponent | null> {
    const registry = await this.getRegistry()
    return registry.components[name] || null
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
   * Get a specific plugin
   */
  static async getPlugin(name: string): Promise<PayloadKitPlugin | null> {
    const registry = await this.getRegistry()
    return registry.plugins[name] || null
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