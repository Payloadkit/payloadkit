import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function CallToActionComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Call to Action</h1>
        <p className="text-xl text-muted-foreground">
          A versatile call-to-action block with rich text content and customizable buttons.
        </p>
        <div className="flex gap-2">
          <Badge>Marketing</Badge>
          <Badge variant="secondary">Block</Badge>
        </div>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Installation
          </h2>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Install with PayloadKit CLI</span>
              <Button size="sm" variant="outline">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <pre className="bg-background p-3 rounded border">
              <code>npx payloadkit add call-to-action</code>
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Preview
          </h2>
          
          <div className="rounded-lg border p-8 bg-muted/20">
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
              <div className="max-w-[48rem] flex items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
                  <p className="text-muted-foreground text-lg">
                    Join thousands of developers building amazing PayloadCMS applications with PayloadKit.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Features
          </h2>
          
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Rich Text Content</strong>
                <p className="text-sm text-muted-foreground">Supports full rich text editing with Lexical editor</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Multiple CTAs</strong>
                <p className="text-sm text-muted-foreground">Support for up to 2 call-to-action buttons</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Flexible Links</strong>
                <p className="text-sm text-muted-foreground">Internal references or custom URLs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Button Styles</strong>
                <p className="text-sm text-muted-foreground">Default and outline appearance options</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Responsive Design</strong>
                <p className="text-sm text-muted-foreground">Mobile-first responsive layout</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Customizable Height</strong>
                <p className="text-sm text-muted-foreground">Control section vertical spacing</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Usage
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Register in PayloadCMS Config</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/collections/Pages/index.ts
import { CallToAction } from '@/blocks/call-to-action'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Add to RenderBlocks Component</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/blocks/RenderBlocks.tsx
import { CallToActionBlock } from './call-to-action/Component'

const blockComponents = {
  cta: CallToActionBlock,
  // ... other blocks
}

export function RenderBlocks({ blocks }: { blocks: any[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockComponents[block.blockType]
        if (Component) {
          return <Component key={i} {...block} />
        }
        return null
      })}
    </>
  )
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Configuration Options
          </h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Rich Text Content</h3>
              <p className="text-sm text-muted-foreground">
                Main content area with full Lexical editor support including headings (H1-H4), inline toolbar, and fixed toolbar features.
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Call-to-Action Links</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Array of up to 2 CTA buttons, each with:
              </p>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Link type (internal reference or custom URL)</li>
                <li>• Custom label text</li>
                <li>• Button appearance (default or outline)</li>
                <li>• Optional new tab behavior for external links</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Section Height</h3>
              <p className="text-sm text-muted-foreground">
                Control vertical spacing with options: Auto, Small, Medium, Large, Extra Large
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Dependencies
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Required Dependencies</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• React 18+</li>
                <li>• PayloadCMS 3.0+</li>
                <li>• @payloadcms/richtext-lexical</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Required Components</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• RichText component</li>
                <li>• CMSLink component</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            These components should be available in your project. They're typically found in <code>@/components/RichText</code> and <code>@/components/Link</code>.
          </p>
        </section>
      </div>
    </div>
  )
}