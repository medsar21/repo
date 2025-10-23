'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import des données
import matchesData from '@/data/matches.json';

/**
 * Page Billetterie
 * 
 * Permet aux utilisateurs d'acheter des billets pour les matchs
 */

export default function BilletteriePage() {
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);

  // Matchs à venir uniquement
  const upcomingMatches = matchesData
    .filter(m => m.statut === 'a_venir')
    .slice(0, 6);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-red via-maroc-dark to-maroc-red py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"
              alt="Équipe du Maroc"
              fill
              className="object-cover opacity-20"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                <svg className="w-5 h-5 text-maroc-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-widest">
                  Billetterie Officielle
                </span>
              </div>

              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Réservez vos places
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Vivez l'expérience unique de soutenir les Lions de l'Atlas au stade
              </p>
            </div>
          </div>
        </section>

        {/* Available Matches */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Matchs disponibles</h2>
            <p className="text-gray-600 mb-12">Sélectionnez un match pour acheter vos billets</p>

            {upcomingMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingMatches.map((match, index) => (
                  <div
                    key={match.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      selectedMatch === match.id.toString() ? 'ring-4 ring-maroc-red' : ''
                    }`}
                    onClick={() => setSelectedMatch(match.id.toString())}
                  >
                    {/* Match Header */}
                    <div className="bg-gradient-to-r from-maroc-red to-maroc-dark p-6 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold uppercase tracking-wide">
                          {match.competition}
                        </span>
                        <span className="px-3 py-1 bg-maroc-gold text-xs font-bold rounded-full">
                          Disponible
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between gap-4">
                        {/* Équipe A */}
                        <div className="flex-1 text-center">
                          <div className="relative w-16 h-16 mx-auto mb-2">
                            <Image
                              src={match.equipeA.drapeau}
                              alt={match.equipeA.nom}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="font-bold text-sm">{match.equipeA.nom}</p>
                        </div>

                        {/* VS */}
                        <div className="text-maroc-gold font-black text-2xl">VS</div>

                        {/* Équipe B */}
                        <div className="flex-1 text-center">
                          <div className="relative w-16 h-16 mx-auto mb-2">
                            <Image
                              src={match.equipeB.drapeau}
                              alt={match.equipeB.nom}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="font-bold text-sm">{match.equipeB.nom}</p>
                        </div>
                      </div>
                    </div>

                    {/* Match Details */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-maroc-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-semibold">
                          {new Date(match.date).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-maroc-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-semibold">{match.stade}, {match.ville}</span>
                      </div>

                      {/* Price */}
                      <div className="pt-4 mt-4 border-t flex items-center justify-between">
                        <span className="text-gray-600 text-sm">À partir de</span>
                        <span className="text-2xl font-bold text-maroc-red">150 DH</span>
                      </div>

                      {/* CTA */}
                      <button className="w-full py-3 bg-maroc-red text-white font-bold rounded-lg hover:bg-maroc-red/90 transition-colors flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        Acheter des billets
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun match disponible</h3>
                <p className="text-gray-600">Les billets seront bientôt disponibles</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-maroc-green/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-maroc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Paiement sécurisé</h3>
                <p className="text-gray-600">Vos transactions sont 100% sécurisées</p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-maroc-gold/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-maroc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Confirmation instantanée</h3>
                <p className="text-gray-600">Recevez vos billets immédiatement par email</p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-maroc-red/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-maroc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                <p className="text-gray-600">Notre équipe est à votre disposition</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

