"use client"
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/TranslationContext';
import Button from '../ui/Button';

const ExecutiveSummary: React.FC = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Array of elevator pitch images
    const elevatorImages = [
        "/images/img_capture_1.png",
        "/images/img_afroamericanmansuitholdingdocumentstalkingfemaleboss_4.png",
        "/images/img_facehandsomeafricanamericanbusinesswomanholdingtabletbackgroundbusinesspeoplesmultiracialteammeetingsittingofficetable_1.png",
    ];

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % elevatorImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [elevatorImages.length]);

    const handleViewMore = () => {
        alert('Voir Plus clicked');
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <>
            {/* Executive Summary Section */}
            <section id="executive-summary" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text Block */}
                    <div>
                        <p className="text-orange-500 text-sm font-medium uppercase tracking-wide mb-2">
                            {t('executive.subtitle') || 'Qui nous sommes'}
                        </p>
                        <h2 className="text-gray-900 text-4xl md:text-5xl font-bold leading-snug mb-4">
                            {t('executive.title') || 'Résumé Exécutif'}
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mb-6" />

                        <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-xl">
                            <p>
                                {t('executive.content') ||
                                    "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources. De l'autre, nous avons la levée de manière surprenante et à une vitesse incroyable des frontières et la révolution numérique."}
                            </p>
                            <p>
                                Pour le cas spécifique de l'Afrique, nous avons une population jeune en forte croissance, un élargissement des besoins, un changement des usages, une pénétration exceptionnelle des technologies mobiles et de l'internet.
                            </p>
                        </div>

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

                    {/* Right Image Block */}
                    <div className="relative h-[600px] w-full overflow-hidden">
                        {/* Back Image - Office space (upper left) */}
                        <div className="absolute top-0 left-0 w-[380px] md:w-[420px] lg:w-[450px] h-[350px] md:h-[400px] lg:h-[420px] rounded-lg overflow-hidden shadow-lg z-10">
                            <img
                                src="/images/img_capture_1.png"
                                alt="Office background"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Front Image - Team meeting (lower right, overlapping) */}
                        <div className="absolute bottom-0 right-0 w-[400px] md:w-[450px] lg:w-[480px] h-[380px] md:h-[430px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl z-20">
                            <img
                                src="/images/img_afroamericanmansuitholdingdocumentstalkingfemaleboss_4.png"
                                alt="Team meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevator Pitch Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                        {/* The height is not explicitly set here, so it will maintain the original height determined by the content */}
                        <div className="relative">
                            {/* Carousel Images - Each takes full height and width of parent */}
                            {elevatorImages.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    style={{ position: index === 0 ? 'relative' : 'absolute' }} // First image sets the height
                                >
                                    <img
                                        src={image}
                                        alt={`Elevator pitch visual ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            
                            {/* Carousel Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                                {elevatorImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            currentSlide === index 
                                                ? 'bg-white border-2 border-gray-400' 
                                                : 'bg-gray-400 hover:bg-gray-300'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            
                            {/* Carousel Controls */}
                            <button 
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                                onClick={() => setCurrentSlide((currentSlide - 1 + elevatorImages.length) % elevatorImages.length)}
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                                onClick={() => setCurrentSlide((currentSlide + 1) % elevatorImages.length)}
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-gray-800 p-8 flex flex-col justify-center">
                            <p className="text-orange-500 text-base font-normal mb-2">A Propos</p>
                            <h2 className="text-white text-5xl font-bold mb-6 leading-tight">Notre Elevator Pitch</h2>
                            <div className="w-44 h-1 bg-orange-500 mb-8"></div>

                            <p className="text-white text-base font-medium mb-4">
                                Faire émerger une nouvelle génération d'entrepreneurs à succès.
                            </p>
                            <p className="text-white text-base leading-6">
                                Jaba Space, qui signifie "espace de partage" en langue Douala, est le lieu de rencontre entre les entrepreneurs, les startuppers, les porteurs de projets et d'idées d'entreprises à la recherche d'un environnement de travail équipé et prêt-à-l'emploi, d'un appui au démarrage (incubation) ou d'un coup d'accélérateur au développement de leur activité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExecutiveSummary;