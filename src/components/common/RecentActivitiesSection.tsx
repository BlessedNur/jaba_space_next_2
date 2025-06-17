"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/TranslationContext';

interface Activity {
  image: string;
  date: { day: string; month: string };
  title: string;
  description: string;
}

interface RecentActivitiesSectionProps {
  activities: Activity[];
  onViewMore: () => void;
}

const RecentActivitiesSection: React.FC<RecentActivitiesSectionProps> = ({ activities, onViewMore }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(activities.length / 3);
  
  // For mobile view, we'll show one activity at a time
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalPages]);
  
  // Get current activities to display
  const getVisibleActivities = () => {
    if (isMobile) {
      // For mobile, show one activity at a time
      return [activities[currentPage % activities.length]];
    } else {
      // For desktop, show all activities with animation
      return activities;
    }
  };
  
  const visibleActivities = getVisibleActivities();
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-base font-normal mb-2">{t('activities.subtitle')}</p>
          <h2 className="text-gray-800 text-5xl font-bold mb-6">{t('activities.title')}</h2>
          <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <p className="text-gray-700 text-base leading-6 text-center max-w-4xl mx-auto mb-12">
          {t('activities.description')}
        </p>

        <div className="relative">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500`}>
            {visibleActivities.map((activity, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 transform ${
                  !isMobile && index % 3 === currentPage % 3 ? 'scale-105 z-10' : 'scale-100 z-0'
                }`}
              >
                {/* Card Container with Full Background Image */}
                <div className="relative h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Background Image */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-black rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg z-10">
                    <span className="text-xl font-bold leading-none">{activity.date.day}</span>
                    <span className="text-sm font-medium">{activity.date.month}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <h3 className="text-orange-500 text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed mb-6 opacity-90">
                      {activity.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={onViewMore}
                      className="inline-flex items-center gap-2 text-white hover:text-orange-300 font-medium text-sm transition-colors group/btn border-2 border-white rounded-full px-4 py-2 w-fit hover:border-orange-300"
                    >
                      <span>{t('activities.cta') || 'Voir Plus'}</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls for Mobile */}
          {isMobile && (
            <>
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => setCurrentPage((currentPage - 1 + activities.length) % activities.length)}
                aria-label="Previous activity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => setCurrentPage((currentPage + 1) % activities.length)}
                aria-label="Next activity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: isMobile ? activities.length : totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                currentPage === index 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300 hover:bg-orange-500'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivitiesSection;