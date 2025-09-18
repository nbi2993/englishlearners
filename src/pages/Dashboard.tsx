
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useLanguage } from '../contexts/LanguageContext'; // Import the language hook

interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  learningGoals: { level: string; focus: string; };
  appSettings: { theme: string; notifications: boolean; };
  createdAt: any; // Changed to any to handle Firestore Timestamp
}

const Dashboard: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          // Firestore timestamps need to be converted to JS Dates
          const data = docSnap.data();
          if (data.createdAt && typeof data.createdAt.toDate === 'function') {
            data.createdAt = data.createdAt.toDate();
          }
          setUserProfile(data as UserProfile);
        } else {
          console.log("No such user profile in Firestore!");
        }
      } else {
        navigate('/signin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-700">{t('loadingDashboard')}</p>
      </div>
    );
  }

  if (!firebaseUser || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500">{t('userNotAuthenticated')}</p>
      </div>
    );
  }

  const welcomeMessage = t('welcomeUser').replace('{user}', userProfile.displayName || userProfile.email || 'User');

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-0">{welcomeMessage}</h2>
          <button 
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
          >
            {t('signOut')}
          </button>
        </div>

        <div className="space-y-4 border-t pt-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('yourProfile')}</h3>
          {userProfile.photoURL && (
            <img src={userProfile.photoURL} alt="User Profile" className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-200" />
          )}
          <p className="text-gray-700"><strong>{t('email')}:</strong> {userProfile.email}</p>
          <p className="text-gray-700"><strong>{t('userId')}:</strong> {userProfile.uid}</p>
          <p className="text-gray-700"><strong>{t('accountCreated')}:</strong> {userProfile.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'N/A'}</p>
        </div>

        <div className="space-y-4 border-t pt-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('learningGoals')}</h3>
          <p className="text-gray-700"><strong>{t('level')}:</strong> {userProfile.learningGoals.level}</p>
          <p className="text-gray-700"><strong>{t('focus')}:</strong> {userProfile.learningGoals.focus}</p>
        </div>

        <div className="space-y-4 border-t pt-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('appSettings')}</h3>
          <p className="text-gray-700"><strong>{t('theme')}:</strong> {userProfile.appSettings.theme}</p>
          <p className="text-gray-700"><strong>{t('notifications')}:</strong> {userProfile.appSettings.notifications ? t('enabled') : t('disabled')}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
