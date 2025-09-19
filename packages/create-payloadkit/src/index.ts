import { Command } from 'commander'
import prompts from 'prompts'
import { spawn } from 'child_process'
import { existsSync } from 'fs'
import { mkdir, writeFile, readFile, cp } from 'fs/promises'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const program = new Command()

interface ProjectOptions {
  name: string
  template?: string
  typescript?: boolean
  install?: boolean
  git?: boolean
  packageManager?: 'npm' | 'bun' | 'yarn' | 'pnpm'
}

const TEMPLATES = {
  blank: {
    name: 'Blank',
    description: 'PayloadKit minimal foundation with essential collections and shadcn/ui',
    features: ['Users', 'Media', 'Pages', 'shadcn/ui', 'TypeScript', 'Tailwind CSS']
  },
  blog: {
    name: 'Blog',
    description: 'A blog template with posts, categories, and SEO (coming soon)',
    features: ['Blog posts', 'Categories', 'SEO', 'Comments']
  },
  business: {
    name: 'Business', 
    description: 'A business website template with marketing blocks (coming soon)',
    features: ['Landing pages', 'CTA blocks', 'Contact forms', 'Testimonials']
  },
  ecommerce: {
    name: 'E-commerce',
    description: 'An online store template with products and checkout (coming soon)',
    features: ['Products', 'Cart', 'Checkout', 'Orders']
  }
}

interface TemplateConfig {
  name: string
  version: string
  description: string
  extends: string | null
  payloadkitVersion: string
  payloadVersion: string
  nextVersion: string
  collections: string[]
  globals: string[]
  blocks: string[]
  components: string[]
  registryDependencies: Record<string, string>
  features: string[]
  requiredEnvVars: string[]
  addedFiles: string[]
}

async function copyTemplate(templateName: string, projectPath: string) {
  const templatePath = path.resolve(__dirname, '../templates', templateName)
  
  if (!existsSync(templatePath)) {
    throw new Error(`Template "${templateName}" not found`)
  }

  // Copy all template files
  await cp(templatePath, projectPath, {
    recursive: true,
    filter: (src) => {
      const filename = path.basename(src)
      // Skip template.json - it's metadata only
      return filename !== 'template.json'
    }
  })
}

async function loadTemplateConfig(templateName: string): Promise<TemplateConfig> {
  const templatePath = path.resolve(__dirname, '../templates', templateName)
  const configPath = path.join(templatePath, 'template.json')
  
  if (!existsSync(configPath)) {
    throw new Error(`Template config not found: ${configPath}`)
  }

  const configContent = await readFile(configPath, 'utf-8')
  return JSON.parse(configContent)
}

