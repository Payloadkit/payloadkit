import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Type, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Text Block Component - PayloadKit',
  description: 'Simple text block with optional title and rich text content, featuring alignment controls and width options.',
}

// Demo components for TextBlock
function SimpleTextDemo() {
  return (
    <div className="w-full max-w-prose mx-auto p-6 border rounded-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Welcome to PayloadKit</h3>
        <div className="prose text-muted-foreground">
          <p>
            This is a simple text block with a title and rich content. The text block component supports
            various formatting options including <strong>bold text</strong>, <em>italics</em>, and
            <a href="#" className="text-primary hover:underline">links</a>.
          </p>
          <p>
            You can create multiple paragraphs with proper spacing and styling that adapts to your
            design system automatically.
          </p>
        </div>
      </div>
    </div>
  )
}

function CenteredTextDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg">
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <AlignCenter className="w-5 h-5" />
          Centered Content
        </h3>
        <div className="prose text-muted-foreground">
          <p>
            This text block is perfectly centered, making it ideal for hero sections,
            call-to-action areas, or any content that needs to grab attention.
          </p>
          <p>
            Great for quotes, testimonials, or featured content.
          </p>
        </div>
      </div>
    </div>
  )
}

function FullWidthTextDemo() {
  return (
    <div className="w-full p-6 border rounded-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Full Width Layout</h3>
        <div className="prose max-w-none text-muted-foreground">
          <p>
            This text block uses the full available width, perfect for detailed content, documentation,
            or when you need to maximize the reading space. The content flows naturally across the
            entire container width while maintaining readable line lengths.
          </p>
          <p>
            Full width blocks are excellent for rich content with lists, code blocks, or complex
            formatting that benefits from additional horizontal space.
          </p>
        </div>
      </div>
    </div>
  )
}

const componentCode = `// TextBlock.tsx - Rich text content component
'use client'

import { RichText } from '@/components/RichText'
import { cn } from '@/lib/utils'

interface TextBlockProps {
  title?: string
  content: any // Rich text content from PayloadCMS
  alignment?: 'left' | 'center' | 'right'
  width?: 'prose' | 'medium' | 'large' | 'full'
  className?: string
}

export function TextBlock({
  title,
  content,
  alignment = 'left',
  width = 'prose',
  className
}: TextBlockProps) {
  const widthClasses = {
    prose: 'max-w-prose',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-none'
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  const containerClasses = cn(
    'space-y-4',
    widthClasses[width],
    alignmentClasses[alignment],
    className
  )

  return (
    <div className={containerClasses}>
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      )}

      <div className={cn(
        'prose prose-gray dark:prose-invert',
        width === 'full' && 'max-w-none',
        alignment === 'center' && 'prose-center',
        alignment === 'right' && 'prose-right'
      )}>
        <RichText content={content} />
      </div>
    </div>
  )
}`

const configCode = `// config.ts - PayloadCMS Block Configuration
import type { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'text-block',
  labels: {
    singular: 'Text Block',
    plural: 'Text Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Optional heading above the content',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
      editor: {
        // Configure Lexical editor features
        features: [
          'bold',
          'italic',
          'underline',
          'link',
          'ol',
          'ul',
          'indent',
          'heading',
          'blockquote',
          'code',
          'codeblock'
        ],
      },
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Text Alignment',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'width',
      type: 'select',
      label: 'Content Width',
      defaultValue: 'prose',
      options: [
        { label: 'Prose (65ch)', value: 'prose' },
        { label: 'Medium (672px)', value: 'medium' },
        { label: 'Large (896px)', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
    },
  ],
}`

const usageCode = `// Using TextBlock in your pages
import { TextBlock } from '@/blocks/text-block'

// Add to your collection configuration
export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        TextBlock,
        // Other blocks...
      ],
    },
  ],
}

// Frontend rendering
import { TextBlock } from '@/blocks/text-block'

export default function RenderBlocks({ blocks }: { blocks: any[] }) {
  return (
    <div>
      {blocks?.map((block, index) => {
        if (block.blockType === 'text-block') {
          return (
            <TextBlock
              key={index}
              title={block.title}
              content={block.content}
              alignment={block.alignment}
              width={block.width}
            />
          )
        }
        return null
      })}
    </div>
  )
}`

