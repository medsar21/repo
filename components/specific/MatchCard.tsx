import React from 'react';
import Image from 'next/image';

/**
 * MatchCard Component
 * 
 * Carte affichant les informations d'un match
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
  statut: 'a_venir' | 'en_cours' | 'termine';
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
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        isMarocMatch ? 'ring-2 ring-maroc-red' : ''
      }`}
    >
      {/* En-tête */}
      <div className="bg-gradient-to-r from-maroc-red to-maroc-green p-4">
        <div className="flex items-center justify-between text-white">
          <span className="text-xs font-bold uppercase tracking-wide">
            {competition}
          </span>
          {statut === 'en_cours' && (
            <span className="flex items-center gap-1 text-xs font-bold animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              EN DIRECT
            </span>
          )}
        </div>
      </div>

      {/* Équipes et Score */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          {/* Équipe A */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src={equipeA.drapeau}
                alt={equipeA.nom}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-maroc-dark text-sm">
              {equipeA.nom}
            </h3>
            <span className="text-xs text-gray-500 uppercase">
              {equipeA.code}
            </span>
          </div>

          {/* Score ou VS */}
          <div className="flex flex-col items-center">
            {statut === 'termine' && score ? (
              <div className="flex items-center gap-4">
                <span className="text-4xl font-heading font-black text-maroc-dark">
                  {score.equipeA}
                </span>
                <span className="text-2xl font-bold text-gray-400">-</span>
                <span className="text-4xl font-heading font-black text-maroc-dark">
                  {score.equipeB}
                </span>
              </div>
            ) : (
              <div className="text-2xl font-heading font-black text-maroc-gold">
                VS
              </div>
            )}
            
            {statut === 'a_venir' && (
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-700">
                  {matchDate.toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </p>
                <p className="text-xs text-gray-500">
                  {matchDate.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            )}
          </div>

          {/* Équipe B */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="relative w-16 h-16 mb-3">
              <Image
                src={equipeB.drapeau}
                alt={equipeB.nom}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-maroc-dark text-sm">
              {equipeB.nom}
            </h3>
            <span className="text-xs text-gray-500 uppercase">
              {equipeB.code}
            </span>
          </div>
        </div>

        {/* Informations supplémentaires */}
        {(stade || television) && (
          <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
            {stade && ville && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">
                  {stade}, {ville}
                </span>
              </div>
            )}
            
            {television && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{television}</span>
              </div>
            )}
          </div>
        )}

        {/* Bouton CTA */}
        {statut !== 'termine' && (
          <button className="mt-4 w-full btn-outline text-sm py-2">
            {statut === 'en_cours' ? 'Suivre le match' : 'Match Center'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchCard;

