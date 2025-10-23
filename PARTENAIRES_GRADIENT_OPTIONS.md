# 🎨 Options de dégradé pour la section Partenaires

## ✅ Configuration actuelle (Subtil)

Le dégradé actuel est **très subtil** avec seulement 5% d'opacité des couleurs Maroc :

```css
linear-gradient(135deg,
  rgba(0, 98, 51, 0.05) 0%,      /* Vert Maroc 5% - Haut gauche */
  rgba(255, 255, 255, 0.98) 15%,  /* Blanc */
  rgba(255, 255, 255, 0.95) 70%,  /* Blanc */
  rgba(193, 39, 45, 0.05) 100%    /* Rouge Maroc 5% - Bas droit */
)
```

**Effet** : Très discret, garde le focus sur les logos

---

## 🎨 Variations disponibles

### Option 1 : Dégradé Moyen (Recommandé)

Plus visible mais toujours élégant :

```javascript
style={{
  background: `
    linear-gradient(135deg,
      rgba(0, 98, 51, 0.08) 0%,
      rgba(255, 255, 255, 0.95) 20%,
      rgba(255, 255, 255, 0.95) 80%,
      rgba(193, 39, 45, 0.08) 100%
    )
  `
}}
```

### Option 2 : Dégradé Visible

Couleurs plus présentes :

```javascript
style={{
  background: `
    linear-gradient(135deg,
      rgba(0, 98, 51, 0.12) 0%,
      rgba(255, 255, 255, 0.90) 25%,
      rgba(255, 255, 255, 0.90) 75%,
      rgba(193, 39, 45, 0.12) 100%
    )
  `
}}
```

### Option 3 : Dégradé Fort

Pour un impact maximum :

```javascript
style={{
  background: `
    linear-gradient(135deg,
      rgba(0, 98, 51, 0.15) 0%,
      rgba(255, 255, 255, 0.85) 30%,
      rgba(255, 255, 255, 0.85) 70%,
      rgba(193, 39, 45, 0.15) 100%
    )
  `
}}
```

### Option 4 : Dégradé Horizontal (Vert → Blanc → Rouge)

```javascript
style={{
  background: `
    linear-gradient(to right,
      rgba(0, 98, 51, 0.08) 0%,
      rgba(255, 255, 255, 0.95) 30%,
      rgba(255, 255, 255, 0.95) 70%,
      rgba(193, 39, 45, 0.08) 100%
    )
  `
}}
```

### Option 5 : Dégradé Vertical (Vert → Rouge)

```javascript
style={{
  background: `
    linear-gradient(to bottom,
      rgba(0, 98, 51, 0.08) 0%,
      rgba(255, 255, 255, 0.95) 40%,
      rgba(255, 255, 255, 0.95) 60%,
      rgba(193, 39, 45, 0.08) 100%
    )
  `
}}
```

### Option 6 : Dégradé Radial (Centre blanc)

```javascript
style={{
  background: `
    radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.95) 40%,
      rgba(0, 98, 51, 0.06) 70%,
      rgba(193, 39, 45, 0.06) 100%
    )
  `
}}
```

### Option 7 : Dégradé avec Or (3 couleurs)

```javascript
style={{
  background: `
    linear-gradient(135deg,
      rgba(0, 98, 51, 0.10) 0%,
      rgba(212, 175, 55, 0.08) 50%,
      rgba(193, 39, 45, 0.10) 100%
    )
  `
}}
```

---

## 🔧 Comment changer le dégradé

### Étape 1 : Ouvrir le fichier
```
app/page.tsx
```

### Étape 2 : Trouver la section (ligne ~485)
```javascript
<section className="relative py-16 md:py-20 overflow-hidden"
  style={{
    background: `
      // ICI : Remplacer le dégradé
    `
  }}
>
```

### Étape 3 : Copier-coller une des options ci-dessus

### Étape 4 : Sauvegarder et voir le résultat

Le site se recharge automatiquement en mode dev !

---

## 🎯 Recommandations

### Pour un site élégant et professionnel :
→ **Option 1** (Dégradé Moyen) ou **Option actuelle**

### Pour un site dynamique et coloré :
→ **Option 3** (Dégradé Fort) ou **Option 7** (3 couleurs)

### Pour harmoniser avec le hero :
→ **Option 5** (Vertical) qui suit le même sens

### Pour un effet unique :
→ **Option 6** (Radial) - Original et moderne

---

## 💡 Personnalisation avancée

### Ajuster l'opacité des couleurs
```
rgba(0, 98, 51, 0.XX)  ← Changez le dernier nombre (0.05 à 0.20)
        ↑ Vert Maroc
```

### Ajuster l'angle du dégradé
```
linear-gradient(135deg, ...)  ← Changez l'angle (0 à 360)
                  ↑
```

**Angles courants** :
- `0deg` = Bas → Haut
- `90deg` = Gauche → Droite
- `135deg` = Diagonal (utilisé actuellement)
- `180deg` = Haut → Bas

### Ajouter plus d'étapes
```javascript
background: `
  linear-gradient(135deg,
    rgba(0, 98, 51, 0.10) 0%,
    rgba(255, 255, 255, 0.95) 20%,
    rgba(212, 175, 55, 0.08) 50%,  ← Nouvelle étape
    rgba(255, 255, 255, 0.95) 80%,
    rgba(193, 39, 45, 0.10) 100%
  )
`
```

---

## 🌈 Aperçu visuel

```
Option actuelle (Subtil) :
🟢━━━━━━━━━━━━━━━━━━━━━━━━━🔴
  5%        Blanc         5%

Option 2 (Visible) :
🟢🟢━━━━━━━━━━━━━━━━━━━━🔴🔴
 12%       Blanc        12%

Option 3 (Fort) :
🟢🟢🟢━━━━━━━━━━━━━━━━🔴🔴🔴
  15%      Blanc       15%
```

---

## ✨ Effet avec les logos

Le dégradé vert-rouge crée un **cadre patriotique** autour des logos en noir & blanc, qui deviennent colorés au hover. C'est très élégant !

**Testez différentes options** pour trouver celle qui correspond le mieux à l'esthétique de votre site ! 🎨

