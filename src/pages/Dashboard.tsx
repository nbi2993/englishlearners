
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import TeacherHome from '../components/TeacherHome';
import StudentHome from '../components/StudentHome';
import Spinner from '../components/Spinner';
import { User } from '../types';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const user = userSnap.data() as User;
          setUserData(user);

          // Core Logic Correction:
          // Redirect user based on their role AFTER fetching the data.
          if (!user.role) {
            navigate('/select-role');
          } 
          // No else-if redirection here. Let the return statement handle rendering.

        } else {
          // This could happen if the user document hasn't been created yet
          // after sign-up. Redirecting to role selection can be a good fallback.
          console.log('User document not found, redirecting to role selection.');
          navigate('/select-role');
        }
      } else {
        // This case is handled by ProtectedRoute, but as a fallback:
        navigate('/signin');
      }
      setLoading(false);
    };

    fetchUserData();
  }, [currentUser, navigate]);

  if (loading || !userData) {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
           <Spinner />
        </div>
    );
  }

  // Render the correct component based on the user's role.
  // This is the single source of truth for what the user sees.
  switch (userData.role) {
    case 'teacher':
      return <TeacherHome user={userData} />;
    case 'student':
      return <StudentHome user={userData} />; 
    default:
      // If role is somehow null or undefined, redirect to role selection.
      navigate('/select-role');
      return null; // or a loading indicator
  }
};

export default Dashboard;
