import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PageTagsProps {
  tags?: string[]
  category?: string
  className?: string
}

export function PageTags({ tags = [], category, className }: PageTagsProps) {
  if (tags.length === 0 && !category) return null

  return (
    <Card className={cn('mt-8', className)}>
      <CardHeader>
        <CardTitle className="text-sm">Tags & Keywords</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
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
      </CardContent>
    </Card>
  )
}