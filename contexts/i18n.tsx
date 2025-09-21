
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define translations
const translations = {
  en: {
    // App Welcome
    welcomeTitle: 'IVS English Learners Platform',
    welcomeSubtitle: 'Select a book to begin your learning adventure.',
    kindergartenProgram: 'Kindergarten Program',
    primaryProgram: 'Primary Program',
    SecondaryProgram: 'Secondary Program',
    // Sidebar
    home: 'Home',
    dashboard: 'Dashboard',
    curriculum: 'Curriculum',
    ebooks: 'E-Books',
    quiz: 'Quiz',
    otherPrograms: 'Other Programs',
    changeLanguage: 'Change Language',
    settings: 'Settings',
    changeLevel: 'Change Level',
    readEBook: 'Read E-Book',
    // Search
    searchPlaceholder: 'Search lessons, vocabulary, grammar...',
    searchNoResults: 'No results found for your search.',
    searchResultLesson: 'Lesson',
    searchResultVocab: 'Vocabulary',
    searchResultGrammar: 'Grammar',
    // Dashboard
    dashboardTitle: 'Book {level} Dashboard',
    progress: 'Progress',
    lessonsCompleted: 'Lessons Completed',
    vocabToLearn: 'Vocabulary to Learn',
    grammarPoints: 'Grammar Points',
    continueLearning: 'Continue Learning',
    startLearning: 'Start Learning',
    // Lesson View
    aims: 'Aims',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    activities: 'Activities',
    flashcards: 'Flashcards',
    learningObjectives: 'Learning Objectives',
    markAsComplete: 'Mark as Complete',
    completed: 'Lesson Completed',
    testYourKnowledge: 'Test Your Knowledge',
    // Flashcards
    shuffle: 'Shuffle',
    noVocabulary: 'This lesson has no vocabulary to practice with flashcards.',
    card: 'Card',
    // AI Assistant
    aiAssistant: 'AI Assistant',
    aiAssistantFor: 'AI Assistant for: {lessonTitle}',
    createQuiz: 'Create Quiz',
    explainGrammar: 'Explain Grammar',
    createDialogue: 'Create Dialogue',
    back: 'Back',
    noGrammarPoints: 'This lesson has no grammar points to explain.',
    selectGrammarTopic: 'Please select a grammar topic to explain:',
    errorGeneric: "Sorry, an error occurred. Please try again.",
    // Quiz
    generatingQuiz: 'Generating your quiz...',
    quizFailed: 'Failed to generate quiz. Please try again.',
    noQuiz: 'No quiz could be generated for this lesson.',
    quizResults: 'Quiz Results',
    score: 'Your Score: {score} / {total}',
    yourAnswer: 'Your answer: {answer} ({result})',
    noAnswer: 'No answer',
    correct: 'Correct',
    incorrect: 'Incorrect',
    correctAnswer: 'Correct answer: {answer}',
    tryNewQuiz: 'Try a New Quiz',
    submitAnswers: 'Submit Answers',
    quizPassedMessage: "Congratulations! You\'ve passed and this lesson is now marked as complete.",
    // Footer
    dunsNumber: "D-U-N-S Number: 646434880",
    copyright: "© 2025 IVS JSC. All rights reserved.",
    designedByText: "Designed and developed by IVS Celestech, ",
    designedByLink: "IVS JSC",
    // E-Book Reader
    closeEBook: 'Close E-Book',
    // Other Programs
    exploreOtherPrograms: 'Explore other IVS Education programs',
    otherProgramsTitle: 'Other IVS Education Programs',
    otherProgramsDescription: 'Discover more learning opportunities designed by IVS Education.',
    viewProgram: 'View Program',
    goBack: 'Go Back',
    // Pronunciation Practice
    pronunciationPractice: "Pronunciation Practice",
    tryAgain: "Try Again",
    recording: "Recording...",
    pronunciationFeedbackError: "Sorry, I couldn\'t generate feedback. Please check your microphone and try again.",
    micError: "Could not access microphone. Please check your browser permissions.",
    tapToRecord: "Tap to record:",
    generatingFeedback: "Generating feedback...",
    tipsForImprovement: "Tips for Improvement",
    // Settings Modal
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    language: "Language",
    data: "Data",
    resetProgress: "Reset Learning Progress",
    resetProgressConfirm: "Are you sure you want to delete all your completed lessons? This action cannot be undone.",
    reset: "Reset",
    cancel: "Cancel",
    // Forgot Password
    forgotYourPassword: 'Forgot Your Password?',
    enterEmailForReset: 'Enter your email address to receive a password reset link.',
    emailAddress: 'Email Address',
    passwordResetSent: 'A password reset email has been sent to your email address. Please check your inbox.',
    sending: 'Sending...',
    sendResetEmail: 'Send Reset Email',
    rememberPassword: 'Remember your password?',
    signIn: 'Sign In',
  },
  vi: {
    // App Welcome
    welcomeTitle: 'Nền tảng học Tiếng Anh IVS',
    welcomeSubtitle: 'Chọn một cuốn sách để bắt đầu cuộc phiêu lưu học tập của bạn.',
    kindergartenProgram: 'Chương trình Mầm non',
    primaryProgram: 'Chương trình Tiểu học',
    // Sidebar
    home: 'Trang chủ',
    dashboard: 'Bảng điều khiển',
    curriculum: 'Chương trình học',
    ebooks: 'Sách điện tử',
    quiz: 'Bài kiểm tra',
    otherPrograms: 'Các chương trình khác',
    changeLanguage: 'Đổi ngôn ngữ',
    settings: 'Cài đặt',
    changeLevel: 'Đổi cấp độ',
    readEBook: 'Đọc Sách điện tử',
    // Search
    searchPlaceholder: 'Tìm kiếm bài học, từ vựng, ngữ pháp...',
    searchNoResults: 'Không tìm thấy kết quả cho tìm kiếm của bạn.',
    searchResultLesson: 'Bài học',
    searchResultVocab: 'Từ vựng',
    searchResultGrammar: 'Ngữ pháp',
    // Dashboard
    dashboardTitle: 'Bảng điều khiển Sách {level}',
    progress: 'Tiến độ',
    lessonsCompleted: 'Bài đã hoàn thành',
    vocabToLearn: 'Từ vựng cần học',
    grammarPoints: 'Điểm ngữ pháp',
    continueLearning: 'Tiếp tục học',
    startLearning: 'Bắt đầu học',
    // Lesson View
    aims: 'Mục tiêu',
    vocabulary: 'Từ vựng',
    grammar: 'Ngữ pháp',
    activities: 'Hoạt động',
    flashcards: 'Thẻ ghi nhớ',
    learningObjectives: 'Mục tiêu học tập',
    markAsComplete: 'Đánh dấu đã xong',
    completed: 'Đã hoàn thành',
    testYourKnowledge: 'Kiểm tra kiến thức',
    // Flashcards
    shuffle: 'Xáo trộn',
    noVocabulary: 'Bài học này không có từ vựng để luyện tập với thẻ ghi nhớ.',
    card: 'Thẻ',
    // AI Assistant
    aiAssistant: 'Trợ lý AI',
    aiAssistantFor: 'Trợ lý AI cho: {lessonTitle}',
    createQuiz: 'Tạo Bài kiểm tra',
    explainGrammar: 'Giải thích Ngữ pháp',
    createDialogue: 'Tạo Hội thoại',
    back: 'Quay lại',
    noGrammarPoints: 'Bài học này không có điểm ngữ pháp nào để giải thích.',
    selectGrammarTopic: 'Vui lòng chọn một chủ đề ngữ pháp để giải thích:',
    errorGeneric: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.",
    // Quiz
    generatingQuiz: 'Đang tạo bài kiểm tra của bạn...',
    quizFailed: 'Không thể tạo bài kiểm tra. Vui lòng thử lại.',
    noQuiz: 'Không thể tạo bài kiểm tra cho bài học này.',
    quizResults: 'Kết quả Kiểm tra',
    score: 'Điểm của bạn: {score} / {total}',
    yourAnswer: 'Câu trả lời của bạn: {answer} ({result})',
    noAnswer: 'Chưa trả lời',
    correct: 'Đúng',
    incorrect: 'Sai',
    correctAnswer: 'Đáp án đúng: {answer}',
    tryNewQuiz: 'Thử Bài kiểm tra Mới',
    submitAnswers: 'Nộp bài',
    quizPassedMessage: 'Chúc mừng! Bạn đã vượt qua và bài học này được đánh dấu là đã hoàn thành.',
    // Footer
    dunsNumber: "Mã D-U-N-S: 646434880",
    copyright: "© 2025 IVS JSC. Mọi quyền được bảo lưu.",
    designedByText: "Được thiết kế và phát triển bởi IVS Celestech, ",
    designedByLink: "IVS JSC",
    // E-Book Reader
    closeEBook: 'Đóng Sách điện tử',
    // Other Programs
    exploreOtherPrograms: 'Khám phá các chương trình khác của IVS Education',
    otherProgramsTitle: 'Các chương trình khác của IVS Education',
    otherProgramsDescription: 'Khám phá thêm các cơ hội học tập được thiết kế bởi IVS Education.',
    viewProgram: 'Xem chương trình',
    goBack: 'Quay lại',
     // Pronunciation Practice
    pronunciationPractice: "Luyện phát âm",
    tryAgain: "Thử lại",
    recording: "Đang ghi âm...",
    pronunciationFeedbackError: "Xin lỗi, không thể tạo phản hồi. Vui lòng kiểm tra micro và thử lại.",
    micError: "Không thể truy cập micro. Vui lòng kiểm tra quyền của trình duyệt.",
    tapToRecord: "Chạm để ghi âm:",
    generatingFeedback: "Đang tạo phản hồi...",
    tipsForImprovement: "Mẹo để cải thiện",
    // Settings Modal
    theme: "Chủ đề",
    light: "Sáng",
    dark: "Tối",
    language: "Ngôn ngữ",
    data: "Dữ liệu",
    resetProgress: "Xóa tiến trình học",
    resetProgressConfirm: "Bạn có chắc chắn muốn xóa tất cả các bài học đã hoàn thành không? Hành động này không thể hoàn tác.",
    reset: "Xóa",
    cancel: "Hủy",
    // Forgot Password
    forgotYourPassword: 'Quên mật khẩu?',
    enterEmailForReset: 'Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.',
    emailAddress: 'Địa chỉ email',
    passwordResetSent: 'Một email đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư đến của bạn.',
    sending: 'Đang gửi...',
    sendResetEmail: 'Gửi email đặt lại',
    rememberPassword: 'Nhớ mật khẩu của bạn?',
    signIn: 'Đăng nhập',
  },
};

export type Language = 'en' | 'vi';
type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations, replacements?: { [key: string]: string | number }) => string;
  l: (localizedString: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('sw-lang') as Language;
    if (savedLang && ['en', 'vi'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('sw-lang', lang);
  };
  
  const t = (key: keyof Translations, replacements?: { [key: string]: string | number }) => {
    let translation = (translations[language] as any)[key] || translations.en[key];
    if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            translation = translation.replace(`{${rKey}}`, String(replacements[rKey]));
        });
    }
    return translation;
  };
  
  const l = (localizedString: any) => {
    if (typeof localizedString === 'object' && localizedString !== null && !Array.isArray(localizedString)) {
        return localizedString[language] || localizedString.en || localizedString;
    }
    return localizedString;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, l }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
