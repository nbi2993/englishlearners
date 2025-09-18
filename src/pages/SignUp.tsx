
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const checkPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length > 7) strength++;
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength++;
    if (pass.match(/([0-9])/)) strength++;
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength++;
    setPasswordStrength(strength);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError(t('passwordsDoNotMatch'));
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError(t('passwordShouldBeAtLeast8'));
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: name || user.email, // Use provided name or default to email
        avatar: 'fa-user-astronaut', // Default avatar
        photoURL: user.photoURL,
        createdAt: new Date(),
        role: null, // Role will be set in the next step
        // Default values for other fields
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

      navigate('/select-role');

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError(t('emailInUse'));
      } else {
        setError(t('signUpFailed') + ": " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  const strengthIndicator = () => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    const labels = [t('weak'), t('medium'), t('strong'), t('veryStrong')];
    return (
      <div className="flex items-center mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
          <div 
            className={`h-2 rounded-full ${colors[passwordStrength -1] || ''}`}
            style={{ width: `${passwordStrength * 25}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 w-24 text-right">
            {password.length > 0 && labels[passwordStrength - 1]}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col justify-center items-center p-4 transition-colors duration-500">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in-up">
        <div className="text-center">
          <i className="fa-solid fa-graduation-cap text-5xl text-blue-500"></i>
          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-slate-100">{t('createYourAccount')}</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">{t('signUpDescription')}</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
           <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('fullName')}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
              placeholder={t('enterYourName')}
            />
          </div>
          <div>
            <label htmlFor="email-signup" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('emailAddress')}</label>
            <input
              id="email-signup"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password-signup" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('password')}</label>
            <input
              id="password-signup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              placeholder="8+ characters, incl. Aa, 123, @#$!"
            />
            {strengthIndicator()}
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t('confirmPassword')}</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
              placeholder={t('confirmPasswordPlaceholder')}
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
                <><i className="fa-solid fa-spinner fa-spin mr-2"></i> {t('creatingAccount')}</> 
              ) : (
                <><i className="fa-solid fa-user-plus mr-2"></i> {t('createAccount')}</>
              )}
            </button>
          </div>
        </form>
        
        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            {t('alreadyHaveAccount')}{' '}
            <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              {t('signIn')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
