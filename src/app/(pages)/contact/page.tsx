"use client";
import React from "react";
import { useTranslation } from "../../../context/TranslationContext";
import HeroSection from "../../../components/common/HeroSection";
import Header from "../../../components/common/Header";
import ContactFormSection from "../../../components/common/ContactForm";
import InfoContactSection from "../../../components/common/InfoContactSection";
import MapContactOverlay from "../../../components/common/MapContactOverlay";
import Footer from "../../../components/common/Footer";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      {/* Hero Section for Contact */}
      <HeroSection
        titleKey="nav.contact" // "Contact"
        buttonTextKey="join.cta" // "Contact Us"
        backgroundImage="/images/HeroSection.png"
        buttonClassName="bg-blue-500 hover:bg-blue-600 text-white"
        overlayOpacity={0.1}
      />
      <InfoContactSection />
      <ContactFormSection />
      <MapContactOverlay />
      <Footer />
    </div>
  );
};

export default ContactPage;
