
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
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
      // currentUser might be null initially, so we need to wait for it.
      if (!currentUser) {
        // The AuthContext is still loading, so we wait.
        return;
      }

      const userRef = doc(db, 'users', currentUser.uid);
      const userSnap = await getDoc(userRef);
      setLoading(false); // Stop loading once we have a response

      if (userSnap.exists()) {
        const user = userSnap.data() as User;
        setUserData(user);
        // If the user exists but has no role, the render logic will handle navigation.
      } else {
        // This case can happen for a brand new user (e.g., social sign-in).
        // The render logic will redirect them to select a role.
        console.log('User document not found.');
        setUserData(null); // Explicitly set userData to null
      }
    };

    fetchUserData();
  }, [currentUser]); // Depend only on currentUser

  // 1. Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Spinner />
      </div>
    );
  }

  // 2. No user data / No role -> Redirect to select role
  if (!userData || !userData.role) {
    // We must use navigate inside a component body or a useEffect, not directly in render.
    // To solve this, we can use a small component that performs the navigation.
    React.useEffect(() => {
      navigate('/select-role');
    }, [navigate]);
    return null; // Render nothing while redirecting
  }

  // 3. Render dashboard based on role
  switch (userData.role) {
    case 'teacher':
      return <TeacherHome user={userData} />;
    case 'student':
      return <StudentHome user={userData} />;
    default:
      // This is a fallback, already handled by the logic above.
      React.useEffect(() => {
        navigate('/select-role');
      }, [navigate]);
      return null;
  }
};

export default Dashboard;
