'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import des données
import joueurs from '@/data/joueurs.json';

/**
 * Page Détails d'un Joueur
 * 
 * Affiche toutes les informations détaillées d'un joueur
 */

export default function JoueurPage() {
  const params = useParams();
  const id = params.id as string;

  // Trouver le joueur
  const joueur = joueurs.find(j => j.id === id);

  if (!joueur) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Joueur non trouvé</p>
            <Link href="/equipes" className="btn-primary">
              Retour aux équipes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Calculer l'âge
  const age = Math.floor((new Date().getTime() - new Date(joueur.dateNaissance).getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-red via-maroc-dark to-maroc-green py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src={joueur.photo}
              alt={joueur.nom}
              fill
              className="object-cover opacity-10 blur-sm"
            />
          </div>
          
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/equipes" className="hover:text-white transition-colors">Équipes</Link>
              <span>/</span>
              <span className="text-white">{joueur.nom}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo du joueur */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={joueur.photo}
                  alt={joueur.nom}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-maroc-red text-white px-6 py-3 rounded-full font-bold text-4xl">
                  #{joueur.numero}
                </div>
              </div>

              {/* Informations principales */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                  <span className="text-sm font-bold text-maroc-gold uppercase tracking-widest">
                    {joueur.poste}
                  </span>
                </div>

                <h1 className="font-playfair italic text-5xl md:text-6xl font-bold mb-2">
                  {joueur.prenom}
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-maroc-gold mb-6">
                  {joueur.nom.toUpperCase()}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-maroc-gold mb-1">{age}</div>
                    <div className="text-sm text-white/80">Âge</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-maroc-gold mb-1">{joueur.stats.selections}</div>
                    <div className="text-sm text-white/80">Sélections</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-maroc-gold mb-1">{joueur.stats.buts}</div>
                    <div className="text-sm text-white/80">Buts</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-maroc-gold mb-1">{joueur.prixMarche || 'N/A'}</div>
                    <div className="text-sm text-white/80">Valeur</div>
                  </div>
                </div>

                {/* Club actuel */}
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-maroc-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{joueur.club}</div>
                    <div className="text-white/70 text-sm">{joueur.ligue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques détaillées */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
              <div className="w-2 h-8 bg-maroc-red rounded-full" />
              Statistiques avec le Maroc
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-maroc-red/20 hover:border-maroc-red transition-colors">
                <div className="text-5xl font-bold text-maroc-red mb-2">{joueur.stats.selections}</div>
                <div className="text-gray-600 font-semibold">Sélections</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-maroc-green/20 hover:border-maroc-green transition-colors">
                <div className="text-5xl font-bold text-maroc-green mb-2">{joueur.stats.buts}</div>
                <div className="text-gray-600 font-semibold">Buts</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-maroc-gold/20 hover:border-maroc-gold transition-colors">
                <div className="text-5xl font-bold text-maroc-gold mb-2">{joueur.stats.passeDecisives}</div>
                <div className="text-gray-600 font-semibold">Passes Décisives</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-yellow-400/20 hover:border-yellow-400 transition-colors">
                <div className="text-5xl font-bold text-yellow-600 mb-2">{joueur.stats.cartonJaunes}</div>
                <div className="text-gray-600 font-semibold">Cartons Jaunes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Biographie */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Biographie */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-maroc-green rounded-full" />
                  Biographie
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {joueur.biographie}
                </p>

                {/* Informations complémentaires */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Date de naissance</div>
                    <div className="font-bold">{new Date(joueur.dateNaissance).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                  </div>

                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Lieu de naissance</div>
                    <div className="font-bold">{joueur.lieuNaissance}</div>
                  </div>

                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Taille</div>
                    <div className="font-bold">{joueur.taille} cm</div>
                  </div>

                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Poids</div>
                    <div className="font-bold">{joueur.poids} kg</div>
                  </div>
                </div>
              </div>

              {/* Palmarès */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-maroc-gold rounded-full" />
                  Trophées
                </h3>
                <div className="space-y-3">
                  {joueur.palmares.map((trophee, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-10 h-10 bg-maroc-gold/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-maroc-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">{trophee}</div>
                    </div>
                  ))}
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Suivre {joueur.prenom}</h3>
                  <div className="flex gap-3">
                    {joueur.reseauxSociaux.instagram && (
                      <a href={`https://instagram.com/${joueur.reseauxSociaux.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {joueur.reseauxSociaux.twitter && (
                      <a href={`https://twitter.com/${joueur.reseauxSociaux.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-sky-500 text-white rounded-full hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

