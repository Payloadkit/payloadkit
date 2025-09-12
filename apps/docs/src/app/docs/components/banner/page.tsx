import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function BannerComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Banner Block</h1>
        <p className="text-xl text-muted-foreground">
          A prominent banner section with title, description, background options and call-to-action buttons.
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
              <code>npx payloadkit add banner</code>
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Preview
          </h2>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="relative bg-primary text-white">
              <div className="relative container mx-auto px-4 py-16 text-center">
                <p className="text-sm font-medium text-blue-100 mb-2 uppercase tracking-wide">
                  New Product Launch
                </p>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Introducing PayloadKit
                </h1>
                
                <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                  The fastest way to build with PayloadCMS. Get pre-built components and blocks ready to use.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Learn More
                  </Button>
                </div>
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
                <strong>Flexible Content</strong>
                <p className="text-sm text-muted-foreground">Eyebrow, title, and description fields</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Multiple CTAs</strong>
                <p className="text-sm text-muted-foreground">Up to 2 call-to-action buttons</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Background Options</strong>
                <p className="text-sm text-muted-foreground">Multiple background color themes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Text Alignment</strong>
                <p className="text-sm text-muted-foreground">Left, center, or right alignment</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Height Options</strong>
                <p className="text-sm text-muted-foreground">Auto, small, medium, large heights</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Custom HTML</strong>
                <p className="text-sm text-muted-foreground">Custom ID and CSS classes support</p>
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
import { BannerBlock } from '@/blocks/banner'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        BannerBlock,
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
import { BannerBlock } from './banner/Component'

const blockComponents = {
  banner: BannerBlock,
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
              <h3 className="font-medium mb-2">Content Fields</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• <strong>Eyebrow:</strong> Small text above the title</li>
                <li>• <strong>Title:</strong> Main banner title (required)</li>
                <li>• <strong>Description:</strong> Descriptive text below the title</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Call to Actions</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• <strong>Text:</strong> Button text (required)</li>
                <li>• <strong>URL:</strong> Link destination (required)</li>
                <li>• <strong>Appearance:</strong> Default or outline style</li>
                <li>• <strong>New Tab:</strong> Open link in new tab option</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Layout & Styling</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• <strong>Background:</strong> Transparent, white, gray variants, primary, secondary</li>
                <li>• <strong>Alignment:</strong> Left, center, right text alignment</li>
                <li>• <strong>Height:</strong> Auto, small, medium, large section heights</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}