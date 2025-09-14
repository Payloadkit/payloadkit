import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const components = [
  {
    name: "Banner",
    slug: "banner",
    description: "A dynamic banner block with image background and overlay content",
    category: "Hero",
    tags: ["banner", "hero", "image"],
    status: "ready",
  },
  {
    name: "Call to Action",
    slug: "call-to-action",
    description: "A versatile call-to-action block with rich text content and customizable buttons",
    category: "Marketing",
    tags: ["cta", "buttons", "conversion"],
    status: "ready",
  },
  {
    name: "Content",
    slug: "content",
    description: "A flexible content block for rich text and structured content",
    category: "Content",
    tags: ["content", "rich-text", "text"],
    status: "ready",
  },
  {
    name: "FAQ",
    slug: "faq",
    description: "Frequently Asked Questions block with expandable accordion interface",
    category: "Content",
    tags: ["faq", "accordion", "questions"],
    status: "ready",
  },
  {
    name: "Feature",
    slug: "feature",
    description: "Feature showcase block with icons, titles and descriptions",
    category: "Marketing",
    tags: ["features", "showcase", "benefits"],
    status: "ready",
  },
  {
    name: "Hero Block",
    slug: "hero-block",
    description: "A flexible hero section with title, subtitle, description and CTA buttons",
    category: "Hero",
    tags: ["hero", "banner", "landing"],
    status: "ready",
  },
  {
    name: "Icon Block",
    slug: "icon-block",
    description: "Icon-based content blocks for visual storytelling",
    category: "Content",
    tags: ["icons", "visual", "content"],
    status: "ready",
  },
  {
    name: "Media Block",
    slug: "media-block",
    description: "Media-rich content blocks with images, videos and captions",
    category: "Content",
    tags: ["media", "images", "videos"],
    status: "ready",
  },
  {
    name: "Text Block",
    slug: "text-block",
    description: "Simple text content blocks for paragraphs and formatted text",
    category: "Content",
    tags: ["text", "paragraph", "simple"],
    status: "ready",
  },
  {
    name: "AuthProvider",
    slug: "auth-provider",
    description: "Authentication provider component for Better Auth integration",
    category: "Auth",
    tags: ["auth", "provider", "authentication"],
    status: "ready",
  },
  {
    name: "AuthView",
    slug: "auth-view",
    description: "Authentication views and forms for login, signup and user management",
    category: "Auth",
    tags: ["auth", "forms", "login"],
    status: "ready",
  },
]

const categories = [
  { name: "All", count: components.length },
  { name: "Hero", count: components.filter(c => c.category === "Hero").length },
  { name: "Content", count: components.filter(c => c.category === "Content").length },
  { name: "Marketing", count: components.filter(c => c.category === "Marketing").length },
  { name: "Auth", count: components.filter(c => c.category === "Auth").length },
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
                    <h3 className="text-xl font-semibold">{component.name}</h3>
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
                      <code>npx payloadkit add {component.slug}</code>
                    </div>
                  </div>
                  
                  <Button asChild size="sm">
                    <Link href={`/docs/components/${component.slug}`}>
                      View Details <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
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
            <pre className="bg-background p-3 rounded border">
              <code>npx payloadkit add [component-name]</code>
            </pre>
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