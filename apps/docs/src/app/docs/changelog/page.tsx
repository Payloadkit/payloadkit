import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, GitBranch, Package, Zap, Bug, Plus, Wrench } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Changelog | PayloadKit',
  description: 'Version history and release notes for PayloadKit - PayloadCMS Framework',
}

export default function ChangelogPage() {
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
        title="Changelog"
        description="Complete version history and release notes for PayloadKit. Track new features, improvements, and bug fixes across all releases."
        category="guides"
        version="0.1.0"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="January 2025"
      />

      {/* Current Version Alert */}
      <Alert>
        <Package className="h-4 w-4" />
        <AlertDescription>
          <strong>Current Version:</strong> Following semantic versioning with detailed change tracking.
          Format based on <Link href="https://keepachangelog.com" className="text-primary hover:underline">Keep a Changelog</Link>.
        </AlertDescription>
      </Alert>

      {/* Unreleased Version */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <GitBranch className="h-6 w-6 text-orange-600" />
          <h2 className="text-3xl font-bold">Unreleased</h2>
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            In Development
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Added Features */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="h-5 w-5 text-green-600" />
              <h3 className="text-xl font-semibold text-green-700">Added</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <p><strong>Documentation Site:</strong> Complete Next.js documentation website with search functionality</p>
                <p><strong>Search:</strong> Functional search with Ctrl+K shortcut and keyboard navigation</p>
                <p><strong>Accessibility:</strong> Full WCAG compliance with screen reader support</p>
                <p><strong>Docker Development:</strong> Complete Docker setup with PostgreSQL, Redis, and MailHog</p>
                <p><strong>VPS Deployment:</strong> Production-ready Dockerfile optimized for Dokploy deployment</p>
                <p><strong>Modular Configuration:</strong> Smart database detection with PostgreSQL/MongoDB support</p>
                <p><strong>Enhanced Blocks:</strong> shadcn/ui components integration in PayloadKit blocks</p>
                <p><strong>Auth Security:</strong> Better authentication system in blank template</p>
              </div>
              <Separator className="my-3" />
              <div className="space-y-2">
                <p className="font-medium text-blue-600">New Blocks:</p>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>• Feature Steps Block - Step-by-step process with 16 icons and 5 layouts</li>
                  <li>• Big Hero Block - Advanced hero with video background and parallax</li>
                  <li>• Cal.com Block - Cal.com integration with iframe embedding</li>
                  <li>• Outline Block - Automatic table of contents generator</li>
                  <li>• Simple Hero Block - Clean hero with customizable backgrounds</li>
                </ul>
              </div>
              <Separator className="my-3" />
              <div className="space-y-2">
                <p className="font-medium text-purple-600">Developer Experience:</p>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>• Unit Testing - 31 passing tests with Vitest and React Testing Library</li>
                  <li>• OptimizedImage Component - Performance-optimized image loading</li>
                  <li>• Accessibility Hooks - useKeyboardNavigation and useFocusManagement</li>
                  <li>• Migration Guide - Comprehensive v1.x to v2.x upgrade documentation</li>
                  <li>• TypeScript Documentation - Complete type definitions with examples</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Changed & Fixed */}
          <div className="space-y-6">
            {/* Changed */}
            <div className="rounded-lg border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-700">Changed</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Template System:</strong> Blank template now includes modular configuration</p>
                <p><strong>Database:</strong> PostgreSQL as default with MongoDB as optional alternative</p>
                <p><strong>Build System:</strong> Optimized for Docker production environments</p>
                <p><strong>Registry Structure:</strong> Cleaned up redundant blocks (faq → faq-block)</p>
                <p><strong>TypeScript Types:</strong> Replaced 51+ any types with strict interfaces</p>
                <p><strong>Component Architecture:</strong> All blocks extend standardized interfaces</p>
              </div>
            </div>

            {/* Fixed */}
            <div className="rounded-lg border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bug className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-semibold text-red-700">Fixed</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Documentation:</strong> Resolved React conflicts and accessibility issues</p>
                <p><strong>File Paths:</strong> Corrected markdown file loading in Next.js documentation</p>
                <p><strong>Search Dialog:</strong> Added required DialogTitle for screen readers</p>
                <p><strong>JSX Syntax Errors:</strong> Fixed template string parsing errors</p>
                <p><strong>Type Safety:</strong> Eliminated all loose typing issues</p>
                <p><strong>Performance Issues:</strong> Fixed image loading with lazy loading</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Version 0.0.1 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-green-600" />
          <h2 className="text-3xl font-bold">0.0.1</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            September 12, 2024
          </Badge>
        </div>

        <div className="rounded-lg border p-6 bg-green-50/50 dark:bg-green-950/20">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-green-600" />
            <h3 className="text-xl font-semibold text-green-700">Initial Release</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Core Framework</h4>
              <ul className="space-y-1 text-sm">
                <li>• PayloadKit framework with registry system</li>
                <li>• CLI Tools: payloadkit and create-payloadkit</li>
                <li>• Local file-based component discovery</li>
                <li>• Blank template with PayloadCMS integration</li>
                <li>• Monorepo structure with bun workspaces</li>
                <li>• Full TypeScript type safety</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Components & Architecture</h4>
              <ul className="space-y-1 text-sm">
                <li>• Reusable PayloadCMS blocks with React components</li>
                <li>• Collection system (Users, Media, Pages)</li>
                <li>• Extensible plugin architecture</li>
                <li>• PayloadCMS 3.0+ integration</li>
                <li>• Next.js 15 for documentation and templates</li>
                <li>• TailwindCSS and shadcn/ui integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Release Information */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Release Information</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-3">Versioning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              PayloadKit follows <Link href="https://semver.org" className="text-primary hover:underline">Semantic Versioning</Link> (SemVer) for predictable releases.
            </p>
            <div className="space-y-2 text-sm">
              <div><strong>MAJOR:</strong> Breaking changes requiring code updates</div>
              <div><strong>MINOR:</strong> New features, backward compatible</div>
              <div><strong>PATCH:</strong> Bug fixes and security updates</div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-3">Dependencies</h3>
            <div className="space-y-2 text-sm">
              <div><strong>PayloadCMS:</strong> ^3.0.0+ integration</div>
              <div><strong>Next.js:</strong> ^15.4.4 for templates</div>
              <div><strong>Bun:</strong> Primary package manager</div>
              <div><strong>TypeScript:</strong> Full type safety</div>
              <div><strong>TailwindCSS:</strong> Utility-first CSS</div>
              <div><strong>shadcn/ui:</strong> Modern component library</div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button asChild>
            <Link href="/docs/getting-started">
              Getting Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/migration">
              Migration Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Changelog', 'Releases', 'Version History', 'Updates', 'Features', 'Bug Fixes'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}