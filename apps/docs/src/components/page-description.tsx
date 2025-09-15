import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  Clock,
  Users,
  Star,
  Package,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Lightbulb,
  Target
} from 'lucide-react'

interface PageDescriptionProps {
  title: string
  description: string
  category?: 'blocks' | 'components' | 'globals' | 'examples' | 'guides'
  version?: string
  payloadVersion?: string
  lastUpdated?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime?: string
  features?: string[]
  tags?: string[]
  dependencies?: string[]
  className?: string
}

const categoryInfo = {
  blocks: {
    icon: Package,
    label: 'Block',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  },
  components: {
    icon: Zap,
    label: 'Component',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  },
  globals: {
    icon: Globe,
    label: 'Global',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  },
  examples: {
    icon: Lightbulb,
    label: 'Example',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  },
  guides: {
    icon: Target,
    label: 'Guide',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  }
}

const difficultyInfo = {
  beginner: {
    label: 'Beginner',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    description: 'Perfect for getting started'
  },
  intermediate: {
    label: 'Intermediate',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    description: 'Requires some experience'
  },
  advanced: {
    label: 'Advanced',
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    description: 'For experienced developers'
  }
}

export function PageDescription({
  title,
  description,
  category,
  version,
  payloadVersion,
  lastUpdated,
  difficulty,
  estimatedTime,
  features = [],
  tags = [],
  dependencies = [],
  className
}: PageDescriptionProps) {
  const CategoryIcon = category ? categoryInfo[category].icon : Package

  return (
    <div className={cn('space-y-6', className)}>
      {/* Hero section with title */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {category && (
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <CategoryIcon className="h-6 w-6 text-primary" />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          </div>
        </div>

        {/* Status bar right after title */}
        {(estimatedTime || lastUpdated || difficulty || version || payloadVersion) && (
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                {version && (
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Version:</span>
                    <span className="font-medium">v{version}</span>
                  </div>
                )}

                {payloadVersion && (
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Payload:</span>
                    <span className="font-medium">{payloadVersion}</span>
                  </div>
                )}

                {estimatedTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Est. time:</span>
                    <span className="font-medium">{estimatedTime}</span>
                  </div>
                )}

                {difficulty && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Difficulty:</span>
                    <span className="font-medium">{difficultyInfo[difficulty].label}</span>
                  </div>
                )}

                {lastUpdated && (
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Updated:</span>
                    <span className="font-medium">{lastUpdated}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Simplified description */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <Separator />
    </div>
  )
}

// Simplified version for smaller pages
interface SimplePageHeaderProps {
  title: string
  description: string
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'outline'
  className?: string
}

export function SimplePageHeader({
  title,
  description,
  badge,
  badgeVariant = 'default',
  className
}: SimplePageHeaderProps) {
  return (
    <div className={cn('space-y-4 pb-6 border-b', className)}>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {badge && (
            <Badge variant={badgeVariant}>{badge}</Badge>
          )}
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}