import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function ContentComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Content Block</h1>
        <p className="text-xl text-muted-foreground">
          Rich content block with flexible column layouts and rich text editor.
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
              <code>npx payloadkit add content</code>
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
                <strong>Flexible Columns</strong>
                <p className="text-sm text-muted-foreground">1/3, 1/2, 2/3, full width options</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Rich Text Editor</strong>
                <p className="text-sm text-muted-foreground">Full Lexical editor support</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Optional Links</strong>
                <p className="text-sm text-muted-foreground">Add links to individual columns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Up to 4 Columns</strong>
                <p className="text-sm text-muted-foreground">Flexible multi-column layouts</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}