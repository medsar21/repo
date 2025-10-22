# 🦁 Site Équipe Nationale du Maroc - Lions de l'Atlas

Site web officiel moderne pour les équipes nationales de football du Maroc, construit avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript** 
- **Tailwind CSS**
- **React 18**
- **next-intl** (Internationalisation FR/AR/EN)

## 📦 Installation

```bash
# Cloner le projet
git clone [votre-repo]
cd maroc-lions

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
maroc-lions/
├── app/                          # App Router (Next.js 14)
│   ├── [locale]/                 # Routes internationalisées
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── equipes/              # Liste des équipes
│   │   ├── equipe/[id]/          # Fiche équipe
│   │   ├── joueur/[id]/          # Fiche joueur
│   │   ├── actualites/           # Actualités
│   │   ├── calendrier/           # Calendrier des matchs
│   │   ├── billetterie/          # Billetterie
│   │   ├── boutique/             # Boutique
│   │   ├── club/                 # À propos
│   │   ├── contact/              # Contact
│   │   └── mentions/             # Mentions légales
│   ├── layout.tsx                # Layout racine
│   └── globals.css               # Styles globaux
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Header avec mega-menu
│   │   ├── Footer.tsx            # Footer riche
│   │   └── MobileMenu.tsx        # Menu mobile
│   ├── ui/
│   │   ├── Hero.tsx              # Hero éditorial
│   │   ├── Card.tsx              # Cartes génériques
│   │   ├── Carousel.tsx          # Slider
│   │   ├── Button.tsx            # Boutons
│   │   ├── Modal.tsx             # Modal
│   │   └── LanguageSelector.tsx  # Sélecteur langue
│   ├── specific/
│   │   ├── PlayerCard.tsx        # Carte joueur
│   │   ├── MatchCard.tsx         # Carte match
│   │   ├── NewsCard.tsx          # Carte actualité
│   │   ├── ProductCard.tsx       # Carte produit
│   │   └── CalendarTable.tsx     # Tableau calendrier
│   └── shared/
│       ├── SEO.tsx               # Composant SEO
│       └── ContactForm.tsx       # Formulaire contact
├── data/
│   ├── equipes.json              # Données équipes
│   ├── joueurs.json              # Données joueurs
│   ├── actualites.json           # Données actualités
│   ├── matches.json              # Calendrier matches
│   └── produits.json             # Produits boutique
├── lib/
│   ├── data.ts                   # Helpers récupération données
│   └── utils.ts                  # Utilitaires
├── messages/
│   ├── fr.json                   # Traductions françaises
│   ├── ar.json                   # Traductions arabes
│   └── en.json                   # Traductions anglaises
├── public/
│   ├── images/                   # Images et assets
│   ├── logo.svg                  # Logo principal
│   ├── robots.txt                # Robots.txt
│   └── sitemap.xml               # Sitemap
├── tailwind.config.ts            # Config Tailwind
├── next.config.js                # Config Next.js
├── tsconfig.json                 # Config TypeScript
├── package.json                  # Dépendances
└── LICENSE                       # Licence MIT
```

## 🎨 Palette de Couleurs

Le site utilise les couleurs du drapeau marocain :

- **Rouge** : `#C1272D` (Primaire)
- **Vert** : `#006233` (Secondaire)
- **Or** : `#D4AF37` (Accent)
- **Noir** : `#0A0A0A` (Texte)
- **Gris** : `#F5F5F5` (Arrière-plan)

## 📄 Pages Disponibles

### Pages Principales
- `/` - Page d'accueil
- `/equipes` - Liste des équipes (A, U23, Féminine, Futsal)
- `/equipe/[id]` - Fiche détaillée d'une équipe
- `/joueur/[id]` - Profil complet d'un joueur

### Contenu Éditorial
- `/actualites` - Liste des actualités
- `/actualites/[slug]` - Article complet
- `/calendrier` - Calendrier des matchs avec filtres

