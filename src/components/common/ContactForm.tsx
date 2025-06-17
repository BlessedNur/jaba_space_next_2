"use client";
import React, { useState } from 'react';
import { useTranslation } from '../../context/TranslationContext';

const ContactFormSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_auto] gap-[20px] items-start">
          {/* Left side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-gray-900 text-4xl lg:text-5xl font-bold mb-4">
                {t('contact.form.title') || 'Laissez nous un message'}
              </h2>
              <div className="w-32 h-1 bg-orange-500"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-gray-900 text-base font-medium mb-3">
                    {t('contact.form.nom') || 'Nom'}
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.nom.placeholder') || 'Nom'}
                    className="w-full px-4 py-4 bg-[rgba(42,42,41,0.4)] rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-gray-900 text-base font-medium mb-3">
                    {t('contact.form.prenom') || 'Prénom'}
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.prenom.placeholder') || 'Prénom'}
                    className="w-full px-4 py-4 bg-[rgba(42,42,41,0.4)] rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all border-0"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 text-base font-medium mb-3">
                  {t('contact.form.email') || 'E-mail'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email.placeholder') || 'E-mail'}
                  className="w-full px-4 py-4 bg-[rgba(42,42,41,0.4)] rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all border-0"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 text-base font-medium mb-3">
                  {t('contact.form.message') || 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.message.placeholder') || 'Message'}
                  rows={6}
                  className="w-full px-4 py-4 bg-[rgba(42,42,41,0.4)] rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none border-0"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 shadow-sm"
              >
                {t('contact.form.submit') || 'Envoyer'}
              </button>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-start">
            <img
              src="/images/Contactform.png"
              alt={t('contact.image.alt') || 'Professional woman on phone'}
              className="h-[650px] w-[550px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
