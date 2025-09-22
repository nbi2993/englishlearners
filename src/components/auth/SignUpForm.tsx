
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUpForm: React.FC = () => {
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
    if (pass.length >= 8) strength++;
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
        name: name,
        photoURL: user.photoURL,
        createdAt: new Date(),
        role: null,
      });

      navigate('/select-role');

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError(t('emailInUse'));
      } else {
        setError(t('signUpFailed'));
      }
    } finally {
      setLoading(false);
    }
  };
  
  const strengthIndicator = () => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    return (
      <div className="flex items-center mt-2">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mr-3">
          <div 
            className={`h-1.5 rounded-full ${colors[passwordStrength -1] || ''}`}
            style={{ width: `${passwordStrength * 25}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 w-20 text-right">
            {t(['', 'weak', 'medium', 'strong', 'veryStrong'][passwordStrength])}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">{t('createAccount')}</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">{t('alreadyHaveAccount')} <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">{t('signIn')}</Link></p>
      </div>

      <form onSubmit={handleSignUp} className="space-y-4">
        <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder={t('fullName')} />
        </div>
        <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input id="email-signup" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder={t('emailAddress')} />
        </div>
        <div>
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input id="password-signup" type="password" value={password} onChange={(e) => setPassword(e.targe.value)} required className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Password" />
            </div>
            {strengthIndicator()}
        </div>
        <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder={t('confirmPassword')} />
        </div>

        {error && 
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
            <p>{error}</p>
          </div>
        }
        
        <div>
          <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
            {loading ? (
              <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div> {t('creatingAccount')}</>
            ) : (
              <>{t('createAccount')} <ArrowRight className="ml-2 h-5 w-5" /></>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
