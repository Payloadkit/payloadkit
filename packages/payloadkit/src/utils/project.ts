import path from 'path'
import { FileOperations } from './file-operations'
import { Logger } from './logger'

/**
 * Project utilities
 */
export class Project {
  
  /**
   * Check if current directory is a PayloadCMS project
   */
  static async isPayloadProject(cwd = process.cwd()): Promise<boolean> {
    const packageJsonPath = path.join(cwd, 'package.json')
    const packageJson = await FileOperations.readJson<any>(packageJsonPath)
    
    if (!packageJson) {
      return false
    }

    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    }

    return 'payload' in deps
  }

  /**
   * Check if current directory has PayloadKit components
   */
  static async hasPayloadKitComponents(cwd = process.cwd()): Promise<boolean> {
    const payloadKitConfigPath = path.join(cwd, 'payloadkit.json')
    return FileOperations.exists(payloadKitConfigPath)
  }

  /**
   * Get project info
   */
  static async getProjectInfo(cwd = process.cwd()): Promise<{
    isPayloadProject: boolean
    hasPayloadKit: boolean
    projectName?: string
    payloadVersion?: string
  }> {
    const packageJsonPath = path.join(cwd, 'package.json')
    const packageJson = await FileOperations.readJson<any>(packageJsonPath)
    
    const isPayloadProject = await this.isPayloadProject(cwd)
    const hasPayloadKit = await this.hasPayloadKitComponents(cwd)
    
    return {
      isPayloadProject,
      hasPayloadKit,
      projectName: packageJson?.name,
      payloadVersion: packageJson?.dependencies?.payload || packageJson?.devDependencies?.payload
    }
  }

  /**
   * Initialize PayloadKit in a project
   */
  static async initializePayloadKit(cwd = process.cwd()): Promise<void> {
    const configPath = path.join(cwd, 'payloadkit.json')
    
    if (await FileOperations.exists(configPath)) {
      Logger.warn('PayloadKit already initialized')
      return
    }

    const config = {
      version: '0.0.1',
      components: {
        path: 'src/components',
        alias: '@/components'
      },
      blocks: {
        path: 'src/blocks',
        alias: '@/blocks'
      },
      collections: {
        path: 'src/collections',
        alias: '@/collections'
      },
      globals: {
        path: 'src/globals',
        alias: '@/globals'
      },
      plugins: {
        path: 'src/plugins',
        alias: '@/plugins'
      },
      registryUrl: 'https://registry.payloadkit.dev'
    }

    await FileOperations.writeJson(configPath, config)
    Logger.success('PayloadKit initialized')
  }

  /**
   * Get PayloadKit configuration
   */
  static async getPayloadKitConfig(cwd = process.cwd()) {
    const configPath = path.join(cwd, 'payloadkit.json')
    return FileOperations.readJson<any>(configPath)
  }

  /**
   * Resolve component path
   */
  static async resolveComponentPath(componentType: 'blocks' | 'components' | 'collections' | 'globals' | 'plugins', cwd = process.cwd()): Promise<string> {
    const config = await this.getPayloadKitConfig(cwd)

    if (config && config[componentType]?.path) {
      return path.join(cwd, config[componentType].path)
    }

    // Default paths
    const defaults = {
      blocks: 'src/blocks',
      components: 'src/components',
      collections: 'src/collections',
      globals: 'src/globals',
      plugins: 'src/plugins'
    }

    return path.join(cwd, defaults[componentType])
  }

  /**
   * Check if component already exists
   */
  static async componentExists(
    name: string,
    type: 'blocks' | 'components' | 'collections' | 'globals' | 'plugins',
    cwd = process.cwd()
  ): Promise<boolean> {
    const componentPath = await this.resolveComponentPath(type, cwd)
    const fullPath = path.join(componentPath, name)
    return FileOperations.exists(fullPath)
  }
}