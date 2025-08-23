
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { VocabularyItem } from '../types';
import { useTranslation } from '../contexts/i18n';
import { ArrowLeftIcon, ArrowRightIcon, RefreshIcon, VolumeUpIcon, ImageIcon } from './Icons';
import { speak } from '../services/speechService';
import { generateImageForTerm } from '../services/geminiService';
import Loader from './Loader';

interface FlashcardPlayerProps {
    vocabulary: VocabularyItem[];
}

const FlashcardPlayer: React.FC<FlashcardPlayerProps> = ({ vocabulary }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [shuffledVocab, setShuffledVocab] = useState<VocabularyItem[]>([]);
    const [generatedImages, setGeneratedImages] = useState<Map<string, string>>(new Map());
    const [isGeneratingImageFor, setIsGeneratingImageFor] = useState<string | null>(null);

    const shuffleArray = useCallback((array: VocabularyItem[]) => {
        return [...array].sort(() => Math.random() - 0.5);
    }, []);

    const playSound = useCallback((text: string | undefined) => {
        if (text) {
            speak(text, 'en-US');
        }
    }, []);

    const handleGenerateImage = useCallback(async (term: string) => {
        if (isGeneratingImageFor || !term) return;

        setIsGeneratingImageFor(term);
        try {
            const imageUrl = await generateImageForTerm(term);
            setGeneratedImages(prev => new Map(prev).set(term, imageUrl));
        } catch (error) {
            console.error("Image generation failed:", error);
        } finally {
            setIsGeneratingImageFor(null);
        }
    }, [isGeneratingImageFor]);

    useEffect(() => {
        const initialShuffle = shuffleArray(vocabulary);
        setShuffledVocab(initialShuffle);
        setCurrentIndex(0);
        setIsFlipped(false);
        setGeneratedImages(new Map());
        setIsGeneratingImageFor(null);
        if (initialShuffle.length > 0) {
            playSound(initialShuffle[0].term);
        }
    }, [vocabulary, shuffleArray, playSound]);

    const currentItem = useMemo(() => shuffledVocab[currentIndex], [shuffledVocab, currentIndex]);

    useEffect(() => {
        const term = currentItem?.term;
        if (term && !currentItem.imageUrl && !generatedImages.has(term) && !isGeneratingImageFor) {
            handleGenerateImage(term);
        }
    }, [currentItem, generatedImages, isGeneratingImageFor, handleGenerateImage]);

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => {
            const currentItem = shuffledVocab[currentIndex];
            if (!prev && currentItem) { // If flipping to back (showing answer)
                playSound(currentItem.term);
            }
            return !prev;
        });
    }, [shuffledVocab, currentIndex, playSound]);

    const navigate = useCallback((direction: 'next' | 'prev') => {
        setIsFlipped(false);
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= 0 && newIndex < shuffledVocab.length) {
            setCurrentIndex(newIndex);
            const nextItem = shuffledVocab[newIndex];
            if (nextItem) {
                playSound(nextItem.term);
            }
        }
    }, [currentIndex, shuffledVocab, playSound]);
    
    const handleNext = useCallback(() => navigate('next'), [navigate]);
    const handlePrev = useCallback(() => navigate('prev'), [navigate]);

    const handleShuffle = () => {
        setIsFlipped(false);
        const newShuffled = shuffleArray(vocabulary);
        setShuffledVocab(newShuffled);
        setCurrentIndex(0);
        if (newShuffled.length > 0) {
            playSound(newShuffled[0].term);
        }
    };

    const handlePronounceClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if(currentItem) {
            playSound(currentItem.term);
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === ' ') {
                e.preventDefault();
                handleFlip();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev, handleFlip]);

    if (!currentItem) {
        return <div className="p-4 text-center text-gray-500 dark:text-slate-400">{t('noVocabulary')}</div>;
    }
    
    const progressPercentage = shuffledVocab.length > 1 ? (currentIndex / (shuffledVocab.length - 1)) * 100 : (shuffledVocab.length === 1 ? 100 : 0);
    const displayTerm = currentItem.term || '';
    const finalImageUrl = currentItem.imageUrl || generatedImages.get(displayTerm);
    const isLoadingImage = isGeneratingImageFor === displayTerm;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-xl">
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-4">
                    <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                
                <div 
                    className="relative w-full aspect-[16/10] cursor-pointer group" 
                    onClick={handleFlip}
                    style={{ perspective: '1200px' }}
                >
                    <div 
                        className="absolute w-full h-full transition-transform duration-700"
                        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                    >
                        {/* Front of the card */}
                        <div className="absolute w-full h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-6" style={{ backfaceVisibility: 'hidden' }}>
                            {finalImageUrl ? (
                                <>
                                  <img src={finalImageUrl} alt={displayTerm} className="max-w-full max-h-[65%] object-contain" />
                                  <h2 className="mt-4 text-4xl md:text-5xl font-sans font-bold text-dark dark:text-slate-100 break-words text-center">{displayTerm}</h2>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center h-full">
                                    <h2 className="text-5xl md:text-6xl font-sans font-bold text-dark dark:text-slate-100 break-words">{displayTerm}</h2>
                                    {isLoadingImage && (
                                        <div className="flex items-center text-secondary dark:text-slate-400 mt-4">
                                            <Loader />
                                            <span className="ml-3">Generating image...</span>
                                        </div>
                                    )}
                                </div>
                            )}
                             <button 
                                onClick={handlePronounceClick}
                                className="absolute bottom-4 right-4 p-2 text-gray-400 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
                                title="Pronounce"
                             >
                                <VolumeUpIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        {/* Back of the card */}
                        <div className="absolute w-full h-full bg-teal-50 dark:bg-slate-700 rounded-xl shadow-lg border-2 border-primary/50 dark:border-primary/70 flex flex-col items-center justify-center p-6 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                            <h2 className="text-4xl md:text-5xl font-sans font-bold text-dark dark:text-slate-100 break-words">{currentItem.term}</h2>
                            {currentItem.pronunciation && <p className="text-2xl text-secondary dark:text-slate-400 font-semibold mt-2">{currentItem.pronunciation}</p>}
                            <p className="text-3xl text-primary font-bold mt-4">{currentItem.vietnamese}</p>
                            <button 
                                onClick={handlePronounceClick}
                                className="absolute bottom-4 right-4 p-2 text-gray-400 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
                                title="Pronounce"
                            >
                                <VolumeUpIcon className="h-6 w-6"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-full disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors shadow-sm">
                        <ArrowLeftIcon className="h-6 w-6 text-gray-600 dark:text-slate-300" />
                    </button>
                    <button onClick={handleShuffle} className="flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-md">
                        <RefreshIcon className="h-5 w-5 mr-2" />
                        {t('shuffle')}
                    </button>
                    <button onClick={handleNext} disabled={currentIndex === shuffledVocab.length - 1} className="p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-full disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors shadow-sm">
                        <ArrowRightIcon className="h-6 w-6 text-gray-600 dark:text-slate-300" />
                    </button>
                </div>
                   <p className="text-center text-secondary dark:text-slate-400 text-sm mt-4">
                    {t('card')} {currentIndex + 1} / {shuffledVocab.length}. Use ← → to navigate, Spacebar to flip.
                </p>
            </div>
        </div>
    );
};

export default FlashcardPlayer;
