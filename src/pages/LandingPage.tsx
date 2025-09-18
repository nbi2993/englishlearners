
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center items-center p-4 font-sans">
      <div className="w-full max-w-4xl text-center flex flex-col items-center">
        
        <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-20 w-auto mb-6"/>
        
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Welcome to Your Learning Companion
        </h1>
        
        <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
          The smart platform to enhance your English learning and teaching journey, from K-12 and beyond.
        </p>
        <p className="text-gray-600 mt-2 text-base max-w-2xl mx-auto">
          Perfectly optimized for both students and teachers at all levels.
        </p>

        <div className="mt-10 flex justify-center items-center gap-4">
          <Link to="/signup">
            <button className="px-8 py-3 text-base font-semibold text-white bg-[#6A45D4] rounded-lg hover:bg-[#5836B0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A45D4] transition duration-300 shadow-md">
              Create Account
            </button>
          </Link>
          <Link to="/signin">
            <button className="px-8 py-3 text-base font-semibold text-gray-800 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300 shadow-md">
              Sign In
            </button>
          </Link>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <p className="text-gray-500 text-base">
            “For every learner, for every need.”
          </p>
          <p className="text-right text-gray-500 font-medium mt-2">- Minh Triet</p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
