import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Zap, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Banner Block',
  description: 'Hero banner block with customizable backgrounds, text alignment, and call-to-action buttons.',
}

const features = [
  'Flexible text content: eyebrow, title, subtitle, rich text description',
  'Two eyebrow styles: simple text or badge style',
  'Three text alignment options: center, left, right',
  'Three text color themes: light, dark, primary',
  'Three background types: solid color, gradient, image with overlay',
  'Up to 3 call-to-action buttons with multiple styles and sizes',
  'Five height options: auto, small (50vh), medium (60vh), large (75vh), full screen',
  'Responsive design with proper spacing controls',
  'Button styles adapt to banner text color theme for optimal contrast',
  'Gradient direction control with 8 different options'
]

export default function BannerBlockPage() {
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
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Banner Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Hero</Badge>
              <Badge className="bg-green-600">v0.1.0</Badge>
              <Badge variant="default" className="bg-green-600">NEW</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Hero banner block with customizable backgrounds, text alignment, and call-to-action buttons. Perfect for hero sections, landing page headers, promotional banners, and call-to-action sections.
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
                  <code>payloadkit add banner-block</code>
                </pre>
                <CopyButton
                  text="payloadkit add banner-block"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { BannerBlock } from '@/blocks/banner-block'

export default buildConfig({
  collections: [
    {
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
                    <code>npm install react next tailwindcss</code>
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
              <CardTitle className="text-lg">Text Content</CardTitle>
              <CardDescription>Flexible text elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Eyebrow:</strong> Optional text above title (text or badge style)</div>
              <div><strong>Title:</strong> Main heading (required)</div>
              <div><strong>Subtitle:</strong> Optional subtitle below title</div>
              <div><strong>Description:</strong> Rich text content</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Layout & Styling</CardTitle>
              <CardDescription>Text alignment and color options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Alignment:</strong> Center, left, or right</div>
              <div><strong>Text Color:</strong> Light, dark, or primary theme</div>
              <div><strong>Height:</strong> Auto, small, medium, large, or full screen</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Background Options</CardTitle>
              <CardDescription>Visual customization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Solid Color:</strong> Single color background</div>
              <div><strong>Gradient:</strong> 8 directions with custom colors</div>
              <div><strong>Image:</strong> Background image with overlay options</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Call-to-Action</CardTitle>
              <CardDescription>Interactive buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Styles:</strong> Primary, secondary, ghost</div>
              <div><strong>Sizes:</strong> Small, medium, large</div>
              <div><strong>Up to 3 CTAs:</strong> Multiple action buttons</div>
              <div><strong>Auto-contrast:</strong> Styles adapt to text color</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Examples</h2>
        <Tabs defaultValue="hero" className="w-full">
          <TabsList>
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="promo">Promotional Banner</TabsTrigger>
            <TabsTrigger value="cta">Call-to-Action</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Hero Section with Gradient</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BannerBlockComponent
  eyebrow="Welcome to"
  eyebrowStyle="badge"
  title="Your Amazing Product"
  subtitle="The best solution for your business"
  description="Detailed description of what makes your product special..."
  textAlignment="center"
  textColor="light"
  background={{
    type: 'gradient',
    gradientFrom: '#3b82f6',
    gradientTo: '#1d4ed8',
    gradientDirection: 'to-br'
  }}
  callToActions={[
    { label: 'Get Started', url: '/signup', style: 'primary', size: 'lg' },
    { label: 'Learn More', url: '/about', style: 'secondary', size: 'lg' }
  ]}
  height="large"
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="promo" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Promotional Banner with Image</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BannerBlockComponent
  eyebrow="Limited Time Offer"
  eyebrowStyle="text"
  title="50% Off All Products"
  subtitle="Sale ends this weekend!"
  textAlignment="left"
  textColor="light"
  background={{
    type: 'image',
    image: '/promo-background.jpg',
    overlay: true,
    overlayOpacity: '50'
  }}
  callToActions={[
    { label: 'Shop Now', url: '/shop', style: 'primary', size: 'md' }
  ]}
  height="medium"
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="cta" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Simple Call-to-Action</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BannerBlockComponent
  title="Ready to get started?"
  description="Join thousands of satisfied customers today."
  textAlignment="center"
  textColor="dark"
  background={{
    type: 'color',
    color: '#f8fafc'
  }}
  callToActions={[
    { label: 'Start Free Trial', url: '/trial', style: 'primary', size: 'lg' },
    { label: 'Contact Sales', url: '/contact', style: 'ghost', size: 'lg' }
  ]}
  height="auto"
  paddingTop="xl"
  paddingBottom="xl"
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
              <CardTitle className="text-sm">Hero Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-2">Alternative hero</p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/components/hero-block">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Call to Action</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-2">Conversion blocks</p>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/components/call-to-action">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}