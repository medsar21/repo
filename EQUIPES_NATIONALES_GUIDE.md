# Guide des Équipes Nationales - Site FRMF

## ✅ Pages Créées

Toutes les pages pour les équipes nationales ont été créées et sont maintenant accessibles depuis le menu mobile et le menu desktop.

### 🏆 Pages Équipes Disponibles

1. **Équipe Nationale A** - `/equipes/nationale-a`
   - Effectif complet avec joueurs par poste
   - Staff technique
   - Onglets : Effectif, Staff, Actualités, Résultats
   - Statistiques (Classement FIFA, Palmarès)

2. **Équipe Nationale U23** - `/equipes/u23`
   - Page dédiée aux Espoirs
   - Palmarès Olympique (Médaille d'Or 2004)

3. **Équipe Nationale U20** - `/equipes/u20`
   - Les jeunes Lions de l'Atlas

4. **Équipe Nationale U17** - `/equipes/u17`
   - La relève marocaine

5. **Équipe Nationale Féminine A** - `/equipes/feminine-a`
   - Les Lionnes de l'Atlas

6. **Équipe Nationale Féminine U20** - `/equipes/feminine-u20`
   - Les jeunes Lionnes

7. **Équipe Nationale de Futsal A** - `/equipes/futsal-a`
   - Champions du Futsal africain

8. **Équipe Nationale de Futsal U19** - `/equipes/futsal-u19`
   - Les jeunes talents du Futsal

9. **Équipe Nationale de Beach Soccer** - `/equipes/beach-soccer`
   - Les Lions des plages

## 🔗 Navigation

### Menu Mobile
Quand vous cliquez sur le bouton **MENU** :
1. Le menu mobile s'ouvre depuis la droite
2. Cliquez sur **"Équipes nationales"** pour ouvrir le sous-menu
3. Chaque équipe a un lien direct qui redirige vers sa page

#### Structure du Menu :
```
📱 MENU
└── Équipes nationales
    ├── E.N. A → /equipes/nationale-a
    │   ├── Actualités
    │   ├── Staff
    │   └── Résultats
    ├── E.N. U23 → /equipes/u23
    ├── E.N. U20 → /equipes/u20
    ├── E.N. U17 → /equipes/u17
    ├── Féminine
    │   ├── Féminine A → /equipes/feminine-a
    │   └── Féminine U20 → /equipes/feminine-u20
    ├── Futsal
    │   ├── Futsal A → /equipes/futsal-a
    │   └── Futsal U19 → /equipes/futsal-u19
    └── Beach Soccer → /equipes/beach-soccer
```

### Menu Desktop
Dans la barre de navigation en haut :
- Cliquez sur **"ÉQUIPES"** → Redirige vers `/equipes`
- Depuis `/equipes`, cliquez sur chaque carte d'équipe pour accéder à sa page dédiée

## 🎯 Fonctionnalités par Page

### Page Équipe Nationale A (Complète)

#### Onglets Fonctionnels
1. **Effectif**
   - Joueurs organisés par poste (Gardiens, Défenseurs, Milieux, Attaquants)
   - Cards avec photo, nom, numéro, club
   - 23 joueurs affichés

2. **Staff**
   - Sélectionneur : Walid Regragui
   - Entraîneurs adjoints
   - Préparateur physique
   - Entraîneur des gardiens

3. **Actualités**
   - Lien vers les actualités complètes

4. **Résultats**
   - Lien vers le calendrier complet

#### Statistiques Affichées
- **Classement FIFA** : 13ème
- **Champions CAN** : 1976
- **Demi-finale Coupe du Monde** : 2022

### Autres Pages d'Équipes

Toutes les autres pages incluent :
- Hero section avec dégradé de couleurs FRMF
- Breadcrumb de navigation
- Message "Contenu en cours de développement"
- Boutons de retour et d'actions

## 🚀 Comment Tester

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Tester depuis le menu mobile
1. Ouvrez http://localhost:3000
2. Cliquez sur le bouton **MENU** en haut à gauche
3. Cliquez sur **"Équipes nationales"**
4. Le sous-menu s'ouvre avec toutes les équipes
5. Cliquez sur une équipe (ex: **E.N. A**)
6. Vous êtes redirigé vers `/equipes/nationale-a`

### 3. Tester depuis le header
1. Cliquez sur **ÉQUIPES** dans la navigation
2. Vous êtes sur `/equipes`
3. Cliquez sur une carte d'équipe
4. Vous accédez à la page de l'équipe

### 4. URLs Directes à Tester
- http://localhost:3000/equipes/nationale-a
- http://localhost:3000/equipes/u23
- http://localhost:3000/equipes/u20
- http://localhost:3000/equipes/u17
- http://localhost:3000/equipes/feminine-a
- http://localhost:3000/equipes/feminine-u20
- http://localhost:3000/equipes/futsal-a
- http://localhost:3000/equipes/futsal-u19
- http://localhost:3000/equipes/beach-soccer

## 📊 Données Actuelles

### Joueurs (data/joueurs.json)
- 4 joueurs vedettes actuellement
- Utilisés dans l'Équipe Nationale A
- Structure : nom, prénom, numéro, poste, club, photo

### À Ajouter (Optionnel)
Pour enrichir les pages :

1. **Plus de joueurs** dans `joueurs.json`
   - Ajouter les 23 joueurs de chaque équipe
   - Photos officielles
   - Statistiques (buts, sélections)

2. **Staff technique** dans un nouveau `staff.json`
   - Photos des entraîneurs
   - Biographies
   - Parcours

3. **Actualités par équipe**
   - Filtrer les actualités par équipe
   - Ajouter un champ `equipe` dans `actualites.json`

4. **Résultats par équipe**
   - Filtrer les matchs par équipe
   - Ajouter un champ `equipe` dans `matches.json`

## 🎨 Design

### Codes Couleurs par Équipe
Chaque page utilise un dégradé unique :

- **Équipe A** : Rouge → Vert (couleurs nationales)
- **U23** : Vert → Or
- **U20** : Rouge → Vert
- **U17** : Vert → Or
- **Féminine A** : Rouge → Or
- **Féminine U20** : Vert → Rouge
- **Futsal A** : Or → Vert
- **Futsal U19** : Vert → Or
- **Beach Soccer** : Rouge → Or

### Éléments de Design
- Hero avec image de fond (Équipe A)
- Breadcrumb de navigation
- Badges dorés pour les catégories
- Onglets avec icônes
- Cards responsive pour joueurs/staff
- Animations au scroll

## 📱 Responsive

Toutes les pages sont entièrement responsive :
- **Mobile** : 1 colonne, menu hamburger
- **Tablette** : 2 colonnes pour les joueurs
- **Desktop** : 4 colonnes pour les joueurs

### Breakpoints
- `sm` : 640px
- `md` : 768px
- `lg` : 1024px

## 🔧 Personnalisation

### Ajouter un Nouvel Onglet
Dans la page d'une équipe, ajoutez dans `tabs` :

```typescript
const tabs = [
  { id: 'effectif', label: 'Effectif', icon: '👥' },
  { id: 'staff', label: 'Staff', icon: '👔' },
  { id: 'palmares', label: 'Palmarès', icon: '🏆' }, // NOUVEAU
  // ...
];
```

### Modifier les Statistiques
Dans le Hero section :

```tsx
<div className="text-3xl font-bold text-maroc-gold">13</div>
<div className="text-sm text-white/80">Classement FIFA</div>
```

### Ajouter un Joueur
Dans `data/joueurs.json` :

```json
{
  "id": 24,
  "nom": "Nouveau",
  "prenom": "Joueur",
  "numero": 10,
  "poste": "Milieu",
  "photo": "/images/joueurs/nouveau-joueur.jpg",
  "club": "FC Exemple"
}
```

## 📝 Prochaines Étapes

### Pour Compléter les Pages

1. **Enrichir les données JSON**
   - Ajouter tous les joueurs de chaque équipe
   - Créer un fichier `staff.json`
   - Ajouter des statistiques détaillées

2. **Télécharger les images**
   - Photos officielles des joueurs
   - Photos des entraîneurs
   - Images d'équipes

3. **Créer les sous-pages**
   - `/equipes/nationale-a/actualites` (filtrer par équipe)
   - `/equipes/nationale-a/staff` (page dédiée)
   - `/equipes/nationale-a/resultats` (filtrer par équipe)

4. **Ajouter du contenu**
   - Palmarès complet
   - Historique des matchs
   - Statistiques avancées
   - Vidéos et galeries photos

## ✨ Points Forts

✅ Navigation fluide et intuitive
✅ Design élégant et moderne
✅ Responsive sur tous les appareils
✅ Animations et transitions fluides
✅ Structure évolutive et modulaire
✅ Breadcrumb pour faciliter la navigation
✅ Onglets pour organiser le contenu
✅ Cards interactives pour joueurs/staff

## 🎯 Checklist

- [x] Créer toutes les pages d'équipes
- [x] Configurer les liens dans le menu mobile
- [x] Ajouter la navigation breadcrumb
- [x] Implémenter les onglets (Équipe A)
- [x] Afficher l'effectif avec joueurs par poste
- [x] Afficher le staff technique
- [x] Design responsive
- [x] Animations et transitions
- [ ] Enrichir avec vraies données FRMF
- [ ] Ajouter toutes les photos officielles
- [ ] Créer les sous-pages (actualités, résultats par équipe)
- [ ] Ajouter les statistiques complètes

---

**Créé le** : 23 Octobre 2024  
**Version** : 1.0  
**Status** : ✅ Opérationnel - Prêt pour enrichissement de contenu

