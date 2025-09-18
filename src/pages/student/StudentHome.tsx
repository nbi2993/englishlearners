
import React from 'react';
import { auth } from '../../firebase'; // Adjusted path
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const StudentHome: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
        <button 
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
        >
          Sign Out
        </button>
      </header>
      
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Student!</h2>
          <p className="text-gray-700">This is your personal learning space. Your courses, assignments, and progress will appear here.</p>
          {/* More student-specific components will go here */}
        </div>
      </main>
    </div>
  );
};

export default StudentHome;
