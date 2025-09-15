"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"

interface BreadcrumbSegment {
  title: string
  href?: string
}

interface DocsBreadcrumbProps {
  className?: string
  customSegments?: BreadcrumbSegment[]
}

export function DocsBreadcrumb({ className, customSegments }: DocsBreadcrumbProps) {
  const pathname = usePathname()

  // Generate breadcrumb segments from pathname
  const generateSegments = (): BreadcrumbSegment[] => {
    if (customSegments) return customSegments

    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbSegment[] = []

    // Add home
    breadcrumbs.push({ title: "Home", href: "/" })

    // Add docs root if we're in docs
    if (segments[0] === 'docs') {
      breadcrumbs.push({ title: "Documentation", href: "/docs" })

      // Add section (blocks, components, etc.)
      if (segments[1]) {
        const sectionTitle = segments[1]
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        breadcrumbs.push({
          title: sectionTitle,
          href: `/docs/${segments[1]}`
        })

        // Add specific page
        if (segments[2]) {
          const pageTitle = segments[2]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

          breadcrumbs.push({ title: pageTitle })
        }
      }
    }

    return breadcrumbs
  }

  const segments = generateSegments()

  if (segments.length <= 1) {
    return null // Don't show breadcrumb for home page
  }

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {segment.href && !isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={segment.href} className="flex items-center gap-1">
                      {index === 0 && <Home className="h-3 w-3" />}
                      {segment.title}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="flex items-center gap-1">
                    {index === 0 && <Home className="h-3 w-3" />}
                    {segment.title}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// Helper component for custom breadcrumb usage
export function CustomBreadcrumb({
  segments,
  className
}: {
  segments: BreadcrumbSegment[]
  className?: string
}) {
  return <DocsBreadcrumb customSegments={segments} className={className} />
}