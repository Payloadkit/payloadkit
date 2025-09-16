/**
 * PayloadKit MCP Server
 *
 * Model Context Protocol server for PayloadKit - enables AI assistants
 * to work with PayloadCMS components and registry
 */

export { PayloadKitMCPServer } from './server.js'
export type {
  PayloadKitMCPServerConfig,
  RegistrySearchOptions,
  ComponentGenerationOptions,
  ProjectScaffoldOptions,
  RegistryItemWithPath,
  PayloadKitProject
} from './types/index.js'

export { registryTools, handleRegistryTool } from './tools/registry.js'
export { projectTools, handleProjectTool } from './tools/project.js'
export { generatorTools, handleGeneratorTool } from './tools/generator.js'