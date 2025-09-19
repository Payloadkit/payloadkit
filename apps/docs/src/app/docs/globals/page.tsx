import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Palette, Settings, Menu, FileText, Database } from 'lucide-react'
import { CodeBlock } from '@/components/code-tabs'

export const metadata: Metadata = {
  title: 'Globals',
  description: 'Site-wide configuration and content management with PayloadCMS globals.',
}

type StatusType = 'stable' | 'beta' | 'coming-soon'

interface Global {
  name: string
  slug: string
  description: string
  icon: any
  features: string[]
  category: string
  version: string
  status: StatusType
}

const globals: Global[] = [
  {
    name: 'Theme',
    slug: 'theme',
    description: 'Complete theme system with color presets, shadcn/ui integration, and live preview',
    icon: Palette,
    features: ['4 built-in presets', 'Live preview', 'CSS variables', 'Light/dark mode'],
    category: 'Design',
    version: '0.1.0',
    status: 'stable'
  },
  {
    name: 'Header',
    slug: 'header',
    description: 'Global header configuration with navigation, logo, and mobile menu',
    icon: Menu,
    features: ['Navigation menu', 'Logo management', 'Mobile responsive', 'CTA buttons'],
    category: 'Layout',
    version: '0.1.0',
    status: 'coming-soon'
  },
  {
    name: 'Footer',
    slug: 'footer',
    description: 'Site-wide footer with links, social media, and contact information',
    icon: FileText,
    features: ['Link sections', 'Social media', 'Contact info', 'Newsletter signup'],
    category: 'Layout',
    version: '0.1.0',
    status: 'coming-soon'
  },
  {
    name: 'SEO Settings',
    slug: 'seo',
    description: 'Global SEO configuration including meta tags, social sharing, and analytics',
    icon: Settings,
    features: ['Meta tags', 'Open Graph', 'Twitter Cards', 'Analytics IDs'],
    category: 'SEO',
    version: '0.1.0',
    status: 'coming-soon'
  }
]

const categories = ['All', 'Design', 'Layout', 'SEO', 'Content']
const statuses: Record<StatusType, { label: string; variant: 'default' | 'secondary' | 'outline' }> = {
  stable: { label: 'Stable', variant: 'default' as const },
  beta: { label: 'Beta', variant: 'secondary' as const },
  'coming-soon': { label: 'Coming Soon', variant: 'outline' as const }
}

export default function GlobalsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Globals</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Site-wide configuration and content management with PayloadCMS globals.
        </p>
      </div>

      {/* Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{globals.length}</CardTitle>
            <CardDescription>Total Globals</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{globals.filter(g => g.status === 'stable').length}</CardTitle>
            <CardDescription>Stable Globals</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{categories.length - 1}</CardTitle>
            <CardDescription>Categories</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">1</CardTitle>
            <CardDescription>New This Month</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* What are Globals */}
      <Card>
        <CardHeader>
          <CardTitle>What are PayloadCMS Globals?</CardTitle>
          <CardDescription>
            Globals are single documents that contain site-wide settings and content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Site-wide Settings</h4>
              <p className="text-sm text-muted-foreground">
                Store configuration that applies across your entire application like theme colors,
                header navigation, or contact information.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Single Document</h4>
              <p className="text-sm text-muted-foreground">
                Unlike collections which can have many documents, globals contain exactly one
                document that can be edited through the admin interface.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="https://payloadcms.com/docs/globals/overview">
                <ArrowRight className="mr-2 h-4 w-4" />
                PayloadCMS Globals Docs
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/getting-started">
                Quick Start Guide
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Using Globals in PayloadKit</CardTitle>
          <CardDescription>
            Add globals to your PayloadCMS application using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">1. Install a global</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                bunx payloadkit@latest add Theme
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Add to your config</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                import {'{ Theme }'} from './globals/theme'
              </code>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example Configuration</h4>
            <CodeBlock
              code={`import { buildConfig } from 'payload'
import { Theme } from './globals/theme'

export default buildConfig({
  globals: [Theme],
  // ... other config
})`}
              language="typescript"
            />
          </div>
        </CardContent>
      </Card>

      {/* Globals Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Globals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {globals.map((global) => {
            const Icon = global.icon
            const statusInfo = statuses[global.status]

            return (
              <Card key={global.slug} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{global.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{global.category}</Badge>
                          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {global.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {global.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">v{global.version}</span>
                      {global.status === 'stable' ? (
                        <Button size="sm" asChild>
                          <Link href={`/docs/globals/${global.slug}`}>
                            View Docs <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}