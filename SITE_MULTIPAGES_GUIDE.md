# Site Multi-Pages FRMF - Guide Complet

## ✅ Pages Créées

### 1. **Page d'accueil** (`/`)
- Hero avec vidéo
- Section événements à venir
- Dernières actualités (masonry layout)
- Prochains matchs
- Joueurs vedettes  
- CTA Billetterie
- Section partenaires (carousel)

### 2. **Page Actualités** (`/actualites`)
- Liste complète de tous les articles
- Filtres par catégorie
- Grid responsive
- Animations staggered

### 3. **Pages Articles** (`/actualites/[slug]`)
- Affichage d'un article complet
- Hero avec image
- Métadonnées (date, auteur, catégorie)
- Tags
- Partage sur réseaux sociaux
- Articles similaires

### 4. **Page Calendrier** (`/calendrier`)
- Tous les matchs (passés et à venir)
- Filtres par statut
- Groupement par compétition
- Cards de matchs détaillées

### 5. **Page Contact** (`/contact`)
- Formulaire de contact
- Informations de contact (adresse, téléphone, email)
- Carte Google Maps
- Réseaux sociaux

### 6. **Page Billetterie** (`/billetterie`)
- Matchs disponibles pour achat
- Détails des matchs
- Prix des billets
- CTA d'achat

### 7. **Page Boutique** (`/boutique`)
- Catalogue de produits officiels
- Filtres par catégorie
- Grid de produits
- Informations de livraison

### 8. **Page Équipes** (`/equipes`)
- Liste de toutes les équipes nationales
- Statistiques
- Palmarès

## 🔗 Navigation Fonctionnelle

### Liens du Header (Desktop & Mobile)
Tous les liens du menu sont maintenant fonctionnels :

#### **Menu Mobile Complet**
Le menu mobile contient toutes les sections du site FRMF :
- ✅ Accueil (`/`)
- ✅ FRMF
  - Comité Directeur
  - Administration
  - Textes réglementaires
  - Communiqués
  - Appels d'offres
  - Histoire
- ✅ Équipes nationales
  - E.N. A (Actualités, Staff, Résultats)
  - E.N. U23, U20, U17
  - Féminine (A, U20)
  - Futsal
  - Beach Soccer
- ✅ Compétitions
  - Coupe du Trône
  - Championnat Féminin
  - Championnat de Futsal
- ✅ DTN
- ✅ Arbitrage
- ✅ Média
- ✅ Partenaires

### Liens du Header (Navigation Simple)
- ✅ **ACTUALITÉS** → `/actualites`
- ✅ **ÉQUIPES** → `/equipes`
- ✅ **CALENDRIER** → `/calendrier`
- ✅ **Se connecter** → `/connexion` (à créer)
- ✅ **Billetterie** → `/billetterie`
- ✅ **Boutique** → `/boutique`

### Liens du Footer
- ✅ **À propos** → `/a-propos` (à créer)
- ✅ **Contact** → `/contact`
- ✅ **Mentions légales** → `/mentions-legales` (à créer)
- ✅ **Politique de confidentialité** → `/confidentialite` (à créer)

## 📊 Données JSON Actuelles

### `actualites.json`
- 10 articles avec : titre, chapeau, contenu, image, catégorie, date, auteur, tags, slug

### `matches.json`
- Matchs avec : équipes, date, compétition, stade, ville, statut, scores, télévision

### `joueurs.json`
- Joueurs avec : nom, prénom, numéro, poste, club, photo

### `produits.json`
- Produits avec : nom, description, prix, catégorie, image, disponibilité

### `equipes.json`
- Équipes avec : nom, description, sélectionneur, stats

## 📥 Prochaines Étapes - Import de Données FRMF

### 1. **Scraping du Site FRMF**
Pour importer plus de contenu depuis https://frmf.ma/fr :

#### **Articles d'actualités**
```bash
# Exemple de structure à scraper :
- Titre
- Chapeau
- Contenu complet
- Images
- Date de publication
- Catégorie
- Tags
```

#### **Matchs**
```bash
# Informations à récupérer :
- Tous les matchs passés et futurs
- Résultats détaillés
- Statistiques
- Compositions d'équipes
```

#### **Joueurs**
```bash
# Profils complets :
- Photos officielles
- Biographies
- Statistiques
- Parcours
```

### 2. **Images à Télécharger**
Depuis le site FRMF, téléchargez :

#### **Actualités**
- `/public/images/actualites/` - Images des articles
- Format recommandé : JPG, 1200x800px minimum

#### **Équipes**
- `/public/images/equipes/` - Photos d'équipes
- Photos officielles de chaque sélection

#### **Joueurs**
- `/public/images/joueurs/` - Portraits officiels
- Format : JPG, 600x800px minimum

