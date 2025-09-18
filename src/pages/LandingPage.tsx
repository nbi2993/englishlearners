
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md text-center">
        
        {/* Logo */}
        <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-20 w-auto mb-6"/>
        
        {/* Welcome Title */}
        <h1 className="text-4xl font-bold text-gray-900">{t('welcomeTitle')}</h1>
        
        {/* Welcome Description */}
        <p className="text-gray-600 mt-3 text-lg">
          {t('welcomeDescription')}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/signup">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
              {t('createAccount')}
            </button>
          </Link>
          <Link to="/signin">
            <button className="px-8 py-3 text-lg font-semibold text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
              {t('signIn')}
            </button>
          </Link>
        </div>

        {/* Quote */}
        <div className="mt-12">
          <p className="text-lg italic text-gray-500">
            “{t('quoteText')}”
            <span className="block text-right mt-1 text-gray-600 font-medium">- Minh Triet</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
