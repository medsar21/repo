# 🧪 Test de Navigation - Site FRMF

## 🚀 Serveur Démarré

Le serveur de développement est en cours d'exécution sur :
**http://localhost:3000**

---

## ✅ CHECKLIST DE TEST

### 1️⃣ Test du Menu Mobile

**Instructions :**
1. Ouvrir http://localhost:3000
2. Cliquer sur le bouton **☰ MENU** (en haut à gauche)
3. Le menu slide depuis la droite ✅
4. Cliquer sur **"Équipes nationales"** 
5. Le sous-menu s'ouvre ✅

**Tester ces liens (dans le menu mobile) :**

```
☑️ E.N. A → Doit rediriger vers /equipes/nationale-a
☑️ E.N. U23 → Doit rediriger vers /equipes/u23
☑️ E.N. U20 → Doit rediriger vers /equipes/u20
☑️ E.N. U17 → Doit rediriger vers /equipes/u17
☑️ Féminine → Ouvre un sous-menu
  ☑️ Féminine A → /equipes/feminine-a
  ☑️ Féminine U20 → /equipes/feminine-u20
☑️ Futsal → Ouvre un sous-menu
  ☑️ Futsal A → /equipes/futsal-a
  ☑️ Futsal U19 → /equipes/futsal-u19
☑️ Beach Soccer → /equipes/beach-soccer
```

**Résultat Attendu :**
- ✅ Chaque lien doit rediriger vers la page correspondante
- ✅ Le menu se ferme automatiquement après un clic
- ✅ Le breadcrumb en haut de chaque page montre le chemin

---

### 2️⃣ Test de la Page Équipe Nationale A

**URL :** http://localhost:3000/equipes/nationale-a

**À Vérifier :**

#### Header
- ✅ Breadcrumb : Accueil / Équipes / Équipe Nationale A
- ✅ Badge doré : "Lions de l'Atlas"
- ✅ Titre : "Équipe Nationale A"
- ✅ Description : Demi-finaliste de la Coupe du Monde 2022

#### Statistiques (3 cards)
- ✅ **13** - Classement FIFA
- ✅ **1976** - Champions CAN
- ✅ **2022** - Demi-finale CM

#### Onglets
Cliquer sur chaque onglet pour vérifier :
- ✅ **Effectif** (par défaut)
  - Section Gardiens
  - Section Défenseurs
  - Section Milieux
  - Section Attaquants
  - Cards de joueurs avec photos
  
- ✅ **Staff**
  - Walid Regragui (Sélectionneur)
  - 3 autres membres du staff
  
- ✅ **Actualités**
  - Message + bouton vers /actualites
  
- ✅ **Résultats**
  - Message + bouton vers /calendrier

#### Responsive
- ✅ Mobile : 1 joueur par ligne
- ✅ Tablette : 2 joueurs par ligne
- ✅ Desktop : 4 joueurs par ligne

---

### 3️⃣ Test des Autres Pages Équipes

**Copier-coller chaque URL dans le navigateur :**

| Équipe | URL | Vérification |
|--------|-----|--------------|
| U23 | http://localhost:3000/equipes/u23 | ✅ Page s'affiche |
| U20 | http://localhost:3000/equipes/u20 | ✅ Page s'affiche |
| U17 | http://localhost:3000/equipes/u17 | ✅ Page s'affiche |
| Féminine A | http://localhost:3000/equipes/feminine-a | ✅ Page s'affiche |
| Féminine U20 | http://localhost:3000/equipes/feminine-u20 | ✅ Page s'affiche |
| Futsal A | http://localhost:3000/equipes/futsal-a | ✅ Page s'affiche |
| Futsal U19 | http://localhost:3000/equipes/futsal-u19 | ✅ Page s'affiche |
| Beach Soccer | http://localhost:3000/equipes/beach-soccer | ✅ Page s'affiche |

**Chaque page doit afficher :**
- ✅ Hero avec dégradé de couleurs
- ✅ Breadcrumb de navigation
- ✅ Titre de l'équipe
- ✅ Message "Contenu en cours de développement"
- ✅ 2 boutons : "Retour aux équipes" et "Voir les actualités"

---

### 4️⃣ Test du Header Desktop

**À Vérifier :**

Sur http://localhost:3000 (desktop > 1024px) :

| Lien | URL Attendue | Status |
|------|--------------|--------|
| ACTUALITÉS | /actualites | ✅ |
| ÉQUIPES | /equipes | ✅ |
| CALENDRIER | /calendrier | ✅ |
| Billetterie | /billetterie | ✅ |
| Boutique | /boutique | ✅ |

---

### 5️⃣ Test Navigation Breadcrumb

**Depuis la page E.N. A :**
http://localhost:3000/equipes/nationale-a

**Breadcrumb affiché :**
```
Accueil / Équipes / Équipe Nationale A
```

**Test de clic :**
- ✅ Cliquer sur "Accueil" → Retour à `/`
- ✅ Cliquer sur "Équipes" → Retour à `/equipes`

