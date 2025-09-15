# PayloadKit Documentation System Specifications

## Overview
Système de documentation interactif et professionnel pour tous les composants du registry PayloadKit, basé sur les bonnes pratiques des sites comme Chakra UI et shadcn/ui.

## Architecture des Composants

### 1. `PageDescription`
**Emplacement**: En haut de page, après la navigation
```tsx
<PageDescription
  title="Component Name"
  description="Concise description (1-2 sentences max)"
  category="blocks" | "components" | "collections" | "globals" | "plugins"
  version="0.1.0"
  payloadVersion="3.0+"
  difficulty="beginner" | "intermediate" | "advanced"
  estimatedTime="5 minutes"
  lastUpdated="January 2025"
/>
```

### 2. `ComponentPreview` avec Variantes Multiples
**Emplacement**: Section principale après PageDescription
```tsx
<ComponentPreview
  name="Component Preview"
  description="Brief explanation of what users will see"
  variants={[
    {
      name: "Default",
      description: "Standard use case with typical configuration",
      component: <DefaultDemo />
    },
    {
      name: "Variant Name",
      description: "Specific use case explanation",
      component: <VariantDemo />
    }
  ]}
  code={{
    component: "React component code for frontend",
    config: "PayloadCMS configuration",
    usage: "Implementation example"
  }}
  responsive={true}
  interactive={true}
/>
```

**Règles pour les Variantes:**
- Minimum 2 variantes quand pertinent (Default + cas d'usage spéciaux)
- Noms courts et explicites: "Default", "Compact", "Multiple Open", "With Icons"
- Descriptions concises expliquant la différence
- Démonstrations visuellement distinctes

### 3. `TutorialSteps`
**Emplacement**: Après ComponentPreview
```tsx
<TutorialSteps
  title="Installation & Setup"
  steps={[
    {
      title: 'Install the Component',
      keyword: 'Install',
      description: 'Add component via CLI',
      content: <Snippet command="payloadkit add component-name" />
    },
    {
      title: 'Add to PayloadCMS Config',
      keyword: 'Configure',
      description: 'Import and configure in PayloadCMS',
      content: <CodeBlock code="..." language="typescript" />
    },
    {
      title: 'Render in Frontend',
      keyword: 'Implement',
      description: 'Use in React components',
      content: <CodeBlock code="..." language="tsx" />
    },
    {
      title: 'Customize (Optional)',
      keyword: 'Customize',
      description: 'Modify to match design',
      content: <div>Customization instructions</div>,
      optional: true
    }
  ]}
  allowSkip={true}
/>
```

### 4. `ApiReference`
**Emplacement**: Après TutorialSteps
```tsx
<ApiReference
  title="API Reference"
  description="Complete reference for all props and configuration options"
  props={[
    {
      name: 'propName',
      type: 'string | boolean',
      description: 'What this prop controls',
      required: true,
      defaultValue: '"default"',
      example: 'propName="example"'
    }
  ]}
/>
```

### 5. `PageTags`
**Emplacement**: En bas de page (dernière section)
```tsx
<PageTags
  category="blocks" | "components" | "collections" | "globals"
  dependencies={[
    '@radix-ui/react-accordion',
    'lucide-react',
    'clsx',
    'tailwind-merge'
  ]}
  tags={[
    'FAQ', 'Accordion', 'Accessibility', 'shadcn/ui',
    'Radix UI', 'Interactive', 'PayloadCMS', 'React', 'TypeScript'
  ]}
/>
```

## Structure de Page Standard

```tsx
export default function ComponentPage() {
  return (
    <div className="space-y-8">
      {/* 1. Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/category">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Category
          </Link>
        </Button>
      </div>

      {/* 2. Page Description */}
      <PageDescription {...pageMetadata} />

      {/* 3. Component Preview avec Variantes */}
      <ComponentPreview {...previewConfig} />

      {/* 4. Installation Tutorial */}
      <TutorialSteps {...tutorialConfig} />

      {/* 5. API Reference */}
      <ApiReference {...apiConfig} />

      {/* 6. Type Definitions (si nécessaire) */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock {...typeDefinitions} />
      </div>

      {/* 7. Tags et Dependencies */}
      <PageTags {...pageTagsConfig} />
    </div>
  )
}
```

## Règles de Contenu

### Descriptions
- **Page description**: 1-2 phrases maximum, très concise
- **Preview description**: Explique ce que l'utilisateur va voir
- **Step descriptions**: Une phrase claire sur l'action à effectuer
- **Prop descriptions**: Explication technique précise

### Variantes à Créer
**Blocs PayloadCMS:**
- Default: Configuration standard
- Compact: Version minimaliste
- With Icons: Avec éléments visuels
- Multiple/Single: Comportements différents

**Composants React:**
- Default: Usage de base
- Styled: Avec styles personnalisés
- Interactive: Avec interactions avancées
- States: Différents états (loading, error, success)

**Collections PayloadCMS:**
- Basic: Configuration minimale
- Advanced: Avec hooks et validations
- Localized: Avec internationalisation

### Code Examples
- **Component**: Code React complet et fonctionnel
- **Config**: Configuration PayloadCMS exacte
- **Usage**: Exemple d'implémentation réaliste

## Components Techniques

### SyntaxHighlighter
- Support: TypeScript, JSX, JSON, Bash
- Thème: Light theme (prism.css)
- Hydration: Rendu serveur/client séparé pour éviter les erreurs

### Snippet
- Commandes CLI avec copie one-click
- Support multi-commandes avec descriptions
- Icônes Terminal et états de copie

### CodeBlock
- Onglets multiples (Component, Config, Usage)
- Headers contextuels avec noms de fichiers
- Boutons de copie intégrés

## Principes de Design

### Lisibilité
- Espacement généreux (`space-y-8`)
- Hiérarchie visuelle claire
- Contenu scannable rapidement

### Interaction
- Prévisualisations responsives (desktop/tablet/mobile)
- Variantes interchangeables
- Navigation pas-à-pas dans les tutoriels

### Cohérence
- Même structure sur toutes les pages
- Conventions de nommage uniformes
- Styles shadcn/ui partout

### Performance
- Composants optimisés pour SSR
- Code splitting au niveau des onglets
- Lazy loading des previews complexes

## Pages à Appliquer

### Blocs (`/docs/blocks/`)
- ✅ faq-block (implémenté)
- 🔲 hero-block
- 🔲 call-to-action
- 🔲 content-block
- 🔲 testimonial-block

### Composants (`/docs/components/`)
- 🔲 RichText
- 🔲 CMSLink
- 🔲 MediaComponent
- 🔲 ui/* (shadcn components)

### Collections (`/docs/collections/`)
- 🔲 Users
- 🔲 Media
- 🔲 Pages
- 🔲 Posts (si disponible)

### Globals (`/docs/globals/`)
- 🔲 Header
- 🔲 Footer
- 🔲 Settings

### Plugins (`/docs/plugins/`)
- 🔲 SEO Plugin
- 🔲 Analytics Plugin

## Actions Suivantes

1. **Appliquer à tous les blocs** - Commencer par hero-block
2. **Créer variantes pertinentes** pour chaque composant
3. **Standardiser les tutorials** avec étapes cohérentes
4. **Unifier les API References** avec props complètes
5. **Tester sur mobile** - responsive design
6. **Optimiser performances** - lazy loading si nécessaire

Cette spécification garantit une documentation professionnelle, interactive et cohérente sur tout le registry PayloadKit.