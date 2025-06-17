"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';
import Button from '../ui/Button';

interface MissionVisionProps {
    className?: string;
    imageSrc?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({
    className = "",
    imageSrc = "/images/img_capture_1.png"
}) => {
    const { t } = useTranslation();

    const handleViewMore = () => {
        // You can customize this action, e.g., navigate or open a modal
        console.log('View More clicked');
    };

    return (
        <section className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                    <p className="text-yellow-500 font-medium mb-2">
                        {t('mission.subtitle')}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        {t('mission.title')}
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mb-8"></div>

                    <p className="text-gray-700 mb-6">
                        {t('mission.content1')}
                    </p>
                    <p className="text-gray-700 mb-8">
                        {t('mission.content2')}
                    </p>

                    <Button
                        onClick={handleViewMore}
                        className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-3"
                    >
                        {t('executive.cta') || 'Voir Plus'}
                        <img
                            src="/images/img_icon_font_awesome_free_solid_a_arrowright.svg"
                            alt="Arrow right"
                            className="w-4 h-4"
                        />
                    </Button>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={imageSrc}
                        alt={t('mission.imageAlt')}
                        className="w-full h-auto shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default MissionVision;