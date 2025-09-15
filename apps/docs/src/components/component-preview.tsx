'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from '@/components/copy-button'
import { Eye, Code2, Settings, ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps {
  name: string
  description?: string
  component: React.ReactNode
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
  code,
  dependencies = [],
  features = [],
  responsive = true,
  interactive = true,
  className
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState('preview')
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

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
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-2">
            {interactive && (
              <Badge variant="secondary" className="text-xs">
                Interactive
              </Badge>
            )}
            {responsive && (
              <Badge variant="outline" className="text-xs">
                Responsive
              </Badge>
            )}
          </div>
        </div>

        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}

        {/* Features list */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Main preview */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b bg-muted/20 rounded-t-lg">
          <TabsList className="grid h-10 bg-transparent p-0 m-1">
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
              >
                <Code2 className="h-3 w-3" />
                Component
              </TabsTrigger>
            )}
            {code.config && (
              <TabsTrigger
                value="config"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <Settings className="h-3 w-3" />
                Config
              </TabsTrigger>
            )}
            {code.usage && (
              <TabsTrigger
                value="usage"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <Code2 className="h-3 w-3" />
                Usage
              </TabsTrigger>
            )}
          </TabsList>

          <div className="flex items-center gap-2 p-2">
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
            <CardContent className="p-6">
              <div className={cn(
                'flex items-center justify-center transition-all duration-300 mx-auto',
                getViewportClass()
              )}>
                <div className="w-full">
                  {component}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Component code tab */}
        {code.component && (
          <TabsContent value="component" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg">
              <pre className="bg-muted/50 p-4 overflow-x-auto text-sm rounded-b-lg">
                <code className="language-tsx">
                  {code.component}
                </code>
              </pre>
            </div>
          </TabsContent>
        )}

        {/* Config code tab */}
        {code.config && (
          <TabsContent value="config" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg">
              <pre className="bg-muted/50 p-4 overflow-x-auto text-sm rounded-b-lg">
                <code className="language-typescript">
                  {code.config}
                </code>
              </pre>
            </div>
          </TabsContent>
        )}

        {/* Usage code tab */}
        {code.usage && (
          <TabsContent value="usage" className="mt-0">
            <div className="relative rounded-t-none border border-t-0 rounded-b-lg">
              <pre className="bg-muted/50 p-4 overflow-x-auto text-sm rounded-b-lg">
                <code className="language-tsx">
                  {code.usage}
                </code>
              </pre>
            </div>
          </TabsContent>
        )}
      </Tabs>

      {/* Dependencies */}
      {dependencies.length > 0 && (
        <div className="pt-4 border-t">
          <h4 className="text-sm font-semibold mb-2">Dependencies</h4>
          <div className="flex flex-wrap gap-2">
            {dependencies.map((dep, index) => (
              <code key={index} className="px-2 py-1 bg-muted rounded text-xs">
                {dep}
              </code>
            ))}
          </div>
        </div>
      )}
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
      {title && <h4 className="font-semibold">{title}</h4>}

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
        <pre className="bg-muted/50 p-4 overflow-x-auto text-sm rounded-t-none border border-t-0 rounded-b-lg">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}