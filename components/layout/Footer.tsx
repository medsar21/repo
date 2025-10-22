'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer Component - Style PSG
 * 
 * Footer moderne avec "DIMA MAGHRIB"
 */

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-maroc-dark via-[#0a1f1a] to-maroc-green/20 text-white relative overflow-hidden border-t-4 border-maroc-gold">
      <div className="container mx-auto px-6 md:px-8">
        {/* Footer Top - Grid de liens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 md:py-16">
          {/* Colonne 1 - Équipe Nationale du Maroc */}
          <div>
            <h3 className="text-base font-semibold text-white/60 mb-6 tracking-wide">
              Équipe Nationale du Maroc
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/actualites" className="text-sm text-white/80 hover:text-white transition-colors">
                  Actualité
                </Link>
              </li>
              <li>
                <Link href="/equipes" className="text-sm text-white/80 hover:text-white transition-colors">
                  Football masculin
                </Link>
              </li>
              <li>
                <Link href="/equipes" className="text-sm text-white/80 hover:text-white transition-colors">
                  Football féminin
                </Link>
              </li>
              <li>
                <Link href="/calendrier" className="text-sm text-white/80 hover:text-white transition-colors">
                  Calendrier
                </Link>
              </li>
              <li>
                <Link href="/club" className="text-sm text-white/80 hover:text-white transition-colors">
                  Le Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h3 className="text-base font-semibold text-white/60 mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/connexion" className="text-sm text-white/80 hover:text-white transition-colors">
                  Mon compte
                </Link>
              </li>
              <li>
                <Link href="/billetterie" className="text-sm text-white/80 hover:text-white transition-colors">
                  Billetterie
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-sm text-white/80 hover:text-white transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - À propos */}
          <div>
            <h3 className="text-base font-semibold text-white/60 mb-6 tracking-wide">
              À propos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions" className="text-sm text-white/80 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/donnees" className="text-sm text-white/80 hover:text-white transition-colors">
                  Données personnelles
                </Link>
              </li>
              <li>
                <Link href="/accessibilite" className="text-sm text-white/80 hover:text-white transition-colors">
                  Déclaration d'accessibilité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-white/80 hover:text-white transition-colors">
                  Préférences cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - App Download */}
          <div>
            <h3 className="text-base font-semibold text-white/60 mb-6 tracking-wide">
              Téléchargez notre app
            </h3>
            <p className="text-sm text-white/70 mb-6">
              L'app de tous les fans des Lions de l'Atlas disponible pour iOS et Android!
            </p>
            
            {/* App Store Buttons */}
            <div className="space-y-3">
              <a
                href="#"
                className="block w-full max-w-[200px] h-12 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 flex items-center justify-center gap-2 transition-colors group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 leading-tight">Télécharger dans</div>
                  <div className="text-sm font-semibold leading-tight">l'App Store</div>
                </div>
              </a>
              
              <a
                href="#"
                className="block w-full max-w-[200px] h-12 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 flex items-center justify-center gap-2 transition-colors group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 leading-tight">DISPONIBLE SUR</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Grande bannière DIMA MAGHRIB - Style PSG */}
        <div className="relative py-12 md:py-20 overflow-hidden">
          {/* Logo FRMF en arrière-plan */}
          <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 opacity-10">
            <Image
              src="/images/FRMF-logo.svg"
              alt="FRMF"
              width={300}
              height={300}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
            />
          </div>

          {/* Texte DIMA MAGHRIB */}
          <div className="relative z-10">
            <h2 className="font-heading font-black uppercase leading-[0.85] tracking-tight">
              <span className="block text-white/30 text-[clamp(2rem,8vw,6rem)] mb-2 tracking-[0.3em]">
                DIMA
              </span>
              <span className="block text-white text-[clamp(3rem,15vw,12rem)]">
                MAGHRIB
              </span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

