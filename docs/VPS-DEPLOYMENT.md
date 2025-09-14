# Déploiement VPS avec PayloadKit

## 🚀 Vue d'ensemble

PayloadKit simplifie le déploiement sur VPS (Dokploy, CapRover, etc.) en gérant automatiquement les différences entre **build-time** et **runtime**. Plus besoin de créer une base de données factice pour le build !

## 🎯 Problème Résolu

Sur les VPS, la base de données de production n'est souvent **pas accessible pendant le build**. PayloadCMS a besoin d'une connexion DB pour générer les types TypeScript, ce qui cause des erreurs de déploiement.

### ❌ Avant PayloadKit
```bash
# Build échoue car la DB prod n'est pas accessible
ERROR: Connection failed to postgresql://prod:pass@private-host:5432/db
```

### ✅ Avec PayloadKit
```bash
# Build réussit avec DATABASE_BUILD_URI
✅ Connected to build database
✅ Types generated successfully
✅ Build completed
# Runtime utilise DATABASE_URI (DB prod)
✅ Connected to production database
```

## 🏗️ Architecture Smart

PayloadKit détecte automatiquement l'environnement et utilise la bonne configuration :

| Environnement | Build | Runtime | Configuration |
|---------------|-------|---------|---------------|
| **Vercel** | DATABASE_URI | DATABASE_URI | Auto-détection |
| **VPS/Dokploy** | DATABASE_BUILD_URI | DATABASE_URI | Smart fallback |
| **Local Dev** | DATABASE_URI | DATABASE_URI | Fallback local |

## 🔧 Configuration VPS

### 1. Variables d'Environnement

```bash
# Base de données de build (accessible pendant le build)
DATABASE_BUILD_URI=postgresql://build_user:build_pass@accessible_host:5432/build_db

# Base de données de production (runtime)
DATABASE_URI=postgresql://prod_user:prod_pass@private_host:5432/prod_db

# Autres variables
PAYLOAD_SECRET=your-super-secure-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Email (optionnel)
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
```

### 2. Dockerfile Optimisé

Le Dockerfile PayloadKit est optimisé pour les VPS :

```dockerfile
# Stage build avec DATABASE_BUILD_URI
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_URI="postgresql://dummy:dummy@localhost:5432/dummy"
# DATABASE_BUILD_URI sera injecté par Dokploy

# Génération des types avec la DB de build
RUN bunx payload generate:types && \
    bunx payload generate:importmap && \
    bun run build

# Stage production avec DATABASE_URI
FROM oven/bun:1-alpine AS runner
# DATABASE_URI sera injecté par Dokploy au runtime
```

## 🎯 Dokploy Setup

### 1. Création du Service

```yaml
# dokploy.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - DATABASE_BUILD_URI=${DATABASE_BUILD_URI}
      - DATABASE_URI=${DATABASE_URI}
      - PAYLOAD_SECRET=${PAYLOAD_SECRET}
      - NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
    ports:
      - "3000:3000"
```

### 2. Variables dans Dokploy

Dans l'interface Dokploy, configurez :

**Build Variables:**
```
DATABASE_BUILD_URI=postgresql://builduser:buildpass@accessible-db:5432/builddb
```

**Runtime Variables:**
```
DATABASE_URI=postgresql://produser:prodpass@private-db:5432/proddb
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

### 3. Base de Données de Build

Créez une base de données accessible pendant le build :

```sql
-- Base de données temporaire pour le build
CREATE DATABASE payloadkit_build;
CREATE USER build_user WITH PASSWORD 'build_password';
GRANT ALL PRIVILEGES ON DATABASE payloadkit_build TO build_user;

