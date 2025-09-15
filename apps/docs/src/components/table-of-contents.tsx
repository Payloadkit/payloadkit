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
    // Extract headings from the page
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const headingArray: Heading[] = []

    headingElements.forEach((heading, index) => {
      // Create ID if it doesn't exist
      if (!heading.id) {
        const text = heading.textContent || ""
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
        heading.id = id || `heading-${index}`
      }

      headingArray.push({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1))
      })
    })

    setHeadings(headingArray)

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0
      }
    )

    headingElements.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading)
      })
    }
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
              "block w-full text-left text-sm transition-colors hover:text-foreground",
              heading.level === 1 && "font-medium",
              heading.level === 2 && "pl-0",
              heading.level === 3 && "pl-4",
              heading.level === 4 && "pl-8",
              heading.level === 5 && "pl-12",
              heading.level === 6 && "pl-16",
              activeId === heading.id
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  )
}