"use client";
import React from "react";
import { useTranslation } from "../../context/TranslationContext";
import Card from "../ui/Card";

const InterventionSectorsSection: React.FC = () => {
  const { t } = useTranslation();

  const translatedSectors = [
    {
      name: t("sectors.agriculture"),
      icon: "/images/img_agriculture_2.svg",
      active: true,
    },
    {
      name: t("sectors.telecom"),
      icon: "/images/img_telephonie_1.svg",
      active: false,
    },
    {
      name: t("sectors.education"),
      icon: "/images/img_education_1.svg",
      active: false,
    },
    { name: t("sectors.legal"), icon: "/images/img_vector.svg", active: false },
    {
      name: t("sectors.renewable"),
      icon: "/images/img_group_white_a700_115x101.svg",
      active: false,
    },
    {
      name: t("sectors.banking"),
      icon: "/images/img_group_white_a700_126x98.svg",
      active: false,
    },
    {
      name: t("sectors.health"),
      icon: "/images/img_group_white_a700.svg",
      active: false,
    },
    { name: t("sectors.iot"), icon: "/images/img_group.svg", active: false },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-base font-normal mb-2">
            {t("sectors.subtitle") || "A Propos"}
          </p>
          <h2 className="text-gray-800 text-5xl font-bold mb-6">
            {t("sectors.title")}
          </h2>
          <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedSectors.map((sector, index) => (
            <Card
              key={index}
              variant="dark"
              className="text-center h-64 flex flex-col justify-between shadow-lg hover:bg-orange-500 hover:text-white transition-colors duration-200"
            >
              <div className="flex-1 flex items-center justify-center">
                {sector.icon && (
                  <img
                    src={sector.icon}
                    alt={sector.name}
                    className="w-24 h-24 object-contain"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold leading-tight">
                {sector.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterventionSectorsSection;
