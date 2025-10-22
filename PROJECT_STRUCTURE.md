# 📁 Structure du Projet - Lions de l'Atlas

```
maroc-lions/
│
├── 📂 app/                          # Next.js App Router (v14)
│   ├── favicon.ico                  # Favicon
│   ├── globals.css                  # Styles globaux
│   ├── layout.tsx                   # Layout racine
│   ├── page.tsx                     # Page d'accueil
│   │
│   ├── 📂 equipes/
│   │   └── page.tsx                 # Liste des équipes
│   │
│   ├── 📂 equipe/
│   │   └── 📂 [id]/
│   │       └── page.tsx             # Détail équipe (dynamique)
│   │
│   ├── 📂 joueur/
│   │   └── 📂 [id]/
│   │       └── page.tsx             # Profil joueur (dynamique)
│   │
│   ├── 📂 actualites/
│   │   ├── page.tsx                 # Liste actualités
│   │   └── 📂 [slug]/
│   │       └── page.tsx             # Article complet (dynamique)
│   │
│   ├── 📂 calendrier/
│   │   └── page.tsx                 # Calendrier des matchs
│   │
│   ├── 📂 billetterie/
│   │   └── page.tsx                 # Informations billetterie
│   │
│   ├── 📂 boutique/
│   │   ├── page.tsx                 # Catalogue produits
│   │   └── 📂 [id]/
│   │       └── page.tsx             # Fiche produit (dynamique)
│   │
│   ├── 📂 club/
│   │   └── page.tsx                 # À propos / Histoire
│   │
│   ├── 📂 contact/
│   │   └── page.tsx                 # Formulaire contact
│   │
│   └── 📂 mentions/
│       └── page.tsx                 # Mentions légales
│
├── 📂 components/                   # Composants React
│   ├── 📂 layout/
│   │   ├── Header.tsx               # Header principal
│   │   ├── Footer.tsx               # Footer
│   │   └── MobileMenu.tsx           # Menu mobile
│   │
│   ├── 📂 ui/                       # Composants UI génériques
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Card.tsx                 # Carte générique
│   │   ├── Button.tsx               # Bouton
│   │   ├── Modal.tsx                # Modal
│   │   ├── Carousel.tsx             # Carrousel
│   │   └── LanguageSelector.tsx     # Sélecteur langue
│   │
│   ├── 📂 specific/                 # Composants spécifiques métier
│   │   ├── PlayerCard.tsx           # Carte joueur
│   │   ├── MatchCard.tsx            # Carte match
│   │   ├── NewsCard.tsx             # Carte actualité
│   │   ├── ProductCard.tsx          # Carte produit
│   │   └── CalendarTable.tsx        # Tableau calendrier
│   │
│   └── 📂 shared/                   # Composants partagés
│       ├── SEO.tsx                  # Composant SEO
│       └── ContactForm.tsx          # Formulaire contact
│
├── 📂 data/                         # Données JSON (mini-CMS)
│   ├── equipes.json                 # Données équipes (3 items)
│   ├── joueurs.json                 # Données joueurs (8 items)
│   ├── actualites.json              # Actualités (10 items)
│   ├── matches.json                 # Matchs (12 items)
│   └── produits.json                # Produits boutique (8 items)
│
├── 📂 lib/                          # Librairies utilitaires
│   ├── data.ts                      # Helpers récupération données
│   └── utils.ts                     # Fonctions utilitaires
│
├── 📂 messages/                     # Traductions i18n
│   ├── fr.json                      # Français
│   ├── ar.json                      # Arabe
│   └── en.json                      # Anglais
│
├── 📂 public/                       # Assets statiques
│   ├── 📂 images/                   # Images
│   │   ├── 📂 hero/                 # Images hero
│   │   ├── 📂 joueurs/              # Photos joueurs
│   │   ├── 📂 equipes/              # Photos équipes
│   │   ├── 📂 actualites/           # Images articles
│   │   ├── 📂 produits/             # Photos produits
│   │   └── 📂 drapeaux/             # Drapeaux pays
│   ├── logo.svg                     # Logo principal
│   ├── robots.txt                   # SEO robots
│   └── sitemap.xml                  # Sitemap
│
├── 📂 scripts/                      # Scripts utilitaires
│   └── seed-data.js                 # Génération données dev
│
├── 📂 types/                        # Types TypeScript
│   └── index.ts                     # Types globaux
│
├── .env.local                       # Variables d'environnement (local)
├── .gitignore                       # Git ignore
├── .eslintrc.json                   # ESLint config
├── next.config.js                   # Configuration Next.js
├── package.json                     # Dépendances npm
├── postcss.config.js                # PostCSS config
├── tailwind.config.ts               # Configuration Tailwind
├── tsconfig.json                    # Configuration TypeScript
│
├── README.md                        # Documentation principale
├── ROADMAP.md                       # Plan d'amélioration (6 étapes)
├── CONTRIBUTORS.md                  # Guide contribution
├── LICENSE                          # Licence MIT
└── PROJECT_STRUCTURE.md             # Ce fichier
```