-- Extensions nécessaires
\c payloadkit_build;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
```

## 🛠️ Autres Plateformes VPS

### CapRover

```json
{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM your-registry/payloadkit-app:latest"
  ],
  "envVars": [
    {
      "key": "DATABASE_BUILD_URI",
      "value": "postgresql://build:pass@build-db:5432/build"
    },
    {
      "key": "DATABASE_URI",
      "value": "postgresql://prod:pass@srv-captain--db:5432/prod"
    }
  ]
}
```

### Railway

```bash
# Variables Railway
railway variables set DATABASE_BUILD_URI="postgresql://build:pass@build.railway.app:5432/railway"
railway variables set DATABASE_URI="postgresql://prod:pass@prod.railway.app:5432/railway"
railway variables set PAYLOAD_SECRET="your-secret"
```

### Coolify

```yaml
# docker-compose.yml pour Coolify
services:
  app:
    build: .
    environment:
      DATABASE_BUILD_URI: $DATABASE_BUILD_URI
      DATABASE_URI: $DATABASE_URI
      PAYLOAD_SECRET: $PAYLOAD_SECRET
    labels:
      - "coolify.managed=true"
```

## 🔍 Dépannage

### Erreur : "Cannot connect to database during build"

**Solution** : Vérifiez DATABASE_BUILD_URI

```bash
# Testez la connexion à la DB de build
psql "${DATABASE_BUILD_URI}" -c "SELECT 1;"

# Vérifiez les variables d'environnement
echo $DATABASE_BUILD_URI
```

### Erreur : "Types generation failed"

**Solution** : Base de données de build invalide

```bash
# La DB de build doit avoir les extensions PayloadCMS
psql "${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"
psql "${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \"pgcrypto\";"
```

### Erreur : "Application starts but database connection fails"

**Solution** : Vérifiez DATABASE_URI au runtime

```bash
# Vérifiez que DATABASE_URI est accessible depuis le container
docker exec your-container env | grep DATABASE_URI
```

### Performance : Build lent

**Solution** : Optimisez la base de données de build

```sql
-- Base de build minimaliste (sans données)
CREATE DATABASE payloadkit_build_minimal;
-- Seulement les extensions nécessaires
```

## 🎯 Bonnes Pratiques

### 1. Séparation Build/Runtime

```bash
# Build DB : Minimaliste, accessible, temporaire
DATABASE_BUILD_URI=postgresql://build:pass@public-build-db:5432/build

# Prod DB : Sécurisée, privée, avec données réelles
DATABASE_URI=postgresql://prod:pass@private-prod-db:5432/prod
```

### 2. Sécurité

```bash
# Build DB : Permissions limitées
CREATE USER build_user WITH PASSWORD 'temp_build_password';
GRANT CONNECT ON DATABASE build_db TO build_user;

# Prod DB : Permissions complètes
CREATE USER prod_user WITH PASSWORD 'secure_prod_password';
GRANT ALL PRIVILEGES ON DATABASE prod_db TO prod_user;
```

### 3. Monitoring

```bash
# Logs de build
docker logs your-build-container

# Logs de runtime
docker logs your-app-container

# Vérification DB
docker exec your-app psql $DATABASE_URI -c "SELECT version();"
```

## 📊 Comparaison des Solutions

| Méthode | Complexité | Sécurité | Performance |
|---------|------------|----------|-------------|
| **PayloadKit** | ⭐ Simple | ⭐⭐⭐ Excellente | ⭐⭐⭐ Rapide |
| DB factice | ⭐⭐ Moyenne | ⭐ Faible | ⭐⭐ Moyenne |
| Tunneling | ⭐⭐⭐ Complexe | ⭐⭐ Moyenne | ⭐ Lente |

## 🚀 Migration Vers PayloadKit

### Depuis une Config Classique

```typescript
// Avant
export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  })
})

// Après (PayloadKit)
import { dbConfig } from './config'

export default buildConfig({
  db: dbConfig  // Smart database avec BUILD_URI support
})
```

### Variables à Ajouter

```bash
# Ajoutez seulement DATABASE_BUILD_URI
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# DATABASE_URI reste identique
DATABASE_URI=postgresql://prod:pass@private:5432/prod
```

## 📚 Ressources

- [Configuration Modulaire PayloadKit](MODULAR-CONFIG.md)
- [Docker Development Setup](DOCKER-SETUP.md)
- [Dokploy Documentation](https://dokploy.com)
- [PayloadCMS Deployment Guide](https://payloadcms.com/docs/production/deployment)

---

> 🎯 **Résultat** : Déploiement VPS sans friction, base de données de production sécurisée, builds rapides et fiables !