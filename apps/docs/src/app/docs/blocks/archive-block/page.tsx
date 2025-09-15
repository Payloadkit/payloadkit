import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Database, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Archive Block',
  description: 'Display collections of content with filtering, sorting, and multiple layout options.',
}

const features = [
  'Two population modes: collection query or manual selection',
  'Support for multiple collections (posts, pages, projects, products)',
  'Category filtering and sorting options',
  '5 layout options: 2-col, 3-col, 4-col grid, list, and masonry',
  'Configurable content display: images, excerpts, dates, authors, categories',
  'Responsive design with hover effects and smooth transitions',
  'Background support (color, gradient, image)',
  'SEO-friendly with proper semantic HTML',
  'Flexible spacing controls',
  'Empty state handling with helpful messages'
]

export default function ArchiveBlockPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/docs/blocks" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blocks
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Archive Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Content</Badge>
              <Badge className="bg-green-600">v0.1.0</Badge>
              <Badge variant="default" className="bg-green-600">NEW</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Display collections of content with filtering, sorting, and multiple layout options. Perfect for blog archives, portfolio galleries, product listings, or any content collection display.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <Tabs defaultValue="cli" className="w-full">
          <TabsList>
            <TabsTrigger value="cli">PayloadKit CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="cli" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install with PayloadKit CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add archive-block</code>
                </pre>
                <CopyButton
                  text="payloadkit add archive-block"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { ArchiveBlock } from '@/blocks/archive-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            ArchiveBlock,
            // ... other blocks
          ]
        }
      ]
    }
  ]
})`}</code>
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This block requires the blocks-shared dependency. Make sure to install it first.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Dependencies</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>npm install react next lucide-react</code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Registry Dependencies</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>payloadkit add blocks-shared</code>
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Configuration Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration Options</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Population</CardTitle>
              <CardDescription>How to populate the archive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Collection Query:</strong> Automatically fetch from collections</div>
              <div><strong>Manual Selection:</strong> Hand-pick specific content items</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Layout Options</CardTitle>
              <CardDescription>5 different layout configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Grid Layouts:</strong> 2-col, 3-col, 4-col</div>
              <div><strong>List Layout:</strong> Single column with horizontal cards</div>
              <div><strong>Masonry:</strong> Pinterest-style staggered grid</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Display Options</CardTitle>
              <CardDescription>Control what content is shown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Images:</strong> Featured images with hover effects</div>
              <div><strong>Meta Info:</strong> Dates, authors, categories</div>
              <div><strong>Excerpts:</strong> Content previews with rich text</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Background & Styling</CardTitle>
              <CardDescription>Visual customization options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Backgrounds:</strong> Color, gradient, image</div>
              <div><strong>Spacing:</strong> Configurable padding controls</div>
              <div><strong>Theme:</strong> shadcn/ui integration</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Examples</h2>
        <Tabs defaultValue="blog" className="w-full">
          <TabsList>
            <TabsTrigger value="blog">Blog Archive</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="blog" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Blog Posts Archive</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<ArchiveBlockComponent
  title="Latest Posts"
  populateBy="collection"
  relationTo="posts"
  limit={9}
  layout="grid-3"
  showImage={true}
  showExcerpt={true}
  showDate={true}
  showCategories={true}
  sortBy="-publishedAt"
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Portfolio Gallery</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<ArchiveBlockComponent
  title="Featured Work"
  populateBy="collection"
  relationTo="projects"
  layout="masonry"
  showImage={true}
  showExcerpt={false}
  showDate={false}
  showCategories={true}
  background={{ type: 'color', color: '#f8fafc' }}
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Product Catalog</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<ArchiveBlockComponent
  title="Our Products"
  populateBy="selection"
  selectedDocs={featuredProducts}
  layout="grid-4"
  showImage={true}
  showExcerpt={true}
  showDate={false}
  showCategories={false}
/>`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Related Components</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Blocks Shared</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-2">Required dependency</p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/components/blocks-shared">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Feature Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-2">Showcase features</p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/feature-block">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Banner Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-2">Hero banners</p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/banner-block">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}