# Docker Development Setup PayloadKit

## 🐳 Vue d'ensemble

PayloadKit propose maintenant un **environnement de développement Docker complet** avec PostgreSQL, Redis, MailHog et pgAdmin. Un seul `docker-compose up` et vous avez un stack PayloadCMS prêt à développer !

## ✨ Fonctionnalités

- **🐋 Multi-stage Dockerfile** : Dev, Build et Production optimisés
- **📦 PostgreSQL 16** : Base de données avec extensions et health checks
- **⚡ Hot-reload** : Développement avec rechargement automatique
- **🔧 Services optionnels** : Redis, MailHog, pgAdmin
- **🚀 Production ready** : Compatible Dokploy/VPS
- **🛡️ Sécurisé** : Utilisateur non-root, health checks

## 🚀 Démarrage Rapide

### 1. Lancement Standard
```bash
# Environnement de base (app + PostgreSQL)
npm run docker:dev

# Ou en arrière-plan
npm run docker:dev:detached
```

### 2. Environnement Complet
```bash
# Avec Redis, MailHog et pgAdmin
npm run docker:dev:full
```

### 3. Premier Build
```bash
# Build et lancement
npm run docker:dev:build
```

## 📂 Structure Docker

```
projet/
├── Dockerfile              # Multi-stage (dev, builder, runner)
├── docker-compose.yml      # Environnement complet
├── .dockerignore          # Optimisation build context
├── init.sql               # Initialisation PostgreSQL
└── .env                   # Variables d'environnement
```

## 🔧 Services Disponibles

| Service | Port | Description | Profile |
|---------|------|-------------|---------|
| **app** | 3000 | PayloadKit + Next.js | Toujours |
| **postgres** | 5432 | PostgreSQL 16 + extensions | Toujours |
| **redis** | 6379 | Cache et sessions | `full` |
| **mailhog** | 8025 | Interface email de test | `full` |
| **mailhog-smtp** | 1025 | Serveur SMTP de test | `full` |
| **pgadmin** | 5050 | Administration PostgreSQL | `full` |

## 📋 Scripts NPM Disponibles

```bash
# Développement
npm run docker:dev          # Lancement standard
npm run docker:dev:build    # Build + lancement
npm run docker:dev:detached # Lancement en arrière-plan
npm run docker:dev:full     # Environnement complet

# Gestion
npm run docker:stop         # Arrêter tous les services
npm run docker:reset        # Reset complet (supprime volumes)
npm run docker:logs         # Voir les logs de l'app
npm run docker:db           # Connexion directe à PostgreSQL
```

## 🗄️ Configuration Base de Données

### Variables d'Environnement
```bash
# .env
POSTGRES_USER=payloadkit
POSTGRES_PASSWORD=payloadkit
POSTGRES_DB=payloadkit_dev

# PayloadKit
DATABASE_URI=postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev
PAYLOAD_SECRET=your-secret-key
```

### Accès Direct à la DB
```bash
# Via Docker Compose
npm run docker:db

# Ou directement
docker-compose exec postgres psql -U payloadkit -d payloadkit_dev
```

### pgAdmin (Interface Web)
- **URL** : http://localhost:5050
- **Email** : admin@payloadkit.dev
- **Mot de passe** : admin

## 📧 Test des Emails avec MailHog

### Configuration
```bash
# .env
SMTP_HOST=mailhog
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=
```

### Interface Web
- **URL** : http://localhost:8025
- Tous les emails envoyés par PayloadCMS apparaissent ici
- Parfait pour tester les workflows d'email

## 🚀 Production avec Dokploy/VPS

### Dockerfile Multi-Stage

Le Dockerfile inclut 3 stages optimisés :

```dockerfile
# Stage 1: Development (hot-reload)
FROM oven/bun:1-alpine AS dev

# Stage 2: Build (génération types + build)
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_BUILD_URI=postgresql://...

# Stage 3: Production (standalone optimisé)
FROM oven/bun:1-alpine AS runner
```

### Variables de Production

```bash
# Build-time (si base accessible au build)
DATABASE_BUILD_URI=postgresql://build-user:pass@build-host:5432/build-db

# Runtime
DATABASE_URI=postgresql://prod-user:pass@prod-host:5432/prod-db
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Email production
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
```

### Build Production

```bash
# Build image de production
docker build --target runner -t payloadkit-prod .

# Ou avec Dokploy (automatique)
# Dokploy utilise automatiquement le stage 'runner'
```

## 🔧 Personnalisation

### Ajout de Services

```yaml
# docker-compose.yml
services:
  # Service personnalisé
  elasticsearch:
    image: elasticsearch:8.11.0
    ports:
      - '9200:9200'
    environment:
      - discovery.type=single-node
    profiles:
      - search
```

### Modification PostgreSQL

```sql
-- init.sql : Ajout d'extensions
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Utilisateur personnalisé
CREATE ROLE my_app_user WITH LOGIN PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE payloadkit_dev TO my_app_user;
```

### Variables d'Environnement Personnalisées

```yaml
# docker-compose.yml
services:
  app:
    environment:
      - CUSTOM_API_KEY=${CUSTOM_API_KEY}
      - FEATURE_FLAG_X=${FEATURE_FLAG_X:-false}
```

## 🔍 Dépannage

### Problème : Port 5432 déjà utilisé
```bash
# Changer le port PostgreSQL
# docker-compose.yml
ports:
  - '5433:5432'  # Port local différent
```

### Problème : Volumes corrompus
```bash
# Reset complet
npm run docker:reset

# Ou manuellement
docker-compose down -v
docker system prune
```

### Problème : Build échoue
```bash
# Vérifier les logs
docker-compose logs app

# Rebuild sans cache
docker-compose build --no-cache app
```

### Problème : Hot-reload ne fonctionne pas
```bash
# Vérifier les volumes dans docker-compose.yml
volumes:
  - .:/app              # Code source
  - /app/node_modules    # Exclude node_modules
  - /app/.next           # Exclude .next
```

## 📊 Monitoring et Health Checks

### Health Checks Intégrés

Tous les services incluent des health checks :

```yaml
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U payloadkit"]
  interval: 10s
  timeout: 5s
  retries: 5
  start_period: 30s
```

### Vérification Status

```bash
# Status de tous les services
docker-compose ps

# Logs en temps réel
docker-compose logs -f

# Logs d'un service spécifique
docker-compose logs -f postgres
```

## 🎯 Workflows de Développement

### Développement Local
```bash
1. npm run docker:dev          # Lancement
2. Développer en hot-reload     # Code changes = auto-reload
3. npm run docker:logs         # Debugging
4. npm run docker:stop         # Arrêt propre
```

### Test avec Services Complets
```bash
1. npm run docker:dev:full     # Tous les services
2. Tester emails sur :8025     # MailHog
3. Gérer DB via :5050          # pgAdmin
4. Caching Redis :6379         # Si configuré
```

### Préparation Production
```bash
1. docker build --target runner -t my-app .
2. docker run --env-file .env.prod my-app
3. Tester l'image de production
4. Déployer sur Dokploy/VPS
```

## 📚 Ressources

- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL Docker](https://hub.docker.com/_/postgres)
- [Next.js Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing)

---

> 🚀 **Conseil** : Utilisez `npm run docker:dev` pour le développement quotidien et `npm run docker:dev:full` quand vous avez besoin de tester les emails ou gérer la base !