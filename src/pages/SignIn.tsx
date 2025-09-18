
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useLanguage } from '../contexts/LanguageContext';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const redirectUser = async (user: User) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      // Navigate directly to the dashboard, which will handle role-based rendering
      navigate('/dashboard');
    } else {
      // This is a fallback for a user authenticated but without a DB record.
      await createUserProfileDocument(user);
      navigate('/select-role');
    }
  };

  const createUserProfileDocument = async (user: User) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName || 'Unnamed User', // Ensure name has a fallback
        photoURL: user.photoURL,
        createdAt: new Date(),
        role: null,
        learningGoals: { level: 'beginner', focus: 'speaking' },
        appSettings: { theme: 'light', notifications: true },
      });
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await redirectUser(userCredential.user);
    } catch (err: any) {
      setError(t('invalidEmailOrPassword'));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      await createUserProfileDocument(userCredential.user); // Ensure profile exists
      await redirectUser(userCredential.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-16 w-auto mb-4"/>
          <h2 className="text-3xl font-bold text-black">{t('welcomeBack')}</h2>
          <p className="text-black mt-2">{t('signInToContinue')}</p>
        </div>

        <form onSubmit={handleEmailSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">{t('emailAddress')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:ring-black focus:border-black transition duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password-signin" className="block text-sm font-medium text-black">{t('password')}</label>
            <input
              id="password-signin"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:ring-black focus:border-black transition duration-300"
              placeholder="Your password"
            />
            <div className="text-right mt-2">
              <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {t('forgotPassword')}
              </Link>
            </div>
          </div>
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-500 transition duration-300"
            >
              {loading ? t('signingIn') : t('signIn')}
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-black">{t('orContinueWith')}</span>
          </div>
        </div>
        <div>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-300"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="h-5 w-5 mr-3" />
            {t('signInWithGoogle')}
          </button>
        </div>

        <div className="text-center text-sm text-black">
          <p>
            {t('dontHaveAccount')}{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              {t('createAccount')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
