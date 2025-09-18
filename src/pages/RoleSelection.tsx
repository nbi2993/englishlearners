
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const RoleSelection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleRoleSelect = async (role: 'student' | 'teacher') => {
    setLoading(true);
    const user = auth.currentUser;

    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          role: role,
        });

        // Redirect to the main dashboard after role selection
        navigate('/dashboard');

      } catch (error) {
        console.error('Error updating user role:', error);
        setLoading(false);
      }
    } else {
      console.error('No user is signed in.');
      setLoading(false);
      navigate('/signin');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-lg text-center p-8">
        <h1 className="text-3xl font-bold text-black mb-4">{t('selectYourRole')}</h1>
        <p className="text-black mb-8">{t('roleSelectionDescription')}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Student Role Card */}
          <div 
            className="flex-1 p-6 border border-gray-300 rounded-lg hover:shadow-xl hover:border-black transition duration-300 cursor-pointer"
            onClick={() => !loading && handleRoleSelect('student')}
          >
            <h2 className="text-2xl font-semibold text-black">{t('iAmAStudent')}</h2>
            <p className="text-black mt-2">{t('studentRoleDescription')}</p>
          </div>

          {/* Teacher Role Card */}
          <div 
            className="flex-1 p-6 border border-gray-300 rounded-lg hover:shadow-xl hover:border-black transition duration-300 cursor-pointer"
            onClick={() => !loading && handleRoleSelect('teacher')}
          >
            <h2 className="text-2xl font-semibold text-black">{t('iAmATeacher')}</h2>
            <p className="text-black mt-2">{t('teacherRoleDescription')}</p>
          </div>
        </div>

        {loading && <p className="mt-6 text-black">{t('savingSelection')}</p>}
      </div>
    </div>
  );
};

export default RoleSelection;
