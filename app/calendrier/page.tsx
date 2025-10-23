'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MatchCard from '@/components/specific/MatchCard';

// Import des données
import matchesData from '@/data/matches.json';

/**
 * Page Calendrier
 * 
 * Affiche tous les matchs (passés et à venir) des Lions de l'Atlas
 */

export default function CalendrierPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const statusFilters = [
    { id: 'all', label: 'Tous les matchs' },
    { id: 'a_venir', label: 'À venir' },
    { id: 'termine', label: 'Terminés' },
  ];

  const filteredMatches = selectedStatus === 'all'
    ? matchesData
    : matchesData.filter(m => m.statut === selectedStatus);

  // Grouper par compétition
  const matchesByCompetition = filteredMatches.reduce((acc, match) => {
    if (!acc[match.competition]) {
      acc[match.competition] = [];
    }
    acc[match.competition].push(match);
    return acc;
  }, {} as Record<string, typeof matchesData>);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-dark via-maroc-green to-maroc-dark py-24 md:py-32">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 98, 51, 0.1) 20px, rgba(0, 98, 51, 0.1) 40px)
              `,
            }}
          />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Calendrier
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Tous les matchs des Lions de l'Atlas - Passés et à venir
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b sticky top-20 z-30 shadow-sm">
          <div className="container-custom py-6">
            <div className="flex flex-wrap gap-3">
              {statusFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedStatus(filter.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                    selectedStatus === filter.id
                      ? 'bg-maroc-gold text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Matches by Competition */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {/* Stats */}
            <div className="mb-8">
              <p className="text-gray-600">
                <span className="font-bold text-maroc-gold text-2xl">{filteredMatches.length}</span> match{filteredMatches.length > 1 ? 'es' : ''}
              </p>
            </div>

            {/* Competition Groups */}
            <div className="space-y-12">
              {Object.entries(matchesByCompetition).map(([competition, matches]) => (
                <div key={competition}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <div className="w-2 h-8 bg-maroc-gold rounded-full" />
                    {competition}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matches.map((match, index) => (
                      <div
                        key={match.id}
                        className="opacity-0 animate-slide-in-fade-up"
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animationFillMode: 'forwards',
                        }}
                      >
                        <MatchCard
                          equipeA={match.equipeA}
                          equipeB={match.equipeB}
                          date={match.date}
                          competition={match.competition}
                          stade={match.stade}
                          ville={match.ville}
                          statut={match.statut}
                          score={match.score}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredMatches.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun match trouvé</h3>
                <p className="text-gray-600">Essayez de sélectionner un autre filtre</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

