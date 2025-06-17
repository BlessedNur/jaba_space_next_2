import React from 'react';

interface Partner {
src: string;
alt?: string;
name?: string;
}

interface PartnersSectionProps {
partners?: (string | Partner)[];
className?: string;
title?: string;
showTitle?: boolean;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ 
partners: propPartners,
className = "",
title = "Our Partners",
showTitle = false
}) => {
// Default partners data if none provided
const defaultPartners: string[] = [
  "/images/img_logo.svg",
  "/images/img_logo_white_a700.svg", 
  "/images/img_logo_white_a700_41x168.svg",
  "/images/img_logo_white_a700_41x170.svg",
  "/images/img_logo_41x170.svg"
];

const partners = propPartners || defaultPartners;

// Helper function to normalize partner data
const normalizePartner = (partner: string | Partner, index: number): Partner => {
  if (typeof partner === 'string') {
    return {
      src: partner,
      alt: `Partner ${index + 1}`,
      name: `Partner ${index + 1}`
    };
  }
  return {
    alt: `Partner ${index + 1}`,
    name: `Partner ${index + 1}`,
    ...partner
  };
};

return (
  <section className={`py-16 px-4 bg-gray-800 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-6">{title}</h2>
          <div className="w-44 h-1 bg-orange-500 mx-auto"></div>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center items-center gap-12">
        {partners.map((partner, index) => {
          const normalizedPartner = normalizePartner(partner, index);
          return (
            <img 
              key={index}
              src={normalizedPartner.src}
              alt={normalizedPartner.alt}
              title={normalizedPartner.name}
              className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  </section>
);
};

export default PartnersSection;