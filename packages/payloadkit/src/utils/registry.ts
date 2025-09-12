import fetch from 'node-fetch'
import { REGISTRY_URL } from '@payloadkit/core'
import type { PayloadKitRegistry, PayloadKitBlock, PayloadKitComponent } from '@payloadkit/core'
import { Logger } from './logger'

/**
 * Registry client for fetching components
 */
export class Registry {
  private static cache: PayloadKitRegistry | null = null
  private static readonly CACHE_TTL = 5 * 60 * 1000 // 5 minutes

  /**
   * Fetch the registry data
   */
  static async getRegistry(): Promise<PayloadKitRegistry> {
    if (this.cache) {
      return this.cache
    }

    try {
      Logger.startSpinner('Fetching registry...')
      
      // For now, return a mock registry since we don't have a server yet
      const mockRegistry: PayloadKitRegistry = {
        version: '0.0.1',
        blocks: {},
        collections: {},
        globals: {},
        components: {}
      }

      this.cache = mockRegistry
      Logger.stopSpinner(true, 'Registry loaded')
      
      return mockRegistry
    } catch (error) {
      Logger.stopSpinner(false, 'Failed to fetch registry')
      throw new Error(`Failed to fetch registry: ${error}`)
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
   * Clear cache
   */
  static clearCache() {
    this.cache = null
  }
}