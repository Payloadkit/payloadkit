# Configuration Modulaire PayloadKit

## 🏗️ Vue d'ensemble

PayloadKit utilise maintenant une **architecture de configuration modulaire** qui permet de diviser la configuration PayloadCMS en modules réutilisables et maintenables. Fini les fichiers `payload.config.ts` monolithiques !

## ✨ Avantages

- **🗄️ Database Smart** : PostgreSQL par défaut, MongoDB en option
- **☁️ Deploy Intelligent** : Auto-détection Vercel vs VPS (Dokploy)
- **📦 Modulaire** : Chaque aspect configuré séparément
- **🔄 Réutilisable** : Configs partagées entre projets
- **🚀 DATABASE_BUILD_URI** : Support VPS sans accès DB au build

## 📂 Structure

```
src/config/
├── index.ts              # Point d'entrée principal
├── db-config/            # Configuration base de données
│   ├── index.ts          # Auto-sélection PostgreSQL/MongoDB
│   ├── postgres.ts       # Adaptateur PostgreSQL + smart connection
│   └── mongodb.ts        # Adaptateur MongoDB (optionnel)
├── collections-config.ts # Configuration des collections
├── plugins-config.ts     # Configuration des plugins
├── globals-config.ts     # Configuration des globals
├── jobs-config.ts        # Configuration des jobs/tâches
└── email-config.ts       # Configuration email dev/prod
```

## 🚀 Utilisation Rapide

### Configuration de Base

```typescript
// src/payload.config.ts
import { buildConfig } from 'payload'
import {
  dbConfig,
  collectionsConfig,
  pluginsConfig,
  globalsConfig,
  jobsConfig,
  emailConfig,
} from './config'

export default buildConfig({
  // Configuration modulaire
  db: dbConfig,
  collections: collectionsConfig,
  plugins: pluginsConfig,
  globals: globalsConfig,
  jobs: jobsConfig,
  email: emailConfig,

  // Configuration standard
  secret: process.env.PAYLOAD_SECRET,
  // ...
})
```

## 🗄️ Configuration Database

### PostgreSQL (Par Défaut)

```typescript
// Utilisation automatique
import { dbConfig } from './config'

// Ou explicite
import { postgresDbConfig } from './config'
```

### MongoDB (Optionnel)

```typescript
import { createDbConfig } from './config'

const dbConfig = createDbConfig('mongodb')
```

### Variables d'Environnement

| Variable | Description | Environnement |
|----------|-------------|---------------|
| `DATABASE_URI` | Connexion principale | Vercel + VPS runtime |
| `DATABASE_BUILD_URI` | Connexion build-time | VPS uniquement |
| `MONGODB_URI` | Connexion MongoDB | Si MongoDB utilisé |
| `MONGODB_BUILD_URI` | MongoDB build-time | VPS + MongoDB |

## ☁️ Déploiement Intelligent

### Vercel (Automatique)
```bash
# Variables nécessaires
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret
```

### VPS/Dokploy (DATABASE_BUILD_URI)
```bash
# Build-time (base de données accessible au build)
DATABASE_BUILD_URI=postgresql://build-user:pass@build-host:5432/db

# Runtime (base de données de production)
DATABASE_URI=postgresql://prod-user:pass@prod-host:5432/db
PAYLOAD_SECRET=your-production-secret
```

### Local Development
```bash
# Fallback automatique
DATABASE_URI=postgresql://localhost:5432/payloadkit_dev
```

## 📦 Extension de Configuration

### Ajout de Collections Personnalisées

```typescript
// src/config/collections-config.ts
import { createCollectionsConfig } from './collections-config'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'

export const collectionsConfig = createCollectionsConfig([
  Posts,
  Categories,
])
```

### Ajout de Plugins Personnalisés

```typescript
// src/config/plugins-config.ts
import { createPluginsConfig } from './plugins-config'
import { searchPlugin } from '@payloadcms/plugin-search'

export const pluginsConfig = createPluginsConfig([
  searchPlugin({
    collections: ['posts'],
  }),
])
```

## 🔧 Configuration Email

### Développement (Console)
```typescript
// Automatique en NODE_ENV=development
// Les emails sont loggés dans la console
```

### Production (SMTP)
```bash
# Variables d'environnement
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_ADDRESS=noreply@yourdomain.com
FROM_NAME="Your App Name"
```

## ⚙️ Configuration Jobs

### Jobs avec Sécurité

```typescript
// Accès automatique pour utilisateurs connectés
// Accès par CRON_SECRET pour automatisation

// Variables d'environnement
CRON_SECRET=your-cron-secret

// Header pour Vercel Cron
Authorization: Bearer your-cron-secret
```

## 🎯 Migration depuis Config Monolithique

### Avant (Monolithique)
```typescript
export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  }),
  collections: [Users, Media, Pages],
  plugins: [seoPlugin(), formBuilderPlugin()],
  // ...
})
```

### Après (Modulaire)
```typescript
export default buildConfig({
  db: dbConfig,           // Smart database avec auto-détection
  collections: collectionsConfig,  // Collections réutilisables
  plugins: pluginsConfig, // Plugins essentiels
  // ...
})
```

## 🔍 Dépannage

### Problème : "Cannot find module '@payloadcms/db-mongodb'"

**Solution** : MongoDB est optionnel
```bash
# Installer uniquement si nécessaire
bun add @payloadcms/db-mongodb
```

### Problème : Build échoue sur VPS

**Solution** : Vérifier DATABASE_BUILD_URI
```bash
# Doit être accessible pendant le build
DATABASE_BUILD_URI=postgresql://builduser:pass@accessible-host:5432/builddb
```

### Problème : Emails ne fonctionnent pas

**Solution** : Vérifier configuration SMTP
```bash
# Toutes les variables obligatoires
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=user@domain.com
SMTP_PASS=password
```

## 📚 Ressources

- [Configuration PayloadCMS](https://payloadcms.com/docs/configuration/overview)
- [PostgreSQL Adapter](https://payloadcms.com/docs/database/postgres)
- [MongoDB Adapter](https://payloadcms.com/docs/database/mongodb)
- [Email Configuration](https://payloadcms.com/docs/email/overview)

---

> 💡 **Conseil** : Commencez avec la configuration par défaut, puis personnalisez selon vos besoins !