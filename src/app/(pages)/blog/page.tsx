"use client";
import React from 'react';
import { useTranslation } from '../../../context/TranslationContext';
import HeroSection from '../../../components/common/HeroSection';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import PostCard from '../../../components/common/PostCard';
import Sidebar from '../../../components/common/BlogSidebar';

const BlogPage: React.FC = () => {
    const { t } = useTranslation();

    // Sample blog post data - replace with actual data from your API/database
    const blogPosts = [
        {
            id: 1,
            date: { day: 5, month: "Apr" },
            title: "Placement de Talent",
            excerpt: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources. De l'autre, nous avons la levée de manière surprenante et à une vitesse incroyable des frontières et la révolution numérique...",
            image: "/images/img_capture_1.png"
        },
        {
            id: 2,
            date: { day: 5, month: "Apr" },
            title: "Placement de Talent",
            excerpt: "Aujourd'hui, le monde fait face à des défis extraordinaires. D'un côté, nous avons le développement exponentiel de la démographie et la raréfaction des ressources. De l'autre, nous avons la levée de manière surprenante et à une vitesse incroyable des frontières et la révolution numérique...",
            image: "/images/img_capture_1.png"
        }
    ];

    return (
        <div>
            <Header />
            {/* Hero Section for Blog */}
            <HeroSection
                titleKey="nav.blog" // "Blog"
                buttonTextKey="join.cta" // "OUR BLOG"
                backgroundImage="/images/HeroSection.png"
                buttonClassName="bg-blue-500 hover:bg-blue-600 text-white"
                overlayOpacity={0.1}
            />

            {/* Blog Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Area */}
                    <div className="lg:w-[70%]">
                        <div className="space-y-12">
                            {blogPosts.map(post => (
                                <PostCard
                                    key={post.id}
                                    date={post.date}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    image={post.image}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-[30%]">
                        <Sidebar />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default BlogPage;
