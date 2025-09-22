
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(t('passwordResetSent'));
    } catch (err: any) {
      setError(t('passwordResetFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">{t('forgotPassword')}</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">{t('enterEmailForReset')}</p>
        </div>

      {message ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md flex items-center" role="alert">
          <CheckCircle className="h-5 w-5 mr-3"/>
          <p>{message}</p>
        </div>
      ) : (
        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md flex items-center" role="alert">
              <AlertCircle className="h-5 w-5 mr-3"/>
              <p>{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading || !email}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? (
                <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div> {t('sending')}</>
              ) : (
                <>{t('sendResetEmail')} <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </button>
          </div>
        </form>
      )}

      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        <p>
          {t('rememberPassword')}{' '}
          <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
            {t('signInNow')}
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
