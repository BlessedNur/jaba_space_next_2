"use client";
import React from 'react';
import { useTranslation } from '../../../context/TranslationContext';
import HeroSection from '../../../components/common/HeroSection';
import Header from '../../../components/common/Header';
import ServicesSection from '../../../components/common/ServicesSection';
import InterventionSectorsSection from '../../../components/common/InterventionSection';
import JoinUsSection from '../../../components/common/JoinUsSection';
import Footer from '../../../components/common/Footer';

const ServicesPage: React.FC = () => {
const { t } = useTranslation();

const handleLearnMore = () => {
  // Navigate to detailed service page or scroll to content
  document.getElementById('services-content')?.scrollIntoView({ 
    behavior: 'smooth' 
  });
};

const handleStartupPack = () => {
  // Navigate to startup pack details or contact
  console.log('Startup Pack clicked');
};

return (
  <div>
    <Header/>
    {/* Hero Section for Services */}
    <HeroSection 
      titleKey="services.title" // "Our Services"
      backgroundImage="/images/HeroSection.png"
      className="h-96"
      overlayOpacity={0.1}
    />
    <ServicesSection/>
    <InterventionSectorsSection/>
    <JoinUsSection/>
    <Footer/>
    
  </div>
);
};

export default ServicesPage;