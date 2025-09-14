"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-dialog"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function Search({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  const searchPages = [
    {
      title: "Introduction",
      href: "/docs",
      description: "Introduction to PayloadKit",
    },
    {
      title: "Quick Start Guide",
      href: "/docs/getting-started",
      description: "Getting started with PayloadKit - from zero to production in 5 minutes",
    },
    {
      title: "Installation",
      href: "/docs/installation",
      description: "How to install PayloadKit",
    },
    {
      title: "CLI Usage",
      href: "/docs/cli",
      description: "PayloadKit CLI commands and usage",
    },
    {
      title: "Modular Configuration",
      href: "/docs/configuration",
      description: "Smart PayloadCMS configuration with PostgreSQL/MongoDB and VPS support",
    },
    {
      title: "Cloud Storage",
      href: "/docs/storage",
      description: "Configure cloud storage for your PayloadKit project",
    },
    {
      title: "Docker Development",
      href: "/docs/docker",
      description: "Complete Docker development environment with PostgreSQL, Redis and MailHog",
    },
    {
      title: "VPS Deployment",
      href: "/docs/deployment",
      description: "Deploy PayloadCMS on VPS with DATABASE_BUILD_URI for Dokploy, Railway, etc.",
    },
    {
      title: "Enterprise Security",
      href: "/docs/security",
      description: "Security configurations for enterprise PayloadKit deployments",
    },
    {
      title: "Authentication Guide",
      href: "/docs/authentication",
      description: "User authentication and authorization setup",
    },
    {
      title: "Components Overview",
      href: "/docs/components",
      description: "PayloadKit blocks and components library",
    },
    {
      title: "Banner Block",
      href: "/docs/components/banner",
      description: "Banner component for announcements and notifications",
    },
    {
      title: "Call to Action Block",
      href: "/docs/components/call-to-action",
      description: "Call to action component for conversions",
    },
    {
      title: "Content Block",
      href: "/docs/components/content",
      description: "Rich content block with markdown support",
    },
    {
      title: "FAQ Block",
      href: "/docs/components/faq",
      description: "Frequently asked questions component",
    },
    {
      title: "Feature Block",
      href: "/docs/components/feature",
      description: "Feature showcase component",
    },
    {
      title: "Hero Block",
      href: "/docs/components/hero-block",
      description: "Hero section component for landing pages",
    },
    {
      title: "Icon Block",
      href: "/docs/components/icon-block",
      description: "Icon display component",
    },
    {
      title: "Media Block",
      href: "/docs/components/media-block",
      description: "Media display component for images and videos",
    },
    {
      title: "Text Block",
      href: "/docs/components/text-block",
      description: "Simple text content component",
    },
  ]

  const filteredPages = React.useMemo(() => {
    return searchPages
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-full justify-start text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
        {...props}
      >
        <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {filteredPages.map((page) => (
              <CommandItem
                key={page.href}
                value={page.title}
                onSelect={() => {
                  runCommand(() => router.push(page.href))
                }}
              >
                <div className="flex flex-col">
                  <span>{page.title}</span>
                  <span className="text-xs text-muted-foreground">{page.description}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}