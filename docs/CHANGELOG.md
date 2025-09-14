# 📋 Changelog PayloadKit

Toutes les modifications importantes de PayloadKit sont documentées dans cette section.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## 🚀 Récent (Non publié)

### ✨ Nouvelles fonctionnalités

#### 📖 Site de Documentation
- **Site complet** : Site de documentation Next.js avec navigation moderne
- **Recherche fonctionnelle** : Recherche avec raccourci Ctrl+K et navigation clavier
- **Accessibilité** : Conformité WCAG complète avec support des lecteurs d'écran
- **Design responsive** : Interface adaptative mobile/desktop

#### 🐳 Docker & Déploiement
- **Environnement Docker** : Configuration complète avec PostgreSQL, Redis, et MailHog
- **Déploiement VPS** : Dockerfile optimisé pour déploiement Dokploy en production
- **DATABASE_BUILD_URI** : Support des connexions de base de données au build-time

#### ⚙️ Configuration Modulaire
- **Détection intelligente** : Détection automatique PostgreSQL/MongoDB
- **Configuration modulaire** : Architecture PayloadCMS modulaire et réutilisable
- **Support VPS** : Optimisations spécifiques pour déploiement VPS

#### 🎨 Composants Améliorés
- **Intégration shadcn/ui** : Composants shadcn/ui dans les blocs PayloadKit
- **Sécurité Auth** : Système d'authentification amélioré dans le template blank
- **Documentation S3** : Guides de configuration du stockage cloud

### 🔄 Modifications

- **Système de Templates** : Template blank inclut maintenant la configuration modulaire
- **Base de données** : PostgreSQL par défaut avec MongoDB en option
- **Système de build** : Optimisé pour environnements Docker de production

### 🐛 Corrections

- **Documentation** : Résolution des conflits React et problèmes d'accessibilité
- **Chemins de fichiers** : Correction du chargement markdown dans la documentation Next.js
- **Dialog de recherche** : Ajout du DialogTitle requis pour les lecteurs d'écran

---

## 🎯 Version 0.0.1 - 12 septembre 2024

### ✨ Fonctionnalités initiales

#### 🏗️ Framework Principal
- **Framework PayloadKit** : Framework initial avec système de registre
- **Outils CLI** : Interfaces en ligne de commande payloadkit et create-payloadkit
- **Registre de Composants** : Système de découverte de composants basé sur les fichiers locaux
- **Système de Templates** : Template blank avec intégration PayloadCMS

#### 📦 Architecture
- **Structure Monorepo** : Workspaces Bun avec architecture packages et apps
- **TypeScript** : Sécurité de type complète sur tous les packages
- **Composants Blocs** : Blocs PayloadCMS réutilisables avec composants React
- **Système de Collections** : Collections PayloadCMS réutilisables (Users, Media, Pages)
- **Architecture Plugin** : Système de plugins extensible suivant les patterns PayloadCMS

### 📚 Packages

#### `payloadkit` - CLI Principal
- **Commandes** : `init`, `list`, `add` pour la gestion des composants
- **Système de registre** : Chargement et découverte des composants
- **Approche copy-paste** : Contrôle maximum sur les composants
- **Détection de projet** : Détection automatique des projets PayloadCMS

#### `create-payloadkit` - Générateur de Projets
- **Scaffolding** : Création de projets PayloadCMS depuis des templates
- **Template blank** : Foundation minimale avec PayloadCMS + PostgreSQL
- **Gestion des dépendances** : Installation automatique des packages
- **Intégration Git** : Initialisation du dépôt et premier commit

#### `@payloadkit/core` - Types et Utilitaires
- **Types TypeScript** : Interfaces pour l'écosystème PayloadKit
- **Système de registre** : Définitions de types pour registre et métadonnées
- **Utilitaires partagés** : Fonctions communes et constantes
- **Sécurité de type** : Couverture TypeScript complète

### 🛠️ Dépendances Principales

- **PayloadCMS** : ^3.0.0+ intégration
- **Next.js** : ^15.4.4 pour documentation et templates
- **Bun** : Gestionnaire de packages et système de build principal
- **TypeScript** : Sécurité de type complète et expérience de développement
- **TailwindCSS** : Framework CSS utility-first
- **shadcn/ui** : Intégration de bibliothèque de composants modernes

---

## 📋 Format du Changelog

Ce changelog suit le format [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/) :

- **✨ Added** : Nouvelles fonctionnalités
- **🔄 Changed** : Modifications de fonctionnalités existantes
- **🗑️ Deprecated** : Fonctionnalités bientôt supprimées
- **🐛 Fixed** : Corrections de bugs
- **🔒 Security** : Correctifs de sécurité
- **❌ Removed** : Fonctionnalités supprimées

Le versioning suit [Semantic Versioning](https://semver.org/lang/fr/) :
- **MAJOR** : Changements incompatibles API
- **MINOR** : Nouvelles fonctionnalités rétrocompatibles
- **PATCH** : Corrections de bugs rétrocompatibles