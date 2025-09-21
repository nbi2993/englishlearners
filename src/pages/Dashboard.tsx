
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import TeacherHome from '../components/TeacherHome';
import StudentHome from '../components/StudentHome';
import Spinner from '../components/Spinner';

const Dashboard: React.FC = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  // 1. Auth context is loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Spinner />
      </div>
    );
  }

  // 2. No user is logged in, or user has no role -> Redirect to select role
  // The AuthProvider ensures we don't render protected routes when logged out,
  // but this check is an additional safeguard.
  if (!currentUser || !currentUser.role) {
    React.useEffect(() => {
      // If there's no user, send to sign-in. If user exists but no role, send to select-role.
      const destination = currentUser ? '/select-role' : '/signin';
      navigate(destination);
    }, [navigate, currentUser]);
    return null; // Render nothing while redirecting
  }

  // 3. Render dashboard based on role
  switch (currentUser.role) {
    case 'teacher':
      return <TeacherHome user={currentUser} />;
    case 'student':
      return <StudentHome user={currentUser} />;
    default:
      // This is a fallback for unknown roles.
      React.useEffect(() => {
        navigate('/select-role');
      }, [navigate]);
      return null;
  }
};

export default Dashboard;
