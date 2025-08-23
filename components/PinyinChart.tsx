
import React from 'react';
import { useTranslation } from '../contexts/i18n';

const PinyinChart: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-700">Feature Not Available</h1>
            <p className="text-gray-500 mt-2">This feature has been removed to focus on English language learning.</p>
        </div>
    );
};

export default PinyinChart;
