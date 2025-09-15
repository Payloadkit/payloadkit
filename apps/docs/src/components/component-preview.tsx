'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from '@/components/copy-button'
import { Eye, Code2, Settings, ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SyntaxHighlighter } from './syntax-highlighter'

interface PreviewVariant {
  name: string
  description?: string
  component: React.ReactNode
}

interface ComponentPreviewProps {
  name: string
  description?: string
  component?: React.ReactNode
  variants?: PreviewVariant[]
  code: {
    component?: string
    config?: string
    usage?: string
  }
  dependencies?: string[]
  features?: string[]
  responsive?: boolean
  interactive?: boolean
  className?: string
}

export function ComponentPreview({
  name,
  description,
  component,
  variants,
  code,
  dependencies = [],
  features = [],
  responsive = true,
  interactive = true,
  className
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState('preview')
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [selectedVariant, setSelectedVariant] = useState(0)

  // Use variants if provided, otherwise fallback to single component
  const displayVariants = variants || (component ? [{ name: 'Default', component }] : [])
  const currentVariant = displayVariants[selectedVariant] || displayVariants[0]

  // Count available tabs
  const tabCount = 1 + (code.component ? 1 : 0) + (code.config ? 1 : 0) + (code.usage ? 1 : 0)

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-sm'
      case 'tablet': return 'max-w-2xl'
      default: return 'w-full'
    }
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header */}
      <div className="space-y-2">
        <div className="text-lg font-semibold">{name}</div>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>

      {/* Main preview */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b bg-muted/20 rounded-t-lg">
          <TabsList className="h-10 bg-transparent p-0 m-1 flex w-auto">
            <TabsTrigger
              value="preview"
              className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Eye className="h-3 w-3" />
              Preview
            </TabsTrigger>
            {code.component && (
              <TabsTrigger
                value="component"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                title="React component code for frontend rendering"
              >
                <Code2 className="h-3 w-3" />
                Component
              </TabsTrigger>
            )}
            {code.config && (
              <TabsTrigger
                value="config"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                title="PayloadCMS block/field configuration"
              >
                <Settings className="h-3 w-3" />
                Config
              </TabsTrigger>
            )}
            {code.usage && (
              <TabsTrigger
                value="usage"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                title="How to use this component in your project"
              >
                <Code2 className="h-3 w-3" />
                Usage
              </TabsTrigger>
            )}
          </TabsList>

          <div className="flex items-center gap-2 p-2">
            {/* Variant selector */}
            {activeTab === 'preview' && displayVariants.length > 1 && (
              <div className="flex items-center gap-1">
                {displayVariants.map((variant, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant={selectedVariant === index ? 'default' : 'outline'}
                    className="h-7 px-3 text-xs"
                    onClick={() => setSelectedVariant(index)}
                  >
                    {variant.name}
                  </Button>
                ))}
              </div>
            )}

            {/* Responsive controls */}
            {activeTab === 'preview' && responsive && (
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant={viewMode === 'desktop' ? 'default' : 'outline'}
                  className="h-7 w-7 p-0"
                  onClick={() => setViewMode('desktop')}
                >
                  <Monitor className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'tablet' ? 'default' : 'outline'}
                  className="h-7 w-7 p-0"
                  onClick={() => setViewMode('tablet')}
                >
                  <Tablet className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'mobile' ? 'default' : 'outline'}
                  className="h-7 w-7 p-0"
                  onClick={() => setViewMode('mobile')}
                >
                  <Smartphone className="h-3 w-3" />
                </Button>
              </div>
            )}

            {/* Copy button for code tabs */}
            {activeTab !== 'preview' && (
              <CopyButton
                text={
                  activeTab === 'component' ? code.component || '' :
                  activeTab === 'config' ? code.config || '' :
                  code.usage || ''
                }
              />
            )}
          </div>
        </div>

        {/* Preview tab */}
        <TabsContent value="preview" className="mt-0">
          <Card className="rounded-t-none border-t-0">
            <CardContent className="p-8">
              {/* Variant description */}
              {currentVariant?.description && displayVariants.length > 1 && (
                <div className="mb-6 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{currentVariant.name}:</strong> {currentVariant.description}
                  </p>
                </div>
              )}

              <div className={cn(
                'flex items-center justify-center transition-all duration-300 mx-auto min-h-[400px]',
                getViewportClass()
              )}>
                <div className="w-full">
                  {currentVariant?.component}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Component code tab */}
        {code.component && (
          <TabsContent value="component" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg bg-muted/50">
              <div className="px-4 pt-3 pb-1">
                <p className="text-xs text-muted-foreground mb-2">
                  React component code • Create file: <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">src/components/blocks/faq-block/Component.tsx</code>
                </p>
              </div>
              <div className="overflow-x-auto text-sm">
                <SyntaxHighlighter
                  code={code.component}
                  language="tsx"
                  className="!bg-transparent !m-0"
                />
              </div>
            </div>
          </TabsContent>
        )}

        {/* Config code tab */}
        {code.config && (
          <TabsContent value="config" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg bg-muted/50">
              <div className="px-4 pt-3 pb-1">
                <p className="text-xs text-muted-foreground mb-2">
                  PayloadCMS configuration • Add to file: <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">src/payload.config.ts</code>
                </p>
              </div>
              <div className="overflow-x-auto text-sm">
                <SyntaxHighlighter
                  code={code.config}
                  language="typescript"
                  className="!bg-transparent !m-0"
                />
              </div>
            </div>
          </TabsContent>
        )}

        {/* Usage code tab */}
        {code.usage && (
          <TabsContent value="usage" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg bg-muted/50">
              <div className="px-4 pt-3 pb-1">
                <p className="text-xs text-muted-foreground mb-2">
                  Usage example • Implement in: <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">src/app/[...slug]/page.tsx</code>
                </p>
              </div>
              <div className="overflow-x-auto text-sm">
                <SyntaxHighlighter
                  code={code.usage}
                  language="tsx"
                  className="!bg-transparent !m-0"
                />
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>

    </div>
  )
}

// Simpler preview for smaller components
interface SimplePreviewProps {
  component: React.ReactNode
  code: string
  language?: string
  title?: string
}

export function SimplePreview({
  component,
  code,
  language = 'tsx',
  title
}: SimplePreviewProps) {
  return (
    <div className="space-y-4">
      {title && <div className="font-semibold">{title}</div>}

      {/* Preview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            {component}
          </div>
        </CardContent>
      </Card>

      {/* Code */}
      <div className="relative">
        <div className="flex items-center justify-between border-b bg-muted/20 rounded-t-lg p-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="h-3 w-3" />
            {language.toUpperCase()}
          </div>
          <CopyButton text={code} />
        </div>
        <div className="bg-muted/50 border border-t-0 rounded-t-none rounded-b-lg">
          <div className="overflow-x-auto text-sm">
            <SyntaxHighlighter
              code={code}
              language={language}
              className="!bg-transparent !m-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}