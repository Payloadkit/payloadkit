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
  title: 'Cal.com Block - PayloadKit',
  description: 'Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types.',
}

// Demo components
function CalComFullWidth() {
  return (
    <div className="space-y-6 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Book Your Free Consultation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Schedule a call with our expert team to discuss your project needs and get personalized recommendations.
        </p>
      </div>
      <div className="bg-muted/30 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center">
            📅
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Cal.com Calendar</h3>
            <p className="text-sm text-muted-foreground">Full-width calendar integration</p>
            <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
              calcom-username/30-minute-consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalComSplitContent() {
  return (
    <div className="p-6 border rounded-lg bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              📞 Consultation
            </div>
            <h2 className="text-2xl font-bold">Book a Strategy Call</h2>
            <p className="text-muted-foreground">
              Get expert advice tailored to your specific needs. Our team will help you navigate challenges and opportunities.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                ✓
              </div>
              <span className="text-sm">Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                ⏱️
              </div>
              <span className="text-sm">30-minute sessions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                🔒
              </div>
              <span className="text-sm">Secure & private</span>
            </div>
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-6 min-h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center">
              📅
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Calendar Widget</h4>
              <p className="text-xs text-muted-foreground">Split layout view</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalComSplitCalendar() {
  return (
    <div className="p-6 border rounded-lg bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-muted/30 rounded-lg p-6 min-h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full mx-auto flex items-center justify-center">
              📅
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Calendar First</h4>
              <p className="text-xs text-muted-foreground">Left-positioned calendar</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Quick Booking</h2>
            <p className="text-muted-foreground">
              Fast and efficient appointment scheduling with calendar-first layout for immediate time selection.
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-medium text-purple-600">Available Times</div>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">9:00 AM</div>
              <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">2:00 PM</div>
              <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">4:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CalComBlockPage() {
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
        title="Cal.com Block"
        description="Cal.com integration block for seamless appointment scheduling. Features multiple layouts, customizable content, and full Cal.com embed support with themes and event types."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="intermediate"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Cal.com Block Preview"
        description="Interactive demonstration of different Cal.com integration layouts and configurations."
        variants={[
          {
            name: "Full Width",
            description: "Full-width calendar with header content above the booking interface.",
            component: <CalComFullWidth />
          },
          {
            name: "Split Content",
            description: "Content on the left, calendar on the right with feature highlights.",
            component: <CalComSplitContent />
          },
          {
            name: "Split Calendar",
            description: "Calendar on the left, content on the right for quick booking flow.",
            component: <CalComSplitCalendar />
          }
        ]}
        code={{
          component: `// React Component Usage
import { CalComBlockComponent } from '@/blocks/calcom-block'

// Full Width Layout
<CalComBlockComponent
  calcomUsername="your-username"
  eventType="30-minute-consultation"
  layout="full-width"
  title="Book Your Free Consultation"
  subtitle="Schedule a call with our expert team"
  description="Choose a time that works best for you."
  theme="auto"
  height="lg"
/>

// Split Content Layout
<CalComBlockComponent
  calcomUsername="your-username"
  layout="split-content"
  title="Book a Strategy Call"
  subtitle="Get expert advice tailored to your needs"
  theme="light"
  height="md"
  features={[
    { icon: "calendar", text: "Flexible scheduling" },
    { icon: "clock", text: "30-minute sessions" },
    { icon: "shield", text: "Secure & private" }
  ]}
/>

// Split Calendar Layout
<CalComBlockComponent
  calcomUsername="your-username"
  eventType="quick-chat"
  layout="split-calendar"
  title="Quick Booking"
  description="Fast appointment scheduling"
  theme="dark"
  height="sm"
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const CalComBlock: Block = {
  slug: 'calcom-block',
  labels: {
    singular: 'Cal.com Block',
    plural: 'Cal.com Blocks'
  },
  fields: [
    {
      name: 'calcomUsername',
      type: 'text',
      label: 'Cal.com Username',
      required: true,
      admin: {
        description: 'Your Cal.com username (without @)'
      }
    },
    {
      name: 'eventType',
      type: 'text',
      label: 'Event Type Slug',
      admin: {
        description: 'Specific event type (optional)'
      }
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'full-width',
      options: [
        { label: 'Full Width', value: 'full-width' },
        { label: 'Split Content', value: 'split-content' },
        { label: 'Split Calendar', value: 'split-calendar' }
      ]
    },
    {
      name: 'theme',
      type: 'select',
      label: 'Calendar Theme',
      defaultValue: 'auto',
      options: [
        { label: 'Auto', value: 'auto' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' }
      ]
    },
    {
      name: 'height',
      type: 'select',
      label: 'Calendar Height',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Auto', value: 'auto' }
      ]
    }
  ]
}`,
          usage: `// Frontend Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function BookingPage({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// Block Rendering
import { CalComBlockComponent } from '@/blocks/calcom-block'

const blockComponents = {
  'calcom-block': CalComBlockComponent
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
            description: 'Add Cal.com Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit@latest add calcom-block" title="Install via PayloadKit CLI">
                This will copy the Cal.com Block files and install the Cal.com embed script dependency.
              </Snippet>
            )
          },
          {
            title: 'Create Cal.com Account',
            keyword: 'Setup',
            description: 'Set up your Cal.com account and event types.',
            content: (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900/20 dark:border-blue-800">
                  <div className="text-sm space-y-2">
                    <p className="font-medium text-blue-900 dark:text-blue-100">Prerequisites:</p>
                    <ol className="list-decimal list-inside space-y-1 text-blue-800 dark:text-blue-200">
                      <li>Sign up at <a href="https://cal.com" className="underline" target="_blank" rel="noopener">cal.com</a></li>
                      <li>Choose your username (e.g., "john-doe")</li>
                      <li>Create event types (e.g., "30-minute-consultation")</li>
                    </ol>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`import { CalComBlock } from '@/blocks/calcom-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            CalComBlock,
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
                code={`import { CalComBlockComponent } from '@/blocks/calcom-block'

// Basic usage
<CalComBlockComponent
  calcomUsername="your-username"
  eventType="30-minute-consultation"
  layout="split-content"
  title="Book Your Consultation"
  description="Schedule a time that works for you"
  theme="auto"
  height="lg"
/>

// With features list
<CalComBlockComponent
  calcomUsername="your-username"
  layout="split-content"
  title="Schedule a Call"
  features={[
    { icon: "calendar", text: "Flexible scheduling" },
    { icon: "clock", text: "30-minute sessions" },
    { icon: "shield", text: "Secure & private" }
  ]}
/>`}
                language="tsx"
                title="Page Component"
              />
            )
          }
        ]}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="API Reference"
        description="Complete props reference for the Cal.com Block component."
        props={[
          {
            name: 'calcomUsername',
            type: 'string',
            description: 'Your Cal.com username (required)',
            required: true,
            example: 'calcomUsername="john-doe"'
          },
          {
            name: 'eventType',
            type: 'string',
            description: 'Specific event type slug (optional)',
            required: false,
            example: 'eventType="30-minute-consultation"'
          },
          {
            name: 'layout',
            type: '"full-width" | "split-content" | "split-calendar"',
            description: 'Block layout style',
            required: false,
            defaultValue: '"full-width"',
            example: 'layout="split-content"'
          },
          {
            name: 'theme',
            type: '"auto" | "light" | "dark"',
            description: 'Calendar theme appearance',
            required: false,
            defaultValue: '"auto"',
            example: 'theme="light"'
          },
          {
            name: 'height',
            type: '"sm" | "md" | "lg" | "auto"',
            description: 'Calendar height setting',
            required: false,
            defaultValue: '"lg"',
            example: 'height="md"'
          },
          {
            name: 'title',
            type: 'string',
            description: 'Section heading title',
            required: false,
            example: 'title="Book a Consultation"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Optional section subtitle',
            required: false,
            example: 'subtitle="Schedule time with our experts"'
          },
          {
            name: 'description',
            type: 'string',
            description: 'Section description text',
            required: false,
            example: 'description="Choose a time that works for you"'
          },
          {
            name: 'features',
            type: 'Feature[]',
            description: 'Array of feature items with icons',
            required: false,
            example: 'features={[{ icon: "calendar", text: "Flexible scheduling" }]}'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="CalComBlockProps Interface"
          code={`interface CalComBlockProps {
  calcomUsername: string
  eventType?: string
  layout?: 'full-width' | 'split-content' | 'split-calendar'
  theme?: 'auto' | 'light' | 'dark'
  height?: 'sm' | 'md' | 'lg' | 'auto'
  title?: string
  subtitle?: string
  description?: string
  features?: Feature[]
}

interface Feature {
  icon: FeatureIcon
  text: string
}

type FeatureIcon =
  | 'calendar'
  | 'clock'
  | 'message-circle'
  | 'phone'
  | 'target'
  | 'check'
  | 'star'
  | 'shield'`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', '@calcom/embed-react']}
        tags={['scheduling', 'calendar', 'booking', 'integration', 'appointments', 'cal.com']}
      />
    </div>
  )
}