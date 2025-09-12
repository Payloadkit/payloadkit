"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarNavItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "CLI Usage",
        href: "/docs/cli",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Overview",
        href: "/docs/components",
      },
      {
        title: "Call to Action",
        href: "/docs/components/call-to-action",
      },
      {
        title: "Hero Block",
        href: "/docs/components/hero-block",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Basic Setup",
        href: "/docs/examples/basic-setup",
      },
      {
        title: "Blog Template",
        href: "/docs/examples/blog-template",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {sidebarNavItems.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {item.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                    pathname === subItem.href
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}