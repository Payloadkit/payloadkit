import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground">
          Get started with PayloadKit in your PayloadCMS project.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Create a new project
          </h2>
          
          <p className="text-muted-foreground">
            The fastest way to get started is to create a new PayloadKit project:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border">
              <code>npx create-payloadkit@latest my-payloadcms-app</code>
            </pre>
          </div>
          
          <p className="text-muted-foreground">
            This will create a new PayloadCMS project with Next.js, TypeScript, TailwindCSS, and PayloadKit pre-configured.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Add to existing project
          </h2>
          
          <p className="text-muted-foreground">
            You can also add PayloadKit to an existing PayloadCMS project:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Initialize PayloadKit</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit init</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This will create a <code>payloadkit.json</code> configuration file in your project root.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Add your first component</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit add call-to-action</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This will copy the call-to-action block into your project at <code>src/blocks/call-to-action/</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Requirements
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Node.js</h3>
              <p className="text-muted-foreground text-sm">
                Node.js 18.20.2 or higher
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">PayloadCMS</h3>
              <p className="text-muted-foreground text-sm">
                PayloadCMS 3.0 or higher
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Package Manager</h3>
              <p className="text-muted-foreground text-sm">
                npm, yarn, pnpm, or bun
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-muted-foreground text-sm">
                PostgreSQL (recommended)
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Project Structure
          </h2>
          
          <p className="text-muted-foreground">
            After initialization, your project will have the following structure:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="text-sm">
{`my-payloadcms-app/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── blocks/              # PayloadKit blocks
│   ├── collections/         # PayloadCMS collections
│   ├── components/          # React components
│   ├── utilities/           # Helper functions
│   └── payload.config.ts    # PayloadCMS configuration
├── public/                  # Static files
├── payloadkit.json          # PayloadKit configuration
└── package.json`}
            </pre>
          </div>
        </section>

        <div className="flex flex-col gap-4 pt-6 border-t">
          <p className="text-muted-foreground">
            Ready to start adding components? Check out the CLI usage guide.
          </p>
          
          <div>
            <Button asChild>
              <Link href="/docs/cli">
                CLI Usage <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}