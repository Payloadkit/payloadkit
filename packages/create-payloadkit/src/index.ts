import { Command } from 'commander'
import prompts from 'prompts'
import { spawn } from 'child_process'
import { existsSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'

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
  basic: {
    name: 'Basic',
    description: 'A minimal PayloadCMS setup with essential blocks',
    features: ['Pages', 'Media', 'Users', 'Basic blocks']
  },
  blog: {
    name: 'Blog',
    description: 'A blog template with posts, categories, and SEO',
    features: ['Blog posts', 'Categories', 'SEO', 'Comments']
  },
  business: {
    name: 'Business',
    description: 'A business website template with marketing blocks',
    features: ['Landing pages', 'CTA blocks', 'Contact forms', 'Testimonials']
  },
  ecommerce: {
    name: 'E-commerce',
    description: 'An online store template with products and checkout',
    features: ['Products', 'Cart', 'Checkout', 'Orders']
  }
}

async function createProject(name: string, options: Partial<ProjectOptions> = {}) {
  console.log(chalk.cyan(`\n🚀 Creating PayloadKit project: ${name}\n`))
  
  const projectPath = path.resolve(process.cwd(), name)
  
  // Check if directory already exists
  if (existsSync(projectPath)) {
    console.error(chalk.red(`❌ Directory "${name}" already exists`))
    process.exit(1)
  }

  // Create project directory
  const spinner = ora('Creating project directory...').start()
  await mkdir(projectPath, { recursive: true })
  spinner.succeed('Project directory created')

  // Create basic package.json
  const packageJson = {
    name,
    version: '0.1.0',
    description: 'A PayloadKit project',
    type: 'module',
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      'generate:types': 'payload generate:types',
      'generate:importmap': 'payload generate:importmap'
    },
    dependencies: {
      'payload': '^3.0.0',
      'next': '^15.0.0',
      'react': '^18.0.0',
      'react-dom': '^18.0.0',
      '@payloadcms/db-postgres': '^3.0.0',
      '@payloadcms/richtext-lexical': '^3.0.0'
    },
    devDependencies: {
      '@types/node': '^22.0.0',
      '@types/react': '^18.0.0',
      '@types/react-dom': '^18.0.0',
      'typescript': '^5.0.0',
      'tailwindcss': '^3.4.0',
      'autoprefixer': '^10.4.0',
      'postcss': '^8.4.0'
    }
  }

  spinner.start('Creating package.json...')
  await writeFile(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )
  spinner.succeed('package.json created')

  // Create basic project structure
  spinner.start('Creating project structure...')
  
  const directories = [
    'src/app',
    'src/collections',
    'src/blocks',
    'src/components',
    'src/utilities',
    'public'
  ]

  for (const dir of directories) {
    await mkdir(path.join(projectPath, dir), { recursive: true })
  }

  // Create basic payload config
  const payloadConfig = `import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    // Collections will be added here
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})
`

  await writeFile(path.join(projectPath, 'src/payload.config.ts'), payloadConfig)

  // Create .env.example
  const envExample = `# PayloadCMS
PAYLOAD_SECRET=your-payload-secret-here
DATABASE_URI=postgresql://username:password@localhost:5432/database_name

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
`

  await writeFile(path.join(projectPath, '.env.example'), envExample)

  spinner.succeed('Project structure created')

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
      
      // Create .gitignore
      const gitignore = `# Dependencies
node_modules/
.pnp
.pnp.js

# Production
/dist
/.next/
/build

# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# OS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# PayloadCMS
/media
payload-types.ts
`

      await writeFile(path.join(projectPath, '.gitignore'), gitignore)
      spinner.succeed('Git repository initialized')
    } catch (error) {
      spinner.warn('Failed to initialize git repository')
    }
  }

  // Success message
  console.log(chalk.green(`\n✅ Successfully created ${name}!\n`))
  
  console.log(chalk.cyan('Next steps:'))
  console.log(`  1. cd ${name}`)
  console.log(`  2. Copy .env.example to .env and update the values`)
  console.log(`  3. Setup your PostgreSQL database`)
  if (options.install === false) {
    console.log(`  4. Run your package manager install command`)
    console.log(`  5. npm run dev (or equivalent)`)
  } else {
    console.log(`  4. npm run dev (or equivalent)`)
  }
  
  console.log(chalk.cyan(`\nThen add components with:`))
  console.log(`  payloadkit add <component-name>`)
  
  console.log(chalk.dim(`\nHappy coding! 🎉\n`))
}

async function main() {
  program
    .name('create-payloadkit')
    .description('Create PayloadCMS projects with PayloadKit')
    .version('0.0.1')
    .argument('[project-name]', 'Name of the project to create')
    .option('-t, --template <template>', 'Template to use', 'basic')
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