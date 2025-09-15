import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Box, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Blocks Shared',
  description: 'Shared components and utilities for PayloadCMS blocks including backgrounds, layouts, headings, and theme integration.',
}

const components = [
  'BlockBackground - Smart background component supporting color, gradient, and image backgrounds',
  'BlockSection - Container component with configurable padding and responsive design',
  'BlockLayout - Flexible layout component supporting grid, list, and masonry layouts',
  'BlockHeading - Typography component with consistent heading styles and alignment',
  'BlockText - Rich text rendering component with prose styling and size variations',
  'useThemeColor - Hook for accessing theme colors and CSS variables'
]

export default function BlocksSharedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/docs/components" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Components
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Box className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Blocks Shared</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Utility</Badge>
              <Badge className="bg-green-600">v0.1.0</Badge>
              <Badge variant="default" className="bg-green-600">NEW</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Shared components and utilities for PayloadCMS blocks including backgrounds, layouts, headings, and theme integration. Required dependency for all advanced blocks.
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
                  <code>payloadkit add blocks-shared</code>
                </pre>
                <CopyButton
                  text="payloadkit add blocks-shared"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Import in your blocks</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
  useThemeColor
} from '../blocks-shared'`}</code>
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dependencies</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>npm install react tailwindcss</code>
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Included Components</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {components.map((component, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{component}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Component Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockBackground</CardTitle>
              <CardDescription>Smart background rendering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Color:</strong> Solid color backgrounds</div>
              <div><strong>Gradient:</strong> Linear gradients with direction control</div>
              <div><strong>Image:</strong> Background images with overlay options</div>
              <div><strong>Responsive:</strong> Mobile-first approach</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockSection</CardTitle>
              <CardDescription>Container with padding controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Padding:</strong> Top/bottom spacing control</div>
              <div><strong>Container:</strong> Max-width with responsive margins</div>
              <div><strong>Customizable:</strong> Additional CSS classes</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockLayout</CardTitle>
              <CardDescription>Flexible grid and list layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Grid:</strong> 1-6 column responsive grids</div>
              <div><strong>List:</strong> Single column layouts</div>
              <div><strong>Masonry:</strong> Pinterest-style staggered grids</div>
              <div><strong>Gap Control:</strong> Configurable spacing</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockHeading & BlockText</CardTitle>
              <CardDescription>Typography components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Headings:</strong> H1-H6 with consistent styling</div>
              <div><strong>Text:</strong> Rich text with prose styling</div>
              <div><strong>Alignment:</strong> Left, center, right options</div>
              <div><strong>Sizes:</strong> Multiple size variants</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Examples</h2>
        <Tabs defaultValue="background" className="w-full">
          <TabsList>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>

          <TabsContent value="background" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Block with Gradient Background</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockBackground background={{
  type: 'gradient',
  gradientFrom: '#3b82f6',
  gradientTo: '#1d4ed8',
  gradientDirection: 'to-br'
}}>
  <BlockSection paddingTop="xl" paddingBottom="xl">
    <BlockHeading text="Your Content Here" level="h2" />
  </BlockSection>
</BlockBackground>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">3-Column Grid Layout</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockLayout layout="grid-3" gap="lg" equalHeight={true}>
  {items.map((item, index) => (
    <div key={index} className="p-6 bg-white rounded-lg">
      <BlockHeading text={item.title} level="h3" />
      <BlockText richText={item.content} size="sm" />
    </div>
  ))}
</BlockLayout>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Typography Components</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockHeading
  text="Main Title"
  level="h1"
  align="center"
  className="mb-6"
/>

<BlockText
  richText={description}
  size="lg"
  align="center"
  prose={true}
  className="text-muted-foreground"
/>`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Used By */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Used By</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Feature Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/feature-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">FAQ Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/faq-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Archive Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/archive-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Banner Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/banner-block">View</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}