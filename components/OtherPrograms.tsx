
import React from 'react';
import { otherProgramsData } from '../data/otherPrograms';
import { OtherProgram } from '../types';
import { useTranslation } from '../contexts/i18n';
import { ArrowLeftIcon, BookOpenIcon, LinkIcon, YoutubeIcon, FacebookIcon } from './Icons';

interface OtherProgramsProps {
    onGoBack: () => void;
    onViewProgram: (url: string) => void;
}

const OtherProgramCard: React.FC<{ program: OtherProgram, onView: () => void }> = ({ program, onView }) => {
    const { t, l } = useTranslation();
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-soft hover:shadow-soft-md transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
            <div className="flex-grow">
                <div className="bg-accent/10 p-3 rounded-lg inline-block mb-4">
                    <BookOpenIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-slate-100">{l(program.title)}</h3>
                <p className="mt-2 text-secondary dark:text-slate-400 flex-grow">{l(program.description)}</p>
            </div>
            <div className="mt-6">
                 <button 
                    onClick={onView} 
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-sm"
                >
                    <LinkIcon className="h-5 w-5 mr-2" />
                    {t('viewProgram')}
                </button>
            </div>
        </div>
    );
};

const OtherPrograms: React.FC<OtherProgramsProps> = ({ onGoBack, onViewProgram }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen main-content-bg">
            <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
                    <button
                        onClick={onGoBack}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-4"
                        title={t('goBack')}
                    >
                        <ArrowLeftIcon className="h-6 w-6 text-gray-700 dark:text-slate-300" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-dark dark:text-slate-100">{t('otherProgramsTitle')}</h1>
                        <p className="text-secondary dark:text-slate-400 text-sm">{t('otherProgramsDescription')}</p>
                    </div>
                </div>
            </header>
            <main className="flex-grow p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {otherProgramsData.map((program, index) => (
                        <OtherProgramCard
                            key={index}
                            program={program}
                            onView={() => onViewProgram(program.driveLink)}
                        />
                    ))}
                </div>
            </main>
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

export default OtherPrograms;
