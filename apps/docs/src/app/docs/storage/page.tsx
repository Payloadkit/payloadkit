import { Badge } from '@/components/ui/badge'

export default function StoragePage() {
  return (
    <div className="py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">Cloud Storage</h1>
            <Badge variant="default" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Configuration
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Configure external storage providers for your PayloadCMS media uploads using S3-compatible services.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="rounded-lg border p-6 bg-muted/50">
          <h2 className="text-2xl font-semibold mb-4">☁️ Supported Storage Providers</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">🔥 AWS S3</h4>
              <p className="text-sm text-muted-foreground">Amazon Simple Storage Service</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">📦 MinIO</h4>
              <p className="text-sm text-muted-foreground">Self-hosted S3-compatible</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">🌊 DigitalOcean</h4>
              <p className="text-sm text-muted-foreground">Spaces Object Storage</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">☁️ Cloudflare R2</h4>
              <p className="text-sm text-muted-foreground">Zero egress fees</p>
            </div>
          </div>
        </div>

        {/* AWS S3 Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔥 AWS S3 Configuration</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>npm install @payloadcms/storage-s3</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
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
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <div className="bg-muted rounded p-4 text-sm font-mono space-y-2">
              <div className="text-green-600"># AWS S3 Configuration</div>
              <div>S3_BUCKET=my-app-uploads</div>
              <div>S3_ACCESS_KEY_ID=AKIA...</div>
              <div>S3_SECRET_ACCESS_KEY=your-secret-key</div>
              <div>S3_REGION=us-east-1</div>
            </div>
          </div>
        </section>

        {/* MinIO Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📦 MinIO Configuration</h2>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-700 dark:text-blue-300">
              <strong>💡 Pro Tip:</strong> MinIO is 100% S3-compatible, so you can use the same <code>@payloadcms/storage-s3</code> package!
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>npm install @payloadcms/storage-s3</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">MinIO Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
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
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">MinIO Environment Variables</h3>
            <div className="bg-muted rounded p-4 text-sm font-mono space-y-2">
              <div className="text-green-600"># MinIO Configuration</div>
              <div>MINIO_ENDPOINT=http://localhost:9000</div>
              <div>MINIO_ACCESS_KEY=minioadmin</div>
              <div>MINIO_SECRET_KEY=minioadmin</div>
              <div>MINIO_BUCKET=payload-uploads</div>
              <div>MINIO_REGION=us-east-1</div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Setting up MinIO locally</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Using Docker</h4>
                <div className="bg-muted rounded p-4 text-sm">
                  <code>{`# Run MinIO server
docker run -d \\
  --name minio \\
  -p 9000:9000 \\
  -p 9001:9001 \\
  -e "MINIO_ROOT_USER=minioadmin" \\
  -e "MINIO_ROOT_PASSWORD=minioadmin" \\
  -v minio_data:/data \\
  minio/minio server /data --console-address ":9001"`}</code>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Using Docker Compose</h4>
                <div className="bg-muted rounded p-4 text-sm">
                  <code>{`# docker-compose.yml
version: '3.8'
services:
  minio:
    image: minio/minio
    container_name: minio
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    volumes:
      - minio_data:/data
    command: server /data --console-address ":9001"
    
volumes:
  minio_data:`}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Providers */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🌍 Other S3-Compatible Providers</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* DigitalOcean Spaces */}
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🌊 DigitalOcean Spaces</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// Environment Variables
S3_ENDPOINT=https://nyc3.digitaloceanspaces.com
S3_BUCKET=my-space-name
S3_ACCESS_KEY_ID=your-spaces-key
S3_SECRET_ACCESS_KEY=your-spaces-secret
S3_REGION=nyc3`}</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Use the same S3 configuration with DigitalOcean Spaces endpoint.
              </p>
            </div>

            {/* Cloudflare R2 */}
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">☁️ Cloudflare R2</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// Environment Variables
S3_ENDPOINT=https://account-id.r2.cloudflarestorage.com
S3_BUCKET=my-r2-bucket
S3_ACCESS_KEY_ID=your-r2-token-id
S3_SECRET_ACCESS_KEY=your-r2-secret
S3_REGION=auto`}</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Zero egress fees with Cloudflare R2. Set <code>forcePathStyle: true</code> in config.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">⚙️ Advanced Configuration</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Collection-specific Settings</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`s3Storage({
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
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Conditional Storage</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// Only use cloud storage in production
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
})`}</code>
            </div>
          </div>
        </section>

        {/* PayloadKit Integration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🎯 PayloadKit Integration</h2>
          
          <div className="rounded-lg border p-6 bg-green-50 dark:bg-green-950/20">
            <h3 className="text-xl font-semibold mb-4">Adding to Existing Project</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Install the storage adapter</h4>
                <div className="bg-background rounded p-3 text-sm">
                  <code>npm install @payloadcms/storage-s3</code>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">2. Configure your environment</h4>
                <div className="bg-background rounded p-3 text-sm">
                  <code>cp .env.example .env && # Add your storage credentials</code>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">3. Update payload.config.ts</h4>
                <div className="bg-background rounded p-3 text-sm">
                  <code>// Add s3Storage plugin to your plugins array</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-yellow-700 dark:text-yellow-300">
              <strong>⚠️ Important:</strong> The PayloadKit <code>blank</code> template uses local file storage by default for simplicity. Add cloud storage when you're ready for production deployment.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Connection refused to MinIO</h4>
              <div className="text-red-700 dark:text-red-300 text-sm space-y-2">
                <div><strong>Issue:</strong> Cannot connect to MinIO server</div>
                <div><strong>Solution:</strong> Ensure MinIO is running and <code>MINIO_ENDPOINT</code> is correct</div>
                <div><strong>Solution:</strong> Check if port 9000 is accessible and not blocked by firewall</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Images not loading</h4>
              <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                <div><strong>Check:</strong> Bucket policy allows public read access</div>
                <div><strong>Check:</strong> CORS settings are configured for your domain</div>
                <div><strong>Check:</strong> <code>generateURL</code> returns the correct public URL</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Performance optimization</h4>
              <div className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                <div><strong>Tip:</strong> Use CDN (CloudFront, CloudFlare) in front of your storage</div>
                <div><strong>Tip:</strong> Enable image optimization and resizing at the CDN level</div>
                <div><strong>Tip:</strong> Consider using signed URLs for private content</div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">✨ Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🔒 Security</h3>
              <div className="space-y-2 text-sm">
                <div>• Never commit storage credentials to version control</div>
                <div>• Use IAM roles with minimal required permissions</div>
                <div>• Enable bucket versioning for data protection</div>
                <div>• Configure proper CORS settings</div>
                <div>• Use signed URLs for private/sensitive content</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🚀 Performance</h3>
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
      </div>
    </div>
  )
}