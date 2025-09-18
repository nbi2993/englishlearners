
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4">
      <div className="max-w-2xl">
        <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-24 w-auto mb-8"/>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your Learning Companion
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          The smart platform to enhance your English learning journey, powered by Minh Triet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/signup" 
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Create an Account
          </Link>
          <Link 
            to="/signin" 
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
