
import React, { useState, useCallback } from 'react';
import { gradeWriting } from '../services/geminiService';
import type { WritingFeedback } from '../types';

const WritingGrader: React.FC = () => {
  const [topic, setTopic] = useState<string>("My Summer Vacation");
  const [text, setText] = useState<string>("");
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    if (!text.trim() || !topic.trim()) {
      setError("Please provide both a topic and your essay.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const result = await gradeWriting(topic, text);
      setFeedback(result);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [topic, text]);

  const FeedbackDisplay: React.FC<{ feedback: WritingFeedback }> = ({ feedback }) => (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-fade-in">
        <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-gray-800">Your Feedback</h3>
            <div className="text-right">
                <p className="font-bold text-3xl text-blue-600">{feedback.score}<span className="text-lg text-gray-500">/100</span></p>
                <p className="text-sm text-gray-500">Overall Score</p>
            </div>
        </div>

        <div className="mt-6 space-y-4">
            <FeedbackSection icon="fa-star" title="Overall" content={feedback.overall} color="text-yellow-500" />
            <FeedbackSection icon="fa-spell-check" title="Grammar" content={feedback.grammar} color="text-green-500" />
            <FeedbackSection icon="fa-book-open" title="Vocabulary" content={feedback.vocabulary} color="text-purple-500" />
            <FeedbackSection icon="fa-link" title="Coherence" content={feedback.coherence} color="text-red-500" />
        </div>
    </div>
);

  const FeedbackSection: React.FC<{icon: string, title: string, content: string, color: string}> = ({ icon, title, content, color }) => (
    <div>
        <h4 className={`text-lg font-semibold flex items-center ${color}`}>
            <i className={`fa-solid ${icon} mr-3 w-5 text-center`}></i>
            {title}
        </h4>
        <p className="text-gray-600 mt-1 pl-8">{content}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">AI Writing Grader</h2>
        <p className="text-gray-500 mt-2">Get instant feedback on your writing to improve your skills.</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., My Favorite Animal"
          />
        </div>

        <div>
          <label htmlFor="essay" className="block text-sm font-medium text-gray-700 mb-1">Your Essay</label>
          <textarea
            id="essay"
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your essay here..."
          />
        </div>
        
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isLoading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                Grading...
              </>
            ) : (
              'Get Feedback'
            )}
          </button>
        </div>
      </div>
      
      {error && <div className="mt-4 text-center p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}
      
      {feedback && <FeedbackDisplay feedback={feedback} />}
    </div>
  );
};

export default WritingGrader;
