
import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm';
import { useLanguage } from '../../contexts/LanguageContext';
import { KeyRound } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AuthLayout 
      title={t('forgotPassword')}
      subtitle={t('passwordResetSubtitle')}
      icon={<KeyRound className="h-12 w-12 text-white" />}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
