"use client";
import React, { useState } from "react";
import { useTranslation } from "../../context/TranslationContext";
import Button from "../ui/Button";

interface ServiceTab {
  name: string;
  id: string;
}

interface ServicesSectionProps {
  onViewMore?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onViewMore }) => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState("incubation");

  // Service tabs
  const services: ServiceTab[] = [
    { name: t("services.incubation") || "Incubation", id: "incubation" },
    { name: t("services.acceleration") || "Acceleration", id: "acceleration" },
    { name: t("services.placement") || "Placement de talent", id: "placement" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-base font-normal mb-2">
            {t("services.subtitle") || "A Propos"}
          </p>
          <h2 className="text-gray-800 text-5xl font-bold mb-4">
            {t("services.title") || "Nos Services"}
          </h2>
          <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>

          {/* Description paragraph below title */}
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto mb-8">
            {t("services.pack.description") ||
              "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources."}
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`px-8 py-4 rounded-lg transition-all bg-white shadow-md hover:shadow-lg focus:outline-none  ${
                activeService === service.id
                  ? "border-b-4 border-orange-500 shadow-lg"
                  : "border-b-4 border-transparent"
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div>
            <img
              src="/images/img_afroamericanmansuitholdingdocumentstalkingfemaleboss_4.png"
              alt="Service illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              {t("services.pack.description") ||
                "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources."}
            </p>

            {/* Pack Startup section */}
            <div className="flex items-center gap-3">
              <img
                src="/images/keyboard_backspace.svg"
                alt="Arrow icon"
                className="w-6 h-6 object-contain" // Adjust size as needed
              />
              <h4 className="text-xl font-medium text-gray-800">
                {t("services.pack.title") || "Pack Startup"}
              </h4>
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              {t("services.pack.description") ||
                "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources."}
            </p>

            {/* CTA Button */}
            <Button
              onClick={onViewMore}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium"
            >
              {t("services.pack.cta") || "Voir Plus"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
