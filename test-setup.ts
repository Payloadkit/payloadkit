import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
  }),
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) =>
    React.createElement('a', { href }, children)
}))

// Mock shadcn/ui components for testing
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => React.createElement('button', props, children),
}))

vi.mock('@/components/ui/badge', () => ({
  Badge: ({ children, ...props }: any) => React.createElement('span', props, children),
}))

vi.mock('@/components/ui/card', () => ({
  Card: ({ children, ...props }: any) => React.createElement('div', props, children),
  CardContent: ({ children, ...props }: any) => React.createElement('div', props, children),
  CardHeader: ({ children, ...props }: any) => React.createElement('div', props, children),
  CardTitle: ({ children, ...props }: any) => React.createElement('h3', props, children),
  CardDescription: ({ children, ...props }: any) => React.createElement('p', props, children),
}))

vi.mock('@/components/ui/accordion', () => ({
  Accordion: ({ children, ...props }: any) => React.createElement('div', props, children),
  AccordionItem: ({ children, ...props }: any) => React.createElement('div', props, children),
  AccordionTrigger: ({ children, ...props }: any) => React.createElement('button', props, children),
  AccordionContent: ({ children, ...props }: any) => React.createElement('div', props, children),
}))

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  ChevronDown: () => React.createElement('span', {}, 'ChevronDown'),
  Star: () => React.createElement('span', {}, 'Star'),
  Zap: () => React.createElement('span', {}, 'Zap'),
  Shield: () => React.createElement('span', {}, 'Shield'),
  Heart: () => React.createElement('span', {}, 'Heart'),
  Settings: () => React.createElement('span', {}, 'Settings'),
  BarChart3: () => React.createElement('span', {}, 'BarChart3'),
  Target: () => React.createElement('span', {}, 'Target'),
  Lightbulb: () => React.createElement('span', {}, 'Lightbulb'),
  Trophy: () => React.createElement('span', {}, 'Trophy'),
  Users: () => React.createElement('span', {}, 'Users'),
  ArrowRight: () => React.createElement('span', {}, 'ArrowRight'),
  HelpCircle: () => React.createElement('span', {}, 'HelpCircle'),
  Smartphone: () => React.createElement('span', {}, 'Smartphone'),
  Globe: () => React.createElement('span', {}, 'Globe'),
  Lock: () => React.createElement('span', {}, 'Lock'),
  Rocket: () => React.createElement('span', {}, 'Rocket'),
  Clock: () => React.createElement('span', {}, 'Clock'),
  CheckCircle: () => React.createElement('span', {}, 'CheckCircle'),
  MessageCircle: () => React.createElement('span', {}, 'MessageCircle'),
  Timer: () => React.createElement('span', {}, 'Timer'),
  Clipboard: () => React.createElement('span', {}, 'Clipboard'),
  Search: () => React.createElement('span', {}, 'Search'),
}))

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})