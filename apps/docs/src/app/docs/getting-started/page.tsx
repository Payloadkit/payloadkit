import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Getting Started - PayloadKit',
  description: 'Quick start with PayloadKit - from zero to production in 5 minutes',
}

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Getting Started"
        description="Set up your PayloadCMS project with PayloadKit in minutes. Choose between a new project or adding PayloadKit to an existing one."
        category="guides"
        version="0.4.3"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="September 2025"
      />

      {/* Prerequisites */}
      <TutorialSteps
        title="Prerequisites"
        steps={[
          {
            title: 'Install Bun',
            keyword: 'Required',
            description: 'PayloadKit uses bun as the recommended package manager for better performance',
            content: (
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    <strong>Bun</strong> is a fast JavaScript runtime and package manager that significantly improves install and build times
                  </AlertDescription>
                </Alert>
                <Snippet command="curl -fsSL https://bun.sh/install | bash" title="Install Bun (macOS/Linux)" />
                <CodeBlock
                  code={`# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# Alternative: Visit https://bun.sh/docs/installation`}
                  language="bash"
                  title="Windows Installation"
                />
                <CodeBlock
                  code={`# Verify installation
bun --version`}
                  language="bash"
                  title="Verify Installation"
                />
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      {/* Quick Installation Steps */}
      <TutorialSteps
        title="Quick Installation"
        steps={[
          {
            title: 'New Project',
            keyword: 'Recommended',
            description: 'Create a fresh PayloadKit project with all components pre-configured',
            content: (
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    <strong>Best choice</strong> for new projects or learning PayloadKit
                  </AlertDescription>
                </Alert>
                <Snippet command="bunx create-payloadkit@latest my-project" title="Create Project" />
                <CodeBlock
                  code={`cd my-project

# 1. Setup environment variables
cp .env.example .env

# 2. Generate a secure secret key (copy output to .env)
openssl rand -hex 32

# 3. Start PostgreSQL database with Docker
bun run docker:dev

# 4. Start development server (in a new terminal)
bun dev`}
                  language="bash"
                  title="Complete Setup"
                />

                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Important:</strong> The .env file is pre-configured for Docker with these defaults:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Database: <code>postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev</code></li>
                    <li>Docker handles PostgreSQL automatically</li>
                    <li>Just replace <code>PAYLOAD_SECRET</code> with your generated key</li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: 'Existing Project',
            keyword: 'Migration',
            description: 'Add PayloadKit components to your existing PayloadCMS project',
            content: (
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    Perfect for existing PayloadCMS projects wanting to use PayloadKit components
                  </AlertDescription>
                </Alert>
                <Snippet command="bunx payloadkit@latest init" title="Initialize PayloadKit" />
                <CodeBlock
                  code={`# Add components
bunx payloadkit@latest add hero-block call-to-action
bunx payloadkit@latest add db-config  # Smart configuration`}
                  language="bash"
                  title="Add Components"
                />
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      {/* Environment Setup */}
      <TutorialSteps
        title="Choose Your Development Environment"
        steps={[
          {
            title: 'Standard Local',
            keyword: 'Simple',
            description: 'Basic development setup, perfect for simple projects',
            content: (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>When to use:</strong> Simple development, no need for external services
                </p>
                <CodeBlock
                  code={`# Minimal configuration
echo "DATABASE_URI=postgresql://localhost:5432/my_project" > .env
echo "PAYLOAD_SECRET=your-secret-key-here" >> .env

# Launch
bun dev`}
                  language="bash"
                  title="Local Setup"
                />
              </div>
            )
          },
          {
            title: 'Docker Development',
            keyword: 'Recommended',
            description: 'Complete environment with hot-reload and all services',
            content: (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>When to use:</strong> First project, email testing, full-stack development
                </p>
                <Snippet command="bun run docker:dev" title="Start Docker Environment" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Included services:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• PayloadKit app with hot-reload</li>
                    <li>• PostgreSQL 17 with extensions</li>
                    <li>• Web interface at <code className="text-xs bg-muted px-1 rounded">http://localhost:3000</code></li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: 'Full Docker Stack',
            keyword: 'Advanced',
            description: 'All services including email testing and database management',
            content: (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>When to use:</strong> Advanced development, email testing, database management
                </p>
                <Snippet command="bun run docker:dev:full" title="Start Full Stack" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Additional services:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Redis (cache): <code className="text-xs bg-muted px-1 rounded">localhost:6379</code></li>
                    <li>• MailHog (emails): <code className="text-xs bg-muted px-1 rounded">localhost:8025</code></li>
                    <li>• pgAdmin (DB): <code className="text-xs bg-muted px-1 rounded">localhost:5050</code></li>
                  </ul>
                </div>
              </div>
            )
          }
        ]}
        allowSkip
      />

      {/* Database Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Database Configuration</h2>
        <p className="text-muted-foreground">
          PayloadKit automatically detects your database configuration and provides smart defaults.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Smart Auto-Detection</h3>
            <CodeBlock
              code={`// src/config/db-config/index.ts
export const dbConfig = createDbConfig() // PostgreSQL by default

// Or explicitly
export const dbConfig = createDbConfig('mongodb') // MongoDB`}
              language="typescript"
              title="Database Config"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Environment Variables</h3>
            <CodeBlock
              code={`# PostgreSQL (default)
DATABASE_URI=postgresql://user:pass@host:5432/db

# MongoDB (optional)
MONGODB_URI=mongodb://localhost:27017/my_project

# VPS/Dokploy (build separate from runtime)
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build
DATABASE_URI=postgresql://prod:pass@private:5432/prod`}
              language="bash"
              title="Environment Setup"
            />
          </div>
        </div>
      </section>

      {/* Adding Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Adding Components</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Essential Components</h3>
            <Snippet command="bunx payloadkit@latest add Users Media Pages" title="Core Collections" />
            <Snippet command="bunx payloadkit@latest add RichText CMSLink" title="React Components" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Content Blocks</h3>
            <Snippet command="bunx payloadkit@latest add hero-block call-to-action" title="Landing Page" />
            <Snippet command="bunx payloadkit@latest add faq content feature" title="Content Blocks" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Advanced Setup</h3>
            <Snippet command="bunx payloadkit@latest add db-config" title="Smart Database" />
            <Snippet command="bunx payloadkit@latest add email-config" title="Email Configuration" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Common Use Cases */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Common Use Cases</h2>
          <p className="text-muted-foreground">
            Get started quickly with these common scenarios and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">🚀 First PayloadCMS Project</h3>
            <p className="text-sm text-muted-foreground">Complete setup in 3 minutes</p>
            <CodeBlock
              code={`bunx create-payloadkit@latest my-first-project
cd my-first-project
bun run docker:dev

# Open http://localhost:3000/admin
# Create your first admin user`}
              language="bash"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">📦 Migrating Existing Project</h3>
            <p className="text-sm text-muted-foreground">Add PayloadKit to existing PayloadCMS</p>
            <CodeBlock
              code={`# In your existing project
bunx payloadkit@latest init

# Migrate to modular config
bunx payloadkit@latest add db-config collections-config`}
              language="bash"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">🏢 Business/Marketing Site</h3>
            <p className="text-sm text-muted-foreground">Template with marketing components</p>
            <CodeBlock
              code={`bunx create-payloadkit@latest my-business
cd my-business

# Add marketing blocks
bunx payloadkit@latest add hero-block feature faq call-to-action

bun run docker:dev`}
              language="bash"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">👥 Team Development</h3>
            <p className="text-sm text-muted-foreground">Reproducible environment for everyone</p>
            <CodeBlock
              code={`git clone your-project
cd your-project

# Identical setup for everyone
bun run docker:dev

# Same database + services
# No "works on my machine"`}
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" asChild>
            <Link href="/docs/configuration">
              Configuration Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/deployment">
              Deployment Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/examples">
              View Examples
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Getting Started', 'Installation', 'Setup', 'PayloadCMS', 'Docker', 'Database'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}