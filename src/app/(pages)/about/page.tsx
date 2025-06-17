"use client";
import React from 'react';
import { useTranslation } from '../../../context/TranslationContext';
import HeroSection from '../../../components/common/HeroSection';
import Header from '../../../components/common/Header';
import ExecutiveSummary from '../../../components/common/ExecutiveSection';
import MissionVision from '../../../components/common/MissionVision';
import StatisticsSection from '../../../components/common/StatisticsSection';
import ObjectivesSection from '../../../components/common/ObjectiveSection';
import JoinUsSection from '../../../components/common/JoinUsSection';
import ExpertsSection from '../../../components/common/ExpertsSection';
import PartnersSection from '../../../components/common/PartnersSection';
import Footer from '../../../components/common/Footer';

const AboutUsPage: React.FC = () => {
const { t } = useTranslation();

return (
  <div>
    <Header/>
    {/* Hero Section for About Us */}
    <HeroSection 
      titleKey="nav.about"
      backgroundImage="/images/HeroSection.png"
      className="h-96"
      overlayOpacity={0.1}
    />
    
    <ExecutiveSummary/>
    <MissionVision imageSrc="/images/img_capture_1.png" />
    <StatisticsSection/>
    <ObjectivesSection/>
    <JoinUsSection/>
    <ExpertsSection/>
    <PartnersSection/>
    <Footer/>

  </div>
);
};

export default AboutUsPage;