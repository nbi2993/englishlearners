
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
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const redirectUser = async (user: User) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists() && docSnap.data().role) {
      navigate('/dashboard');
    } else {
      if (!docSnap.exists()) {
          await createUserProfileDocument(user, user.displayName || "Google User");
      }
      navigate('/select-role');
    }
  };

  const createUserProfileDocument = async (user: User, name: string) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: name,
        avatar: 'fa-user-astronaut',
        photoURL: user.photoURL,
        createdAt: new Date(),
        role: null,
        points: 0,
        badges: [],
        streak: 0,
        pinnedCourses: [],
        age: null,
        gender: 'other',
        level: 'beginner',
        title: '',
        subject: '',
        gradeLevel: '',
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
    setGoogleLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      await redirectUser(userCredential.user);
    } catch (err: any) {
       setError(t('signInFailed') + ": " + err.message);
    } finally {
      setGoogleLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center items-center p-4 transition-colors duration-500">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in-up">
        <div className="text-center">
          <i className="fa-solid fa-graduation-cap text-5xl text-blue-500"></i>
          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-slate-100">{t('welcomeBack')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">{t('signInToContinue')}</p>
        </div>

        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('emailAddress')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
          <div>
             <div className="flex justify-between items-center">
                <label htmlFor="password-signin" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('password')}</label>
                <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    {t('forgotPassword')}
                </Link>
            </div>
            <input
              id="password-signin"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              placeholder={t('enterYourPassword')}
            />
          </div>

          {error && 
            <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 rounded-md" role="alert">
              <p className="font-bold">{t('errorTitle')}</p>
              <p>{error}</p>
            </div>
          }
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-3 text-lg font-semibold"
            >
                {loading ? (
                    <><i className="fa-solid fa-spinner fa-spin mr-2"></i> {t('signingIn')}</>
                ) : (
                    <><i className="fa-solid fa-right-to-bracket mr-2"></i> {t('signIn')}</>
                )}
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-slate-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">{t('orContinueWith')}</span>
          </div>
        </div>

        <div>
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full btn btn-secondary-outline flex items-center justify-center py-3"
          >
            {googleLoading ? (
                <><i className="fa-solid fa-spinner fa-spin mr-2"></i> {t('signingIn')}</>
            ) : (
                <>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="h-5 w-5 mr-3" />
                    {t('signInWithGoogle')}
                </>
            )}
          </button>
        </div>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            {t('dontHaveAccount')}{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              {t('createAccount')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
