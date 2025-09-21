
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const RoleSelection: React.FC = () => {
  const [loading, setLoading] = useState<'student' | 'teacher' | null>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { currentUser, setCurrentUser } = useAuth(); // Use useAuth hook

  const handleRoleSelect = async (role: 'student' | 'teacher') => {
    if (loading || !currentUser) return;
    setLoading(role);
    
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, { role });
      
      // Optimistically update the user context
      setCurrentUser({ ...currentUser, role });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user role:', error);
      // Optionally, show an error message to the user
      setLoading(null);
    }
  };

  // Redirect if user is not logged in
  if (!currentUser) {
    React.useEffect(() => {
      navigate('/signin');
    }, [navigate]);
    return null; // Render nothing while redirecting
  }

  const RoleCard = ({ 
    role, 
    icon, 
    title, 
    description, 
    onClick 
  }: { 
    role: 'student' | 'teacher';
    icon: string; 
    title: string; 
    description: string; 
    onClick: () => void; 
  }) => (
    <div 
      className={`group flex-1 p-8 border-2 dark:border-slate-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white dark:bg-slate-800/50`}
      onClick={onClick}
    >
      <i className={`fa-solid ${icon} text-5xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 mt-2 min-h-[60px]">{description}</p>
      <div className="mt-6 h-8">
        {loading === role ? (
          <div className="flex items-center justify-center text-blue-500">
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            <span>{t('savingSelection')}...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>{t('selectRole')}</span>
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center items-center p-4 transition-colors duration-500">
      <div className="w-full max-w-4xl text-center p-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-3">{t('oneLastStep')}, {currentUser?.name || t('guest')}!</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">{t('roleSelectionDescription')}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <RoleCard 
            role="student"
            icon="fa-user-graduate"
            title={t('iAmAStudent')}
            description={t('studentRoleDescription')}
            onClick={() => handleRoleSelect('student')}
          />

          <RoleCard 
            role="teacher"
            icon="fa-chalkboard-user"
            title={t('iAmATeacher')}
            description={t('teacherRoleDescription')}
            onClick={() => handleRoleSelect('teacher')}
          />
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
