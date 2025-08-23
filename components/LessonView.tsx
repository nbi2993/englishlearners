
import React, { useState, useEffect, useCallback } from 'react';
import { Lesson, Unit, CurriculumLevel, VocabularyItem, GrammarPoint, Activity } from '../types';
import { AnnotationIcon, BookOpenIcon, ClipboardListIcon, LightBulbIcon, SparklesIcon, VolumeUpIcon, CheckCircleIcon, BeakerIcon, DuplicateIcon, MicrophoneIcon, ImageIcon, ArrowLeftIcon } from './Icons';
import { useTranslation } from '../contexts/i18n';
import FlashcardPlayer from './FlashcardPlayer';
import { speak } from '../services/speechService';
import PronunciationPracticeModal from './PronunciationPracticeModal';
import LessonSidebar from './LessonSidebar';
import { generateImageForTerm } from '../services/geminiService';
import Loader from './Loader';

interface LessonViewProps {
  lesson: Lesson;
  unit: Unit;
  level: CurriculumLevel;
  completedLessons: Set<number>;
  onToggleComplete: (lessonId: number) => void;
  onOpenQuiz: () => void;
  onGoBack: () => void;
  onLessonClick: (lesson: Lesson, unit: Unit) => void;
}

type Tab = 'aims' | 'vocabulary' | 'grammar' | 'activities' | 'flashcards';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode, icon: React.ReactNode, disabled?: boolean }> = ({ active, onClick, children, icon, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-all duration-200 focus:outline-none ${
            active
                ? 'border-primary text-primary bg-primary/10'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-disabled={disabled}
    >
        {icon}
        <span className="ml-2">{children}</span>
    </button>
);

const VocabularyCard: React.FC<{
    item: VocabularyItem;
    onPractice: (item: VocabularyItem) => void;
    generatedImageUrl?: string;
    isGenerating: boolean;
    onGenerateImage: () => void;
}> = ({ item, onPractice, generatedImageUrl, isGenerating, onGenerateImage }) => {
    const { term, pronunciation, vietnamese, imageUrl } = item;
    
    const displayTerm = term || '';
    const displayPronunciation = pronunciation || '';
    const finalImageUrl = imageUrl || generatedImageUrl;

    const handlePronounce = (e: React.MouseEvent) => {
        e.stopPropagation();
        speak(displayTerm, 'en-US');
    }

    useEffect(() => {
        if (!finalImageUrl && !isGenerating) {
            onGenerateImage();
        }
    }, [finalImageUrl, isGenerating, onGenerateImage]);


    return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-soft hover:shadow-soft-md hover:border-primary/50 transition-all duration-200 border border-slate-200 dark:border-slate-700 flex flex-col">
            <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                {finalImageUrl ? (
                    <img src={finalImageUrl} alt={displayTerm} className="w-full h-full object-contain" />
                ) : isGenerating ? (
                    <div className="flex flex-col items-center">
                        <Loader />
                        <span className="text-sm text-gray-500 dark:text-slate-400 mt-2">Generating...</span>
                    </div>
                ) : (
                    <ImageIcon className="h-16 w-16 text-gray-300 dark:text-gray-500" />
                )}
            </div>
            <div className="flex justify-between items-start flex-grow">
                <div>
                    <h3 className="text-2xl font-bold text-dark dark:text-slate-100 font-sans">{displayTerm}</h3>
                    <p className="text-secondary dark:text-slate-400">{displayPronunciation}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <button 
                        onClick={() => onPractice(item)}
                        className="p-1 text-gray-400 hover:text-primary transition-colors" title="Practice Pronunciation">
                        <MicrophoneIcon className="h-5 w-5"/>
                    </button>
                    <button 
                        onClick={handlePronounce}
                        className="p-1 text-gray-400 hover:text-primary transition-colors" title="Pronounce">
                        <VolumeUpIcon className="h-5 w-5"/>
                    </button>
                </div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-slate-300">{vietnamese}</p>
        </div>
    );
};


const GrammarCard: React.FC<{item: GrammarPoint}> = ({ item }) => {
    const { l } = useTranslation();

    const englishTitle = typeof item.title === 'string' ? item.title : (item.title as import('../types').LocalizedString).en;
    const englishExplanationLines = Array.isArray(item.explanation) 
        ? item.explanation 
        : (item.explanation as import('../types').LocalizedStringArray).en;

    return (
        <div className="mb-6 p-5 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover:shadow-soft-md hover:border-primary/50 transition-all duration-200 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-primary flex items-center pr-2">
                    <AnnotationIcon className="h-5 w-5 mr-2"/> {l(item.title)}
                </h4>
                <button 
                    onClick={() => speak(englishTitle, 'en-US')}
                    className="p-1 text-gray-400 hover:text-primary transition-colors flex-shrink-0" title="Pronounce title">
                    <VolumeUpIcon className="h-5 w-5"/>
                </button>
            </div>
            {(l(item.explanation) as string[]).map((line, index) => (
                 <div key={index} className="mt-2 flex items-center justify-between text-gray-600 dark:text-slate-300 leading-relaxed">
                    <p className="flex-grow pr-2" dangerouslySetInnerHTML={{ __html: (line ?? '').replace(/\((.*?)\)/g, '<i class="text-gray-500 dark:text-slate-400">($1)</i>') }}></p>
                    <button 
                        onClick={() => speak(englishExplanationLines[index], 'en-US')}
                        className="p-1 text-gray-400 hover:text-primary transition-colors flex-shrink-0 ml-2" title="Pronounce line">
                        <VolumeUpIcon className="h-5 w-5"/>
                    </button>
                </div>
            ))}
        </div>
    );
};


const ActivitySection: React.FC<{item: Activity}> = ({ item }) => {
    const { l } = useTranslation();
    return (
        <div className="mb-6 last:mb-0 p-5 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover:shadow-soft-md hover:border-primary/50 transition-all duration-200 border border-slate-200 dark:border-slate-700">
            <h4 className="text-lg font-semibold text-primary flex items-center">
                <SparklesIcon className="h-5 w-5 mr-2"/> {item.type}
            </h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-slate-300 space-y-1">
                {(l(item.description) as string[]).map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
};

const LessonView: React.FC<LessonViewProps> = ({ lesson, unit, level, completedLessons, onToggleComplete, onOpenQuiz, onGoBack, onLessonClick }) => {
    const [activeTab, setActiveTab] = useState<Tab>('aims');
    const [practiceItem, setPracticeItem] = useState<VocabularyItem | null>(null);
    const { l, t } = useTranslation();
    const isCompleted = completedLessons.has(lesson.id);
    const hasVocabulary = lesson.vocabulary.length > 0;
    
    const [generatedImages, setGeneratedImages] = useState<Map<string, string>>(new Map());
    const [generatingTerms, setGeneratingTerms] = useState<Set<string>>(new Set());

    const handleGenerateImage = useCallback(async (term: string) => {
        if (generatingTerms.has(term) || !term || generatedImages.has(term)) return;

        setGeneratingTerms(prev => new Set(prev).add(term));
        try {
            const imageUrl = await generateImageForTerm(term);
            setGeneratedImages(prev => new Map(prev).set(term, imageUrl));
        } catch (error) {
            console.error("Image generation failed:", error);
        } finally {
            setGeneratingTerms(prev => {
                const newSet = new Set(prev);
                newSet.delete(term);
                return newSet;
            });
        }
    }, [generatingTerms, generatedImages]);

    useEffect(() => {
        setActiveTab('aims');
        setGeneratedImages(new Map());
        setGeneratingTerms(new Set());
    }, [lesson.id]);

    return (
        <div className="flex items-start">
            <LessonSidebar 
                level={level}
                activeLessonId={lesson.id}
                completedLessons={completedLessons}
                onLessonClick={onLessonClick}
            />

            <div className="flex-1 min-w-0">
                <div className="p-4 sm:p-6 lg:p-8">
                    <header className="mb-6">
                        <div className="flex items-center text-sm font-medium text-secondary dark:text-slate-400 mb-2">
                            <button
                                onClick={onGoBack}
                                className="flex items-center hover:text-primary transition-colors mr-2 group"
                                aria-label={t('dashboard')}
                            >
                                <ArrowLeftIcon className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
                                <span className="font-semibold">{t('dashboard')}</span>
                            </button>
                            <span className="text-slate-300 dark:text-slate-600">|</span>
                            <p className="ml-2 truncate">{l(level.title)} &gt; {l(unit.title)}</p>
                        </div>
                        <h1 className="text-4xl font-bold text-dark dark:text-white">{l(lesson.title)}</h1>
                    </header>
                    
                    <div className="border-b border-gray-200 dark:border-slate-700 mb-6">
                        <nav className="-mb-px flex space-x-1 sm:space-x-4 overflow-x-auto" aria-label="Tabs">
                            <TabButton active={activeTab === 'aims'} onClick={() => setActiveTab('aims')} icon={<LightBulbIcon className="h-5 w-5" />}>{t('aims')}</TabButton>
                            <TabButton active={activeTab === 'vocabulary'} onClick={() => setActiveTab('vocabulary')} icon={<BookOpenIcon className="h-5 w-5" />} disabled={!hasVocabulary}>{t('vocabulary')}</TabButton>
                            <TabButton active={activeTab === 'flashcards'} onClick={() => setActiveTab('flashcards')} icon={<DuplicateIcon className="h-5 w-5" />} disabled={!hasVocabulary}>{t('flashcards')}</TabButton>
                            <TabButton active={activeTab === 'grammar'} onClick={() => setActiveTab('grammar')} icon={<AnnotationIcon className="h-5 w-5" />}>{t('grammar')}</TabButton>
                            <TabButton active={activeTab === 'activities'} onClick={() => setActiveTab('activities')} icon={<ClipboardListIcon className="h-5 w-5" />}>{t('activities')}</TabButton>
                        </nav>
                    </div>

                    <div className="min-h-[400px]">
                        {activeTab === 'aims' && (
                            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-soft border border-slate-200 dark:border-slate-700 animate-fade-in">
                                 <h3 className="text-xl font-semibold text-primary mb-3">{t('learningObjectives')}</h3>
                                 <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-slate-300">
                                    {(l(lesson.aims) as string[]).map((aim, index) => <li key={index}>{aim}</li>)}
                                 </ul>
                            </div>
                        )}
                        {activeTab === 'vocabulary' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                                {lesson.vocabulary.map((item, index) => {
                                    const term = item.term || '';
                                    return (
                                        <VocabularyCard 
                                            key={index} 
                                            item={item} 
                                            onPractice={setPracticeItem} 
                                            generatedImageUrl={generatedImages.get(term)}
                                            isGenerating={generatingTerms.has(term)}
                                            onGenerateImage={() => handleGenerateImage(term)}
                                        />
                                    );
                                })}
                            </div>
                        )}
                         {activeTab === 'flashcards' && hasVocabulary && (
                             <div className="animate-fade-in">
                                <FlashcardPlayer vocabulary={lesson.vocabulary} />
                            </div>
                        )}
                        {activeTab === 'grammar' && (
                             <div className="animate-fade-in">
                                {lesson.grammar.map((item, index) => <GrammarCard key={index} item={item} />)}
                            </div>
                        )}
                        {activeTab === 'activities' && (
                             <div className="animate-fade-in">
                                {lesson.activities.map((item, index) => <ActivitySection key={index} item={item} />)}
                            </div>
                        )}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={onOpenQuiz}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
                            >
                                <BeakerIcon className="h-5 w-5 mr-2" />
                                {t('testYourKnowledge')}
                            </button>
                            <button
                                onClick={() => onToggleComplete(lesson.id)}
                                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                                    isCompleted
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-primary hover:bg-primary-hover'
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors`}
                            >
                                <CheckCircleIcon className="h-5 w-5 mr-2"/>
                                {isCompleted ? t('completed') : t('markAsComplete')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {practiceItem && (
                <PronunciationPracticeModal
                    item={practiceItem}
                    level={level}
                    onClose={() => setPracticeItem(null)}
                />
            )}
        </div>
    );
};

export default LessonView;