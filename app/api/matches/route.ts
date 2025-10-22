import { NextResponse } from 'next/server';
import { getMergedMatches } from '@/lib/googleCalendar';
import matchesData from '@/data/matches.json';

/**
 * API Route: GET /api/matches
 * 
 * Récupère les matchs depuis Google Calendar
 * Fusionne avec les données statiques
 * Fallback sur données statiques si API non configurée
 */
export async function GET() {
  try {
    const matches = await getMergedMatches(matchesData);
    
    return NextResponse.json({
      success: true,
      matches,
      count: matches.length,
      source: matches.length > matchesData.length ? 'google_calendar' : 'static'
    });
  } catch (error) {
    console.error('Erreur API /api/matches:', error);
    
    // En cas d'erreur, retourner les données statiques
    return NextResponse.json({
      success: true,
      matches: matchesData,
      count: matchesData.length,
      source: 'static_fallback',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

/**
 * Configuration du cache
 * Revalide toutes les heures
 */
export const revalidate = 3600; // 1 heure

