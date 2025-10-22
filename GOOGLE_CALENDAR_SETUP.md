# 📅 Configuration Google Calendar API

Ce guide vous explique comment configurer l'intégration automatique des matchs depuis Google Calendar.

## 🎯 Pourquoi utiliser Google Calendar ?

- ✅ **Mise à jour automatique** des matchs sans modifier le code
- ✅ **Synchronisation temps réel** avec l'équipe de communication
- ✅ **Notifications** automatiques pour les nouveaux matchs
- ✅ **Gestion centralisée** du calendrier

## 📋 Prérequis

1. Un compte Google
2. Un calendrier Google dédié aux matchs
3. 5 minutes de configuration

## 🚀 Étapes de configuration

### 1️⃣ Créer un projet Google Cloud

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Cliquer sur **"Créer un projet"**
3. Nommer votre projet (ex: "FRMF Calendrier")
4. Cliquer sur **"Créer"**

### 2️⃣ Activer l'API Google Calendar

1. Dans le menu, aller à **"API et services" > "Bibliothèque"**
2. Rechercher **"Google Calendar API"**
3. Cliquer sur **"Activer"**

### 3️⃣ Créer une clé API

1. Aller à **"API et services" > "Identifiants"**
2. Cliquer sur **"Créer des identifiants" > "Clé API"**
3. **Copier la clé API** générée
4. (Recommandé) Cliquer sur **"Restreindre la clé"**:
   - **Restrictions d'application** : Sites web
   - **Restrictions d'API** : Google Calendar API uniquement

### 4️⃣ Créer un calendrier dédié

1. Aller sur [Google Calendar](https://calendar.google.com/)
2. Cliquer sur **"+"** à côté de "Autres agendas"
3. Sélectionner **"Créer un agenda"**
4. Nommer l'agenda (ex: "FRMF - Matchs Officiels")
5. Cliquer sur **"Créer l'agenda"**

### 5️⃣ Obtenir l'ID du calendrier

1. Dans Google Calendar, cliquer sur **⚙️** (Paramètres)
2. Sélectionner votre calendrier dans la liste
3. Descendre jusqu'à **"Intégrer l'agenda"**
4. Copier l'**ID de l'agenda** (format: `xxxxx@group.calendar.google.com`)

### 6️⃣ Rendre le calendrier public

1. Dans les paramètres du calendrier
2. Section **"Autorisations d'accès"**
3. Cocher **"Rendre disponible publiquement"**
4. Cliquer sur **"OK"** pour confirmer

### 7️⃣ Configurer le projet Next.js

1. Créer un fichier `.env.local` à la racine du projet:

```bash
NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY=votre_cle_api_ici
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=votre_calendar_id@group.calendar.google.com
```

2. Redémarrer le serveur:

```bash
npm run dev
```

## 📝 Format des événements

Pour que les matchs soient correctement importés, suivez ce format:

### Titre de l'événement
```
Maroc vs France
```
ou
```
MAR - ESP
```

### Description (optionnelle mais recommandée)
```
Competition: Coupe du Monde 2026
Stade: Stade Mohammed V
Ville: Casablanca
```

### Exemple complet

**Titre:** `Maroc vs Espagne`

**Date et heure:** `15 juin 2024 à 21:00`

**Lieu:** `Casablanca`

**Description:**
```
Competition: Match amical
Stade: Stade Mohammed V
Ville: Casablanca
```

## 🎨 Personnalisation

### Couleurs des événements

Pour différencier les types de matchs dans Google Calendar:

- 🔴 **Rouge** : Matchs officiels (Coupe du Monde, CAN, etc.)
- 🟢 **Vert** : Matchs amicaux
- 🟡 **Jaune** : Matchs de qualification
- 🔵 **Bleu** : Tournois

### Rappels automatiques

Configurez des rappels pour être notifié:
- 1 semaine avant → Publier sur les réseaux sociaux
- 24 heures avant → Communiqué de presse
- 2 heures avant → Tweet en direct

## 🔍 Vérification

1. Ajoutez un match de test dans Google Calendar
2. Attendez 1 heure (cache API)
3. Rechargez votre site
4. Le match devrait apparaître automatiquement dans le carousel !

## 🐛 Dépannage

### Le calendrier ne se met pas à jour

1. Vérifier que l'API Key est correcte dans `.env.local`
2. Vérifier que le calendrier est public
3. Vider le cache: supprimer `.next/` et redémarrer
4. Attendre 1 heure (cache de l'API)

### Erreur "Calendar not found"

- L'ID du calendrier est incorrect
- Le calendrier n'est pas public
- Vérifier les permissions dans Google Calendar

### Erreur "API Key invalide"

- La clé API n'est pas activée
- La clé API est restreinte au mauvais domaine
- Créer une nouvelle clé API sans restrictions

## 📊 Limites

- **Quota gratuit** : 1,000,000 requêtes/jour (largement suffisant)
- **Cache** : 1 heure (configurable dans `lib/googleCalendar.ts`)
- **Matchs affichés** : 10 prochains matchs maximum

## 🔐 Sécurité

### Bonnes pratiques

✅ **À FAIRE:**
- Restreindre la clé API à Google Calendar uniquement
- Restreindre les domaines autorisés (ex: `votre-site.com`)
- Ne jamais commit `.env.local` dans Git

❌ **À NE PAS FAIRE:**
- Partager votre clé API publiquement
- Utiliser la même clé pour plusieurs projets
- Laisser le calendrier modifiable par tout le monde

## 🎓 Ressources

- [Documentation Google Calendar API](https://developers.google.com/calendar)
- [Console Google Cloud](https://console.cloud.google.com/)
- [Quotas et limites](https://developers.google.com/calendar/api/guides/quota)

## 💡 Utilisation avancée

### Webhook pour mise à jour instantanée

Pour des mises à jour en temps réel sans cache, configurez un webhook Google Calendar (nécessite un serveur avec URL publique).

### Multi-calendriers

Pour gérer plusieurs équipes (Masculin, Féminin, U23):

```typescript
// lib/googleCalendar.ts
const CALENDARS = {
  masculin: 'calendar_id_1@group.calendar.google.com',
  feminin: 'calendar_id_2@group.calendar.google.com',
  u23: 'calendar_id_3@group.calendar.google.com'
};
```

---

✨ **Une fois configuré, votre calendrier se met à jour automatiquement !** 🎉

