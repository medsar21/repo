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
  height?: 'small' | 'medium' | 'large' | 'full' | 'extended';
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
    extended: 'h-[120vh]',
  };

  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-end justify-center overflow-hidden pb-20 md:pb-24 lg:pb-32`}>
      {/* Background - Vidéo pour desktop, Image pour mobile */}
      {backgroundVideo && (
        <>
          {/* Vidéo de fond pour desktop uniquement */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={backgroundImage || "/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"}
            className="hidden md:block absolute inset-0 w-full h-full object-cover brightness-110 z-0"
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          
          {/* Image de fond pour mobile (performance optimisée) */}
          <div className="block md:hidden absolute inset-0 z-0">
            <Image
              src={backgroundImage || "/images/Equipe-maroc-coupe-du-monde-qatar-2022.jpg"}
              alt={title}
              fill
              className="object-cover brightness-90"
              priority
              quality={75}
              sizes="100vw"
            />
          </div>
        </>
      )}
      
      {/* Fallback si pas de vidéo */}
      {!backgroundVideo && backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      )}

          {/* Overlay gradient - Transition vers le calendrier */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          
          {/* Gradient de transition vers la section suivante - Transition to white */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  transparent 0%,
                  rgba(0, 0, 0, 0.2) 25%,
                  rgba(249, 250, 251, 0.5) 70%,
                  rgba(249, 250, 251, 1) 100%
                )
              `
            }}
          />

      {/* Contenu - Aligné à gauche avec animation depuis la droite */}
      <div className="relative z-10 w-full text-white pl-6 md:pl-12 lg:pl-16 pr-6">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="font-playfair italic text-maroc-gold font-semibold tracking-wide text-sm md:text-base lg:text-lg mb-4 animate-slide-in-right drop-shadow-lg" style={{ letterSpacing: '0.05em' }}>
              {subtitle}
            </p>
          )}
          
          <h1 className="font-playfair italic font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 leading-[1.1] animate-slide-in-right-delay drop-shadow-2xl" style={{ fontWeight: 700 }}>
            {title}
          </h1>

          {description && (
            <p className="font-playfair italic text-base md:text-lg lg:text-xl max-w-2xl mb-7 text-white/95 animate-slide-in-right-delay-2 leading-relaxed drop-shadow-lg">
              {description}
            </p>
          )}

          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-block btn-primary font-playfair italic text-sm md:text-base lg:text-lg px-7 py-3.5 animate-slide-in-right-delay-3 shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
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

