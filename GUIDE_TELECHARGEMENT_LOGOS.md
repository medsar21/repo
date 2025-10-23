# 📥 Guide de téléchargement des logos des partenaires

## 🔍 Où trouver les logos ?

### Sources recommandées :

1. **Sites officiels des entreprises** (meilleure qualité)
2. **Logos officiels FRMF** - Si vous avez accès aux assets officiels
3. **Wikimedia Commons** - https://commons.wikimedia.org/
4. **Brandfetch** - https://brandfetch.com/
5. **Seeklogo** - https://seeklogo.com/
6. **LogoDownload** - https://logodownload.org/

## 📋 Liste complète des logos à télécharger

### Rangée 1 (Top sponsors)
1. ⬜ **Bank Al-Maghrib**
   - Site : https://www.bkam.ma/
   - Nom du fichier : `bank-al-maghrib.png`

2. ⬜ **CDG (Caisse de Dépôt et de Gestion)**
   - Site : https://www.cdg.ma/
   - Nom du fichier : `cdg.png`

3. ⬜ **Morocco (Logo officiel)**
   - Nom du fichier : `morocco.png`

4. ⬜ **OCP (Office Chérifien des Phosphates)**
   - Site : https://www.ocpgroup.ma/
   - Nom du fichier : `ocp.png`

5. ⬜ **Puma**
   - Site : https://about.puma.com/
   - Nom du fichier : `puma.png`

6. ⬜ **Royal Air Maroc**
   - Site : https://www.royalairmaroc.com/
   - Nom du fichier : `royal-air-maroc.png`

7. ⬜ **Équipe Nationale de Radiodiffusion**
   - Nom du fichier : `equipe-nationale.png`

### Rangée 2 (Sponsors majeurs)
8. ⬜ **Afriquia**
   - Nom du fichier : `afriquia.png`

9. ⬜ **Haier**
   - Site : https://www.haier.com/
   - Nom du fichier : `haier.png`

10. ⬜ **Pepsi**
    - Site : https://www.pepsi.com/
    - Nom du fichier : `pepsi.png`

11. ⬜ **Skoda**
    - Site : https://www.skoda-auto.com/
    - Nom du fichier : `skoda.png`

### Rangée 3 (Partenaires)
12. ⬜ **Atlantasanad**
    - Nom du fichier : `atlantasanad.png`

13. ⬜ **Centrale Danone**
    - Nom du fichier : `centrale-danone.png`

14. ⬜ **Dari**
    - Nom du fichier : `dari.png`

15. ⬜ **Inwi**
    - Site : https://www.inwi.ma/
    - Nom du fichier : `inwi.png`

16. ⬜ **La Education**
    - Nom du fichier : `la-education.png`

17. ⬜ **McDonald's**
    - Site : https://www.mcdonalds.com/
    - Nom du fichier : `mcdonalds.png`

18. ⬜ **Sidiali**
    - Nom du fichier : `sidiali.png`

19. ⬜ **Sonasid**
    - Nom du fichier : `sonasid.png`

20. ⬜ **Sultan**
    - Nom du fichier : `sultan.png`

21. ⬜ **Webook**
    - Nom du fichier : `webook.png`

## 📐 Spécifications techniques

### Format
- **Type** : PNG avec fond transparent (OBLIGATOIRE pour l'effet grayscale)
- **Résolution** : Minimum 300x200 pixels
- **Qualité** : Haute résolution

### Règles de nommage
- ✅ Tout en minuscules
- ✅ Utilisez des tirets `-` au lieu d'espaces
- ✅ Extension `.png`
- ❌ Pas d'accents ni de caractères spéciaux

### Exemples corrects :
- `bank-al-maghrib.png` ✅
- `royal-air-maroc.png` ✅
- `centrale-danone.png` ✅

### Exemples incorrects :
- `Bank Al Maghrib.png` ❌ (espaces)
- `ROYAL_AIR_MAROC.PNG` ❌ (majuscules et underscore)
- `centrale-danone.jpg` ❌ (format JPG)

## 🚀 Processus de téléchargement

### Méthode 1 : Téléchargement manuel
1. Visitez le site officiel de l'entreprise
2. Cherchez la section "Presse" ou "Media Kit"
3. Téléchargez le logo en haute résolution (PNG)
4. Renommez selon les conventions
5. Placez dans `public/images/partners/`

### Méthode 2 : Sites de logos
1. Allez sur Brandfetch.com ou Seeklogo.com
2. Cherchez le nom de la marque
3. Téléchargez en PNG (fond transparent)
4. Renommez correctement
5. Placez dans `public/images/partners/`

## 🎨 Post-traitement (si nécessaire)

Si un logo n'a pas de fond transparent :

### Avec Photoshop/GIMP :
1. Ouvrez l'image
2. Utilisez l'outil "Gomme magique" ou "Sélection par couleur"
3. Supprimez le fond blanc
4. Exportez en PNG

### Avec Remove.bg (en ligne) :
1. Allez sur https://remove.bg/
2. Uploadez votre logo
3. Téléchargez le résultat avec fond transparent

## ✅ Vérification

Une fois tous les logos téléchargés, votre dossier devrait ressembler à :

```
public/images/partners/
├── afriquia.png
├── atlantasanad.png
├── bank-al-maghrib.png
├── cdg.png
├── centrale-danone.png
├── dari.png
├── equipe-nationale.png
├── haier.png
├── inwi.png
├── la-education.png
├── mcdonalds.png
├── morocco.png
├── ocp.png
├── pepsi.png
├── puma.png
├── README.md
├── royal-air-maroc.png
├── sidiali.png
├── skoda.png
├── sonasid.png
├── sultan.png
└── webook.png
```

## 🔄 Mise à jour du code

Une fois les logos téléchargés, exécutez :

```bash
npm run dev
```

Les logos apparaîtront automatiquement en noir & blanc et deviendront colorés au hover !

## 💡 Astuce

Pour gagner du temps, commencez par télécharger les logos des partenaires les plus importants (Rangée 1) et ajoutez les autres progressivement.

## ⚠️ Droits d'auteur

Assurez-vous d'avoir le droit d'utiliser ces logos. Pour un site officiel de la FRMF, contactez le service communication pour obtenir les assets officiels.

