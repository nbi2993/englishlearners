
import React, { useState, useMemo, useEffect } from 'react';
import { curriculumData } from '../data/curriculum.ts';
import { CurriculumCategory, CurriculumLevel, Lesson, SearchResult, Unit, VocabularyItem, GrammarPoint } from '../types';
import { useTranslation } from '../contexts/i18n';
import { SearchIcon, BookOpenIcon, LightBulbIcon, AnnotationIcon, ChevronRightIcon, AcademicCapIcon } from './Icons';

// Search logic
const searchCurriculum = (query: string, lang: 'en' | 'vi'): SearchResult[] => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    const getLocalized = (item: any) => {
        if (typeof item === 'object' && item !== null && item[lang]) {
            return item[lang];
        }
        return item;
    }

    for (const category of curriculumData) {
        for (const level of category.levels) {
            for (const unit of level.units) {
                for (const lesson of unit.lessons) {
                    const lessonTitle = getLocalized(lesson.title);
                    if (lessonTitle.toLowerCase().includes(lowerCaseQuery)) {
                        results.push({ type: 'lesson', level, unit, lesson, matchedItem: lessonTitle, matchedText: lessonTitle });
                    }

                    const aims: string[] = getLocalized(lesson.aims);
                    for (const aim of aims) {
                        if (aim.toLowerCase().includes(lowerCaseQuery)) {
                            results.push({ type: 'aim', level, unit, lesson, matchedItem: aim, matchedText: aim });
                        }
                    }

                    for (const vocab of lesson.vocabulary) {
                        const term = vocab.term || '';
                        const vietnamese = vocab.vietnamese || '';
                        if (term.toLowerCase().includes(lowerCaseQuery) || vietnamese.toLowerCase().includes(lowerCaseQuery)) {
                            results.push({ type: 'vocabulary', level, unit, lesson, matchedItem: vocab, matchedText: lang === 'vi' ? `${vietnamese} (${term})` : `${term} (${vietnamese})` });
                        }
                    }

                    for (const grammar of lesson.grammar) {
                        const grammarTitle = getLocalized(grammar.title);
                        if (grammarTitle.toLowerCase().includes(lowerCaseQuery)) {
                            results.push({ type: 'grammar', level, unit, lesson, matchedItem: grammar, matchedText: grammarTitle });
                        }
                    }
                }
            }
        }
    }
    // Deduplicate results, preferring lesson matches
    const uniqueResults = new Map<number, SearchResult>();
    for (const result of results) {
        if (!uniqueResults.has(result.lesson.id) || result.type === 'lesson') {
            uniqueResults.set(result.lesson.id, result);
        }
    }
    return Array.from(uniqueResults.values());
};

const Highlight: React.FC<{ text: string, query: string }> = ({ text, query }) => {
    if (!query || !text) return <>{text}</>;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
        <>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-400 text-black rounded px-1">{part}</mark> : part)}</>
    );
};

