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

interface SubMenuItem {
  label: string;
  href?: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  children?: SubMenuItem[];
}

// Composant pour les éléments de menu avec sous-menus
interface MobileMenuItemProps {
  item: MenuItem | SubMenuItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  level: number;
  parentKey: string;
  openSubMenus: { [key: string]: boolean };
  toggleSubMenu: (key: string) => void;
  closeMenu: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
  level,
  parentKey,
  openSubMenus,
  toggleSubMenu,
  closeMenu,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = `${(level + 1) * 12}px`;

  return (
    <div className="mb-1">
      {hasChildren ? (
        // Élément avec sous-menu
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 group ${
            isOpen
              ? 'bg-maroc-gold/20 text-white'
              : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white'
          }`}
          style={{ paddingLeft: level === 0 ? '12px' : paddingLeft }}
        >
          <span className={`font-semibold ${level === 0 ? 'text-base uppercase tracking-wide' : 'text-sm'}`}>
            {item.label}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-maroc-gold' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ) : (
        // Élément simple sans sous-menu
        <Link
          href={item.href || '#'}
          onClick={closeMenu}
          className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-300 group ${
            level === 0
              ? 'bg-white/5 hover:bg-maroc-gold/20 text-white/90 hover:text-white font-semibold text-base uppercase tracking-wide'
              : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm'
          }`}
          style={{ paddingLeft: level === 0 ? '12px' : paddingLeft }}
        >
          <span className="flex-1">{item.label}</span>
          <svg
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}

      {/* Sous-menu avec animation slide */}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`mt-1 space-y-1 ${isOpen ? 'animate-slide-in-fade-up' : ''}`}>
            {item.children!.map((child, childIndex) => (
              <MobileMenuItem
                key={`${parentKey}-child-${childIndex}`}
                item={child}
                index={childIndex}
                isOpen={openSubMenus[`${parentKey}-child-${childIndex}`] || false}
                onToggle={() => toggleSubMenu(`${parentKey}-child-${childIndex}`)}
                level={level + 1}
                parentKey={`${parentKey}-child-${childIndex}`}
                openSubMenus={openSubMenus}
                toggleSubMenu={toggleSubMenu}
                closeMenu={closeMenu}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
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
    setOpenSubMenus({});
  }, [pathname]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navLinks = [
    { href: '/actualites', label: 'ACTUALITÉS' },
    { href: '/equipes', label: 'ÉQUIPES' },
    { href: '/calendrier', label: 'CALENDRIER' },
  ];

  // Structure complète du menu mobile
  const mobileMenuItems: MenuItem[] = [
    {
      label: 'Accueil',
      href: '/'
    },
    {
      label: 'FRMF',
      children: [
        { label: 'Comité Directeur', href: '/frmf/comite-directeur' },
        { label: 'Administration', href: '/frmf/administration' },
        { label: 'Textes réglementaires', href: '/frmf/textes-reglementaires' },
        { label: 'Communiqués', href: '/frmf/communiques' },
        { label: 'Appels d\'offres', href: '/frmf/appels-offres' },
        { label: 'Appel à candidature', href: '/frmf/appel-candidature' },
        { label: 'Histoire', href: '/frmf/histoire' },
      ]
    },
    {
      label: 'Équipes nationales',
      children: [
        {
          label: 'E.N. A',
          href: '/equipes/nationale-a',
          children: [
            { label: 'Actualités', href: '/equipes/nationale-a/actualites' },
            { label: 'Staff', href: '/equipes/nationale-a/staff' },
            { label: 'Résultats', href: '/equipes/nationale-a/resultats' },
          ]
        },
        {
          label: 'E.N. U23',
          href: '/equipes/u23',
          children: [
            { label: 'Actualités', href: '/equipes/u23/actualites' },
            { label: 'Staff', href: '/equipes/u23/staff' },
            { label: 'Résultats', href: '/equipes/u23/resultats' },
          ]
        },
        {
          label: 'E.N. U20',
          href: '/equipes/u20',
          children: [
            { label: 'Actualités', href: '/equipes/u20/actualites' },
            { label: 'Staff', href: '/equipes/u20/staff' },
            { label: 'Résultats', href: '/equipes/u20/resultats' },
          ]
        },
        {
          label: 'E.N. U17',
          href: '/equipes/u17',
          children: [
            { label: 'Actualités', href: '/equipes/u17/actualites' },
            { label: 'Staff', href: '/equipes/u17/staff' },
            { label: 'Résultats', href: '/equipes/u17/resultats' },
          ]
        },
        {
          label: 'Féminine',
          children: [
            {
              label: 'Féminine A',
              href: '/equipes/feminine-a',
              children: [
                { label: 'Actualités', href: '/equipes/feminine-a/actualites' },
                { label: 'Staff', href: '/equipes/feminine-a/staff' },
                { label: 'Résultats', href: '/equipes/feminine-a/resultats' },
              ]
            },
            {
              label: 'Féminine U20',
              href: '/equipes/feminine-u20',
              children: [
                { label: 'Actualités', href: '/equipes/feminine-u20/actualites' },
                { label: 'Staff', href: '/equipes/feminine-u20/staff' },
                { label: 'Résultats', href: '/equipes/feminine-u20/resultats' },
              ]
            },
          ]
        },
        {
          label: 'Futsal',
          children: [
            {
              label: 'Futsal A',
              href: '/equipes/futsal-a',
              children: [
                { label: 'Actualités', href: '/equipes/futsal-a/actualites' },
                { label: 'Staff', href: '/equipes/futsal-a/staff' },
                { label: 'Résultats', href: '/equipes/futsal-a/resultats' },
              ]
            },
            {
              label: 'Futsal U19',
              href: '/equipes/futsal-u19',
              children: [
                { label: 'Actualités', href: '/equipes/futsal-u19/actualites' },
                { label: 'Staff', href: '/equipes/futsal-u19/staff' },
                { label: 'Résultats', href: '/equipes/futsal-u19/resultats' },
              ]
            },
          ]
        },
        {
          label: 'Beach Soccer',
          href: '/equipes/beach-soccer',
          children: [
            { label: 'Actualités', href: '/equipes/beach-soccer/actualites' },
            { label: 'Staff', href: '/equipes/beach-soccer/staff' },
            { label: 'Résultats', href: '/equipes/beach-soccer/resultats' },
          ]
        },
      ]
    },
    {
      label: 'Compétitions',
      children: [
        {
          label: 'Coupe du Trône',
          href: '/competitions/coupe-du-trone',
          children: [
            { label: 'Programme', href: '/competitions/coupe-du-trone/programme' },
            { label: 'Résultats', href: '/competitions/coupe-du-trone/resultats' },
            { label: 'Communiqués', href: '/competitions/coupe-du-trone/communiques' },
            { label: 'Palmarès', href: '/competitions/coupe-du-trone/palmares' },
          ]
        },
        {
          label: 'Championnat Féminin',
          children: [
            {
              label: 'D1',
              href: '/competitions/feminine/d1',
              children: [
                { label: 'Programme', href: '/competitions/feminine/d1/programme' },
                { label: 'Résultats', href: '/competitions/feminine/d1/resultats' },
                { label: 'Classement', href: '/competitions/feminine/d1/classement' },
              ]
            },
            {
              label: 'D2',
              href: '/competitions/feminine/d2',
              children: [
                { label: 'Programme', href: '/competitions/feminine/d2/programme' },
                { label: 'Résultats', href: '/competitions/feminine/d2/resultats' },
                { label: 'Classement', href: '/competitions/feminine/d2/classement' },
              ]
            },
          ]
        },
        {
          label: 'Championnat de Futsal',
          children: [
            {
              label: 'D1',
              href: '/competitions/futsal/d1',
              children: [
                { label: 'Programme', href: '/competitions/futsal/d1/programme' },
                { label: 'Résultats', href: '/competitions/futsal/d1/resultats' },
                { label: 'Classement', href: '/competitions/futsal/d1/classement' },
              ]
            },
            {
              label: 'D2',
              href: '/competitions/futsal/d2',
              children: [
                { label: 'Programme', href: '/competitions/futsal/d2/programme' },
                { label: 'Résultats', href: '/competitions/futsal/d2/resultats' },
                { label: 'Classement', href: '/competitions/futsal/d2/classement' },
              ]
            },
          ]
        },
      ]
    },
    {
      label: 'DTN',
      href: '/dtn',
      children: [
        { label: 'Staff', href: '/dtn/staff' },
        { label: 'Communiqués', href: '/dtn/communiques' },
        { label: 'Vidéothèque', href: '/dtn/videotheque' },
        { label: 'Photothèque', href: '/dtn/phototheque' },
      ]
    },
    {
      label: 'Arbitrage',
      children: [
        { label: 'Communiqués', href: '/arbitrage/communiques' },
        { label: 'Désignations', href: '/arbitrage/designations' },
        { label: 'Textes Réglementaires', href: '/arbitrage/textes-reglementaires' },
      ]
    },
    {
      label: 'Média',
      children: [
        { label: 'Communiqués', href: '/media/communiques' },
        { label: 'Média Channel', href: '/media/channel' },
      ]
    },
    {
      label: 'Partenaires',
      href: '/partenaires'
    },
  ];

  return (
    <>
      <header
        className={`h-20 fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-lg shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className={`transition-colors duration-300 text-white bg-transparent h-full`}>
          <div className="flex h-full w-full items-center px-4 md:px-6">
            <div className="flex h-full w-full flex-row items-center justify-between gap-4 md:gap-8">
              {/* Menu Button - Toujours à gauche */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                className="group flex h-12 w-12 cursor-pointer flex-col items-center justify-center bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="inline h-5 w-5 transition-transform group-hover:rotate-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="mt-1 text-[9px] uppercase font-bold tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">menu</span>
              </button>

              {/* Navigation Desktop - Centre (caché sur mobile) */}
              <ul className="gap-6 relative hidden h-full bg-inherit text-inherit lg:flex">
                {navLinks.map((link) => (
                  <li key={link.href} className="flex items-center h-full">
                    <Link
                      href={link.href}
                      className={`group relative flex h-full items-center text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
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

              {/* Logo FRMF - À droite sur mobile, après la nav sur desktop */}
              <Link href="/" aria-label="home-logo" className="group relative lg:order-first lg:ml-2">
                <div className="relative h-12 w-12 md:h-14 md:w-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
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

            {/* Actions Desktop - Droite - Tout sur la même ligne */}
            <div className="hidden flex-1 items-center justify-end gap-3 lg:flex">
              {/* Se connecter */}
              <button className="group flex items-center justify-center gap-1.5 h-9 px-3 bg-transparent rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <svg aria-hidden="true" className="inline h-4 w-4 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wide">Se connecter</span>
              </button>
              
              {/* Billetterie */}
              <Link
                href="/billetterie"
                className="group relative text-xs font-semibold px-4 h-9 flex items-center justify-center rounded-lg bg-maroc-red hover:bg-maroc-red/90 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide shadow-lg hover:shadow-maroc overflow-hidden"
              >
                <span className="relative z-10">Billetterie</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              
              {/* Boutique */}
              <Link
                href="/boutique"
                className="group relative text-xs font-semibold px-4 h-9 flex items-center justify-center rounded-lg border-2 border-white/30 hover:border-maroc-gold hover:bg-maroc-gold/10 transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wide"
              >
                <span className="relative z-10 group-hover:text-maroc-gold transition-colors">Boutique</span>
              </Link>
              
              {/* Language Selector */}
              <button className="group flex items-center justify-center gap-1 h-9 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="text-xs font-bold uppercase tracking-wider">FR</span>
                <svg aria-hidden="true" className="inline h-3 w-3 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay - Menu complet style FRMF (Desktop & Mobile) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Panel - Slide from right (Desktop & Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-md lg:max-w-lg bg-gradient-to-br from-maroc-dark via-[#0a1f1a] to-maroc-green z-50 transform transition-transform duration-500 ease-out overflow-hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px),
              repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 98, 51, 0.1) 20px, rgba(0, 98, 51, 0.1) 40px)
            `,
          }}
        />

        {/* Header du menu */}
        <div className="relative flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/FRMF-logo.svg"
              alt="FRMF Logo"
              width={40}
              height={40}
              className="object-contain drop-shadow-lg"
            />
            <span className="text-white font-bold text-lg uppercase tracking-wider">Menu</span>
          </div>
          <button
              onClick={() => setIsMobileMenuOpen(false)}
            className="group p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Fermer le menu"
          >
            <svg className="w-6 h-6 text-white transition-transform group-hover:rotate-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu scrollable du menu */}
        <div className="relative h-[calc(100%-80px)] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-maroc-gold/30 scrollbar-track-transparent">
          <nav className="p-4 pb-20">
            {mobileMenuItems.map((item, index) => (
              <MobileMenuItem
                key={`menu-${index}`}
                item={item}
                index={index}
                isOpen={openSubMenus[`menu-${index}`] || false}
                onToggle={() => toggleSubMenu(`menu-${index}`)}
                level={0}
                parentKey={`menu-${index}`}
                openSubMenus={openSubMenus}
                toggleSubMenu={toggleSubMenu}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
          ))}

          {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-maroc-gold/30 to-transparent my-6" />

            {/* Action Buttons */}
            <div className="space-y-3 px-2">
          <Link
            href="/connexion"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            Se connecter
          </Link>

          <Link
            href="/billetterie"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-maroc-red hover:bg-maroc-red/90 rounded-lg text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
            Billetterie
          </Link>

          <Link
            href="/boutique"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-maroc-gold/50 hover:border-maroc-gold hover:bg-maroc-gold/10 rounded-lg text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            Boutique
          </Link>

          {/* Language Selector */}
              <button className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white text-sm font-semibold uppercase transition-all duration-300">
                <span>FR</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
            </div>

          {/* Footer */}
            <div className="mt-8 px-2">
              <p className="text-xs text-white/40 text-center">
            © 2024 FRMF - Tous droits réservés
          </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

