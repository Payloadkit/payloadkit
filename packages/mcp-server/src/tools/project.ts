import { z } from 'zod'
import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import type { ProjectScaffoldOptions, PayloadKitProject } from '../types/index.js'
import path from 'path'
import fs from 'fs/promises'

const initProjectSchema = z.object({
  projectPath: z.string(),
  force: z.boolean().default(false)
})

const validateProjectSchema = z.object({
  projectPath: z.string().optional()
})

const createProjectSchema = z.object({
  projectPath: z.string(),
  template: z.string().default('blank'),
  packageManager: z.enum(['npm', 'yarn', 'pnpm', 'bun']).default('bun'),
  install: z.boolean().default(true),
  git: z.boolean().default(true)
})

export const projectTools: Tool[] = [
  {
    name: 'init_payloadkit_project',
    description: 'Initialize PayloadKit in an existing project by creating the necessary configuration files and directory structure',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Path to the project directory'
        },
        force: {
          type: 'boolean',
          default: false,
          description: 'Force initialization even if PayloadKit is already initialized'
        }
      },
      required: ['projectPath']
    }
  },
  {
    name: 'validate_project_structure',
    description: 'Validate if the current project has the correct PayloadKit structure and dependencies',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Path to the project directory (defaults to current directory)'
        }
      }
    }
  },
  {
    name: 'create_project_from_template',
    description: 'Create a new PayloadCMS project from a PayloadKit template',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Path where the new project should be created'
        },
        template: {
          type: 'string',
          default: 'blank',
          description: 'Template name (blank, blog, business, ecommerce)'
        },
        packageManager: {
          type: 'string',
          enum: ['npm', 'yarn', 'pnpm', 'bun'],
          default: 'bun',
          description: 'Package manager to use'
        },
        install: {
          type: 'boolean',
          default: true,
          description: 'Whether to install dependencies after creation'
        },
        git: {
          type: 'boolean',
          default: true,
          description: 'Whether to initialize git repository'
        }
      },
      required: ['projectPath']
    }
  },
  {
    name: 'analyze_project_dependencies',
    description: 'Analyze project dependencies and identify missing PayloadKit requirements',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Path to the project directory'
        }
      },
      required: ['projectPath']
    }
  }
]

export async function handleProjectTool(name: string, args: any): Promise<any> {
  switch (name) {
    case 'init_payloadkit_project': {
      const { projectPath, force } = initProjectSchema.parse(args)
      return await initPayloadKitProject(projectPath, force)
    }

    case 'validate_project_structure': {
      const { projectPath = process.cwd() } = validateProjectSchema.parse(args)
      return await validateProjectStructure(projectPath)
    }

    case 'create_project_from_template': {
      const options = createProjectSchema.parse(args)
      return await createProjectFromTemplate(options)
    }

    case 'analyze_project_dependencies': {
      const { projectPath } = args
      return await analyzeProjectDependencies(projectPath)
    }

    default:
      throw new Error(`Unknown project tool: ${name}`)
  }
}

async function initPayloadKitProject(projectPath: string, force: boolean = false): Promise<any> {
  const project = await analyzeProject(projectPath)

  if (!force && project.hasPayloadConfig) {
    throw new Error('Project already has PayloadKit initialized. Use force=true to reinitialize.')
  }

  const componentsJsonPath = path.join(projectPath, 'components.json')
  const payloadKitConfigPath = path.join(projectPath, 'payloadkit.json')

  // Create components.json if it doesn't exist
  const componentsJson = {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "default",
    "rsc": true,
    "tsx": true,
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "src/app/globals.css",
      "baseColor": "slate",
      "cssVariables": true,
      "prefix": ""
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils",
      "ui": "@/components/ui",
      "lib": "@/lib",
      "hooks": "@/hooks"
    },
    "iconLibrary": "lucide"
  }

  // Create payloadkit.json config
  const payloadKitConfig = {
    "version": "0.1.0",
    "registryUrl": "https://payloadkit.dev/registry",
    "style": "default",
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "src/app/globals.css"
    },
    "aliases": {
      "components": "@/components",
      "blocks": "@/blocks",
      "collections": "@/collections",
      "globals": "@/globals"
    }
  }

  // Create directory structure
  const directories = [
    'src/blocks',
    'src/collections',
    'src/components',
    'src/globals',
    'src/lib',
    'src/hooks'
  ]

  for (const dir of directories) {
    await fs.mkdir(path.join(projectPath, dir), { recursive: true })
  }

  // Write config files
  await fs.writeFile(componentsJsonPath, JSON.stringify(componentsJson, null, 2))
  await fs.writeFile(payloadKitConfigPath, JSON.stringify(payloadKitConfig, null, 2))

  return {
    success: true,
    message: 'PayloadKit initialized successfully',
    createdFiles: ['components.json', 'payloadkit.json'],
    createdDirectories: directories,
    projectPath
  }
}