const getResultTypeUI = (type: SearchResult['type'], t: (key: any) => string) => {
    const typeMap = {
        lesson: { text: t('searchResultLesson'), icon: <AcademicCapIcon className="h-4 w-4" />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' },
        vocabulary: { text: t('searchResultVocab'), icon: <BookOpenIcon className="h-4 w-4" />, color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
        grammar: { text: t('searchResultGrammar'), icon: <AnnotationIcon className="h-4 w-4" />, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' },
        aim: { text: t('aims'), icon: <LightBulbIcon className="h-4 w-4" />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' },
    };
    return typeMap[type] || typeMap.lesson;
};


const SearchResultCard: React.FC<{ result: SearchResult; query: string; onClick: () => void }> = ({ result, query, onClick }) => {
    const { l, t } = useTranslation();
    const { icon, text, color } = getResultTypeUI(result.type, t);
    
    return (
        <div onClick={onClick} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-soft hover:shadow-soft-md transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-primary cursor-pointer">
            <div className="flex justify-between items-start mb-2">
                <div className={`inline-flex items-center px-2 py-1 text-xs font-bold rounded-full ${color}`}>
                    {icon}<span className="ml-1.5">{text}</span>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-slate-400" />
            </div>
            <p className="font-semibold text-lg text-dark dark:text-slate-100"><Highlight text={l(result.lesson.title)} query={query} /></p>
            <p className="text-sm text-secondary dark:text-slate-400 mb-2">{l(result.level.title)} &gt; {l(result.unit.title)}</p>
            {result.type !== 'lesson' && (
                <p className="text-sm text-gray-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 p-2 rounded-md">
                    <Highlight text={result.matchedText} query={query} />
                </p>
            )}
        </div>
    );
};

const StaticCurriculumView: React.FC<{currentLanguage: 'en' | 'vi'}> = ({ currentLanguage }) => {
     const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(curriculumData.map(c => c.category[currentLanguage])));

     const toggleCategory = (categoryName: string) => {
        setOpenCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(categoryName)) {
                newSet.delete(categoryName);
            } else {
                newSet.add(categoryName);
            }
            return newSet;
        });
     };

     return (
        <div className="space-y-6 mt-6 animate-fade-in">
            {curriculumData.map((category: CurriculumCategory) => {
                const categoryName = category.category[currentLanguage];
                return (
                    <div key={categoryName} className="bg-white dark:bg-slate-800 rounded-xl shadow-soft p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                         <button
                            onClick={() => toggleCategory(categoryName)}
                            className="w-full text-left flex justify-between items-center"
                            aria-expanded={openCategories.has(categoryName)}
                        >
                            <h2 className="text-2xl font-bold text-dark dark:text-slate-100">{categoryName}</h2>
                            <ChevronRightIcon className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${openCategories.has(categoryName) ? 'rotate-90' : ''}`} />
                        </button>
                        {openCategories.has(categoryName) && (
                             <div className="mt-4 border-t dark:border-slate-700 pt-4">
                                <ul className="space-y-1">
                                    {category.levels.map(level => (
                                        <li key={String(level.level)} className="p-2 text-gray-700 dark:text-slate-300 rounded-md">
                                            <span className="font-semibold">{level.title[currentLanguage]}</span>
                                            {level.subtitle && <span className="text-sm text-gray-500 dark:text-slate-400 ml-2">- {level.subtitle[currentLanguage]}</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
     )
};

interface CurriculumDisplayProps {
    onLessonClick: (lesson: Lesson, unit: Unit, level: CurriculumLevel) => void;
}

const CurriculumDisplay: React.FC<CurriculumDisplayProps> = ({ onLessonClick }) => {
    const { t, l, language } = useTranslation();
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    const searchResults = useMemo(() => {
        return searchCurriculum(debouncedQuery, language);
    }, [debouncedQuery, language]);

    return (
        <div className="p-4 sm:p-6 lg:p-8 animate-fade-in main-content-bg min-h-full">
            <header className="mb-6">
                <h1 className="text-4xl font-bold text-dark dark:text-white">{t('curriculum')}</h1>
                <p className="mt-1 text-secondary dark:text-slate-400">{t('searchPlaceholder')}</p>
            </header>

            <div className="relative mb-6">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-slate-500" />
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full p-3 pl-12 text-lg border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary transition-colors bg-white dark:bg-slate-700 dark:text-slate-200"
                    aria-label={t('searchPlaceholder')}
                />
            </div>

            {debouncedQuery ? (
                <div>
                    {searchResults.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {searchResults.map((result, index) => (
                                <SearchResultCard
                                    key={`${result.lesson.id}-${index}`}
                                    result={result}
                                    query={debouncedQuery}
                                    onClick={() => onLessonClick(result.lesson, result.unit, result.level)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-lg text-gray-600 dark:text-slate-400">{t('searchNoResults')}</p>
                        </div>
                    )}
                </div>
            ) : (
                <StaticCurriculumView currentLanguage={language} />
            )}
        </div>
    );
};

export default CurriculumDisplay;
