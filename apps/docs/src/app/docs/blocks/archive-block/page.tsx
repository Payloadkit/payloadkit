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
  title: 'Archive Block - PayloadKit',
  description: 'Display collections of content with advanced filtering, sorting, and multiple responsive layout options. Perfect for blog archives, portfolio galleries, and content directories.',
}

// Demo components
function ArchiveGridDefault() {
  return (
    <div className="space-y-6 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <p className="text-muted-foreground">Discover our most recent content</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-muted rounded-lg mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-60" />
              <div className="absolute bottom-2 left-2 text-white text-xs bg-black/20 px-2 py-1 rounded">
                Article {i + 1}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                Article Title {i + 1}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Brief description of the article content that gives readers an idea of what to expect...
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>Jan {10 + i}, 2025</span>
                <span className="mx-2">•</span>
                <span>Category</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchiveListLayout() {
  return (
    <div className="space-y-6 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Portfolio Projects</h2>
        <p className="text-muted-foreground">Featured work and case studies</p>
      </div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
            <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">Project {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Detailed project description showcasing the work completed and technologies used...
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">React</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">TypeScript</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchiveMasonryLayout() {
  return (
    <div className="space-y-6 p-6 border rounded-lg bg-background">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="text-muted-foreground">Pinterest-style masonry layout</p>
      </div>
      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="break-inside-avoid cursor-pointer group">
            <div
              className={`bg-muted rounded-lg mb-2 relative overflow-hidden ${
                i % 3 === 0 ? 'h-40' : i % 3 === 1 ? 'h-32' : 'h-48'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 opacity-70" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                Item {i + 1}
              </div>
            </div>
            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
              Gallery Item {i + 1}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ArchiveBlockPage() {
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
        title="Archive Block"
        description="Display collections of content with advanced filtering, sorting, and multiple responsive layout options. Perfect for blog archives, portfolio galleries, product catalogs, and content directories."
        category="blocks"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="intermediate"
        estimatedTime="10 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Archive Block Preview"
        description="Interactive demonstration of different archive layouts and configurations."
        variants={[
          {
            name: "Grid Layout",
            description: "3-column grid perfect for articles, posts, and content cards.",
            component: <ArchiveGridDefault />
          },
          {
            name: "List Layout",
            description: "Horizontal cards with detailed information, great for portfolios.",
            component: <ArchiveListLayout />
          },
          {
            name: "Masonry Layout",
            description: "Pinterest-style staggered grid for visual content galleries.",
            component: <ArchiveMasonryLayout />
          }
        ]}
        code={{
          component: `// React Component Usage
import { ArchiveBlockComponent } from './blocks/archive-block'

// Grid Layout Example
<ArchiveBlockComponent
  title="Latest Articles"
  subtitle="Discover our most recent content"
  populateBy="collection"
  relationTo="posts"
  layout="grid-3"
  limit={9}
  showImage={true}
  showExcerpt={true}
  showDate={true}
  showCategories={true}
  sortBy="-publishedAt"
/>

// List Layout Example
<ArchiveBlockComponent
  title="Portfolio Projects"
  populateBy="collection"
  relationTo="projects"
  layout="list"
  showImage={true}
  showExcerpt={true}
  showCategories={true}
/>

// Masonry Layout Example
<ArchiveBlockComponent
  title="Gallery"
  populateBy="collection"
  relationTo="media"
  layout="masonry"
  showImage={true}
  showExcerpt={false}
/>`,
          config: `// PayloadCMS Block Configuration
import type { Block } from 'payload'

export const ArchiveBlock: Block = {
  slug: 'archive-block',
  labels: {
    singular: 'Archive Block',
    plural: 'Archive Blocks'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title'
    },
    {
      name: 'populateBy',
      type: 'radio',
      defaultValue: 'collection',
      options: [
        { label: 'Collection', value: 'collection' },
        { label: 'Manual Selection', value: 'selection' }
      ]
    },
    {
      name: 'relationTo',
      type: 'select',
      label: 'Collection to Show',
      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'Projects', value: 'projects' },
        { label: 'Products', value: 'products' }
      ],
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection'
      }
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid-3',
      options: [
        { label: '2 Columns', value: 'grid-2' },
        { label: '3 Columns', value: 'grid-3' },
        { label: '4 Columns', value: 'grid-4' },
        { label: 'List', value: 'list' },
        { label: 'Masonry', value: 'masonry' }
      ]
    }
  ]
}`,
          usage: `// Frontend Page Implementation
import { RenderBlocks } from '@/components/RenderBlocks'

export default function Page({ data }) {
  return (
    <main>
      <RenderBlocks blocks={data.layout} />
    </main>
  )
}

// Block Rendering Component
import { ArchiveBlockComponent } from './archive-block/Component'

const blockComponents = {
  'archive-block': ArchiveBlockComponent
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
            description: 'Add Archive Block to your project via PayloadKit CLI.',
            content: (
              <Snippet command="bunx payloadkit add archive-block" title="Install via PayloadKit CLI">
                This will copy the Archive Block files to your project and update your dependencies.
              </Snippet>
            )
          },
          {
            title: 'Add to PayloadCMS Config',
            keyword: 'Configure',
            description: 'Import and configure the block in your PayloadCMS setup.',
            content: (
              <CodeBlock
                code={`import { ArchiveBlock } from '@/blocks/archive-block'

export default buildConfig({
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            ArchiveBlock,
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
                code={`import { ArchiveBlockComponent } from '@/blocks/archive-block/Component'

// In your page or component
<ArchiveBlockComponent
  title="Latest Posts"
  populateBy="collection"
  relationTo="posts"
  layout="grid-3"
  limit={12}
  showImage={true}
  showExcerpt={true}
  showDate={true}
  sortBy="-publishedAt"
/>`}
                language="tsx"
                title="Page Component"
              />
            )
          },
          {
            title: 'Customize Layout & Styling',
            keyword: 'Customize',
            description: 'Modify layouts, styling, and display options.',
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Available customizations:</p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>5 layout options: 2-col, 3-col, 4-col grid, list, masonry</li>
                  <li>Content display toggles: images, excerpts, dates, categories</li>
                  <li>Background options: color, gradient, image</li>
                  <li>Filtering and sorting capabilities</li>
                  <li>Custom spacing and theming</li>
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
        description="Complete props reference for the Archive Block component."
        props={[
          {
            name: 'title',
            type: 'string',
            description: 'Section heading title',
            required: false,
            example: 'title="Latest Articles"'
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Optional section subtitle',
            required: false,
            example: 'subtitle="Discover our content"'
          },
          {
            name: 'populateBy',
            type: '"collection" | "selection"',
            description: 'How to populate the archive content',
            required: true,
            defaultValue: '"collection"',
            example: 'populateBy="collection"'
          },
          {
            name: 'relationTo',
            type: 'string',
            description: 'Collection slug to query (when populateBy is "collection")',
            required: false,
            example: 'relationTo="posts"'
          },
          {
            name: 'selectedDocs',
            type: 'Array<Document>',
            description: 'Manually selected documents (when populateBy is "selection")',
            required: false,
            example: 'selectedDocs={[doc1, doc2]}'
          },
          {
            name: 'layout',
            type: '"grid-2" | "grid-3" | "grid-4" | "list" | "masonry"',
            description: 'Layout style for displaying items',
            required: false,
            defaultValue: '"grid-3"',
            example: 'layout="grid-3"'
          },
          {
            name: 'limit',
            type: 'number',
            description: 'Maximum number of items to display',
            required: false,
            defaultValue: '12',
            example: 'limit={9}'
          },
          {
            name: 'showImage',
            type: 'boolean',
            description: 'Display featured images',
            required: false,
            defaultValue: 'true',
            example: 'showImage={true}'
          },
          {
            name: 'showExcerpt',
            type: 'boolean',
            description: 'Display content excerpts',
            required: false,
            defaultValue: 'true',
            example: 'showExcerpt={true}'
          },
          {
            name: 'showDate',
            type: 'boolean',
            description: 'Display publication dates',
            required: false,
            defaultValue: 'true',
            example: 'showDate={true}'
          },
          {
            name: 'showCategories',
            type: 'boolean',
            description: 'Display category tags',
            required: false,
            defaultValue: 'true',
            example: 'showCategories={true}'
          },
          {
            name: 'sortBy',
            type: 'string',
            description: 'Field to sort by (prefix with "-" for descending)',
            required: false,
            defaultValue: '"-publishedAt"',
            example: 'sortBy="-createdAt"'
          }
        ]}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          title="ArchiveBlockProps Interface"
          code={`interface ArchiveBlockProps {
  title?: string
  subtitle?: string
  description?: string
  populateBy: 'collection' | 'selection'
  relationTo?: string
  selectedDocs?: Document[]
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list' | 'masonry'
  limit?: number
  showImage?: boolean
  showExcerpt?: boolean
  showDate?: boolean
  showCategories?: boolean
  sortBy?: string
  categories?: string[]
  background?: BackgroundConfig
}

interface BackgroundConfig {
  type: 'color' | 'gradient' | 'image' | 'none'
  color?: string
  gradientFrom?: string
  gradientTo?: string
  gradientDirection?: string
  image?: string | Media
}`}
          language="typescript"
        />
      </div>

      {/* Tags and Dependencies */}
      <PageTags
        category="blocks"
        dependencies={['blocks-shared', 'lucide-react', 'next']}
        tags={['archive', 'collection', 'content', 'grid', 'list', 'masonry', 'responsive']}
      />
    </div>
  )
}