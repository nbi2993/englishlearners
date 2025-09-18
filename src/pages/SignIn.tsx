
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useLanguage } from '../contexts/LanguageContext'; // Import the language hook

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage(); // Use the language hook

  const createUserProfileDocument = async (user: any) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email || user.providerData[0]?.email || null,
        displayName: user.displayName || user.providerData[0]?.displayName || null,
        photoURL: user.photoURL || user.providerData[0]?.photoURL || null,
        createdAt: new Date(),
        learningGoals: {
          level: 'beginner',
          focus: 'speaking',
        },
        appSettings: {
          theme: 'light',
          notifications: true,
        },
      });
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await createUserProfileDocument(userCredential.user);
      alert(t('signedInSuccessfully'));
      navigate('/dashboard');
    } catch (err: any) {
      console.error("Error during email sign in:", err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError(t('invalidEmailOrPassword'));
      } else {
        setError(err.message);
      }
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
      await createUserProfileDocument(userCredential.user);
      alert(t('signedInGoogle'));
      navigate('/dashboard');
    } catch (err: any) {
      console.error("Error during Google sign in:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-16 w-auto mb-4"/>
          <h2 className="text-3xl font-bold text-gray-900">{t('welcomeBack')}</h2>
          <p className="text-gray-600 mt-2">{t('signInToContinue')}</p>
        </div>

        <form onSubmit={handleEmailSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password-signin" className="block text-sm font-medium text-gray-700">{t('password')}</label>
            <input
              id="password-signin"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
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
              className="w-full px-4 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 transition duration-300"
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
            <span className="px-2 bg-white text-gray-500">{t('orContinueWith')}</span>
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="h-5 w-5 mr-3" />
            {t('signInWithGoogle')}
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
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
