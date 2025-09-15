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
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
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
        description="Interactive FAQ block with accordion functionality, built with shadcn/ui Accordion component for optimal accessibility and user experience. Perfect for support pages, product documentation, and customer service sections."
        category="blocks"
        version="0.1.0"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="December 2024"
        features={[
          'Built with shadcn/ui Accordion component',
          'Full Radix UI integration with WCAG compliance',
          'Single or multiple expandable modes',
          'Smooth native animations',
          '15 optional Lucide React icons',
          'Two layout options: single/two-column',
          'Customizable borders and backgrounds',
          'Rich text support for answers',
          'Mobile-first responsive design',
          'Theme integration with design tokens'
        ]}
        tags={[
          'FAQ',
          'Accordion',
          'Accessibility',
          'shadcn/ui',
          'Radix UI',
          'Interactive',
          'Support'
        ]}
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
        dependencies={[
          '@radix-ui/react-accordion',
          'lucide-react',
          'clsx',
          'tailwind-merge'
        ]}
        features={[
          'Keyboard Navigation',
          'Screen Reader Support',
          'Smooth Animations',
          'Customizable Icons',
          'Rich Text Content'
        ]}
        responsive
        interactive
      />

      {/* Installation Tutorial */}
      <TutorialSteps
        title="Installation & Setup"
        steps={installationSteps}
        allowSkip
      />
    </div>
  )
}