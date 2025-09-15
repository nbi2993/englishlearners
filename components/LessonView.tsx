import React, { useState } from 'react';
import type { Course } from '../types';
import { translateToVietnamese } from '../services/geminiService';

interface LessonViewProps {
  course: Course;
}

const LessonView: React.FC<LessonViewProps> = ({ course }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [selectedText, setSelectedText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [showTranslationModal, setShowTranslationModal] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  
  const lesson = course.lessons[0]; // For demo, always show the first lesson
  const quizOptions = ['Friends', 'Family', 'School', 'Animals'];
  const correctAnswer = 'Friends';

  const handleQuizSubmit = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const getButtonClass = (option: string) => {
    if (selectedAnswer !== option) {
      return 'bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600';
    }
    return isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
  };

  const handleTranslate = async () => {
    const text = window.getSelection()?.toString().trim();
    if (!text) {
      alert("Please select some text from the story to translate.");
      return;
    }

    setSelectedText(text);
    setIsTranslating(true);
    setTranslationError(null);
    setTranslatedText('');
    setShowTranslationModal(true);

    try {
      const translation = await translateToVietnamese(text);
      setTranslatedText(translation);
    } catch (err) {
      setTranslationError("Sorry, we couldn't translate that text. Please try again.");
    } finally {
      setIsTranslating(false);
    }
  };


  const MockEbook: React.FC = () => (
      <div>
        <h3 className="text-2xl font-bold mb-4">Lesson: {lesson.title}</h3>
        <div className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-700 p-6 rounded-lg shadow select-text">
          <p>{lesson.content}</p>
          <p>Once upon a time, in a sunny meadow, lived a little rabbit named Rusty. He loved to hop and play with all his friends. Today, they decided to have a picnic by the sparkling river.</p>
          <p>What is this story about?</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <i className="fa-solid fa-volume-high mr-2"></i>
                AI Read Aloud
            </button>
             <button 
                onClick={handleTranslate} 
                disabled={isTranslating}
                className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:bg-teal-300"
              >
                <i className={`fa-solid ${isTranslating ? 'fa-spinner fa-spin' : 'fa-language'} mr-2`}></i>
                Translate
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                <i className="fa-solid fa-highlighter mr-2"></i>
                Highlight
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                <i className="fa-solid fa-bookmark mr-2"></i>
                Bookmark
            </button>
        </div>
      </div>
  );
  
  const MockQuiz: React.FC = () => (
    <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Interactive Quiz</h4>
        <div className="space-y-3">
          {quizOptions.map(option => (
            <button
              key={option}
              onClick={() => handleQuizSubmit(option)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-lg shadow-sm border dark:border-gray-600 transition-all duration-200 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <div className={`mt-4 p-4 rounded-lg text-white ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
            {isCorrect ? 'Correct! Great job!' : `Not quite. The correct answer is "${correctAnswer}".`}
          </div>
        )}
    </div>
  );

  const TranslationModal: React.FC = () => {
    if (!showTranslationModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all">
          <div className="flex justify-between items-center mb-4 border-b dark:border-gray-700 pb-3">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white">Vietnamese Translation</h4>
            <button onClick={() => setShowTranslationModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl">&times;</button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">Original (English)</p>
              <p className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200">{selectedText}</p>
            </div>
            <div>
              <p className="font-semibold text-teal-600 dark:text-teal-400 text-sm mb-1">Translation (Vietnamese)</p>
              <div className="p-3 bg-teal-50 dark:bg-teal-900/50 rounded-lg text-teal-800 dark:text-teal-200 min-h-[4rem]">
                {isTranslating ? (
                   <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                       <i className="fa-solid fa-spinner fa-spin"></i>
                       <span>Translating...</span>
                   </div>
                ) : translationError ? (
                  <p className="text-red-500">{translationError}</p>
                ) : (
                  <p>{translatedText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">{course.title}</h2>
      <p className={`text-lg font-semibold ${course.color.replace('bg-', 'text-')} mb-6`}>{course.series}</p>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-inner">
          <MockEbook />
          <MockQuiz />
      </div>
      <TranslationModal />
    </div>
  );
};

export default LessonView;