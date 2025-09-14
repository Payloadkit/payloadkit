# Guide de Démarrage PayloadKit

## 🚀 Installation Rapide

### Option 1 : Nouveau Projet (Recommandé)

```bash
# Créer un nouveau projet PayloadKit
npx create-payloadkit@latest mon-projet

cd mon-projet

# Développement local standard
bun dev

# OU développement avec Docker (environnement complet)
npm run docker:dev
```

### Option 2 : Projet Existant

```bash
# Dans votre projet PayloadCMS existant
npx payloadkit init

# Ajouter des composants
npx payloadkit add hero-block call-to-action
npx payloadkit add db-config  # Configuration intelligente
```

## 🎯 Choisir son Environnement

### 🖥️ Développement Local Standard

**Quand l'utiliser :** Développement simple, pas besoin de services externes

```bash
# Configuration minimale
echo "DATABASE_URI=postgresql://localhost:5432/mon_projet" > .env
echo "PAYLOAD_SECRET=mon-secret-local" >> .env

# Lancement
bun dev
```

### 🐳 Développement Docker (Recommandé)

**Quand l'utiliser :** Premier projet, tests d'emails, développement full-stack

```bash
# Environnement complet en une commande
npm run docker:dev

# Services inclus :
# - PayloadKit app (hot-reload)
# - PostgreSQL 16 avec extensions
# - Interface web à : http://localhost:3000
```

### 🌐 Développement Docker Complet

**Quand l'utiliser :** Développement avancé, tests d'emails, gestion DB

```bash
# Tous les services
npm run docker:dev:full

# Services supplémentaires :
# - Redis (cache) : localhost:6379
# - MailHog (emails) : localhost:8025
# - pgAdmin (DB) : localhost:5050
```

## 🗄️ Configuration Base de Données

### Auto-Détection Intelligente

PayloadKit détecte automatiquement votre environnement :

```typescript
// src/config/db-config/index.ts
export const dbConfig = createDbConfig() // PostgreSQL par défaut

// Ou explicitement
export const dbConfig = createDbConfig('mongodb') // MongoDB
```

### Variables d'Environnement

```bash
# PostgreSQL (par défaut)
DATABASE_URI=postgresql://user:pass@host:5432/db

# MongoDB (optionnel)
MONGODB_URI=mongodb://localhost:27017/mon_projet

# VPS/Dokploy (build séparé du runtime)
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build
DATABASE_URI=postgresql://prod:pass@private:5432/prod
```

## 📦 Ajout de Composants

### Interface de Base

```bash
# Composants essentiels
npx payloadkit add Users Media Pages

# Composants React
npx payloadkit add RichText CMSLink
```

### Blocks de Contenu

```bash
# Landing page
npx payloadkit add hero-block call-to-action

# Contenu
npx payloadkit add faq content feature

# Marketing
npx payloadkit add banner media-block
```

### Configuration Avancée

```bash
# Base de données intelligente
npx payloadkit add db-config

# Setup Docker
npx payloadkit add dockerfile-dev docker-compose-dev

# Configuration email
npx payloadkit add email-config
```

## 🚀 Déploiement

### Vercel (Zero Config)

```bash
# Variables Vercel
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret

# Déploiement
vercel deploy
```

### VPS/Dokploy (Smart Build)

```bash
# Variables build-time
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# Variables runtime
DATABASE_URI=postgresql://prod:pass@private:5432/prod
PAYLOAD_SECRET=your-production-secret

# Dokploy déploie automatiquement
```

## 🛠️ Workflows de Développement

### Développement Quotidien

```bash
# Option 1 : Standard
bun dev                    # http://localhost:3000

# Option 2 : Docker (recommandé)
npm run docker:dev         # Environnement complet
npm run docker:logs        # Voir les logs
npm run docker:db          # Accès direct PostgreSQL
```

### Ajout de Fonctionnalités

```bash
# 1. Ajouter des composants
npx payloadkit add new-component

# 2. Personnaliser dans src/
# 3. Tester en développement
npm run docker:dev

# 4. Déployer
git push origin main  # Auto-deploy sur Vercel/Dokploy
```

### Debug et Tests

