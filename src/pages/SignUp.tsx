
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password.length < 6) {
      setError(t('passwordShouldBe'));
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.email, // Default display name to email
        photoURL: user.photoURL,
        createdAt: new Date(),
        role: null,
        learningGoals: {
          level: 'beginner',
          focus: 'speaking',
        },
        appSettings: {
          theme: 'light',
          notifications: true,
        },
      });

      navigate('/select-role');

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError(t('emailInUse'));
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <img src="/assets/logo.png" alt="App Logo" className="mx-auto h-16 w-auto mb-4"/>
          <h2 className="text-3xl font-bold text-black">{t('createYourAccount')}</h2>
          <p className="text-black mt-2">{t('signUpDescription')}</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="email-signup" className="block text-sm font-medium text-black">{t('emailAddress')}</label>
            <input
              id="email-signup"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:ring-black focus:border-black transition duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password-signup" className="block text-sm font-medium text-black">{t('password')}</label>
            <input
              id="password-signup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:ring-black focus:border-black transition duration-300"
              placeholder="6+ characters"
            />
          </div>
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-500 transition duration-300"
            >
              {loading ? t('creatingAccount') : t('createAccount')}
            </button>
          </div>
        </form>
        
        <div className="text-center text-sm text-black">
          <p>
            {t('alreadyHaveAccount')}{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              {t('signIn')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