---

### 6️⃣ Test Responsive

**Tester sur différentes tailles :**

#### Mobile (375px)
- ✅ Menu hamburger visible
- ✅ Logo FRMF à droite sur mobile
- ✅ 1 colonne pour les joueurs
- ✅ Textes lisibles
- ✅ Boutons accessibles

#### Tablette (768px)
- ✅ Menu hamburger toujours visible
- ✅ 2 colonnes pour les joueurs
- ✅ Cards bien espacées

#### Desktop (1024px+)
- ✅ Menu complet dans le header
- ✅ 4 colonnes pour les joueurs
- ✅ Tout bien aligné

**Outils pour tester :**
- Chrome DevTools (F12) → Toggle device toolbar
- Firefox Responsive Design Mode (Ctrl+Shift+M)

---

### 7️⃣ Test des Liens "Retour"

**Sur chaque page d'équipe (sauf E.N. A) :**

1. Cliquer sur **"Retour aux équipes"**
   - ✅ Doit rediriger vers `/equipes`

2. Cliquer sur **"Voir les actualités"**
   - ✅ Doit rediriger vers `/actualites`

---

### 8️⃣ Test des Animations

**À Vérifier :**

Sur toutes les pages :
- ✅ Scroll smooth
- ✅ Hover sur les cards
- ✅ Transitions des onglets
- ✅ Menu mobile slide depuis la droite
- ✅ Sous-menus s'ouvrent avec animation

---

## 🐛 En Cas de Problème

### Erreur 404
```
Si vous voyez "404 This page could not be found"
→ Vérifier que le serveur est démarré (npm run dev)
→ Vérifier l'URL (pas de fautes de frappe)
```

### Menu ne s'ouvre pas
```
→ Vérifier la console du navigateur (F12)
→ Rafraîchir la page (Ctrl+R)
```

### Images ne s'affichent pas
```
→ Normal pour certaines images (placeholder.svg)
→ Vérifier que les images existent dans /public/images/
```

### Style cassé
```
→ Vider le cache (Ctrl+Shift+R)
→ Relancer le serveur (npm run dev)
```

---

## 📊 Résultat Attendu

### ✅ Tout Fonctionne Si :

1. Le menu mobile s'ouvre et se ferme correctement
2. Tous les liens "Équipes nationales" redirigent vers les bonnes pages
3. La page E.N. A affiche l'effectif complet avec onglets fonctionnels
4. Les autres pages d'équipes affichent le message de développement
5. Le breadcrumb fonctionne sur toutes les pages
6. Le site est responsive sur mobile/tablette/desktop
7. Les animations sont fluides
8. Aucune erreur dans la console du navigateur

---

## 🎯 Commandes Utiles

```bash
# Démarrer le serveur
npm run dev

# Arrêter le serveur
Ctrl+C

# Build de production
npm run build

# Démarrer en production
npm start
```

---

## 📸 Screenshots Attendus

### Menu Mobile Ouvert
```
┌─────────────────────┐
│ ☰ MENU    FRMF 🦁   │
│                     │
│ ┌─────────────────┐ │
│ │ MENU SLIDE     │ │
│ │                │ │
│ │ Équipes nat. ▼ │ │
│ │   E.N. A       │ │
│ │   E.N. U23     │ │
│ │   ...          │ │
│ └─────────────────┘ │
└─────────────────────┘
```

### Page E.N. A Desktop
```
┌─────────────────────────────────────┐
│ HEADER                              │
├─────────────────────────────────────┤
│ HERO (Image + Stats)                │
├─────────────────────────────────────┤
│ [Effectif] [Staff] [Actu] [Résult] │
├─────────────────────────────────────┤
│ Gardiens                            │
│ [Joueur] [Joueur] [Joueur] [Joueur]│
│                                     │
│ Défenseurs                          │
│ [Joueur] [Joueur] [Joueur] [Joueur]│
└─────────────────────────────────────┘
```

---

## ✅ CHECKLIST FINALE

Cochez au fur et à mesure :

- [ ] Serveur démarré (`npm run dev`)
- [ ] Page d'accueil s'affiche
- [ ] Menu mobile s'ouvre
- [ ] Clic sur "Équipes nationales" ouvre le sous-menu
- [ ] Clic sur "E.N. A" redirige vers `/equipes/nationale-a`
- [ ] Page E.N. A affiche tout correctement
- [ ] Les 4 onglets fonctionnent
- [ ] L'effectif s'affiche par poste
- [ ] Toutes les autres pages d'équipes s'affichent
- [ ] Breadcrumb fonctionne
- [ ] Boutons "Retour" fonctionnent
- [ ] Site responsive sur mobile
- [ ] Aucune erreur dans la console

---

**Si tous les tests passent ✅, votre site est 100% opérationnel ! 🎉**

Profitez de votre site multi-pages FRMF complet ! 🇲🇦⚽

