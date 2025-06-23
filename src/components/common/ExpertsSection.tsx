"use client";
import React from "react";
import { useTranslation } from "../../context/TranslationContext";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

interface Expert {
  image: string;
  title: string;
  name: string;
  company: string;
}

interface ExpertsSectionProps {
  experts?: Expert[];
  onContactUs?: () => void;
}

const ExpertsSection: React.FC<ExpertsSectionProps> = ({
  experts: propExperts,
  onContactUs,
}) => {
  const { t } = useTranslation();

  // Default experts data if none provided
  const defaultExperts: Expert[] = [
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
    },
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
    },
    {
      image: "/images/img_mediumshotmaleflightattendantposing_2.png",
      title: "Saved my Business",
      name: "HOWARD MCMILLAN",
      company: "HSBC Bank",
    },
  ];

  const experts = propExperts || defaultExperts;

  const handleContactUs = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      alert("Contact Us clicked");
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-base font-normal mb-2">
            {t("experts.subtitle")}
          </p>
          <h2 className="text-gray-800 text-5xl font-bold mb-6">
            {t("experts.title")}
          </h2>
          <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <p className="text-gray-700 text-base leading-6 text-center max-w-4xl mx-auto mb-12">
          {t("experts.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              variant="default"
              className="text-center shadow-lg transition-colors duration-200 hover:bg-gray-800 hover:text-white"
            >
              <div className="flex justify-center">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-64 h-54 rounded-full mx-auto mb-6 object-cover border-4 border-transparent transition-colors duration-200 hover:border-orange-500"
                />
              </div>
              <h3 className="text-orange-500 text-2xl font-bold mb-4">
                {t(`experts.testimonial`)}
              </h3>
              <p className="text-base leading-6 mb-6">
                {t("experts.description")}
              </p>
              <h4 className="text-xl font-medium mb-2">{expert.name}</h4>
              <p className="text-2xl font-semibold">{expert.company}</p>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={handleContactUs}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base inline-flex items-center gap-3"
          >
            {t("experts.cta")}
            <img
              src="/images/img_icon_font_awesome_free_solid_a_arrowright.svg"
              alt="Arrow right"
              className="w-4 h-4"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
