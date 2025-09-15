import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Image, Video, FileText } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'Media Block Component - PayloadKit',
  description: 'Simple media display block for images and videos with optional caption and size controls.',
}

// Demo components for MediaBlock
function ImageMediaDemo() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
          <div className="text-center">
            <Image className="w-12 h-12 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-medium">Sample Image</p>
          </div>
        </div>
        <div className="p-3 bg-muted/30">
          <p className="text-sm text-center text-muted-foreground">
            Beautiful landscape photo with mountain views
          </p>
        </div>
      </div>
    </div>
  )
}

function VideoMediaDemo() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
          <div className="text-center">
            <Video className="w-12 h-12 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
            <p className="text-sm font-medium">Sample Video</p>
            <div className="flex items-center justify-center mt-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-muted/30">
          <p className="text-sm text-center text-muted-foreground">
            Product demonstration video - 2:34
          </p>
        </div>
      </div>
    </div>
  )
}

function DocumentMediaDemo() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 flex items-center justify-center">
          <div className="text-center">
            <FileText className="w-12 h-12 mx-auto mb-2 text-green-600 dark:text-green-400" />
            <p className="text-sm font-medium">PDF Document</p>
            <p className="text-xs text-muted-foreground mt-1">24 pages</p>
          </div>
        </div>
        <div className="p-3 bg-muted/30">
          <p className="text-sm text-center text-muted-foreground">
            Complete user guide and documentation
          </p>
        </div>
      </div>
    </div>
  )
}

const componentCode = `// MediaBlock.tsx - Media display component
'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MediaBlockProps {
  media: Media
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  alignment?: 'left' | 'center' | 'right'
  className?: string
}

export function MediaBlock({
  media,
  caption,
  size = 'medium',
  alignment = 'center',
  className
}: MediaBlockProps) {
  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-2xl',
    full: 'w-full'
  }

  const alignmentClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  }

  const containerClasses = cn(
    'relative',
    sizeClasses[size],
    alignmentClasses[alignment],
    className
  )

  if (media.mimeType?.startsWith('image/')) {
    return (
      <figure className={containerClasses}>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={media.url || ''}
            alt={media.alt || ''}
            width={media.width || 800}
            height={media.height || 600}
            className="w-full h-auto object-cover"
          />
        </div>
        {caption && (
          <figcaption className="mt-2 text-sm text-center text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (media.mimeType?.startsWith('video/')) {
    return (
      <figure className={containerClasses}>
        <video
          src={media.url || ''}
          controls
          className="w-full h-auto rounded-lg"
          poster={media.thumbnailURL}
        >
          Your browser does not support the video tag.
        </video>
        {caption && (
          <figcaption className="mt-2 text-sm text-center text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Fallback for other media types
  return (
    <div className={containerClasses}>
      <div className="border rounded-lg p-4 text-center">
        <p className="text-sm font-medium">{media.filename}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {media.filesize && (media.filesize / 1024 / 1024).toFixed(2)} MB
        </p>
        <a
          href={media.url || '#'}
          download
          className="inline-block mt-2 text-xs text-primary hover:underline"
        >
          Download
        </a>
      </div>
      {caption && (
        <p className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  )
}`

const configCode = `// config.ts - PayloadCMS Block Configuration
import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'media-block',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Media File',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      admin: {
        description: 'Optional caption displayed below the media',
      },
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      defaultValue: 'medium',
      options: [
        { label: 'Small (384px)', value: 'small' },
        { label: 'Medium (448px)', value: 'medium' },
        { label: 'Large (672px)', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Alignment',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
  ],
}`

const usageCode = `// Using MediaBlock in your pages
import { MediaBlock } from '@/blocks/media-block'

// Add to your collection configuration
export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        MediaBlock,
        // Other blocks...
      ],
    },
  ],
}

// Frontend rendering
import { MediaBlock } from '@/blocks/media-block'

export default function RenderBlocks({ blocks }: { blocks: any[] }) {
  return (
    <div>
      {blocks?.map((block, index) => {
        if (block.blockType === 'media-block') {
          return (
            <MediaBlock
              key={index}
              media={block.media}
              caption={block.caption}
              size={block.size}
              alignment={block.alignment}
            />
          )
        }
        return null
      })}
    </div>
  )
}`

