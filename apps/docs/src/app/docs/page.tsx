import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DocsHomePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">PayloadKit</h1>
          <p className="text-xl text-muted-foreground">
            Copy-paste PayloadCMS components. Build faster.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Copy & Paste
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              shadcn/ui
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              TypeScript
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/docs/installation">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs/components">
              Browse Components
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-3 rounded-lg border p-6">
          <Zap className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-semibold">Quick Setup</h3>
          <p className="text-sm text-muted-foreground">
            Project ready in 2 minutes with blocks, collections, auth.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border p-6">
          <Download className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-semibold">Full Control</h3>
          <p className="text-sm text-muted-foreground">
            Code copied to your project. Modify as needed.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border p-6">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <h3 className="text-lg font-semibold">Production Ready</h3>
          <p className="text-sm text-muted-foreground">
            TypeScript, auth, security patterns included.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>

        <div className="rounded-lg border bg-muted/50 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium mb-2">Create project</h3>
              <pre className="bg-background p-3 rounded border text-sm">
                <code>bunx create-payloadkit@latest my-app</code>
              </pre>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Add components</h3>
              <pre className="bg-background p-3 rounded border text-sm">
                <code>bunx payloadkit@latest add hero-block</code>
              </pre>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Done</h3>
              <pre className="bg-background p-3 rounded border text-sm">
                <code>npm run dev</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}