import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'CLI Usage - PayloadKit',
  description: 'Learn how to use the PayloadKit CLI to manage components and create projects',
}

export default function CLIPage() {
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
        title="CLI Usage"
        description="Learn how to use the PayloadKit CLI to manage components and create projects efficiently."
        category="guides"
        version="0.4.3"
        difficulty="beginner"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Available Commands */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Available Commands</h2>

        <div className="space-y-8">
          {/* create-payloadkit */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">create-payloadkit</h3>
            <p className="text-muted-foreground">
              Create a new PayloadCMS project with PayloadKit pre-configured.
            </p>

            <Snippet
              command="bunx create-payloadkit@latest [project-name] [options]"
              title="Create Project Command"
            />

            <div className="space-y-3">
              <h4 className="font-medium">Options:</h4>
              <div className="rounded-lg border p-4">
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">-t, --template &lt;template&gt;</code> - Template to use (default: basic)</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">--no-install</code> - Skip dependency installation</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">--no-git</code> - Skip git initialization</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">-p, --package-manager &lt;pm&gt;</code> - Package manager to use (default: bun)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Examples:</h4>
              <CodeBlock
                code={`# Create with default settings
bunx create-payloadkit@latest my-app

# Create with custom options
bunx create-payloadkit@latest my-blog --template blog --package-manager npm`}
                language="bash"
                title="Usage Examples"
              />
            </div>
          </div>

          {/* payloadkit init */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">payloadkit init</h3>
            <p className="text-muted-foreground">
              Initialize PayloadKit in an existing PayloadCMS project.
            </p>

            <Snippet
              command="bunx payloadkit@latest init"
              title="Initialize PayloadKit"
            />

            <Alert>
              <AlertDescription>
                This creates a <code>payloadkit.json</code> configuration file and sets up the recommended folder structure.
              </AlertDescription>
            </Alert>
          </div>

          {/* payloadkit list */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">payloadkit list</h3>
            <p className="text-muted-foreground">
              List all available components in the PayloadKit registry.
            </p>

            <Snippet
              command="bunx payloadkit@latest list"
              title="List Components"
            />

            <Alert>
              <AlertDescription>
                Shows available blocks and components with their descriptions and categories.
              </AlertDescription>
            </Alert>
          </div>

          {/* payloadkit add */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">payloadkit add</h3>
            <p className="text-muted-foreground">
              Add a component to your project.
            </p>

            <Snippet
              command="bunx payloadkit@latest add <component-name> [options]"
              title="Add Component Command"
            />

            <div className="space-y-3">
              <h4 className="font-medium">Options:</h4>
              <div className="rounded-lg border p-4">
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">-f, --force</code> - Overwrite existing components</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">-p, --path &lt;path&gt;</code> - Custom installation path</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Examples:</h4>
              <CodeBlock
                code={`# Add a call-to-action block
bunx payloadkit@latest add call-to-action

# Add with force overwrite
bunx payloadkit@latest add hero-block --force

# Add to custom path
bunx payloadkit@latest add call-to-action --path ./src/custom-blocks`}
                language="bash"
                title="Add Component Examples"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>

        <p className="text-muted-foreground">
          The <code>payloadkit.json</code> file in your project root contains configuration for PayloadKit:
        </p>

        <CodeBlock
          code={`{
  "version": "0.0.1",
  "components": {
    "blocks": {
      "path": "src/blocks"
    },
    "collections": {
      "path": "src/collections"
    },
    "globals": {
      "path": "src/globals"
    },
    "components": {
      "path": "src/components"
    }
  }
}`}
          language="json"
          title="payloadkit.json Configuration"
        />

        <Alert>
          <AlertDescription>
            You can customize the paths where components are installed by editing this file.
          </AlertDescription>
        </Alert>
      </section>

      {/* Workflow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Typical Workflow</h2>

        <p className="text-muted-foreground">
          Here's a typical workflow when using PayloadKit:
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </div>
              <h3 className="font-medium text-lg">Browse Components</h3>
            </div>
            <p className="text-muted-foreground ml-11">
              Use <code className="bg-muted px-2 py-1 rounded text-xs">bunx payloadkit@latest list</code> to see available components
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </div>
              <h3 className="font-medium text-lg">Add Component</h3>
            </div>
            <p className="text-muted-foreground ml-11">
              Use <code className="bg-muted px-2 py-1 rounded text-xs">bunx payloadkit@latest add [component-name]</code> to copy it to your project
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </div>
              <h3 className="font-medium text-lg">Register & Customize</h3>
            </div>
            <p className="text-muted-foreground ml-11">
              Register the block in your PayloadCMS config and customize as needed
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <p className="text-muted-foreground">
          Ready to explore the available components?
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button asChild>
            <Link href="/docs/components">
              View Components <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/blocks">
              Browse Blocks <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['CLI', 'Commands', 'Components', 'Blocks', 'Installation', 'Configuration'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}