export default function MediaBlockPage() {
  const steps = [
    {
      title: 'Install MediaBlock',
      keyword: 'Install',
      description: 'Add the media block to your PayloadCMS project',
      content: (
        <Snippet command="payloadkit add media-block">
          Install MediaBlock component with support for images, videos, and document files.
        </Snippet>
      )
    },
    {
      title: 'Configure Media Collection',
      keyword: 'Setup Media',
      description: 'Ensure you have a media collection configured',
      content: (
        <CodeBlock
          code={`// collections/Media.ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        crop: 'center',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        crop: 'center',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
  ],
}`}
          language="typescript"
        />
      )
    },
    {
      title: 'Add to Collection',
      keyword: 'Integration',
      description: 'Add MediaBlock to your page or post blocks',
      content: (
        <CodeBlock
          code={`import { MediaBlock } from '@/blocks/media-block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        MediaBlock,
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
      title: 'Render Frontend',
      keyword: 'Display',
      description: 'Render the media block in your frontend',
      content: (
        <CodeBlock
          code={`// In your page component
import { MediaBlock } from '@/blocks/media-block'

function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'media-block':
      return (
        <MediaBlock
          key={index}
          media={block.media}
          caption={block.caption}
          size={block.size}
          alignment={block.alignment}
        />
      )
    default:
      return null
  }
}`}
          language="tsx"
        />
      )
    }
  ]

  const apiProps = [
    {
      name: 'media',
      type: 'Media',
      description: 'PayloadCMS media object containing file information',
      required: true
    },
    {
      name: 'caption',
      type: 'string',
      description: 'Optional caption text displayed below the media',
      required: false
    },
    {
      name: 'size',
      type: "'small' | 'medium' | 'large' | 'full'",
      description: 'Size constraint for the media display',
      defaultValue: "'medium'",
      required: false
    },
    {
      name: 'alignment',
      type: "'left' | 'center' | 'right'",
      description: 'Horizontal alignment of the media block',
      defaultValue: "'center'",
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
        title="Media Block"
        description="Simple media display block for images and videos with optional caption and size controls."
        category="components"
        version="0.1.0"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="3 minutes"
        lastUpdated="January 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Media Block Examples"
        description="Interactive demonstrations of different media types and configurations"
        variants={[
          {
            name: 'Image',
            description: 'Image display with caption',
            component: <ImageMediaDemo />
          },
          {
            name: 'Video',
            description: 'Video player with controls and caption',
            component: <VideoMediaDemo />
          },
          {
            name: 'Document',
            description: 'Document file with download link',
            component: <DocumentMediaDemo />
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
        title="MediaBlock Props"
        description="Configuration options for the MediaBlock component"
        props={apiProps}
      />

      {/* Supported Media Types */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Supported Media Types</div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Image className="w-4 h-4" /> Images
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• JPEG (.jpg, .jpeg)</li>
              <li>• PNG (.png)</li>
              <li>• WebP (.webp)</li>
              <li>• SVG (.svg)</li>
              <li>• GIF (.gif)</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Video className="w-4 h-4" /> Videos
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• MP4 (.mp4)</li>
              <li>• WebM (.webm)</li>
              <li>• OGG (.ogg)</li>
              <li>• MOV (.mov)</li>
              <li>• AVI (.avi)</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Documents
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• PDF (.pdf)</li>
              <li>• DOC/DOCX (.doc, .docx)</li>
              <li>• TXT (.txt)</li>
              <li>• RTF (.rtf)</li>
              <li>• ZIP (.zip)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Configuration Examples</div>
        <CodeBlock
          code={`// Small image aligned left with caption
{
  blockType: 'media-block',
  media: mediaObject,
  caption: 'Product showcase photo',
  size: 'small',
  alignment: 'left'
}

// Full-width video without caption
{
  blockType: 'media-block',
  media: videoObject,
  size: 'full',
  alignment: 'center'
}

// Large centered image with detailed caption
{
  blockType: 'media-block',
  media: imageObject,
  caption: 'Beautiful landscape captured during our mountain expedition in 2024',
  size: 'large',
  alignment: 'center'
}`}
          language="typescript"
          title="Block Configuration Examples"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="components"
        dependencies={['payload', 'next', 'react', 'next/image']}
        tags={['media', 'images', 'videos', 'upload', 'block', 'content', 'display']}
      />
    </div>
  )
}