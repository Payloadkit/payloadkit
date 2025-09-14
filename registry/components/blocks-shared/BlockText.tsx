import React from 'react'
import { cn } from '../../utils/cn'

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
export type TextAlign = 'left' | 'center' | 'right' | 'justify'
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export interface BlockTextProps {
  richText?: any // Rich text from PayloadCMS
  text?: string // Plain text
  size?: TextSize
  align?: TextAlign
  weight?: TextWeight
  prose?: boolean
  className?: string
  style?: React.CSSProperties
}

const sizeMap: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

const alignMap: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

const weightMap: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

// Simple function to render rich text (can be enhanced with a proper rich text renderer)
const renderRichText = (content: any): string => {
  if (!content) return ''

  // Handle different rich text formats
  if (typeof content === 'string') {
    return content
  }

  // Handle Lexical/PayloadCMS rich text
  if (content.root && content.root.children) {
    return extractTextFromLexical(content.root.children)
  }

  // Handle simple array format
  if (Array.isArray(content)) {
    return content.map(item => {
      if (typeof item === 'string') return item
      if (item.text) return item.text
      if (item.children) return extractTextFromLexical(item.children)
      return ''
    }).join(' ')
  }

  return JSON.stringify(content)
}

const extractTextFromLexical = (children: any[]): string => {
  return children.map(child => {
    if (child.text) return child.text
    if (child.children) return extractTextFromLexical(child.children)
    return ''
  }).join(' ')
}

export const BlockText: React.FC<BlockTextProps> = ({
  richText,
  text,
  size = 'base',
  align = 'left',
  weight = 'normal',
  prose = false,
  className,
  style,
}) => {
  const content = text || renderRichText(richText)

  if (!content) return null

  return (
    <div
      className={cn(
        'text-muted-foreground leading-relaxed',
        sizeMap[size],
        alignMap[align],
        weightMap[weight],
        prose && 'prose prose-neutral max-w-none prose-headings:text-foreground prose-p:text-muted-foreground',
        className
      )}
      style={style}
    >
      {prose ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        content
      )}
    </div>
  )
}

export default BlockText