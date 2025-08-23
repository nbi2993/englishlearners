
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CurriculumLevel, VocabularyItem, PronunciationFeedback } from '../types';
import { getPronunciationFeedback } from '../services/geminiService';
import { useTranslation } from '../contexts/i18n';
import { XIcon, MicrophoneIcon, SparklesIcon, LightBulbIcon } from './Icons';
import Loader from './Loader';

interface PronunciationPracticeModalProps {
    item: VocabularyItem;
    level: CurriculumLevel;
    onClose: () => void;
}

type RecordingState = 'idle' | 'recording' | 'processing' | 'feedback' | 'error';

const PronunciationPracticeModal: React.FC<PronunciationPracticeModalProps> = ({ item, level, onClose }) => {
    const { t, language } = useTranslation();
    const [recordingState, setRecordingState] = useState<RecordingState>('idle');
    const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleStartRecording = async () => {
        setRecordingState('recording');
        setError(null);
        setFeedback(null);
        audioChunksRef.current = [];

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const options = { mimeType: 'audio/webm' };
             if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                 console.warn(`${options.mimeType} is not Supported. Trying default.`);
            }
            mediaRecorderRef.current = new MediaRecorder(stream, options);
            
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = async () => {
                setRecordingState('processing');
                const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm';
                const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
                stream.getTracks().forEach(track => track.stop());
                
                try {
                    const reader = new FileReader();
                    reader.readAsDataURL(audioBlob);
                    reader.onloadend = async () => {
                        const base64Audio = (reader.result as string).split(',')[1];
                        if (item.term) {
                            const result = await getPronunciationFeedback(item.term, base64Audio, level, language);
                            setFeedback(result);
                            setRecordingState('feedback');
                        } else {
                            throw new Error("No term to practice.");
                        }
                    };
                } catch (e) {
                    console.error(e);
                    setError(t('pronunciationFeedbackError'));
                    setRecordingState('error');
                }
            };
            
            mediaRecorderRef.current.start();
        } catch (err) {
            console.error("Error accessing microphone:", err);
            setError(t('micError'));
            setRecordingState('error');
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
    };

    const reset = () => {
        setRecordingState('idle');
        setFeedback(null);
        setError(null);
    };

    const renderStars = (score: number) => {
        return (
            <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-8 h-8 ${i < score ? 'text-yellow-400' : 'text-gray-300 dark:text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    }
    
    const renderContent = () => {
        switch (recordingState) {
            case 'processing':
                return (
                    <div className="flex flex-col items-center justify-center h-full">
                        <Loader />
                        <p className="mt-4 text-gray-500 dark:text-slate-400">{t('generatingFeedback')}</p>
                    </div>
                );
            case 'feedback':
                if (!feedback) return null;
                return (
                    <div className="text-left animate-fade-in space-y-4">
                        {renderStars(feedback.score)}
                        <p className="text-center italic text-gray-700 dark:text-slate-300">"{feedback.feedback}"</p>
                         {feedback.improvementTips && feedback.improvementTips.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-primary flex items-center mb-1">
                                    <LightBulbIcon className="h-5 w-5 mr-2" />
                                    {t('tipsForImprovement')}
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-400 pl-2">
                                    {feedback.improvementTips.map((tip, i) => <li key={i}>{tip}</li>)}
                                </ul>
                            </div>
                        )}
                        <button onClick={reset} className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover">
                            {t('tryAgain')}
                        </button>
                    </div>
                );
            case 'error':
                 return (
                    <div className="flex flex-col items-center justify-center h-full text-red-600 dark:text-red-400 text-center">
                        <p>{error}</p>
                        <button onClick={reset} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-slate-200 rounded-md hover:bg-gray-300 dark:hover:bg-slate-500">
                            {t('back')}
                        </button>
                    </div>
                );
            case 'recording':
                return (
                     <div className="flex flex-col items-center justify-center h-full">
                         <button onClick={handleStopRecording} className="bg-red-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg animate-pulse">
                            <MicrophoneIcon className="h-10 w-10" />
                            <span className="text-sm font-semibold">STOP</span>
                         </button>
                     </div>
                 );
            case 'idle':
            default:
                 return (
                     <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-gray-500 dark:text-slate-400 mb-2">{t('tapToRecord')}</p>
                        <p className="text-4xl font-bold text-dark dark:text-slate-100 font-sans mb-6">{item.term}</p>
                         <button onClick={handleStartRecording} className="bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg hover:bg-primary-hover transition-transform transform hover:scale-110">
                            <MicrophoneIcon className="h-10 w-10" />
                         </button>
                     </div>
                 );
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-md mx-4 flex flex-col" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b dark:border-slate-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-slate-100 flex items-center">
                        <SparklesIcon className="h-6 w-6 text-primary mr-2" />
                        {t('pronunciationPractice')}
                    </h2>
                    <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 rounded-full">
                        <XIcon className="h-6 w-6" />
                    </button>
                </header>
                <main className="p-6 min-h-[20rem] text-center">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default PronunciationPracticeModal;
