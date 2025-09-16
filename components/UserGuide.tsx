import React from 'react';

interface UserGuideProps {
    language: 'en' | 'vi';
}

const GuideSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <section className="card-glass p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{title}</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 prose prose-slate dark:prose-invert max-w-none">
            {children}
        </div>
    </section>
);

const UserGuide: React.FC<UserGuideProps> = ({ language }) => {
    const isVietnamese = language === 'vi';

    const content = {
        title: isVietnamese ? 'Hướng dẫn sử dụng' : 'User Guide',
        intro_title: isVietnamese ? 'Chào mừng đến với IVS English!' : 'Welcome to IVS English!',
        intro_p1: isVietnamese
            ? 'Ứng dụng này là một nền tảng học tiếng Anh tích hợp dành cho học sinh K-12, bao gồm sách điện tử tương tác, công cụ luyện tập AI, gamification và các tính năng quản lý toàn diện cho giáo viên.'
            : 'This application is an integrated English learning platform for K-12 students, featuring interactive ebooks, AI-powered practice tools, gamification, and comprehensive teacher management features.',
        
        getting_started_title: isVietnamese ? 'Bắt đầu' : 'Getting Started',
        getting_started_role: isVietnamese
            ? 'Khi bạn sử dụng ứng dụng lần đầu tiên, bạn sẽ được yêu cầu chọn vai trò của mình: **Học sinh** hoặc **Giáo viên**. Lựa chọn này sẽ tùy chỉnh giao diện và các tính năng có sẵn cho bạn.'
            : 'When you first use the app, you will be asked to select your role: **Student** or **Teacher**. This choice customizes the interface and features available to you.',
        getting_started_nav: isVietnamese
            ? 'Sử dụng **thanh điều hướng bên trái (sidebar)** để truy cập các phần khác nhau của ứng dụng như Trang chủ, Chương trình, Công cụ AI và Cài đặt.'
            : 'Use the **sidebar on the left** to navigate to different sections of the app like Home, Curriculum, AI Tools, and Settings.',

        features_title: isVietnamese ? 'Tính năng cho Mọi người' : 'Features for Everyone',
        features_pinning_title: isVietnamese ? 'Chương trình & Ghim Khóa học' : 'Curriculum & Pinning Courses',
        features_pinning_p1: isVietnamese
            ? 'Trang **Chương trình** chứa tất cả các khóa học có sẵn từ Mầm non đến Lớp 12.'
            : 'The **Curriculum** page contains all available courses from Kindergarten to Grade 12.',
        features_pinning_p2: isVietnamese
            ? 'Để truy cập nhanh một khóa học, hãy nhấp vào **biểu tượng ghim** (<i class="fa-solid fa-thumbtack"></i>) trên thẻ khóa học. Các khóa học đã ghim sẽ xuất hiện trong mục "Các khóa học của tôi" trên **Trang chủ** của bạn.'
            : 'To quickly access a course, click the **pin icon** (<i class="fa-solid fa-thumbtack"></i>) on the course card. Pinned courses will appear under "My Courses" on your **Home** page.',
        
        features_ai_title: isVietnamese ? 'Công cụ AI' : 'AI Tools',
        features_ai_speaking: isVietnamese
            ? '**Luyện nói (Speaking Partner):** Trò chuyện với gia sư AI thân thiện của chúng tôi, Sparky, để thực hành kỹ năng giao tiếp tiếng Anh của bạn.'
            : '**Speaking Partner:** Chat with our friendly AI tutor, Sparky, to practice your English conversation skills.',
        features_ai_writing: isVietnamese
            ? '**Chấm bài viết (Writing Grader):** Nhận phản hồi tức thì về bài viết của bạn. Chỉ cần nhập chủ đề và văn bản của bạn, AI sẽ chấm điểm và đưa ra các đề xuất cải thiện.'
            : '**Writing Grader:** Get instant feedback on your writing. Just enter a topic and your text, and the AI will grade it and provide improvement suggestions.',

        features_settings_title: isVietnamese ? 'Cài đặt' : 'Settings',
        features_settings_profile: isVietnamese
            ? '**Chỉnh sửa Hồ sơ (Edit Profile):** Tùy chỉnh tên, avatar, cấp lớp và các thông tin cá nhân khác.'
            : '**Edit Profile:** Customize your name, avatar, grade level, and other personal information.',
        features_settings_data: isVietnamese
            ? '**Quản lý Dữ liệu (Data Management):** Sử dụng nút **Sao lưu (Backup)** để tải xuống tất cả dữ liệu ứng dụng của bạn (hồ sơ, lớp học, cài đặt) vào một tệp JSON. Sử dụng **Khôi phục (Restore)** để tải lên tệp này và khôi phục trạng thái của bạn. Điều này rất hữu ích khi chuyển đổi thiết bị hoặc trình duyệt.'
            : '**Data Management:** Use the **Backup** button to download all your app data (profile, classes, settings) to a JSON file. Use **Restore** to upload this file and restore your state. This is very useful when switching devices or browsers.',
        
        teacher_title: isVietnamese ? 'Dành cho Giáo viên' : 'For Teachers',
        teacher_p1: isVietnamese
            ? 'Trên **Bảng điều khiển giáo viên**, bạn có thể tạo các lớp học mới và thêm học sinh vào các lớp đó. Điều này cho phép bạn theo dõi tiến độ và quản lý việc học của họ một cách hiệu quả.'
            : 'In the **Teacher Dashboard**, you can create new classes and add students to them. This allows you to track their progress and manage their learning effectively.',

        student_title: isVietnamese ? 'Dành cho Học sinh' : 'For Students',
        student_p1: isVietnamese
            ? '**Trang chủ** của bạn hiển thị các chỉ số gamification để tạo động lực học tập: **Điểm (Points)**, **Chuỗi ngày học (Streak)**, và **Huy hiệu (Badges)**. Hãy hoàn thành các bài học để xem các chỉ số này tăng lên!'
            : 'Your **Home** page displays gamification stats to motivate you: **Points**, **Streak**, and **Badges**. Keep completing lessons to see them grow!',
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-8">
                <i className="fa-solid fa-circle-question text-5xl text-blue-500 mb-4"></i>
                <h1 className="text-4xl font-bold">{content.title}</h1>
            </div>

            <GuideSection title={content.intro_title}>
                <p>{content.intro_p1}</p>
            </GuideSection>
            
            <GuideSection title={content.getting_started_title}>
                <p dangerouslySetInnerHTML={{ __html: content.getting_started_role }}></p>
                <p dangerouslySetInnerHTML={{ __html: content.getting_started_nav }}></p>
            </GuideSection>

            <GuideSection title={content.features_title}>
                <h3>{content.features_pinning_title}</h3>
                <p>{content.features_pinning_p1}</p>
                <p dangerouslySetInnerHTML={{ __html: content.features_pinning_p2 }}></p>
                
                <h3 className="!mt-8">{content.features_ai_title}</h3>
                <ul>
                    <li dangerouslySetInnerHTML={{ __html: content.features_ai_speaking }}></li>
                    <li dangerouslySetInnerHTML={{ __html: content.features_ai_writing }}></li>
                </ul>

                <h3 className="!mt-8">{content.features_settings_title}</h3>
                 <ul>
                    <li dangerouslySetInnerHTML={{ __html: content.features_settings_profile }}></li>
                    <li dangerouslySetInnerHTML={{ __html: content.features_settings_data }}></li>
                </ul>
            </GuideSection>

            <GuideSection title={content.teacher_title}>
                <p>{content.teacher_p1}</p>
            </GuideSection>

            <GuideSection title={content.student_title}>
                <p dangerouslySetInnerHTML={{ __html: content.student_p1 }}></p>
            </GuideSection>
        </div>
    );
};

export default UserGuide;