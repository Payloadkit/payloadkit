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
  title: 'Feature Steps Block - PayloadKit',
  description: 'Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides.',
}

// Demo components
function FeatureStepsGrid() {
  return (
    <div className="space-y-8 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow these simple steps to get started with our platform and achieve your goals.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '🎯', title: 'Define Your Goals', description: 'Set clear, measurable objectives for your project and identify key success metrics.' },
          { icon: '💡', title: 'Plan Your Strategy', description: 'Develop a comprehensive plan with actionable steps and realistic timelines.' },
          { icon: '🚀', title: 'Execute & Launch', description: 'Implement your plan methodically and launch with confidence and support.' }
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
              {i + 1}
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-card">
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureStepsVertical() {
  return (
    <div className="space-y-8 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-3">
        <div className="inline-flex px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mb-2">
          📋 Process Guide
        </div>
        <h2 className="text-2xl font-bold">Our Development Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A streamlined workflow designed to deliver exceptional results on time and within budget.
        </p>
      </div>
      <div className="space-y-6 max-w-2xl mx-auto">
        {[
          { icon: '📊', title: 'Research & Analysis', description: 'Deep dive into your requirements, market research, and competitor analysis.' },
          { icon: '🎨', title: 'Design & Prototyping', description: 'Create wireframes, mockups, and interactive prototypes for validation.' },
          { icon: '⚙️', title: 'Development & Testing', description: 'Build your solution with rigorous testing at every stage of development.' },
          { icon: '🚀', title: 'Launch & Support', description: 'Deploy to production and provide ongoing maintenance and support.' }
        ].map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              {i < 3 && <div className="w-px h-8 bg-border mt-2" />}
            </div>
            <div className="flex-1 pb-8">
              <div className="text-2xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureStepsStair() {
  return (
    <div className="space-y-8 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Growth Pathway</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Progressive steps to scale your business and achieve sustainable growth.
        </p>
      </div>
      <div className="space-y-4">
        {[
          { icon: '🌱', title: 'Foundation', description: 'Establish your core business model and initial market presence.', color: 'bg-green-100 text-green-600' },
          { icon: '📈', title: 'Scale', description: 'Expand operations, optimize processes, and grow your customer base.', color: 'bg-blue-100 text-blue-600' },
          { icon: '🏆', title: 'Optimize', description: 'Fine-tune performance, maximize efficiency, and lead your market.', color: 'bg-yellow-100 text-yellow-600' }
        ].map((step, i) => (
          <div key={i} className={`ml-${i * 8} p-6 border rounded-lg hover:shadow-md transition-all bg-card max-w-md`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.color}`}>
                <span className="text-xl">{step.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              <div className="text-2xl font-bold text-muted-foreground/30">
                {i + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeatureStepsBlockPage() {
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
        title="Feature Steps Block"
        description="Feature steps block with numbered steps, multiple layouts, and advantages section. Perfect for explaining processes, workflows, and step-by-step guides."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="8 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Feature Steps Block Preview"
        description="Interactive demonstration of different step layouts and styling options for process visualization."
        variants={[
          {
            name: "Grid Layout",
            description: "3-column grid with numbered cards, perfect for key processes and workflows.",
            component: <FeatureStepsGrid />
          },
          {
            name: "Vertical Layout",
            description: "Timeline-style vertical layout ideal for sequential processes.",
            component: <FeatureStepsVertical />
          },
          {
            name: "Stair Layout",
            description: "Staggered stair design for progressive steps and growth pathways.",
            component: <FeatureStepsStair />
          }
        ]}
        code={{
          component: `// React Component Usage
import { FeatureStepsBlockComponent } from './blocks/feature-steps-block'

// Grid Layout Example
<FeatureStepsBlockComponent
  title="How It Works"
  subtitle="Follow these simple steps"
  stepsLayout="grid-3"
  showStepNumbers={true}
  cardStyle="elevated"
  steps={[
    {
      icon: 'target',
      title: 'Define Your Goals',
      description: 'Set clear, measurable objectives for your project.'
    },
    {
      icon: 'lightbulb',
      title: 'Plan Your Strategy',
      description: 'Develop a comprehensive plan to achieve your goals.'
    },
    {
      icon: 'rocket',
      title: 'Execute & Launch',
      description: 'Implement your plan and launch your project.'
    }
  ]}
/>

// Vertical Layout Example
<FeatureStepsBlockComponent
  title="Our Development Process"
  stepsLayout="vertical"
  showStepNumbers={true}
  cardStyle="minimal"
  steps={[
    { icon: 'search', title: 'Research & Analysis', description: 'Deep dive into requirements' },
    { icon: 'palette', title: 'Design & Prototyping', description: 'Create wireframes and mockups' },
    { icon: 'settings', title: 'Development & Testing', description: 'Build with rigorous testing' },
    { icon: 'rocket', title: 'Launch & Support', description: 'Deploy and provide ongoing support' }
  ]}
/>

// Stair Layout Example
<FeatureStepsBlockComponent
  title="Growth Pathway"
  stepsLayout="stair"
  showStepNumbers={false}
  cardStyle="flat"
  steps={[
    { icon: 'trending-up', title: 'Foundation', description: 'Establish core business model' },
    { icon: 'bar-chart', title: 'Scale', description: 'Expand operations and grow' },
    { icon: 'trophy', title: 'Optimize', description: 'Fine-tune and lead market' }
  ]}
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const FeatureStepsBlock: Block = {
  slug: 'feature-steps-block',
  labels: {
    singular: 'Feature Steps Block',
    plural: 'Feature Steps Blocks'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle'
    },
    {
      name: 'sectionLayout',
      type: 'select',
      label: 'Section Layout',
      defaultValue: 'stacked',
      options: [
        { label: 'Stacked', value: 'stacked' },
        { label: 'Two Column', value: 'two-column' }
      ]
    },
    {
      name: 'stepsLayout',
      type: 'select',
      label: 'Steps Layout',
      defaultValue: 'grid-3',
      options: [
        { label: '2 Columns', value: 'grid-2' },
        { label: '3 Columns', value: 'grid-3' },
        { label: '4 Columns', value: 'grid-4' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Stair', value: 'stair' }
      ]
    },
    {
      name: 'cardStyle',
      type: 'select',
      label: 'Card Style',
      defaultValue: 'elevated',
      options: [
        { label: 'Elevated', value: 'elevated' },
        { label: 'Flat', value: 'flat' },
        { label: 'Minimal', value: 'minimal' }
      ]
    },
    {
      name: 'showStepNumbers',
      type: 'checkbox',
      label: 'Show Step Numbers',
      defaultValue: true
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Target', value: 'target' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Rocket', value: 'rocket' },
            // ... more icon options
          ]
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description'
        }
      ]
    }
  ]
}`,
          usage: `// Frontend Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function ProcessPage({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// Block Rendering
import { FeatureStepsBlockComponent } from './feature-steps-block/Component'

const blockComponents = {
  'feature-steps-block': FeatureStepsBlockComponent
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
            description: 'Add Feature Steps Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit add feature-steps-block" title="Install via PayloadKit CLI">
                This will copy the Feature Steps Block files and install required icon dependencies.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`import { FeatureStepsBlock } from '@/blocks/feature-steps-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            FeatureStepsBlock,
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
                code={`import { FeatureStepsBlockComponent } from '@/blocks/feature-steps-block/Component'

// Process workflow example
<FeatureStepsBlockComponent
  title="Our Process"
  subtitle="How we deliver results"
  stepsLayout="grid-3"
  showStepNumbers={true}
  cardStyle="elevated"
  steps={[
    {
      icon: 'target',
      title: 'Discovery',
      description: 'We analyze your needs and define clear objectives'
    },
    {
      icon: 'lightbulb',
      title: 'Strategy',
      description: 'Develop a comprehensive plan tailored to your goals'
    },
    {
      icon: 'rocket',
      title: 'Execution',
      description: 'Implement and launch with precision and support'
    }
  ]}
  showAdvantages={true}
  advantages={[
    { text: "Proven methodology" },
    { text: "Expert guidance" },
    { text: "Measurable results" }
  ]}
/>`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Customize Layouts & Icons',
            keyword: 'Customize',
            description: 'Explore different layouts and icon options.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Layout options available:</p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Grid layouts: 2-col, 3-col, 4-col for structured processes</li>
                  <li>Vertical layout: Timeline-style for sequential steps</li>
                  <li>Stair layout: Progressive staggered design</li>
                  <li>16 Lucide icons: target, lightbulb, rocket, and more</li>
                  <li>3 card styles: elevated, flat, minimal</li>
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
        description="Complete props reference for the Feature Steps Block component."
        props={[
          {
            name: 'title',
            type: 'string',
            description: 'Section heading title',
            required: false,
            example: 'title="How It Works"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Optional section subtitle',
            required: false,
            example: 'subtitle="Follow these steps"'
          },
          {
            name: 'sectionLayout',
            type: '"stacked" | "two-column"',
            description: 'Overall section layout style',
            required: false,
            defaultValue: '"stacked"',
            example: 'sectionLayout="stacked"'
          },
          {
            name: 'stepsLayout',
            type: '"grid-2" | "grid-3" | "grid-4" | "vertical" | "stair"',
            description: 'Layout arrangement for the steps',
            required: false,
            defaultValue: '"grid-3"',
            example: 'stepsLayout="grid-3"'
          },
          {
            name: 'cardStyle',
            type: '"elevated" | "flat" | "minimal"',
            description: 'Visual style for step cards',
            required: false,
            defaultValue: '"elevated"',
            example: 'cardStyle="elevated"'
          },
          {
            name: 'showStepNumbers',
            type: 'boolean',
            description: 'Display numbered step indicators',
            required: false,
            defaultValue: 'true',
            example: 'showStepNumbers={true}'
          },
          {
            name: 'steps',
            type: 'Step[]',
            description: 'Array of step objects with icon, title, and description',
            required: true,
            example: 'steps={[{ icon: "target", title: "Step 1", description: "Description" }]}'
          },
          {
            name: 'showAdvantages',
            type: 'boolean',
            description: 'Show advantages section with checkmarks',
            required: false,
            defaultValue: 'false',
            example: 'showAdvantages={true}'
          },
          {
            name: 'advantages',
            type: 'Advantage[]',
            description: 'Array of advantage items (when showAdvantages is true)',
            required: false,
            example: 'advantages={[{ text: "Easy to follow" }]}'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="FeatureStepsBlockProps Interface"
          code={`interface FeatureStepsBlockProps {
  title?: string
  subtitle?: string
  description?: string
  sectionLayout?: 'stacked' | 'two-column'
  stepsLayout?: 'grid-2' | 'grid-3' | 'grid-4' | 'vertical' | 'stair'
  cardStyle?: 'elevated' | 'flat' | 'minimal'
  showStepNumbers?: boolean
  steps: Step[]
  showAdvantages?: boolean
  advantages?: Advantage[]
}

interface Step {
  icon: StepIcon
  title: string
  description?: string
  image?: string | Media
}

interface Advantage {
  text: string
}

type StepIcon =
  | 'target'
  | 'message-circle'
  | 'trending-up'
  | 'book-open'
  | 'lightbulb'
  | 'zap'
  | 'search'
  | 'star'
  | 'rocket'
  | 'graduation-cap'
  | 'settings'
  | 'bar-chart'
  | 'shield'
  | 'heart'
  | 'trophy'
  | 'palette'`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', 'next']}
        tags={['steps', 'process', 'workflow', 'tutorial', 'guide', 'numbered', 'timeline']}
      />
    </div>
  )
}