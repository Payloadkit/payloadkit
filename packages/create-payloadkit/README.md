# create-payloadkit

Create PayloadCMS projects with PayloadKit templates and components.

## Quick Start

```bash
# Create a new PayloadKit project
npx create-payloadkit my-project

# With specific template
npx create-payloadkit my-business --template business

# With custom options
npx create-payloadkit my-blog \
  --template blog \
  --package-manager bun \
  --no-git
```

## Available Templates

### 🎯 Blank Template (Ready)
Minimal foundation with essential collections and shadcn/ui integration.

**Features:**
- PayloadCMS with PostgreSQL adapter
- Collections: Users, Media, Pages
- shadcn/ui components pre-configured
- Next.js App Router setup
- TypeScript + Tailwind CSS
- Lexical rich text editor

**Usage:**
```bash
npx create-payloadkit my-project --template blank
```

### 📝 Blog Template (Coming Soon)
Blog-focused setup with posts, categories, and SEO optimization.

### 💼 Business Template (Coming Soon)  
Marketing website template with landing pages and CTA blocks.

### 🛍️ E-commerce Template (Coming Soon)
Online store template with products, cart, and checkout flow.

## CLI Options

| Option | Default | Description |
|--------|---------|-------------|
| `--template <name>` | `blank` | Template to use |
| `--package-manager <pm>` | `bun` | Package manager (bun, npm, yarn, pnpm) |
| `--no-install` | `false` | Skip dependency installation |
| `--no-git` | `false` | Skip git repository initialization |

## After Creation

Once your project is created:

1. **Setup Environment**
   ```bash
   cd my-project
   cp .env.example .env
   # Edit .env with your database credentials
   ```

2. **Install Dependencies** (if skipped)
   ```bash
   bun install
   ```

3. **Setup Database**
   - Create a PostgreSQL database
   - Update `DATABASE_URI` in your `.env` file

4. **Start Development**
   ```bash
   bun dev
   ```

5. **Access PayloadCMS Admin**
   - Visit `http://localhost:3000/admin`
   - Create your first admin user

## Adding More Components

Use the PayloadKit CLI to add more components to your project:

```bash
# Add blocks
payloadkit add hero-block
payloadkit add call-to-action
payloadkit add faq

# Add collections
payloadkit add Posts
payloadkit add Categories
```

## Project Structure

Generated projects follow this structure:

```
my-project/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (payload)/admin/    # PayloadCMS admin
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── collections/           # PayloadCMS collections
│   │   ├── Users/
│   │   ├── Media/
│   │   └── Pages/
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── RichText/         # PayloadCMS rich text renderer
│   │   └── CMSLink/          # Smart link component
│   ├── blocks/               # PayloadCMS blocks (added via CLI)
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── payload.config.ts    # PayloadCMS configuration
├── components.json           # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── .env.example            # Environment variables template
└── package.json           # Dependencies and scripts
```

## Environment Variables

Required environment variables (see `.env.example`):

```env
# PayloadCMS
PAYLOAD_SECRET=your-payload-secret-here
DATABASE_URI=postgresql://username:password@localhost:5432/database_name

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## Development

To develop create-payloadkit locally:

```bash
# Install dependencies
bun install

# Build the CLI
bun run build

# Test locally
node bin/index.js test-project --template blank
```

## Template Development

To create a new template:

1. Create template directory:
   ```bash
   mkdir templates/my-template
   ```

2. Add `template.json` metadata:
   ```json
   {
     "name": "my-template",
     "version": "0.1.0",
     "description": "My custom template",
     "extends": "blank",
     "collections": ["Users", "Media", "Pages", "Posts"],
     "blocks": ["hero-block", "content"],
     "features": ["Custom feature 1", "Custom feature 2"]
   }
   ```

3. Copy base structure from blank template and modify
4. Add to `TEMPLATES` object in `src/index.ts`
5. Test generation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add your template or improvements  
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see the LICENSE file for details.