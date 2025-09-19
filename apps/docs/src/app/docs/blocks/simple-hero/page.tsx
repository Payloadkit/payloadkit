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
  title: 'Simple Hero Block - PayloadKit',
  description: 'Clean and minimalist hero section with flexible layouts, perfect for landing pages, portfolios, and content-focused websites. Emphasizes simplicity and readability.',
}

// Demo components
function SimpleHeroCentered() {
  return (
    <div className="p-8 lg:p-12 border rounded-lg bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          ✨ Welcome
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
          Clean, Simple, Effective
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Beautiful hero sections without the complexity. Perfect for content-focused websites that prioritize readability and user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

function SimpleHeroSplit() {
  return (
    <div className="p-6 lg:p-8 border rounded-lg bg-background">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            🚀 Innovation
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Powerful Features, Simple Design
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to build exceptional user experiences. No complexity, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Features
            </Button>
            <Button size="lg" variant="ghost">
              View Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl">
            <div className="absolute inset-4 bg-white/10 rounded border border-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-sm font-medium">Feature Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SimpleHeroLeft() {
  return (
    <div className="p-8 lg:p-12 border rounded-lg bg-background">
      <div className="max-w-6xl space-y-8">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
          🎯 Focus
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Start Your Journey Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Left-aligned layout perfect for landing pages and content-heavy applications. Emphasizes the call-to-action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Begin Now
            </Button>
            <Button size="lg" variant="outline">
              Read Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SimpleHeroPage() {
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
        title="Simple Hero Block"
        description="Clean and minimalist hero section with flexible layouts, perfect for landing pages, portfolios, and content-focused websites. Emphasizes simplicity and readability."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="6 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Simple Hero Block Preview"
        description="Interactive demonstration of clean, minimalist hero layouts focused on content and readability."
        variants={[
          {
            name: "Centered",
            description: "Classic centered layout perfect for landing pages and announcements.",
            component: <SimpleHeroCentered />
          },
          {
            name: "Split Layout",
            description: "Content and image side-by-side for feature showcasing and product demos.",
            component: <SimpleHeroSplit />
          },
          {
            name: "Left-Aligned",
            description: "Left-aligned content for blog headers and content-heavy applications.",
            component: <SimpleHeroLeft />
          }
        ]}
        code={{
          component: `// React Component Usage
import { SimpleHeroComponent } from '@/blocks/simple-hero'

// Centered Layout
<SimpleHeroComponent
  eyebrow="Welcome"
  title="Clean, Simple, Effective"
  subtitle="Beautiful hero sections without the complexity"
  description="Perfect for content-focused websites that prioritize readability."
  layout="centered"
  contentWidth="medium"
  titleSize="lg"
  background={{
    type: 'gradient',
    gradientFrom: '#f8fafc',
    gradientTo: '#e2e8f0',
    gradientDirection: 'to-br'
  }}
  callToActions={[
    {
      label: 'Get Started',
      url: '/start',
      appearance: 'primary',
      size: 'default'
    },
    {
      label: 'Learn More',
      url: '/about',
      appearance: 'outline',
      size: 'default'
    }
  ]}
/>

// Split Layout with Image
<SimpleHeroComponent
  title="Powerful Features"
  subtitle="Everything you need to succeed"
  layout="split"
  image="/hero-image.jpg"
  imagePosition="right"
  contentWidth="full"
  callToActions={[
    { label: 'Explore Features', url: '/features', appearance: 'primary' },
    { label: 'View Demo', url: '/demo', appearance: 'ghost' }
  ]}
/>

// Left-Aligned Layout
<SimpleHeroComponent
  eyebrow="Focus"
  title="Start Your Journey Today"
  description="Left-aligned layout perfect for content-heavy applications."
  layout="left"
  contentWidth="wide"
  titleSize="xl"
  callToActions={[
    { label: 'Begin Now', url: '/signup', appearance: 'primary' }
  ]}
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const SimpleHero: Block = {
  slug: 'simple-hero',
  labels: {
    singular: 'Simple Hero Block',
    plural: 'Simple Hero Blocks'
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      admin: {
        description: 'Small text above the main title'
      }
    },
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
      name: 'description',
      type: 'textarea',
      label: 'Description'
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'centered',
      options: [
        { label: 'Centered', value: 'centered' },
        { label: 'Left-aligned', value: 'left' },
        { label: 'Right-aligned', value: 'right' },
        { label: 'Split with Image', value: 'split' }
      ]
    },
    {
      name: 'contentWidth',
      type: 'select',
      label: 'Content Width',
      defaultValue: 'medium',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Full', value: 'full' }
      ]
    },
    {
      name: 'titleSize',
      type: 'select',
      label: 'Title Size',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' }
      ]
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'split'
      }
    }
  ]
}`,
          usage: `// app/page.tsx - Frontend Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function LandingPage({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// components/RenderBlocks.tsx - Block Rendering
import { SimpleHeroComponent } from '@/blocks/simple-hero'

const blockComponents = {
  'simple-hero': SimpleHeroComponent
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
            description: 'Add Simple Hero Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit@latest add simple-hero" title="Install via PayloadKit CLI">
                This will copy the Simple Hero Block files with minimal dependencies for optimal performance.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`// payload.config.ts
import { SimpleHero } from '@/blocks/simple-hero'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            SimpleHero,
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
                code={`// pages/HomePage.tsx
import { SimpleHeroComponent } from '@/blocks/simple-hero'

// Centered hero for landing pages
<SimpleHeroComponent
  eyebrow="Welcome"
  title="Welcome to Our Platform"
  subtitle="Simple, powerful, effective"
  description="Everything you need to succeed in one place."
  layout="centered"
  contentWidth="medium"
  titleSize="lg"
  callToActions={[
    {
      label: 'Get Started',
      url: '/signup',
      appearance: 'primary',
      size: 'default'
    },
    {
      label: 'Learn More',
      url: '/about',
      appearance: 'outline',
      size: 'default'
    }
  ]}
/>

// Split layout with image
<SimpleHeroComponent
  title="Powerful Features"
  subtitle="Built for modern teams"
  layout="split"
  image="/features-preview.jpg"
  imagePosition="right"
  contentWidth="full"
/>`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Customize Design & Content',
            keyword: 'Customize',
            description: 'Adapt the hero to your brand and content needs.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Customization options:</p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>4 layout options: centered, left, right, split</li>
                  <li>4 content widths: narrow, medium, wide, full</li>
                  <li>4 title sizes: sm, md, lg, xl</li>
                  <li>Background support: color, gradient, image, none</li>
                  <li>Text color themes: dark, light, primary</li>
                  <li>Up to 2 call-to-action buttons</li>
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
        description="Complete props reference for the Simple Hero Block component."
        props={[
          {
            name: 'eyebrow',
            type: 'string',
            description: 'Small text displayed above the main title',
            required: false,
            example: 'eyebrow="Welcome"'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Main hero title (required)',
            required: true,
            example: 'title="Welcome to Our Platform"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Optional subtitle text',
            required: false,
            example: 'subtitle="Simple, powerful, effective"'
          },
          {
            name: 'description',
            type: 'string',
            description: 'Detailed description text',
            required: false,
            example: 'description="Everything you need to succeed"'
          },
          {
            name: 'layout',
            type: '"centered" | "left" | "right" | "split"',
            description: 'Content layout style',
            required: false,
            defaultValue: '"centered"',
            example: 'layout="centered"'
          },
          {
            name: 'contentWidth',
            type: '"narrow" | "medium" | "wide" | "full"',
            description: 'Maximum width of content container',
            required: false,
            defaultValue: '"medium"',
            example: 'contentWidth="medium"'
          },
          {
            name: 'titleSize',
            type: '"sm" | "md" | "lg" | "xl"',
            description: 'Title font size variant',
            required: false,
            defaultValue: '"lg"',
            example: 'titleSize="lg"'
          },
          {
            name: 'textColor',
            type: '"dark" | "light" | "primary"',
            description: 'Text color theme',
            required: false,
            defaultValue: '"dark"',
            example: 'textColor="dark"'
          },
          {
            name: 'image',
            type: 'string | Media',
            description: 'Hero image for split layout',
            required: false,
            example: 'image="/hero-image.jpg"'
          },
          {
            name: 'imagePosition',
            type: '"left" | "right"',
            description: 'Image position in split layout',
            required: false,
            defaultValue: '"right"',
            example: 'imagePosition="right"'
          },
          {
            name: 'callToActions',
            type: 'CallToAction[]',
            description: 'Array of action buttons (max 2)',
            required: false,
            example: 'callToActions={[{ label: "Get Started", url: "/start" }]}'
          },
          {
            name: 'background',
            type: 'BackgroundConfig',
            description: 'Background configuration object',
            required: false,
            example: 'background={{ type: "gradient", gradientFrom: "#f8fafc" }}'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="SimpleHeroProps Interface"
          code={`interface SimpleHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  description?: string
  layout?: 'centered' | 'left' | 'right' | 'split'
  contentWidth?: 'narrow' | 'medium' | 'wide' | 'full'
  titleSize?: 'sm' | 'md' | 'lg' | 'xl'
  textColor?: 'dark' | 'light' | 'primary'
  image?: string | Media
  imagePosition?: 'left' | 'right'
  callToActions?: CallToAction[]
  background?: BackgroundConfig
}

interface CallToAction {
  label: string
  url: string
  appearance?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  newTab?: boolean
}

interface BackgroundConfig {
  type: 'color' | 'gradient' | 'image' | 'none'
  color?: string
  gradientFrom?: string
  gradientTo?: string
  gradientDirection?: string
  image?: string | Media
}

interface Media {
  url: string
  alt?: string
  width?: number
  height?: number
}`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', 'next']}
        tags={['hero', 'simple', 'minimal', 'landing', 'content-first', 'clean', 'performance']}
      />
    </div>
  )
}