export default function TextBlockPage() {
  const steps = [
    {
      title: 'Install TextBlock',
      keyword: 'Install',
      description: 'Add the text block to your PayloadCMS project',
      content: (
        <Snippet command="bunx payloadkit add text-block">
          Install TextBlock component with rich text editing and formatting capabilities.
        </Snippet>
      )
    },
    {
      title: 'Install RichText Component',
      keyword: 'Setup RichText',
      description: 'Ensure you have the RichText renderer component',
      content: (
        <CodeBlock
          code={`// Install the RichText component dependency
bunx payloadkit add rich-text

// Or create manually at components/RichText.tsx
import { JSXConverters } from '@payloadcms/richtext-lexical/client'

export function RichText({ content }: { content: any }) {
  return <JSXConverters richTextData={content} />
}`}
          language="bash"
        />
      )
    },
    {
      title: 'Add to Collection',
      keyword: 'Integration',
      description: 'Add TextBlock to your page or post blocks',
      content: (
        <CodeBlock
          code={`import { TextBlock } from '@/blocks/text-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        TextBlock,
        // Other blocks...
      ],
    },
  ],
}`}
          language="typescript"
        />
      )
    },
    {
      title: 'Style with Tailwind Typography',
      keyword: 'Styling',
      description: 'Configure Tailwind Typography for rich text styling',
      content: (
        <CodeBlock
          code={`// Install Tailwind Typography
npm install @tailwindcss/typography

// Add to tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
          },
        },
      },
    },
  },
}`}
          language="javascript"
        />
      )
    }
  ]

  const apiProps = [
    {
      name: 'title',
      type: 'string',
      description: 'Optional heading displayed above the content',
      required: false
    },
    {
      name: 'content',
      type: 'RichTextContent',
      description: 'Rich text content from PayloadCMS Lexical editor',
      required: true
    },
    {
      name: 'alignment',
      type: "'left' | 'center' | 'right'",
      description: 'Text alignment for the entire block',
      defaultValue: "'left'",
      required: false
    },
    {
      name: 'width',
      type: "'prose' | 'medium' | 'large' | 'full'",
      description: 'Maximum width constraint for the content',
      defaultValue: "'prose'",
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply to the container',
      required: false
    }
  ]

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
        title="Text Block"
        description="Simple text block with optional title and rich text content, featuring alignment controls and width options."
        category="components"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="4 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Text Block Examples"
        description="Interactive demonstrations of different text formatting and alignment options"
        variants={[
          {
            name: 'Simple',
            description: 'Basic text block with title and prose width',
            component: <SimpleTextDemo />
          },
          {
            name: 'Centered',
            description: 'Center-aligned content for highlights',
            component: <CenteredTextDemo />
          },
          {
            name: 'Full Width',
            description: 'Full-width content for detailed text',
            component: <FullWidthTextDemo />
          }
        ]}
        code={{
          component: componentCode,
          config: configCode,
          usage: usageCode
        }}
        responsive
        interactive
      />

      {/* Tutorial Steps */}
      <TutorialSteps
        title="Installation & Setup"
        steps={steps}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="TextBlock Props"
        description="Configuration options for the TextBlock component"
        props={apiProps}
      />

      {/* Rich Text Features */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Rich Text Editor Features</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Text Formatting</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <strong>Bold</strong> text formatting</li>
              <li>• <em>Italic</em> text styling</li>
              <li>• <u>Underlined</u> text</li>
              <li>• <code>Inline code</code> formatting</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Structure Elements</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Headings (H1-H6)</li>
              <li>• Bulleted lists</li>
              <li>• Numbered lists</li>
              <li>• Block quotes</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Advanced Features</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Clickable links</li>
              <li>• Code blocks with syntax</li>
              <li>• Text indentation</li>
              <li>• Custom styling hooks</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Layout Options</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Prose width (65ch)</li>
              <li>• Medium width (672px)</li>
              <li>• Large width (896px)</li>
              <li>• Full container width</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Configuration Examples</div>
        <CodeBlock
          code={`// Simple text block with title
{
  blockType: 'text-block',
  title: 'About Our Company',
  content: richTextContent,
  alignment: 'left',
  width: 'prose'
}

// Centered call-to-action text
{
  blockType: 'text-block',
  title: 'Ready to Get Started?',
  content: ctaContent,
  alignment: 'center',
  width: 'medium'
}

// Full-width documentation content
{
  blockType: 'text-block',
  title: 'API Documentation',
  content: documentationContent,
  alignment: 'left',
  width: 'full'
}`}
          language="typescript"
          title="Block Configuration Examples"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="components"
        dependencies={['@payloadcms/richtext-lexical', '@tailwindcss/typography', 'payload', 'react']}
        tags={['text', 'content', 'rich-text', 'editor', 'lexical', 'typography', 'block']}
      />
    </div>
  )
}