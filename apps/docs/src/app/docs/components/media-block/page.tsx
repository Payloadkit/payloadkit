import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function MediaBlockComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Media Block</h1>
        <p className="text-xl text-muted-foreground">
          Simple media display block for images and videos with optional caption.
        </p>
        <div className="flex gap-2">
          <Badge>Content</Badge>
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
              <code>npx payloadkit add media-block</code>
            </pre>
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
                <strong>Image & Video Support</strong>
                <p className="text-sm text-muted-foreground">Supports all media types</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Optional Caption</strong>
                <p className="text-sm text-muted-foreground">Add descriptive text below media</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Size Options</strong>
                <p className="text-sm text-muted-foreground">Small, medium, large, full width</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Alignment Control</strong>
                <p className="text-sm text-muted-foreground">Left, center, right alignment</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Usage
          </h2>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border text-sm">
{`// src/collections/Pages/index.ts
import { MediaBlock } from '@/blocks/media-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        MediaBlock,
        // ... other blocks
      ]
    }
  ]
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}