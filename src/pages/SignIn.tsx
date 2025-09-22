
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
      if (err.code === 'auth/user-not-found') {
        setError(t('userNotFound'));
      } else if (err.code === 'auth/wrong-password') {
        setError(t('wrongPassword'));
      } else {
        setError(t('invalidEmailOrPassword'));
      }
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
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 dark:bg-blue-800 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 opacity-70"></div>
        <div className="z-10 text-center space-y-6">
            <i className="fa-solid fa-graduation-cap text-7xl"></i>
            <h1 className="text-4xl font-bold tracking-tight">Chào mừng bạn trở lại</h1>
            <p className="text-blue-100 text-lg max-w-md">
                Đăng nhập để tiếp tục cuộc hành trình học tập của bạn và khám phá những chân trời kiến thức mới.
            </p>
        </div>
      </div>

      {/* Right sign-in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">{t('signIn')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">{t('dontHaveAccount')} <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">{t('createAccount')}</Link></p>
            </div>
            
            {/* Social Login */}
            <div>
              <button
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="w-full btn btn-secondary-outline flex items-center justify-center py-3 text-base"
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
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400">{t('orContinueWith')}</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSignIn} className="space-y-6">
              <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('emailAddress')}</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                     <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password-signin" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('password')}</label>
                        <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                            {t('forgotPassword')}?
                        </Link>
                    </div>
                    <input
                      id="password-signin"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-input"
                      placeholder="••••••••"
                    />
                  </div>
              </div>
              
              {error && 
                <div className="alert-danger" role="alert">
                  <p>{error}</p>
                </div>
              }
              
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn btn-primary py-3 text-base font-semibold"
                >
                    {loading ? (
                        <><i className="fa-solid fa-spinner fa-spin mr-2"></i> {t('signingIn')}</>
                    ) : (
                       t('signIn')
                    )}
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