---

## 📊 Statistiques du Projet

- **Total fichiers** : ~80+
- **Lignes de code** : ~3500+
- **Composants React** : 15+
- **Pages** : 12+
- **Données JSON** : 50+ items

---

## 🎯 Points d'Entrée Principaux

### Pour le Développement
```bash
npm run dev          # Lance le serveur dev sur :3000
npm run build        # Build production
npm run start        # Lance le build en production
npm run lint         # Vérifie le code
```

### Pour Ajouter du Contenu
1. **Nouvelle équipe** → `data/equipes.json`
2. **Nouveau joueur** → `data/joueurs.json`
3. **Nouvelle actualité** → `data/actualites.json`
4. **Nouveau match** → `data/matches.json`
5. **Nouveau produit** → `data/produits.json`

### Pour Modifier le Design
1. **Couleurs** → `tailwind.config.ts` (lignes 8-15)
2. **Typographie** → `app/globals.css` (lignes 5-10)
3. **Animations** → `tailwind.config.ts` (lignes 20-45)

---

## 🔑 Fichiers Clés à Connaître

| Fichier | Rôle | Importance |
|---------|------|------------|
| `app/page.tsx` | Page d'accueil | ⭐⭐⭐⭐⭐ |
| `components/layout/Header.tsx` | Navigation | ⭐⭐⭐⭐⭐ |
| `tailwind.config.ts` | Design system | ⭐⭐⭐⭐ |
| `lib/data.ts` | Logique données | ⭐⭐⭐⭐ |
| `next.config.js` | Config Next.js | ⭐⭐⭐ |

---

## 🚀 Workflow de Développement

### Étape 1 : Clone & Install
```bash
git clone [repo]
cd maroc-lions
npm install
```

### Étape 2 : Développement
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Étape 3 : Ajouter du Contenu
- Éditer les JSON dans `/data`
- Les changements sont hot-reloaded

### Étape 4 : Personnaliser le Style
- Modifier `tailwind.config.ts`
- Éditer `app/globals.css`
- Ajuster les composants

### Étape 5 : Build & Deploy
```bash
npm run build
npm run start
# Ou déployer sur Vercel
```

---

## 📦 Dépendances Principales

```json
{
  "next": "14.2.0",              // Framework React
  "react": "^18.2.0",            // Librairie UI
  "typescript": "^5.3.0",        // Typage statique
  "tailwindcss": "^3.4.0",       // CSS utility-first
  "next-intl": "^3.9.0"          // Internationalisation
}
```

---

## 🎨 Convention de Nommage

- **Composants** : PascalCase (`PlayerCard.tsx`)
- **Fichiers utils** : camelCase (`data.ts`)
- **CSS classes** : kebab-case (`maroc-red`)
- **Fichiers data** : kebab-case (`equipes.json`)

---

**Créé avec ❤️ pour les Lions de l'Atlas 🦁🇲🇦**

