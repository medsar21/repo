# 🗺️ Roadmap - Plan d'Amélioration du Site

Ce document détaille les 6 étapes recommandées pour améliorer progressivement le style et les fonctionnalités du site.

---

## 📋 Vue d'Ensemble

| Étape | Titre | Durée estimée | Priorité |
|-------|-------|---------------|----------|
| 1 | Hero & Palette | 1-2h | 🔴 Haute |
| 2 | Typographie | 1h | 🔴 Haute |
| 3 | Header Animé | 2h | 🟡 Moyenne |
| 4 | Page Équipe | 2-3h | 🟡 Moyenne |
| 5 | Optimisation Images | 1-2h | 🟢 Basse |
| 6 | Micro-interactions | 2h | 🟢 Basse |

---

## 🎯 Étape 1 : Hero & Palette (1-2h)

### Objectifs
Améliorer le Hero de la page d'accueil et affiner la palette de couleurs.

### Actions concrètes

#### 1.1 - Ajuster le Hero Component
**Fichier** : `components/ui/Hero.tsx`

```typescript
// Ajouter des animations d'entrée plus sophistiquées
// Ligne ~55, modifier les classes d'animation

<h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-6 
  animate-slide-up opacity-0 animation-delay-200">
  {title}
</h1>
```

#### 1.2 - Enrichir les animations CSS
**Fichier** : `app/globals.css`

```css
/* Ajouter après la ligne ~70 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-delay-200 {
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.animation-delay-400 {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}
```

#### 1.3 - Tester les dégradés
**Fichier** : `tailwind.config.ts`

```typescript
// Ligne ~15, ajouter plus de gradients
backgroundImage: {
  'gradient-maroc': 'linear-gradient(135deg, #C1272D 0%, #006233 100%)',
  'gradient-maroc-reverse': 'linear-gradient(135deg, #006233 0%, #C1272D 100%)',
  'gradient-hero': 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(193,39,45,0.4) 100%)',
},
```

---

## ✍️ Étape 2 : Typographie (1h)

### Objectifs
Harmoniser et améliorer la typographie sur tout le site.

### Actions concrètes

#### 2.1 - Optimiser les Google Fonts
**Fichier** : `app/layout.tsx`

```typescript
// Ligne ~4, ajouter des poids supplémentaires
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})
```

#### 2.2 - Créer des classes typographiques utilitaires
**Fichier** : `app/globals.css`

```css
/* Ajouter après la ligne ~50 */
.text-heading-xl {
  @apply font-heading font-black text-5xl md:text-6xl lg:text-7xl;
}

.text-heading-lg {
  @apply font-heading font-bold text-3xl md:text-4xl lg:text-5xl;
}

.text-body-lg {
  @apply text-lg md:text-xl leading-relaxed;
}
```

#### 2.3 - Harmoniser les tailles dans les composants
**Fichiers** : Tous les composants dans `/components`

- Remplacer les tailles hardcodées par les classes utilitaires
- Assurer la cohérence : titres, sous-titres, corps de texte

---

## 🎨 Étape 3 : Header Animé (2h)

### Objectifs
Ajouter des effets au scroll et améliorer le mega-menu.

### Actions concrètes

#### 3.1 - Améliorer l'effet de scroll
**Fichier** : `components/layout/Header.tsx`

```typescript
// Ligne ~15, améliorer la logique de scroll
useEffect(() => {
  let lastScroll = 0;
  
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    
    // Header disparaît au scroll down, réapparaît au scroll up
    if (currentScroll > lastScroll && currentScroll > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(currentScroll > 50);
    lastScroll = currentScroll;
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

#### 3.2 - Ajouter un mega-menu
**Fichier** : `components/layout/Header.tsx`

```typescript
// Créer un composant MegaMenu séparé
// Structure : 4 colonnes avec catégories
<div className="absolute top-full left-0 right-0 bg-white shadow-2xl">
  <div className="container-custom py-8 grid grid-cols-4 gap-8">
    {/* Colonne 1: Équipes */}
    {/* Colonne 2: Actualités */}
    {/* Colonne 3: Matchs */}
    {/* Colonne 4: Boutique */}
  </div>
