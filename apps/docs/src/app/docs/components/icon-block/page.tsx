import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export default function IconBlockComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Icon Block</h1>
        <p className="text-xl text-muted-foreground">
          Icon-based content block with customizable icon, title and description.
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
              <code>npx payloadkit add icon-block</code>
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
                <strong>Icon Library</strong>
                <p className="text-sm text-muted-foreground">13+ built-in icons available</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Color Options</strong>
                <p className="text-sm text-muted-foreground">Primary, secondary, success, warning colors</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Size Control</strong>
                <p className="text-sm text-muted-foreground">Small, medium, large icon sizes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Text Alignment</strong>
                <p className="text-sm text-muted-foreground">Left, center, right alignment</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Available Icons
          </h2>
          
          <div className="grid grid-cols-6 sm:grid-cols-13 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-xs text-muted-foreground">star</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-xs text-muted-foreground">zap</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🛡️</div>
              <div className="text-xs text-muted-foreground">shield</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">❤️</div>
              <div className="text-xs text-muted-foreground">heart</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚙️</div>
              <div className="text-xs text-muted-foreground">settings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-xs text-muted-foreground">chart</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-xs text-muted-foreground">check</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚠️</div>
              <div className="text-xs text-muted-foreground">warning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">ℹ️</div>
              <div className="text-xs text-muted-foreground">info</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}