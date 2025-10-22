# 🚀 Quick Start - Lions de l'Atlas

Guide de démarrage rapide pour développer le site.

---

## ⚡ Installation en 3 étapes

```bash
# 1. Cloner et entrer dans le projet
git clone https://github.com/frmf/lions-atlas.git
cd lions-atlas

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

✅ Le site est maintenant accessible sur **http://localhost:3000**

---

## 📂 Structure Rapide

```
├── app/                 # Pages Next.js
├── components/          # Composants React
├── data/                # Données JSON
├── lib/                 # Helpers
└── public/              # Assets statiques
```

---

## 🎨 Personnalisation Rapide

### Changer les couleurs
**Fichier** : `tailwind.config.ts`

```typescript
colors: {
  maroc: {
    red: '#C1272D',    // ← Modifiez ici
    green: '#006233',  // ← Et ici
    gold: '#D4AF37',   // ← Et ici
  }
}
```

### Ajouter un joueur
**Fichier** : `data/joueurs.json`

```json
{
  "id": "nouveau-joueur",
  "nom": "Nom",
  "prenom": "Prénom",
  "numero": 10,
  "poste": "Attaquant",
  "photo": "/images/joueurs/nouveau.jpg",
  //... reste des champs
}
```

### Ajouter une actualité
**Fichier** : `data/actualites.json`

```json
{
  "id": 11,
  "slug": "nouvelle-actualite",
  "titre": "Titre de l'actualité",
  "chapeau": "Résumé court",
  "contenu": "Contenu complet...",
  //... reste des champs
}
```

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev           # Serveur dev :3000

# Production
npm run build         # Build optimisé
npm run start         # Lance le build

# Qualité
npm run lint          # Vérifie le code
npm run type-check    # Vérifie TypeScript
```

---

## 📱 Tester le Responsive

```bash
# Mobile
http://localhost:3000   (DevTools → Toggle device toolbar)

# Tablette
Ctrl/Cmd + Shift + M

# Desktop
Navigateur normal
```

---

## 🎯 Checklist Premier Lancement

- [ ] `npm install` réussi
- [ ] `npm run dev` fonctionne
- [ ] Page d'accueil s'affiche
- [ ] Navigation fonctionne
- [ ] Données s'affichent

---

## 🐛 Problèmes Courants

### Port 3000 déjà utilisé
```bash
# Changer le port
PORT=3001 npm run dev
```

### Erreurs TypeScript
```bash
# Vérifier les types
npm run type-check

# Rebuild node_modules
rm -rf node_modules
npm install
```

### Images ne s'affichent pas
- Vérifier que les chemins commencent par `/images/`
- Placer les images dans `public/images/`

---

## 📖 Documentation Complète

- **README.md** : Documentation principale
- **ROADMAP.md** : Plan d'amélioration (6 étapes)
- **PROJECT_STRUCTURE.md** : Architecture détaillée
- **CONTRIBUTORS.md** : Guide de contribution

---

## 💡 Premiers Pas Recommandés

1. **Jour 1** : Explorer le code, comprendre la structure
2. **Jour 2** : Personnaliser les couleurs et typo (Étape 1-2 du Roadmap)
3. **Jour 3** : Ajouter du contenu (joueurs, actualités)
4. **Jour 4** : Améliorer le Header et Hero (Étape 3 du Roadmap)
5. **Jour 5** : Optimiser les images (Étape 5 du Roadmap)

---

## 🆘 Besoin d'aide ?

- 📧 Email : dev@lions-atlas.ma
- 🐛 GitHub Issues : [Ouvrir une issue](https://github.com/frmf/lions-atlas/issues)
- 📚 Next.js Docs : https://nextjs.org/docs

---

## ✅ Prêt à Commencer ?

```bash
# Let's go ! 🦁
npm run dev
```

**Bon développement ! Dima Maghreb !** 🇲🇦

