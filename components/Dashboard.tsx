
import React, { useMemo } from 'react';
import { CurriculumLevel, Unit, Lesson } from '../types';
import { AcademicCapIcon, BookOpenIcon, HashtagIcon, TranslateIcon, ChevronRightIcon } from './Icons';
import { useTranslation } from '../contexts/i18n';

interface DashboardProps {
    level: CurriculumLevel;
    completedLessons: Set<number>;
    onLessonClick: (lesson: Lesson, unit: Unit) => void;
    onOpenEbook: (level: CurriculumLevel) => void;
}

const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string | number }> = ({ icon, label, value }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-soft border border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary/10 mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-secondary dark:text-slate-400">{label}</p>
                <p className="text-2xl font-bold text-dark dark:text-slate-100">{value}</p>
            </div>
        </div>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ level, completedLessons, onLessonClick, onOpenEbook }) => {
    const { t, l } = useTranslation();

    const stats = useMemo(() => {
        let totalLessons = 0;
        let totalVocab = 0;
        let totalGrammar = 0;
        let firstUncompleted: { lesson: Lesson, unit: Unit } | null = null;

        for (const unit of level.units) {
            for (const lesson of unit.lessons) {
                totalLessons++;
                totalVocab += lesson.vocabulary.length;
                totalGrammar += lesson.grammar.length;

                if (!completedLessons.has(lesson.id) && !firstUncompleted) {
                    firstUncompleted = { lesson, unit };
                }
            }
        }
        
        const completedLessonsInLevel = Array.from(completedLessons).filter(id => level.units.some(u => u.lessons.some(l => l.id === id))).length;
        
        const progress = totalLessons > 0 ? Math.round((completedLessonsInLevel / totalLessons) * 100) : 0;

        return { totalLessons, totalVocab, totalGrammar, completedCount: completedLessonsInLevel, progress, firstUncompleted };
    }, [level, completedLessons]);

    const handleContinueClick = () => {
        if (stats.firstUncompleted) {
            onLessonClick(stats.firstUncompleted.lesson, stats.firstUncompleted.unit);
        } else if (level.units.length > 0 && level.units[0].lessons.length > 0) {
            onLessonClick(level.units[0].lessons[0], level.units[0]);
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 animate-fade-in main-content-bg h-full overflow-y-auto">
            <header className="mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                         <AcademicCapIcon className="h-12 w-12 text-primary" />
                         <div>
                            <h1 className="text-4xl font-bold text-dark dark:text-white">{l(level.title)}</h1>
                            <p className="text-secondary dark:text-slate-400 mt-1">{l(level.subtitle)}</p>
                         </div>
                    </div>
                    {level.ebookPdfUrl && (
                        <button
                            onClick={() => onOpenEbook(level)}
                            className="inline-flex items-center justify-center px-5 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:bg-accent-hover transition-all transform hover:scale-105"
                        >
                            <BookOpenIcon className="h-5 w-5 mr-2"/>
                            <span>{t('readEBook')}</span>
                        </button>
                    )}
                </div>
            </header>
            
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl shadow-soft-md border border-slate-200 dark:border-slate-700 mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-dark dark:text-slate-200">{t('progress')}</h2>
                    <span className="font-bold text-primary">{stats.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${stats.progress}%` }}></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard icon={<BookOpenIcon className="h-6 w-6 text-primary"/>} label={t('lessonsCompleted')} value={`${stats.completedCount} / ${stats.totalLessons}`} />
                <StatCard icon={<TranslateIcon className="h-6 w-6 text-primary"/>} label={t('vocabToLearn')} value={stats.totalVocab} />
                <StatCard icon={<HashtagIcon className="h-6 w-6 text-primary"/>} label={t('grammarPoints')} value={stats.totalGrammar} />
            </div>

            <div>
                 <button 
                    onClick={handleContinueClick}
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-hover transition-all transform hover:scale-105"
                >
                    <span>{stats.completedCount > 0 && stats.firstUncompleted ? t('continueLearning') : t('startLearning')}</span>
                    <ChevronRightIcon className="h-5 w-5 ml-2"/>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
