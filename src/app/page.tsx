"use client";
import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomeHeroSection from '../components/common/HomeHeroSection';
import ExecutiveSummary from '../components/common/ExecutiveSection';
import ObjectivesSection from '../components/common/ObjectiveSection';
import InterventionSectorsSection from '../components/common/InterventionSection';
import StatisticsSection from '../components/common/StatisticsSection';
import JoinUsSection from '../components/common/JoinUsSection';
import ExpertsSection from '../components/common/ExpertsSection';
import PartnersSection from '../components/common/PartnersSection';
import ServicesSection from '../components/common/ServicesSection';
import RecentActivitiesSection from '../components/common/RecentActivitiesSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const handleViewMore = () => {
    alert('Voir Plus clicked');
  };

  const handleContactUs = () => {
    alert('Contact Us clicked');
  };

  const activities = [
    {
      image: "/images/img_capture_1_455x388.png",
      date: { day: "5", month: "Apr" },
      title: "Placement de Talent",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de l"
    },
    {
      image: "/images/img_capture_1_455x389.png",
      date: { day: "5", month: "Apr" },
      title: "Placement de Talent",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de l"
    },
    {
      image: "/images/img_capture_1_455x388.png",
      date: { day: "5", month: "Apr" },
      title: "Placement de Talent",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de l"
    }
  ];

  const experts = [
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
      variant: "default" as const
    },
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
      variant: "dark" as const
    },
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      description: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
      variant: "default" as const
    }
  ];

  const partners = [
    "/images/img_logo.svg",
    "/images/img_logo_white_a700.svg",
    "/images/img_logo_white_a700_41x168.svg",
    "/images/img_logo_white_a700_41x170.svg",
    "/images/img_logo_41x170.svg"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HomeHeroSection />

      <ExecutiveSummary />

      <ObjectivesSection />

      <ServicesSection onViewMore={handleViewMore} />

      <InterventionSectorsSection />

      <StatisticsSection />

      <RecentActivitiesSection activities={activities} onViewMore={handleViewMore} />

      <JoinUsSection onContactUs={handleContactUs} />

      <ExpertsSection experts={experts} onContactUs={handleContactUs} />

      <PartnersSection partners={partners} />

      <Footer />
    </div>
  );
};

export default HomePage;