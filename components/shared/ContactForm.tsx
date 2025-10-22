'use client';

import { useState, FormEvent } from 'react';

/**
 * ContactForm Component
 * 
 * Formulaire de contact avec validation basique
 */

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simuler l'envoi (à remplacer par votre API)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Formulaire envoyé:', formData);
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Message de succès */}
      {submitSuccess && (
        <div className="bg-maroc-green text-white px-6 py-4 rounded-lg animate-slide-down">
          <p className="font-semibold">✓ Message envoyé avec succès !</p>
          <p className="text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}

      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Nom complet <span className="text-maroc-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroc-red transition-all ${
            errors.name ? 'border-maroc-red' : 'border-gray-300'
          }`}
          placeholder="Votre nom"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-maroc-red">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email <span className="text-maroc-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroc-red transition-all ${
            errors.email ? 'border-maroc-red' : 'border-gray-300'
          }`}
          placeholder="votre.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-maroc-red">{errors.email}</p>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Sujet <span className="text-maroc-red">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroc-red transition-all ${
            errors.subject ? 'border-maroc-red' : 'border-gray-300'
          }`}
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="billetterie">Billetterie</option>
          <option value="boutique">Boutique</option>
          <option value="equipe">Équipe nationale</option>
          <option value="partenariat">Partenariat</option>
          <option value="autre">Autre</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-maroc-red">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-maroc-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroc-red transition-all resize-none ${
            errors.message ? 'border-maroc-red' : 'border-gray-300'
          }`}
          placeholder="Votre message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-maroc-red">{errors.message}</p>
        )}
      </div>

      {/* Bouton Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          'Envoyer le message'
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Les champs marqués d'un <span className="text-maroc-red">*</span> sont obligatoires
      </p>
    </form>
  );
};

export default ContactForm;

