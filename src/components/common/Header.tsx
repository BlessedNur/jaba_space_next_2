"use client"
import React, { useState } from 'react';
import { useTranslation } from '../../context/TranslationContext';
import  Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/img_640d59ba30ddb4feaa277b3ae747c891_2.png" 
              alt="JABA SPACE Logo" 
              className="h-12 w-32 sm:h-16 sm:w-40 object-contain"
            />
          </div>

          {/* Navigation Menu for Desktop and Tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex items-center space-x-6 xl:space-x-8">
              <Link 
                href="/" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/about" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/services" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/team" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.team')}
              </Link>
              <Link 
                href="/blog" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.blog')}
              </Link>
              <Link 
                href="/contact" 
                className="text-black text-sm xl:text-base font-normal hover:text-orange-500 transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Language Switcher for Deskhrefp and Tablet */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="bg-gray-200 px-2 py-1 xl:px-3 xl:py-1 rounded text-xs xl:text-sm font-semibold hover:bg-orange-100 transition-colors"
              aria-label="Switch language"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Social Media Icons for Desktop and Tablet */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="/images/img_linkedin_black_900_01.svg" 
                alt="LinkedIn" 
                className="w-7 h-7 xl:w-9 xl:h-9"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="/images/img_facebook_black_900_01.svg" 
                alt="Facebook" 
                className="w-7 h-7 xl:w-9 xl:h-9"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img 
                src="/images/img_twitter_black_900_01.svg" 
                alt="Twitter" 
                className="w-7 h-7 xl:w-9 xl:h-9"
              />
            </a>
          </div>

          {/* Mobile and Tablet Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex flex-col space-y-1 p-2"
          >
            <span className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Mobile and Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 relative">
            {/* Close Button for Mobile and Tablet Menu */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-orange-500 transition-colors p-2"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col space-y-3 sm:space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/about" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/services" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/team" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.team')}
              </Link>
              <Link 
                href="/blog" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                href="/contact" 
                className="text-black text-sm sm:text-base font-normal hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Language Switcher for Mobile and Tablet */}
            <div className="flex items-center mt-3 sm:mt-4 ml-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="bg-gray-200 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-semibold hover:bg-orange-100 transition-colors"
                aria-label="Switch language"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>

            {/* Social Media Icons for Mobile and Tablet */}
            <div className="flex items-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/img_linkedin_black_900_01.svg" 
                  alt="LinkedIn" 
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/img_facebook_black_900_01.svg" 
                  alt="Facebook" 
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/img_twitter_black_900_01.svg" 
                  alt="Twitter" 
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;