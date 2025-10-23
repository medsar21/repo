import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * NewsCard Component - Premium Design
 * 
 * Modern news card with glassmorphism and smooth animations
 */

interface NewsCardProps {
  slug: string;
  titre: string;
  chapeau: string;
  image: string;
  categorie: string;
  datePublication: string;
  auteur?: string;
  featured?: boolean; // New prop for featured articles
}

const NewsCard: React.FC<NewsCardProps> = ({
  slug,
  titre,
  chapeau,
  image,
  categorie,
  datePublication,
  auteur,
  featured = false, // Default to false
}) => {
  const formattedDate = new Date(datePublication).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const categoryColors: { [key: string]: { bg: string; text: string; glow: string } } = {
    'Équipe A': { bg: 'bg-maroc-red', text: 'text-white', glow: 'rgba(193, 39, 45, 0.3)' },
    'Interviews': { bg: 'bg-maroc-green', text: 'text-white', glow: 'rgba(0, 98, 51, 0.3)' },
    'Équipe Féminine': { bg: 'bg-maroc-gold', text: 'text-maroc-dark', glow: 'rgba(212, 175, 55, 0.3)' },
    'Boutique': { bg: 'bg-blue-600', text: 'text-white', glow: 'rgba(37, 99, 235, 0.3)' },
    'Histoire': { bg: 'bg-purple-600', text: 'text-white', glow: 'rgba(147, 51, 234, 0.3)' },
    'Formation': { bg: 'bg-orange-600', text: 'text-white', glow: 'rgba(234, 88, 12, 0.3)' },
    'Billetterie': { bg: 'bg-maroc-gold', text: 'text-maroc-dark', glow: 'rgba(212, 175, 55, 0.3)' },
    'Partenaires': { bg: 'bg-gray-700', text: 'text-white', glow: 'rgba(55, 65, 81, 0.3)' },
  };

  const categoryStyle = categoryColors[categorie] || { bg: 'bg-maroc-red', text: 'text-white', glow: 'rgba(193, 39, 45, 0.3)' };

  return (
    <Link href={`/actualites/${slug}`} className="group block h-full">
      <article 
        className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
          featured ? 'lg:rounded-3xl' : ''
        }`}
        style={{
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Image Container with Overlay */}
        <div className={`relative overflow-hidden ${featured ? 'h-64 sm:h-80 lg:h-[500px]' : 'h-40 sm:h-48 md:h-56'}`}>
          <Image
            src={image}
            alt={titre}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
            style={{
              transition: 'opacity 0.4s ease',
            }}
          />
          
          {/* Category Badge */}
          <div className={`absolute z-10 ${featured ? 'top-3 left-3 sm:top-6 sm:left-6' : 'top-2 left-2 sm:top-4 sm:left-4'}`}>
            <span
              className={`${categoryStyle.bg} ${categoryStyle.text} font-bold rounded-full uppercase tracking-wider backdrop-blur-sm ${
                featured ? 'text-[10px] sm:text-xs md:text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5' : 'text-[9px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2'
              }`}
              style={{
                boxShadow: `0 4px 20px ${categoryStyle.glow}, 0 0 0 1px rgba(255,255,255,0.1)`,
              }}
            >
              {categorie}
            </span>
          </div>

          {/* Hover Icon */}
          <div className={`absolute z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
            featured ? 'top-3 right-3 sm:top-6 sm:right-6' : 'top-2 right-2 sm:top-4 sm:right-4'
          }`}>
            <div className={`bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 ${
              featured ? 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' : 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
            }`}>
              <svg className={`text-white ${featured ? 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' : 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

        </div>

        {/* Content Container */}
        <div className={`${featured ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3 sm:p-4 md:p-5'}`}>
          {/* Title */}
          <h3 
            className={`font-heading font-bold text-gray-900 group-hover:text-maroc-red transition-colors duration-300 ${
              featured 
                ? 'text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 line-clamp-2 sm:line-clamp-3' 
                : 'text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 line-clamp-2'
            }`}
            style={{
              lineHeight: featured ? '1.3' : '1.4',
            }}
          >
            {titre}
          </h3>
          
          {/* Description */}
          <p className={`text-gray-600 leading-relaxed mb-3 sm:mb-4 ${
            featured 
              ? 'text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-5' 
              : 'text-xs sm:text-sm line-clamp-2'
          }`}>
            {chapeau}
          </p>

          {/* Footer with Meta Info */}
          <div className={`flex items-center justify-between pt-2 sm:pt-3 md:pt-4 border-t border-gray-100 ${featured ? 'md:pt-5' : ''}`}>
            <div className={`flex items-center gap-1 sm:gap-2 text-gray-500 ${featured ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[9px] sm:text-[10px] md:text-xs'}`}>
              <svg className={`${featured ? 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium hidden sm:inline">{formattedDate}</span>
              <span className="font-medium sm:hidden">{new Date(datePublication).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
            </div>
            
            {auteur && (
              <div className={`flex items-center gap-1 sm:gap-2 text-gray-500 ${featured ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[9px] sm:text-[10px] md:text-xs'}`}>
                <svg className={`${featured ? 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium hidden sm:inline">{auteur}</span>
              </div>
            )}
          </div>

          {/* Read More Link */}
          <div className={`mt-2 sm:mt-3 md:mt-4 flex items-center gap-1 sm:gap-2 text-maroc-red font-semibold group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300 ${
            featured ? 'text-xs sm:text-sm md:text-base md:mt-5' : 'text-[10px] sm:text-xs md:text-sm'
          }`}>
            <span>Lire l'article</span>
            <svg className={`${featured ? 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Decorative Element */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-maroc-red via-maroc-green to-maroc-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
    />
      </article>
    </Link>
  );
};

export default NewsCard;

