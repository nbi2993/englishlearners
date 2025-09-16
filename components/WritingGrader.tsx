import React, { useState } from 'react';
import { gradeWriting } from '../services/geminiService';
import type { WritingFeedback } from '../types';

const WritingGrader: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || !text.trim()) {
      setError('Please enter both a topic and your text.');
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
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="text-center mb-8">
        <i className="fa-solid fa-pen-ruler text-5xl text-blue-500 mb-4"></i>
        <h1 className="text-4xl font-bold">AI Writing Grader</h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Get instant feedback on your writing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-glass p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Topic</label>
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="form-input"
                placeholder="e.g., My Summer Vacation"
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Your Text</label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-textarea h-64"
                placeholder="Write your essay or paragraph here..."
                disabled={isLoading}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin mr-2"></i>
                  Grading...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-magic-sparkles mr-2"></i>
                  Grade My Writing
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex flex-col">
          <div className="card-glass p-6 flex-grow">
            <h2 className="text-2xl font-bold mb-4">Feedback</h2>
            {error && <div className="alert-danger">{error}</div>}
            {isLoading && (
              <div className="text-center py-8">
                <i className="fa-solid fa-robot text-4xl text-blue-500 animate-bounce"></i>
                <p className="mt-4 text-slate-500 dark:text-slate-400">Our AI is analyzing your text...</p>
              </div>
            )}
            {feedback && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center p-4 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Overall Score</p>
                    <p className={`text-6xl font-bold ${getScoreColor(feedback.score)}`}>{feedback.score}<span className="text-3xl">/100</span></p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold flex items-center"><i className="fa-solid fa-star text-amber-400 mr-2"></i>Overall</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">{feedback.overall}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold flex items-center"><i className="fa-solid fa-spell-check text-green-500 mr-2"></i>Grammar</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">{feedback.grammar}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold flex items-center"><i className="fa-solid fa-book-bookmark text-blue-500 mr-2"></i>Vocabulary</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">{feedback.vocabulary}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold flex items-center"><i className="fa-solid fa-stream text-purple-500 mr-2"></i>Coherence</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">{feedback.coherence}</p>
                </div>
              </div>
            )}
            {!isLoading && !feedback && !error && (
                <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                    <i className="fa-solid fa-file-lines text-4xl mb-4"></i>
                    <p>Your feedback will appear here once you submit your text.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingGrader;
