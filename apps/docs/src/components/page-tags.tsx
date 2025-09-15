import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PageTagsProps {
  tags?: string[]
  dependencies?: string[]
  category?: string
  className?: string
}

export function PageTags({ tags = [], dependencies = [], category, className }: PageTagsProps) {
  if (tags.length === 0 && dependencies.length === 0 && !category) return null

  return (
    <Card className={cn('mt-8', className)}>
      <CardHeader>
        <CardTitle className="text-sm">Metadata</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {dependencies.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Dependencies</h5>
            <div className="flex flex-wrap gap-2">
              {dependencies.map((dep, index) => (
                <code key={index} className="px-2 py-1 bg-muted rounded text-xs font-mono">
                  {dep}
                </code>
              ))}
            </div>
          </div>
        )}

        {(tags.length > 0 || category) && (
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Tags</h5>
            <div className="flex flex-wrap gap-2">
              {category && (
                <Badge variant="default" className="text-xs">
                  {category}
                </Badge>
              )}
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}