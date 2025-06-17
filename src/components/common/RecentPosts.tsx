"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

interface Post {
    id: number;
    title: string;
    date: string;
    image: string;
}

interface RecentPostsProps {
    posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">{t('blog.recentPosts')}</h3>
            <div className="space-y-4">
                {posts.map(post => (
                    <div key={post.id} className="flex items-start space-x-3 py-4 min-h-[100px]"> {/* Increased vertical padding + height */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded" // Increased from 16 to 20
                        />
                        <div className="flex flex-col justify-between">
                            <h4 className="font-medium text-sm hover:text-yellow-500 transition-colors leading-snug">
                                <a href="#">{post.title}</a>
                            </h4>
                            <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default RecentPosts;