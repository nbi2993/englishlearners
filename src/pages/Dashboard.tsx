
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useLanguage } from '../contexts/LanguageContext';

// This component now acts as a router guard.
// It checks the user's role and redirects them to the appropriate dashboard.
const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [statusMessage, setStatusMessage] = useState('Initializing...');

  useEffect(() => {
    setStatusMessage(t ? t('authenticating', 'Authenticating...') : 'Authenticating...');
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setStatusMessage(t ? t('fetchingProfile', 'Fetching user profile...') : 'Fetching user profile...');
        try {
          const userRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            
            // Redirect based on role
            if (userData.role === 'teacher') {
              navigate('/teacher/home');
            } else if (userData.role === 'student') {
              navigate('/student/home');
            } else {
              // If role is not set, user may need to select it.
              console.log("User role not found, redirecting to role selection.");
              navigate('/select-role');
            }
          } else {
            // This can happen if the Firestore document wasn't created properly during signup.
            console.warn("User exists in Auth but not in Firestore. Redirecting to role selection.");
            navigate('/select-role');
          }
        } catch (error) {
            console.error("Error fetching user profile:", error);
            setStatusMessage(t ? t('errorFetchingProfile', 'Error fetching profile. Please try again.') : 'Error fetching profile. Please try again.');
            // Optional: navigate to an error page or back to sign-in
            // navigate('/signin');
        }
      } else {
        // No user is signed in.
        navigate('/signin');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate, t]); // Add 't' to dependency array as it's used in the effect

  // Render a loading state while redirection is in progress.
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <i className="fa-solid fa-spinner fa-spin text-4xl text-indigo-500 mb-4"></i>
        <p className="text-gray-700">{statusMessage}</p>
      </div>
    </div>
  );
};

export default Dashboard;
