import { z } from 'zod'
import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import type { RegistrySearchOptions, RegistryItemWithPath } from '../types/index.js'
import path from 'path'
import fs from 'fs/promises'

const registrySearchSchema = z.object({
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  type: z.enum(['blocks', 'collections', 'components', 'globals', 'config', 'fields']).optional(),
  limit: z.number().min(1).max(100).default(20).optional()
})

const itemDetailsSchema = z.object({
  name: z.string(),
  type: z.enum(['blocks', 'collections', 'components', 'globals', 'config', 'fields'])
})

const addItemSchema = z.object({
  name: z.string(),
  type: z.enum(['blocks', 'collections', 'components', 'globals', 'config', 'fields']),
  targetPath: z.string().optional()
})

export const registryTools: Tool[] = [
  {
    name: 'list_registry_items',
    description: 'List all available items in the PayloadKit registry with optional filtering by category, tags, or type',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          description: 'Filter by category (e.g., "hero", "content", "auth")'
        },
        tags: {
          type: 'array',
          items: { type: 'string' },
          description: 'Filter by tags (e.g., ["hero", "cta"])'
        },
        type: {
          type: 'string',
          enum: ['blocks', 'collections', 'components', 'globals', 'config', 'fields'],
          description: 'Filter by item type'
        },
        limit: {
          type: 'number',
          minimum: 1,
          maximum: 100,
          default: 20,
          description: 'Maximum number of items to return'
        }
      }
    }
  },
  {
    name: 'search_registry',
    description: 'Search registry items by name, description, or tags with fuzzy matching',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query for name, description, or tags'
        },
        type: {
          type: 'string',
          enum: ['blocks', 'collections', 'components', 'globals', 'config', 'fields'],
          description: 'Filter by item type'
        },
        limit: {
          type: 'number',
          minimum: 1,
          maximum: 100,
          default: 10,
          description: 'Maximum number of results'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'get_item_details',
    description: 'Get detailed information about a specific registry item including files, dependencies, and metadata',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the registry item'
        },
        type: {
          type: 'string',
          enum: ['blocks', 'collections', 'components', 'globals', 'config', 'fields'],
          description: 'Type of the registry item'
        }
      },
      required: ['name', 'type']
    }
  },
  {
    name: 'view_item_source',
    description: 'View the source code of a specific file in a registry item',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the registry item'
        },
        type: {
          type: 'string',
          enum: ['blocks', 'collections', 'components', 'globals', 'config', 'fields'],
          description: 'Type of the registry item'
        },
        filename: {
          type: 'string',
          description: 'Specific file to view (e.g., "Component.tsx", "config.ts")'
        }
      },
      required: ['name', 'type', 'filename']
    }
  },
  {
    name: 'add_registry_item',
    description: 'Add a registry item to the current project',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the registry item to add'
        },
        type: {
          type: 'string',
          enum: ['blocks', 'collections', 'components', 'globals', 'config', 'fields'],
          description: 'Type of the registry item'
        },
        targetPath: {
          type: 'string',
          description: 'Target path in the project (optional, will use default structure)'
        }
      },
      required: ['name', 'type']
    }
  }
]

// Simple registry loader function
async function loadRegistry(registryPath: string): Promise<any> {
  const registryIndexPath = path.join(registryPath, 'index.json')
  const content = await fs.readFile(registryIndexPath, 'utf-8')
  return JSON.parse(content)
}

export async function handleRegistryTool(name: string, args: any, registryPath: string, projectPath: string): Promise<any> {
  const registry = await loadRegistry(registryPath)

  switch (name) {
    case 'list_registry_items': {
      const options = registrySearchSchema.parse(args)
      return await listRegistryItems(registry, options, registryPath)
    }

    case 'search_registry': {
      const { query, type, limit = 10 } = args
      return await searchRegistry(registry, query, registryPath, type, limit)
    }

    case 'get_item_details': {
      const { name, type } = itemDetailsSchema.parse(args)
      return await getItemDetails(registry, name, type, registryPath)
    }

    case 'view_item_source': {
      const { name, type, filename } = args
      return await viewItemSource(registry, name, type, filename, registryPath)
    }

    case 'add_registry_item': {
      const { name, type, targetPath } = addItemSchema.parse(args)
      return await addRegistryItem(registry, name, type, registryPath, projectPath, targetPath)
    }

    default:
      throw new Error(`Unknown registry tool: ${name}`)
  }
}

