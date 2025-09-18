
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  learningGoals: { level: string; focus: string; };
  appSettings: { theme: string; notifications: boolean; };
  createdAt: Date;
}

const Dashboard: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        // Fetch user profile from Firestore
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setUserProfile(docSnap.data() as UserProfile);
        } else {
          console.log("No such user profile in Firestore!");
          // This case should ideally not happen if createUserProfileDocument is called on sign up/in
          // You might want to create a default profile here or prompt the user.
        }
      } else {
        navigate('/signin'); // Redirect to sign-in if not authenticated
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
        <p className="text-gray-700">Loading dashboard...</p>
      </div>
    );
  }

  if (!firebaseUser || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500">User not authenticated or profile not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome, {userProfile.displayName || userProfile.email}!</h2>
          <button 
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Your Profile</h3>
          {userProfile.photoURL && (
            <img src={userProfile.photoURL} alt="User Profile" className="w-24 h-24 rounded-full mx-auto object-cover" />
          )}
          <p className="text-gray-700"><strong>Email:</strong> {userProfile.email}</p>
          <p className="text-gray-700"><strong>User ID:</strong> {userProfile.uid}</p>
          <p className="text-gray-700"><strong>Account Created:</strong> {new Date(userProfile.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Learning Goals</h3>
          <p className="text-gray-700"><strong>Level:</strong> {userProfile.learningGoals.level}</p>
          <p className="text-gray-700"><strong>Focus:</strong> {userProfile.learningGoals.focus}</p>
          {/* You can add a form here to allow users to update their goals */}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">App Settings</h3>
          <p className="text-gray-700"><strong>Theme:</strong> {userProfile.appSettings.theme}</p>
          <p className="text-gray-700"><strong>Notifications:</strong> {userProfile.appSettings.notifications ? 'Enabled' : 'Disabled'}</p>
          {/* You can add a form here to allow users to update their settings */}
        </div>

        {/* Add more sections for personalized content */}

      </div>
    </div>
  );
};

export default Dashboard;