#### **Stades**
- `/public/images/stades/` - Photos des stades
- Pour les cartes de matchs

### 3. **Structure de Dossiers Recommandée**
```
public/
  images/
    actualites/
      2024/
        01/
        02/
        ...
    equipes/
      nationale-a/
      feminine/
      futsal/
      ...
    joueurs/
      hakimi/
      ziyech/
      ...
    stades/
      mohammed-v/
      marrakech/
      ...
    competitions/
      can/
      coupe-monde/
      ...
```

## 🎨 Pages à Créer (Optionnel)

### Pages Manquantes Importantes
1. **`/connexion`** - Page de connexion
2. **`/a-propos`** - À propos de la FRMF
3. **`/mentions-legales`** - Mentions légales
4. **`/confidentialite`** - Politique de confidentialité
5. **`/equipes/[id]`** - Page détaillée d'une équipe
6. **`/joueurs/[id]`** - Page détaillée d'un joueur

### Pages Sections FRMF
1. **`/frmf/comite-directeur`**
2. **`/frmf/administration`**
3. **`/frmf/histoire`**
4. **`/competitions/coupe-du-trone`**
5. **`/dtn`**
6. **`/arbitrage`**

## 🚀 Comment Tester

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Tester les pages
- http://localhost:3000/ - Accueil
- http://localhost:3000/actualites - Liste des actualités
- http://localhost:3000/actualites/lions-victoire-historique - Article individuel
- http://localhost:3000/calendrier - Calendrier des matchs
- http://localhost:3000/contact - Page de contact
- http://localhost:3000/billetterie - Billetterie
- http://localhost:3000/boutique - Boutique
- http://localhost:3000/equipes - Équipes nationales

### 3. Tester la navigation
- ✅ Cliquer sur le bouton MENU → Menu mobile s'ouvre
- ✅ Cliquer sur un article → Redirection vers la page article
- ✅ Filtrer les actualités par catégorie
- ✅ Filtrer les matchs par statut
- ✅ Filtrer les produits par catégorie

## 📝 Notes Importantes

### SEO
- Chaque page a des métadonnées appropriées
- Les images ont des attributs `alt`
- Structure HTML sémantique

### Performance
- Images optimisées avec Next.js Image
- Animations CSS performantes
- Code splitting automatique

### Responsive
- Toutes les pages sont responsive
- Mobile-first design
- Breakpoints : sm (640px), md (768px), lg (1024px)

### Accessibilité
- Contraste des couleurs respecté
- Navigation au clavier
- ARIA labels sur les boutons

## 🔧 Personnalisation

### Modifier les Couleurs
Fichier : `tailwind.config.ts`
```typescript
colors: {
  maroc: {
    red: '#C1272D',    // Rouge
    green: '#006233',  // Vert
    gold: '#D4AF37',   // Or
    dark: '#0A0A0A',   // Noir
    light: '#F5F5F5',  // Blanc cassé
  },
}
```

### Modifier les Fonts
Fichier : `app/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Chivo:wght@...');
```

### Ajouter des Animations
Fichier : `app/globals.css`
```css
@keyframes nom-animation {
  /* ... */
}
```

## 📚 Documentation Technique

### Technologies Utilisées
- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Playfair Display** - Police élégante pour les titres

### Structure des Composants
```
components/
  layout/
    Header.tsx    - Navigation principale
    Footer.tsx    - Pied de page
  ui/
    Hero.tsx      - Sections hero
    Card.tsx      - Cartes génériques
  specific/
    NewsCard.tsx  - Carte d'actualité
    MatchCard.tsx - Carte de match
    PlayerCard.tsx - Carte de joueur
  shared/
    ContactForm.tsx - Formulaire de contact
    SEO.tsx        - Composant SEO
```

## 🎯 Checklist de Déploiement

Avant de déployer en production :

- [ ] Vérifier que toutes les images sont optimisées
- [ ] Tester toutes les pages sur mobile
- [ ] Vérifier les liens cassés
- [ ] Optimiser les performances (Lighthouse)
- [ ] Configurer les variables d'environnement
- [ ] Mettre en place l'analytics
- [ ] Configurer le sitemap.xml
- [ ] Configurer robots.txt
- [ ] Tester les formulaires
- [ ] Vérifier l'accessibilité

## 💡 Conseils

1. **Import de données** : Utilisez un script Python ou Node.js pour scraper le site FRMF
2. **Images** : Compressez-les avant import (TinyPNG, ImageOptim)
3. **Contenu** : Gardez les textes courts et impactants
4. **Performance** : Lazy load pour les images en bas de page
5. **SEO** : Ajoutez des meta descriptions uniques pour chaque page

---

**Créé le** : 23 Octobre 2024  
**Version** : 1.0  
**Status** : En développement

