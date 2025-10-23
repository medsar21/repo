'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * UpcomingEvents Component - Real Madrid Style
 * 
 * Section des prochains événements avec carousel horizontal
 */

interface Match {
  id: number;
  equipeA: {
    nom: string;
    code: string;
    drapeau: string;
    points?: number;
    position?: number;
  };
  equipeB: {
    nom: string;
    code: string;
    drapeau: string;
    points?: number;
    position?: number;
  };
  date: string;
  competition: string;
  stade?: string;
  ville?: string;
  statut: string;
  score?: {
    equipeA: number;
    equipeB: number;
  };
  isQualification?: boolean;
  groupStandings?: Array<{
    position: number;
    team: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
  }>;
}

interface UpcomingEventsProps {
  matches: Match[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ matches }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('fr-FR', options).replace(',', '.');
  };

  const getCompetitionLogo = (competition: string) => {
    // Map competition names to logos
    const logos: { [key: string]: string } = {
      'CAN': '/images/competitions/can-logo.svg',
      'Coupe du Monde': '/images/competitions/world-cup-logo.svg',
      'Match Amical': '/images/FRMF-logo.svg',
    };
    return logos[competition] || '/images/FRMF-logo.svg';
  };

  const getStadiumImage = (matchId: number, stade?: string) => {
    // Map specific matches to stadium images
    const stadiumImages: { [key: number]: string } = {
      2: '/images/MKAPA-1024x576.jpg', // Benjamin Mkapa Stadium, Tanzanie
      3: '/images/stade-mohammed-v.webp', // Stade Mohammed V, Casablanca
      4: '/images/GqrwD_gWMAAaNto.jpg', // Estadio Santiago Bernabéu, Madrid
    };
    return stadiumImages[matchId] || null;
  };

  const getTeamColors = (teamName: string) => {
    // Map team names to their flag colors
    const colors: { [key: string]: { primary: string; secondary: string } } = {
      'Maroc': { primary: '#C1272D', secondary: '#006233' },
      'Tanzanie': { primary: '#1EB53A', secondary: '#FCD116' },
      'Égypte': { primary: '#CE1126', secondary: '#FFFFFF' },
      'Espagne': { primary: '#C60B1E', secondary: '#FFC400' },
      'Gabon': { primary: '#009E60', secondary: '#FCD116' },
      'Lesotho': { primary: '#00209F', secondary: '#FFFFFF' },
    };
    return colors[teamName] || { primary: '#0a0a0a', secondary: '#1a1a1a' };
  };

  const getPlayerImages = (teamName: string) => {
    // Map team names to available player images
    const players: { [key: string]: string[] } = {
      'Maroc': ['/images/hakimi.jpg', '/images/agrd.jpg'],
      'Espagne': ['/images/diaz.jpg'],
      'Tanzanie': [],
      'Égypte': [],
      'Gabon': [],
    };
    return players[teamName] || [];
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-maroc-green rounded-full blur-3xl"
          style={{ transform: 'translate(40%, -40%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-maroc-gold rounded-full blur-3xl"
          style={{ transform: 'translate(-40%, 40%)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-maroc-green rounded-full" />
              <span className="text-sm font-bold text-maroc-green uppercase tracking-widest">
                Calendrier
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
              Prochains <span className="text-maroc-green">Événements</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Ne manquez aucun match des Lions de l'Atlas et suivez le calendrier complet
            </p>
          </div>
          
          {/* View All Link - Desktop */}
          <Link
            href="/calendrier"
            className="hidden md:flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-maroc-green"
          >
            <span className="text-maroc-green font-semibold">Voir tout le calendrier</span>
            <svg className="w-5 h-5 text-maroc-green transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center transition-all group/btn ${
              canScrollLeft ? 'opacity-100 hover:bg-maroc-green hover:border-maroc-green' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center transition-all group/btn ${
              canScrollRight ? 'opacity-100 hover:bg-maroc-green hover:border-maroc-green' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

           {/* Match Cards */}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ scrollPaddingLeft: '1.5rem' }}
          >
            {matches.map((match, index) => (
              <div
                key={match.id}
                className="flex-none w-[340px] h-[480px] opacity-0 animate-slide-in-fade-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards',
                  perspective: '1000px',
                }}
              >
                {/* Flip Card Container */}
                <div 
                  className="relative w-full h-full transition-transform duration-700 hover-flip-card" 
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                >

                  {/* FRONT SIDE */}
                  <article
                    className="absolute w-full h-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
                    }}
                  >
                    {/* Background - Stadium or Team Colors */}
                    <div className="absolute inset-0">
                      {getStadiumImage(match.id, match.stade) ? (
                        /* Stadium Image Background */
                        <>
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={getStadiumImage(match.id, match.stade)!}
                              alt={match.stade || 'Stadium'}
                              fill
                              className="object-cover"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="absolute inset-0 z-5 bg-black/50" />
                        </>
                      ) : (
                        /* Team Players Foreground */
                        <>
                          {/* Left Side - Team A Player */}
                          <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
                            {/* Color Gradient Background */}
                            <div 
                              className="absolute inset-0 z-0"
                              style={{
                                background: `linear-gradient(135deg, ${getTeamColors(match.equipeA.nom).primary} 0%, ${getTeamColors(match.equipeA.nom).secondary} 100%)`
                              }}
                            />
                            {/* Player Image - Front */}
                            {getPlayerImages(match.equipeA.nom).length > 0 && (
                              <div className="absolute inset-0 z-10">
                                <Image
                                  src={getPlayerImages(match.equipeA.nom)[0]}
                                  alt={match.equipeA.nom}
                                  fill
                                  className="object-cover"
                                  style={{ 
                                    objectPosition: 'center bottom',
                                    objectFit: 'cover',
                                  }}
                                />
                              </div>
                            )}
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/20 to-transparent" />
                          </div>
                          
                          {/* Right Side - Team B Player */}
                          <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                            {/* Color Gradient Background */}
                            <div 
                              className="absolute inset-0 z-0"
                              style={{
                                background: `linear-gradient(225deg, ${getTeamColors(match.equipeB.nom).primary} 0%, ${getTeamColors(match.equipeB.nom).secondary} 100%)`
                              }}
                            />
                            {/* Player Image - Front */}
                            {getPlayerImages(match.equipeB.nom).length > 0 && (
                              <div className="absolute inset-0 z-10">
                                <Image
                                  src={getPlayerImages(match.equipeB.nom)[0]}
                                  alt={match.equipeB.nom}
                                  fill
                                  className="object-cover"
                                  style={{ 
                                    objectPosition: 'center bottom',
                                    objectFit: 'cover',
                                  }}
                                />
                              </div>
                            )}
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-l from-black/20 to-transparent" />
                          </div>
                        </>
                      )}
                      
                      {/* Center VS Badge */}
                      <div className="absolute inset-0 flex items-center justify-center z-50">
                        <div className="relative">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-maroc-gold/30 blur-2xl rounded-full w-32 h-32 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2" />
                          {/* VS Badge */}
                          <div className="relative bg-gradient-to-br from-maroc-gold via-maroc-gold to-yellow-600 rounded-full w-24 h-24 flex items-center justify-center border-4 border-white shadow-2xl">
                            <span className="text-black font-black text-3xl tracking-wider" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>VS</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

                    {/* Match Header with Team Badges */}
                    <header className="relative z-40 pt-4 px-4">
                      <div className="flex items-start justify-between">
                        {/* Team A Badge */}
                        <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/20">
                          <div className="w-12 h-12 relative mb-2">
                            <Image
                              src={match.equipeA.drapeau}
                              alt={match.equipeA.nom}
                              fill
                              className="object-contain drop-shadow-lg"
                            />
                          </div>
                          <p className="text-white text-xs font-bold text-center">
                            {match.equipeA.code}
                          </p>
                        </div>

                        {/* Competition Badge */}
                        <div className="bg-black/60 backdrop-blur-md rounded-full p-3 border border-maroc-gold/30">
                          <div className="w-10 h-10 relative">
                            <Image
                              src={getCompetitionLogo(match.competition)}
                              alt={match.competition}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Team B Badge */}
                        <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/20">
                          <div className="w-12 h-12 relative mb-2">
                            <Image
                              src={match.equipeB.drapeau}
                              alt={match.equipeB.nom}
                              fill
                              className="object-contain drop-shadow-lg"
                            />
                          </div>
                          <p className="text-white text-xs font-bold text-center">
                            {match.equipeB.code}
                          </p>
                        </div>
                      </div>
                    </header>

                    {/* Match Details */}
                    <main className="absolute bottom-0 left-0 right-0 z-40 p-4">
                      <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs text-maroc-gold uppercase tracking-wide font-bold">
                            {match.competition}
                          </p>
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Survolez</span>
                        </div>
                        
                        <div className="space-y-1.5 text-xs text-white">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-maroc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formatDate(match.date)}</span>
                          </div>
                          {match.stade && (
                            <div className="flex items-center gap-2">
                              <svg className="w-3.5 h-3.5 text-maroc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-medium">{match.stade}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </main>
                  </article>

                  {/* BACK SIDE */}
                  <article
                    className="absolute w-full h-full rounded-2xl shadow-xl border-2 border-maroc-green overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden', 
                      transform: 'rotateY(180deg)',
                      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1f0d 50%, #0a0a0a 100%)'
                    }}
                  >
                    {/* FRMF Logo Watermark Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                      <Image
                        src="/images/FRMF-logo.svg"
                        alt=""
                        width={300}
                        height={300}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-maroc-green/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-maroc-gold/20 rounded-full blur-3xl" />

                    <div className="relative z-10 h-full p-6 flex flex-col">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{match.competition}</h3>
                        <p className="text-sm text-maroc-gold">{formatDate(match.date)}</p>
                      </div>

                      {/* Team Points (for qualifications) */}
                      {match.isQualification && (
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4">
                          <div className="flex justify-between items-center">
                            <div className="text-center flex-1">
                              <Image
                                src={match.equipeA.drapeau}
                                alt={match.equipeA.nom}
                                width={32}
                                height={32}
                                className="mx-auto mb-2"
                              />
                              <p className="text-white font-semibold text-sm">{match.equipeA.nom}</p>
                              <p className="text-maroc-gold text-2xl font-bold">{match.equipeA.points || 0}</p>
                              <p className="text-white/60 text-xs">Points</p>
                            </div>
                            <div className="text-white text-2xl font-bold px-4">VS</div>
                            <div className="text-center flex-1">
                              <Image
                                src={match.equipeB.drapeau}
                                alt={match.equipeB.nom}
                                width={32}
                                height={32}
                                className="mx-auto mb-2"
                              />
                              <p className="text-white font-semibold text-sm">{match.equipeB.nom}</p>
                              <p className="text-maroc-gold text-2xl font-bold">{match.equipeB.points || 0}</p>
                              <p className="text-white/60 text-xs">Points</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Standings Table or Match Details */}
                      <div className="flex-1 overflow-auto">
                        {match.groupStandings && match.groupStandings.length > 0 ? (
                          <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
                            <div className="bg-maroc-green/30 px-3 py-2">
                              <h4 className="text-white font-bold text-sm">Classement du Groupe</h4>
                            </div>
                            <table className="w-full text-xs">
                              <thead className="bg-white/5">
                                <tr className="text-white/70">
                                  <th className="px-2 py-2 text-left">#</th>
                                  <th className="px-2 py-2 text-left">Équipe</th>
                                  <th className="px-2 py-2 text-center">MJ</th>
                                  <th className="px-2 py-2 text-center">Pts</th>
                                </tr>
                              </thead>
                              <tbody>
                                {match.groupStandings.map((standing, idx) => (
                                  <tr 
                                    key={idx} 
                                    className={`border-b border-white/5 ${
                                      standing.team === match.equipeA.nom || standing.team === match.equipeB.nom 
                                        ? 'bg-maroc-green/20' 
                                        : ''
                                    }`}
                                  >
                                    <td className="px-2 py-2 text-white font-semibold">{standing.position}</td>
                                    <td className="px-2 py-2 text-white">{standing.team}</td>
                                    <td className="px-2 py-2 text-center text-white/70">{standing.played}</td>
                                    <td className="px-2 py-2 text-center text-maroc-gold font-bold">{standing.points}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-maroc-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              <h4 className="text-white font-bold mb-2">Match {match.isQualification ? 'de Qualification' : 'Amical'}</h4>
                              <p className="text-white/70 text-sm">
                                {match.isQualification 
                                  ? 'Qualification pour la Coupe d\'Afrique des Nations'
                                  : 'Match de préparation pour l\'équipe nationale'}
                              </p>
                              {match.television && (
                                <div className="mt-4 flex items-center justify-center gap-2 text-maroc-gold text-sm">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                  <span>Diffusé sur {match.television}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Match Info */}
                      <div className="mt-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs">{match.stade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button - Mobile */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/calendrier"
            className="inline-flex items-center gap-3 px-8 py-4 bg-maroc-green text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-maroc-green/90"
          >
            <span>Voir tout le calendrier</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

