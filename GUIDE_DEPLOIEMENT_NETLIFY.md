# 🚀 Guide de Déploiement sur Netlify

## ✅ Configuration Terminée

Tous les fichiers nécessaires ont été créés et configurés :

### Fichiers Netlify
- ✅ `netlify.toml` - Configuration Netlify
- ✅ `.nvmrc` - Version de Node.js
- ✅ `public/_redirects` - Redirections pour les routes dynamiques
- ✅ Plugin `@netlify/plugin-nextjs` installé

### Build Local Réussi ✅
Le build local a réussi sans erreurs !

---

## 📋 ÉTAPES DE DÉPLOIEMENT

### Étape 1 : Préparer le Dépôt Git

```powershell
# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Configuration pour déploiement Netlify"

# Pusher vers GitHub
git push origin master
```

### Étape 2 : Déployer sur Netlify

#### Option A : Via GitHub (Recommandé)

1. Aller sur [netlify.com](https://www.netlify.com/)
2. Se connecter avec GitHub
3. Cliquer sur "Add new site" > "Import an existing project"
4. Choisir "GitHub"
5. Sélectionner votre dépôt `medsar21/repo`

#### Configuration du Build (Netlify le fera automatiquement)

Netlify détectera automatiquement la configuration depuis `netlify.toml` :

```toml
Build command: npm run build
Publish directory: .next
```

**IMPORTANT** : Netlify utilisera automatiquement le plugin `@netlify/plugin-nextjs` grâce au fichier `netlify.toml`.

6. Cliquer sur "Deploy site"

#### Option B : Via Netlify CLI

```powershell
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser
netlify init

# Déployer
netlify deploy --prod
```

---

## 🔍 VÉRIFICATIONS APRÈS DÉPLOIEMENT

### 1. Page d'accueil
✅ `https://votre-site.netlify.app/`
- Header doit être visible
- Vidéo hero doit jouer
- Toutes les sections doivent charger

### 2. Pages Statiques
✅ `/actualites` - Liste des actualités
✅ `/calendrier` - Calendrier des matchs
✅ `/boutique` - Boutique
✅ `/billetterie` - Billetterie
✅ `/contact` - Contact
✅ `/equipes` - Équipes

### 3. Pages Dynamiques (CRITIQUE)
✅ `/actualites/maroc-qualifie-mondial-2026` - Article individuel
✅ `/joueurs/hakimi` - Page joueur
✅ `/joueurs/ziyech` - Page joueur
✅ `/equipes/nationale-a` - Équipe nationale A

**Si ces pages affichent "404" :**
- Le plugin Netlify n'est pas activé
- Voir la section "Résolution des Problèmes" ci-dessous

---

## ⚙️ VARIABLES D'ENVIRONNEMENT (Optionnel)

Si vous avez besoin d'ajouter des variables d'environnement :

1. Dans Netlify Dashboard
2. Aller dans "Site settings" > "Environment variables"
3. Ajouter vos variables

Exemples :
```
NEXT_PUBLIC_SITE_URL=https://votre-site.netlify.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🔧 RÉSOLUTION DES PROBLÈMES

### Problème : 404 sur toutes les pages

**Solution :**

1. Vérifier que le fichier `netlify.toml` est bien présent à la racine
2. Vérifier que le plugin est installé :

```powershell
npm list @netlify/plugin-nextjs
```

Si pas installé :
```powershell
npm install --save-dev @netlify/plugin-nextjs
git add package.json package-lock.json
git commit -m "Ajout plugin Netlify"
git push origin master
```

3. Dans Netlify, aller dans "Site settings" > "Build & deploy" > "Build settings"
4. Vérifier :
   - Build command: `npm run build`
   - Publish directory: `.next`

### Problème : 404 uniquement sur les pages dynamiques

**Solution :**

1. Vérifier que le fichier `public/_redirects` existe
2. Contenu de `public/_redirects` :

```
# Redirections pour Next.js sur Netlify
# Gère toutes les routes dynamiques

# Routes API
/api/*  /.netlify/functions/:splat  200

# Routes statiques
/*    /index.html   200
```

3. Redéployer :

```powershell
git add public/_redirects
git commit -m "Ajout redirections"
git push origin master
```

### Problème : Images ne chargent pas

**Solution :**

1. Vérifier que toutes les images sont dans `public/images/`
2. Vérifier les chemins dans le code : `/images/...` (pas `public/images/...`)
3. Redéployer

### Problème : Styles manquants

**Solution :**

1. Vérifier que `app/globals.css` et `tailwind.config.ts` sont commitées
2. Clear le cache Netlify :
   - Dans Netlify Dashboard
   - "Deploys" > "Trigger deploy" > "Clear cache and deploy site"

### Problème : Build échoue sur Netlify

**Solution :**

1. Vérifier les logs de build sur Netlify
2. Souvent, c'est une dépendance manquante :

```powershell
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push origin master
```

3. Vérifier la version de Node.js :
   - Le fichier `.nvmrc` spécifie Node 18
   - Netlify devrait l'utiliser automatiquement

---

## 🎯 CHECKLIST FINALE

Avant de déployer :

- [ ] Tous les fichiers sont commitées
- [ ] `npm run build` fonctionne localement
- [ ] `netlify.toml` est à la racine
- [ ] `.nvmrc` est à la racine
- [ ] `public/_redirects` existe
- [ ] `@netlify/plugin-nextjs` est dans `package.json`
- [ ] Toutes les images sont dans `public/images/`
- [ ] Code pushé sur GitHub

Après déploiement :

- [ ] Page d'accueil fonctionne
- [ ] Header et Footer visibles
- [ ] Navigation fonctionne
- [ ] Pages dynamiques (/joueurs/hakimi) fonctionnent
- [ ] Images chargent
- [ ] Styles appliqués
- [ ] Mobile responsive

---

## 📞 SUPPORT

Si vous rencontrez des problèmes :

1. Vérifier les logs de déploiement Netlify
2. Tester le build localement : `npm run build`
3. Vérifier la console du navigateur (F12) pour les erreurs

---

## 🔄 REDÉPLOIEMENT

Pour redéployer après modifications :

```powershell
# Faire vos modifications
# ...

# Commit et push
git add .
git commit -m "Description des modifications"
git push origin master

# Netlify redéploiera automatiquement !
```

---

## 🎨 PERSONNALISATION DU DOMAINE

1. Dans Netlify Dashboard
2. "Domain settings"
3. "Add custom domain"
4. Suivre les instructions pour configurer le DNS

---

## ✨ OPTIMISATIONS SUPPLÉMENTAIRES

### Activer Netlify Forms

Si vous voulez que le formulaire de contact fonctionne :

1. Dans `app/contact/page.tsx`, ajouter `netlify` à la balise `<form>` :

```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* ... */}
</form>
```

### Activer Netlify Analytics

1. Dans Netlify Dashboard
2. "Analytics" > "Enable analytics"
3. Suivre les instructions

---

**Tout est prêt pour le déploiement ! 🚀**

Si vous suivez ce guide, votre site fonctionnera parfaitement sur Netlify.