async function createProject(name: string, options: Partial<ProjectOptions> = {}) {
  const templateName = options.template || 'blank'
  
  console.log(chalk.cyan(`\n🚀 Creating PayloadKit project: ${name}`))
  console.log(chalk.gray(`   Template: ${templateName}\n`))
  
  const projectPath = path.resolve(process.cwd(), name)
  
  // Check if directory already exists
  if (existsSync(projectPath)) {
    console.error(chalk.red(`❌ Directory "${name}" already exists`))
    process.exit(1)
  }

  // Load template config
  const spinner = ora('Loading template...').start()
  let templateConfig: TemplateConfig
  
  try {
    templateConfig = await loadTemplateConfig(templateName)
    spinner.succeed(`Template "${templateName}" loaded`)
  } catch (error) {
    spinner.fail(`Failed to load template: ${error}`)
    process.exit(1)
  }

  // Copy template
  spinner.start('Creating project from template...')
  try {
    await copyTemplate(templateName, projectPath)
    spinner.succeed('Project created from template')
  } catch (error) {
    spinner.fail(`Failed to copy template: ${error}`)
    process.exit(1)
  }

  // Update package.json with project name
  spinner.start('Configuring project...')
  const packageJsonPath = path.join(projectPath, 'package.json')
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'))
  packageJson.name = name
  await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
  spinner.succeed('Project configured')

  // Install registry dependencies
  if (templateConfig.registryDependencies && Object.keys(templateConfig.registryDependencies).length > 0) {
    spinner.start('Installing registry components...')

    try {
      const registryItems = Object.keys(templateConfig.registryDependencies)

      // Helper function to find PayloadKit CLI
      const findPayloadkitCLI = async (): Promise<{ command: string; args: string[] }> => {
        // Try global payloadkit command first
        try {
          await new Promise<void>((resolve, reject) => {
            const testChild = spawn('payloadkit', ['--version'], { stdio: 'pipe' })
            testChild.on('close', (code) => {
              if (code === 0) {
                resolve()
              } else {
                reject(new Error('Global payloadkit not found'))
              }
            })
            testChild.on('error', () => reject(new Error('Global payloadkit not found')))
          })
          return { command: 'payloadkit', args: [] }
        } catch {
          // Fallback to relative path for development
          let payloadkitPath = path.resolve(__dirname, '../../payloadkit/bin/index.js')

          // If relative path doesn't exist, try different possible paths
          if (!existsSync(payloadkitPath)) {
            // Try from node_modules (when installed as dependency)
            const nodeModulesPath = path.resolve(process.cwd(), 'node_modules/payloadkit/bin/index.js')
            if (existsSync(nodeModulesPath)) {
              payloadkitPath = nodeModulesPath
            } else {
              throw new Error('PayloadKit CLI not found')
            }
          }

          return { command: 'node', args: [payloadkitPath] }
        }
      }

      const payloadkitCLI = await findPayloadkitCLI()

      for (const item of registryItems) {
        const componentName = item.split('/').pop() // Extract component name from path
        if (componentName) {
          await new Promise<void>((resolve, reject) => {
            const child = spawn(payloadkitCLI.command, [...payloadkitCLI.args, 'add', componentName, '--yes'], {
              cwd: projectPath,
              stdio: 'pipe'
            })

            child.on('close', (code) => {
              if (code === 0) {
                resolve()
              } else {
                reject(new Error(`Failed to install ${componentName}`))
              }
            })
          })
        }
      }

      spinner.succeed('Registry components installed')
    } catch (error) {
      spinner.warn(`Failed to install some registry components: ${error}`)
      console.log(chalk.yellow('   You may need to install components manually with: payloadkit add <component-name>'))
    }
  }

  // Install dependencies
  if (options.install !== false) {
    const packageManager = options.packageManager || 'bun'
    
    spinner.start(`Installing dependencies with ${packageManager}...`)
    
    try {
      await new Promise<void>((resolve, reject) => {
        const child = spawn(packageManager, ['install'], {
          cwd: projectPath,
          stdio: 'pipe'
        })
        
        child.on('close', (code) => {
          if (code === 0) {
            resolve()
          } else {
            reject(new Error(`${packageManager} install failed with code ${code}`))
          }
        })
      })
      
      spinner.succeed('Dependencies installed')
    } catch (error) {
      spinner.warn('Failed to install dependencies automatically')
      console.log(chalk.yellow(`   Run "${packageManager} install" manually in your project directory`))
    }
  }

  // Initialize git
  if (options.git !== false) {
    spinner.start('Initializing git repository...')
    
    try {
      await new Promise<void>((resolve, reject) => {
        const child = spawn('git', ['init'], {
          cwd: projectPath,
          stdio: 'pipe'
        })
        
        child.on('close', (code) => {
          if (code === 0) {
            resolve()
          } else {
            reject(new Error('git init failed'))
          }
        })
      })
      
      spinner.succeed('Git repository initialized')
    } catch (error) {
      spinner.warn('Failed to initialize git repository')
    }
  }

  // Success message
  console.log(chalk.green(`\n✅ Successfully created ${name}!\n`))
  
  console.log(chalk.cyan('Template Features:'))
  templateConfig.features.forEach(feature => {
    console.log(`  ✓ ${feature}`)
  })
  
  console.log(chalk.cyan('\nNext steps:'))
  console.log(`  1. cd ${name}`)
  console.log(`  2. Copy .env.example to .env and update the values`)
  console.log(`  3. Setup your PostgreSQL database`)
  if (options.install === false) {
    console.log(`  4. Run your package manager install command`)
    console.log(`  5. bun dev`)
  } else {
    console.log(`  4. bun dev`)
  }
  
  console.log(chalk.cyan(`\nThen add more components with:`))
  console.log(`  payloadkit add <component-name>`)
  
  console.log(chalk.dim(`\nHappy coding! 🎉\n`))
}

async function main() {
  program
    .name('create-payloadkit')
    .description('Create PayloadCMS projects with PayloadKit')
    .version('0.0.1')
    .argument('[project-name]', 'Name of the project to create')
    .option('-t, --template <template>', 'Template to use', 'blank')
    .option('--typescript', 'Use TypeScript (default: true)', true)
    .option('--no-install', 'Skip dependency installation')
    .option('--no-git', 'Skip git initialization')
    .option('-p, --package-manager <pm>', 'Package manager to use', 'bun')
    .action(async (projectName?: string, options?: any) => {
      try {
        let name = projectName

        if (!name) {
          const response = await prompts({
            type: 'text',
            name: 'name',
            message: 'What is your project name?',
            initial: 'my-payloadkit-app',
            validate: (value: string) => {
              if (!value) return 'Project name is required'
              if (!/^[a-z0-9-_]+$/i.test(value)) {
                return 'Project name can only contain letters, numbers, hyphens, and underscores'
              }
              return true
            }
          })

          if (!response.name) {
            console.log(chalk.red('Operation cancelled'))
            process.exit(1)
          }

          name = response.name
        }

        await createProject(name!, options)
      } catch (error) {
        console.error(chalk.red(`❌ Error creating project: ${error}`))
        process.exit(1)
      }
    })

  await program.parseAsync(process.argv)
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(chalk.red('Unhandled promise rejection:'), err)
  process.exit(1)
})

// Run the CLI
main().catch((error) => {
  console.error(chalk.red('Fatal error:'), error)
  process.exit(1)
})