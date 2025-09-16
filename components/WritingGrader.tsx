import React, { useState } from 'react';
import { gradeWriting } from '../services/geminiService';
import type { WritingFeedback } from '../types';

const WritingGrader: React.FC<{ language: 'en' | 'vi'; translations: any; }> = ({ language, translations }) => {
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
    const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim() || !text.trim()) {
            setError('Please provide both a topic and your writing.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setFeedback(null);

        try {
            const result = await gradeWriting(topic, text);
            setFeedback(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const FeedbackCard: React.FC<{ title: string; content: string; }> = ({ title, content }) => (
        <div className="card-glass p-4">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{content}</p>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto animate-fade-in p-4 sm:p-0 py-6">
            <div className="text-center mb-8">
                <i className="fa-solid fa-pen-ruler text-4xl text-blue-500 mb-3"></i>
                <h1 className="text-3xl font-bold">AI Writing Grader</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Get instant feedback on your writing. Enter a topic and your text below.</p>
            </div>

            <div className="card-glass p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="topic" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Topic
                        </label>
                        <input
                            id="topic"
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., My Summer Vacation"
                            className="form-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="writing-text" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Your Writing
                        </label>
                        <textarea
                            id="writing-text"
                            rows={10}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Write your essay or paragraph here..."
                            className="form-textarea"
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full btn btn-primary py-3">
                        {isLoading ? (
                            <>
                                <i className="fa-solid fa-spinner fa-spin mr-2"></i> Grading...
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-magic-sparkles mr-2"></i> Grade my Writing
                            </>
                        )}
                    </button>
                </form>
            </div>

            {error && (
                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30 rounded-lg">
                    <p><span className="font-bold">Error:</span> {error}</p>
                </div>
            )}

            {feedback && (
                <div className="mt-8 animate-fade-in-slow">
                    <h2 className="text-2xl font-bold mb-4 text-center">Feedback Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 flex flex-col items-center justify-center card-glass p-6">
                            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Overall Score</h3>
                            <p className="text-6xl font-bold text-blue-600 dark:text-blue-400 my-2">{feedback.score}<span className="text-3xl">/100</span></p>
                        </div>
                        <FeedbackCard title="Overall" content={feedback.overall} />
                        <FeedbackCard title="Grammar" content={feedback.grammar} />
                        <FeedbackCard title="Vocabulary" content={feedback.vocabulary} />
                        <FeedbackCard title="Coherence" content={feedback.coherence} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritingGrader;
