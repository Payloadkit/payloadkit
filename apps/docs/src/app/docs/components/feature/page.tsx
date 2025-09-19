import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { Snippet } from '@/components/snippet'

export default function FeatureComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Feature Block</h1>
        <p className="text-xl text-muted-foreground">
          Feature showcase block with icons, titles, descriptions and customizable grid layout.
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
            <Snippet command="bunx payloadkit@latest add feature-block" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Preview
          </h2>
          
          <div className="rounded-lg border overflow-hidden bg-white">
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  Why Choose Us
                </p>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Powerful Features
                </h2>
                
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to build amazing experiences with PayloadCMS.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4 text-blue-600">
                    ⚡
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Fast Setup
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get your project running in minutes with our pre-built components.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4 text-blue-600">
                    🛡️
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Secure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Built with security best practices and regular updates.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4 text-blue-600">
                    ⚙️
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Customizable
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Easily customize and extend to match your brand and needs.
                  </p>
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
                <strong>Grid Layouts</strong>
                <p className="text-sm text-muted-foreground">2, 3, 4 columns or vertical list</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Icon Library</strong>
                <p className="text-sm text-muted-foreground">10+ built-in icons with color options</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Optional Links</strong>
                <p className="text-sm text-muted-foreground">Add links to individual features</p>
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
                <strong>Up to 6 Features</strong>
                <p className="text-sm text-muted-foreground">Configurable feature limit</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</div>
              <div>
                <strong>Background Options</strong>
                <p className="text-sm text-muted-foreground">Multiple background themes</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Available Icons
          </h2>
          
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-4">
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
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xs text-muted-foreground">target</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💡</div>
              <div className="text-xs text-muted-foreground">lightbulb</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs text-muted-foreground">trophy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">👥</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
          </div>
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
import { FeatureBlock } from '@/blocks/feature-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        FeatureBlock,
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
import { FeatureBlock } from './feature-block/Component'

const blockComponents = {
  'feature-block': FeatureBlock,
  // ... other blocks
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}