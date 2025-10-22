import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero Component
 * 
 * Bannière éditoriale principale avec image/vidéo de fond,
 * titre, chapeau et call-to-action
 */

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  height?: 'small' | 'medium' | 'large' | 'full';
  overlay?: 'light' | 'medium' | 'dark';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '/',
  backgroundImage,
  backgroundVideo,
  height = 'large',
  overlay = 'medium',
}) => {
  const heightClasses = {
    small: 'h-[50vh]',
    medium: 'h-[60vh]',
    large: 'h-[80vh]',
    full: 'h-screen',
  };

  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Vidéo de fond (prioritaire si fournie) */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        /* Image de fond (fallback) */
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      ) : null}

          {/* Overlay gradient - Transition vers le calendrier */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          {/* Gradient de transition vers la section suivante */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  transparent 0%,
                  rgba(0, 0, 0, 0.3) 20%,
                  rgba(0, 98, 51, 0.4) 50%,
                  rgba(0, 98, 51, 0.7) 75%,
                  rgba(10, 14, 21, 0.95) 100%
                )
              `
            }}
          />

      {/* Contenu - Aligné à gauche avec animation depuis la droite */}
      <div className="relative z-10 w-full text-white pl-6 md:pl-12 lg:pl-16 pr-6">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-maroc-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4 animate-slide-in-right">
              {subtitle}
            </p>
          )}
          
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight animate-slide-in-right-delay drop-shadow-2xl">
            {title}
          </h1>

          {description && (
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-8 text-white/95 animate-slide-in-right-delay-2">
              {description}
            </p>
          )}

          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-block btn-primary text-base md:text-lg px-8 py-4 animate-slide-in-right-delay-3 shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

