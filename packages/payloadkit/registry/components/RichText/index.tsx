import React from 'react'
import DOMPurify from 'dompurify'
import { cn } from '@/lib/utils'
import type { RichTextContent, LexicalNode } from '../blocks-shared'

interface RichTextProps {
  data?: RichTextContent
  className?: string
  enableGutter?: boolean
}

export default function RichText({ data, className, enableGutter = true }: RichTextProps) {
  if (!data) return null

  // Simple implementation - in a real app you'd use Lexical renderer
  const renderContent = () => {
    if (typeof data === 'string') {
      const sanitizedHtml = DOMPurify.sanitize(data)
      return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    }
    
    // Basic JSON content rendering
    if (Array.isArray(data?.root?.children)) {
      return data.root.children.map((node: LexicalNode, index: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={index} className="mb-4 last:mb-0">
              {node.children?.map((child: LexicalNode, childIndex: number) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          )
        }
        return null
      })
    }

    return <div className="prose prose-sm max-w-none dark:prose-invert">
      {JSON.stringify(data, null, 2)}
    </div>
  }

  return (
    <div className={cn(
      'prose prose-sm max-w-none dark:prose-invert',
      enableGutter && 'prose-lg',
      className
    )}>
      {renderContent()}
    </div>
  )
}