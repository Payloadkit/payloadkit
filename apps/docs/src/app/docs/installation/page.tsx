import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Import our new documentation components
import { PageDescription } from '@/components/page-description'
import { Snippet, MultiSnippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const metadata: Metadata = {
  title: 'Installation - PayloadKit',
  description: 'Complete installation guide for PayloadKit. Choose between creating a new project or adding components to existing PayloadCMS projects.',
}

const quickStartSteps = [
  {
    title: 'Create New Project',
    description: 'Start with a fresh PayloadKit project using our CLI tool.',
    content: (
      <div className="space-y-4">
        <Snippet
          command="bunx create-payloadkit@latest my-payloadcms-app"
          title="Create PayloadKit Project"
        >
          This command creates a new PayloadCMS project with PayloadKit pre-configured.
        </Snippet>

        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>What this includes:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>PayloadCMS 3.0+ with PostgreSQL 17</li>
            <li>Next.js 15 with App Router</li>
            <li>shadcn/ui components pre-configured</li>
            <li>TypeScript and Tailwind CSS</li>
            <li>Basic collections (Users, Media, Pages)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Install Dependencies',
    description: 'Navigate to your project and install the required dependencies.',
    content: (
      <MultiSnippet
        title="Install Dependencies"
        commands={[
          {
            command: 'cd my-payloadcms-app',
            description: 'Navigate to your project directory'
          },
          {
            command: 'bun install',
            description: 'Install all dependencies (recommended)'
          }
        ]}
      />
    )
  },
  {
    title: 'Environment Setup',
    description: 'Configure your environment variables for database and PayloadCMS.',
    content: (
      <div className="space-y-4">
        <CodeBlock
          code={`# Database Configuration (Docker default)
DATABASE_URI="postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev"

# PayloadCMS Configuration
PAYLOAD_SECRET="your-32-character-secret-key"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"

# Docker PostgreSQL settings (auto-configured)
POSTGRES_USER=payloadkit
POSTGRES_PASSWORD=payloadkit
POSTGRES_DB=payloadkit_dev

# Optional: Custom configurations
NEXT_PUBLIC_IS_LIVE="false"`}
          language="bash"
          title=".env.local"
        />

        <div className="text-sm text-muted-foreground">
          <p><strong>Note:</strong> These are the default Docker settings. For custom PostgreSQL setup, update the DATABASE_URI accordingly.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Database Setup',
    description: 'Set up PostgreSQL database using Docker (recommended) or your own setup.',
    content: (
      <div className="space-y-4">
        <Alert>
          <AlertDescription>
            <strong>Docker Method (Recommended):</strong> PayloadKit includes a pre-configured Docker Compose setup for instant database access.
          </AlertDescription>
        </Alert>

        <Snippet
          command="cp .env.example .env"
          title="1. Copy Environment File"
        >
          Copy the example environment file and configure your database settings.
        </Snippet>

        <CodeBlock
          code={`# Update your .env file with Docker database settings:
DATABASE_URI=postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev

# Generate a secure secret:
PAYLOAD_SECRET=your-32-character-secret-key

# Docker PostgreSQL settings (already configured):
POSTGRES_USER=payloadkit
POSTGRES_PASSWORD=payloadkit
POSTGRES_DB=payloadkit_dev`}
          language="bash"
          title="2. Configure .env for Docker"
        />

        <MultiSnippet
          title="3. Start PostgreSQL with Docker"
          commands={[
            {
              command: 'bun run docker:db-only',
              description: 'Database only - Run your app locally (Recommended)'
            },
            {
              command: 'bun run docker:dev',
              description: 'Full stack - All services in Docker'
            }
          ]}
        />

        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>Database-Only Mode (Recommended):</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>bun run docker:db-only</code> - Start PostgreSQL 17 only</li>
            <li><code>bun run docker:db-only:detached</code> - Start database in background</li>
            <li><code>bun run docker:db-only:pgadmin</code> - Include pgAdmin for database management</li>
            <li><code>bun run docker:db-only:stop</code> - Stop database services</li>
          </ul>

          <p className="mt-3"><strong>Full Docker Mode:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>bun run docker:dev</code> - Start all services (app + database)</li>
            <li><code>bun run docker:dev:full</code> - Include Redis, pgAdmin, and MailHog</li>
            <li><code>bun run docker:stop</code> - Stop all services</li>
            <li><code>bun run docker:reset</code> - Reset database (clean start)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Start Development Server',
    description: 'Launch your PayloadKit application in development mode.',
    content: (
      <div className="space-y-4">
        <Snippet
          command="bun dev"
          title="Start Development Server"
        >
          This starts both PayloadCMS admin and Next.js frontend on separate ports.
        </Snippet>

        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>URLs:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: <code>http://localhost:3000</code></li>
            <li>PayloadCMS Admin: <code>http://localhost:3000/admin</code></li>
          </ul>
        </div>
      </div>
    )
  }
]

const existingProjectSteps = [
  {
    title: 'Initialize PayloadKit',
    description: 'Set up PayloadKit in your existing PayloadCMS project.',
    content: (
      <Snippet
        command="bunx payloadkit@latest init"
        title="Initialize in Existing Project"
      >
        This command sets up the component registry configuration and creates the components.json file in your existing PayloadCMS project.
      </Snippet>
    )
  },
  {
    title: 'Configure Components',
    description: 'Set up the component registry and dependencies.',
    content: (
      <div className="space-y-4">
        <CodeBlock
          code={`{
  "$schema": "https://payloadkit.org/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "blocks": "@/blocks",
    "collections": "@/collections"
  }
}`}
          language="json"
          title="components.json"
        />

        <p className="text-sm text-muted-foreground">
          This configuration file will be created automatically during initialization.
        </p>
      </div>
    )
  },
  {
    title: 'Add Your First Component',
    description: 'Install a PayloadKit component to test the setup.',
    content: (
      <div className="space-y-4">
        <Snippet
          command="bunx payloadkit add Hero"
          title="Add a Component"
        >
          This copies the Hero block into your project with all dependencies and proper folder structure.
        </Snippet>

        <CodeBlock
          code={`import { Hero } from './blocks/Hero'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [Hero], // Add your component here
        },
      ],
    },
  ],
})`}
          language="typescript"
          title="Update payload.config.ts"
        />
      </div>
    )
  }
]

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      {/* Two Usage Modes Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-900">Two Ways to Use PayloadKit</h2>
        <p className="text-blue-800">PayloadKit works in two different modes depending on your needs:</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="font-semibold text-gray-900">Create New Project</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Start fresh with a complete PayloadCMS project using our templates.</p>
            <div className="bg-gray-50 p-2 rounded text-xs font-mono">bunx create-payloadkit@latest my-app</div>
            <p className="text-xs text-gray-500 mt-2">Best for: New projects, prototypes, quick starts</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <h3 className="font-semibold text-gray-900">Add to Existing Project</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Install individual components, blocks, or globals into your existing PayloadCMS project.</p>
            <div className="bg-gray-50 p-2 rounded text-xs font-mono">bunx payloadkit add Hero</div>
            <p className="text-xs text-gray-500 mt-2">Best for: Existing projects, specific components, gradual adoption</p>
          </div>
        </div>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Installation"
        description="Complete installation guide for PayloadKit. Choose between creating a new project with templates or adding individual components to existing PayloadCMS projects."
        category="guides"
        difficulty="beginner"
        estimatedTime="10-15 minutes"
        features={[
          'Two distinct usage modes',
          'Template-based project creation',
          'Individual component installation',
          'Step-by-step guided setup',
          'Environment configuration',
          'Component registry system'
        ]}
        tags={[
          'Installation',
          'Setup',
          'CLI',
          'PayloadCMS',
          'Templates',
          'Components',
          'Getting Started'
        ]}
      />

      {/* Quick Start (New Project) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            🚀 Method 1: Create New Project
          </h2>
          <p className="text-muted-foreground">
            Create a complete PayloadCMS project from scratch using our pre-built templates. This method gives you a fully functional application with PayloadKit components already integrated.
          </p>
        </div>

        <TutorialSteps
          steps={quickStartSteps}
          allowSkip
        />
      </div>

      {/* Existing Project Setup */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            🔧 Method 2: Add to Existing Project
          </h2>
          <p className="text-muted-foreground">
            Install individual PayloadKit components into your existing PayloadCMS project. Perfect for adding specific blocks, collections, or globals without starting from scratch.
          </p>
        </div>

        <TutorialSteps
          steps={existingProjectSteps}
          allowSkip
        />
      </div>

      {/* Database Deployment Options */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            🐘 Database Deployment Options
          </h2>
          <p className="text-muted-foreground">
            PayloadKit provides flexible PostgreSQL deployment options. Choose what works best for your workflow:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 p-4 rounded-lg border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold">Database-Only Docker (Recommended)</h3>
            </div>
            <Snippet command="bun run docker:db-only" />
            <p className="text-sm text-muted-foreground">
              <strong>Best for development:</strong> PostgreSQL 17 in Docker, app runs locally with hot reload. Fast, flexible, and resource-efficient.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Pros:</strong> Fast rebuilds, local debugging, minimal resources</p>
              <p><strong>Cons:</strong> Requires local Node.js setup</p>
            </div>
          </div>

          <div className="space-y-3 p-4 rounded-lg border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="font-semibold">Full Docker Stack</h3>
            </div>
            <Snippet command="bun run docker:dev" />
            <p className="text-sm text-muted-foreground">
              <strong>For production-like setup:</strong> Everything in Docker containers. Perfect for team consistency and production testing.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Pros:</strong> Production parity, team consistency</p>
              <p><strong>Cons:</strong> Slower rebuilds, more resources</p>
            </div>
          </div>
        </div>

        <Alert>
          <AlertDescription>
            <strong>PostgreSQL 17:</strong> PayloadKit uses the latest PostgreSQL 17 for improved performance, enhanced JSON operations, and better query optimization.
          </AlertDescription>
        </Alert>
      </div>

      {/* Package Manager Options */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            📦 Package Manager Options
          </h2>
          <p className="text-muted-foreground">
            PayloadKit supports multiple package managers. Choose your preferred one:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold">Bun (Recommended)</h3>
            <Snippet command="bunx create-payloadkit@latest my-app" />
            <p className="text-sm text-muted-foreground">
              Fastest installation with built-in TypeScript support.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">pnpm</h3>
            <Snippet command="pnpx create-payloadkit@latest my-app" />
            <p className="text-sm text-muted-foreground">
              Efficient package management with workspace support.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">npm</h3>
            <Snippet command="npx create-payloadkit@latest my-app" />
            <p className="text-sm text-muted-foreground">
              Standard Node.js package manager.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            ✨ Next Steps
          </h2>
          <p className="text-muted-foreground">
            Now that you have PayloadKit installed, explore what you can build:
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center space-x-3 p-4 rounded-lg border">
            <div className="flex-1">
              <h3 className="font-semibold">Browse Components</h3>
              <p className="text-sm text-muted-foreground">
                Explore our library of blocks and components
              </p>
            </div>
            <Button asChild>
              <Link href="/docs/blocks">
                View Blocks <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-lg border">
            <div className="flex-1">
              <h3 className="font-semibold">CLI Usage</h3>
              <p className="text-sm text-muted-foreground">
                Learn PayloadKit CLI commands
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/docs/cli">
                CLI Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}