import React from 'react'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowRight } from 'lucide-react'

import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

interface ArchiveItemProps {
  item: any
  showImage?: boolean
  showExcerpt?: boolean
  showDate?: boolean
  showAuthor?: boolean
  showCategories?: boolean
  isListLayout?: boolean
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({
  item,
  showImage = true,
  showExcerpt = true,
  showDate = true,
  showAuthor = false,
  showCategories = true,
  isListLayout = false,
}) => {
  const imageUrl = item.featuredImage?.url || item.image?.url
  const excerpt = item.excerpt || item.description
  const categories = item.categories || []
  const author = item.author
  const publishedDate = item.publishedAt || item.createdAt
  const href = `/${item.collection || 'posts'}/${item.slug}`

  return (
    <article
      className={`group h-full border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 ${
        isListLayout ? 'flex' : 'flex flex-col'
      }`}
    >
      {/* Featured Image */}
      {showImage && imageUrl && (
        <div
          className={`relative overflow-hidden ${
            isListLayout ? 'w-48 flex-shrink-0' : 'aspect-video'
          }`}
        >
          <Link href={href}>
            <img
              src={imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      )}

      {/* Content */}
      <div className={`p-6 flex flex-col ${isListLayout ? 'flex-1' : 'flex-1'}`}>
        {/* Categories */}
        {showCategories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((category: any, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                <Tag className="w-3 h-3 mr-1" />
                {typeof category === 'string' ? category : category.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
          <Link href={href} className="before:absolute before:inset-0">
            {item.title}
          </Link>
        </h3>

        {/* Meta Information */}
        {(showDate || showAuthor) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            {showDate && publishedDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={publishedDate}>
                  {new Date(publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            )}
            {showAuthor && author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{typeof author === 'string' ? author : author.name}</span>
              </div>
            )}
          </div>
        )}

        {/* Excerpt */}
        {showExcerpt && excerpt && (
          <div className="text-muted-foreground mb-4 flex-1">
            <BlockText
              richText={excerpt}
              size="sm"
              className="line-clamp-3"
            />
          </div>
        )}

        {/* Read More Link */}
        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export interface ArchiveBlockProps {
  eyebrow?: string
  title?: string
  description?: any
  populateBy?: 'collection' | 'selection'
  relationTo?: string
  categories?: any[]
  limit?: number
  sortBy?: string
  selectedDocs?: any[]
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list' | 'masonry'
  showImage?: boolean
  showExcerpt?: boolean
  showDate?: boolean
  showAuthor?: boolean
  showCategories?: boolean
  background?: {
    type: 'none' | 'color' | 'gradient' | 'image'
    color?: string
    image?: string | { url: string }
  }
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  // Props for server-side data fetching
  items?: any[]
}

export const ArchiveBlock: React.FC<ArchiveBlockProps> = ({
  eyebrow,
  title,
  description,
  populateBy = 'collection',
  layout = 'grid-3',
  showImage = true,
  showExcerpt = true,
  showDate = true,
  showAuthor = false,
  showCategories = true,
  background = { type: 'none' },
  paddingTop = 'lg',
  paddingBottom = 'lg',
  items = [],
  // Server-side props would include actual data
  selectedDocs = [],
}) => {
  const isListLayout = layout === 'list'

  // In a real implementation, you would fetch data here based on the configuration
  // For now, we'll use the provided items prop
  let displayItems = items

  // If using selectedDocs, use those instead
  if (populateBy === 'selection' && selectedDocs.length > 0) {
    displayItems = selectedDocs
  }

  return (
    <BlockBackground background={background}>
      <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {/* Header */}
        {(eyebrow || title) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {eyebrow && (
              <div className="mb-4">
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            {title && (
              <BlockHeading
                text={title}
                level="h2"
                align="center"
                className="mb-6"
              />
            )}

            {description && (
              <BlockText
                richText={description}
                size="lg"
                align="center"
                prose={true}
                className="text-muted-foreground"
              />
            )}
          </div>
        )}

        {/* Archive Items */}
        {displayItems.length > 0 ? (
          <BlockLayout layout={layout} gap="lg" equalHeight={!isListLayout}>
            {displayItems.map((item, index) => (
              <ArchiveItem
                key={item.id || index}
                item={item}
                showImage={showImage}
                showExcerpt={showExcerpt}
                showDate={showDate}
                showAuthor={showAuthor}
                showCategories={showCategories}
                isListLayout={isListLayout}
              />
            ))}
          </BlockLayout>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found</p>
            <p className="text-muted-foreground text-sm mt-2">
              {populateBy === 'collection'
                ? 'Try adjusting the filter criteria or check that the collection has published content.'
                : 'No items have been manually selected for this archive.'}
            </p>
          </div>
        )}
      </BlockSection>
    </BlockBackground>
  )
}

export default ArchiveBlock