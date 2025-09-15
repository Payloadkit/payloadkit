import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface PropDefinition {
  name: string
  type: string
  required?: boolean
  default?: string
  description: string
}

interface PropsTableProps {
  props: PropDefinition[]
  className?: string
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="w-[120px]">Required</TableHead>
            <TableHead className="w-[120px]">Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop, index) => (
            <TableRow key={index}>
              <TableCell>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                  {prop.name}
                </code>
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">
                {prop.type}
              </TableCell>
              <TableCell>
                {prop.required ? (
                  <Badge variant="destructive">Required</Badge>
                ) : (
                  <Badge variant="outline">Optional</Badge>
                )}
              </TableCell>
              <TableCell className="font-mono text-sm">
                {prop.default || '-'}
              </TableCell>
              <TableCell className="text-sm">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Type helper for common prop patterns
export const createPropDefinition = (
  name: string,
  type: string,
  description: string,
  options?: {
    required?: boolean
    default?: string
  }
): PropDefinition => ({
  name,
  type,
  description,
  required: options?.required ?? false,
  default: options?.default,
})

// Common prop definitions for reuse
export const commonProps = {
  className: createPropDefinition(
    "className",
    "string",
    "Additional CSS classes to apply to the component",
    { default: "undefined" }
  ),
  children: createPropDefinition(
    "children",
    "React.ReactNode",
    "The content to render inside the component"
  ),
  id: createPropDefinition(
    "id",
    "string",
    "Unique identifier for the component",
    { default: "undefined" }
  ),
}