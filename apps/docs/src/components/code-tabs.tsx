"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CopyButton } from "@/components/copy-button"
import { Code2, Eye } from "lucide-react"

interface CodeTabsProps {
  preview?: React.ReactNode
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeTabs({
  preview,
  code,
  language = "tsx",
  title,
  className
}: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(preview ? "preview" : "code")

  return (
    <div className={className}>
      {title && (
        <h4 className="font-semibold mb-3 text-sm text-muted-foreground">
          {title}
        </h4>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between border-b bg-muted/20 rounded-t-lg">
          <TabsList className="grid h-9 grid-cols-2 bg-transparent p-0 m-1">
            {preview && (
              <TabsTrigger
                value="preview"
                className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <Eye className="h-3 w-3" />
                Preview
              </TabsTrigger>
            )}
            <TabsTrigger
              value="code"
              className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Code2 className="h-3 w-3" />
              Code
            </TabsTrigger>
          </TabsList>

          {activeTab === "code" && (
            <div className="p-2">
              <CopyButton text={code} />
            </div>
          )}
        </div>

        {preview && (
          <TabsContent value="preview" className="mt-0">
            <Card className="rounded-t-none border-t-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center min-h-[200px]">
                  {preview}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="code" className="mt-0">
          <div className="relative rounded-t-none border border-t-0 rounded-b-lg">
            <pre className="bg-muted/50 p-4 overflow-x-auto text-sm rounded-b-lg">
              <code className={`language-${language}`}>
                {code}
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Variant for inline code examples without preview
export function CodeBlock({
  code,
  language = "tsx",
  title,
  className
}: Omit<CodeTabsProps, 'preview'>) {
  return (
    <div className={className}>
      {title && (
        <h4 className="font-semibold mb-3 text-sm text-muted-foreground">
          {title}
        </h4>
      )}

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