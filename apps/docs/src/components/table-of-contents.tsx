"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Wait for the DOM to be fully loaded
    const timer = setTimeout(() => {
      // Extract headings only from the main content area, not from navigation
      const mainContent = document.querySelector("main")
      if (!mainContent) return

      const headingElements = mainContent.querySelectorAll("h1, h2, h3, h4, h5, h6")
      const headingArray: Heading[] = []

      headingElements.forEach((heading, index) => {
        // Skip if heading is empty or only whitespace
        const text = heading.textContent?.trim()
        if (!text) return

        // Create ID if it doesn't exist
        if (!heading.id) {
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s]+/g, "")
            .replace(/\s+/g, "-")
            .replace(/(^-|-$)/g, "")
          heading.id = id || `heading-${index}`
        }

        headingArray.push({
          id: heading.id,
          text: text,
          level: parseInt(heading.tagName.charAt(1))
        })
      })

      setHeadings(headingArray)

      if (headingArray.length > 0) {
        // Set up intersection observer for active section tracking
        const observer = new IntersectionObserver(
          (entries) => {
            // Find the entry that is intersecting and closest to the top
            const intersectingEntries = entries.filter(entry => entry.isIntersecting)
            if (intersectingEntries.length > 0) {
              // Sort by distance from top and take the closest one
              const topEntry = intersectingEntries.reduce((closest, entry) =>
                entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
              )
              setActiveId(topEntry.target.id)
            }
          },
          {
            rootMargin: "-20% 0px -70% 0px",
            threshold: [0, 0.25, 0.5, 0.75, 1]
          }
        )

        headingElements.forEach((heading) => {
          observer.observe(heading)
        })

        // Set initial active heading
        if (headingArray.length > 0) {
          setActiveId(headingArray[0].id)
        }

        return () => {
          headingElements.forEach((heading) => {
            observer.unobserve(heading)
          })
        }
      }
    }, 100) // Small delay to ensure content is rendered

    return () => clearTimeout(timer)
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="text-sm font-semibold text-foreground">On this page</h4>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => handleClick(heading.id)}
            className={cn(
              "block w-full text-left text-sm transition-all duration-200 hover:text-foreground py-1 rounded-sm",
              heading.level === 1 && "font-semibold text-base",
              heading.level === 2 && "pl-0 font-medium",
              heading.level === 3 && "pl-3 font-normal",
              heading.level === 4 && "pl-6 font-normal text-xs",
              heading.level === 5 && "pl-9 font-normal text-xs",
              heading.level === 6 && "pl-12 font-normal text-xs",
              activeId === heading.id
                ? "text-primary font-semibold bg-primary/5 border-l-2 border-primary pl-2"
                : "text-muted-foreground hover:text-foreground border-l-2 border-transparent pl-2"
            )}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  )
}