"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';
import Button from '../../components/ui/Button';

interface JoinUsSectionProps {
onContactUs?: () => void;
}

const JoinUsSection: React.FC<JoinUsSectionProps> = ({ onContactUs }) => {
const { t } = useTranslation();

const handleContactUs = () => {
  if (onContactUs) {
    onContactUs();
  } else {
    alert('Contact Us clicked');
  }
};

return (
  <section 
    className="py-24 px-4 relative min-h-[600px] flex items-center"
    style={{
      backgroundImage: `url('/images/img_concentratedcallcenteroperatorcommunicatingwithclient_1.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
      <h2 className="text-orange-500 text-6xl font-bold mb-6">{t('join.title')}</h2>
      <p className="text-white text-2xl font-semibold mb-8 leading-tight">
        {t('join.subtitle')}
      </p>
      <Button 
        onClick={handleContactUs}
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base inline-flex items-center gap-3"
      >
        {t('join.cta')}
        <img 
          src="/images/img_icon_font_awesome_free_solid_a_arrowright.svg"
          alt="Arrow right"
          className="w-4 h-4"
        />
      </Button>
    </div>
  </section>
);
};

export default JoinUsSection;