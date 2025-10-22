/**
 * Google Calendar API Integration
 * 
 * Récupère automatiquement les prochains matchs depuis Google Calendar
 * 
 * Configuration requise:
 * 1. Créer un projet sur Google Cloud Console
 * 2. Activer Google Calendar API
 * 3. Créer des credentials (API Key ou OAuth 2.0)
 * 4. Ajouter les variables d'environnement dans .env.local
 */

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
}

interface Match {
  id: number;
  equipeA: {
    nom: string;
    code: string;
    drapeau: string;
  };
  equipeB: {
    nom: string;
    code: string;
    drapeau: string;
  };
  date: string;
  competition: string;
  stade?: string;
  ville?: string;
  statut: 'termine' | 'a_venir';
  score?: {
    equipeA: number;
    equipeB: number;
  };
}

/**
 * Récupère les événements depuis Google Calendar
 */
export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.warn('Google Calendar API non configurée. Utilisation des données statiques.');
    return [];
  }

  try {
    const now = new Date().toISOString();
    const maxTime = new Date();
    maxTime.setMonth(maxTime.getMonth() + 6); // Prochains 6 mois

    const url = new URL('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(CALENDAR_ID) + '/events');
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('timeMin', now);
    url.searchParams.append('timeMax', maxTime.toISOString());
    url.searchParams.append('singleEvents', 'true');
    url.searchParams.append('orderBy', 'startTime');
    url.searchParams.append('maxResults', '10');

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 } // Cache 1 heure
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Erreur lors de la récupération du calendrier:', error);
    return [];
  }
}

/**
 * Parse un événement Google Calendar en Match
 * 
 * Format du titre attendu: "Maroc vs France" ou "MAR - FRA"
 * Format de la description (optionnel):
 * ```
 * Competition: Coupe du Monde
 * Stade: Stade de France
 * Ville: Paris
 * ```
 */
export function parseCalendarEventToMatch(event: CalendarEvent, index: number): Match | null {
  try {
    const summary = event.summary || '';
    const teams = summary.split(/vs|VS|-/).map(t => t.trim());

    if (teams.length !== 2) {
      console.warn(`Format de match invalide: ${summary}`);
      return null;
    }

    // Parse description pour infos supplémentaires
    const description = event.description || '';
    const competitionMatch = description.match(/Competition:\s*(.+)/i);
    const stadeMatch = description.match(/Stade:\s*(.+)/i);
    const villeMatch = description.match(/Ville:\s*(.+)/i);

    const date = event.start.dateTime || event.start.date || new Date().toISOString();

    return {
      id: Date.now() + index,
      equipeA: {
        nom: teams[0],
        code: teams[0].substring(0, 3).toUpperCase(),
        drapeau: `/images/drapeaux/${teams[0].toLowerCase().replace(/\s+/g, '-')}.svg`
      },
      equipeB: {
        nom: teams[1],
        code: teams[1].substring(0, 3).toUpperCase(),
        drapeau: `/images/drapeaux/${teams[1].toLowerCase().replace(/\s+/g, '-')}.svg`
      },
      date,
      competition: competitionMatch?.[1] || 'Match amical',
      stade: stadeMatch?.[1],
      ville: villeMatch?.[1] || event.location,
      statut: 'a_venir'
    };
  } catch (error) {
    console.error('Erreur lors du parsing de l\'événement:', error);
    return null;
  }
}

/**
 * Récupère et transforme les événements en matchs
 */
export async function getUpcomingMatches(): Promise<Match[]> {
  const events = await fetchCalendarEvents();
  
  const matches = events
    .map((event, index) => parseCalendarEventToMatch(event, index))
    .filter((match): match is Match => match !== null);

  return matches;
}

/**
 * Combine les matchs de Google Calendar avec les matchs statiques
 */
export async function getMergedMatches(staticMatches: Match[]): Promise<Match[]> {
  try {
    const calendarMatches = await getUpcomingMatches();
    
    if (calendarMatches.length === 0) {
      // Si pas de matchs Google Calendar, utiliser les données statiques
      return staticMatches;
    }

    // Fusionner et dédupliquer par date
    const allMatches = [...calendarMatches, ...staticMatches];
    const uniqueMatches = allMatches.filter((match, index, self) =>
      index === self.findIndex(m => 
        new Date(m.date).getTime() === new Date(match.date).getTime() &&
        m.equipeA.nom === match.equipeA.nom &&
        m.equipeB.nom === match.equipeB.nom
      )
    );

    // Trier par date
    return uniqueMatches.sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } catch (error) {
    console.error('Erreur lors de la fusion des matchs:', error);
    return staticMatches;
  }
}