```bash
# Logs de l'application
npm run docker:logs

# Accès direct à la base
npm run docker:db
# > SELECT * FROM users;

# Interface web MailHog (emails)
open http://localhost:8025

# Interface web pgAdmin (DB)
open http://localhost:5050
```

## 📧 Configuration Email

### Développement (MailHog)

```bash
# Avec Docker complet
npm run docker:dev:full

# Variables .env
SMTP_HOST=mailhog
SMTP_PORT=1025
# Pas d'auth nécessaire

# Emails visibles sur http://localhost:8025
```

### Production (SMTP)

```bash
# Variables .env.production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_ADDRESS=noreply@yourdomain.com
FROM_NAME="Mon App"
```

## 🎯 Cas d'Usage Courants

### 1. Premier Projet PayloadCMS

```bash
# Setup complet en 3 minutes
npx create-payloadkit@latest mon-premier-projet
cd mon-premier-projet
npm run docker:dev

# Ouvrir http://localhost:3000/admin
# Créer votre premier admin user
```

### 2. Migration PayloadCMS Existant

```bash
# Dans votre projet existant
npx payloadkit init

# Migrer vers config modulaire
npx payloadkit add db-config collections-config

# Remplacer payload.config.ts
# (voir docs/MODULAR-CONFIG.md)
```

### 3. Site Business/Marketing

```bash
# Template avec composants marketing
npx create-payloadkit@latest mon-business
cd mon-business

# Ajouter des blocks
npx payloadkit add hero-block feature faq call-to-action

npm run docker:dev
```

### 4. Développement avec Équipe

```bash
# Environnement reproductible
git clone your-project
cd your-project

# Setup identique pour tous
npm run docker:dev

# Base de données + services identiques
# Pas de "ça marche chez moi"
```

## 🔧 Personnalisation

### Modifier un Composant

```bash
# Ajouter le composant
npx payloadkit add hero-block

# Personnaliser dans votre projet
# src/blocks/hero-block/Component.tsx
# src/blocks/hero-block/config.ts
```

### Créer un Nouveau Block

```bash
# Copier un block existant comme base
cp -r src/blocks/hero-block src/blocks/mon-block

# Personnaliser
# src/blocks/mon-block/Component.tsx
# src/blocks/mon-block/config.ts

# Ajouter à PayloadCMS
# src/config/collections-config.ts
```

### Configuration Avancée

```typescript
// src/config/plugins-config.ts
import { createPluginsConfig } from './plugins-config'
import { searchPlugin } from '@payloadcms/plugin-search'

export const pluginsConfig = createPluginsConfig([
  searchPlugin({
    collections: ['posts', 'pages'],
  }),
])
```

## ❓ FAQ

### Q: PayloadKit vs PayloadCMS ?
**R:** PayloadKit enrichit PayloadCMS avec des composants, configurations et outils. PayloadCMS reste le cœur.

### Q: Puis-je utiliser npm au lieu de bun ?
**R:** Oui, remplacez `bun` par `npm` ou `yarn`. Docker fonctionne avec tous.

### Q: Comment changer la base de données ?
**R:**
```typescript
import { createDbConfig } from './config'
export const dbConfig = createDbConfig('mongodb')
```

### Q: Le Docker est-il obligatoire ?
**R:** Non, c'est optionnel. `bun dev` fonctionne parfaitement pour le développement simple.

### Q: Comment déployer sur mon VPS ?
**R:** Voir [docs/VPS-DEPLOYMENT.md](VPS-DEPLOYMENT.md) pour Dokploy, Railway, etc.

## 📚 Prochaines Étapes

1. **[Configuration Modulaire](MODULAR-CONFIG.md)** - Comprendre l'architecture
2. **[Docker Development](DOCKER-SETUP.md)** - Environnement de développement
3. **[VPS Deployment](VPS-DEPLOYMENT.md)** - Déploiement production

## 🆘 Support

- **Documentation** : Tous les guides dans `/docs`
- **Issues** : GitHub Issues pour les bugs
- **Community** : Discord PayloadCMS pour les questions

---

> 🎯 **Objectif** : Être productif avec PayloadCMS en moins de 5 minutes !