// Basic registry item interface
export interface RegistryItem {
  name: string
  description: string
  category: string
  tags: string[]
  version: string
  files: string[]
  dependencies: string[]
  peerDependencies: string[]
  registryDependencies: string[]
}

export interface PayloadKitMCPServerConfig {
  registryPath?: string
  projectPath?: string
  enableLogging?: boolean
}

export interface RegistrySearchOptions {
  category?: string
  tags?: string[]
  type?: 'blocks' | 'collections' | 'components' | 'globals' | 'config' | 'fields'
  limit?: number
}

export interface ComponentGenerationOptions {
  name: string
  type: 'block' | 'collection' | 'component' | 'global'
  category?: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
}

export interface ProjectScaffoldOptions {
  template?: string
  packageManager?: 'npm' | 'yarn' | 'pnpm' | 'bun'
  install?: boolean
  git?: boolean
}

export interface RegistryItemWithPath extends RegistryItem {
  path: string
  fullPath: string
}

export interface PayloadKitProject {
  path: string
  hasPayloadConfig: boolean
  hasPackageJson: boolean
  packageManager: string
  dependencies: string[]
}