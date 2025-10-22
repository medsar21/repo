import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * PlayerCard Component
 * 
 * Carte affichant les informations d'un joueur
 */

interface PlayerCardProps {
  id: string;
  nom: string;
  prenom: string;
  numero: number;
  poste: string;
  photo: string;
  club?: string;
  drapeau?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  id,
  nom,
  prenom,
  numero,
  poste,
  photo,
  club,
  drapeau,
}) => {
  return (
    <Link
      href={`/joueur/${id}`}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Numéro en arrière-plan */}
      <div className="absolute top-4 right-4 text-8xl font-heading font-black text-gray-100 opacity-50 group-hover:text-maroc-red group-hover:opacity-30 transition-all">
        {numero}
      </div>

      {/* Photo du joueur */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={photo}
          alt={`${prenom} ${nom}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Poste */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-maroc-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {poste}
          </span>
        </div>
      </div>

      {/* Informations */}
      <div className="p-5 relative">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
              {prenom}
            </p>
            <h3 className="text-2xl font-heading font-bold text-maroc-dark group-hover:text-maroc-red transition-colors">
              {nom}
            </h3>
          </div>
          
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-maroc-red text-white font-heading font-bold text-xl">
            {numero}
          </div>
        </div>

        {club && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="truncate">{club}</span>
          </div>
        )}

        {/* Indicateur hover */}
        <div className="mt-4 flex items-center text-maroc-red opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-semibold">Voir le profil</span>
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;

