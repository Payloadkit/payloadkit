import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Database, Cloud, Server, Globe } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Cloud Storage Configuration - PayloadKit',
  description: 'Configure external storage providers for your PayloadCMS media uploads using S3-compatible services',
}

export default function StoragePage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Cloud Storage Configuration"
        description="Configure external storage providers for your PayloadCMS media uploads using S3-compatible services like AWS S3, MinIO, DigitalOcean Spaces, and Cloudflare R2."
        category="guides"
        version="0.4.3"
        difficulty="intermediate"
        estimatedTime="15 minutes"
        lastUpdated="September 2025"
      />

      {/* Supported Providers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Supported Storage Providers</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Cloud className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <strong>AWS S3</strong>
              <p className="text-sm text-muted-foreground">Amazon Simple Storage Service</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Server className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <strong>MinIO</strong>
              <p className="text-sm text-muted-foreground">Self-hosted S3-compatible</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Database className="h-5 w-5 text-cyan-600 mt-0.5" />
            <div>
              <strong>DigitalOcean Spaces</strong>
              <p className="text-sm text-muted-foreground">Object Storage service</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Globe className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <strong>Cloudflare R2</strong>
              <p className="text-sm text-muted-foreground">Zero egress fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* AWS S3 Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">AWS S3 Configuration</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Installation</h3>
            <Snippet
              command="npm install @payloadcms/storage-s3"
              title="Install S3 Storage Adapter"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Basic Configuration</h3>
            <CodeBlock
              code={`// src/payload.config.ts
import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
  // Rest of your config...
})`}
              language="typescript"
              title="PayloadCMS S3 Configuration"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Environment Variables</h3>
            <CodeBlock
              code={`# AWS S3 Configuration
S3_BUCKET=my-app-uploads
S3_ACCESS_KEY_ID=AKIA...
S3_SECRET_ACCESS_KEY=your-secret-key
S3_REGION=us-east-1`}
              language="bash"
              title="AWS S3 Environment Variables"
            />
          </div>
        </div>
      </section>

      {/* MinIO Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">MinIO Configuration</h2>

        <Alert>
          <Server className="h-4 w-4" />
          <AlertDescription>
            <strong>Pro Tip:</strong> MinIO is 100% S3-compatible, so you can use the same{' '}
            <code>@payloadcms/storage-s3</code> package!
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Configuration</h3>
            <CodeBlock
              code={`// src/payload.config.ts
import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.MINIO_BUCKET,
      config: {
        endpoint: process.env.MINIO_ENDPOINT, // http://localhost:9000
        forcePathStyle: true, // Required for MinIO
        region: process.env.MINIO_REGION || 'us-east-1',
        credentials: {
          accessKeyId: process.env.MINIO_ACCESS_KEY,
          secretAccessKey: process.env.MINIO_SECRET_KEY,
        },
      },
    }),
  ],
  // Rest of your config...
})`}
              language="typescript"
              title="MinIO Configuration"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Environment Variables</h3>
            <CodeBlock
              code={`# MinIO Configuration
MINIO_ENDPOINT=http://localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=payload-uploads
MINIO_REGION=us-east-1`}
              language="bash"
              title="MinIO Environment Variables"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Docker Setup</h3>
            <CodeBlock
              code={`# Run MinIO server
docker run -d \\
  --name minio \\
  -p 9000:9000 \\
  -p 9001:9001 \\
  -e "MINIO_ROOT_USER=minioadmin" \\
  -e "MINIO_ROOT_PASSWORD=minioadmin" \\
  -v minio_data:/data \\
  minio/minio server /data --console-address ":9001"`}
              language="bash"
              title="MinIO Docker Command"
            />
          </div>
        </div>
      </section>

      {/* Other Providers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Other S3-Compatible Providers</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">DigitalOcean Spaces</h3>
            <CodeBlock
              code={`# Environment Variables
S3_ENDPOINT=https://nyc3.digitaloceanspaces.com
S3_BUCKET=my-space-name
S3_ACCESS_KEY_ID=your-spaces-key
S3_SECRET_ACCESS_KEY=your-spaces-secret
S3_REGION=nyc3`}
              language="bash"
              title="DigitalOcean Spaces Configuration"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Use the same S3 configuration with DigitalOcean Spaces endpoint.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Cloudflare R2</h3>
            <CodeBlock
              code={`# Environment Variables
S3_ENDPOINT=https://account-id.r2.cloudflarestorage.com
S3_BUCKET=my-r2-bucket
S3_ACCESS_KEY_ID=your-r2-token-id
S3_SECRET_ACCESS_KEY=your-r2-secret
S3_REGION=auto`}
              language="bash"
              title="Cloudflare R2 Configuration"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Zero egress fees with Cloudflare R2. Set <code>forcePathStyle: true</code> in config.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Advanced Configuration</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Collection-specific Settings</h3>
            <CodeBlock
              code={`s3Storage({
  collections: {
    // Enable for media collection
    media: true,

    // With custom prefix
    'media-with-prefix': {
      prefix: 'uploads/media',
    },

    // Conditional signed downloads (private files)
    'private-files': {
      signedDownloads: {
        shouldUseSignedURL: ({ collection, filename, req }) => {
          // Only sign PDF files
          return filename.endsWith('.pdf')
        },
      },
    },
  },
  bucket: process.env.S3_BUCKET,
  config: {
    // ... your S3 config
  },
})`}
              language="typescript"
              title="Advanced Collection Configuration"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Conditional Storage</h3>
            <CodeBlock
              code={`// Only use cloud storage in production
const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        // Your production S3 config
      },
    })
  )
}

export default buildConfig({
  plugins,
  // Rest of your config...
})`}
              language="typescript"
              title="Environment-based Configuration"
            />
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-2 text-sm">
              <div>• Never commit storage credentials to version control</div>
              <div>• Use IAM roles with minimal required permissions</div>
              <div>• Enable bucket versioning for data protection</div>
              <div>• Configure proper CORS settings</div>
              <div>• Use signed URLs for private/sensitive content</div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Performance</h3>
            <div className="space-y-2 text-sm">
              <div>• Use CDN for faster content delivery</div>
              <div>• Enable gzip compression on text files</div>
              <div>• Set appropriate cache headers</div>
              <div>• Consider multi-region buckets for global apps</div>
              <div>• Optimize images before upload when possible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <div className="space-y-4">
          <Alert>
            <AlertDescription>
              <strong>Connection refused to MinIO:</strong> Ensure MinIO is running and{' '}
              <code>MINIO_ENDPOINT</code> is correct. Check if port 9000 is accessible.
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              <strong>Images not loading:</strong> Check bucket policy allows public read access,
              CORS settings are configured, and <code>generateURL</code> returns correct public URL.
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              <strong>Performance optimization:</strong> Use CDN (CloudFront, CloudFlare) in front
              of your storage and enable image optimization at the CDN level.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button asChild>
            <Link href="/docs/deployment">
              Deployment Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/docker">
              Docker Setup
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Storage', 'S3', 'MinIO', 'AWS', 'DigitalOcean', 'Cloudflare', 'Configuration'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}