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
        title: "Quick Start Guide",
        href: "/docs/getting-started",
        badge: "New"
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
    title: "Configuration",
    items: [
      {
        title: "Modular Configuration",
        href: "/docs/configuration",
        badge: "New"
      },
      {
        title: "Cloud Storage",
        href: "/docs/storage",
      },
    ],
  },
  {
    title: "Development & Deployment",
    items: [
      {
        title: "Docker Development",
        href: "/docs/docker",
        badge: "New"
      },
      {
        title: "VPS Deployment",
        href: "/docs/deployment",
        badge: "New"
      },
    ],
  },
  {
    title: "Security & Authentication",
    items: [
      {
        title: "Enterprise Security",
        href: "/docs/security",
      },
      {
        title: "Authentication Guide",
        href: "/docs/authentication",
      },
      {
        title: "Security Plugins",
        href: "/docs/plugins/security",
      },
    ],
  },
  {
    title: "Auth Components",
    items: [
      {
        title: "AuthProvider",
        href: "/docs/components/auth-provider",
      },
      {
        title: "AuthView",
        href: "/docs/components/auth-view",
      },
    ],
  },
  {
    title: "Blocks & Components",
    items: [
      {
        title: "Overview",
        href: "/docs/components",
      },
      {
        title: "Banner",
        href: "/docs/components/banner",
      },
      {
        title: "Call to Action",
        href: "/docs/components/call-to-action",
      },
      {
        title: "Content",
        href: "/docs/components/content",
      },
      {
        title: "FAQ",
        href: "/docs/components/faq",
      },
      {
        title: "Feature",
        href: "/docs/components/feature",
      },
      {
        title: "Hero Block",
        href: "/docs/components/hero-block",
      },
      {
        title: "Icon Block",
        href: "/docs/components/icon-block",
      },
      {
        title: "Media Block",
        href: "/docs/components/media-block",
      },
      {
        title: "Text Block",
        href: "/docs/components/text-block",
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
  {
    title: "Project",
    items: [
      {
        title: "Changelog",
        href: "/docs/changelog",
        badge: "New"
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full py-2 px-2">
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
                    "group flex w-full items-center justify-between rounded-md border border-transparent px-2 py-1 hover:underline",
                    pathname === subItem.href
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <span>{subItem.title}</span>
                  {subItem.badge && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {subItem.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="h-4" /> {/* Bottom spacing */}
    </div>
  )
}