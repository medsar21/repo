import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/shared/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lions de l\'Atlas',
  description: 'Contactez la Fédération Royale Marocaine de Football. Nous sommes à votre écoute pour toute question ou demande.',
};

/**
 * Page Contact
 * 
 * Formulaire de contact et informations de la FRMF
 */

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <div className="bg-gradient-maroc py-16 text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Une question ? Une suggestion ? Notre équipe est à votre écoute
            </p>
          </div>
        </div>

        {/* Contenu */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>

              {/* Informations de contact */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  {/* Adresse */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-maroc-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Fédération Royale Marocaine de Football<br />
                        51, Avenue Ibn Sina, Agdal<br />
                        Rabat, Maroc
                      </p>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-maroc-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        +212 5XX XX XX XX<br />
                        Lun - Ven : 9h00 - 17h00
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-maroc-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@frmf.ma" className="hover:text-maroc-red transition-colors">
                          contact@frmf.ma
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="pt-6 border-t">
                    <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 hover:bg-maroc-red hover:text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 hover:bg-maroc-red hover:text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Twitter"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 hover:bg-maroc-red hover:text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 hover:bg-maroc-red hover:text-white rounded-full flex items-center justify-center transition-all"
                        aria-label="YouTube"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte (à intégrer avec Google Maps)</p>
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

