
import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import SignUpForm from '../../components/auth/SignUpForm';
import { useLanguage } from '../../contexts/LanguageContext';
import { UserPlus } from 'lucide-react';

const SignUp: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AuthLayout 
      title={t('joinUs')}
      subtitle={t('signUpSubtitle')}
      icon={<UserPlus className="h-12 w-12 text-white" />}
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
