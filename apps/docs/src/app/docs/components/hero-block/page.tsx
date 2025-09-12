import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function HeroBlockComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Hero Block</h1>
        <p className="text-xl text-muted-foreground">
          A flexible hero section with title, subtitle, description and CTA buttons.
        </p>
        <div className="flex gap-2">
          <Badge>Hero</Badge>
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
              <code>npx payloadkit add hero-block</code>
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Preview
          </h2>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="relative container mx-auto px-4 py-16 text-center">
                <p className="text-lg font-medium text-blue-100 mb-4">
                  Welcome to PayloadKit
                </p>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Build Faster with PayloadCMS
                </h1>
                
                <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                  Get your PayloadCMS project up and running in minutes with pre-built components and templates.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    View Docs
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
                <strong>Flexible Text Content</strong>
                <p className="text-sm text-muted-foreground">Title, subtitle, and description fields</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Background Image</strong>
                <p className="text-sm text-muted-foreground">Optional background image with overlay</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>CTA Buttons</strong>
                <p className="text-sm text-muted-foreground">Up to 3 customizable call-to-action buttons</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Button Styles</strong>
                <p className="text-sm text-muted-foreground">Primary and secondary button variants</p>
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
                <strong>Gradient Background</strong>
                <p className="text-sm text-muted-foreground">Built-in gradient with customizable colors</p>
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
import { HeroBlock } from '@/blocks/hero-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
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
import { HeroBlock } from './hero-block/Component'

const blockComponents = {
  hero: HeroBlock,
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
              <h3 className="font-medium mb-2">Text Content</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Control all text elements of the hero section:
              </p>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• <strong>Subtitle:</strong> Small text above the main title</li>
                <li>• <strong>Title:</strong> Main hero title (required)</li>
                <li>• <strong>Description:</strong> Text below the title</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Background Image</h3>
              <p className="text-sm text-muted-foreground">
                Optional background image upload with automatic dark overlay for better text readability.
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Call-to-Action Buttons</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Array of up to 3 CTA buttons, each with:
              </p>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• <strong>Label:</strong> Button text (required)</li>
                <li>• <strong>URL:</strong> Link destination (required)</li>
                <li>• <strong>Style:</strong> Primary or secondary button style</li>
              </ul>
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
                <li>• TailwindCSS (for styling)</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Optional Dependencies</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Media collection (for background images)</li>
                <li>• Custom CSS classes (for theme customization)</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            This component uses standard HTML and TailwindCSS classes. You can customize the gradient colors and styles by modifying the component after installation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Customization
          </h2>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <h3 className="font-medium mb-2">Custom Gradient Colors</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To change the gradient colors, modify the className in Component.tsx:
            </p>
            <pre className="bg-background p-3 rounded border text-sm">
{`// Replace this:
className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white"

// With your custom colors:
className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white"`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}