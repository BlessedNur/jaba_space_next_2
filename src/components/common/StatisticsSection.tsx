"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

const StatisticsSection: React.FC = () => {
const { t } = useTranslation();

// Define the actual numbers here, not as translations
const stats = {
  satisfied: 250,
  experts: 50,
  projects: 150
};

return (
  <section 
    className="py-16 px-4 relative"
    style={{
      backgroundImage: `url('/images/img_.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-orange-500 text-xl font-medium mb-2">{t('stats.subtitle')}</p>
        <h2 className="text-white text-5xl font-bold mb-6">{t('stats.title')}</h2>
        <div className="w-80 h-1 bg-orange-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-4">{stats.satisfied}+</h3>
          <p className="text-white text-xl font-medium">{t('stats.satisfied')}</p>
        </div>
        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-4">{stats.experts}+</h3>
          <p className="text-white text-xl font-medium">{t('stats.experts')}</p>
        </div>
        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-4">{stats.projects}+</h3>
          <p className="text-white text-xl font-medium">{t('stats.projects')}</p>
        </div>
      </div>
    </div>
  </section>
);
};

export default StatisticsSection;