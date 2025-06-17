"use client";
import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white shadow-md rounded-full px-4 py-2 flex items-center border border-yellow-500">
      <input
        type="text"
        placeholder={t('blog.search')}
        className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-400"
      />
      <button className="text-gray-400 hover:text-gray-600">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
