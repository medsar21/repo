'use client';

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/specific/NewsCard';
import MatchCard from '@/components/specific/MatchCard';
import PlayerCard from '@/components/specific/PlayerCard';
import MatchCarousel from '@/components/specific/MatchCarousel';
import Link from 'next/link';
import { useMatches } from '@/hooks/useMatches';

// Import des données
import actualites from '@/data/actualites.json';
import matchesData from '@/data/matches.json';
import joueurs from '@/data/joueurs.json';

/**
 * Page d'accueil
 * 
 * Page principale du site avec Hero, actualités récentes,
 * prochains matchs et joueurs vedettes
 */

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
  
  // Utiliser le hook pour récupérer les matchs (Google Calendar + fallback statique)
  const { matches } = useMatches(matchesData);
  
  // Récupérer les 3 dernières actualités
  const dernieresActualites = actualites.slice(0, 3);

  // Récupérer les 3 prochains matchs
  const prochainsMatchs = (matches || matchesData)
    .filter((m) => m.statut === 'a_venir')
    .slice(0, 3);

  // Récupérer 4 joueurs vedettes
  const joueursVedettes = joueurs.slice(0, 4);

  return (
    <>
      {/* Loading Screen "Dima Maghrib" */}
      {showLoading && (
        <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />
      )}

      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero
          title="Les Lions de l'Atlas"
          subtitle="Équipe Nationale du Maroc"
          description="Fiers représentants du Royaume du Maroc sur la scène internationale"
          ctaText="Découvrir l'équipe"
          ctaLink="/equipes"
          backgroundVideo="/images/hero.mp4"
          height="full"
          overlay="medium"
        />

        {/* Carousel Calendrier */}
        <MatchCarousel matches={matches} />

        {/* Section Actualités */}
        <section className="section bg-maroc-light">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="section-title text-left mb-2">
                  Dernières Actualités
                </h2>
                <p className="text-gray-600">
                  Suivez toute l'actualité des Lions de l'Atlas
                </p>
              </div>
              <Link
                href="/actualites"
                className="hidden md:flex items-center gap-2 text-maroc-red font-semibold hover:gap-3 transition-all"
              >
                Voir toutes les actualités
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dernieresActualites.map((actualite) => (
                <NewsCard
                  key={actualite.id}
                  slug={actualite.slug}
                  titre={actualite.titre}
                  chapeau={actualite.chapeau}
                  image={actualite.image}
                  categorie={actualite.categorie}
                  datePublication={actualite.datePublication}
                  auteur={actualite.auteur}
                />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/actualites" className="btn-primary">
                Voir toutes les actualités
              </Link>
            </div>
          </div>
        </section>

        {/* Section Prochains Matchs */}
        <section className="section">
          <div className="container-custom">
            <h2 className="section-title">Prochains Matchs</h2>
            <p className="section-subtitle">
              Ne manquez aucun match des Lions de l'Atlas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prochainsMatchs.map((match) => (
                <MatchCard
                  key={match.id}
                  equipeA={match.equipeA}
                  equipeB={match.equipeB}
                  date={match.date}
                  competition={match.competition}
                  stade={match.stade}
                  ville={match.ville}
                  statut={match.statut}
                  television={match.television}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/calendrier" className="btn-outline">
                Voir le calendrier complet
              </Link>
            </div>
          </div>
        </section>

        {/* Section Joueurs Vedettes */}
        <section className="section bg-maroc-dark text-white">
          <div className="container-custom">
            <h2 className="section-title text-white">Joueurs Vedettes</h2>
            <p className="section-subtitle text-gray-300">
              Découvrez les stars qui portent fièrement le maillot national
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {joueursVedettes.map((joueur) => (
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

            <div className="mt-12 text-center">
              <Link href="/equipes" className="btn-secondary">
                Voir toute l'équipe
              </Link>
            </div>
          </div>
        </section>

        {/* Section CTA Billetterie */}
        <section className="relative py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroc-red via-maroc-green to-maroc-dark" />

          <div className="relative z-10 container-custom text-center text-white">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Supportez les Lions au Stade !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Réservez vos places dès maintenant pour vivre l'expérience unique
              de soutenir notre équipe nationale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/billetterie" className="btn bg-white text-maroc-red hover:bg-gray-100">
                Acheter des billets
              </Link>
              <Link href="/boutique" className="btn border-2 border-white text-white hover:bg-white hover:text-maroc-red">
                Boutique officielle
              </Link>
            </div>
          </div>
        </section>

        {/* Section Partenaires */}
        <section className="section bg-white">
          <div className="container-custom">
            <h3 className="text-center text-2xl font-heading font-bold mb-12 text-gray-700">
              Nos Partenaires
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {/* Logos partenaires (placeholders) */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold"
                >
                  PARTENAIRE {i}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

