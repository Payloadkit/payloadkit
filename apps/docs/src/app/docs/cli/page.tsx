import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CLIPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">CLI Usage</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to use the PayloadKit CLI to manage components and create projects.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Available Commands
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">create-payloadkit</h3>
              <p className="text-muted-foreground">
                Create a new PayloadCMS project with PayloadKit pre-configured.
              </p>
              
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx create-payloadkit@latest [project-name] [options]</code>
                </pre>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Options:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li><code>-t, --template &lt;template&gt;</code> - Template to use (default: basic)</li>
                  <li><code>--no-install</code> - Skip dependency installation</li>
                  <li><code>--no-git</code> - Skip git initialization</li>
                  <li><code>-p, --package-manager &lt;pm&gt;</code> - Package manager to use (default: bun)</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Examples:</h4>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <pre className="text-sm space-y-1">
{`# Create with default settings
npx create-payloadkit@latest my-app

# Create with custom options
npx create-payloadkit@latest my-blog --template blog --package-manager npm`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">payloadkit init</h3>
              <p className="text-muted-foreground">
                Initialize PayloadKit in an existing PayloadCMS project.
              </p>
              
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit init</code>
                </pre>
              </div>
              
              <p className="text-sm text-muted-foreground">
                This creates a <code>payloadkit.json</code> configuration file and sets up the recommended folder structure.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">payloadkit list</h3>
              <p className="text-muted-foreground">
                List all available components in the PayloadKit registry.
              </p>
              
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit list</code>
                </pre>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Shows available blocks and components with their descriptions and categories.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">payloadkit add</h3>
              <p className="text-muted-foreground">
                Add a component to your project.
              </p>
              
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit add &lt;component-name&gt; [options]</code>
                </pre>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Options:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li><code>-f, --force</code> - Overwrite existing components</li>
                  <li><code>-p, --path &lt;path&gt;</code> - Custom installation path</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Examples:</h4>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <pre className="text-sm space-y-1">
{`# Add a call-to-action block
npx payloadkit add call-to-action

# Add with force overwrite
npx payloadkit add hero-block --force

# Add to custom path
npx payloadkit add call-to-action --path ./src/custom-blocks`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Configuration
          </h2>
          
          <p className="text-muted-foreground">
            The <code>payloadkit.json</code> file in your project root contains configuration for PayloadKit:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border text-sm">
{`{
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
            </pre>
          </div>
          
          <p className="text-sm text-muted-foreground">
            You can customize the paths where components are installed by editing this file.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Workflow
          </h2>
          
          <p className="text-muted-foreground">
            Here's a typical workflow when using PayloadKit:
          </p>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  1
                </div>
                <h3 className="font-medium">Browse Components</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-9">
                Use <code>npx payloadkit list</code> to see available components
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  2
                </div>
                <h3 className="font-medium">Add Component</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-9">
                Use <code>npx payloadkit add [component-name]</code> to copy it to your project
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  3
                </div>
                <h3 className="font-medium">Register & Customize</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-9">
                Register the block in your PayloadCMS config and customize as needed
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 pt-6 border-t">
          <p className="text-muted-foreground">
            Ready to explore the available components?
          </p>
          
          <div>
            <Button asChild>
              <Link href="/docs/components">
                View Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}