'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/specific/NewsCard';
import MatchCard from '@/components/specific/MatchCard';
import PlayerCard from '@/components/specific/PlayerCard';
import UpcomingEvents from '@/components/specific/UpcomingEvents';
import Link from 'next/link';

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
  
  // Récupérer les 7 dernières actualités (1 featured + 6 grid)
  const dernieresActualites = actualites.slice(0, 7);

  // Récupérer les 3 prochains matchs
  const prochainsMatchs = matchesData
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
          backgroundImage="/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"
          height="extended"
          overlay="medium"
        />

        {/* Upcoming Events Section */}
        <UpcomingEvents matches={matchesData.filter(m => m.statut === 'a_venir').slice(0, 6)} />

        {/* Section Actualités - Masonry Layout avec Featured */}
        <section className="relative py-20 md:py-28 overflow-hidden"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(250, 250, 250, 1) 0%, 
                rgba(254, 249, 249, 1) 25%,
                rgba(255, 252, 252, 1) 50%,
                rgba(254, 249, 249, 1) 75%,
                rgba(250, 250, 250, 1) 100%
              )
            `
          }}
        >
          {/* Decorative Background Elements - Subtle Red Gradients */}
          <div className="absolute inset-0">
            {/* Top right gradient - very subtle red */}
            <div 
              className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] rounded-full blur-3xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(193, 39, 45, 0.4) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            {/* Bottom left gradient - very subtle red */}
            <div 
              className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.02] rounded-full blur-3xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(193, 39, 45, 0.3) 0%, transparent 70%)',
                transform: 'translate(-30%, 30%)',
              }}
            />
            {/* Center gradient - very subtle */}
            <div 
              className="absolute top-1/2 left-1/2 w-[800px] h-[400px] opacity-[0.015] rounded-full blur-3xl"
              style={{ 
                background: 'radial-gradient(ellipse, rgba(0, 98, 51, 0.2) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div className="flex-1">
                {/* Small Label with animation */}
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 opacity-0 animate-slide-in-fade-up">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-maroc-red to-maroc-gold rounded-full" />
                  <span className="text-xs sm:text-sm font-bold text-maroc-red uppercase tracking-widest">
                    Actualité
                  </span>
                </div>
                
                {/* Main Title with stagger animation */}
                <h2 className="font-playfair italic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2 sm:mb-4 leading-[1.1] opacity-0 animate-slide-in-fade-up"
                  style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                >
                  Dernières <span className="bg-gradient-to-r from-maroc-red to-red-600 bg-clip-text text-transparent italic">Actualités</span>
                </h2>
                
                {/* Subtitle with animation */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed opacity-0 animate-slide-in-fade-up"
                  style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                >
                  Suivez toute l'actualité des Lions de l'Atlas
                </p>
              </div>
              
              {/* View All Link - Mobile & Desktop with animation */}
              <Link
                href="/actualites"
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-maroc-red opacity-0 animate-slide-in-fade-up self-end"
                style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
              >
                <span className="text-maroc-red font-semibold text-sm sm:text-base">Voir tout</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-maroc-red transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Masonry Grid: Featured Article + Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
              {/* Featured Article - Large (Full width on mobile, left side on desktop) */}
              {dernieresActualites[0] && (
                <div 
                  className="col-span-2 lg:col-span-5 opacity-0 animate-slide-in-fade-up"
                  style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                >
                <NewsCard
                    slug={dernieresActualites[0].slug}
                    titre={dernieresActualites[0].titre}
                    chapeau={dernieresActualites[0].chapeau}
                    image={dernieresActualites[0].image}
                    categorie={dernieresActualites[0].categorie}
                    datePublication={dernieresActualites[0].datePublication}
                    auteur={dernieresActualites[0].auteur}
                    featured={true}
                  />
                </div>
              )}

              {/* Grid Container for Smaller Articles (2 columns on mobile, 2x3 grid on desktop) */}
              <div className="col-span-2 lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
                {dernieresActualites.slice(1, 7).map((actualite, index) => (
                  <div
                  key={actualite.id}
                    className="opacity-0 animate-slide-in-fade-up"
                    style={{ 
                      animationDelay: `${500 + index * 100}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <NewsCard
                  slug={actualite.slug}
                  titre={actualite.titre}
                  chapeau={actualite.chapeau}
                  image={actualite.image}
                  categorie={actualite.categorie}
                  datePublication={actualite.datePublication}
                  auteur={actualite.auteur}
                      featured={false}
                />
                  </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Section Prochains Matchs - Design Artistique Sophistiqué */}
        <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden">
          {/* Base gradient - Complex mesh */}
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(0, 98, 51, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(193, 39, 45, 0.2) 0%, transparent 50%),
                linear-gradient(180deg, 
                  #ffffff 0%,
                  #fafbfc 8%,
                  #f5f7f8 16%,
                  #eef2f3 24%,
                  #e3ebe8 32%,
                  #d5e3db 40%,
                  #c4d9cc 48%,
                  #afcdb8 56%,
                  #96bea3 64%,
                  #78a88a 72%,
                  #588e6f 78%,
                  #3a7355 84%,
                  #1f5a3d 88%,
                  rgba(0, 98, 51, 0.85) 92%,
                  rgba(20, 60, 40, 0.95) 96%,
                  rgba(10, 10, 10, 1) 100%
                )
              `
            }}
          />

          {/* Artistic overlays - Multiple layers */}
          <div className="absolute inset-0">
            {/* Organic shape 1 - Top right gold accent */}
            <div 
              className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.12] blur-3xl"
              style={{ 
                background: 'radial-gradient(ellipse 60% 80% at 40% 50%, rgba(212, 175, 55, 0.6) 0%, rgba(255, 215, 0, 0.3) 30%, transparent 70%)',
                transform: 'rotate(-25deg)',
              }}
            />
            
            {/* Organic shape 2 - Left side green flow */}
            <div 
              className="absolute top-1/4 -left-40 w-[500px] h-[800px] opacity-[0.08] blur-2xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0, 98, 51, 0.5) 0%, rgba(34, 139, 34, 0.3) 40%, transparent 70%)',
                transform: 'rotate(15deg)',
              }}
            />

            {/* Middle artistic wave - Green to dark transition */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[60%] opacity-[0.4]"
              style={{ 
                background: `
                  radial-gradient(ellipse 120% 80% at 30% 100%, rgba(0, 98, 51, 0.5) 0%, transparent 60%),
                  radial-gradient(ellipse 100% 70% at 70% 100%, rgba(193, 39, 45, 0.35) 0%, transparent 55%),
                  linear-gradient(to bottom,
                    transparent 0%,
                    rgba(0, 98, 51, 0.15) 25%,
                    rgba(0, 98, 51, 0.35) 50%,
                    rgba(0, 80, 40, 0.5) 65%,
                    rgba(193, 39, 45, 0.25) 80%,
                    rgba(10, 10, 10, 0.7) 100%
                  )
                `
              }}
            />

            {/* Organic shape 3 - Bottom right red/green blend */}
            <div 
              className="absolute bottom-0 right-0 w-[700px] h-[500px] opacity-[0.15] blur-3xl"
              style={{ 
                background: 'radial-gradient(ellipse 70% 85% at 60% 60%, rgba(193, 39, 45, 0.6) 0%, rgba(0, 98, 51, 0.4) 35%, rgba(10, 10, 10, 0.5) 60%, transparent 80%)',
                transform: 'rotate(12deg) translate(20%, 10%)',
              }}
            />

            {/* Organic shape 4 - Bottom left green depth */}
            <div 
              className="absolute bottom-0 left-0 w-[550px] h-[450px] opacity-[0.18] blur-2xl"
              style={{ 
                background: 'radial-gradient(circle at 30% 70%, rgba(0, 98, 51, 0.7) 0%, rgba(0, 60, 30, 0.4) 40%, transparent 70%)',
                transform: 'translate(-15%, 5%)',
              }}
            />

            {/* Subtle texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{ 
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px),
                  repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)
                `,
              }}
            />

            {/* Dynamic light spots */}
            <div 
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] opacity-[0.06] blur-3xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(212, 175, 55, 0.3) 40%, transparent 70%)',
              }}
            />
            
            <div 
              className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] opacity-[0.05] blur-3xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(0, 98, 51, 0.2) 50%, transparent 70%)',
              }}
            />
          </div>

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div className="flex-1">
                {/* Small Label with animation */}
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 opacity-0 animate-slide-up-bounce" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-maroc-gold to-maroc-red rounded-full" />
                  <span className="text-xs sm:text-sm font-bold text-maroc-gold uppercase tracking-widest">
                    Calendrier
                  </span>
                </div>
                
                {/* Main Title with stagger animation */}
                <h2 className="font-playfair italic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2 sm:mb-4 leading-[1.1] opacity-0 animate-slide-up-bounce"
                  style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                >
                  Prochains <span className="bg-gradient-to-r from-maroc-gold to-yellow-600 bg-clip-text text-transparent italic">Matchs</span>
                </h2>
                
                {/* Subtitle with animation */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed opacity-0 animate-slide-up-bounce"
                  style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                >
              Ne manquez aucun match des Lions de l'Atlas
            </p>
              </div>
              
              {/* View All Link */}
              <Link
                href="/calendrier"
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-maroc-gold opacity-0 animate-slide-up-bounce self-end"
                style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
              >
                <span className="text-maroc-gold font-semibold text-sm sm:text-base">Calendrier complet</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-maroc-gold transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Match Cards Grid with staggered animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {prochainsMatchs.map((match, index) => (
                <div
                  key={match.id}
                  className="opacity-0 animate-slide-up-bounce"
                  style={{ 
                    animationDelay: `${400 + index * 150}ms`,
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
                />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Joueurs Vedettes */}
        <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 text-white overflow-hidden">
          {/* Background Image - Montakhab */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/montakhab.webp"
              alt="Équipe Nationale du Maroc - Montakhab"
              fill
              className="object-cover object-center"
              priority={false}
              quality={90}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-maroc-dark/95 via-maroc-dark/85 to-maroc-dark/95" />
            {/* Additional gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-maroc-green/20 via-transparent to-maroc-red/20" />
          </div>

          <div className="container-custom relative z-10">
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

        {/* Section CTA Billetterie - Style Footer avec image */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"
              alt="Équipe du Maroc - Coupe du Monde Qatar 2022"
              fill
              className="object-cover brightness-50"
              quality={90}
              priority={false}
            />
            {/* Overlay avec couleurs du footer */}
            <div className="absolute inset-0 bg-gradient-to-br from-maroc-dark/90 via-[#0a1f1a]/85 to-maroc-green/80" />
          </div>

          {/* Contenu en haut */}
          <div className="relative z-10 container-custom pt-0">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Badge or avec bordure */}
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                <svg className="w-5 h-5 text-maroc-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-widest">
                  Billetterie Officielle
                </span>
              </div>

              {/* Titre principal */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold mb-6 leading-tight drop-shadow-2xl">
              Supportez les Lions au Stade !
            </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed drop-shadow-lg">
              Réservez vos places dès maintenant pour vivre l'expérience unique
              de soutenir notre équipe nationale
            </p>
              
              {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/billetterie" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-maroc-red hover:bg-maroc-gold hover:text-white font-bold rounded-xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-base md:text-lg">Acheter des billets</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </Link>
                
                <Link 
                  href="/boutique" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-maroc-green font-bold rounded-xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all duration-500"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-base md:text-lg">Boutique officielle</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Partenaires VIP - Design Premium */}
        <section className="relative py-16 md:py-20 overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 120% 100% at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 100% 80% at 0% 50%, rgba(0, 98, 51, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 100% 80% at 100% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
              linear-gradient(135deg,
                #0a2015 0%,
                #0f3020 15%,
                #1a4530 30%,
                #2a5a40 45%,
                #3a6850 60%,
                #4a7860 75%,
                #5a8870 85%,
                #6a9880 100%
              )
            `
          }}
        >
          {/* Decorative elements - Moroccan style */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(212, 175, 55, 0.1) 40px, rgba(212, 175, 55, 0.1) 80px),
                repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(0, 98, 51, 0.1) 40px, rgba(0, 98, 51, 0.1) 80px)
              `,
            }}
          />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-maroc-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-maroc-green/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            {/* Titre VIP Premium */}
            <div className="text-center mb-12">
              {/* Badge Premium */}
              <div className="inline-flex items-center gap-3 mb-6 px-8 py-3 bg-gradient-to-r from-maroc-gold/20 via-maroc-gold/30 to-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold/40 rounded-full shadow-2xl">
                <svg className="w-6 h-6 text-maroc-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-[0.2em] drop-shadow-lg">
                  Partenaires Officiels
                </span>
                <svg className="w-6 h-6 text-maroc-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* Titre principal premium */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-maroc-gold to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Ils nous font
                </span>
                <br />
                <span className="bg-gradient-to-r from-maroc-gold via-yellow-300 to-maroc-gold bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  confiance
                </span>
            </h3>
            
              {/* Ligne décorative dorée */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-maroc-gold to-maroc-gold rounded-full" />
                <svg className="w-8 h-8 text-maroc-gold opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-maroc-gold to-maroc-gold rounded-full" />
              </div>
            </div>

              {/* Carousel VIP - Logos plus grands */}
              <div className="relative">
                {/* Gradient gauche */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-32 md:w-40 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(10, 32, 21, 0.95) 0%, rgba(26, 69, 48, 0.6) 50%, transparent 100%)'
                  }}
                />
                
                {/* Gradient droite */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-32 md:w-40 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to left, rgba(106, 152, 128, 0.95) 0%, rgba(90, 136, 112, 0.6) 50%, transparent 100%)'
                  }}
                />

                {/* Container du carousel */}
                <div className="overflow-hidden">
                  <div className="flex animate-scroll-partners">
                    {/* Première série de logos */}
                    {[
                      { name: 'CDG', image: '/images/partners/CDG.jpg' },
                      { name: 'Afriquia', image: '/images/partners/AFRIQUIA.jpg' },
                      { name: 'Bank Al-Maghrib', image: '/images/partners/BANK-AL-MAGHRIB.jpg' },
                      { name: 'inwi', image: '/images/partners/inwi.png' },
                      { name: 'OCP', image: '/images/partners/ocp.png' },
                      { name: 'Puma', image: '/images/partners/puma.jpg' },
                      { name: 'Morocco', image: '/images/partners/morocco.png' },
                    ].map((partner, index) => (
                      <div
                        key={`partner-${index}`}
                        className="flex-shrink-0 w-72 h-44 mx-6 md:mx-8 flex items-center justify-center group cursor-pointer"
                        style={{ perspective: '1000px' }}
                      >
                        {/* Carte avec bordure dorée et effet 3D */}
                        <div 
                          className="relative w-full h-full rounded-2xl p-6 partner-card-3d"
                          style={{
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
                            border: '3px solid',
                            borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B, #D4AF37) 1',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* Logo - Noir & blanc au repos, couleur au hover */}
                          <div className="relative w-full h-full">
                            <Image
                              src={partner.image}
                              alt={partner.name}
                              fill
                              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                              sizes="288px"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Duplication pour l'effet infini */}
                    {[
                      { name: 'CDG', image: '/images/partners/CDG.jpg' },
                      { name: 'Afriquia', image: '/images/partners/AFRIQUIA.jpg' },
                      { name: 'Bank Al-Maghrib', image: '/images/partners/BANK-AL-MAGHRIB.jpg' },
                      { name: 'inwi', image: '/images/partners/inwi.png' },
                      { name: 'OCP', image: '/images/partners/ocp.png' },
                      { name: 'Puma', image: '/images/partners/puma.jpg' },
                      { name: 'Morocco', image: '/images/partners/morocco.png' },
                    ].map((partner, index) => (
                      <div
                        key={`partner-duplicate-${index}`}
                        className="flex-shrink-0 w-72 h-44 mx-6 md:mx-8 flex items-center justify-center group cursor-pointer"
                        style={{ perspective: '1000px' }}
                      >
                        {/* Carte avec bordure dorée et effet 3D */}
                        <div 
                          className="relative w-full h-full rounded-2xl p-6 partner-card-3d"
                          style={{
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
                            border: '3px solid',
                            borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B, #D4AF37) 1',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* Logo - Noir & blanc au repos, couleur au hover */}
                          <div className="relative w-full h-full">
                            <Image
                              src={partner.image}
                              alt={partner.name}
                              fill
                              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                              sizes="288px"
                            />
                          </div>
                        </div>
                </div>
              ))}
            </div>
                </div>
              </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

