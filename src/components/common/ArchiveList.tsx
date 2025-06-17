"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

interface Archive {
  id: number;
  month: string;
}

interface ArchiveListProps {
  archives: Archive[];
}

const ArchiveList: React.FC<ArchiveListProps> = ({ archives }) => {
        const { t } = useTranslation();
    
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">{t('blog.archives')}</h3>
      <ul className="divide-y divide-gray-100">
        {archives.map(archive => (
          <li key={archive.id} className="py-2">
            <a 
              href="#" 
              className="block hover:text-yellow-500 transition-colors"
            >
              {archive.month}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveList;