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
  title: 'Outline Block - PayloadKit',
  description: 'Automatic table of contents generator with multiple positioning options, styles, and interactive features. Perfect for long-form content, documentation, and articles.',
}

// Demo components
function OutlineInline() {
  return (
    <div className="space-y-6 p-6 border rounded-lg bg-background">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Table of Contents</h2>
        <p className="text-sm text-muted-foreground">Inline placement within content flow</p>
      </div>
      <div className="space-y-3 border rounded-lg p-4 bg-card">
        <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded cursor-pointer">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-sm font-medium">Introduction</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded cursor-pointer ml-4">
          <div className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
          <span className="text-sm text-muted-foreground">Getting Started</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded cursor-pointer ml-4">
          <div className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
          <span className="text-sm text-muted-foreground">Installation</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded cursor-pointer">
          <div className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
          <span className="text-sm text-muted-foreground">Configuration</span>
        </div>
        <div className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded cursor-pointer ml-4">
          <div className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
          <span className="text-sm text-muted-foreground">Basic Setup</span>
        </div>
      </div>
    </div>
  )
}

function OutlineStickyRight() {
  return (
    <div className="flex gap-6 p-6 border rounded-lg bg-background min-h-[400px]">
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Article Content</h2>
          <p className="text-sm text-muted-foreground">Main content area with headings and sections.</p>
        </div>
        <div className="space-y-6">
          <div className="p-4 border rounded bg-muted/30">
            <h3 className="font-semibold mb-2">Introduction</h3>
            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="p-4 border rounded bg-muted/20">
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <p className="text-sm text-muted-foreground">Sed do eiusmod tempor incididunt ut labore...</p>
          </div>
          <div className="p-4 border rounded bg-muted/20">
            <h3 className="font-semibold mb-2">Configuration</h3>
            <p className="text-sm text-muted-foreground">Ut enim ad minim veniam, quis nostrud...</p>
          </div>
        </div>
      </div>
      <div className="w-64 sticky top-4 h-fit">
        <div className="p-4 border rounded-lg bg-card shadow-sm">
          <h4 className="font-semibold text-sm mb-3">Contents</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-1 bg-primary/10 text-primary rounded text-sm">
              <div className="w-1 h-4 bg-primary rounded" />
              <span className="font-medium">Introduction</span>
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-muted/50 rounded text-sm cursor-pointer">
              <div className="w-1 h-4 bg-transparent" />
              <span>Getting Started</span>
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-muted/50 rounded text-sm cursor-pointer">
              <div className="w-1 h-4 bg-transparent" />
              <span>Configuration</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t">
            <div className="text-xs text-muted-foreground mb-1">Reading progress</div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-primary h-1 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OutlineFloating() {
  return (
    <div className="relative p-6 border rounded-lg bg-background min-h-[400px]">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Mobile-First Design</h2>
          <p className="text-sm text-muted-foreground">Floating outline that adapts to different screen sizes.</p>
        </div>
        <div className="grid gap-4">
          <div className="p-4 border rounded bg-muted/30">
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-sm text-muted-foreground">Content section with responsive design...</p>
          </div>
          <div className="p-4 border rounded bg-muted/20">
            <h3 className="font-semibold mb-2">Features</h3>
            <p className="text-sm text-muted-foreground">Key features and capabilities...</p>
          </div>
        </div>
      </div>

      {/* Floating TOC */}
      <div className="absolute top-4 right-4 w-48 bg-card border rounded-lg shadow-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-xs">TOC</h4>
          <button className="p-1 hover:bg-muted rounded">
            <div className="w-3 h-3 border rounded-sm bg-muted-foreground/20" />
          </button>
        </div>
        <div className="space-y-1">
          {['Overview', 'Features', 'Usage', 'Examples'].map((item, i) => (
            <div key={i} className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
              i === 0 ? 'bg-primary/10 text-primary' : 'hover:bg-muted/50'
            }`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function OutlineBlockPage() {
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
        title="Outline Block"
        description="Automatic table of contents generator with multiple positioning options, styles, and interactive features. Perfect for long-form content, documentation, and articles."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="intermediate"
        estimatedTime="12 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Outline Block Preview"
        description="Interactive demonstration of different table of contents positioning and styling options."
        variants={[
          {
            name: "Inline",
            description: "Table of contents placed inline within the content flow.",
            component: <OutlineInline />
          },
          {
            name: "Sticky Right",
            description: "Fixed position on the right side, perfect for documentation.",
            component: <OutlineStickyRight />
          },
          {
            name: "Floating",
            description: "Collapsible floating TOC that adapts to mobile screens.",
            component: <OutlineFloating />
          }
        ]}
        code={{
          component: `// React Component Usage
import { OutlineBlockComponent } from './blocks/outline-block'

// Auto-Detection Mode
<OutlineBlockComponent
  sourceType="auto"
  contentSelector=".prose, .content, article"
  headingLevels={[
    { level: 'h2' },
    { level: 'h3' },
    { level: 'h4' }
  ]}
  position="sticky-right"
  style="card"
  highlightActive={true}
  showProgress={true}
  smoothScroll={true}
/>

// Manual Mode
<OutlineBlockComponent
  sourceType="manual"
  manualItems={[
    { title: 'Introduction', anchor: '#introduction', level: 1 },
    { title: 'Getting Started', anchor: '#getting-started', level: 1 },
    { title: 'Installation', anchor: '#installation', level: 2 },
    { title: 'Configuration', anchor: '#configuration', level: 2 }
  ]}
  position="floating"
  style="numbered"
  collapsible={true}
  initiallyCollapsed={false}
/>

// Inline Positioning
<OutlineBlockComponent
  sourceType="auto"
  position="inline"
  style="simple"
  maxWidth="full"
  highlightActive={false}
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const OutlineBlock: Block = {
  slug: 'outline-block',
  labels: {
    singular: 'Outline Block',
    plural: 'Outline Blocks'
  },
  fields: [
    {
      name: 'sourceType',
      type: 'select',
      label: 'Content Source',
      defaultValue: 'auto',
      options: [
        { label: 'Auto-detect', value: 'auto' },
        { label: 'Manual', value: 'manual' }
      ]
    },
    {
      name: 'contentSelector',
      type: 'text',
      label: 'Content Selector',
      defaultValue: '.prose, .content, article, main',
      admin: {
        condition: (_, siblingData) => siblingData.sourceType === 'auto',
        description: 'CSS selector to find content headings'
      }
    },
    {
      name: 'headingLevels',
      type: 'array',
      label: 'Heading Levels',
      defaultValue: [
        { level: 'h2' },
        { level: 'h3' },
        { level: 'h4' }
      ],
      fields: [
        {
          name: 'level',
          type: 'select',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' }
          ]
        }
      ],
      admin: {
        condition: (_, siblingData) => siblingData.sourceType === 'auto'
      }
    },
    {
      name: 'position',
      type: 'select',
      label: 'Position',
      defaultValue: 'inline',
      options: [
        { label: 'Inline', value: 'inline' },
        { label: 'Sticky Left', value: 'sticky-left' },
        { label: 'Sticky Right', value: 'sticky-right' },
        { label: 'Floating', value: 'floating' }
      ]
    },
    {
      name: 'style',
      type: 'select',
      label: 'Style',
      defaultValue: 'card',
      options: [
        { label: 'Simple', value: 'simple' },
        { label: 'Card', value: 'card' },
        { label: 'Pills', value: 'pills' },
        { label: 'Numbered', value: 'numbered' },
        { label: 'Dots', value: 'dots' }
      ]
    }
  ]
}`,
          usage: `// Frontend Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function DocumentationPage({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// Block Rendering
import { OutlineBlockComponent } from './outline-block/Component'

const blockComponents = {
  'outline-block': OutlineBlockComponent
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
            description: 'Add Outline Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit add outline-block" title="Install via PayloadKit CLI">
                This will copy the Outline Block files and install dependencies for scroll detection and DOM manipulation.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`import { OutlineBlock } from '@/blocks/outline-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            OutlineBlock,
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
            title: 'Prepare Content Structure',
            keyword: 'Structure',
            description: 'Ensure your content has proper heading hierarchy.',
            content: (
              <CodeBlock
                code={`// Example content structure
<article className="prose">
  <h1>Main Title</h1>

  <h2 id="introduction">Introduction</h2>
  <p>Content here...</p>

  <h2 id="getting-started">Getting Started</h2>
  <p>More content...</p>

  <h3 id="installation">Installation</h3>
  <p>Installation steps...</p>

  <h3 id="configuration">Configuration</h3>
  <p>Configuration details...</p>
</article>`}
                language="html"
                title="Content Structure"
              />
            )
          },
          {
            title: 'Render in Frontend',
            keyword: 'Implement',
            description: 'Use the component in your React application.',
            content: (
              <CodeBlock
                code={`import { OutlineBlockComponent } from '@/blocks/outline-block/Component'

// Auto-detection for documentation
<OutlineBlockComponent
  sourceType="auto"
  contentSelector=".prose, article"
  headingLevels={[
    { level: 'h2' },
    { level: 'h3' },
    { level: 'h4' }
  ]}
  position="sticky-right"
  style="card"
  highlightActive={true}
  showProgress={true}
  smoothScroll={true}
  collapsible={true}
/>

// Manual mode for custom navigation
<OutlineBlockComponent
  sourceType="manual"
  manualItems={[
    { title: 'Overview', anchor: '#overview', level: 1 },
    { title: 'Features', anchor: '#features', level: 1 },
    { title: 'API Reference', anchor: '#api', level: 2 }
  ]}
  position="floating"
  style="numbered"
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
        description="Complete props reference for the Outline Block component."
        props={[
          {
            name: 'sourceType',
            type: '"auto" | "manual"',
            description: 'Content source mode for generating the outline',
            required: false,
            defaultValue: '"auto"',
            example: 'sourceType="auto"'
          },
          {
            name: 'contentSelector',
            type: 'string',
            description: 'CSS selector for finding content headings (auto mode)',
            required: false,
            defaultValue: '".prose, .content, article, main"',
            example: 'contentSelector=".prose, article"'
          },
          {
            name: 'headingLevels',
            type: 'HeadingLevel[]',
            description: 'Array of heading levels to include (auto mode)',
            required: false,
            example: 'headingLevels={[{ level: "h2" }, { level: "h3" }]}'
          },
          {
            name: 'manualItems',
            type: 'OutlineItem[]',
            description: 'Manual outline items (manual mode)',
            required: false,
            example: 'manualItems={[{ title: "Section", anchor: "#section", level: 1 }]}'
          },
          {
            name: 'position',
            type: '"inline" | "sticky-left" | "sticky-right" | "floating"',
            description: 'Positioning strategy for the outline',
            required: false,
            defaultValue: '"inline"',
            example: 'position="sticky-right"'
          },
          {
            name: 'style',
            type: '"simple" | "card" | "pills" | "numbered" | "dots"',
            description: 'Visual style for the outline',
            required: false,
            defaultValue: '"card"',
            example: 'style="card"'
          },
          {
            name: 'highlightActive',
            type: 'boolean',
            description: 'Highlight the currently active section',
            required: false,
            defaultValue: 'true',
            example: 'highlightActive={true}'
          },
          {
            name: 'showProgress',
            type: 'boolean',
            description: 'Show reading progress indicator',
            required: false,
            defaultValue: 'false',
            example: 'showProgress={true}'
          },
          {
            name: 'smoothScroll',
            type: 'boolean',
            description: 'Enable smooth scrolling when clicking links',
            required: false,
            defaultValue: 'true',
            example: 'smoothScroll={true}'
          },
          {
            name: 'collapsible',
            type: 'boolean',
            description: 'Make the outline collapsible',
            required: false,
            defaultValue: 'false',
            example: 'collapsible={true}'
          },
          {
            name: 'initiallyCollapsed',
            type: 'boolean',
            description: 'Start in collapsed state (when collapsible is true)',
            required: false,
            defaultValue: 'false',
            example: 'initiallyCollapsed={false}'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="OutlineBlockProps Interface"
          code={`interface OutlineBlockProps {
  sourceType?: 'auto' | 'manual'
  contentSelector?: string
  headingLevels?: HeadingLevel[]
  manualItems?: OutlineItem[]
  position?: 'inline' | 'sticky-left' | 'sticky-right' | 'floating'
  style?: 'simple' | 'card' | 'pills' | 'numbered' | 'dots'
  highlightActive?: boolean
  showProgress?: boolean
  smoothScroll?: boolean
  collapsible?: boolean
  initiallyCollapsed?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'full'
  scrollOffset?: number
}

interface HeadingLevel {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface OutlineItem {
  title: string
  anchor: string
  level: number
}

interface DetectedHeading {
  id: string
  text: string
  level: number
  element: HTMLElement
}`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', 'framer-motion']}
        tags={['outline', 'table-of-contents', 'toc', 'navigation', 'scroll', 'documentation']}
      />
    </div>
  )
}