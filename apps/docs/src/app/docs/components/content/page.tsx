import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Type, Columns, Link as LinkIcon } from 'lucide-react'

// Import our new documentation components
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Content Block - PayloadKit',
  description: 'Flexible content block with multi-column layouts and rich text editor support for versatile content presentation.',
}

// Demo components for different variants
function ContentSingle() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-3xl font-bold text-gray-900">About PayloadKit</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            PayloadKit is an open source framework for PayloadCMS that provides reusable components,
            blocks, plugins, and templates to build PayloadCMS applications faster. It follows the
            shadcn/ui approach of copying components into projects rather than using npm packages.
          </p>
          <p className="text-gray-600">
            Our mission is to accelerate PayloadCMS development by providing high-quality,
            production-ready components that developers can customize and extend for their specific needs.
          </p>
          <Button>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

function ContentTwoColumns() {
  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Type className="w-5 h-5" />
              <span className="font-semibold">Rich Content</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Powerful Typography
            </h3>
            <p className="text-gray-600">
              Create beautiful, readable content with our rich text editor integration.
              Support for headings, lists, links, and custom formatting options.
            </p>
            <Button variant="link" className="p-0 text-blue-600">
              Explore Typography →
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <Columns className="w-5 h-5" />
              <span className="font-semibold">Flexible Layouts</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Multi-Column Support
            </h3>
            <p className="text-gray-600">
              Choose from various column configurations including 1/3, 1/2, 2/3, and full width
              options. Perfect for creating engaging layouts.
            </p>
            <Button variant="link" className="p-0 text-green-600">
              View Layouts →
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentThreeColumns() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes PayloadKit the perfect choice for your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Type className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Rich Content</h3>
            <p className="text-sm text-gray-600">
              Full Lexical editor support with advanced formatting options.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Columns className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Flexible Columns</h3>
            <p className="text-sm text-gray-600">
              Multiple column layouts from 1/3 to full width configurations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <LinkIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Optional Links</h3>
            <p className="text-sm text-gray-600">
              Add contextual links to individual content columns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContentComponentPage() {
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
        title="Content Block"
        description="Flexible content block with multi-column layouts and rich text editor support for versatile content presentation."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview with variants */}
      <ComponentPreview
        name="Content Block Preview"
        description="Interactive demonstration of the Content Block with different column configurations and rich text capabilities."
        variants={[
          {
            name: "Single Column",
            description: "Full-width content with rich text formatting and call-to-action",
            component: <ContentSingle />
          },
          {
            name: "Two Columns",
            description: "Side-by-side layout with individual content areas and optional links",
            component: <ContentTwoColumns />
          },
          {
            name: "Three Columns",
            description: "Triple column layout perfect for feature highlights and services",
            component: <ContentThreeColumns />
          }
        ]}
        code={{
          component: `'use client'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'

interface ContentColumn {
  width: '1/3' | '1/2' | '2/3' | 'full'
  richText: any // Lexical rich text content
  link?: {
    text: string
    url: string
    newTab?: boolean
  }
}

interface ContentBlockProps {
  columns?: ContentColumn[]
  enableContainer?: boolean
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl'
}

export function ContentBlock({
  columns = [],
  enableContainer = true,
  paddingTop = 'lg',
  paddingBottom = 'lg'
}: ContentBlockProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  const widthClasses = {
    '1/3': 'md:w-1/3',
    '1/2': 'md:w-1/2',
    '2/3': 'md:w-2/3',
    'full': 'w-full'
  }

  const getFlexBasis = (width: string) => {
    switch (width) {
      case '1/3': return 'md:flex-[0_0_33.333333%]'
      case '1/2': return 'md:flex-[0_0_50%]'
      case '2/3': return 'md:flex-[0_0_66.666667%]'
      default: return 'flex-[0_0_100%]'
    }
  }

  if (columns.length === 0) {
    return null
  }

  return (
    <div className={\`\${paddingClasses[paddingTop]} \${paddingClasses[paddingBottom]}\`}>
      <div className={enableContainer ? 'container mx-auto px-4' : ''}>
        <div className="flex flex-wrap gap-6 md:gap-8">
          {columns.map((column, index) => (
            <div
              key={index}
              className={\`\${getFlexBasis(column.width)} space-y-4\`}
            >
              {/* Rich Text Content */}
              {column.richText && (
                <div className="prose prose-gray max-w-none">
                  <RichText content={column.richText} />
                </div>
              )}

              {/* Optional Link */}
              {column.link && (
                <div className="pt-2">
                  <CMSLink
                    href={column.link.url}
                    appearance="link"
                    newTab={column.link.newTab}
                  >
                    {column.link.text}
                  </CMSLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`,
          config: `import { Block } from 'payload/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { HeadingFeature, FixedToolbarFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'columns',
      label: 'Content Columns',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'width',
          label: 'Column Width',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'One Third (1/3)', value: '1/3' },
            { label: 'Half Width (1/2)', value: '1/2' },
            { label: 'Two Thirds (2/3)', value: '2/3' },
            { label: 'Full Width', value: 'full' },
          ],
        },
        {
          name: 'richText',
          label: 'Content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          required: true,
        },
        {
          name: 'link',
          label: 'Optional Link',
          type: 'group',
          fields: [
            {
              name: 'text',
              label: 'Link Text',
              type: 'text',
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
            },
            {
              name: 'newTab',
              label: 'Open in New Tab',
              type: 'checkbox',
            },
          ],
        },
      ],
    },
    {
      name: 'enableContainer',
      label: 'Enable Container',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Wrap content in a container with max-width and padding',
      },
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
import { ContentBlock } from '@/components/blocks/content'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'content') {
          return <ContentBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleContent = {
  columns: [
    {
      width: "1/2",
      richText: {
        root: {
          children: [
            {
              children: [
                {
                  text: "About PayloadKit"
                }
              ],
              tag: "h2"
            },
            {
              children: [
                {
                  text: "PayloadKit is an open source framework for PayloadCMS that provides reusable components, blocks, and templates to build applications faster."
                }
              ]
            }
          ]
        }
      },
      link: {
        text: "Learn More",
        url: "/about",
        newTab: false
      }
    },
    {
      width: "1/2",
      richText: {
        root: {
          children: [
            {
              children: [
                {
                  text: "Getting Started"
                }
              ],
              tag: "h2"
            },
            {
              children: [
                {
                  text: "Follow the shadcn/ui approach of copying components into your project for maximum customization and control."
                }
              ]
            }
          ]
        }
      },
      link: {
        text: "View Documentation",
        url: "/docs",
        newTab: true
      }
    }
  ],
  enableContainer: true,
  paddingTop: "lg",
  paddingBottom: "lg"
}`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={[
          {
            title: 'Install the Content Block',
            keyword: 'Install',
            description: 'Add the Content Block to your PayloadKit project using the CLI.',
            content: (
              <Snippet
                command="bunx payloadkit@latest add content"
                title="Install via PayloadKit CLI"
              >
                This will copy the Content Block files into your project and update your registry.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS configuration.',
            content: (
              <CodeBlock
                code={`import { ContentBlock } from './blocks/content'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            ContentBlock, // Add here
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
                code={`import { ContentBlock } from '@/components/blocks/content'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'content') {
          return <ContentBlock key={index} {...block} />
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
                  <li>Column width calculations and responsive breakpoints</li>
                  <li>Typography styles and prose configuration</li>
                  <li>Spacing and gap between columns</li>
                  <li>Link styles and button appearances</li>
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
        description="Complete reference for all props and configuration options available for the Content Block component."
        props={[
          {
            name: 'columns',
            type: 'ContentColumn[]',
            description: 'Array of content columns with flexible width configurations',
            defaultValue: '[]',
            example: '[{ width: "1/2", richText: {...}, link: {...} }]'
          },
          {
            name: 'enableContainer',
            type: 'boolean',
            description: 'Whether to wrap content in a container with max-width',
            defaultValue: 'true',
            example: 'enableContainer={false}'
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
            title="ContentColumn Interface"
            code={`interface ContentColumn {
  width: '1/3' | '1/2' | '2/3' | 'full'  // Column width configuration
  richText: LexicalNode                   // Rich text content from Lexical editor
  link?: {                               // Optional call-to-action link
    text: string
    url: string
    newTab?: boolean
  }
}`}
            language="typescript"
          />

          <CodeBlock
            title="Content Block Props"
            code={`interface ContentBlockProps {
  columns?: ContentColumn[]
  enableContainer?: boolean
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl'
}`}
            language="typescript"
          />

          <CodeBlock
            title="Column Width Guide"
            code={`// Responsive column widths:
'1/3'  => 33.33% on desktop, 100% on mobile
'1/2'  => 50% on desktop, 100% on mobile
'2/3'  => 66.67% on desktop, 100% on mobile
'full' => 100% on all screen sizes

// CSS Classes Generated:
'1/3'  => 'md:flex-[0_0_33.333333%]'
'1/2'  => 'md:flex-[0_0_50%]'
'2/3'  => 'md:flex-[0_0_66.666667%]'
'full' => 'flex-[0_0_100%]'`}
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
          'Content',
          'Rich Text',
          'Multi-column',
          'Lexical Editor',
          'Flexible Layout',
          'Typography',
          'Responsive',
          'PayloadCMS',
          'React',
          'TypeScript'
        ]}
      />
    </div>
  )
}