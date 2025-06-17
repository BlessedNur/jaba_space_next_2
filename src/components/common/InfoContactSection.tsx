"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

const FooterContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-100 py-24">
      {/* Increased py-16 to py-24 for more section height */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Increased bottom margin from mb-12 to mb-16 */}
          <h3 className="text-orange-500 text-xl mb-2">{t('info.contact.brand')}</h3>
          <h2 className="text-gray-800 text-4xl font-bold">{t('info.contact.tagline')}</h2>
          <div className="w-full max-w-md h-0.5 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Increased gap-6 to gap-12 and added max-w-5xl mx-auto to make cards narrower */}

          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center relative h-70">
            {/* Added h-80 for increased height */}
            <div className="absolute -top-10 bg-orange-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <img
                src="/images/Vector.png"
                alt={t('info.contact.location.alt')}
                className="w-10 h-10 text-white"
              />
            </div>
            <h3 className="font-semibold text-xl mt-12 mb-4 text-gray-800">{t('info.contact.location.title')}</h3>
            {/* Increased mt-10 to mt-12 */}
            <div className="w-12 h-0.5 bg-orange-500 mb-6"></div>
            {/* Increased mb-4 to mb-6 */}
            <p className="text-gray-600 text-center">
              {t('info.contact.location.address')}
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center relative h-70">
            {/* Added h-80 for increased height */}
            <div className="absolute -top-10 bg-orange-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <img
                src="/images/Group.png"
                alt={t('info.contact.phone.alt')}
                className="w-10 h-10 text-white"
              />
            </div>
            <h3 className="font-semibold text-xl mt-12 mb-4 text-gray-800">{t('info.contact.phone.title')}</h3>
            {/* Increased mt-10 to mt-12 */}
            <div className="w-12 h-0.5 bg-orange-500 mb-6"></div>
            {/* Increased mb-4 to mb-6 */}
            <p className="text-gray-600">
              {t('info.contact.phone.number1')}<br />
              {t('info.contact.phone.number2')}
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center relative h-70">
            {/* Added h-80 for increased height */}
            <div className="absolute -top-10 bg-orange-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <img
                src="/images/envelope.png"
                alt={t('info.contact.email.alt')}
                className="w-10 h-10 text-white"
              />
            </div>
            <h3 className="font-semibold text-xl mt-12 mb-4 text-gray-800">{t('info.contact.email.title')}</h3>
            {/* Increased mt-10 to mt-12 */}
            <div className="w-12 h-0.5 bg-orange-500 mb-6"></div>
            {/* Increased mb-4 to mb-6 */}
            <p className="text-gray-600">
              {t('info.contact.email.address')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContactSection;