async function validateProjectStructure(projectPath: string): Promise<PayloadKitProject> {
  const project = await analyzeProject(projectPath)

  const issues: string[] = []
  const recommendations: string[] = []

  if (!project.hasPackageJson) {
    issues.push('No package.json found')
  }

  if (!project.hasPayloadConfig) {
    recommendations.push('Initialize PayloadKit with init_payloadkit_project')
  }

  // Check for required directories
  const requiredDirs = ['src', 'src/app']
  for (const dir of requiredDirs) {
    try {
      await fs.access(path.join(projectPath, dir))
    } catch {
      issues.push(`Missing required directory: ${dir}`)
    }
  }

  return {
    ...project,
    valid: issues.length === 0,
    issues,
    recommendations
  } as any
}

async function createProjectFromTemplate(options: ProjectScaffoldOptions & { projectPath: string }): Promise<any> {
  const { projectPath, template = 'blank', packageManager = 'bun', install = true, git = true } = options

  // Check if directory already exists
  try {
    await fs.access(projectPath)
    throw new Error(`Directory ${projectPath} already exists`)
  } catch (error) {
    if ((error as any).code !== 'ENOENT') {
      throw error
    }
  }

  // This is a simplified implementation
  // In reality, you'd use the create-payloadkit package
  return {
    success: true,
    message: `Template-based project creation would be handled by create-payloadkit`,
    projectPath,
    template,
    packageManager,
    nextSteps: [
      `cd ${projectPath}`,
      `npx create-payloadkit . --template ${template}`,
      install ? `${packageManager} install` : 'Install dependencies',
      git ? 'git init' : 'Initialize git repository'
    ]
  }
}

async function analyzeProjectDependencies(projectPath: string): Promise<any> {
  const packageJsonPath = path.join(projectPath, 'package.json')

  try {
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8')
    const packageJson = JSON.parse(packageJsonContent)

    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    }

    const payloadKitDeps = Object.keys(allDeps).filter(dep =>
      dep.includes('payload') || dep.includes('payloadkit')
    )

    const requiredDeps = [
      'payload',
      '@payloadcms/db-postgres',
      '@payloadcms/richtext-lexical',
      'next',
      'react',
      'typescript'
    ]

    const missingDeps = requiredDeps.filter(dep => !allDeps[dep])
    const presentDeps = requiredDeps.filter(dep => allDeps[dep])

    return {
      totalDependencies: Object.keys(allDeps).length,
      payloadKitDependencies: payloadKitDeps,
      requiredDependencies: requiredDeps,
      missingDependencies: missingDeps,
      presentDependencies: presentDeps,
      recommendations: missingDeps.length > 0 ?
        [`Install missing dependencies: ${missingDeps.join(', ')}`] :
        ['All required dependencies are present']
    }
  } catch (error) {
    throw new Error(`Failed to analyze dependencies: ${error}`)
  }
}

async function analyzeProject(projectPath: string): Promise<PayloadKitProject> {
  const packageJsonPath = path.join(projectPath, 'package.json')
  const payloadConfigPaths = [
    path.join(projectPath, 'payload.config.ts'),
    path.join(projectPath, 'src/payload.config.ts'),
    path.join(projectPath, 'payloadkit.json')
  ]

  let hasPackageJson = false
  let hasPayloadConfig = false
  let packageManager = 'npm'
  let dependencies: string[] = []

  // Check package.json
  try {
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8')
    const packageJson = JSON.parse(packageJsonContent)
    hasPackageJson = true
    dependencies = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    })

    // Detect package manager
    try {
      await fs.access(path.join(projectPath, 'bun.lockb'))
      packageManager = 'bun'
    } catch {
      try {
        await fs.access(path.join(projectPath, 'pnpm-lock.yaml'))
        packageManager = 'pnpm'
      } catch {
        try {
          await fs.access(path.join(projectPath, 'yarn.lock'))
          packageManager = 'yarn'
        } catch {
          packageManager = 'npm'
        }
      }
    }
  } catch {
    // package.json doesn't exist
  }

  // Check for PayloadCMS config
  for (const configPath of payloadConfigPaths) {
    try {
      await fs.access(configPath)
      hasPayloadConfig = true
      break
    } catch {
      // Config file doesn't exist
    }
  }

  return {
    path: projectPath,
    hasPackageJson,
    hasPayloadConfig,
    packageManager,
    dependencies
  }
}