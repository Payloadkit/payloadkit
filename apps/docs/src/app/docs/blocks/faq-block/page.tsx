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

// Import accordion for demo
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, Lightbulb, Zap, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ Block - PayloadKit',
  description: 'Interactive FAQ block with accordion functionality, built with shadcn/ui Accordion component for optimal accessibility and user experience.',
}

// Demo component for preview
function FaqDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-4 mb-8">
        <div className="text-2xl font-bold text-center">Frequently Asked Questions</div>
        <p className="text-muted-foreground text-center">
          Everything you need to know about PayloadKit
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-4 w-4 text-primary" />
              What is PayloadKit?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            PayloadKit is an open-source framework that provides reusable components, blocks, and templates for PayloadCMS applications, following the shadcn/ui approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-4 w-4 text-primary" />
              How does it work?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Components are copied directly into your project, giving you full control over the code and allowing for easy customization to match your specific needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-3">
              <Zap className="h-4 w-4 text-primary" />
              Is it free?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes! PayloadKit is completely free and open-source under the MIT license. You can use it in any project, commercial or personal.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const installationSteps = [
  {
    title: 'Install the FAQ Block',
    keyword: 'Install',
    description: 'Add the FAQ block to your PayloadKit project using the CLI.',
    content: (
      <Snippet
        command="payloadkit add faq-block"
        title="Install via PayloadKit CLI"
      >
        This will copy the FAQ block files into your project and update your registry.
      </Snippet>
    )
  },
  {
    title: 'Add to PayloadCMS Config',
    keyword: 'Configure',
    description: 'Import and configure the block in your PayloadCMS configuration.',
    content: (
      <CodeBlock
        code={`import { FaqBlock } from './blocks/faq-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            FaqBlock, // Add here
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
        code={`import { FaqBlock } from '@/components/blocks/faq-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block) => {
        if (block.blockType === 'faq-block') {
          return <FaqBlock key={block.id} {...block} />
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
          <li>Colors and styling</li>
          <li>Animation timings</li>
          <li>Icons and layouts</li>
          <li>Additional field types</li>
        </ul>
      </div>
    ),
    optional: true
  }
]

export default function FaqBlockPage() {
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
        title="FAQ Block"
        description="Interactive FAQ section with collapsible questions and answers. Built with shadcn/ui Accordion for accessibility and smooth animations."
        category="blocks"
        version="0.1.0"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="January 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="FAQ Block Preview"
        description="Interactive demonstration of the FAQ block with multiple questions and smooth accordion functionality."
        component={<FaqDemo />}
        code={{
          component: `'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, Lightbulb, Zap } from 'lucide-react'

export function FaqBlock({ faqs, title, description, layout = 'single' }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={\`item-\${index}\`}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-3">
                {faq.icon && (
                  <faq.icon className="h-4 w-4 text-primary" />
                )}
                {faq.question}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
          config: `import { Block } from 'payload/types'
import { HelpCircle, Lightbulb, Zap, Target, Star } from 'lucide-react'

export const FaqBlock: Block = {
  slug: 'faq-block',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'select',
      defaultValue: 'single',
      options: [
        { label: 'Single Column', value: 'single' },
        { label: 'Two Columns', value: 'two-column' },
      ],
    },
    {
      name: 'faqs',
      label: 'FAQ Items',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'richText',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          options: [
            { label: 'Help Circle', value: 'help-circle' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Zap', value: 'zap' },
            { label: 'Target', value: 'target' },
            { label: 'Star', value: 'star' },
          ],
        },
      ],
    },
  ],
}`,
          usage: `// In your page component
import { FaqBlock } from '@/components/blocks/faq-block'

export function PageRenderer({ layout }) {
  return (
    <div>
      {layout.map((block, index) => {
        if (block.blockType === 'faq-block') {
          return <FaqBlock key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

// Example data structure
const exampleFaqs = [
  {
    question: "What is PayloadKit?",
    answer: "PayloadKit is an open-source framework...",
    icon: "help-circle"
  },
  {
    question: "How does it work?",
    answer: "Components are copied directly into your project...",
    icon: "lightbulb"
  }
]`
        }}
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={installationSteps}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="API Reference"
        description="Complete reference for all props and configuration options available for the FAQ Block component."
        props={[
          {
            name: 'faqs',
            type: 'FaqItem[]',
            description: 'Array of FAQ items to display in the accordion',
            required: true,
            example: '[{ question: "What is PayloadKit?", answer: "...", icon: "help-circle" }]'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Main heading displayed above the FAQ list',
            example: 'title="Frequently Asked Questions"'
          },
          {
            name: 'description',
            type: 'string',
            description: 'Subtitle or description text below the title',
            example: 'description="Everything you need to know"'
          },
          {
            name: 'layout',
            type: '"single" | "two-column"',
            description: 'Controls the visual layout of FAQ items',
            defaultValue: '"single"',
            example: 'layout="two-column"'
          },
          {
            name: 'allowMultiple',
            type: 'boolean',
            description: 'Allow multiple accordion items to be open simultaneously',
            defaultValue: 'false',
            example: 'allowMultiple={true}'
          },
          {
            name: 'className',
            type: 'string',
            description: 'Additional CSS classes to apply to the container',
            example: 'className="my-custom-class"'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>

        <div className="space-y-4">
          <CodeBlock
            title="FaqItem Interface"
            code={`interface FaqItem {
  question: string
  answer: string | React.ReactNode
  icon?: 'help-circle' | 'lightbulb' | 'zap' | 'target' | 'star'
}`}
            language="typescript"
          />

          <CodeBlock
            title="Available Icons"
            code={`type IconType =
  | 'help-circle'   // HelpCircle from lucide-react
  | 'lightbulb'     // Lightbulb from lucide-react
  | 'zap'           // Zap from lucide-react
  | 'target'        // Target from lucide-react
  | 'star'          // Star from lucide-react`}
            language="typescript"
          />
        </div>
      </div>

      {/* Tags and Dependencies at the bottom */}
      <PageTags
        category="blocks"
        dependencies={[
          '@radix-ui/react-accordion',
          'lucide-react',
          'clsx',
          'tailwind-merge'
        ]}
        tags={[
          'FAQ',
          'Accordion',
          'Accessibility',
          'shadcn/ui',
          'Radix UI',
          'Interactive',
          'Support',
          'PayloadCMS',
          'React',
          'TypeScript'
        ]}
      />
    </div>
  )
}