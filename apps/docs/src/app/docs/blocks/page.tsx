import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Star, Zap, HelpCircle, Layout, Database, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blocks',
  description: 'Reusable PayloadCMS blocks for building dynamic content layouts.',
}

type StatusType = 'stable' | 'beta' | 'coming-soon'

interface Block {
  name: string
  slug: string
  description: string
  icon: any
  features: string[]
  category: string
  version: string
  status: StatusType
}

const blocks: Block[] = [
  {
    name: 'Feature Block',
    slug: 'feature-block',
    description: 'Showcase product features with icons, multiple layouts, and rich content',
    icon: Star,
    features: ['16 built-in icons', '4 layout options', 'Customizable colors', 'Rich text support'],
    category: 'Marketing',
    version: '0.1.0',
    status: 'stable'
  },
  {
    name: 'FAQ Block',
    slug: 'faq-block',
    description: 'Interactive FAQ section with accordion functionality and optional icons',
    icon: HelpCircle,
    features: ['Accordion animations', '15 optional icons', '2 layout options', 'Rich text answers'],
    category: 'Content',
    version: '0.1.0',
    status: 'stable'
  },
  {
    name: 'Hero Block',
    slug: 'hero-block',
    description: 'Eye-catching hero sections with flexible content and CTA buttons',
    icon: Zap,
    features: ['Flexible layouts', 'Background options', 'CTA buttons', 'Media support'],
    category: 'Hero',
    version: '0.0.2',
    status: 'stable'
  },
  {
    name: 'Call to Action',
    slug: 'call-to-action',
    description: 'Conversion-focused blocks with rich text and customizable buttons',
    icon: ArrowRight,
    features: ['Rich text content', 'Multiple CTAs', 'Theme colors', 'Responsive design'],
    category: 'Marketing',
    version: '0.0.2',
    status: 'stable'
  },
  {
    name: 'Archive Block',
    slug: 'archive-block',
    description: 'Display collections of content with filtering and pagination',
    icon: Database,
    features: ['Content filtering', 'Pagination', 'Custom layouts', 'Search support'],
    category: 'Content',
    version: '0.1.0',
    status: 'coming-soon'
  },
  {
    name: 'Banner Block',
    slug: 'banner-block',
    description: 'Prominent banner sections with background options and call-to-actions',
    icon: Layout,
    features: ['Background options', 'CTA buttons', 'Content overlay', 'Responsive'],
    category: 'Marketing',
    version: '0.1.0',
    status: 'coming-soon'
  }
]

const categories = ['All', 'Marketing', 'Content', 'Hero', 'Layout']

const statuses: Record<StatusType, { label: string; variant: 'default' | 'secondary' | 'outline' }> = {
  stable: { label: 'Stable', variant: 'default' as const },
  beta: { label: 'Beta', variant: 'secondary' as const },
  'coming-soon': { label: 'Coming Soon', variant: 'outline' as const }
}

export default function BlocksPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Reusable PayloadCMS blocks for building dynamic content layouts.
        </p>
      </div>

      {/* Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{blocks.length}</CardTitle>
            <CardDescription>Total Blocks</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{blocks.filter(b => b.status === 'stable').length}</CardTitle>
            <CardDescription>Stable Blocks</CardDescription>
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
            <CardTitle className="text-2xl">2</CardTitle>
            <CardDescription>New This Month</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Add blocks to your PayloadCMS application using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">1. Install a block</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                bunx payloadkit add feature-block
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Add to your config</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                import {'{ FeatureBlock }'} from './blocks/feature-block'
              </code>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/docs/cli">
                <ArrowRight className="mr-2 h-4 w-4" />
                CLI Documentation
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

      {/* Blocks Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Blocks</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => {
            const Icon = block.icon
            const statusInfo = statuses[block.status]

            return (
              <Card key={block.slug} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{block.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{block.category}</Badge>
                          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {block.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {block.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">v{block.version}</span>
                      {block.status === 'stable' ? (
                        <Button size="sm" asChild>
                          <Link href={`/docs/blocks/${block.slug}`}>
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