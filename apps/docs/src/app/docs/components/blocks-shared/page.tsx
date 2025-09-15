import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Box, Check } from 'lucide-react'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Blocks Shared',
  description: 'Shared components and utilities for PayloadCMS blocks including backgrounds, layouts, headings, and theme integration.',
}

const components = [
  'BlockBackground - Smart background component supporting color, gradient, and image backgrounds',
  'BlockSection - Container component with configurable padding and responsive design',
  'BlockLayout - Flexible layout component supporting grid, list, and masonry layouts',
  'BlockHeading - Typography component with consistent heading styles and alignment',
  'BlockText - Rich text rendering component with prose styling and size variations',
  'OptimizedImage - Performance-optimized image component with lazy loading and Intersection Observer API',
  'useKeyboardNavigation - Hook for keyboard navigation and focus management',
  'useFocusManagement - Hook for managing focus in lists and interactive elements',
  'useThemeColor - Hook for accessing theme colors and CSS variables'
]

export default function BlocksSharedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/docs/components" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Components
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Box className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Blocks Shared</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Utility</Badge>
              <Badge className="bg-green-600">v0.1.0</Badge>
              <Badge variant="default" className="bg-green-600">NEW</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Shared components and utilities for PayloadCMS blocks including backgrounds, layouts, headings, and theme integration. Required dependency for all advanced blocks.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <Tabs defaultValue="cli" className="w-full">
          <TabsList>
            <TabsTrigger value="cli">PayloadKit CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="cli" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Install with PayloadKit CLI</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>payloadkit add blocks-shared</code>
                </pre>
                <CopyButton
                  text="payloadkit add blocks-shared"
                  className="absolute top-2 right-2"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Import in your blocks</h4>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
  OptimizedImage,
  useKeyboardNavigation,
  useFocusManagement,
  useThemeColor
} from '../blocks-shared'`}</code>
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dependencies</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>npm install react tailwindcss</code>
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Included Components</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {components.map((component, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{component}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Component Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockBackground</CardTitle>
              <CardDescription>Smart background rendering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Color:</strong> Solid color backgrounds</div>
              <div><strong>Gradient:</strong> Linear gradients with direction control</div>
              <div><strong>Image:</strong> Background images with overlay options</div>
              <div><strong>Responsive:</strong> Mobile-first approach</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockSection</CardTitle>
              <CardDescription>Container with padding controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Padding:</strong> Top/bottom spacing control</div>
              <div><strong>Container:</strong> Max-width with responsive margins</div>
              <div><strong>Customizable:</strong> Additional CSS classes</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockLayout</CardTitle>
              <CardDescription>Flexible grid and list layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Grid:</strong> 1-6 column responsive grids</div>
              <div><strong>List:</strong> Single column layouts</div>
              <div><strong>Masonry:</strong> Pinterest-style staggered grids</div>
              <div><strong>Gap Control:</strong> Configurable spacing</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BlockHeading & BlockText</CardTitle>
              <CardDescription>Typography components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Headings:</strong> H1-H6 with consistent styling</div>
              <div><strong>Text:</strong> Rich text with prose styling</div>
              <div><strong>Alignment:</strong> Left, center, right options</div>
              <div><strong>Sizes:</strong> Multiple size variants</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">OptimizedImage</CardTitle>
              <CardDescription>Performance-optimized image loading</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Lazy Loading:</strong> Intersection Observer API with 50px rootMargin</div>
              <div><strong>Priority Mode:</strong> Eager loading for above-the-fold images</div>
              <div><strong>Error Handling:</strong> Graceful fallback with accessibility</div>
              <div><strong>Responsive:</strong> Supports srcset and sizes attributes</div>
              <div><strong>Placeholders:</strong> Blur and empty placeholder options</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accessibility */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Accessibility Features</h2>
        <p className="text-muted-foreground">
          Built-in accessibility features following WCAG 2.1 AA guidelines with keyboard navigation, focus management, and screen reader support.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Keyboard Navigation</CardTitle>
              <CardDescription>useKeyboardNavigation hook</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Arrow Keys:</strong> Navigate up/down through elements</div>
              <div><strong>Enter/Space:</strong> Activate buttons and controls</div>
              <div><strong>Escape:</strong> Close modals and dropdowns</div>
              <div><strong>Home/End:</strong> Jump to first/last items</div>
              <div><strong>Prevention:</strong> Automatic preventDefault for handled keys</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Focus Management</CardTitle>
              <CardDescription>useFocusManagement hook</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Focus Control:</strong> Focus specific items by index</div>
              <div><strong>Navigation:</strong> Move focus up/down with looping</div>
              <div><strong>Shortcuts:</strong> focusFirst() and focusLast() methods</div>
              <div><strong>Data Attributes:</strong> Uses [data-focus-item] selectors</div>
              <div><strong>Accessibility:</strong> Screen reader compatible</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Utility Classes</CardTitle>
              <CardDescription>Pre-built accessibility CSS classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>focusClasses:</strong> Focus rings with visible indicators</div>
              <div><strong>buttonBaseClasses:</strong> Accessible button foundations</div>
              <div><strong>srOnlyClasses:</strong> Screen reader only content</div>
              <div><strong>contrastSafeColors:</strong> WCAG compliant color pairs</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">WCAG Compliance</CardTitle>
              <CardDescription>Standards-compliant implementations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Color Contrast:</strong> 4.5:1 minimum ratio for text</div>
              <div><strong>Focus Indicators:</strong> Visible focus states</div>
              <div><strong>Screen Readers:</strong> Proper ARIA labels and roles</div>
              <div><strong>Keyboard Only:</strong> Full keyboard navigation support</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Examples</h2>
        <Tabs defaultValue="background" className="w-full">
          <TabsList>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="image">Optimized Image</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="background" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Block with Gradient Background</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockBackground background={{
  type: 'gradient',
  gradientFrom: '#3b82f6',
  gradientTo: '#1d4ed8',
  gradientDirection: 'to-br'
}}>
  <BlockSection paddingTop="xl" paddingBottom="xl">
    <BlockHeading text="Your Content Here" level="h2" />
  </BlockSection>
</BlockBackground>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">3-Column Grid Layout</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockLayout layout="grid-3" gap="lg" equalHeight={true}>
  {items.map((item, index) => (
    <div key={index} className="p-6 bg-white rounded-lg">
      <BlockHeading text={item.title} level="h3" />
      <BlockText richText={item.content} size="sm" />
    </div>
  ))}
</BlockLayout>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Typography Components</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<BlockHeading
  text="Main Title"
  level="h1"
  align="center"
  className="mb-6"
/>

<BlockText
  richText={description}
  size="lg"
  align="center"
  prose={true}
  className="text-muted-foreground"
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="image" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Lazy Loading</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<OptimizedImage
  src="/images/hero-image.jpg"
  alt="Hero image"
  className="w-full h-64 object-cover rounded-lg"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Priority Image with Blur Placeholder</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<OptimizedImage
  src={featuredImage}
  alt="Featured article"
  className="aspect-video w-full object-cover"
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  onLoad={() => console.log('Image loaded')}
  onError={() => console.log('Image failed to load')}
/>`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Using with PayloadCMS Media</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`// Media item from PayloadCMS
const mediaItem = {
  url: '/images/photo.jpg',
  alt: 'Photo description',
  sizes: [
    { url: '/images/photo-400.jpg', width: 400 },
    { url: '/images/photo-800.jpg', width: 800 },
    { url: '/images/photo-1200.jpg', width: 1200 }
  ]
}

<OptimizedImage
  src={mediaItem}
  alt="" // Uses media item alt
  className="w-full h-48 object-cover"
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
/>`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Keyboard Navigation Hook</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { useKeyboardNavigation } from '../blocks-shared'

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useKeyboardNavigation({
    onArrowUp: () => setCurrentIndex(prev => Math.max(0, prev - 1)),
    onArrowDown: () => setCurrentIndex(prev => Math.min(items.length - 1, prev + 1)),
    onEnter: () => handleSelect(currentIndex),
    onEscape: () => handleClose(),
    disabled: !isOpen
  })

  return <div>Interactive content with keyboard support</div>
}`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Focus Management for Lists</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { useFocusManagement } from '../blocks-shared'

const FAQList = ({ faqs }) => {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const { focusItem, moveFocus, focusFirst, focusLast } = useFocusManagement(
    faqs.length,
    true // Enable looping
  )

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowUp':
        const prevIndex = moveFocus(index, 'up')
        setFocusedIndex(prevIndex)
        break
      case 'ArrowDown':
        const nextIndex = moveFocus(index, 'down')
        setFocusedIndex(nextIndex)
        break
      case 'Home':
        setFocusedIndex(focusFirst())
        break
      case 'End':
        setFocusedIndex(focusLast())
        break
    }
  }

  return (
    <ul role="list">
      {faqs.map((faq, index) => (
        <li key={index}>
          <button
            data-focus-item
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-full text-left p-4"
          >
            {faq.question}
          </button>
        </li>
      ))}
    </ul>
  )
}`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Using Accessibility Utility Classes</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { focusClasses, buttonBaseClasses, srOnlyClasses } from '../blocks-shared'

