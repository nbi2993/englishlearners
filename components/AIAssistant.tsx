
import React, { useState, useCallback, useEffect } from 'react';
import { Lesson, CurriculumLevel } from '../types';
import { SparklesIcon, XIcon, ChatAlt2Icon, DocumentTextIcon, BeakerIcon } from './Icons';
import QuizGenerator from './QuizGenerator';
import { generateExplanation, generateDialogue } from '../services/geminiService';
import Loader from './Loader';
import { useTranslation } from '../contexts/i18n';

export type AIAction = 'quiz' | 'explain' | 'dialogue' | null;

interface AIAssistantProps {
    lesson: Lesson;
    level: CurriculumLevel;
    isOpen: boolean;
    initialAction: AIAction;
    onClose: () => void;
    onQuizComplete: () => void;
}

const actionButtonColorClasses = {
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-900',
    green: 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-200 dark:hover:bg-green-900',
    purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:hover:bg-purple-900',
};

const ActionButton: React.FC<{onClick: () => void, icon: React.ReactNode, color: 'blue' | 'green' | 'purple', children: React.ReactNode}> = ({onClick, icon, color, children}) => {
    return (
        <button onClick={onClick} className={`p-6 rounded-lg transition-colors flex flex-col items-center justify-center h-32 ${actionButtonColorClasses[color]}`}>
            <div className="h-8 w-8 mb-2">{icon}</div>
            <span className="font-semibold">{children}</span>
        </button>
    );
};

const AIAssistant: React.FC<AIAssistantProps> = ({ lesson, level, isOpen, initialAction, onClose, onQuizComplete }) => {
    const [action, setAction] = useState<AIAction>(initialAction);
    const [isLoading, setIsLoading] = useState(false);
    const [generatedContent, setGeneratedContent] = useState<string>('');
    const { t, l, language } = useTranslation();

    const handleGenerateExplanation = useCallback(async (grammarTopic: string) => {
        setIsLoading(true);
        setGeneratedContent('');
        try {
            const explanation = await generateExplanation(grammarTopic, l(lesson.title), level, language);
            setGeneratedContent(explanation);
        } catch (error) {
            console.error("Error generating explanation:", error);
            setGeneratedContent(t('errorGeneric'));
        } finally {
            setIsLoading(false);
        }
    }, [lesson, level, language, l, t]);

    const handleGenerateDialogue = useCallback(async () => {
        setIsLoading(true);
        setGeneratedContent('');
        try {
            const dialogue = await generateDialogue(l(lesson.title), lesson.vocabulary, level, language);
            setGeneratedContent(dialogue);
        } catch (error) {
            console.error("Error generating dialogue:", error);
            setGeneratedContent(t('errorGeneric'));
        } finally {
            setIsLoading(false);
        }
    }, [lesson, level, l, language, t]);

    useEffect(() => {
        setAction(initialAction);
        if(initialAction === 'dialogue') {
            handleGenerateDialogue();
        }
    }, [initialAction, handleGenerateDialogue]);
    
    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal closes
            setGeneratedContent('');
            setAction(null);
        }
    }, [isOpen]);

    const handleActionClick = (selectedAction: AIAction) => {
        setAction(selectedAction);
        setGeneratedContent('');
        if (selectedAction === 'dialogue') {
            handleGenerateDialogue();
        }
    };
    
    const renderContent = () => {
        if (action === null) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <ActionButton onClick={() => handleActionClick('quiz')} icon={<BeakerIcon />} color="blue">{t('createQuiz')}</ActionButton>
                    <ActionButton onClick={() => handleActionClick('explain')} icon={<DocumentTextIcon />} color="green">{t('explainGrammar')}</ActionButton>
                    <ActionButton onClick={() => handleActionClick('dialogue')} icon={<ChatAlt2Icon />} color="purple">{t('createDialogue')}</ActionButton>
                </div>
            );
        }
        
        if (isLoading) {
            return <div className="flex justify-center items-center h-48"><Loader /></div>;
        }

        switch (action) {
            case 'quiz':
                return <QuizGenerator lesson={lesson} level={level} language={language} onQuizComplete={onQuizComplete} />;
            case 'explain':
                if (generatedContent) {
                     return (
                        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-md whitespace-pre-wrap font-sans text-gray-700 dark:text-slate-200 max-h-96 overflow-y-auto">
                            {generatedContent}
                        </div>
                    );
                }
                if (lesson.grammar.length === 0) {
                    return <p className="text-center text-gray-600 dark:text-slate-400">{t('noGrammarPoints')}</p>;
                }
                return (
                    <div>
                        <p className="text-center text-gray-600 dark:text-slate-400 mb-4">{t('selectGrammarTopic')}</p>
                        <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                            {lesson.grammar.map((point, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleGenerateExplanation(l(point.title))}
                                    className="w-full text-left p-3 bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-gray-200 rounded-md transition-colors"
                                >
                                    {l(point.title)}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'dialogue':
                return (
                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-md whitespace-pre-wrap font-sans text-gray-700 dark:text-slate-200 max-h-96 overflow-y-auto">
                        {generatedContent}
                    </div>
                );
            default:
                return null;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-2xl mx-4 flex flex-col">
                <header className="flex items-center justify-between p-4 border-b dark:border-slate-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-slate-100 flex items-center">
                        <SparklesIcon className="h-6 w-6 text-primary mr-2" />
                        {action ? t('aiAssistantFor', { lessonTitle: l(lesson.title) }) : t('aiAssistant')}
                    </h2>
                    <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 rounded-full">
                        <XIcon className="h-6 w-6" />
                    </button>
                </header>
                <main className="p-6 flex-grow min-h-[1rem]">
                    {action !== 'quiz' && action !== null && (
                        <button onClick={() => setAction(null)} className="mb-4 text-sm text-primary hover:underline">
                            &larr; {t('back')}
                        </button>
                    )}
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AIAssistant;