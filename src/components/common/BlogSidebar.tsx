import React, { FC } from 'react';
import SearchBar from './SearchBar';
import RecentPosts from './RecentPosts';
import TagCloud from './TagCloud';
import ArchiveList from './ArchiveList';

interface RecentPost {
    id: number;
    title: string;
    date: string;
    image: string;
}

interface Tag {
    id: number;
    name: string;
}

interface Archive {
    id: number;
    month: string;
}

const BlogSidebar: React.FC = () => {

    interface Tag {
        id: number;
        name: string;
    }

    interface Archive {
        id: number;
        month: string;
    }

    // Sample data for recent posts
    const recentPosts: RecentPost[] = [
        {
            id: 1,
            title: "Does My Business Need a Director of Training?",
            date: "February 9, 2023",
            image: "/images/training-thumbnail.jpg"
        },
        {
            id: 2,
            title: "Does My Business Need a Director of Training?",
            date: "February 9, 2023",
            image: "/images/training-thumbnail.jpg"
        },
        {
            id: 3,
            title: "Does My Business Need a Director of Training?",
            date: "February 9, 2023",
            image: "/images/training-thumbnail.jpg"
        }
    ];

    // Sample data for tags
    const tags: Tag[] = [
        { id: 1, name: "Agence" },
        { id: 2, name: "Business" },
        { id: 3, name: "Consult" },
        { id: 4, name: "Corporate" },
        { id: 5, name: "Data" },
        { id: 6, name: "Idea" },
        { id: 7, name: "Agence" },
        { id: 8, name: "Agence" },
        { id: 9, name: "Agence" }
    ];

    // Sample data for archives
    const archives: Archive[] = [
        { id: 1, month: "Mai 2023" },
        { id: 2, month: "Avril 2023" },
        { id: 3, month: "Mars 2023" },
        { id: 4, month: "Février 2023" },
        { id: 5, month: "Janvier 2023" },
        { id: 6, month: "Décembre 2022" },
        { id: 7, month: "Novembre 2022" },
        { id: 8, month: "Octobre 2022" },
        { id: 9, month: "Septembre 2022" }
    ];

    return (
        <div className="space-y-8">
            <SearchBar />
            <RecentPosts posts={recentPosts} />
            <TagCloud tags={tags} />
            <ArchiveList archives={archives} />
        </div>
    );
};

export default BlogSidebar;