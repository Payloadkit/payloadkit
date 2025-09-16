import { z } from 'zod'
import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import type { ComponentGenerationOptions } from '../types/index.js'
import path from 'path'
import fs from 'fs/promises'

const generateComponentSchema = z.object({
  name: z.string().min(1),
  type: z.enum(['block', 'collection', 'component', 'global']),
  category: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([])
})

const generateBlockSchema = z.object({
  name: z.string().min(1),
  category: z.string().default('content'),
  description: z.string().optional(),
  withIcon: z.boolean().default(false),
  layout: z.enum(['simple', 'columns', 'grid']).default('simple')
})

export const generatorTools: Tool[] = [
  {
    name: 'generate_component',
    description: 'Generate a new PayloadKit component (block, collection, component, or global) with boilerplate code',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the component (kebab-case for blocks, PascalCase for others)'
        },
        type: {
          type: 'string',
          enum: ['block', 'collection', 'component', 'global'],
          description: 'Type of component to generate'
        },
        category: {
          type: 'string',
          description: 'Category for the component (optional)'
        },
        description: {
          type: 'string',
          description: 'Description of the component (optional)'
        },
        dependencies: {
          type: 'array',
          items: { type: 'string' },
          description: 'NPM dependencies required by this component'
        },
        registryDependencies: {
          type: 'array',
          items: { type: 'string' },
          description: 'Other registry components this depends on'
        }
      },
      required: ['name', 'type']
    }
  },
  {
    name: 'generate_block',
    description: 'Generate a PayloadCMS block with advanced options and templates',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the block (kebab-case, e.g., "hero-block")'
        },
        category: {
          type: 'string',
          default: 'content',
          description: 'Block category (content, marketing, navigation, etc.)'
        },
        description: {
          type: 'string',
          description: 'Description of what this block does'
        },
        withIcon: {
          type: 'boolean',
          default: false,
          description: 'Include icon field in the block'
        },
        layout: {
          type: 'string',
          enum: ['simple', 'columns', 'grid'],
          default: 'simple',
          description: 'Layout template for the block'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'generate_collection',
    description: 'Generate a PayloadCMS collection with common fields and patterns',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the collection (PascalCase, e.g., "BlogPosts")'
        },
        slug: {
          type: 'string',
          description: 'URL slug for the collection (optional, derived from name)'
        },
        withSlug: {
          type: 'boolean',
          default: true,
          description: 'Include slug field for URL generation'
        },
        withTimestamps: {
          type: 'boolean',
          default: true,
          description: 'Include createdAt and updatedAt fields'
        },
        withStatus: {
          type: 'boolean',
          default: true,
          description: 'Include draft/published status field'
        }
      },
      required: ['name']
    }
  }
]

export async function handleGeneratorTool(name: string, args: any, projectPath: string): Promise<any> {
  switch (name) {
    case 'generate_component': {
      const options = generateComponentSchema.parse(args)
      return await generateComponent(options, projectPath)
    }

    case 'generate_block': {
      const options = generateBlockSchema.parse(args)
      return await generateBlock(options, projectPath)
    }

    case 'generate_collection': {
      const { name, slug, withSlug = true, withTimestamps = true, withStatus = true } = args
      return await generateCollection(name, { slug, withSlug, withTimestamps, withStatus }, projectPath)
    }

    default:
      throw new Error(`Unknown generator tool: ${name}`)
  }
}

async function generateComponent(options: ComponentGenerationOptions, projectPath: string): Promise<any> {
  const { name, type, category = 'content', description, dependencies = [], registryDependencies = [] } = options

  switch (type) {
    case 'block':
      return await generateBlock({ name, category, description }, projectPath)
    case 'collection':
      return await generateCollection(name, {}, projectPath)
    case 'component':
      return await generateReactComponent(name, { description, dependencies, registryDependencies }, projectPath)
    case 'global':
      return await generateGlobal(name, { description }, projectPath)
    default:
      throw new Error(`Unknown component type: ${type}`)
  }
}

async function generateBlock(options: any, projectPath: string): Promise<any> {
  const { name, category = 'content', description, withIcon = false, layout = 'simple' } = options

  const blockDir = path.join(projectPath, 'src', 'blocks', name)
  await fs.mkdir(blockDir, { recursive: true })

  // Generate Component.tsx
  const componentContent = generateBlockComponent(name, { withIcon, layout })
  await fs.writeFile(path.join(blockDir, 'Component.tsx'), componentContent)

  // Generate config.ts
  const configContent = generateBlockConfig(name, { category, withIcon, layout })
  await fs.writeFile(path.join(blockDir, 'config.ts'), configContent)

  // Generate index.ts
  const indexContent = generateBlockIndex(name)
  await fs.writeFile(path.join(blockDir, 'index.ts'), indexContent)

  // Generate payloadkit.json
  const metadataContent = generateComponentMetadata(name, 'block', {
    category,
    description: description || `${name} block component`,
    dependencies: ['react'],
    peerDependencies: ['payload'],
    registryDependencies: withIcon ? ['lucide-react'] : []
  })
  await fs.writeFile(path.join(blockDir, 'payloadkit.json'), metadataContent)

  return {
    type: 'block',
    name,
    path: blockDir,
    files: ['Component.tsx', 'config.ts', 'index.ts', 'payloadkit.json'],
    message: `Block "${name}" generated successfully`
  }
}

