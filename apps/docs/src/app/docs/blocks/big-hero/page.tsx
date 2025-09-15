import { Metadata } from 'next'
import { CopyButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'Big Hero Block',
  description: 'Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites.',
}

export default function BigHeroPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">Big Hero Block</h1>
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-300">
            New
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Advanced hero section with full customization options including video backgrounds, animations, and flexible content positioning. Perfect for impactful landing pages and marketing websites.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>payloadkit add big-hero</code>
          </pre>
          <CopyButton text="payloadkit add big-hero" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-3">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 viewport height options: 100vh, 90vh, 80vh, 70vh, auto</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 content positioning options: center, top-center, bottom-center, left-center, right-center</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 background types: color, gradient, image, video, none</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Video background support with poster image fallback</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Background overlay with customizable color and opacity</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>3 text color themes: white, dark, primary</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>5 title size options: sm, md, lg, xl, hero</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Parallax scrolling effect for background elements</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Smooth scroll indicator with bounce animation</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>Up to 2 customizable call-to-action buttons</span>
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">PayloadCMS Configuration</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// payload.config.ts
import { BigHero } from './blocks/big-hero'

export default buildConfig({
  // ... other config
  blocks: [
    BigHero,
    // ... other blocks
  ],
})`}</code>
            </pre>
            <CopyButton text={`// payload.config.ts
import { BigHero } from './blocks/big-hero'

export default buildConfig({
  // ... other config
  blocks: [
    BigHero,
    // ... other blocks
  ],
})`} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Frontend Component</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{`// components/BigHero.tsx
import { BigHeroComponent } from './blocks/big-hero'

export function BigHero() {
  return (
    <BigHeroComponent
      title="Welcome to the Future"
      subtitle="Experience the next generation of technology"
      height="100vh"
      contentPosition="center"
      background={{
        type: 'video',
        videoUrl: '/hero-video.mp4',
        videoPoster: '/hero-poster.jpg'
      }}
      overlay={{
        enabled: true,
        color: '#000000',
        opacity: 0.4
      }}
      textColor="white"
      titleSize="hero"
      showScrollIndicator={true}
      callToActions={[
        {
          label: 'Get Started',
          url: '/signup',
          appearance: 'primary',
          size: 'lg'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'lg'
        }
      ]}
    />
  )
}`}</code>
            </pre>
            <CopyButton text={`// components/BigHero.tsx
import { BigHeroComponent } from './blocks/big-hero'

export function BigHero() {
  return (
    <BigHeroComponent
      title="Welcome to the Future"
      subtitle="Experience the next generation of technology"
      height="100vh"
      contentPosition="center"
      background={{
        type: 'video',
        videoUrl: '/hero-video.mp4',
        videoPoster: '/hero-poster.jpg'
      }}
      overlay={{
        enabled: true,
        color: '#000000',
        opacity: 0.4
      }}
      textColor="white"
      titleSize="hero"
      showScrollIndicator={true}
      callToActions={[
        {
          label: 'Get Started',
          url: '/signup',
          appearance: 'primary',
          size: 'lg'
        },
        {
          label: 'Learn More',
          url: '/about',
          appearance: 'outline',
          size: 'lg'
        }
      ]}
    />
  )
}`} />
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-4 py-2 text-left">Prop</th>
                <th className="border border-border px-4 py-2 text-left">Type</th>
                <th className="border border-border px-4 py-2 text-left">Default</th>
                <th className="border border-border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">height</td>
                <td className="border border-border px-4 py-2 text-sm">'100vh' | '90vh' | '80vh' | '70vh' | 'auto'</td>
                <td className="border border-border px-4 py-2 text-sm">'100vh'</td>
                <td className="border border-border px-4 py-2 text-sm">Section height</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">contentPosition</td>
                <td className="border border-border px-4 py-2 text-sm">'center' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center'</td>
                <td className="border border-border px-4 py-2 text-sm">'center'</td>
                <td className="border border-border px-4 py-2 text-sm">Content positioning</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">background</td>
                <td className="border border-border px-4 py-2 text-sm">BackgroundConfig</td>
                <td className="border border-border px-4 py-2 text-sm">gradient</td>
                <td className="border border-border px-4 py-2 text-sm">Background configuration</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">textColor</td>
                <td className="border border-border px-4 py-2 text-sm">'white' | 'dark' | 'primary'</td>
                <td className="border border-border px-4 py-2 text-sm">'white'</td>
                <td className="border border-border px-4 py-2 text-sm">Text color theme</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">titleSize</td>
                <td className="border border-border px-4 py-2 text-sm">'sm' | 'md' | 'lg' | 'xl' | 'hero'</td>
                <td className="border border-border px-4 py-2 text-sm">'hero'</td>
                <td className="border border-border px-4 py-2 text-sm">Title font size</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">enableAnimations</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Enable entrance animations</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">showScrollIndicator</td>
                <td className="border border-border px-4 py-2 text-sm">boolean</td>
                <td className="border border-border px-4 py-2 text-sm">true</td>
                <td className="border border-border px-4 py-2 text-sm">Show scroll indicator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Background Types */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Background Types</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Video Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'video',
  videoUrl: '/path/to/video.mp4',
  videoPoster: '/path/to/poster.jpg'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'video',
  videoUrl: '/path/to/video.mp4',
  videoPoster: '/path/to/poster.jpg'
}`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Gradient Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'gradient',
  gradientFrom: '#1e293b',
  gradientTo: '#0f172a',
  gradientDirection: 'to-br'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'gradient',
  gradientFrom: '#1e293b',
  gradientTo: '#0f172a',
  gradientDirection: 'to-br'
}`} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Image Background</h3>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`background: {
  type: 'image',
  image: '/path/to/background.jpg'
}`}</code>
              </pre>
              <CopyButton text={`background: {
  type: 'image',
  image: '/path/to/background.jpg'
}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Video Optimization Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video Optimization Tips</h2>
        <div className="space-y-3">
          <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md dark:border-yellow-800 dark:bg-yellow-900/20">
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Performance Best Practices</h3>
            <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• Use MP4 format for best browser compatibility</li>
              <li>• Optimize video file size (aim for under 5MB for hero videos)</li>
              <li>• Use H.264 codec with a moderate bitrate</li>
              <li>• Always provide a poster image for faster initial load</li>
              <li>• Consider hosting videos on a CDN for better performance</li>
              <li>• Test video loading on different connection speeds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}