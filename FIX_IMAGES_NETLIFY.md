# 🖼️ FIX : Images non trouvées sur Netlify

## 🔍 DIAGNOSTIC DU PROBLÈME

Les images ne s'affichent pas sur Netlify car :
1. ❌ Configuration `images.domains` dépréciée
2. ❌ `unoptimized: true` manquant pour Netlify
3. ❌ Cache Netlify peut contenir une ancienne version

---

## ✅ SOLUTIONS APPLIQUÉES

### 1. Configuration `next.config.js` Corrigée

**Changements :**
```js
images: {
  unoptimized: true,  // ✅ REQUIS pour Netlify
  remotePatterns: [   // ✅ Remplace 'domains' (déprécié)
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
    },
  ],
}
```

### 2. Vérification des Images Commitées

**Commande :**
```powershell
git ls-files public/images/
```

**Résultat :** ✅ Toutes les images sont bien trackées :
- `hero.mp4`
- `montakhab.webp`
- `Equipe-maroc-coupe-du-monde-qatar-2022.jpg`
- `FRMF-logo.svg`
- `logo dima maghrib.svg`
- Tous les drapeaux
- Tous les logos partenaires
- Toutes les photos de joueurs

---

## 🚀 ÉTAPES POUR RÉSOUDRE

### Étape 1 : Commiter la Nouvelle Configuration

```powershell
git add next.config.js FIX_IMAGES_NETLIFY.md
git commit -m "Fix: Configuration images pour Netlify"
git push origin master
```

### Étape 2 : Clear le Cache Netlify

1. Aller sur **Netlify Dashboard**
2. Cliquer sur votre site
3. Aller dans **"Deploys"**
4. Cliquer sur **"Trigger deploy"**
5. Sélectionner **"Clear cache and deploy site"**

**C'EST CRUCIAL !** Le cache Netlify peut contenir l'ancienne configuration.

### Étape 3 : Vérifier les Logs de Build

Sur Netlify, vérifier que le build ne contient pas d'erreurs :
```
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

---

## 🔧 TROUBLESHOOTING

### Problème : Images encore 404 après redéploiement

**Solution A : Vérifier les chemins**

Les chemins d'images doivent être :
```tsx
// ✅ CORRECT
<Image src="/images/hero.mp4" />
<Image src="/images/montakhab.webp" />
<Image src="/images/FRMF-logo.svg" />

// ❌ INCORRECT
<Image src="public/images/hero.mp4" />
<Image src="./images/hero.mp4" />
<Image src="images/hero.mp4" />
```

**Solution B : Vérifier que les images sont pushées**

```powershell
git log --name-only --pretty=format: | grep "public/images" | head -20
```

Si les images n'apparaissent pas, commitez-les :
```powershell
git add public/images/
git commit -m "Add all images"
git push origin master
```

**Solution C : Vérifier le .gitignore**

Assurez-vous que `public/images/` n'est PAS dans `.gitignore` :

```gitignore
# ❌ NE PAS AVOIR CECI
/public/images/

# ✅ CORRECT (pas de ligne pour public/images/)
/.next/
/out/
/node_modules
```

---

## 📂 STRUCTURE DES IMAGES

Voici la structure actuelle (✅ correcte) :

```
public/
└── images/
    ├── hero.mp4                              ✅
    ├── montakhab.webp                        ✅
    ├── FRMF-logo.svg                         ✅
    ├── logo dima maghrib.svg                 ✅
    ├── Equipe-maroc-coupe-du-monde-qatar-2022.jpg  ✅
    ├── equipe-roi.jpg                        ✅
    ├── drapeaux/
    │   ├── maroc.svg                         ✅
    │   ├── egypte.svg                        ✅
    │   ├── espagne.svg                       ✅
    │   └── tanzanie.svg                      ✅
    └── partners/
        ├── puma.jpg                          ✅
        ├── ocp.png                           ✅
        ├── inwi.png                          ✅
        ├── CDG.jpg                           ✅
        ├── BANK-AL-MAGHRIB.jpg               ✅
        └── AFRIQUIA.jpg                      ✅
```

---

## 🎯 CHECKLIST FINALE

Avant de redéployer :

- [x] `next.config.js` contient `unoptimized: true`
- [x] `remotePatterns` remplace `domains`
- [x] Toutes les images sont dans `public/images/`
- [x] Toutes les images sont commitées
- [x] `.gitignore` n'exclut pas `public/images/`
- [ ] Nouveau commit créé
- [ ] Push vers GitHub effectué
- [ ] Cache Netlify effacé
- [ ] Site redéployé

---

## 💡 POURQUOI `unoptimized: true` ?

Netlify ne supporte pas l'optimisation d'images Next.js par défaut. Sans `unoptimized: true`, Next.js essaie d'optimiser les images à la volée, ce qui échoue sur Netlify.

**Avantages :**
- ✅ Les images fonctionnent immédiatement
- ✅ Pas besoin de configuration supplémentaire
- ✅ Compatible avec tous les formats (webp, avif, svg, jpg, png)

**Inconvénients :**
- ⚠️ Pas d'optimisation automatique (mais vous pouvez optimiser les images manuellement avant de les uploader)

---

## 🔄 ALTERNATIVE : Utiliser Netlify Image CDN

Si vous voulez l'optimisation d'images, ajoutez ceci au `netlify.toml` :

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[[plugins]]
  package = "netlify-plugin-image-optimization"
```

Puis installez :
```powershell
npm install --save-dev netlify-plugin-image-optimization
```

---

## 📊 VÉRIFICATION APRÈS DÉPLOIEMENT

### Test 1 : Page d'accueil
```
https://votre-site.netlify.app/
```
- ✅ Vidéo hero doit jouer
- ✅ Logo FRMF visible dans le header
- ✅ Images des actualités chargent

### Test 2 : Section Joueurs
```
https://votre-site.netlify.app/#joueurs
```
- ✅ Photo de montakhab en arrière-plan
- ✅ Photos des joueurs visibles

### Test 3 : Section Partenaires
```
https://votre-site.netlify.app/#partenaires
```
- ✅ Logos des partenaires visibles
- ✅ Effet hover fonctionne

### Test 4 : DevTools
Ouvrir DevTools (F12) > Network > Img
- ✅ Toutes les images doivent avoir un statut **200**
- ❌ Si **404**, l'image n'est pas trouvée

---

## 🆘 SI LE PROBLÈME PERSISTE

### Option 1 : Rebuild complet

```powershell
# Local
Remove-Item -Path .next -Recurse -Force
npm run build
git add .
git commit -m "Rebuild with fixed image config"
git push origin master
```

### Option 2 : Vérifier le build Netlify

Dans les logs Netlify, chercher :
```
Copying static files...
public/images/hero.mp4
public/images/montakhab.webp
```

Si ces lignes n'apparaissent pas, les images ne sont pas copiées.

### Option 3 : Support Netlify

Si rien ne fonctionne, contacter le support Netlify avec :
- URL du site
- Logs de build
- Message d'erreur exact

---

## ✅ RÉSUMÉ

**Problème :** Images 404 sur Netlify  
**Cause :** Configuration `next.config.js` incompatible  
**Solution :** 
1. Ajouter `unoptimized: true`
2. Remplacer `domains` par `remotePatterns`
3. Clear cache Netlify
4. Redéployer

**Commandes :**
```powershell
git add next.config.js FIX_IMAGES_NETLIFY.md
git commit -m "Fix: Images configuration for Netlify"
git push origin master
```

Puis sur Netlify : **Clear cache and deploy** 🚀

