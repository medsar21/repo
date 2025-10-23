'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PlayerCard from '@/components/specific/PlayerCard';

// Import des données
import joueurs from '@/data/joueurs.json';

/**
 * Page Équipe Nationale A
 * 
 * Informations sur l'équipe première masculine du Maroc
 */

export default function EquipeNationaleAPage() {
  const [activeTab, setActiveTab] = useState<'effectif' | 'staff' | 'actualites' | 'resultats'>('effectif');

  // Filtrer les joueurs de l'équipe A (tous les joueurs pour l'instant)
  const effectif = joueurs.slice(0, 23);

  const tabs = [
    { id: 'effectif' as const, label: 'Effectif', icon: '👥' },
    { id: 'staff' as const, label: 'Staff', icon: '👔' },
    { id: 'actualites' as const, label: 'Actualités', icon: '📰' },
    { id: 'resultats' as const, label: 'Résultats', icon: '⚽' },
  ];

  const staff = [
    { nom: 'Walid Regragui', poste: 'Sélectionneur', photo: '/images/placeholder.svg' },
    { nom: 'Rachid Benmahmoud', poste: 'Entraîneur adjoint', photo: '/images/placeholder.svg' },
    { nom: 'Mustapha El Hadaoui', poste: 'Préparateur physique', photo: '/images/placeholder.svg' },
    { nom: 'Abdelouahed Chaoui', poste: 'Entraîneur des gardiens', photo: '/images/placeholder.svg' },
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-red via-maroc-dark to-maroc-green py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"
              alt="Équipe Nationale A"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 98, 51, 0.1) 20px, rgba(0, 98, 51, 0.1) 40px)
              `,
            }}
          />
          
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/equipes" className="hover:text-white transition-colors">Équipes</Link>
              <span>/</span>
              <span className="text-white">Équipe Nationale A</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-widest">
                  Lions de l'Atlas
                </span>
              </div>

              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Équipe Nationale A
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                L'équipe première masculine du Maroc - Demi-finaliste de la Coupe du Monde 2022
              </p>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">13</div>
                  <div className="text-sm md:text-base text-white/80">Classement FIFA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">1976</div>
                  <div className="text-sm md:text-base text-white/80">Champions CAN</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">2022</div>
                  <div className="text-sm md:text-base text-white/80">Demi-finale CM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white border-b sticky top-20 z-30 shadow-sm">
          <div className="container-custom">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 border-b-4 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-maroc-red text-maroc-red'
                      : 'border-transparent text-gray-600 hover:text-maroc-red'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {/* Effectif */}
            {activeTab === 'effectif' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Effectif 2024</h2>
                
                {/* Gardiens */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-maroc-red mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-maroc-red rounded-full" />
                    Gardiens de but
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {effectif.filter(j => j.poste === 'Gardien').map((joueur) => (
                      <PlayerCard
                        key={joueur.id}
                        id={joueur.id}
                        nom={joueur.nom}
                        prenom={joueur.prenom}
                        numero={joueur.numero}
                        poste={joueur.poste}
                        photo={joueur.photo}
                        club={joueur.club}
                      />
                    ))}
                  </div>
                </div>

                {/* Défenseurs */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-maroc-red mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-maroc-red rounded-full" />
                    Défenseurs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {effectif.filter(j => j.poste === 'Défenseur').map((joueur) => (
                      <PlayerCard
                        key={joueur.id}
                        id={joueur.id}
                        nom={joueur.nom}
                        prenom={joueur.prenom}
                        numero={joueur.numero}
                        poste={joueur.poste}
                        photo={joueur.photo}
                        club={joueur.club}
                      />
                    ))}
                  </div>
                </div>

                {/* Milieux */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-maroc-red mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-maroc-red rounded-full" />
                    Milieux de terrain
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {effectif.filter(j => j.poste === 'Milieu').map((joueur) => (
                      <PlayerCard
                        key={joueur.id}
                        id={joueur.id}
                        nom={joueur.nom}
                        prenom={joueur.prenom}
                        numero={joueur.numero}
                        poste={joueur.poste}
                        photo={joueur.photo}
                        club={joueur.club}
                      />
                    ))}
                  </div>
                </div>

                {/* Attaquants */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-maroc-red mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-maroc-red rounded-full" />
                    Attaquants
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {effectif.filter(j => j.poste === 'Attaquant').map((joueur) => (
                      <PlayerCard
                        key={joueur.id}
                        id={joueur.id}
                        nom={joueur.nom}
                        prenom={joueur.prenom}
                        numero={joueur.numero}
                        poste={joueur.poste}
                        photo={joueur.photo}
                        club={joueur.club}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Staff */}
            {activeTab === 'staff' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Staff Technique</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {staff.map((membre, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                      <div className="relative h-64 bg-gray-200">
                        <Image
                          src={membre.photo}
                          alt={membre.nom}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{membre.nom}</h3>
                        <p className="text-maroc-red font-semibold">{membre.poste}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actualités */}
            {activeTab === 'actualites' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Dernières Actualités</h2>
                <div className="text-center py-20">
                  <p className="text-gray-600 mb-6">Les actualités de l'équipe nationale A seront bientôt disponibles</p>
                  <Link href="/actualites" className="btn-primary">
                    Voir toutes les actualités
                  </Link>
                </div>
              </div>
            )}

            {/* Résultats */}
            {activeTab === 'resultats' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Derniers Résultats</h2>
                <div className="text-center py-20">
                  <p className="text-gray-600 mb-6">Les résultats seront bientôt disponibles</p>
                  <Link href="/calendrier" className="btn-primary">
                    Voir le calendrier complet
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