const AccessibleButton = ({ children, onClick, ...props }) => (
  <button
    className={\`\${buttonBaseClasses} \${focusClasses} bg-primary text-primary-foreground hover:bg-primary/90\`}
    onClick={onClick}
    {...props}
  >
    <span className={srOnlyClasses}>Click to</span>
    {children}
  </button>
)

// Using contrast-safe colors
import { contrastSafeColors } from '../blocks-shared'

const ThemedText = ({ theme = 'light', children }) => (
  <p className={contrastSafeColors[theme].text}>
    {children}
  </p>
)`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* shadcn/ui Integration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">shadcn/ui Integration</h2>
        <p className="text-muted-foreground">
          PayloadKit components are built with shadcn/ui components for enhanced accessibility, theming, and design consistency. This integration provides automatic dark mode support, accessible interactions, and cohesive design patterns.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Accordion Components</CardTitle>
              <CardDescription>FAQ blocks with accessible accordion UI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>FAQ Block:</strong> Uses shadcn/ui Accordion with Radix UI primitives</div>
              <div><strong>Keyboard Navigation:</strong> Built-in arrow key and enter/space support</div>
              <div><strong>Accessibility:</strong> ARIA attributes and screen reader compatibility</div>
              <div><strong>Multiple Modes:</strong> Single or multiple expandable items</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Button Components</CardTitle>
              <CardDescription>CTA buttons with consistent styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Hero Blocks:</strong> Simple Hero and Big Hero use shadcn/ui Button</div>
              <div><strong>Variants:</strong> Primary, secondary, outline, and ghost styles</div>
              <div><strong>Sizes:</strong> Small, default, medium, and large button sizes</div>
              <div><strong>Conversion:</strong> Automatic mapping from PayloadCMS CallToAction fields</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card Components</CardTitle>
              <CardDescription>Content cards with structured layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>Archive Block:</strong> Uses Card, CardHeader, CardContent structure</div>
              <div><strong>Badge Integration:</strong> Category and tag badges with consistent styling</div>
              <div><strong>Responsive:</strong> Adapts to grid, list, and masonry layouts</div>
              <div><strong>Hover Effects:</strong> Built-in hover states and transitions</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Theme Integration</CardTitle>
              <CardDescription>Automatic theme and CSS variable support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>CSS Variables:</strong> Uses shadcn/ui CSS custom properties</div>
              <div><strong>Dark Mode:</strong> Automatic light/dark theme switching</div>
              <div><strong>Design Tokens:</strong> Consistent spacing, typography, and colors</div>
              <div><strong>Customizable:</strong> Override theme variables in your globals.css</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui Dependencies</CardTitle>
            <CardDescription>Required shadcn/ui components for PayloadKit blocks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="font-semibold mb-2">Core Components</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code>button</code> - CTA buttons</li>
                  <li><code>card</code> - Content containers</li>
                  <li><code>badge</code> - Labels and tags</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interactive Components</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code>accordion</code> - FAQ blocks</li>
                  <li><code>tabs</code> - Documentation pages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <p className="text-sm text-muted-foreground mb-2">Install components as needed:</p>
                <code className="text-xs bg-muted px-2 py-1 rounded">npx shadcn@latest add button card badge accordion</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* TypeScript Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">TypeScript Types</h2>
        <p className="text-muted-foreground">
          PayloadKit provides comprehensive TypeScript types and interfaces for all components, ensuring type safety and excellent developer experience. All types are exported from blocks-shared for reuse across your project.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Types</CardTitle>
              <CardDescription>Rich text and media handling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>RichTextContent:</strong> Lexical or string rich text support</div>
              <div><strong>LexicalRichTextContent:</strong> Typed Lexical editor output</div>
              <div><strong>MediaItem:</strong> PayloadCMS media with metadata</div>
              <div><strong>CallToAction:</strong> Button configuration with appearance</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Layout Types</CardTitle>
              <CardDescription>Grid systems and spacing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>GridLayout:</strong> Single, grid-2/3/4, list, masonry layouts</div>
              <div><strong>GapSize:</strong> none, xs, sm, md, lg, xl spacing</div>
              <div><strong>SpacingSize:</strong> Padding and margin size variants</div>
              <div><strong>TextAlign:</strong> left, center, right, justify alignment</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Component Interfaces</CardTitle>
              <CardDescription>Extensible component props</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>BaseBlockProps:</strong> className and style props</div>
              <div><strong>BlockProps:</strong> Background and padding configuration</div>
              <div><strong>ContentBlockProps:</strong> Eyebrow, title, description fields</div>
              <div><strong>ActionBlockProps:</strong> CTA buttons and max button limits</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Utility Types</CardTitle>
              <CardDescription>Helper types and constants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>IconName:</strong> 20+ Lucide React icon names</div>
              <div><strong>Prettify&lt;T&gt;:</strong> Flatten complex type intersections</div>
              <div><strong>focusClasses:</strong> Accessible focus ring styles</div>
              <div><strong>contrastSafeColors:</strong> WCAG compliant color pairs</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Type Definitions Example</CardTitle>
            <CardDescription>Using PayloadKit types in your components</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`import type {
  RichTextContent,
  MediaItem,
  CallToAction,
  GridLayout,
  SpacingSize,
  ContentBlockProps
} from '../blocks-shared'

interface CustomBlockProps extends ContentBlockProps {
  layout?: GridLayout
  items?: Array<{
    title: string
    description: RichTextContent
    image?: MediaItem
    cta?: CallToAction
  }>
  paddingTop?: SpacingSize
  paddingBottom?: SpacingSize
}

// Strongly typed component with full IntelliSense support
const CustomBlock: React.FC<CustomBlockProps> = ({
  title,
  description,
  layout = 'grid-3',
  items = [],
  background = { type: 'none' },
  paddingTop = 'lg',
  paddingBottom = 'lg',
  ...props
}) => {
  // Your component logic with full type safety
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Type Safety Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>IntelliSense:</strong> Full IDE autocomplete support</div>
              <div><strong>Compile-time Errors:</strong> Catch errors before runtime</div>
              <div><strong>Refactoring Safety:</strong> Rename and move with confidence</div>
              <div><strong>Documentation:</strong> Self-documenting interfaces</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Migration from v1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div><strong>No More 'any':</strong> 51+ any types replaced with strict types</div>
              <div><strong>Breaking Changes:</strong> Some prop names standardized</div>
              <div><strong>Compatibility:</strong> Gradual migration path available</div>
              <div><strong>Validation:</strong> Runtime and compile-time type checking</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Migration Guide</h2>
        <p className="text-muted-foreground">
          Upgrading from PayloadKit v1.x to v2.x includes breaking changes for improved type safety, accessibility, and performance. Follow this guide for a smooth migration path.
        </p>

        <div className="grid gap-4 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Registry Updates</CardTitle>
              <CardDescription>Block name changes and consolidation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Renamed Blocks</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// OLD (v1.x)
payloadkit add faq           // Remove
payloadkit add feature       // Remove
payloadkit add banner        // Remove

// NEW (v2.x)
payloadkit add faq-block     // Use instead
payloadkit add feature-block // Use instead
payloadkit add banner-block  // Use instead`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hero Block Hierarchy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>simple-hero:</strong> Minimal hero with centered content</li>
                    <li>• <strong>big-hero:</strong> Large hero with side-by-side layout</li>
                    <li>• <strong>banner-block:</strong> Advanced hero with complex backgrounds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. TypeScript Migration</CardTitle>
              <CardDescription>Replace any types with strict interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Block Props Updates</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// OLD (v1.x) - Loose typing
interface MyBlockProps {
  items: any[]
  content: any
  layout: string
}

// NEW (v2.x) - Strict typing
import type { RichTextContent, GridLayout } from '../blocks-shared'

interface MyBlockProps {
  items: Array<{
    title: string
    description: RichTextContent
    image?: MediaItem
  }>
  content: RichTextContent
  layout: GridLayout
}`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Import Updates</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Add type imports
import type {
  RichTextContent,
  MediaItem,
  CallToAction,
  GridLayout,
  SpacingSize
} from '../blocks-shared'`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. shadcn/ui Dependencies</CardTitle>
              <CardDescription>Install required shadcn/ui components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Required Components</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`# Install shadcn/ui components used by PayloadKit blocks
npx shadcn@latest add button card badge accordion

# Optional: Install additional components for documentation
npx shadcn@latest add tabs`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Component Updates</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>FAQ Block:</strong> Now uses shadcn/ui Accordion with new props</li>
                    <li>• <strong>Hero Blocks:</strong> CTA buttons now use shadcn/ui Button component</li>
                    <li>• <strong>Archive Block:</strong> Uses Card and Badge components</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">4. Accessibility Enhancements</CardTitle>
              <CardDescription>Optional accessibility hooks and utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">New Accessibility Hooks</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Import accessibility hooks (optional)
import {
  useKeyboardNavigation,
  useFocusManagement,
  focusClasses,
  buttonBaseClasses
} from '../blocks-shared'

// Use in interactive components for better accessibility
const { focusItem, moveFocus } = useFocusManagement(items.length)`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ARIA Attributes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All interactive elements now have proper ARIA labels</li>
                    <li>• Focus management with data-focus-item attributes</li>
                    <li>• Screen reader support with role attributes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5. Performance Optimizations</CardTitle>
              <CardDescription>OptimizedImage and lazy loading</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Image Optimization</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// OLD (v1.x) - Standard img tags
<img src={image.url} alt={image.alt} />

// NEW (v2.x) - OptimizedImage with lazy loading
import { OptimizedImage } from '../blocks-shared'

<OptimizedImage
  src={image}
  alt={image.alt}
  loading="lazy"
  className="w-full h-64 object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Automatic lazy loading with Intersection Observer</li>
                    <li>• Priority loading for above-the-fold images</li>
                    <li>• Responsive image support with srcset</li>
                    <li>• Error handling with graceful fallbacks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">6. Migration Checklist</CardTitle>
              <CardDescription>Step-by-step upgrade process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Update block names: faq → faq-block, feature → feature-block</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Install shadcn/ui components: button, card, badge, accordion</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Replace any types with strict TypeScript interfaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Update FAQ blocks to use new accordion props (type, collapsible)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Replace img tags with OptimizedImage for performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Run TypeScript compiler to check for type errors</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Test accessibility with keyboard navigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" disabled />
                  <span className="text-sm">Update test files to use new component interfaces</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Used By */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Used By</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Feature Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/feature-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">FAQ Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/faq-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Archive Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/archive-block">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Banner Block</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href="/docs/blocks/banner-block">View</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}