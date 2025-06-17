"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

interface Tag {
  id: number;
  name: string;
}

interface TagCloudProps {
  tags: Tag[];
}
const TagCloud: React.FC<TagCloudProps> = ({ tags }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[220px]"> {/* Added min-h */}
      <h3 className="text-lg font-bold mb-4">{t('blog.popularTags')}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <a
            key={tag.id}
            href="#"
            className="px-3 py-1 bg-gray-100 hover:bg-yellow-400 hover:text-white text-sm rounded-md transition-colors"
          >
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};


export default TagCloud;