"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface Expert {
    image: string;
    title: string;
    name: string;
    company: string;
    variant: 'default' | 'dark';
}

interface ExpertsSectionProps {
    experts?: Expert[];
    onContactUs?: () => void;
}

const ExpertsSection: React.FC<ExpertsSectionProps> = ({
    experts: propExperts,
    onContactUs
}) => {
    const { t } = useTranslation();

    // Default experts data if none provided
    const defaultExperts: Expert[] = [
        {
            image: "/images/img_mediumshotmaleflightattendantposing_2.png",
            title: "Saved my Business",
            name: "HOWARD MCMILLAN",
            company: "HSBC Bank",
            variant: "default"
        },
        {
            image: "/images/img_mediumshotmaleflightattendantposing_2.png",
            title: "Saved my Business",
            name: "HOWARD MCMILLAN",
            company: "HSBC Bank",
            variant: "dark"
        },
        {
            image: "/images/img_mediumshotmaleflightattendantposing_2.png",
            title: "Saved my Business",
            name: "HOWARD MCMILLAN",
            company: "HSBC Bank",
            variant: "default"
        }
    ];

    const experts = propExperts || defaultExperts;

    const handleContactUs = () => {
        if (onContactUs) {
            onContactUs();
        } else {
            alert('Contact Us clicked');
        }
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-orange-500 text-base font-normal mb-2">{t('experts.subtitle')}</p>
                    <h2 className="text-gray-800 text-5xl font-bold mb-6">{t('experts.title')}</h2>
                    <div className="w-44 h-1 bg-orange-500 mx-auto mb-8"></div>
                </div>

                <p className="text-gray-700 text-base leading-6 text-center max-w-4xl mx-auto mb-12">
                    {t('experts.description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <Card key={index} variant={expert.variant} className="text-center shadow-lg">
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className={`w-64 h-54 rounded-full mx-auto mb-6 object-cover ${index === 1 ? 'border-4 border-orange-500' : ''}`}
                            />

                            <h3 className="text-orange-500 text-2xl font-bold mb-4">{t(`experts.testimonial`)}</h3>
                            <p className={`text-base leading-6 mb-6 ${expert.variant === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                {t('experts.description')} 
                            </p>

                                <h4 className={`text-xl font-medium mb-2 ${expert.variant === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {expert.name}
                                </h4>
                                <p className={`text-2xl font-semibold ${expert.variant === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {expert.company}
                                </p>
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
                        {t('experts.cta')}
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