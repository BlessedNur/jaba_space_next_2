"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';
import Button from '../ui/Button';

interface HeroSectionProps {
  titleKey?: string;
  subtitleKey?: string;
  buttonTextKey?: string;
  title?: string; // Fallback for custom titles
  subtitle?: string; // Fallback for custom subtitles
  buttonText?: string; // Fallback for custom button text
  onButtonClick?: () => void;
  showButton?: boolean;
  backgroundImage?: string;
  className?: string;
  titleClassName?: string;
  buttonClassName?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleKey,
  subtitleKey,
  buttonTextKey,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  showButton = false,
  backgroundImage = "/images/hero-bg.jpg",
  className = "",
  titleClassName = "",
  buttonClassName = "",
  overlay = true,
  overlayOpacity = 0.3  // Reduced from 0.5 to 0.3 for better visibility
}) => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  // Use translation keys first, fallback to direct props
  const displayTitle = title || (titleKey ? t(titleKey) : 'Default Title');
  const displaySubtitle = subtitle || (subtitleKey ? t(subtitleKey) : undefined);
  const displayButtonText = buttonText || (buttonTextKey ? t(buttonTextKey) : 'Learn More');

  return (
    <section 
      className={`relative h-96 flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
        {displaySubtitle && (
          <p className="text-white text-lg mb-4 opacity-90">
            {displaySubtitle}
          </p>
        )}

        <div className="inline-block bg-orange-500 px-16 py-4 rounded-none opacity-70" style={{ width: "100%", maxWidth: "450px" }}>
          <h1 className={`text-black text-4xl md:text-5xl font-bold ${titleClassName}`}>
            {displayTitle}
          </h1>
        </div>
        
        {showButton && (
          <div className="mt-16">
            <Button
              onClick={handleButtonClick}
              className={`bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${buttonClassName}`}
            >
              {displayButtonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
