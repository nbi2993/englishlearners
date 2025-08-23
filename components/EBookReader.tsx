import React, { useCallback, useEffect } from 'react';
import { XIcon } from './Icons';
import { useTranslation } from '../contexts/i18n';

interface EBookReaderProps {
    onClose: () => void;
    pdfUrl?: string;
}

const EBookReader: React.FC<EBookReaderProps> = ({ onClose, pdfUrl }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!pdfUrl) {
        return null;
    }

    const embedUrl = pdfUrl.includes('drive.google.com') && pdfUrl.includes('/view') ? pdfUrl.split('/view')[0] + '/preview' : pdfUrl;

    return (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 animate-fade-in p-4">
            <div className="absolute top-4 right-4 z-50">
                <button
                    onClick={onClose}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={t('closeEBook')}
                >
                    <XIcon className="h-10 w-10" />
                </button>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
                <iframe
                    src={embedUrl}
                    className="w-full h-full max-w-5xl max-h-full border-0 rounded-lg bg-white"
                    title="E-Book Viewer"
                    allow="fullscreen"
                ></iframe>
            </div>
        </div>
    );
};

export default EBookReader;