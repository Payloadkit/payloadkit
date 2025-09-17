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
  description: 'Complete installation guide for PayloadKit. Get started with reusable PayloadCMS components in minutes.',
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
            <li>PayloadCMS 3.0+ with PostgreSQL</li>
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

        <Snippet
          command="bun run docker:dev"
          title="3. Start PostgreSQL with Docker"
        >
          This starts PostgreSQL 16 in a Docker container with the configured credentials.
        </Snippet>

        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>Docker Commands:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><code>bun run docker:dev</code> - Start PostgreSQL only</li>
            <li><code>bun run docker:dev:full</code> - Start full stack (PostgreSQL + pgAdmin + MailHog)</li>
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
    description: 'Add PayloadKit to your existing PayloadCMS project.',
    content: (
      <Snippet
        command="bunx payloadkit@latest@latest init"
        title="Initialize in Existing Project"
      >
        This command will set up PayloadKit configuration in your existing project.
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
          command="payloadkit add simple-hero"
          title="Add a Component"
        >
          This will copy the simple-hero block into your project with all dependencies.
        </Snippet>

        <CodeBlock
          code={`import { SimpleHero } from './blocks/simple-hero'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [SimpleHero], // Add your component here
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
      {/* Page Description */}
      <PageDescription
        title="Installation"
        description="Complete installation guide for PayloadKit. Get started with reusable PayloadCMS components and build your application faster with our pre-built blocks and templates."
        category="guides"
        difficulty="beginner"
        estimatedTime="10-15 minutes"
        features={[
          'Multiple installation methods',
          'Step-by-step guided setup',
          'Environment configuration',
          'Development server setup',
          'Component registry initialization',
          'First component installation'
        ]}
        tags={[
          'Installation',
          'Setup',
          'CLI',
          'PayloadCMS',
          'Next.js',
          'Getting Started'
        ]}
      />

      {/* Quick Start (New Project) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-4">
            🚀 Quick Start (New Project)
          </h2>
          <p className="text-muted-foreground">
            The fastest way to get started. Creates a new PayloadCMS project with PayloadKit pre-configured.
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
            🔧 Add to Existing Project
          </h2>
          <p className="text-muted-foreground">
            Already have a PayloadCMS project? Add PayloadKit to your existing setup.
          </p>
        </div>

        <TutorialSteps
          steps={existingProjectSteps}
          allowSkip
        />
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
            <Snippet command="pbunx create-payloadkit@latest my-app" />
            <p className="text-sm text-muted-foreground">
              Efficient package management with workspace support.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">npm</h3>
            <Snippet command="bunx create-payloadkit@latest my-app" />
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