let voices: SpeechSynthesisVoice[] = [];
let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

// Function to pre-load voices
const getVoices = (): Promise<SpeechSynthesisVoice[]> => {
    if (voices.length > 0) {
        return Promise.resolve(voices);
    }
    if (voicesPromise) {
        return voicesPromise;
    }

    voicesPromise = new Promise((resolve) => {
        const allVoices = window.speechSynthesis.getVoices();
        if (allVoices.length) {
            voices = allVoices;
            resolve(voices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                resolve(voices);
            };
        }
    });
    return voicesPromise;
};

// Pre-load voices as soon as the module is imported
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    getVoices();
}

/**
 * Speaks the given text using the best available voice for the specified language.
 * Prioritizes native, female voices.
 * @param text The text to speak.
 * @param lang The BCP 47 language code (e.g., 'en-US', 'zh-CN').
 */
export const speak = async (text: string, lang: string): Promise<void> => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
        console.warn('Speech synthesis not supported or no text provided.');
        return;
    }

    // Ensure any ongoing speech is stopped before starting a new one.
    window.speechSynthesis.cancel();
    
    // Remove any HTML tags from the text
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    try {
        const availableVoices = await getVoices();

        let selectedVoice: SpeechSynthesisVoice | null = null;
        
        // --- Voice Selection Logic ---
        // 1. Exact match for lang + 'female' in name
        selectedVoice = availableVoices.find(v => v.lang === lang && v.name.toLowerCase().includes('female')) || null;

        // 2. Exact match for lang, and name does NOT include 'male'
        if (!selectedVoice) {
            selectedVoice = availableVoices.find(v => v.lang === lang && !v.name.toLowerCase().includes('male')) || null;
        }

        // 3. Fallback to any voice with the exact language
        if (!selectedVoice) {
            selectedVoice = availableVoices.find(v => v.lang === lang) || null;
        }
        
        // 4. Fallback to a more generic language code (e.g., 'en' for 'en-US')
        const genericLang = lang.split('-')[0];
        if (!selectedVoice && genericLang) {
             selectedVoice = availableVoices.find(v => v.lang.startsWith(genericLang) && v.name.toLowerCase().includes('female')) || null;
        }
        if (!selectedVoice && genericLang) {
             selectedVoice = availableVoices.find(v => v.lang.startsWith(genericLang) && !v.name.toLowerCase().includes('male')) || null;
        }
         if (!selectedVoice && genericLang) {
             selectedVoice = availableVoices.find(v => v.lang.startsWith(genericLang)) || null;
        }

        utterance.voice = selectedVoice;

        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error("Error during speech synthesis:", error);
        // Fallback to speaking with whatever default voice is available
        window.speechSynthesis.speak(utterance);
    }
};
