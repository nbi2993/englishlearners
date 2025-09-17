import React from 'react';

interface LoginProps {
  language: 'en' | 'vi';
}

const Login: React.FC<LoginProps> = ({ language }) => {
  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic
    alert('Logging in with Google...');
  };

  const handlePhoneLogin = () => {
    // TODO: Implement Phone login logic
    alert('Logging in with Phone...');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          {language === 'en' ? 'Login' : 'Đăng nhập'}
        </h1>
        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin} 
            className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
            {language === 'en' ? 'Login with Google' : 'Đăng nhập với Google'}
          </button>
          <button 
            onClick={handlePhoneLogin} 
            className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
            {language === 'en' ? 'Login with Phone' : 'Đăng nhập với số điện thoại'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
