'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Menu, X, Circle } from 'lucide-react'

interface OutlineItem {
  title: string
  anchor: string
  level: number
}

interface ManualItem {
  title: string
  anchor: string
  level: number
}

interface HeadingLevel {
  level: string
}

export interface OutlineBlockProps {
  sourceType?: 'auto' | 'manual'
  contentSelector?: string
  headingLevels?: HeadingLevel[]
  manualItems?: ManualItem[]
  title?: string
  position?: 'inline' | 'sticky-left' | 'sticky-right' | 'floating'
  style?: 'simple' | 'card' | 'pills' | 'numbered' | 'dots'
  maxWidth?: 'sm' | 'md' | 'lg' | 'full'
  collapsible?: boolean
  initiallyCollapsed?: boolean
  smoothScroll?: boolean
  highlightActive?: boolean
  scrollOffset?: number
  autoHide?: boolean
  showProgress?: boolean
  theme?: 'default' | 'primary' | 'neutral' | 'dark'
  fontSize?: 'sm' | 'md' | 'lg'
  spacing?: 'compact' | 'normal' | 'relaxed'
  customCss?: string
  excludeSelectors?: string
  htmlId?: string
  htmlClasses?: string
}

export const OutlineBlock: React.FC<OutlineBlockProps> = ({
  sourceType = 'auto',
  contentSelector = '.prose, .content, article, main',
  headingLevels = [{ level: 'h2' }, { level: 'h3' }],
  manualItems = [],
  title = 'Table of Contents',
  position = 'inline',
  style = 'card',
  maxWidth = 'md',
  collapsible = false,
  initiallyCollapsed = false,
  smoothScroll = true,
  highlightActive = true,
  scrollOffset = 100,
  autoHide = false,
  showProgress = false,
  theme = 'default',
  fontSize = 'sm',
  spacing = 'normal',
  customCss,
  excludeSelectors,
  htmlId,
  htmlClasses = '',
}) => {
  const [items, setItems] = useState<OutlineItem[]>([])
  const [activeItem, setActiveItem] = useState<string>('')
  const [isCollapsed, setIsCollapsed] = useState(initiallyCollapsed)
  const [isVisible, setIsVisible] = useState(!autoHide)
  const [progress, setProgress] = useState(0)

  // Extract headings from content
  useEffect(() => {
    if (sourceType === 'manual') {
      setItems(manualItems.map(item => ({
        title: item.title,
        anchor: item.anchor,
        level: item.level,
      })))
      return
    }

    const extractHeadings = () => {
      const selectors = contentSelector.split(',').map(s => s.trim())
      const levelSelectors = headingLevels.map(h => h.level).join(',')
      const excludeSelectorsStr = excludeSelectors || ''

      const headings: OutlineItem[] = []

      selectors.forEach(selector => {
        const containers = document.querySelectorAll(selector)

        containers.forEach(container => {
          const headingElements = container.querySelectorAll(levelSelectors)

          headingElements.forEach((heading, index) => {
            // Skip excluded selectors
            if (excludeSelectorsStr) {
              const excludeList = excludeSelectorsStr.split(',').map(s => s.trim())
              if (excludeList.some(excludeSelector => heading.matches(excludeSelector))) {
                return
              }
            }

            const text = heading.textContent?.trim()
            if (!text) return

            // Generate or use existing ID
            let id = heading.id
            if (!id) {
              id = `outline-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${index}`
              heading.id = id
            }

            const level = parseInt(heading.tagName.slice(1))

            headings.push({
              title: text,
              anchor: `#${id}`,
              level: level,
            })
          })
        })
      })

      setItems(headings)
    }

    // Wait for content to load
    const timer = setTimeout(extractHeadings, 500)
    return () => clearTimeout(timer)
  }, [sourceType, contentSelector, headingLevels, manualItems, excludeSelectors])

  // Handle active section highlighting
  useEffect(() => {
    if (!highlightActive || items.length === 0) return

    const handleScroll = () => {
      const scrollTop = window.scrollY + scrollOffset
      let currentActive = ''

      // Find the current section
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i]
        const element = document.querySelector(item.anchor)
        if (element) {
          const elementTop = element.offsetTop
          if (scrollTop >= elementTop - 50) {
            currentActive = item.anchor
            break
          }
        }
      }

      setActiveItem(currentActive)

      // Update progress
      if (showProgress) {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = (window.scrollY / documentHeight) * 100
        setProgress(Math.min(100, Math.max(0, scrolled)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, highlightActive, scrollOffset, showProgress])

  // Handle mobile visibility
  useEffect(() => {
    if (!autoHide) return

    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768) // Show on desktop, hide on mobile
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [autoHide])

  const handleItemClick = (anchor: string) => {
    const element = document.querySelector(anchor)
    if (element) {
      const targetTop = element.offsetTop - scrollOffset

      if (smoothScroll) {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo(0, targetTop)
      }
    }
  }

  const getThemeClasses = () => {
    const themes = {
      default: 'bg-card border-border text-card-foreground',
      primary: 'bg-primary/5 border-primary/20 text-primary',
      neutral: 'bg-muted border-muted-foreground/20 text-muted-foreground',
      dark: 'bg-slate-900 border-slate-700 text-slate-100',
    }
    return themes[theme]
  }

  const getFontSizeClasses = () => {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    }
    return sizes[fontSize]
  }

  const getSpacingClasses = () => {
    const spacings = {
      compact: 'space-y-1',
      normal: 'space-y-2',
      relaxed: 'space-y-3',
    }
    return spacings[spacing]
  }

  const getMaxWidthClasses = () => {
    const widths = {
      sm: 'max-w-[200px]',
      md: 'max-w-[300px]',
      lg: 'max-w-[400px]',
      full: 'max-w-full',
    }
    return widths[maxWidth]
  }

  const getPositionClasses = () => {
    const positions = {
      inline: '',
      'sticky-left': 'fixed top-20 left-4 z-40',
      'sticky-right': 'fixed top-20 right-4 z-40',
      floating: 'fixed bottom-4 right-4 z-50',
    }
    return positions[position]
  }

  const renderItem = (item: OutlineItem, index: number) => {
    const isActive = activeItem === item.anchor
    const indentClass = item.level > 1 ? `ml-${(item.level - 1) * 4}` : ''

    const baseItemClasses = `block transition-colors duration-200 ${getFontSizeClasses()}`

    switch (style) {
      case 'pills':
        return (
          <button
            key={index}
            onClick={() => handleItemClick(item.anchor)}
            className={`${baseItemClasses} px-3 py-1 rounded-full border ${indentClass} ${
              isActive
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background hover:bg-muted border-border hover:border-primary/50'
            }`}
          >
            {item.title}
          </button>
        )

      case 'numbered':
        return (
          <button
            key={index}
            onClick={() => handleItemClick(item.anchor)}
            className={`${baseItemClasses} flex items-center gap-3 p-2 rounded-md ${indentClass} ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-muted'
            }`}
          >
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
              isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {index + 1}
            </span>
            {item.title}
          </button>
        )

      case 'dots':
        return (
          <button
            key={index}
            onClick={() => handleItemClick(item.anchor)}
            className={`${baseItemClasses} flex items-center gap-3 p-2 rounded-md ${indentClass} ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-muted'
            }`}
          >
            <Circle
              className={`w-2 h-2 ${isActive ? 'fill-primary text-primary' : 'fill-muted-foreground text-muted-foreground'}`}
            />
            {item.title}
          </button>
        )

      case 'simple':
      default:
        return (
          <button
            key={index}
            onClick={() => handleItemClick(item.anchor)}
            className={`${baseItemClasses} text-left p-2 rounded-md ${indentClass} ${
              isActive
                ? 'bg-primary/10 text-primary font-medium'
                : 'hover:bg-muted hover:text-foreground'
            }`}
          >
            {item.title}
          </button>
        )
    }
  }

  if (!isVisible || items.length === 0) return null

  const containerClasses = `
    ${getPositionClasses()}
    ${position === 'inline' ? getMaxWidthClasses() : 'max-w-sm'}
    ${htmlClasses}
  `.trim()

  const contentClasses = `
    ${style === 'card' ? `border rounded-lg p-4 ${getThemeClasses()}` : ''}
    ${position === 'floating' ? 'shadow-lg' : ''}
  `.trim()

  return (
    <nav
      id={htmlId}
      className={containerClasses}
    >
      {/* Custom CSS */}
      {customCss && (
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
      )}

      <div className={contentClasses}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm uppercase tracking-wide">
            {title}
          </h3>
          {collapsible && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded hover:bg-muted"
              aria-label={isCollapsed ? 'Expand outline' : 'Collapse outline'}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {/* Progress Bar */}
        {showProgress && !isCollapsed && (
          <div className="mb-4">
            <div className="w-full bg-muted rounded-full h-1">
              <div
                className="bg-primary rounded-full h-1 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Outline Items */}
        {!isCollapsed && (
          <div className={getSpacingClasses()}>
            {items.map((item, index) => renderItem(item, index))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default OutlineBlock