async function generateCollection(name: string, options: any, projectPath: string): Promise<any> {
  const { slug, withSlug = true, withTimestamps = true, withStatus = true } = options

  const collectionDir = path.join(projectPath, 'src', 'collections', name)
  await fs.mkdir(collectionDir, { recursive: true })

  // Generate config.ts
  const configContent = generateCollectionConfig(name, { slug, withSlug, withTimestamps, withStatus })
  await fs.writeFile(path.join(collectionDir, 'config.ts'), configContent)

  // Generate index.ts
  const indexContent = `export { default } from './config'\nexport * from './config'`
  await fs.writeFile(path.join(collectionDir, 'index.ts'), indexContent)

  return {
    type: 'collection',
    name,
    path: collectionDir,
    files: ['config.ts', 'index.ts'],
    message: `Collection "${name}" generated successfully`
  }
}

async function generateReactComponent(name: string, options: any, projectPath: string): Promise<any> {
  const { description, dependencies = [], registryDependencies = [] } = options

  const componentDir = path.join(projectPath, 'src', 'components', name)
  await fs.mkdir(componentDir, { recursive: true })

  const componentContent = generateReactComponentContent(name)
  await fs.writeFile(path.join(componentDir, 'index.tsx'), componentContent)

  return {
    type: 'component',
    name,
    path: componentDir,
    files: ['index.tsx'],
    message: `Component "${name}" generated successfully`
  }
}

async function generateGlobal(name: string, options: any, projectPath: string): Promise<any> {
  const { description } = options

  const globalDir = path.join(projectPath, 'src', 'globals', name)
  await fs.mkdir(globalDir, { recursive: true })

  const configContent = generateGlobalConfig(name)
  await fs.writeFile(path.join(globalDir, 'config.ts'), configContent)

  const indexContent = `export { default } from './config'\nexport * from './config'`
  await fs.writeFile(path.join(globalDir, 'index.ts'), indexContent)

  return {
    type: 'global',
    name,
    path: globalDir,
    files: ['config.ts', 'index.ts'],
    message: `Global "${name}" generated successfully`
  }
}

function generateBlockComponent(name: string, options: { withIcon?: boolean, layout?: string }): string {
  const { withIcon = false, layout = 'simple' } = options

  return `import React from 'react'
import type { ${toPascalCase(name)}BlockType } from './config'

export interface ${toPascalCase(name)}Props {
  data: ${toPascalCase(name)}BlockType
}

export function ${toPascalCase(name)}({ data }: ${toPascalCase(name)}Props) {
  const { ${withIcon ? 'icon, ' : ''}title, content } = data

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        ${withIcon ? `
        {icon && (
          <div className="mb-4">
            {/* Icon component here */}
          </div>
        )}` : ''}
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
        {content && (
          <div className="prose max-w-none">
            {content}
          </div>
        )}
      </div>
    </section>
  )
}

export default ${toPascalCase(name)}`
}

function generateBlockConfig(name: string, options: { category?: string, withIcon?: boolean, layout?: string }): string {
  const { category = 'content', withIcon = false } = options

  return `import type { Block } from 'payload'

export interface ${toPascalCase(name)}BlockType {
  blockType: '${name}'
  blockName?: string
  ${withIcon ? 'icon?: string' : ''}
  title?: string
  content?: any
}

export const ${toPascalCase(name)}Block: Block = {
  slug: '${name}',
  labels: {
    singular: '${toPascalCase(name)}',
    plural: '${toPascalCase(name)} Blocks'
  },
  fields: [
    {
      name: 'blockName',
      type: 'text',
      label: 'Block Name',
      admin: {
        description: 'Optional name for this block instance'
      }
    },${withIcon ? `
    {
      name: 'icon',
      type: 'text',
      label: 'Icon',
      admin: {
        description: 'Icon identifier or class name'
      }
    },` : ''}
    {
      name: 'title',
      type: 'text',
      label: 'Title'
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content'
    }
  ]
}

export default ${toPascalCase(name)}Block`
}

function generateBlockIndex(name: string): string {
  return `export { default, ${toPascalCase(name)}Block } from './config'
export { default as Component, ${toPascalCase(name)} } from './Component'
export type { ${toPascalCase(name)}BlockType, ${toPascalCase(name)}Props } from './config'`
}

function generateCollectionConfig(name: string, options: any): string {
  const { slug, withSlug = true, withTimestamps = true, withStatus = true } = options
  const collectionSlug = slug || name.toLowerCase()

  return `import type { CollectionConfig } from 'payload'

export const ${name}: CollectionConfig = {
  slug: '${collectionSlug}',
  labels: {
    singular: '${name.slice(0, -1) || name}',
    plural: '${name}'
  },
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true
    },${withSlug ? `
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
          }
        ]
      }
    },` : ''}${withStatus ? `
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' }
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar'
      }
    },` : ''}
    {
      name: 'content',
      type: 'richText',
      label: 'Content'
    }
  ]${withTimestamps ? `,
  timestamps: true` : ''}
}

export default ${name}`
}

function generateReactComponentContent(name: string): string {
  return `import React from 'react'

export interface ${name}Props {
  className?: string
  children?: React.ReactNode
}

export function ${name}({ className, children, ...props }: ${name}Props) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default ${name}`
}

function generateGlobalConfig(name: string): string {
  return `import type { GlobalConfig } from 'payload'

export const ${name}: GlobalConfig = {
  slug: '${name.toLowerCase()}',
  label: '${name}',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title'
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description'
    }
  ]
}

export default ${name}`
}

function generateComponentMetadata(name: string, type: string, options: any): string {
  const { category, description, dependencies = [], peerDependencies = [], registryDependencies = [] } = options

  const metadata = {
    name,
    description,
    category,
    version: '0.1.0',
    type,
    dependencies,
    peerDependencies,
    registryDependencies
  }

  return JSON.stringify(metadata, null, 2)
}

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}