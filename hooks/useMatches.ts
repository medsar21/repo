'use client';

import { useState, useEffect } from 'react';

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
 * Hook pour récupérer les matchs
 * Essaie d'abord Google Calendar API, puis fallback sur les données statiques
 */
export function useMatches(staticMatches: Match[]) {
  const [matches, setMatches] = useState<Match[]>(staticMatches);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCalendarMatches = async () => {
      // Vérifier si l'API est configurée
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

      if (!apiKey || !calendarId) {
        // Pas d'API configurée, utiliser les données statiques
        console.log('📅 Google Calendar API non configurée - utilisation des données statiques');
        return;
      }

      setLoading(true);
      try {
        const response = await fetch('/api/matches');
        
        if (response.ok) {
          const data = await response.json();
          if (data.matches && data.matches.length > 0) {
            setMatches(data.matches);
            console.log(`✅ ${data.matches.length} matchs récupérés depuis Google Calendar`);
          }
        } else {
          throw new Error('Erreur lors de la récupération des matchs');
        }
      } catch (err) {
        console.warn('⚠️ Erreur Google Calendar API, utilisation des données statiques:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarMatches();
  }, []);

  return { matches, loading, error };
}