### Commerce & Services
- `/billetterie` - Informations billetterie
- `/boutique` - Boutique en ligne
- `/boutique/[id]` - Fiche produit

### Institutionnel
- `/club` - Histoire & partenaires
- `/contact` - Formulaire de contact
- `/mentions` - Mentions légales

## 🌍 Internationalisation

Le site supporte 3 langues :
- 🇫🇷 Français (fr)
- 🇸🇦 Arabe (ar)
- 🇬🇧 Anglais (en)

Changer de langue via le sélecteur dans le header.

## 📊 Données d'Exemple

Les fichiers JSON dans `/data/` contiennent des données d'exemple :
- **3 équipes** (A masculine, Féminine, U23)
- **15 joueurs** 
- **10 actualités**
- **12 matchs** (calendrier)
- **8 produits** (boutique)

### Ajouter du Contenu

1. **Nouvelle équipe** : Ajouter dans `data/equipes.json`
2. **Nouveau joueur** : Ajouter dans `data/joueurs.json`
3. **Nouvelle actualité** : Ajouter dans `data/actualites.json`
4. **Nouveau match** : Ajouter dans `data/matches.json`

## 🎯 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur dev (http://localhost:3000)

# Production
npm run build        # Build optimisé pour production
npm run start        # Lance le serveur production

# Qualité de code
npm run lint         # ESLint
npm run type-check   # Vérification TypeScript

# Données
npm run seed:dev     # Génère des données d'exemple supplémentaires
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://lions-atlas.ma
NEXT_PUBLIC_API_URL=https://api.lions-atlas.ma
```

### Tailwind CSS

Personnaliser les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  maroc: {
    red: '#C1272D',
    green: '#006233',
    gold: '#D4AF37',
  }
}
```

## 📱 Responsive

Le site est entièrement responsive :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## ♿ Accessibilité

- Structure sémantique HTML5
- Attributs ARIA appropriés
- Navigation au clavier
- Textes alternatifs sur toutes les images
- Contraste de couleurs conforme WCAG 2.1 AA

## 🔍 SEO

- Meta tags dynamiques par page
- Open Graph pour réseaux sociaux
- Sitemap.xml généré
- Robots.txt configuré
- URLs sémantiques

## 🎨 Plan d'Amélioration du Style (6 Étapes)

### Étape 1 : Hero & Palette (1-2h)
- [ ] Ajuster `components/ui/Hero.tsx` : animations d'entrée
- [ ] Modifier `app/globals.css` : animations keyframes
- [ ] Tester dégradés dans `tailwind.config.ts`

### Étape 2 : Typographie (1h)
- [ ] Importer Google Fonts (Montserrat + Inter)
- [ ] Ajuster `tailwind.config.ts` : fontFamily
- [ ] Harmoniser tailles dans tous les composants

### Étape 3 : Header Animé (2h)
- [ ] Ajouter scroll-triggered dans `Header.tsx`
- [ ] Mega-menu avec transitions CSS
- [ ] Hamburger menu animé (mobile)

### Étape 4 : Page Équipe (2-3h)
- [ ] Améliorer `app/[locale]/equipe/[id]/page.tsx`
- [ ] Grid responsive pour joueurs
- [ ] Hover effects sur `PlayerCard.tsx`

### Étape 5 : Optimisation Images (1-2h)
- [ ] Remplacer placeholders par vraies images
- [ ] Utiliser `next/image` partout
- [ ] WebP avec fallback

### Étape 6 : Micro-interactions (2h)
- [ ] Hover states sur tous les boutons
- [ ] Loading skeletons
- [ ] Animations de scroll (AOS ou Framer Motion)

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Autre Hébergeur

```bash
npm run build
npm run start
```

## 📝 Licence

MIT License - Voir fichier `LICENSE`

## 🤝 Contribution

Voir `CONTRIBUTORS.md` pour les guidelines de contribution.

## 📧 Contact

Pour toute question : contact@lions-atlas.ma

---

**Fait avec ❤️ pour les Lions de l'Atlas** 🦁🇲🇦

