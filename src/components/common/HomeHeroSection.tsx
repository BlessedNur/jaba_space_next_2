"use client";
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { useTranslation } from '../../context/TranslationContext';

interface HomeHeroSectionProps {
  className?: string;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  
  // Array of hero images
  const heroImages = [
    "/images/img_facehandsomeafricanamericanbusinesswomanholdingtabletbackgroundbusinesspeoplesmultiracialteammeetingsittingofficetable_1.png",
    "/images/img_capture_1.png", 
    "/images/img_afroamericanmansuitholdingdocumentstalkingfemaleboss_4.png",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleBigButtonClick = () => {
    const nextSection = document.getElementById('executive-summary');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center ${className}`}>
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white text-xl font-medium mb-4">
          {t('homehero.welcome')}
        </p>
        <h1 className="text-orange-500 text-6xl font-bold mb-6 leading-tight">
          {t('homehero.title')}
        </h1>
        <h2 className="text-white text-5xl font-bold mb-8 leading-tight">
          {t('homehero.subtitle')}
        </h2>
        <Button
          onClick={handleBigButtonClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-3"
        >
          {t('homehero.cta')}
          <img
            src="/images/img_icon_font_awesome_free_solid_a_arrowright.svg"
            alt="Arrow right"
            className="w-4 h-4"
          />
        </Button>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Optional: Previous/Next buttons */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => setCurrentSlide((currentSlide - 1 + heroImages.length) % heroImages.length)}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => setCurrentSlide((currentSlide + 1) % heroImages.length)}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HomeHeroSection;