async function listRegistryItems(registry: any, options: RegistrySearchOptions, registryPath: string): Promise<RegistryItemWithPath[]> {
  const { category, tags, type, limit = 20 } = options
  let items: RegistryItemWithPath[] = []

  // Collect items from all types or specific type
  const types = type ? [type] : ['blocks', 'collections', 'components', 'globals', 'config', 'fields']

  for (const itemType of types) {
    if (registry[itemType]) {
      for (const [name, item] of Object.entries(registry[itemType])) {
        const itemPath = path.join(registryPath, itemType, name)
        items.push({
          ...(item as any),
          path: `${itemType}/${name}`,
          fullPath: itemPath,
          type: itemType
        })
      }
    }
  }

  // Apply filters
  if (category) {
    items = items.filter(item => (item as any).category === category)
  }

  if (tags && tags.length > 0) {
    items = items.filter(item =>
      tags.some(tag => (item as any).tags?.includes(tag))
    )
  }

  // Limit results
  return items.slice(0, limit)
}

async function searchRegistry(registry: any, query: string, registryPath: string, type?: string, limit = 10): Promise<RegistryItemWithPath[]> {
  const searchTerm = query.toLowerCase()
  let items: RegistryItemWithPath[] = []

  const types = type ? [type] : ['blocks', 'collections', 'components', 'globals', 'config', 'fields']

  for (const itemType of types) {
    if (registry[itemType]) {
      for (const [name, item] of Object.entries(registry[itemType])) {
        const itemData = item as any
        const itemPath = path.join(registryPath, itemType, name)

        // Check if query matches name, description, or tags
        const matchesName = name.toLowerCase().includes(searchTerm)
        const matchesDescription = itemData.description?.toLowerCase().includes(searchTerm)
        const matchesTags = itemData.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm))

        if (matchesName || matchesDescription || matchesTags) {
          items.push({
            ...itemData,
            path: `${itemType}/${name}`,
            fullPath: itemPath,
            type: itemType
          })
        }
      }
    }
  }

  return items.slice(0, limit)
}

async function getItemDetails(registry: any, name: string, type: string, registryPath: string): Promise<any> {
  const item = registry[type]?.[name]
  if (!item) {
    throw new Error(`Item "${name}" not found in type "${type}"`)
  }

  const itemPath = path.join(registryPath, type, name)

  // Get file list and check if files exist
  const files = await Promise.all(
    item.files.map(async (filename: string) => {
      const filePath = path.join(itemPath, filename)
      try {
        const stats = await fs.stat(filePath)
        return {
          name: filename,
          exists: true,
          size: stats.size,
          modified: stats.mtime
        }
      } catch {
        return {
          name: filename,
          exists: false
        }
      }
    })
  )

  return {
    ...item,
    path: `${type}/${name}`,
    fullPath: itemPath,
    files,
    type
  }
}

async function viewItemSource(registry: any, name: string, type: string, filename: string, registryPath: string): Promise<any> {
  const item = registry[type]?.[name]
  if (!item) {
    throw new Error(`Item "${name}" not found in type "${type}"`)
  }

  if (!item.files.includes(filename)) {
    throw new Error(`File "${filename}" not found in item "${name}". Available files: ${item.files.join(', ')}`)
  }

  const filePath = path.join(registryPath, type, name, filename)

  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return {
      name,
      type,
      filename,
      path: filePath,
      content,
      lines: content.split('\n').length
    }
  } catch (error) {
    throw new Error(`Failed to read file "${filename}": ${error}`)
  }
}

async function addRegistryItem(registry: any, name: string, type: string, registryPath: string, projectPath: string, targetPath?: string): Promise<any> {
  const item = registry[type]?.[name]
  if (!item) {
    throw new Error(`Item "${name}" not found in type "${type}"`)
  }

  // Determine target path
  const defaultTargetPath = path.join(projectPath, 'src', type, name)
  const finalTargetPath = targetPath ? path.join(projectPath, targetPath) : defaultTargetPath

  // Create target directory
  await fs.mkdir(finalTargetPath, { recursive: true })

  const sourcePath = path.join(registryPath, type, name)
  const copiedFiles: string[] = []

  // Copy files
  for (const filename of item.files) {
    const sourceFile = path.join(sourcePath, filename)
    const targetFile = path.join(finalTargetPath, filename)

    try {
      const content = await fs.readFile(sourceFile, 'utf-8')
      await fs.writeFile(targetFile, content, 'utf-8')
      copiedFiles.push(filename)
    } catch (error) {
      console.warn(`Failed to copy file ${filename}: ${error}`)
    }
  }

  return {
    name,
    type,
    sourcePath,
    targetPath: finalTargetPath,
    copiedFiles,
    dependencies: item.dependencies || [],
    registryDependencies: item.registryDependencies || [],
    message: `Successfully added ${type} "${name}" to your project`
  }
}