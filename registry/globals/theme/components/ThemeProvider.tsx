'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { type ThemePreset } from '../defaultPresets'

interface ThemeContextValue {
  theme: Partial<ThemePreset> | null
  setTheme: (theme: Partial<ThemePreset>) => void
  mode: 'light' | 'dark' | 'auto'
  setMode: (mode: 'light' | 'dark' | 'auto') => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Partial<ThemePreset>
  initialMode?: 'light' | 'dark' | 'auto'
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = null,
  initialMode = 'auto'
}) => {
  const [theme, setTheme] = useState<Partial<ThemePreset> | null>(initialTheme)
  const [mode, setMode] = useState<'light' | 'dark' | 'auto'>(initialMode)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Handle system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const updateDarkMode = () => {
      if (mode === 'auto') {
        setIsDarkMode(mediaQuery.matches)
      } else {
        setIsDarkMode(mode === 'dark')
      }
    }

    updateDarkMode()
    mediaQuery.addEventListener('change', updateDarkMode)

    return () => mediaQuery.removeEventListener('change', updateDarkMode)
  }, [mode])

  // Apply CSS variables when theme changes
  useEffect(() => {
    if (!theme) return

    const root = document.documentElement

    // Apply color variables
    if (theme.backgroundColor) {
      root.style.setProperty('--background', theme.backgroundColor)
    }
    if (theme.foregroundColor) {
      root.style.setProperty('--foreground', theme.foregroundColor)
    }
    if (theme.primaryColor) {
      root.style.setProperty('--primary', theme.primaryColor)
    }
    if (theme.primaryForeground) {
      root.style.setProperty('--primary-foreground', theme.primaryForeground)
    }
    if (theme.secondaryColor) {
      root.style.setProperty('--secondary', theme.secondaryColor)
    }
    if (theme.secondaryForeground) {
      root.style.setProperty('--secondary-foreground', theme.secondaryForeground)
    }
    if (theme.accentColor) {
      root.style.setProperty('--accent', theme.accentColor)
    }
    if (theme.accentForeground) {
      root.style.setProperty('--accent-foreground', theme.accentForeground)
    }
    if (theme.mutedColor) {
      root.style.setProperty('--muted', theme.mutedColor)
    }
    if (theme.mutedForeground) {
      root.style.setProperty('--muted-foreground', theme.mutedForeground)
    }
    if (theme.destructiveColor) {
      root.style.setProperty('--destructive', theme.destructiveColor)
    }
    if (theme.destructiveForeground) {
      root.style.setProperty('--destructive-foreground', theme.destructiveForeground)
    }
    if (theme.borderColor) {
      root.style.setProperty('--border', theme.borderColor)
    }
    if (theme.inputBorder) {
      root.style.setProperty('--input', theme.inputBorder)
    }
    if (theme.ringColor) {
      root.style.setProperty('--ring', theme.ringColor)
    }

    // Apply font variables
    if (theme.fontSans) {
      root.style.setProperty('--font-sans', theme.fontSans)
    }
    if (theme.fontSerif) {
      root.style.setProperty('--font-serif', theme.fontSerif)
    }
    if (theme.fontMono) {
      root.style.setProperty('--font-mono', theme.fontMono)
    }

    // Apply design tokens
    if (theme.borderRadius) {
      root.style.setProperty('--radius', theme.borderRadius)
    }
    if (theme.letterSpacing) {
      root.style.setProperty('--letter-spacing', theme.letterSpacing)
    }
  }, [theme])

  // Apply dark/light mode class
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mode,
        setMode,
        isDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}