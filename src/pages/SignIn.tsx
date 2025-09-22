
import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import SignInForm from '../../components/auth/SignInForm';
import { useLanguage } from '../../contexts/LanguageContext';
import { LogIn } from 'lucide-react';

const SignIn: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AuthLayout 
      title={t('welcomeBack')}
      subtitle={t('signInSubtitle')}
      icon={<LogIn className="h-12 w-12 text-white" />}
    >
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
