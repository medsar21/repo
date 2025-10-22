'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * Header Component
 * 
 * Navigation principale avec mega-menu, responsive design
 * et scroll-triggered effects
 */

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Effet scroll pour le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/actualites', label: 'ACTUALITÉS' },
    { href: '/equipes', label: 'ÉQUIPES' },
    { href: '/calendrier', label: 'CALENDRIER' },
  ];

  return (
    <>
      <header
        className={`h-24 fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-lg shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className={`transition-colors duration-300 text-white bg-transparent h-full`}>
          <div className="flex h-full w-full items-center px-6 md:px-8">
            <div className="flex h-full w-full flex-row items-center gap-6 md:gap-10">
              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                className="group flex h-16 w-16 cursor-pointer flex-col items-center justify-center bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="inline h-6 w-6 transition-transform group-hover:rotate-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="mt-1.5 text-[10px] uppercase font-bold tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">menu</span>
              </button>

              {/* Logo FRMF - Plus grand */}
              <Link href="/" aria-label="home-logo" className="group relative">
                <div className="relative h-16 w-16 md:h-20 md:w-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/images/FRMF-logo.svg"
                    alt="FRMF Logo"
                    fill
                    className="object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-maroc-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </Link>

              {/* Navigation Desktop - Centre */}
              <ul className="gap-10 relative hidden h-full bg-inherit text-inherit lg:flex ml-4">
                {navLinks.map((link) => (
                  <li key={link.href} className="flex items-center h-full">
                    <Link
                      href={link.href}
                      className={`group relative flex h-full items-center text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                        pathname === link.href 
                          ? 'text-white' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Underline animation */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-maroc-gold transition-all duration-300 ${
                        pathname === link.href 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`} />
                      {/* Glow effect on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-maroc-red/0 via-maroc-gold/10 to-maroc-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    </Link>
                  </li>
                ))}
              </ul>

            {/* Actions Desktop - Droite - Tout sur la même ligne */}
            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
              {/* Se connecter */}
              <button className="group flex items-center justify-center gap-2 h-10 px-4 bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <svg aria-hidden="true" className="inline h-5 w-5 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wide">Se connecter</span>
              </button>
              
              {/* Billetterie */}
              <Link
                href="/billetterie"
                className="group relative text-sm font-semibold px-5 h-10 flex items-center justify-center rounded-lg bg-maroc-red hover:bg-maroc-red/90 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide shadow-lg hover:shadow-maroc overflow-hidden"
              >
                <span className="relative z-10">Billetterie</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              
              {/* Boutique */}
              <Link
                href="/boutique"
                className="group relative text-sm font-semibold px-5 h-10 flex items-center justify-center rounded-lg border-2 border-white/30 hover:border-maroc-gold hover:bg-maroc-gold/10 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide"
              >
                <span className="relative z-10 group-hover:text-maroc-gold transition-colors">Boutique</span>
              </Link>
              
              {/* Language Selector */}
              <button className="group flex items-center justify-center gap-1.5 h-10 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="text-sm font-bold uppercase tracking-wider">FR</span>
                <svg aria-hidden="true" className="inline h-4 w-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Amélioré */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-maroc-dark via-black to-maroc-green/20 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8" onClick={(e) => e.stopPropagation()}>
          {/* Logo Mobile Menu */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${
            isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <Image
              src="/images/FRMF-logo.svg"
              alt="FRMF Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group text-4xl md:text-5xl font-black text-white uppercase hover:text-maroc-gold transition-all duration-300 relative ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-maroc-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Divider */}
          <div className={`w-24 h-0.5 bg-maroc-gold/30 my-4 transition-all duration-700 delay-500 ${
            isMobileMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />

          {/* Action Links */}
          <Link
            href="/connexion"
            className={`text-xl font-semibold text-white/80 uppercase hover:text-maroc-gold transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Se connecter
          </Link>
          <Link
            href="/billetterie"
            className={`px-8 py-3 bg-maroc-red rounded-full text-lg font-bold text-white uppercase hover:bg-maroc-red/80 transition-all duration-300 hover:scale-105 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Billetterie
          </Link>
          <Link
            href="/boutique"
            className={`px-8 py-3 border-2 border-white/30 rounded-full text-lg font-bold text-white uppercase hover:border-maroc-gold hover:text-maroc-gold transition-all duration-300 hover:scale-105 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Boutique
          </Link>

          {/* Language Selector */}
          <button className={`flex items-center gap-2 text-white/60 mt-4 hover:text-white transition-colors duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="text-lg font-semibold uppercase">FR</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Footer */}
          <p className={`text-sm text-white/40 mt-8 transition-all duration-700 delay-900 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            © 2024 FRMF - Tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;

