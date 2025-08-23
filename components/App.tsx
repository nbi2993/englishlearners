import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import { CurriculumLevel, Unit, Lesson } from './types'; // Assuming types are available
import { I18nProvider } from './contexts/i18n'; // Assuming i18n context is available

// This is a placeholder for completed lessons. In a real app, this would come from a global state or database.
const initialCompletedLessons = new Set<number>();

const App: React.FC = () => {
  // State để quản lý view hiện tại: 'home' (chọn chương trình) hoặc 'dashboard' (hiển thị chi tiết chương trình)
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  // State để lưu trữ tên của chương trình lớn đã chọn (ví dụ: "Kindergarten IVS-Mastery")
  const [selectedProgramCategoryForDashboard, setSelectedProgramCategoryForDashboard] = useState<string | null>(null);
  // State để theo dõi các bài học đã hoàn thành (giả định, cần tích hợp Firestore nếu muốn lưu trữ lâu dài)
  const [completedLessons] = useState<Set<number>>(initialCompletedLessons); 

  /**
   * Xử lý khi người dùng chọn một cấp học lớn từ HomeScreen.
   * @param category Tên của cấp học lớn được chọn.
   */
  const handleSelectProgramCategory = (category: string) => {
    setSelectedProgramCategoryForDashboard(category);
    setCurrentView('dashboard'); // Chuyển sang màn hình Dashboard
  };

  /**
   * Xử lý khi người dùng muốn quay về màn hình chính (chọn cấp học lớn).
   */
  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedProgramCategoryForDashboard(null); // Đặt lại cấp học đã chọn
  };

  /**
   * Xử lý khi người dùng nhấp vào một bài học cụ thể.
   * (Hiện tại chỉ log ra console, trong ứng dụng thực tế sẽ điều hướng đến LessonView)
   * @param lesson Đối tượng bài học đã chọn.
   * @param unit Đối tượng đơn vị học chứa bài học đó.
   */
  const handleLessonClick = (lesson: Lesson, unit: Unit) => {
    console.log(`Navigating to lesson: ${lesson.title.en} in unit: ${unit.title.en}`);
    // Trong một ứng dụng đầy đủ, bạn sẽ thay đổi trạng thái ở đây để render component LessonView
    // Ví dụ: setLessonView({ lesson, unit });
  };

  return (
    // Bọc ứng dụng trong I18nProvider để hỗ trợ đa ngôn ngữ
    <I18nProvider>
      <div className="min-h-screen bg-gray-50 font-inter">
        {currentView === 'home' ? (
          // Nếu đang ở màn hình chính, hiển thị HomeScreen
          <HomeScreen onSelectProgramCategory={handleSelectProgramCategory} />
        ) : (
          // Nếu đang ở màn hình dashboard, hiển thị Dashboard và truyền các props cần thiết
          <Dashboard
            initialProgramCategory={selectedProgramCategoryForDashboard} // Truyền cấp học lớn đã chọn
            completedLessons={completedLessons}
            onLessonClick={handleLessonClick}
            onGoHome={handleGoHome} // Truyền hàm để Dashboard có thể quay về HomeScreen
          />
        )}
      </div>
    </I18nProvider>
  );
};

export default App;
