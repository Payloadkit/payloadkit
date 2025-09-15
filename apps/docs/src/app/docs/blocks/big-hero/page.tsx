import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Monitor, Check, AlertTriangle, Info } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Big Hero Block',
  description: 'Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites.',
}

const features = [
  '5 viewport height options: 100vh, 90vh, 80vh, 70vh, auto',
  '5 content positioning options: center, top-center, bottom-center, left-center, right-center',
  '5 background types: color, gradient, image, video, none',
  'Video background support with poster image fallback',
  'Background overlay with customizable color and opacity',
  '3 text color themes: white, dark, primary',
  '5 title size options: sm, md, lg, xl, hero',
  'Parallax scrolling effect for background elements',
  'Smooth scroll indicator with bounce animation',
  'Up to 2 customizable call-to-action buttons'
]

export default function BigHeroPage() {
  const codeExample = `// components/BigHero.tsx
import { BigHeroComponent } from './blocks/big-hero'

export function BigHero() {
  return (
    <BigHeroComponent
      title="Welcome to the Future"
      subtitle="Experience the next generation of technology"
      height="100vh"
      contentPosition="center"
      background={{
        type: 'video',
        videoUrl: '/hero-video.mp4',
        videoPoster: '/hero-poster.jpg'
      }}
      overlay={{
        enabled: true,
        color: '#000000',
        opacity: 0.4
      }}
      textColor="white"
      titleSize="hero"
      showScrollIndicator={true}
      callToActions={[
        {
          label: 'Get Started',
          url: '/signup',
          appearance: 'primary',
          size: 'lg'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'lg'
        }
      ]}
    />
  )
}`

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/blocks">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blocks
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Monitor className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Big Hero Block</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Hero</Badge>
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="secondary">New</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites.
        </p>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Add the Big Hero block to your PayloadCMS project using the PayloadKit CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install via CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add big-hero</code>
                </pre>
                <CopyButton text="payloadkit add big-hero" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Add to your PayloadCMS config</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { BigHero } from './blocks/big-hero'

export default buildConfig({
  // ... other config
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [BigHero], // Add here
        },
      ],
    },
  ],
})`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            Everything included with the Big Hero Block component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">PayloadCMS Configuration</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// payload.config.ts
import { BigHero } from './blocks/big-hero'

export default buildConfig({
  // ... other config
  blocks: [
    BigHero,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { BigHero } from './blocks/big-hero'

export default buildConfig({
  // ... other config
  blocks: [
    BigHero,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Frontend Component</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/BigHero.tsx
import { BigHeroComponent } from './blocks/big-hero'

export function BigHero() {
  return (
    <BigHeroComponent
      title="Welcome to the Future"
      subtitle="Experience the next generation of technology"
      height="100vh"
      contentPosition="center"
      background={{
        type: 'video',
        videoUrl: '/hero-video.mp4',
        videoPoster: '/hero-poster.jpg'
      }}
      overlay={{
        enabled: true,
        color: '#000000',
        opacity: 0.4
      }}
      textColor="white"
      titleSize="hero"
      showScrollIndicator={true}
      callToActions={[
        {
          label: 'Get Started',
          url: '/signup',
          appearance: 'primary',
          size: 'lg'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'lg'
        }
      ]}
    />
  )
}`}</code>
            </pre>
            <CopyButton text={`// components/BigHero.tsx
import { BigHeroComponent } from './blocks/big-hero'

export function BigHero() {
  return (
    <BigHeroComponent
      title="Welcome to the Future"
      subtitle="Experience the next generation of technology"
      height="100vh"
      contentPosition="center"
      background={{
        type: 'video',
        videoUrl: '/hero-video.mp4',
        videoPoster: '/hero-poster.jpg'
      }}
      overlay={{
        enabled: true,
        color: '#000000',
        opacity: 0.4
      }}
      textColor="white"
      titleSize="hero"
      showScrollIndicator={true}
      callToActions={[
        {
          label: 'Get Started',
          url: '/signup',
          appearance: 'primary',
          size: 'lg'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'lg'
        }
      ]}
    />
  )
}`} />
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-4 py-2 text-left">Prop</th>
                <th className="border border-border px-4 py-2 text-left">Type</th>
                <th className="border border-border px-4 py-2 text-left">Default</th>
                <th className="border border-border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">height</td>
                <td className="border border-border px-4 py-2 text-sm">'100vh' | '90vh' | '80vh' | '70vh' | 'auto'</td>
                <td className="border border-border px-4 py-2 text-sm">'100vh'</td>
                <td className="border border-border px-4 py-2 text-sm">Section height</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">contentPosition</td>
                <td className="border border-border px-4 py-2 text-sm">'center' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center'</td>
                <td className="border border-border px-4 py-2 text-sm">'center'</td>
                <td className="border border-border px-4 py-2 text-sm">Content positioning</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">background</td>
                <td className="border border-border px-4 py-2 text-sm">BackgroundConfig</td>
                <td className="border border-border px-4 py-2 text-sm">gradient</td>
                <td className="border border-border px-4 py-2 text-sm">Background configuration</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">textColor</td>
                <td className="border border-border px-4 py-2 text-sm">'white' | 'dark' | 'primary'</td>
                <td className="border border-border px-4 py-2 text-sm">'white'</td>
                <td className="border border-border px-4 py-2 text-sm">Text color theme</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">titleSize</td>
                <td className="border border-border px-4 py-2 text-sm">'sm' | 'md' | 'lg' | 'xl' | 'hero'</td>
                <td className="border border-border px-4 py-2 text-sm">'hero'</td>
                <td className="border border-border px-4 py-2 text-sm">Title font size</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">enableAnimations</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Enable entrance animations</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">showScrollIndicator</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Show scroll indicator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Background Types */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Background Types</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Video Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'video',
  videoUrl: '/path/to/video.mp4',
  videoPoster: '/path/to/poster.jpg'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'video',
  videoUrl: '/path/to/video.mp4',
  videoPoster: '/path/to/poster.jpg'
}`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Gradient Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'gradient',
  gradientFrom: '#1e293b',
  gradientTo: '#0f172a',
  gradientDirection: 'to-br'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'gradient',
  gradientFrom: '#1e293b',
  gradientTo: '#0f172a',
  gradientDirection: 'to-br'
}`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Image Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'image',
  image: '/path/to/background.jpg'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'image',
  image: '/path/to/background.jpg'
}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Video Optimization Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video Optimization Tips</h2>
        <div className="space-y-3">
          <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md dark:border-yellow-800 dark:bg-yellow-900/20">
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Performance Best Practices</h3>
            <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• Use MP4 format for best browser compatibility</li>
              <li>• Optimize video file size (aim for under 5MB for hero videos)</li>
              <li>• Use H.264 codec with a moderate bitrate</li>
              <li>• Always provide a poster image for faster initial load</li>
              <li>• Consider hosting videos on a CDN for better performance</li>
              <li>• Test video loading on different connection speeds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}