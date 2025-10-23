# Logos des Partenaires

## 📝 Instructions

Pour ajouter les logos des partenaires dans le carousel automatique, suivez ces étapes :

## 📋 Liste des partenaires à ajouter

D'après l'image fournie, voici les 21 partenaires à ajouter :

### Rangée 1 (7 logos)
1. **bank-al-maghrib.png** - Bank Al-Maghrib
2. **cdg.png** - Caisse de Dépôt et de Gestion
3. **morocco.png** - Logo Morocco
4. **ocp.png** - OCP (Office Chérifien des Phosphates)
5. **puma.png** - Puma
6. **royal-air-maroc.png** - Royal Air Maroc
7. **equipe-nationale.png** - Équipe Nationale de Radiodiffusion et de Télévision

### Rangée 2 (4 logos)
8. **afriquia.png** - Afriquia
9. **haier.png** - Haier
10. **pepsi.png** - Pepsi
11. **skoda.png** - Skoda

### Rangée 3 (10 logos)
12. **atlantasanad.png** - Atlantasanad
13. **centrale-danone.png** - Centrale Danone
14. **dari.png** - Dari
15. **inwi.png** - Inwi
16. **la-education.png** - La Education
17. **mcdonalds.png** - McDonald's
18. **sidiali.png** - Sidiali
19. **sonasid.png** - Sonasid
20. **sultan.png** - Sultan
21. **webook.png** - Webook

## 🎨 Format des logos

- **Format** : PNG avec fond transparent (recommandé) ou JPG
- **Taille recommandée** : 300x200 pixels minimum
- **Qualité** : Haute résolution pour affichage optimal
- **Nom du fichier** : En minuscules, avec tirets (exemple : `bank-al-maghrib.png`)

## ⚙️ Configuration dans le code

Une fois les logos ajoutés dans ce dossier, modifiez le fichier `app/page.tsx` :

Remplacez la section des placeholders de texte par des images :

```tsx
<Image
  src={`/images/partners/${partnerSlug}.png`}
  alt={partner}
  width={200}
  height={100}
  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
/>
```

## ✨ Effet visuel

- **Par défaut** : Les logos sont en noir et blanc (grayscale filter)
- **Au hover** : Les logos reprennent leurs couleurs + effet de zoom (scale 110%)
- **Carousel** : Défilement automatique de droite à gauche (60 secondes pour un cycle complet)
- **Pause** : Le carousel se met en pause au hover

## 🔄 Animation automatique

Le carousel défile automatiquement de droite à gauche de manière infinie. Les logos sont dupliqués pour créer un effet de boucle sans fin.

Vitesse : 60 secondes pour un cycle complet (modifiable dans `app/globals.css`)

