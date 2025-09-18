
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
  t: (key: string) => string; // Translation function
}

// Default translation data
const translations: Record<string, { en: string; vi: string }> = {
  // General & App Page
  'welcomeTitle': { en: 'Welcome to Your Learning Companion', vi: 'Chào mừng đến với Trợ lý học tập của bạn' },
  'welcomeDescription': { en: 'The smart platform to enhance your English learning and teaching journey, from K-12 and beyond.', vi: 'Nền tảng thông minh giúp nâng cao hành trình học và dạy tiếng Anh của bạn, từ K-12 và hơn thế nữa.' },
  'teacherOptimization': { en: 'Perfectly optimized for both students and teachers at all levels.', vi: 'Được tối ưu hóa cho cả học viên và giáo viên ở mọi cấp độ.' },
  'createAccount': { en: 'Create Account', vi: 'Tạo tài khoản' },
  'signIn': { en: 'Sign In', vi: 'Đăng nhập' },
  'quoteText': { en: 'For every learner, for every need.', vi: 'Dành cho mọi người học, cho mọi nhu cầu.'},

  // Role Selection Page
  'selectYourRole': { en: 'Select Your Role', vi: 'Chọn vai trò của bạn' },
  'roleSelectionDescription': { en: 'To personalize your experience, please tell us who you are.', vi: 'Để cá nhân hóa trải nghiệm của bạn, vui lòng cho chúng tôi biết bạn là ai.' },
  'iAmAStudent': { en: 'I am a Student', vi: 'Tôi là Học viên' },
  'studentRoleDescription': { en: 'Personalize your learning path, track progress, and access materials.', vi: 'Cá nhân hóa lộ trình học, theo dõi tiến độ và truy cập tài liệu.' },
  'iAmATeacher': { en: 'I am a Teacher', vi: 'Tôi là Giáo viên' },
  'teacherRoleDescription': { en: 'Manage classes, create assignments, and monitor student performance.', vi: 'Quản lý lớp học, tạo bài tập và theo dõi hiệu suất của học viên.' },
  'savingSelection': { en: 'Saving your selection...', vi: 'Đang lưu lựa chọn của bạn...' },

  // Sign Up Page
  'createYourAccount': { en: 'Create Your Account', vi: 'Tạo tài khoản của bạn' },
  'signUpDescription': { en: 'For all learners and educators, from K-12 to lifelong learning. Let\'s get started!', vi: 'Dành cho mọi người học và nhà giáo dục, từ K-12 đến học tập suốt đời. Bắt đầu nào!' },
  'creatingAccount': { en: 'Creating Account...', vi: 'Đang tạo tài khoản...' },
  'alreadyHaveAccount': { en: 'Already have an account?', vi: 'Đã có tài khoản rồi ư?' },
  'emailAddress': { en: 'Email Address', vi: 'Địa chỉ Email' },
  'password': { en: 'Password', vi: 'Mật khẩu' },

  // Sign In Page
  'welcomeBack': { en: 'Welcome Back!', vi: 'Chào mừng trở lại!' },
  'signInToContinue': { en: 'Sign in to continue your personalized learning journey.', vi: 'Đăng nhập để tiếp tục hành trình học tập được cá nhân hóa của bạn.' },
  'signingIn': { en: 'Signing In...', vi: 'Đang đăng nhập...' },
  'dontHaveAccount': { en: 'Don\'t have an account?', vi: 'Chưa có tài khoản ư?' },
  'forgotPassword': { en: 'Forgot password?', vi: 'Quên mật khẩu?' },
  'orContinueWith': {en: 'Or continue with', vi: 'Hoặc tiếp tục với'},
  'signInWithGoogle': {en: 'Sign in with Google', vi: 'Đăng nhập bằng Google'},

  // Forgot Password Page
  'forgotYourPassword': {en: 'Forgot Your Password?', vi: 'Quên mật khẩu của bạn?'},
  'enterEmailForReset': { en: 'Enter your email address to receive a password reset link.', vi: 'Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.' },
  'sendResetEmail': { en: 'Send Reset Email', vi: 'Gửi Email đặt lại mật khẩu' },
  'sending': { en: 'Sending...', vi: 'Đang gửi...' },
  'rememberPassword': { en: 'Remember your password?', vi: 'Nhớ mật khẩu rồi ư?' },

  // Dashboard
  'loadingDashboard': { en: 'Loading dashboard...', vi: 'Đang tải bảng điều khiển...' },
  'welcomeUser': { en: 'Welcome, {user}!', vi: 'Chào mừng, {user}!' },
  'signOut': { en: 'Sign Out', vi: 'Đăng xuất' },
  'yourProfile': { en: 'Your Profile', vi: 'Hồ sơ của bạn' },
  'email': { en: 'Email', vi: 'Email' },
  'userId': { en: 'User ID', vi: 'ID người dùng' },
  'accountCreated': { en: 'Account Created', vi: 'Tài khoản đã tạo' },
  'learningGoals': { en: 'Learning Goals', vi: 'Mục tiêu học tập' },
  'level': { en: 'Level', vi: 'Cấp độ' },
  'focus': { en: 'Focus', vi: 'Trọng tâm' },
  'appSettings': { en: 'App Settings', vi: 'Cài đặt ứng dụng' },
  'theme': { en: 'Theme', vi: 'Giao diện' },
  'notifications': { en: 'Notifications', vi: 'Thông báo' },
  'enabled': { en: 'Enabled', vi: 'Bật' },
  'disabled': { en: 'Disabled', vi: 'Tắt' },
  
  // Status & Error Messages
  'signUpSuccess': { en: 'Sign up successful! Welcome!', vi: 'Đăng ký thành công! Chào mừng bạn!' },
  'signedInSuccessfully': { en: 'Signed in successfully!', vi: 'Đăng nhập thành công!' },
  'signedInGoogle': { en: 'Signed in successfully with Google!', vi: 'Đăng nhập thành công bằng Google!' },
  'passwordResetSent': { en: 'A password reset email has been sent to your email address. Please check your inbox.', vi: 'Một email đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư đến.' },
  'passwordShouldBe': { en: 'Password should be at least 6 characters.', vi: 'Mật khẩu phải có ít nhất 6 ký tự.' },
  'invalidEmailOrPassword': { en: 'Invalid email or password.', vi: 'Email hoặc mật khẩu không hợp lệ.'},
  'emailInUse': { en: 'The email address is already in use by another account.', vi: 'Địa chỉ email đã được sử dụng bởi một tài khoản khác.'},
  'userNotAuthenticated': { en: 'User not authenticated or profile not found.', vi: 'Người dùng chưa được xác thực hoặc không tìm thấy hồ sơ.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'vi'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('appLanguage') as 'en' | 'vi') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
    }
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (translation) {
      return translation[language];
    }
    console.warn(`Missing translation for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
