
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './src/contexts/LanguageContext';

function App() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'vi');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <select 
          value={language}
          onChange={handleLanguageChange}
          className="bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </select>
      </div>

      <div className="max-w-3xl mx-auto">
        <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-24 w-auto mb-8"/>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('welcomeTitle')}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-2">
          {t('welcomeDescription')}
        </p>
        
        <p className="text-md md:text-lg text-gray-500 mb-8">
          {t('teacherOptimization')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/signup" 
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            {t('createAccount')}
          </Link>
          <Link 
            to="/signin" 
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition duration-300"
          >
            {t('signIn')}
          </áLink>
        </div>

        {/* Quote */}
        <div className="mt-16">
          <p className="text-xl italic text-gray-500">
            “{t('quoteText')}”
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">- Minh Triet</p>
        </div>
      </div>
    </div>
  );
}

export default App;
