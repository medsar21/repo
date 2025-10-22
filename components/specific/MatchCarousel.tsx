'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * MatchCarousel Component - Style PSG
 * 
 * Carousel horizontal pour afficher les matchs avec le style exact du PSG
 * - Coins coupés (clip-corner)
 * - Badges catégorie
 * - Barre de progression avec skew
 */

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

interface MatchCarouselProps {
  matches: Match[];
}

const MatchCarousel: React.FC<MatchCarouselProps> = ({ matches }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  // Auto-scroll function
  const autoScroll = () => {
    if (scrollContainerRef.current && !isHovered) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Si on est à la fin, revenir au début
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Sinon, avancer de 1px pour un scroll fluide
        scrollContainerRef.current.scrollLeft += 1;
      }
    }
  };

  // Setup auto-scroll
  useEffect(() => {
    if (!isHovered) {
      autoScrollIntervalRef.current = setInterval(autoScroll, 30); // 30ms = ~33 FPS
    } else {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollProgress);
      updateScrollProgress();
      return () => container.removeEventListener('scroll', updateScrollProgress);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();
    const time = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    return { day, month, time, full: `${day} ${month}.` };
  };

  const getTeamType = (teamName: string) => {
    if (teamName.includes('Féminin') || teamName.includes('-F')) return 'FEM';
    if (teamName.includes('U23') || teamName.includes('U-23')) return 'U23';
    return 'MASC';
  };

  return (
    <section
      className="relative py-20 md:py-24 -mt-32 overflow-hidden"
      style={{
        // Harmonized backdrop to match Hero's bottom fade
        background: `
          linear-gradient(180deg,
            rgba(10, 14, 21, 0.98) 0%,
            #0a0e15 25%,
            #101724 60%,
            #141b28 100%
          ),
          radial-gradient(900px 220px at 50% -120px, rgba(0, 98, 51, 0.45) 0%, transparent 70%),
          radial-gradient(600px 160px at 60% -140px, rgba(0, 0, 0, 0.35) 0%, transparent 75%)
        `,
      }}
    >
      {/* Motif géométrique subtil en arrière-plan */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Overlay dégradé pour la profondeur et continuité avec le Hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      
      {/* Dégradé subtil en tête pour masquer toute couture avec le Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,98,51,0.25) 40%, rgba(10,14,21,0.0) 100%)',
        }}
      />
      
      <div className="w-full px-0 relative z-10">
        {/* Titre PSG Style Enhanced */}
        <div className="mb-10 px-6 md:px-8">
          <h2 
            className="font-extrabold text-white inline-block relative" 
            style={{ 
              fontSize: 'var(--font-size-d-headline-3)',
              fontWeight: 'var(--font-weight-extrabold)',
              letterSpacing: 'var(--letter-spacing-tight, -.025em)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
            }}
          >
            Calendrier
            {/* Underline doré subtil */}
            <div 
              className="absolute -bottom-2 left-0 h-0.5 rounded-full"
              style={{
                width: '60px',
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.3))',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
              }}
            />
          </h2>
        </div>

        {/* Carousel avec groupe hover */}
        <div 
          className="relative group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Boutons de navigation - Premium Style */}
          <div className="hidden md:flex">
            <button
              onClick={() => scroll('left')}
              className="absolute z-10 opacity-0 top-1/2 -translate-y-1/2 left-2 group-hover/carousel:opacity-100 h-12 w-12 cursor-pointer rounded-full flex items-center justify-center text-white backdrop-blur-md hover:scale-110 active:scale-95"
              aria-label="Previous"
              style={{
                transition: 'all var(--duration-medium-1) var(--ease-standard)',
                background: 'linear-gradient(135deg, rgba(0, 98, 51, 0.9), rgba(26, 35, 50, 0.9))',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <svg aria-hidden="true" className="inline h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="absolute z-10 opacity-0 top-1/2 -translate-y-1/2 right-2 group-hover/carousel:opacity-100 h-12 w-12 cursor-pointer rounded-full flex items-center justify-center text-white backdrop-blur-md hover:scale-110 active:scale-95"
              aria-label="Next"
              style={{
                transition: 'all var(--duration-medium-1) var(--ease-standard)',
                background: 'linear-gradient(135deg, rgba(0, 98, 51, 0.9), rgba(26, 35, 50, 0.9))',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <svg aria-hidden="true" className="inline h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Container de scroll */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-6 px-6 md:px-8"
            >
              {matches.map((match, index) => {
                const { day, month, time, full } = formatDate(match.date);
                const teamType = getTeamType(match.equipeA.nom);

                return (
                  <div
                    key={match.id}
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0"
                  >
                    <div
                      className="opacity-0 animate-slide-in-fade-left"
                      style={{ animationDelay: `calc(${index} * 80ms)` }}
                    >
                      <div className={`group relative ${match.statut === 'a_venir' ? 'cursor-pointer' : 'cursor-default'}`}>
                        {/* Carte avec coins coupés - Style PSG exact + Glassmorphism */}
                        <div 
                          className="clip-corner p-lg lg:p-xl relative flex w-[220px] md:w-[293px] flex-col overflow-hidden backdrop-blur-sm"
                          style={{
                            backgroundColor: 'rgba(242, 245, 248, 0.95)',
                            transition: 'all var(--duration-medium-1) var(--ease-standard)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                          }}
                        >
                          
                          {/* Logo compétition en fond (watermark) */}
                          <img 
                            alt="" 
                            loading="lazy" 
                            width="101" 
                            height="100" 
                            className="transition-opacity duration-300 ease-in text-content-primary/5 pointer-events-none absolute -right-[5%] -bottom-[5%] h-[150px] w-[150px] opacity-5"
                            src="/images/FRMF-logo.svg"
                            style={{ color: 'transparent' }}
                          />

                          {/* Contenu */}
                          <div className="gap-lg flex h-full flex-col justify-between">
                            {/* Header: Badge + Date/Statut */}
                            <div className="typography-overline-2 gap-sm flex items-center">
                              <div className="gap-sm flex items-center">
                                <span 
                                  className="bg-background-tertiary text-white uppercase"
                                  style={{
                                    paddingLeft: 'var(--px-xs)',
                                    paddingRight: 'var(--px-xs)',
                                    paddingTop: 'var(--pt-0-75)',
                                    paddingBottom: 'var(--pb-0-5)',
                                  }}
                                >
                                  {teamType}
                                </span>
                                <div className="gap-xs flex">
                                  {match.statut === 'termine' ? (
                                    <span className="text-content-secondary">Terminé</span>
                                  ) : (
                                    <>
                                      <span className="text-content-secondary">{full}</span>
                                      <span className="text-content-black">{time}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Teams */}
                            <div className="gap-lg flex flex-col">
                              <div className="gap-md pointer-events-none flex flex-col">
                                {/* Équipe A */}
                                <div className="gap-sm flex items-center">
                                  <div className="relative">
                                    <Image
                                      src={match.equipeA.drapeau}
                                      alt={`${match.equipeA.nom} logo`}
                                      width={32}
                                      height={32}
                                      className="h-8 w-8 object-contain"
                                    />
                                  </div>
                                  <div className="typography-title-4 gap-sm top-0-5 relative flex h-8 items-center leading-none">
                                    <span>{match.equipeA.nom}</span>
                                    {match.statut === 'termine' && match.score && (
                                      <span className="text-content-secondary ml-2">
                                        {match.score.equipeA}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Équipe B */}
                                <div className="gap-sm flex items-center">
                                  <div className="relative">
                                    <Image
                                      src={match.equipeB.drapeau}
                                      alt={`${match.equipeB.nom} logo`}
                                      width={32}
                                      height={32}
                                      className="h-8 w-8 object-contain"
                                    />
                                  </div>
                                  <div className="typography-title-4 gap-sm top-0-5 relative flex h-8 items-center leading-none">
                                    <span>{match.equipeB.nom}</span>
                                    {match.statut === 'termine' && match.score && (
                                      <span className="text-content-secondary ml-2">
                                        {match.score.equipeB}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Footer - Lien "Match Center" ou vide */}
                              <div>
                                {match.statut === 'a_venir' ? (
                                  <Link
                                    href={`/calendrier#match-${match.id}`}
                                    className="typography-overline-2 gap-xs text-content-secondary hover:text-content-primary relative z-50 flex items-center"
                                    style={{
                                      transition: 'all var(--duration-medium-1) var(--ease-standard)',
                                    }}
                                  >
                                    <span>Match Center</span>
                                    <svg className="inline h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ) : (
                                  <div className="h-4" aria-hidden="true"></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicateur de progression - Style PSG Enhanced */}
          <div className="mt-11 flex items-center justify-center">
            <div 
              className="relative h-1 w-24 self-center rounded-full overflow-hidden" 
              style={{ 
                backgroundColor: 'rgba(204, 217, 226, 0.2)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              {/* Background glow */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
                }}
              />
              
              {/* Progress indicator */}
              <div
                className="absolute top-0 left-0 h-full rounded-full"
                role="progressbar"
                aria-label="Carousel progress"
                aria-valuenow={scrollProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                  width: '1rem',
                  transform: `translateX(${(scrollProgress / 100) * 80}px) skew(-20deg)`,
                  background: 'linear-gradient(135deg, #D4AF37, #F4D03F, #D4AF37)',
                  transition: 'all var(--duration-medium-1) var(--ease-standard)',
                  boxShadow: '0 0 12px rgba(212, 175, 55, 0.6), 0 0 24px rgba(212, 175, 55, 0.3)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchCarousel;
