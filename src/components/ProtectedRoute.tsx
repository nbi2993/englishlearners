
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Spinner from './Spinner'; // Make sure the path is correct

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // Display a spinner or a loading screen while checking authentication status
    return <Spinner />;
  }

  if (!currentUser) {
    // If the user is not authenticated, redirect to the sign-in page
    return <Navigate to="/signin" replace />;
  }

  // If the user is authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
