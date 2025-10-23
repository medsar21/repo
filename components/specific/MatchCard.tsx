import React from 'react';
import Image from 'next/image';

/**
 * MatchCard Component - Premium Design
 * 
 * Carte affichant les informations d'un match avec animation moderne
 */

interface MatchCardProps {
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
  statut: 'a_venir' | 'en_cours' | 'termine' | string;
  score?: {
    equipeA: number;
    equipeB: number;
  };
  television?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  equipeA,
  equipeB,
  date,
  competition,
  stade,
  ville,
  statut,
  score,
  television,
}) => {
  const matchDate = new Date(date);
  const isMarocHome = equipeA.code === 'MAR';
  const isMarocAway = equipeB.code === 'MAR';
  const isMarocMatch = isMarocHome || isMarocAway;

  return (
    <div
      className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(193,39,45,0.4)] transform hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] md:hover:scale-[1.02]"
      style={{
        boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Decorative gradient bar - animated on hover */}
      <div 
        className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-maroc-red via-maroc-gold to-maroc-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
      />

      {/* En-tête avec glassmorphism effect - Optimisé mobile */}
      <div className="relative bg-gradient-to-br from-maroc-red/5 via-transparent to-maroc-green/5 backdrop-blur-sm px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4">
        <div className="flex items-center justify-between">
          <span 
            className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r from-maroc-red to-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wide md:tracking-widest rounded-full shadow-md md:shadow-lg"
            style={{
              boxShadow: '0 2px 10px rgba(193, 39, 45, 0.3)',
            }}
          >
            <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <span className="truncate max-w-[120px] md:max-w-none">{competition}</span>
          </span>
          
          {statut === 'en_cours' && (
            <span className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              <span className="relative">EN DIRECT</span>
            </span>
          )}

          {statut === 'a_venir' && (
            <div className="flex items-center gap-2 text-maroc-green">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Équipes et Score - Design moderne optimisé mobile */}
      <div className="px-3 md:px-6 py-4 md:py-8">
        <div className="flex items-center justify-between gap-2 md:gap-6">
          {/* Équipe A */}
          <div className="flex-1 flex flex-col items-center text-center group/team">
            <div 
              className="relative w-12 h-12 md:w-20 md:h-20 mb-2 md:mb-4 rounded-full p-1.5 md:p-3 bg-gradient-to-br from-gray-50 to-white shadow-md md:shadow-lg transform transition-all duration-500 group-hover/team:scale-110 group-hover/team:rotate-6"
              style={{
                boxShadow: '0 4px 15px -5px rgba(0,0,0,0.2)',
              }}
            >
              <Image
                src={equipeA.drapeau}
                alt={equipeA.nom}
                fill
                className="object-contain p-1 md:p-2"
              />
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-xs md:text-base mb-1 transition-colors duration-300 group-hover/team:text-maroc-red line-clamp-1">
              {equipeA.nom}
            </h3>
            <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-600 text-[9px] md:text-xs font-bold uppercase rounded-full">
              {equipeA.code}
            </span>
          </div>

          {/* Score ou VS - Centre avec design élégant optimisé mobile */}
          <div className="flex flex-col items-center flex-shrink-0">
            {statut === 'termine' && score ? (
              <div className="flex items-center gap-2 md:gap-5">
                <span className="text-3xl md:text-5xl font-playfair italic font-bold text-maroc-red">
                  {score.equipeA}
                </span>
                <div className="flex flex-col items-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-300">—</span>
                  <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase mt-0.5 md:mt-1">Final</span>
                </div>
                <span className="text-3xl md:text-5xl font-playfair italic font-bold text-maroc-red">
                  {score.equipeB}
                </span>
              </div>
            ) : (
              <div className="relative">
                <div 
                  className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-maroc-gold to-yellow-600 flex items-center justify-center shadow-lg md:shadow-xl transform group-hover:rotate-180 transition-transform duration-700"
                  style={{
                    boxShadow: '0 4px 20px -5px rgba(212, 175, 55, 0.6)',
                  }}
                >
                  <span className="text-sm md:text-2xl font-playfair italic font-black text-white">VS</span>
                </div>
              </div>
            )}
            
            {statut === 'a_venir' && (
              <div className="mt-2 md:mt-4 text-center px-2 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-maroc-green/10 to-maroc-green/5 rounded-lg md:rounded-xl border border-maroc-green/20">
                <p className="text-[10px] md:text-sm font-bold text-maroc-green flex items-center gap-1 md:gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden md:inline">{matchDate.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                  })}</span>
                  <span className="md:hidden">{matchDate.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'short',
                  })}</span>
                </p>
                <p className="text-sm md:text-lg font-playfair italic font-bold text-gray-700 mt-0.5 md:mt-1">
                  {matchDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            )}
          </div>

          {/* Équipe B */}
          <div className="flex-1 flex flex-col items-center text-center group/team">
            <div 
              className="relative w-12 h-12 md:w-20 md:h-20 mb-2 md:mb-4 rounded-full p-1.5 md:p-3 bg-gradient-to-br from-gray-50 to-white shadow-md md:shadow-lg transform transition-all duration-500 group-hover/team:scale-110 group-hover/team:-rotate-6"
              style={{
                boxShadow: '0 4px 15px -5px rgba(0,0,0,0.2)',
              }}
            >
              <Image
                src={equipeB.drapeau}
                alt={equipeB.nom}
                fill
                className="object-contain p-1 md:p-2"
              />
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-xs md:text-base mb-1 transition-colors duration-300 group-hover/team:text-maroc-red line-clamp-1">
              {equipeB.nom}
            </h3>
            <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-600 text-[9px] md:text-xs font-bold uppercase rounded-full">
              {equipeB.code}
            </span>
          </div>
        </div>

        {/* Informations supplémentaires - Design Premium */}
        {(stade || television) && (
          <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
            {stade && ville && (
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 group/info hover:border-maroc-green transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-maroc-green to-green-600 rounded-full flex items-center justify-center shadow-md group-hover/info:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Stade</p>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {stade}, <span className="text-maroc-green">{ville}</span>
                  </p>
                </div>
              </div>
            )}
            
            {television && (
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 group/info hover:border-blue-400 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md group-hover/info:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Diffusion</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{television}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bouton CTA - Design moderne avec animation optimisé mobile */}
        {statut !== 'termine' && (
          <button 
            className="mt-4 md:mt-6 w-full bg-gradient-to-r from-maroc-red to-red-600 hover:from-maroc-red hover:to-maroc-red text-white font-bold py-2.5 md:py-4 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 group/btn"
            style={{
              boxShadow: '0 4px 15px -5px rgba(193, 39, 45, 0.4)',
            }}
          >
            <span className="text-xs md:text-base">
              {statut === 'en_cours' ? 'Suivre en direct' : 'Plus d\'infos'}
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchCard;

