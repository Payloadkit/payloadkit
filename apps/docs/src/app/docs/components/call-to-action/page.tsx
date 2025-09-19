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
  title: 'Call to Action - PayloadKit',
  description: 'Versatile call-to-action block with rich text content and customizable buttons for driving user engagement and conversions.',
}

// Demo components for different variants
function CtaDefault() {
  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
      <div className="max-w-[48rem] flex items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of developers building amazing PayloadCMS applications with PayloadKit.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </div>
  )
}

function CtaMinimal() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Simple Call to Action</h3>
        <p className="text-gray-600">
          Clean and focused messaging for maximum impact.
        </p>
        <Button>Take Action</Button>
      </div>
    </div>
  )
}

function CtaCentered() {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
      <div className="space-y-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Transform Your Development Workflow</h2>
        <p className="text-lg opacity-90">
          Experience the power of pre-built components and accelerate your PayloadCMS projects today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            View Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CallToActionComponentPage() {
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
        title="Call to Action"
        description="Versatile call-to-action block with rich text content and customizable buttons for driving user engagement."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="8 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview with variants */}
      <ComponentPreview
        name="Call to Action Preview"
        description="Interactive demonstration of the Call to Action block with different layouts and styling approaches."
        variants={[
          {
            name: "Default",
            description: "Standard CTA layout with side-by-side content and dual action buttons",
            component: <CtaDefault />
          },
          {
            name: "Minimal",
            description: "Clean and simple centered layout with single action button",
            component: <CtaMinimal />
          },
          {
            name: "Centered",
            description: "Full-width centered design with colored background and dual CTAs",
            component: <CtaCentered />
          }
        ]}
        code={{
          component: `'use client'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'

interface CallToActionProps {
  richText?: any
  links?: Array<{
    link: {
      type?: 'reference' | 'custom'
      label: string
      reference?: {
        relationTo: string
        value: string
      }
      url?: string
      newTab?: boolean
    }
    appearance?: 'default' | 'outline'
  }>
  size?: 'auto' | 'small' | 'medium' | 'large' | 'extraLarge'
}

export function CallToActionBlock({
  richText,
  links = [],
  size = 'auto'
}: CallToActionProps) {
  const sizeClasses = {
    auto: 'py-12',
    small: 'py-8',
    medium: 'py-12',
    large: 'py-16',
    extraLarge: 'py-20'
  }

  return (
    <div className={\`bg-card rounded-lg border \${sizeClasses[size]}\`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* Rich Text Content */}
          {richText && (
            <div className="max-w-2xl">
              <RichText content={richText} />
            </div>
          )}

          {/* CTA Links */}
          {links.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row">
              {links.slice(0, 2).map((item, index) => (
                <CMSLink
                  key={index}
                  {...item.link}
                  appearance={item.appearance || 'default'}
                  size="lg"
                >
                  {item.link.label}
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

export const CallToActionBlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Action',
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'link',
          type: 'link',
          required: true,
        },
        {
          name: 'appearance',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
          ],
        },
      ],
      maxRows: 2,
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Auto',
          value: 'auto',
        },
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
        {
          label: 'Extra Large',
          value: 'extraLarge',
        },
      ],
    },
  ],
}`,
          usage: `// In your page component
import { CallToActionBlock } from '@/components/blocks/call-to-action'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'cta') {
          return <CallToActionBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleCta = {
  richText: {
    root: {
      children: [
        {
          children: [
            {
              text: "Ready to get started?"
            }
          ],
          tag: "h2"
        },
        {
          children: [
            {
              text: "Join thousands of developers building amazing PayloadCMS applications."
            }
          ]
        }
      ]
    }
  },
  links: [
    {
      link: {
        type: "custom",
        label: "Get Started",
        url: "/get-started"
      },
      appearance: "default"
    },
    {
      link: {
        type: "custom",
        label: "Learn More",
        url: "/docs"
      },
      appearance: "outline"
    }
  ],
  size: "medium"
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Call to Action Block',
            keyword: 'Install',
            description: 'Add the CTA block to your PayloadKit project using the CLI.',
            content: (
              <Snippet
                command="bunx payloadkit add call-to-action"
                title="Install via PayloadKit CLI"
              >
                This will copy the Call to Action block files into your project and update your registry.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS configuration.',
            content: (
              <CodeBlock
                code={`import { CallToActionBlock } from './blocks/call-to-action'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            CallToActionBlock, // Add here
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
                code={`import { CallToActionBlock } from '@/components/blocks/call-to-action'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'cta') {
          return <CallToActionBlock key={index} {...block} />
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
                  <li>Background colors and styling</li>
                  <li>Button appearances and sizes</li>
                  <li>Layout and spacing options</li>
                  <li>Rich text editor features</li>
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
        description="Complete reference for all props and configuration options available for the Call to Action block."
        props={[
          {
            name: 'richText',
            type: 'LexicalNode',
            description: 'Rich text content with full Lexical editor support',
            example: 'richText={lexicalContent}'
          },
          {
            name: 'links',
            type: 'LinkConfig[]',
            description: 'Array of call-to-action links (maximum 2)',
            defaultValue: '[]',
            example: '[{ link: { label: "Get Started", url: "/start" }, appearance: "default" }]'
          },
          {
            name: 'size',
            type: '"auto" | "small" | "medium" | "large" | "extraLarge"',
            description: 'Controls vertical padding and section height',
            defaultValue: '"medium"',
            example: 'size="large"'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>

        <div className="space-y-4">
          <CodeBlock
            title="LinkConfig Interface"
            code={`interface LinkConfig {
  link: {
    type?: 'reference' | 'custom'
    label: string
    reference?: {
      relationTo: string
      value: string
    }
    url?: string
    newTab?: boolean
  }
  appearance?: 'default' | 'outline'
}`}
            language="typescript"
          />

          <CodeBlock
            title="Call to Action Props"
            code={`interface CallToActionProps {
  richText?: LexicalNode
  links?: LinkConfig[]
  size?: 'auto' | 'small' | 'medium' | 'large' | 'extraLarge'
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
          'CTA',
          'Call to Action',
          'Rich Text',
          'Lexical Editor',
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