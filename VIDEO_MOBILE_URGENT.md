# 📱 VIDÉO SUR MOBILE - SOLUTION URGENTE

## ✅ CE QUE J'AI FAIT

J'ai modifié le code pour que la **vidéo s'affiche sur desktop ET mobile** (pas seulement l'image).

---

## ⚠️ PROBLÈME IMPORTANT

**Votre vidéo = 81 MB**

Sur mobile :
- ❌ **Prendra 1-5 MINUTES** à charger (4G/5G)
- ❌ **Impossible** sur 3G
- ❌ **Consomme beaucoup de data** (les utilisateurs vont fermer le site)
- ❌ **Netlify peut timeout** (erreur 504)

---

## 🚨 VOUS DEVEZ COMPRESSER LA VIDÉO !

### ⚡ SOLUTION RAPIDE (5 minutes)

#### 1. Aller sur ce site
```
https://www.freeconvert.com/video-compressor
```

#### 2. Upload votre vidéo
- Aller dans : `public/images/hero.mp4`
- Upload

#### 3. Réglages importants
```
✅ Résolution : 1920x1080 (Full HD)
✅ Quality : Medium (ou 50-60%)
✅ Target Size : 5-8 MB
✅ Format : MP4 (H.264)
```

#### 4. Télécharger et remplacer
- Télécharger la vidéo compressée
- **Renommer en `hero.mp4`**
- Remplacer dans `public/images/hero.mp4`

#### 5. Tester
```bash
# Vider cache
Remove-Item -Path .next -Recurse -Force

# Redémarrer
npm run dev
```

Ouvrir : http://localhost:3000

---

## 📊 COMPARAISON

### Avant (81 MB) - VOTRE VIDÉO ACTUELLE
```
Desktop : 10-30 secondes de chargement ⚠️
Mobile 5G : 30-60 secondes ❌
Mobile 4G : 1-3 minutes ❌
Mobile 3G : IMPOSSIBLE ❌
```

### Après (5 MB) - COMPRESSÉ
```
Desktop : 1-2 secondes ✅
Mobile 5G : 2-3 secondes ✅
Mobile 4G : 3-5 secondes ✅
Mobile 3G : 10-15 secondes ⚠️ (acceptable)
```

---

## 🎯 OBJECTIF TAILLE

| Usage | Taille | Qualité | Recommandation |
|-------|--------|---------|----------------|
| **Hero Video** | **3-5 MB** | Bonne | ✅ Idéal |
| Hero Premium | 5-8 MB | Très bonne | ✅ Acceptable |
| Hero Max | 8-10 MB | Excellente | ⚠️ Limite |
| **Votre vidéo** | **81 MB** | Ultra | ❌ TROP LOURD |

---

## ✅ CODE DÉJÀ MODIFIÉ

Maintenant la vidéo s'affiche :
- ✅ **Desktop** : Vidéo joue
- ✅ **Mobile** : Vidéo joue AUSSI
- ✅ **Poster (image)** : Pendant le chargement

**MAIS la vidéo doit être < 10 MB pour que ça marche !**

---

## 🧪 TESTER MAINTENANT

### 1. Local
```
http://localhost:3000
```

**Ce que vous verrez** :
- Desktop : Image fixe (poster) car vidéo trop lourde
- Mobile : Image fixe (poster) car vidéo trop lourde

**Après compression (5 MB)** :
- Desktop : VIDÉO joue ✅
- Mobile : VIDÉO joue ✅

---

## 📱 ALTERNATIVE TEMPORAIRE

Si vous ne pouvez pas compresser maintenant, je peux :

### Option A : Vidéo mobile compressée séparée
- `hero-mobile.mp4` (2-3 MB, qualité réduite)
- `hero-desktop.mp4` (votre 81 MB)
- Mobile charge la petite, desktop la grande

### Option B : YouTube
- Upload vidéo sur YouTube
- Utiliser YouTube comme background
- Pas de limite de taille

**Voulez-vous une de ces options ?**

---

## 🆘 AIDE POUR COMPRESSER

### Si FreeConvert ne marche pas

#### Alternative 1 : HandBrake (gratuit)
```
1. Télécharger : https://handbrake.fr/
2. Installer
3. Ouvrir votre vidéo
4. Preset : "Web" > "Discord Nitro Large"
5. Dimensions : 1920x1080
6. Quality : RF 28
7. Encoder
```

#### Alternative 2 : CloudConvert
```
https://cloudconvert.com/mp4-converter
```

#### Alternative 3 : En ligne de commande (FFmpeg)
```bash
ffmpeg -i hero.mp4 -vcodec h264 -b:v 2000k -vf "scale=1920:1080" -r 30 hero_compressed.mp4
```

---

## ⏰ APRÈS COMPRESSION

1. **Remplacer** `public/images/hero.mp4`
2. **Vider cache** : `Remove-Item -Path .next -Recurse -Force`
3. **Redémarrer** : `npm run dev`
4. **Tester** : http://localhost:3000
   - Desktop : Vidéo ✅
   - Mobile (F12 + Device Mode) : Vidéo ✅
5. **Redéployer Netlify** : "Clear cache and deploy"

---

## 🎯 RÉSUMÉ

✅ **Code modifié** : Vidéo maintenant sur desktop + mobile
⚠️ **Problème** : Vidéo trop lourde (81 MB)
🔧 **Solution** : Compresser à 5-8 MB
⏱️ **Temps** : 5 minutes
🚀 **Résultat** : Site rapide partout

---

**COMPRESSEZ LA VIDÉO ET ÇA VA MARCHER ! 💪**

