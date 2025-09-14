import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DocsHomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">PayloadKit</h1>
          <p className="text-xl text-muted-foreground">
            Build PayloadCMS applications faster with reusable components, templates, and <strong>enterprise-grade security by default</strong>.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              🛡️ 2FA Required
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              ✨ Better Auth UI
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🏗️ Registry-Based
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
              View Components
            </Link>
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3 rounded-lg border p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Lightning Fast</h3>
          <p className="text-muted-foreground">
            Get your PayloadCMS project up and running in minutes with pre-built components and templates.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Download className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Copy & Paste</h3>
          <p className="text-muted-foreground">
            Components are copied into your project, giving you full control and customization.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Production Ready</h3>
          <p className="text-muted-foreground">
            Built with TypeScript, TailwindCSS, and modern PayloadCMS patterns.
          </p>
        </div>
      </div>

      {/* Quick Start */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        
        <div className="rounded-lg border bg-muted/50 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Create a new project</h3>
              <pre className="bg-background p-3 rounded border">
                <code>npx create-payloadkit@latest my-app</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Add components</h3>
              <pre className="bg-background p-3 rounded border">
                <code>npx payloadkit add call-to-action</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">3. Start building</h3>
              <pre className="bg-background p-3 rounded border">
                <code>npm run dev</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 pt-6 border-t">
        <p className="text-muted-foreground">
          Ready to get started? Check out the{' '}
          <Link href="/docs/installation" className="text-primary hover:underline">
            installation guide
          </Link>{' '}
          or browse the{' '}
          <Link href="/docs/components" className="text-primary hover:underline">
            available components
          </Link>.
        </p>
      </div>
    </div>
  )
}