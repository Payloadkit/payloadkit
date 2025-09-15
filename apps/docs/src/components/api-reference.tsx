'use client'

import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PropDefinition {
  name: string
  type: string
  description: string
  defaultValue?: string
  required?: boolean
  example?: string
}

interface ApiReferenceProps {
  title?: string
  description?: string
  props: PropDefinition[]
  className?: string
}

export function ApiReference({
  title = "API Reference",
  description,
  props,
  className
}: ApiReferenceProps) {
  return (
    <Card className={cn('mt-8', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Prop</TableHead>
                <TableHead className="w-[120px]">Type</TableHead>
                <TableHead className="w-[100px]">Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.map((prop, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{prop.name}</span>
                      {prop.required && (
                        <Badge variant="destructive" className="text-xs">
                          required
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                      {prop.type}
                    </code>
                  </TableCell>
                  <TableCell>
                    {prop.defaultValue ? (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                        {prop.defaultValue}
                      </code>
                    ) : (
                      <span className="text-muted-foreground text-xs">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">{prop.description}</p>
                      {prop.example && (
                        <div className="mt-2">
                          <p className="text-xs text-muted-foreground mb-1">Example:</p>
                          <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                            {prop.example}
                          </code>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

// Simpler variant for smaller prop lists
interface PropsTableProps {
  props: PropDefinition[]
  title?: string
  className?: string
}

export function PropsTable({ props, title = "Props", className }: PropsTableProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-semibold">{title}</h4>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm">
                  <div className="flex items-center gap-2">
                    {prop.name}
                    {prop.required && (
                      <Badge variant="destructive" className="text-xs">
                        *
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                    {prop.type}
                  </code>
                </TableCell>
                <TableCell>
                  {prop.defaultValue ? (
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                      {prop.defaultValue}
                    </code>
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </TableCell>
                <TableCell className="text-sm">{prop.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// Helper for type definitions
export function TypeDefinition({ name, definition, className }: {
  name: string
  definition: string
  className?: string
}) {
  return (
    <div className={cn('space-y-2', className)}>
      <h5 className="text-sm font-semibold">{name}</h5>
      <div className="bg-muted/50 p-3 rounded-lg">
        <code className="text-xs font-mono">{definition}</code>
      </div>
    </div>
  )
}