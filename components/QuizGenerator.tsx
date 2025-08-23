import React, { useState, useEffect, useCallback } from 'react';
import { Lesson, Quiz, QuizQuestion, CurriculumLevel } from '../types';
import { generateQuiz } from '../services/geminiService';
import Loader from './Loader';
import { useTranslation, Language } from '../contexts/i18n';

interface QuizGeneratorProps {
    lesson: Lesson;
    level: CurriculumLevel;
    language: Language;
    onQuizComplete: () => void;
}

const QuizGenerator: React.FC<QuizGeneratorProps> = ({ lesson, level, language, onQuizComplete }) => {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
    const [showResults, setShowResults] = useState(false);
    const [quizPassed, setQuizPassed] = useState(false);
    const { t } = useTranslation();

    const fetchQuiz = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setQuiz(null);
        setShowResults(false);
        setUserAnswers({});
        setQuizPassed(false);
        try {
            const generatedQuiz = await generateQuiz(lesson, level, language);
            setQuiz(generatedQuiz);
        } catch (err) {
            setError(t('quizFailed'));
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [lesson, level, t, language]);
    
    useEffect(() => {
        fetchQuiz();
    }, [fetchQuiz]);

    const handleAnswerChange = (questionIndex: number, answer: string) => {
        setUserAnswers(prev => ({...prev, [questionIndex]: answer}));
    };

    const handleSubmit = () => {
        const score = calculateScore();
        const total = quiz?.questions.length || 0;
        const percentage = total > 0 ? (score / total) * 100 : 0;
        
        if (percentage >= 80) {
            setQuizPassed(true);
            onQuizComplete();
        }
        setShowResults(true);
    };

    const calculateScore = () => {
        if (!quiz) return 0;
        let correctAnswers = 0;
        quiz.questions.forEach((q, index) => {
            if (userAnswers[index] === q.answer) {
                correctAnswers++;
            }
        });
        return correctAnswers;
    };
    
    if (isLoading) {
        return <div className="flex flex-col items-center justify-center h-64"><Loader /><p className="mt-2 text-gray-500 dark:text-slate-400">{t('generatingQuiz')}</p></div>;
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">{error}</div>;
    }

    if (!quiz) {
        return <div className="text-center p-4 dark:text-slate-400">{t('noQuiz')}</div>;
    }
    
    if(showResults) {
        const score = calculateScore();
        const total = quiz.questions.length;
        return (
            <div className="p-4">
                <h3 className="text-xl font-bold text-center mb-2">{t('quizResults')}</h3>
                <p className="text-center text-2xl font-semibold mb-4">{t('score', { score, total })}</p>
                {quizPassed && (
                    <p className="text-center text-green-600 dark:text-green-300 font-semibold mb-4 bg-green-100 dark:bg-green-900/50 p-2 rounded-md">
                        {t('quizPassedMessage')}
                    </p>
                )}
                <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                    {quiz.questions.map((q, index) => {
                        const userAnswer = userAnswers[index];
                        const isCorrect = userAnswer === q.answer;
                        const userAnswerText = userAnswer ? q.options[userAnswer] : t('noAnswer');
                        return (
                             <div key={index} className={`p-3 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                                <p className="font-semibold text-gray-800 dark:text-slate-100">{index + 1}. {q.question}</p>
                                <p className="text-sm mt-1 text-gray-700 dark:text-slate-300">{t('yourAnswer', { answer: userAnswerText, result: isCorrect ? t('correct') : t('incorrect') })}</p>
                                {!isCorrect && <p className="text-sm text-green-700 dark:text-green-400 font-semibold">{t('correctAnswer', { answer: q.options[q.answer] })}</p>}
                            </div>
                        );
                    })}
                </div>
                 <div className="mt-6 text-center">
                    <button onClick={fetchQuiz} className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover">
                        {t('tryNewQuiz')}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6 max-h-96 overflow-y-auto p-1 pr-4">
            {quiz.questions.map((q, index) => (
                <div key={index}>
                    <p className="font-semibold text-gray-800 dark:text-slate-100">{index + 1}. {q.question}</p>
                    <div className="mt-2 space-y-2">
                        {Object.entries(q.options).map(([key, value]) => (
                             <label key={key} className="flex items-center p-2 rounded-md border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                <input 
                                    type="radio" 
                                    name={`question-${index}`} 
                                    value={key}
                                    checked={userAnswers[index] === key}
                                    onChange={() => handleAnswerChange(index, key)}
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-slate-600 bg-transparent"
                                />
                                <span className="ml-3 text-gray-700 dark:text-slate-300">{key}: {value}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
             <div className="mt-6 text-center">
                <button onClick={handleSubmit} disabled={Object.keys(userAnswers).length !== quiz.questions.length} className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-hover disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed">
                    {t('submitAnswers')}
                </button>
            </div>
        </div>
    );
};

export default QuizGenerator;