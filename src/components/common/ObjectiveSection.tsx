"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

const ObjectivesSection: React.FC = () => {
const { t } = useTranslation();

const objectives = [
  {
    number: "1",
    title: t('objectives.1.title'),
    description: t('objectives.1.content'),
    variant: "dark" as const
  },
  {
    number: "2",
    title: t('objectives.2.title'),
    description: t('objectives.2.content'),
    variant: "orange" as const
  },
  {
    number: "3",
    title: t('objectives.3.title'),
    description: t('objectives.3.content'),
    variant: "dark" as const
  }
];

return (
  <section className="py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-orange-500 text-base font-normal mb-2">{t('objectives.subtitle')}</p>
      <h2 className="text-gray-800 text-5xl font-bold mb-6"> {t('objectives.title')}</h2>
      <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>
      
      <p className="text-gray-800 text-base leading-6 max-w-4xl mx-auto mb-16">
        Lorem ipsum dolor sit amet consectetur. Risus ac diam ultricies tellus penatibus in sodales in. Blandit ultricies feugiat lorem a laoreet sed viverra sagittis. Ac faucibus phasellus diam in pellentesque nunc facilisi.
      </p>

      {/* Full width grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
        {objectives.map((objective, index) => (
          <div key={index} className="relative w-full">
            {/* Numbered Circle - positioned ON TOP of the card */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                objective.variant === 'orange' ? 'bg-gray-800' : 'bg-orange-500'
              }`}>
                <span className={`text-2xl font-bold ${
                  objective.variant === 'orange' ? 'text-orange-500' : 'text-gray-800'
                }`}>
                  {objective.number}
                </span>
              </div>
            </div>
            
            {/* Card Content - Yellow card extends longer at bottom */}
            <div className={`rounded-lg p-8 pt-12 text-center shadow-lg w-full ${
              objective.variant === 'orange' 
                ? 'bg-orange-500 text-gray-800 min-h-80 pb-12' 
                : 'bg-gray-800 text-white min-h-64 pb-8'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 leading-tight ${
                objective.variant === 'orange' ? 'text-gray-800' : 'text-white'
              }`}>
                {objective.title}
              </h3>
              <p className={`text-sm leading-6 ${
                objective.variant === 'orange' ? 'text-gray-800' : 'text-white'
              }`}>
                {objective.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default ObjectivesSection;