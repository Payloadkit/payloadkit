import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Zap, Play, ArrowRight } from 'lucide-react'

// Import our new documentation components
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Banner Block - PayloadKit',
  description: 'Versatile hero banner block with customizable backgrounds, text alignment, and call-to-action buttons for maximum impact.',
}

// Demo components for different variants
function BannerHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
          Welcome to PayloadKit
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Faster with PayloadCMS
        </h1>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get your PayloadCMS project up and running in minutes with pre-built components and beautiful templates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

function BannerPromo() {
  return (
    <div
      className="relative bg-gray-900 text-white overflow-hidden rounded-lg"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }}
    >
      <div className="container mx-auto px-6 py-16 text-left md:text-center">
        <p className="text-orange-300 font-medium mb-4">
          Limited Time Offer
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          50% Off All Templates
        </h2>

        <p className="text-xl text-gray-300 mb-6">
          Sale ends this weekend!
        </p>

        <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
          <Zap className="mr-2 h-4 w-4" />
          Shop Now
        </Button>
      </div>
    </div>
  )
}

function BannerCta() {
  return (
    <div className="bg-gray-50 rounded-lg">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to get started?
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Join thousands of developers building amazing PayloadCMS applications with our component library.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-gray-700">
            Contact Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function BannerBlockPage() {
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
        title="Banner Block"
        description="Versatile hero banner block with customizable backgrounds, text alignment, and call-to-action buttons for maximum impact."
        category="blocks"
        version="0.1.0"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="12 minutes"
        lastUpdated="January 2025"
      />

      {/* Component Preview with variants */}
      <ComponentPreview
        name="Banner Block Preview"
        description="Interactive demonstration of the Banner Block with different backgrounds, layouts, and call-to-action configurations."
        variants={[
          {
            name: "Hero Banner",
            description: "Full-featured hero banner with gradient background, badge eyebrow, and dual CTAs",
            component: <BannerHero />
          },
          {
            name: "Promotional Banner",
            description: "Marketing-focused banner with pattern background and urgency messaging",
            component: <BannerPromo />
          },
          {
            name: "CTA Banner",
            description: "Simple call-to-action banner with clean design and focused messaging",
            component: <BannerCta />
          }
        ]}
        code={{
          component: `'use client'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'

interface BannerBlockProps {
  eyebrow?: string
  eyebrowStyle?: 'text' | 'badge'
  title: string
  subtitle?: string
  description?: any // Rich text content
  textAlignment?: 'center' | 'left' | 'right'
  textColor?: 'light' | 'dark' | 'primary'
  background?: {
    type?: 'color' | 'gradient' | 'image'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'
    image?: string
    overlay?: boolean
    overlayOpacity?: '25' | '50' | '75'
  }
  height?: 'auto' | 'small' | 'medium' | 'large' | 'full'
  callToActions?: Array<{
    label: string
    url: string
    style: 'primary' | 'secondary' | 'ghost'
    size: 'sm' | 'md' | 'lg'
    newTab?: boolean
  }>
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl'
}

export function BannerBlock({
  eyebrow,
  eyebrowStyle = 'text',
  title,
  subtitle,
  description,
  textAlignment = 'center',
  textColor = 'light',
  background,
  height = 'medium',
  callToActions = [],
  paddingTop = 'lg',
  paddingBottom = 'lg'
}: BannerBlockProps) {
  const heightClasses = {
    auto: 'min-h-0',
    small: 'min-h-[50vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[75vh]',
    full: 'min-h-screen'
  }

  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }

  const textColorClasses = {
    light: 'text-white',
    dark: 'text-gray-900',
    primary: 'text-primary'
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  const backgroundStyle = background?.type === 'image'
    ? {
        backgroundImage: \`\${background.overlay ? 'linear-gradient(rgba(0,0,0,0.' + background.overlayOpacity + '), rgba(0,0,0,0.' + background.overlayOpacity + ')), ' : ''}url(\${background.image})\`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : background?.type === 'gradient'
    ? {
        background: \`linear-gradient(\${background.gradientDirection || 'to-r'}, \${background.gradientFrom}, \${background.gradientTo})\`
      }
    : background?.color
    ? { backgroundColor: background.color }
    : {}

  return (
    <div
      className={\`relative \${heightClasses[height]} \${paddingClasses[paddingTop]} \${paddingClasses[paddingBottom]} flex items-center\`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        <div className={\`space-y-6 max-w-4xl \${textAlignment === 'center' ? 'mx-auto' : textAlignment === 'right' ? 'ml-auto' : ''} \${alignmentClasses[textAlignment]} \${textColorClasses[textColor]}\`}>
          {/* Eyebrow */}
          {eyebrow && (
            <div className="space-y-2">
              {eyebrowStyle === 'badge' ? (
                <div className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium \${
                  textColor === 'light' ? 'bg-white/10 text-white' :
                  textColor === 'dark' ? 'bg-gray-100 text-gray-700' :
                  'bg-primary/10 text-primary'
                }\`}>
                  {eyebrow}
                </div>
              ) : (
                <p className={\`text-sm font-medium \${
                  textColor === 'light' ? 'text-blue-200' :
                  textColor === 'dark' ? 'text-gray-600' :
                  'text-primary'
                }\`}>
                  {eyebrow}
                </p>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className={\`text-2xl md:text-3xl font-medium \${
              textColor === 'light' ? 'text-gray-200' :
              textColor === 'dark' ? 'text-gray-700' :
              'text-primary/80'
            }\`}>
              {subtitle}
            </h2>
          )}

          {/* Description */}
          {description && (
            <div className={\`text-lg md:text-xl max-w-2xl \${textAlignment === 'center' ? 'mx-auto' : ''} \${
              textColor === 'light' ? 'text-gray-100' :
              textColor === 'dark' ? 'text-gray-600' :
              'text-primary/70'
            }\`}>
              <RichText content={description} />
            </div>
          )}

          {/* Call to Actions */}
          {callToActions.length > 0 && (
            <div className={\`flex flex-wrap gap-4 \${
              textAlignment === 'center' ? 'justify-center' :
              textAlignment === 'right' ? 'justify-end' :
              'justify-start'
            }\`}>
              {callToActions.slice(0, 3).map((cta, index) => (
                <CMSLink
                  key={index}
                  href={cta.url}
                  appearance={cta.style}
                  size={cta.size}
                  newTab={cta.newTab}
                  className={
                    textColor === 'light' && cta.style === 'primary'
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : textColor === 'light' && cta.style === 'secondary'
                      ? 'border-white text-white hover:bg-white hover:text-gray-900'
                      : undefined
                  }
                >
                  {cta.label}
                </CMSLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}`,
          config: `import { Block } from 'payload/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const BannerBlock: Block = {
  slug: 'banner-block',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow Text',
      type: 'text',
    },
    {
      name: 'eyebrowStyle',
      label: 'Eyebrow Style',
      type: 'select',
      defaultValue: 'text',
      options: [
        { label: 'Simple Text', value: 'text' },
        { label: 'Badge Style', value: 'badge' },
      ],
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => rootFeatures
      }),
    },
    {
      name: 'textAlignment',
      label: 'Text Alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'textColor',
      label: 'Text Color Theme',
      type: 'select',
      defaultValue: 'light',
      options: [
        { label: 'Light (for dark backgrounds)', value: 'light' },
        { label: 'Dark (for light backgrounds)', value: 'dark' },
        { label: 'Primary Color', value: 'primary' },
      ],
    },
    {
      name: 'background',
      label: 'Background',
      type: 'group',
      fields: [
        {
          name: 'type',
          label: 'Background Type',
          type: 'select',
          defaultValue: 'color',
          options: [
            { label: 'Solid Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' },
          ],
        },
        {
          name: 'color',
          label: 'Background Color',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'color',
            description: 'Hex color code (e.g., #3b82f6)',
          },
        },
        {
          name: 'gradientFrom',
          label: 'Gradient Start Color',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'gradient',
            description: 'Hex color code (e.g., #3b82f6)',
          },
        },
        {
          name: 'gradientTo',
          label: 'Gradient End Color',
          type: 'text',
          admin: {
            condition: (_, { type }) => type === 'gradient',
            description: 'Hex color code (e.g., #1d4ed8)',
          },
        },
        {
          name: 'gradientDirection',
          label: 'Gradient Direction',
          type: 'select',
          defaultValue: 'to-r',
          admin: {
            condition: (_, { type }) => type === 'gradient',
          },
          options: [
            { label: 'Left to Right', value: 'to-r' },
            { label: 'Right to Left', value: 'to-l' },
            { label: 'Top to Bottom', value: 'to-b' },
            { label: 'Bottom to Top', value: 'to-t' },
            { label: 'Top Left to Bottom Right', value: 'to-br' },
            { label: 'Top Right to Bottom Left', value: 'to-bl' },
            { label: 'Bottom Left to Top Right', value: 'to-tr' },
            { label: 'Bottom Right to Top Left', value: 'to-tl' },
          ],
        },
        {
          name: 'image',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, { type }) => type === 'image',
          },
        },
        {
          name: 'overlay',
          label: 'Add Dark Overlay',
          type: 'checkbox',
          admin: {
            condition: (_, { type }) => type === 'image',
          },
        },
        {
          name: 'overlayOpacity',
          label: 'Overlay Opacity',
          type: 'select',
          defaultValue: '50',
          admin: {
            condition: (_, { type, overlay }) => type === 'image' && overlay,
          },
          options: [
            { label: '25%', value: '25' },
            { label: '50%', value: '50' },
            { label: '75%', value: '75' },
          ],
        },
      ],
    },
    {
      name: 'height',
      label: 'Section Height',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Auto (content height)', value: 'auto' },
        { label: 'Small (50vh)', value: 'small' },
        { label: 'Medium (60vh)', value: 'medium' },
        { label: 'Large (75vh)', value: 'large' },
        { label: 'Full Screen', value: 'full' },
      ],
    },
    {
      name: 'callToActions',
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
            { label: 'Ghost', value: 'ghost' },
          ],
        },
        {
          name: 'size',
          label: 'Button Size',
          type: 'select',
          defaultValue: 'md',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
        {
          name: 'newTab',
          label: 'Open in New Tab',
          type: 'checkbox',
        },
      ],
    },
    {
      name: 'paddingTop',
      label: 'Padding Top',
      type: 'select',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
    {
      name: 'paddingBottom',
      label: 'Padding Bottom',
      type: 'select',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
  ],
}`,
          usage: `// In your page component
import { BannerBlock } from '@/components/blocks/banner-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'banner-block') {
          return <BannerBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleBanner = {
  eyebrow: "Welcome to PayloadKit",
  eyebrowStyle: "badge",
  title: "Build Faster with PayloadCMS",
  subtitle: "The Ultimate Component Library",
  description: {
    root: {
      children: [
        {
          children: [
            {
              text: "Get your PayloadCMS project up and running in minutes with pre-built components and beautiful templates."
            }
          ]
        }
      ]
    }
  },
  textAlignment: "center",
  textColor: "light",
  background: {
    type: "gradient",
    gradientFrom: "#3b82f6",
    gradientTo: "#8b5cf6",
    gradientDirection: "to-r"
  },
  height: "large",
  callToActions: [
    {
      label: "Get Started",
      url: "/get-started",
      style: "primary",
      size: "lg",
      newTab: false
    },
    {
      label: "Watch Demo",
      url: "/demo",
      style: "secondary",
      size: "lg",
      newTab: true
    }
  ],
  paddingTop: "xl",
  paddingBottom: "xl"
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Banner Block',
            keyword: 'Install',
            description: 'Add the Banner Block to your PayloadKit project using the CLI.',
            content: (
              <Snippet
                command="payloadkit add banner-block"
                title="Install via PayloadKit CLI"
              >
                This will copy the Banner Block files into your project and update your registry.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS configuration.',
            content: (
              <CodeBlock
                code={`import { BannerBlock } from './blocks/banner-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            BannerBlock, // Add here
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
                code={`import { BannerBlock } from '@/components/blocks/banner-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'banner-block') {
          return <BannerBlock key={index} {...block} />
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
                  <li>Background patterns and overlay effects</li>
                  <li>Button styles and hover animations</li>
                  <li>Typography and text sizing</li>
                  <li>Height and spacing configurations</li>
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
        description="Complete reference for all props and configuration options available for the Banner Block component."
        props={[
          {
            name: 'eyebrow',
            type: 'string',
            description: 'Small text displayed above the main title',
            example: 'eyebrow="Welcome to PayloadKit"'
          },
          {
            name: 'eyebrowStyle',
            type: '"text" | "badge"',
            description: 'Style of the eyebrow text - simple text or badge',
            defaultValue: '"text"',
            example: 'eyebrowStyle="badge"'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Main heading text of the banner',
            required: true,
            example: 'title="Build Faster with PayloadCMS"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Secondary heading displayed below the title',
            example: 'subtitle="The Ultimate Component Library"'
          },
          {
            name: 'description',
            type: 'LexicalNode',
            description: 'Rich text description content with full editor support',
            example: 'description={richTextContent}'
          },
          {
            name: 'textAlignment',
            type: '"center" | "left" | "right"',
            description: 'Text alignment for the banner content',
            defaultValue: '"center"',
            example: 'textAlignment="left"'
          },
          {
            name: 'textColor',
            type: '"light" | "dark" | "primary"',
            description: 'Text color theme optimized for different backgrounds',
            defaultValue: '"light"',
            example: 'textColor="dark"'
          },
          {
            name: 'background',
            type: 'BackgroundConfig',
            description: 'Background styling with color, gradient, or image options',
            example: '{ type: "gradient", gradientFrom: "#3b82f6", gradientTo: "#8b5cf6" }'
          },
          {
            name: 'height',
            type: '"auto" | "small" | "medium" | "large" | "full"',
            description: 'Section height configuration',
            defaultValue: '"medium"',
            example: 'height="large"'
          },
          {
            name: 'callToActions',
            type: 'CtaConfig[]',
            description: 'Array of call-to-action buttons (maximum 3)',
            defaultValue: '[]',
            example: '[{ label: "Get Started", url: "/start", style: "primary", size: "lg" }]'
          },
          {
            name: 'paddingTop',
            type: '"sm" | "md" | "lg" | "xl"',
            description: 'Top padding/spacing of the section',
            defaultValue: '"lg"',
            example: 'paddingTop="xl"'
          },
          {
            name: 'paddingBottom',
            type: '"sm" | "md" | "lg" | "xl"',
            description: 'Bottom padding/spacing of the section',
            defaultValue: '"lg"',
            example: 'paddingBottom="xl"'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>

        <div className="space-y-4">
          <CodeBlock
            title="BackgroundConfig Interface"
            code={`interface BackgroundConfig {
  type?: 'color' | 'gradient' | 'image'
  color?: string                      // Hex color for solid background
  gradientFrom?: string               // Start color for gradient
  gradientTo?: string                 // End color for gradient
  gradientDirection?: GradientDirection
  image?: string                      // Image URL for background
  overlay?: boolean                   // Add dark overlay on image
  overlayOpacity?: '25' | '50' | '75' // Overlay opacity level
}

type GradientDirection =
  | 'to-r' | 'to-l' | 'to-t' | 'to-b'
  | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'`}
            language="typescript"
          />

          <CodeBlock
            title="CtaConfig Interface"
            code={`interface CtaConfig {
  label: string                    // Button text
  url: string                      // Link destination
  style: 'primary' | 'secondary' | 'ghost'  // Visual style
  size: 'sm' | 'md' | 'lg'        // Button size
  newTab?: boolean                 // Open link in new tab
}`}
            language="typescript"
          />

          <CodeBlock
            title="Banner Block Props"
            code={`interface BannerBlockProps {
  eyebrow?: string
  eyebrowStyle?: 'text' | 'badge'
  title: string
  subtitle?: string
  description?: LexicalNode
  textAlignment?: 'center' | 'left' | 'right'
  textColor?: 'light' | 'dark' | 'primary'
  background?: BackgroundConfig
  height?: 'auto' | 'small' | 'medium' | 'large' | 'full'
  callToActions?: CtaConfig[]
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl'
}`}
            language="typescript"
          />
        </div>
      </div>

      {/* Tags and Dependencies at the bottom */}
      <PageTags
        category="blocks"
        dependencies={[
          '@/components/RichText',
          '@/components/Link',
          '@payloadcms/richtext-lexical',
          'react',
          'tailwindcss'
        ]}
        tags={[
          'Banner',
          'Hero',
          'Landing Page',
          'CTA',
          'Gradient',
          'Background Image',
          'Marketing',
          'Conversion',
          'Responsive',
          'PayloadCMS',
          'React',
          'TypeScript'
        ]}
      />
    </div>
  )
}