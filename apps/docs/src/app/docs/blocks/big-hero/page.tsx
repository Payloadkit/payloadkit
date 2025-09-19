import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Big Hero Block - PayloadKit',
  description: 'Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites.',
}

// Demo components
function BigHeroDefault() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to the Future
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Experience the next generation of technology with our innovative solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </div>
  )
}

function BigHeroVideo() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 flex items-center justify-center">
      {/* Simulated video background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 animate-pulse" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
          🎬 Video Background
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Cinematic Experience
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Full-screen video backgrounds with smooth overlays and professional controls
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Watch Demo
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

function BigHeroPositioning() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-bl from-green-900 via-teal-900 to-blue-900 flex items-start justify-start">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 space-y-6 max-w-2xl p-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
          📍 Left Positioning
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Flexible Content Positioning
        </h1>
        <p className="text-lg text-white/90">
          Position your content anywhere: center, left, right, top, or bottom. Perfect for asymmetric designs.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          Explore Options
        </Button>
      </div>
      <div className="absolute top-6 right-6 text-white/50 text-sm">
        5 position options available
      </div>
    </div>
  )
}

export default function BigHeroPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/blocks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blocks
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Big Hero Block"
        description="Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="advanced"
        estimatedTime="15 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Big Hero Block Preview"
        description="Interactive demonstration of advanced hero configurations with video, positioning, and animations."
        variants={[
          {
            name: "Default",
            description: "Full-screen hero with gradient background and call-to-action buttons.",
            component: <BigHeroDefault />
          },
          {
            name: "Video Background",
            description: "Cinematic hero with video background and overlay controls.",
            component: <BigHeroVideo />
          },
          {
            name: "Flexible Positioning",
            description: "Content positioned to the left with asymmetric design layout.",
            component: <BigHeroPositioning />
          }
        ]}
        code={{
          component: `// React Component Usage
import { BigHeroComponent } from './blocks/big-hero'

// Default Configuration
<BigHeroComponent
  title="Welcome to the Future"
  subtitle="Experience the next generation of technology"
  height="100vh"
  contentPosition="center"
  background={{
    type: 'gradient',
    gradientFrom: '#1e293b',
    gradientTo: '#0f172a',
    gradientDirection: 'to-br'
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

// Video Background Configuration
<BigHeroComponent
  title="Cinematic Experience"
  subtitle="Professional video backgrounds"
  height="100vh"
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
  enableAnimations={true}
  textColor="white"
/>

// Flexible Positioning
<BigHeroComponent
  title="Flexible Content Positioning"
  height="90vh"
  contentPosition="left-center"
  background={{
    type: 'image',
    image: '/hero-background.jpg'
  }}
  textColor="white"
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const BigHero: Block = {
  slug: 'big-hero',
  labels: {
    singular: 'Big Hero Block',
    plural: 'Big Hero Blocks'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle'
    },
    {
      name: 'height',
      type: 'select',
      label: 'Section Height',
      defaultValue: '100vh',
      options: [
        { label: 'Full Screen', value: '100vh' },
        { label: '90% Screen', value: '90vh' },
        { label: '80% Screen', value: '80vh' },
        { label: '70% Screen', value: '70vh' },
        { label: 'Auto', value: 'auto' }
      ]
    },
    {
      name: 'contentPosition',
      type: 'select',
      label: 'Content Position',
      defaultValue: 'center',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Top Center', value: 'top-center' },
        { label: 'Bottom Center', value: 'bottom-center' },
        { label: 'Left Center', value: 'left-center' },
        { label: 'Right Center', value: 'right-center' }
      ]
    },
    {
      name: 'background',
      type: 'group',
      label: 'Background',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'gradient',
          options: [
            { label: 'Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
            { label: 'None', value: 'none' }
          ]
        }
        // Additional background fields...
      ]
    }
  ]
}`,
          usage: `// Frontend Page Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function LandingPage({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// Block Rendering
import { BigHeroComponent } from './big-hero/Component'

const blockComponents = {
  'big-hero': BigHeroComponent
}

export function RenderBlocks({ blocks }) {
  return blocks?.map((block, index) => {
    const BlockComponent = blockComponents[block.blockType]
    if (!BlockComponent) return null

    return <BlockComponent key={index} {...block} />
  })
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Block',
            keyword: 'Install',
            description: 'Add Big Hero Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit add big-hero" title="Install via PayloadKit CLI">
                This will copy the Big Hero Block files and install required dependencies including video handling utilities.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`import { BigHero } from '@/blocks/big-hero'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            BigHero,
            // ... other blocks
          ]
        }
      ]
    }
  ]
})`}
                language="typescript"
                title="payload.config.ts"
              />
            )
          },
          {
            title: 'Render in Frontend',
            keyword: 'Implement',
            description: 'Use the component in your React application.',
            content: (
              <CodeBlock
                code={`import { BigHeroComponent } from '@/blocks/big-hero/Component'

// Full-screen hero with video background
<BigHeroComponent
  title="Welcome to Our Platform"
  subtitle="Experience the difference"
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
    opacity: 0.3
  }}
  textColor="white"
  titleSize="hero"
  showScrollIndicator={true}
/>`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Configure Video Assets',
            keyword: 'Optimize',
            description: 'Optimize video files for best performance.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Video optimization tips:</p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Use MP4 format with H.264 codec</li>
                  <li>Keep file size under 5MB for hero videos</li>
                  <li>Always provide a poster image</li>
                  <li>Consider CDN hosting for better performance</li>
                  <li>Test on different connection speeds</li>
                </ul>
              </div>
            ),
            optional: true
          }
        ]}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="API Reference"
        description="Complete props reference for the Big Hero Block component."
        props={[
          {
            name: 'title',
            type: 'string',
            description: 'Main hero title',
            required: true,
            example: 'title="Welcome to the Future"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Optional hero subtitle',
            required: false,
            example: 'subtitle="Experience innovation"'
          },
          {
            name: 'height',
            type: '"100vh" | "90vh" | "80vh" | "70vh" | "auto"',
            description: 'Section height relative to viewport',
            required: false,
            defaultValue: '"100vh"',
            example: 'height="100vh"'
          },
          {
            name: 'contentPosition',
            type: '"center" | "top-center" | "bottom-center" | "left-center" | "right-center"',
            description: 'Content positioning within the hero section',
            required: false,
            defaultValue: '"center"',
            example: 'contentPosition="center"'
          },
          {
            name: 'background',
            type: 'BackgroundConfig',
            description: 'Background configuration object',
            required: false,
            example: 'background={{ type: "video", videoUrl: "/video.mp4" }}'
          },
          {
            name: 'overlay',
            type: 'OverlayConfig',
            description: 'Background overlay settings',
            required: false,
            example: 'overlay={{ enabled: true, color: "#000", opacity: 0.4 }}'
          },
          {
            name: 'textColor',
            type: '"white" | "dark" | "primary"',
            description: 'Text color theme',
            required: false,
            defaultValue: '"white"',
            example: 'textColor="white"'
          },
          {
            name: 'titleSize',
            type: '"sm" | "md" | "lg" | "xl" | "hero"',
            description: 'Title font size variant',
            required: false,
            defaultValue: '"hero"',
            example: 'titleSize="hero"'
          },
          {
            name: 'enableAnimations',
            type: 'boolean',
            description: 'Enable entrance animations',
            required: false,
            defaultValue: 'true',
            example: 'enableAnimations={true}'
          },
          {
            name: 'showScrollIndicator',
            type: 'boolean',
            description: 'Show scroll indicator at bottom',
            required: false,
            defaultValue: 'true',
            example: 'showScrollIndicator={true}'
          },
          {
            name: 'callToActions',
            type: 'CallToAction[]',
            description: 'Array of action buttons (max 2)',
            required: false,
            example: 'callToActions={[{ label: "Get Started", url: "/start" }]}'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="BigHeroProps Interface"
          code={`interface BigHeroProps {
  title: string
  subtitle?: string
  description?: string
  height?: '100vh' | '90vh' | '80vh' | '70vh' | 'auto'
  contentPosition?: 'center' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center'
  background?: BackgroundConfig
  overlay?: OverlayConfig
  textColor?: 'white' | 'dark' | 'primary'
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  enableAnimations?: boolean
  showScrollIndicator?: boolean
  callToActions?: CallToAction[]
}

interface BackgroundConfig {
  type: 'color' | 'gradient' | 'image' | 'video' | 'none'
  color?: string
  gradientFrom?: string
  gradientTo?: string
  gradientDirection?: string
  image?: string | Media
  videoUrl?: string
  videoPoster?: string | Media
}

interface OverlayConfig {
  enabled: boolean
  color?: string
  opacity?: number
}

interface CallToAction {
  label: string
  url: string
  appearance?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  newTab?: boolean
}`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', 'framer-motion', 'next']}
        tags={['hero', 'video', 'fullscreen', 'animations', 'landing', 'marketing', 'cinematic']}
      />
    </div>
  )
}