import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

// Import our new documentation components
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Hero Block - PayloadKit',
  description: 'Flexible hero section with title, subtitle, description and customizable CTA buttons, built for maximum visual impact and conversion optimization.',
}

// Demo components for different variants
function HeroDefault() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden rounded-lg">
      <div className="relative container mx-auto px-6 py-16 text-center">
        <p className="text-lg font-medium text-blue-100 mb-4">
          Welcome to PayloadKit
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build Faster with PayloadCMS
        </h1>

        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Get your PayloadCMS project up and running in minutes with pre-built components and templates.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            View Docs
          </Button>
        </div>
      </div>
    </div>
  )
}

function HeroMinimal() {
  return (
    <div className="relative bg-gray-50 overflow-hidden rounded-lg">
      <div className="relative container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Simple Hero Section
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Clean and minimal hero design for focused messaging.
        </p>

        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
          Learn More
        </Button>
      </div>
    </div>
  )
}

function HeroWithBackground() {
  return (
    <div className="relative bg-gray-900 overflow-hidden rounded-lg" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      backgroundSize: '60px 60px'
    }}>
      <div className="relative container mx-auto px-6 py-20 text-center">
        <p className="text-lg font-medium text-blue-300 mb-4">
          Advanced Features
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Hero with Pattern Background
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Showcase advanced background images and overlays for enhanced visual appeal.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            Explore Features
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function HeroBlockComponentPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/components">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Hero Block"
        description="Flexible hero section with customizable content, backgrounds, and call-to-action buttons for maximum visual impact."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview with variants */}
      <ComponentPreview
        name="Hero Block Preview"
        description="Interactive demonstration of the Hero Block with different layouts and styling options."
        variants={[
          {
            name: "Default",
            description: "Standard hero with gradient background, subtitle, and dual CTA buttons",
            component: <HeroDefault />
          },
          {
            name: "Minimal",
            description: "Clean and simple hero design with minimal styling and single CTA",
            component: <HeroMinimal />
          },
          {
            name: "With Background",
            description: "Advanced hero with pattern background, overlay, and enhanced visual appeal",
            component: <HeroWithBackground />
          }
        ]}
        code={{
          component: `'use client'

import { Button } from '@/components/ui/button'

interface HeroBlockProps {
  subtitle?: string
  title: string
  description?: string
  backgroundImage?: string
  buttons?: Array<{
    label: string
    url: string
    style: 'primary' | 'secondary'
  }>
}

export function HeroBlock({
  subtitle,
  title,
  description,
  backgroundImage,
  buttons = []
}: HeroBlockProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: \`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\${backgroundImage})\`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {}

  return (
    <div
      className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      style={backgroundStyle}
    >
      <div className="relative container mx-auto px-6 py-16 md:py-20 text-center">
        {subtitle && (
          <p className="text-lg font-medium text-blue-100 mb-4">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                className={
                  button.style === 'primary'
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "border-white text-white hover:bg-white hover:text-blue-600"
                }
                variant={button.style === 'primary' ? 'default' : 'outline'}
                asChild
              >
                <a href={button.url}>{button.label}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}`,
          config: `import { Block } from 'payload/types'

export const HeroBlock: Block = {
  slug: 'hero-block',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'buttons',
      label: 'Call to Action Buttons',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'label',
          label: 'Button Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Button URL',
          type: 'text',
          required: true,
        },
        {
          name: 'style',
          label: 'Button Style',
          type: 'select',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
        },
      ],
    },
  ],
}`,
          usage: `// In your page component
import { HeroBlock } from '@/components/blocks/hero-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'hero-block') {
          return <HeroBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleHero = {
  subtitle: "Welcome to PayloadKit",
  title: "Build Faster with PayloadCMS",
  description: "Get your PayloadCMS project up and running in minutes with pre-built components and templates.",
  buttons: [
    {
      label: "Get Started",
      url: "/docs/getting-started",
      style: "primary"
    },
    {
      label: "View Docs",
      url: "/docs",
      style: "secondary"
    }
  ]
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Hero Block',
            keyword: 'Install',
            description: 'Add the Hero Block to your PayloadKit project using the CLI.',
            content: (
              <Snippet
                command="bunx payloadkit add hero-block"
                title="Install via PayloadKit CLI"
              >
                This will copy the Hero Block files into your project and update your registry.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS configuration.',
            content: (
              <CodeBlock
                code={`import { HeroBlock } from './blocks/hero-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            HeroBlock, // Add here
          ],
        },
      ],
    },
  ],
})`}
                language="typescript"
                title="payload.config.ts"
              />
            )
          },
          {
            title: 'Render in Frontend',
            keyword: 'Implement',
            description: 'Use the block component in your React frontend.',
            content: (
              <CodeBlock
                code={`import { HeroBlock } from '@/components/blocks/hero-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'hero-block') {
          return <HeroBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Customize (Optional)',
            keyword: 'Customize',
            description: 'Modify the component to match your design requirements.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Since the code is copied into your project, you can customize:
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Background colors and gradients</li>
                  <li>Button styles and variants</li>
                  <li>Typography and spacing</li>
                  <li>Background image handling</li>
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
        description="Complete reference for all props and configuration options available for the Hero Block component."
        props={[
          {
            name: 'subtitle',
            type: 'string',
            description: 'Small text displayed above the main title',
            example: 'subtitle="Welcome to PayloadKit"'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Main heading text of the hero section',
            required: true,
            example: 'title="Build Faster with PayloadCMS"'
          },
          {
            name: 'description',
            type: 'string',
            description: 'Descriptive text displayed below the title',
            example: 'description="Get your PayloadCMS project up and running in minutes..."'
          },
          {
            name: 'backgroundImage',
            type: 'string',
            description: 'URL or path to background image with automatic overlay',
            example: 'backgroundImage="/path/to/image.jpg"'
          },
          {
            name: 'buttons',
            type: 'ButtonConfig[]',
            description: 'Array of call-to-action buttons (maximum 3)',
            defaultValue: '[]',
            example: '[{ label: "Get Started", url: "/start", style: "primary" }]'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>

        <div className="space-y-4">
          <CodeBlock
            title="ButtonConfig Interface"
            code={`interface ButtonConfig {
  label: string        // Button text
  url: string          // Link destination
  style: 'primary' | 'secondary'  // Visual style
}`}
            language="typescript"
          />

          <CodeBlock
            title="Hero Block Props"
            code={`interface HeroBlockProps {
  subtitle?: string
  title: string
  description?: string
  backgroundImage?: string
  buttons?: ButtonConfig[]
}`}
            language="typescript"
          />
        </div>
      </div>

      {/* Tags and Dependencies at the bottom */}
      <PageTags
        category="blocks"
        dependencies={[
          '@/components/ui/button',
          'react',
          'tailwindcss',
          'lucide-react'
        ]}
        tags={[
          'Hero',
          'Landing Page',
          'CTA',
          'Gradient',
          'Background Image',
          'Responsive',
          'PayloadCMS',
          'React',
          'TypeScript'
        ]}
      />
    </div>
  )
}