</div>
```

#### 3.3 - Animer le hamburger menu
**Fichier** : `components/layout/Header.tsx`

- Ajouter transitions CSS pour les 3 barres
- Animation de rotation et translation
- Effet de fondu pour le menu overlay

---

## 👥 Étape 4 : Page Équipe (2-3h)

### Objectifs
Améliorer la page de détail d'une équipe avec un design moderne.

### Actions concrètes

#### 4.1 - Créer la page dynamique
**Fichier** : `app/equipe/[id]/page.tsx`

```typescript
export default function EquipePage({ params }: { params: { id: string } }) {
  const equipe = getEquipeById(params.id);
  const joueurs = getJoueursByEquipe(params.id);
  
  return (
    <>
      <Header />
      <Hero title={equipe.nom} backgroundImage={equipe.image} />
      
      {/* Section Sélectionneur */}
      {/* Section Effectif - Grid responsive */}
      {/* Section Palmarès */}
      {/* Section Statistiques */}
      
      <Footer />
    </>
  );
}
```

#### 4.2 - Grid responsive pour les joueurs
```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {joueurs.map(joueur => (
    <PlayerCard key={joueur.id} {...joueur} />
  ))}
</div>
```

#### 4.3 - Hover effects sur PlayerCard
**Fichier** : `components/specific/PlayerCard.tsx`

- Ajouter transform scale au hover
- Effet de parallax sur le numéro en arrière-plan
- Transition smooth sur tous les éléments

---

## 🖼️ Étape 5 : Optimisation Images (1-2h)

### Objectifs
Remplacer les placeholders et optimiser toutes les images.

### Actions concrètes

#### 5.1 - Organiser les vraies images
**Dossier** : `public/images/`

```
images/
├── hero/
│   ├── hero-home.jpg (1920x1080, WebP)
│   ├── hero-equipes.jpg
│   └── hero-actualites.jpg
├── joueurs/
│   ├── hakimi.jpg (800x1000, WebP)
│   ├── ziyech.jpg
│   └── ...
├── equipes/
├── actualites/
└── produits/
```

#### 5.2 - Utiliser next/image partout
**Tous les composants**

```typescript
import Image from 'next/image';

<Image
  src={image}
  alt={title}
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### 5.3 - Générer des WebP avec fallback
**Fichier** : `next.config.js`

```javascript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
}
```

---

## ✨ Étape 6 : Micro-interactions (2h)

### Objectifs
Ajouter des micro-interactions pour améliorer l'UX.

### Actions concrètes

#### 6.1 - Hover states sur tous les boutons
**Fichier** : `app/globals.css`

```css
.btn {
  @apply transition-all duration-300 ease-in-out;
  @apply hover:scale-105 hover:shadow-lg;
  @apply active:scale-95;
}
```

#### 6.2 - Loading skeletons
**Fichier** : `components/ui/Skeleton.tsx`

```typescript
export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  );
}
```

#### 6.3 - Animations de scroll
**Option A** : CSS pur avec Intersection Observer
**Option B** : Utiliser Framer Motion

```bash
npm install framer-motion
```

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {children}
</motion.div>
```

---

## 🎯 Checklist Globale

- [ ] Étape 1 : Hero & Palette terminée
- [ ] Étape 2 : Typographie harmonisée
- [ ] Étape 3 : Header avec animations
- [ ] Étape 4 : Page équipe complète
- [ ] Étape 5 : Images optimisées
- [ ] Étape 6 : Micro-interactions ajoutées

---

## 📊 Métriques de Succès

- **Performance** : Lighthouse score > 90
- **Accessibilité** : WCAG 2.1 AA compliant
- **SEO** : Score > 95
- **Mobile** : Responsive parfait sur tous devices

---

## 📝 Notes

- Tester sur Chrome, Firefox, Safari
- Vérifier la compatibilité mobile
- Valider l'accessibilité avec screen reader
- Optimiser pour les Core Web Vitals

---

**🦁 Dima Maghreb - Développé avec passion pour les Lions de l'Atlas**

