import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Snippet } from '@/components/snippet'

const components = [
  // Advanced Blocks (New from jenny-english.com)
  {
    name: "Feature Block",
    slug: "feature-block",
    description: "Advanced feature showcase with 16 icons, 4 layouts, and theme integration",
    category: "Marketing",
    tags: ["features", "icons", "layouts", "showcase"],
    status: "ready",
    version: "0.1.0",
    isNew: true,
  },
  {
    name: "FAQ Block",
    slug: "faq-block",
    description: "Interactive FAQ section with accordion functionality and optional icons",
    category: "Content",
    tags: ["faq", "accordion", "questions", "icons"],
    status: "ready",
    version: "0.1.0",
    isNew: true,
  },
  {
    name: "Archive Block",
    slug: "archive-block",
    description: "Display collections of content with filtering, sorting, and multiple layouts",
    category: "Content",
    tags: ["archive", "collection", "list", "grid", "blog"],
    status: "ready",
    version: "0.1.0",
    isNew: true,
  },
  {
    name: "Banner Block",
    slug: "banner-block",
    description: "Hero banner with customizable backgrounds, text alignment, and CTAs",
    category: "Hero",
    tags: ["banner", "hero", "cta", "background"],
    status: "ready",
    version: "0.1.0",
    isNew: true,
  },

  // Existing Blocks
  {
    name: "Hero Block",
    slug: "hero-block",
    description: "A flexible hero section with title, subtitle, description and CTA buttons",
    category: "Hero",
    tags: ["hero", "banner", "landing"],
    status: "ready",
    version: "0.0.2",
  },
  {
    name: "Call to Action",
    slug: "call-to-action",
    description: "A versatile call-to-action block with rich text content and customizable buttons",
    category: "Marketing",
    tags: ["cta", "buttons", "conversion"],
    status: "ready",
    version: "0.0.2",
  },
  {
    name: "Banner",
    slug: "banner",
    description: "A prominent banner section with title, description, and call-to-action buttons",
    category: "Marketing",
    tags: ["banner", "hero", "marketing", "cta"],
    status: "ready",
    version: "0.0.2",
  },
  {
    name: "Content",
    slug: "content",
    description: "Rich content block with flexible column layouts and rich text editor",
    category: "Content",
    tags: ["content", "text", "columns", "rich-text"],
    status: "ready",
    version: "0.0.1",
  },
  {
    name: "FAQ",
    slug: "faq",
    description: "FAQ block with collapsible question and answer pairs",
    category: "Content",
    tags: ["faq", "questions", "answers", "accordion"],
    status: "ready",
    version: "0.0.2",
  },
  {
    name: "Feature",
    slug: "feature",
    description: "Feature showcase block with icons, titles, descriptions and grid layout",
    category: "Marketing",
    tags: ["features", "grid", "icons", "showcase"],
    status: "ready",
    version: "0.0.2",
  },
  {
    name: "Icon Block",
    slug: "icon-block",
    description: "Icon-based content block with customizable icon, title and description",
    category: "Content",
    tags: ["icon", "visual", "highlight", "callout"],
    status: "ready",
    version: "0.0.1",
  },
  {
    name: "Media Block",
    slug: "media-block",
    description: "Simple media display block for images and videos with optional caption",
    category: "Content",
    tags: ["media", "image", "video", "gallery"],
    status: "ready",
    version: "0.0.1",
  },
  {
    name: "Text Block",
    slug: "text-block",
    description: "Simple text block with optional title and rich text content",
    category: "Content",
    tags: ["text", "content", "simple", "basic"],
    status: "ready",
    version: "0.0.1",
  },

  // Utility Components
  {
    name: "RichText",
    slug: "richtext",
    description: "Component to render PayloadCMS rich text content with Lexical support",
    category: "Utility",
    tags: ["richtext", "lexical", "content", "editor"],
    status: "ready",
    version: "0.0.1",
    hasPage: false,
  },
  {
    name: "CMSLink",
    slug: "cmslink",
    description: "Smart link component for both internal and external links from PayloadCMS",
    category: "Utility",
    tags: ["link", "navigation", "cms", "reference"],
    status: "ready",
    version: "0.0.1",
    hasPage: false,
  },
  {
    name: "Blocks Shared",
    slug: "blocks-shared",
    description: "Shared components and utilities for PayloadCMS blocks",
    category: "Utility",
    tags: ["shared", "utilities", "blocks", "layout"],
    status: "ready",
    version: "0.1.0",
    isNew: true,
  },
]

const categories = [
  { name: "All", count: components.length },
  { name: "Hero", count: components.filter(c => c.category === "Hero").length },
  { name: "Marketing", count: components.filter(c => c.category === "Marketing").length },
  { name: "Content", count: components.filter(c => c.category === "Content").length },
  { name: "Utility", count: components.filter(c => c.category === "Utility").length },
]

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-xl text-muted-foreground">
          Reusable PayloadCMS blocks and components for your projects.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category.name} variant="secondary" className="text-sm">
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Available Components</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {components.map((component) => (
              <div key={component.slug} className="rounded-lg border p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{component.name}</h3>
                      {component.isNew && <Badge variant="default" className="bg-green-600">NEW</Badge>}
                    </div>
                    <Badge variant="outline">{component.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{component.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {component.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {component.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      <code>bunx payloadkit@latest add {component.slug}</code>
                    </div>
                  </div>
                  
                  {component.hasPage === false ? (
                    <Button size="sm" variant="outline" disabled>
                      Documentation Coming Soon
                    </Button>
                  ) : (
                    <Button asChild size="sm">
                      <Link href={component.isNew ? `/docs/blocks/${component.slug}` : `/docs/components/${component.slug}`}>
                        View Details <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Installation
          </h2>
          
          <p className="text-muted-foreground">
            To add any component to your project, use the PayloadKit CLI:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <Snippet command="bunx payloadkit@latest add [component-name]" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Components are copied directly into your project, giving you full control to customize them as needed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            After Installation
          </h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">1. Register the Block</h3>
              <p className="text-sm text-muted-foreground">
                Add the block to your PayloadCMS collections configuration:
              </p>
              <div className="mt-2 rounded border bg-muted/50 p-3">
                <pre className="text-sm">
{`// src/collections/Pages/index.ts
import { CallToAction } from '@/blocks/call-to-action'

export const Pages: CollectionConfig = {
  // ...
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        CallToAction,
        // ... other blocks
      ]
    }
  ]
}`}
                </pre>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">2. Add to RenderBlocks</h3>
              <p className="text-sm text-muted-foreground">
                Register the React component for frontend rendering:
              </p>
              <div className="mt-2 rounded border bg-muted/50 p-3">
                <pre className="text-sm">
{`// src/blocks/RenderBlocks.tsx
import { CallToActionBlock } from './call-to-action/Component'

const blockComponents = {
  cta: CallToActionBlock,
  // ... other components
}`}
                </pre>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">3. Generate Types</h3>
              <p className="text-sm text-muted-foreground">
                Update your PayloadCMS types after adding new blocks:
              </p>
              <div className="mt-2 rounded border bg-muted/50 p-3">
                <pre className="text-sm">
                  <code>npm run generate:types</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}