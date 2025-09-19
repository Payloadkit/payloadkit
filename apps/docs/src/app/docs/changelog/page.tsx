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
        version="0.4.3"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="September 2025"
      />

      {/* Current Version Alert */}
      <Alert>
        <Package className="h-4 w-4" />
        <AlertDescription>
          <strong>Current Version:</strong> Following semantic versioning with detailed change tracking.
          Format based on <Link href="https://keepachangelog.com" className="text-primary hover:underline">Keep a Changelog</Link>.
        </AlertDescription>
      </Alert>

      {/* Version 0.4.3 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-green-600" />
          <h2 className="text-3xl font-bold">0.4.3</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            September 19, 2025
          </Badge>
          <Badge className="bg-green-600 text-white">Latest</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bug Fixes */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100">
                <Bug className="h-4 w-4 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Fixed</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>CLI Registry Issues:</strong> Fixed registry component installation when PayloadKit is installed via npm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Case-Sensitivity:</strong> Added case-insensitive component search while maintaining exact match priority</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Folder Naming:</strong> Fixed component installation to preserve proper case from registry (Theme vs theme)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Registry Bundling:</strong> Registry is now properly bundled with npm package for global installations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>AuthProvider Import:</strong> Fixed template import path for AuthProvider component</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Documentation Commands:</strong> Corrected all install commands to use proper component names with correct case</span>
              </li>
            </ul>
          </div>

          {/* Improvements */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100">
                <Wrench className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Changed</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>CLI Path Resolution:</strong> Enhanced CLI detection with multiple fallback strategies for npm installations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Component Search:</strong> Improved search algorithm to be more user-friendly while maintaining technical accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Registry Loading:</strong> Added registry bundling to npm package for better reliability</span>
              </li>
            </ul>
          </div>
        </div>

        <Alert>
          <Package className="h-4 w-4" />
          <AlertDescription>
            <strong>Critical Fixes:</strong> Version 0.4.3 resolves major installation issues when using <code>bunx payloadkit@latest add</code> with npm-installed packages. All installation commands now work reliably.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Version 0.4.0 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-blue-600" />
          <h2 className="text-3xl font-bold">0.4.0</h2>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            September 19, 2025
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* New Features */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100">
                <Plus className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Added</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>Explicit Permissions Support:</strong> Enhanced validation script with explicit permissions configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>CLI Binary Distribution:</strong> Generated CLI binary for npm distribution with proper packaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>Global Documentation:</strong> Complete documentation for Header, Footer, and Theme globals with examples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>Usage Mode Clarification:</strong> Clear documentation distinguishing between template creation and component addition modes</span>
              </li>
            </ul>
          </div>

          {/* Improvements */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100">
                <Wrench className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Changed</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Installation Documentation:</strong> Updated installation guide to clearly explain two usage modes of PayloadKit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>CLI Commands:</strong> Standardized CLI command examples throughout documentation to use <code>bunx payloadkit@latest add</code></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* Version 0.3.0 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-purple-600" />
          <h2 className="text-3xl font-bold">0.3.0</h2>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            September 17, 2025
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* New Features */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100">
                <Plus className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Added</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>Database-Only Docker Mode:</strong> New recommended development workflow with PostgreSQL 17 in Docker and app running locally for faster rebuilds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>PostgreSQL 17 Support:</strong> Upgraded from PostgreSQL 16 to 17 for improved performance and enhanced JSON operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>New Docker Scripts:</strong> Added <code>docker:db-only</code>, <code>docker:db-only:detached</code>, <code>docker:db-only:pgadmin</code>, <code>docker:db-only:stop</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span><strong>Registry Component:</strong> New <code>docker-compose-db-only</code> configuration for database-only development</span>
              </li>
            </ul>
          </div>

          {/* Improvements */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100">
                <Wrench className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Improved</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Documentation:</strong> Enhanced installation and Docker guides with comprehensive database deployment options comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Developer Experience:</strong> Database-only mode provides faster hot reload, better debugging, and minimal resource usage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span><strong>Templates:</strong> All Docker configurations updated to use PostgreSQL 17 with optimized development workflows</span>
              </li>
            </ul>
          </div>
        </div>

        <Alert>
          <Package className="h-4 w-4" />
          <AlertDescription>
            <strong>Recommended Workflow:</strong> Use <code>bun run docker:db-only</code> for development. PostgreSQL 17 runs in Docker while your app runs locally with hot reload, TypeScript support, and faster builds.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Version 0.2.1 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-green-600" />
          <h2 className="text-3xl font-bold">0.2.1</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            September 17, 2025
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bug Fixes */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100">
                <Bug className="h-4 w-4 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Fixed</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Critical:</strong> Removed incompatible Better Auth plugin causing PayloadCMS version conflicts (3.28.1 vs 3.55.1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span><strong>Database:</strong> Fixed PostgreSQL configuration preventing automatic table creation (push: false → push: true)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                <span>Added missing Sharp package for image processing in template dependencies</span>
              </li>
            </ul>
          </div>

          {/* Improvements */}
          <div className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100">
                <Wrench className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Improved</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span>PayloadCMS database initialization now works automatically on first run</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span>Docker development environment stability significantly improved</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                <span>Cleaner template with fewer dependency conflicts</span>
              </li>
            </ul>
          </div>
        </div>

        <Alert>
          <Bug className="h-4 w-4" />
          <AlertDescription>
            <strong>Breaking Change Notice:</strong> If you created a project before this version and experience database issues,
            please update your <code>src/config/db-config/postgres.ts</code> file to set <code>push: true</code> and remove any Better Auth dependencies.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Version 0.2.0 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-blue-600" />
          <h2 className="text-3xl font-bold">0.2.0</h2>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            September 15, 2025
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
                <p><strong>Interactive Documentation System:</strong> Complete overhaul with syntax highlighting and clipboard functionality</p>
                <p><strong>Enhanced Developer Experience:</strong> 50+ interactive CodeBlock components replacing static code examples</p>
                <p><strong>Unified Page Architecture:</strong> Consistent PageDescription, navigation, and component structure</p>
                <p><strong>Migration Documentation:</strong> Comprehensive v1.x to v2.x upgrade guides with interactive examples</p>
                <p><strong>Enhanced Accessibility:</strong> WCAG-compliant documentation with improved keyboard navigation</p>
              </div>
              <Separator className="my-3" />
              <div className="space-y-2">
                <p className="font-medium text-blue-600">Documentation Pages Updated:</p>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>• CLI Documentation - Interactive command reference with copy functionality</li>
                  <li>• Docker Guide - Complete containerization setup with code examples</li>
                  <li>• Security Guide - Authentication and compliance documentation</li>
                  <li>• Storage Configuration - Cloud storage setup with interactive examples</li>
                  <li>• Component Library - blocks-shared, blog-template, and changelog enhanced</li>
                </ul>
              </div>
              <Separator className="my-3" />
              <div className="space-y-2">
                <p className="font-medium text-purple-600">Technical Improvements:</p>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>• CodeBlock Integration - Syntax highlighting with Prism.js</li>
                  <li>• Clipboard Functionality - Copy-to-clipboard on all code examples</li>
                  <li>• Responsive Design - Mobile-first approach with consistent layouts</li>
                  <li>• Component Architecture - Standardized documentation components</li>
                  <li>• Performance Optimizations - Better image loading and responsive design</li>
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
                <p><strong>Documentation Architecture:</strong> All pages transformed to use modern interactive components</p>
                <p><strong>Code Examples:</strong> Replaced 50+ static pre/code blocks with interactive CodeBlock components</p>
                <p><strong>Page Structure:</strong> Unified all documentation pages with consistent PageDescription headers</p>
                <p><strong>Developer Experience:</strong> Enhanced clipboard functionality and syntax highlighting across all examples</p>
                <p><strong>Navigation:</strong> Consistent navigation patterns and component structure throughout documentation</p>
                <p><strong>Content Organization:</strong> Better categorization and tagging system for improved discoverability</p>
              </div>
            </div>

            {/* Fixed */}
            <div className="rounded-lg border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bug className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-semibold text-red-700">Fixed</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Hydration Issues:</strong> Resolved hydration mismatch errors in Snippet components with suppressHydrationWarning</p>
                <p><strong>Layout Problems:</strong> Fixed horizontal scroll issues across CLI, Docker, Security, and Storage pages</p>
                <p><strong>Template Strings:</strong> Converted escaped strings to template literals preventing width overflow issues</p>
                <p><strong>Build Errors:</strong> Resolved JSX parsing failures and component rendering issues in documentation system</p>
                <p><strong>Component Consistency:</strong> Standardized all documentation components for uniform experience</p>
                <p><strong>Responsive Design:</strong> Fixed mobile layout issues and improved cross-device compatibility</p>
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