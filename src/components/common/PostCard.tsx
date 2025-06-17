"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';
import { UserRound, MessageCircleMore } from 'lucide-react';
import Button from '../ui/Button';

interface PostCardProps {
    date: {
        day: number;
        month: string;
    };
    title: string;
    excerpt: string;
    image: string;
}

const PostCard: React.FC<PostCardProps> = ({ date, title, excerpt, image }) => {
    const { t } = useTranslation();

    const onViewMore = () => {
        // Implement your logic here, e.g., navigate to the post or show more details
        console.log('View more clicked');
    };

    return (
        <article className="mb-12 bg-white rounded-lg shadow-md overflow-hidden h-[800px] w-[800px] flex flex-col">
            {/* Image takes 65% of the height */}
            <div className="relative h-[65%]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 rounded-full w-16 h-16 flex flex-col items-center justify-center text-center text-white">
                    <span className="text-xl font-bold">{date.day}</span>
                    <span className="text-sm">{date.month}</span>
                </div>
            </div>

            {/* Content takes 35% of the height */}
            <div className="p-6 flex flex-col h-[35%]">
                <div className="flex items-center text-gray-500 mb-2 text-sm">
                    <div className="flex items-center mr-4">
                        <UserRound className="w-5 h-5 text-orange-500 mr-1" />
                        {t('blog.admin')}
                    </div>
                    <div className="flex items-center">
                        <MessageCircleMore className="w-5 h-5 text-orange-500 mr-1" />
                        {t('blog.comments')}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-orange-500 mb-2">{title}</h2>

                <div className="text-gray-700 mb-4 flex-grow overflow-hidden">
                    <p className="line-clamp-3">{excerpt}</p>
                </div>

                {/* CTA Button */}
                <Button
                    onClick={onViewMore}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium mt-auto self-start"
                >
                    {t('services.pack.cta') || 'Voir Plus'}
                </Button>

            </div>
        </article>
    );
};

export default PostCard;
