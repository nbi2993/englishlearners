
import React, { useState } from 'react';
import { Curriculum, CurriculumLevel, CurriculumCategory } from '../types';
import { ChevronRightIcon, CollectionIcon, YoutubeIcon, FacebookIcon, LinkIcon, BookOpenIcon } from './Icons';
import { useTranslation } from '../contexts/i18n';
import { ivsLogoSrc } from '../assets/logo';

interface HomeScreenProps {
  curriculum: Curriculum;
  onSelectLevel: (level: CurriculumLevel) => void;
  onShowOtherPrograms: () => void;
  onOpenEbook: (level: CurriculumLevel) => void;
}

const CurriculumCard: React.FC<{level: CurriculumLevel, onSelect: () => void, onOpenEbook: () => void}> = ({ level, onSelect, onOpenEbook }) => {
    const { l, t } = useTranslation();

    const handleEbookClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onOpenEbook();
    };

    return (
        <div
            onClick={onSelect}
            className="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-xl shadow-soft hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700 hover:border-primary text-left w-full flex flex-col h-full"
        >
            <div className="flex justify-between items-start">
                <div className="bg-primary/10 p-3 rounded-lg flex flex-col items-center justify-center">
                    <img src={ivsLogoSrc} alt="IVS Logo" className="h-8 w-auto" />
                    <span className="text-[10px] text-primary font-semibold mt-1">IVS Education</span>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <div className="mt-4 flex-grow">
                <h3 className="text-xl font-bold text-dark dark:text-slate-100">{l(level.title)}</h3>
                {level.subtitle && <p className="mt-1 text-secondary dark:text-slate-400">{l(level.subtitle)}</p>}
            </div>
            {level.ebookPdfUrl && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <button
                        onClick={handleEbookClick}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
                    >
                        <BookOpenIcon className="h-5 w-5 mr-2" />
                        {t('readEBook')}
                    </button>
                </div>
            )}
        </div>
    );
};

const HomeScreen: React.FC<HomeScreenProps> = ({ curriculum, onSelectLevel, onShowOtherPrograms, onOpenEbook }) => {
  const { t, l } = useTranslation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(prev => (prev === categoryName ? null : categoryName));
  };

  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow main-content-bg">
            <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex flex-col items-center mb-6">
                        <img src={ivsLogoSrc} alt="IVS Logo" className="h-32 w-auto" />
                        <span className="text-dark dark:text-slate-200 font-semibold mt-2 text-lg">IVS Education</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white">
                    {t('welcomeTitle')}
                    </h1>
                    <p className="text-secondary dark:text-slate-400 mt-3 max-w-2xl mx-auto text-lg">
                    {t('welcomeSubtitle')}
                    </p>
                </header>

                <main className="w-full max-w-4xl space-y-4">
                    {curriculum.map((category: CurriculumCategory) => {
                    const categoryName = l(category.category) as string;
                    const isExpanded = expandedCategory === categoryName;

                    return (
                        <div key={categoryName} className="bg-white dark:bg-slate-800 rounded-xl shadow-soft transition-shadow hover:shadow-soft-md animate-fade-in border border-slate-200 dark:border-slate-700">
                        <button
                            onClick={() => toggleCategory(categoryName)}
                            className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                            aria-expanded={isExpanded}
                            aria-controls={`category-content-${categoryName.replace(/\s+/g, '-')}`}
                        >
                            <div className="flex items-center">
                            <div className="bg-primary/10 p-4 rounded-lg mr-5">
                                <CollectionIcon className="h-8 w-8 text-primary"/>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-dark dark:text-slate-100">{categoryName}</h2>
                            </div>
                            <ChevronRightIcon className={`h-7 w-7 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                        
                        <div 
                            id={`category-content-${categoryName.replace(/\s+/g, '-')}`}
                            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 border-t border-slate-200 dark:border-slate-700">
                                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${categoryName.toLowerCase().includes('kindergarten') ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
                                        {category.levels.map((level) => (
                                            <CurriculumCard
                                                key={String(level.level) + l(level.title)}
                                                level={level}
                                                onSelect={() => onSelectLevel(level)}
                                                onOpenEbook={() => onOpenEbook(level)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </main>
                
                <div className="mt-12 text-center w-full max-w-4xl">
                    <button
                        onClick={onShowOtherPrograms}
                        className="text-primary font-semibold hover:text-primary-hover hover:underline transition-colors"
                    >
                        {t('exploreOtherPrograms')}
                    </button>
                </div>
            </div>
        </div>
        <footer className="text-center p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-gray-500 dark:text-slate-400 shrink-0">
            <p className="font-mono text-xs">{t('dunsNumber')}</p>
            <p className="mt-2">{t('copyright')}</p>
            <p className="mt-1">
                {t('designedByText')}
                <a href="https://ivsacademy.edu.vn/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                    {t('designedByLink')}
                </a>.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-3">
                <a href="https://www.youtube.com/@integratevisionsynergy" target="_blank" rel="noopener noreferrer" title="IVS Academy on YouTube" className="text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <YoutubeIcon className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/ivsmastery/" target="_blank" rel="noopener noreferrer" title="IVS Mastery on Facebook" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="https://ivsacademy.edu.vn/" target="_blank" rel="noopener noreferrer" title="IVS Academy Website" className="text-gray-400 hover:text-primary transition-colors">
                    <LinkIcon className="h-6 w-6" />
                </a>
            </div>
        </footer>
    </div>
  );
};

export default HomeScreen;
