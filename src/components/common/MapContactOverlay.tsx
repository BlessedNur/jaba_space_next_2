"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

const MapContactOverlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[500px]">
      {/* Map container */}
      <div className="w-full h-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8876!2d9.7012!3d4.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDEnMzUuMCJOIDnCsDQyJzA0LjMiRQ!5e0!3m2!1sen!2scm!4v1623252345678!5m2!1sen!2scm" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Overlay card */}
      {/* <div className="absolute bottom-10 left-0 right-0 px-4">
        <div className="bg-gray-900 text-white p-6 rounded-md shadow-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-medium mb-6 pb-2 border-b border-orange-500">{t('map.offices.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> */}
            {/* Prenez contact */}
            {/* <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">{t('map.contact.title')}</h3>
              <p className="text-sm text-gray-300">
                {t('map.contact.description')}
              </p>
            </div> */}
            
            {/* Localisation */}
            {/* <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">{t('map.location.title')}</h3>
              <p className="text-sm text-gray-300">
                {t('info.contact.location.address').split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div> */}
            
            {/* Contact */}
            {/* <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">{t('map.phone.title')}</h3>
              <p className="text-sm text-gray-300">
                {t('info.contact.phone.number1')}<br />
                {t('info.contact.phone.number2')}
              </p>
            </div> */}
            
            {/* E-mail */}
            {/* <div>
              <h3 className="text-lg font-medium mb-2">{t('map.email.title')}</h3>
              <p className="text-sm text-gray-300">
                {t('info.contact.email.address')}
              </p>
            </div> */}
          {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default MapContactOverlay;
