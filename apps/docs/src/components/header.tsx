"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/docs" className="mr-6 flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <span className="text-xs font-bold text-primary-foreground">P</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              PayloadKit
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Documentation
            </Link>
            <Link
              href="/docs/components"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              href="/docs/examples"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Examples
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-full justify-start text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64"
            >
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
            </Button>
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href="https://github.com/j-corral/payloadkit" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}