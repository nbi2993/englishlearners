
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: 'fa-solid fa-microphone-lines',
      title: 'Luyện nói với AI',
      description: 'Cải thiện kỹ năng phát âm và sự tự tin của bạn với đối tác nói AI của chúng tôi.',
    },
    {
      icon: 'fa-solid fa-file-pen',
      title: 'Chấm điểm bài viết tự động',
      description: 'Nhận phản hồi và chấm điểm tức thì cho bài viết của bạn để nhanh chóng tiến bộ.',
    },
    {
      icon: 'fa-solid fa-compass-drafting',
      title: 'Lộ trình học tập cá nhân hóa',
      description: 'Theo dõi một lộ trình học tập được điều chỉnh theo trình độ và mục tiêu của riêng bạn.',
    },
    {
      icon: 'fa-solid fa-book-sparkles',
      title: 'Thư viện tài liệu phong phú',
      description: 'Truy cập vào một bộ sưu tập lớn các bài học, bài báo và sách điện tử tương tác.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Faded background logo */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url(/assets/logo.png)`,
          backgroundSize: 'clamp(300px, 50%, 600px)',
        }}
      ></div>
      
      {/* Main content with z-index to be on top of the background */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <header className="w-full px-4 sm:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <img src="/assets/logo.png" alt="App Logo" className="w-10 h-10" />
                <span className="text-xl font-bold">IVS English</span>
            </div>
            <Link to="/signin">
              <button className="px-5 py-2 text-base font-bold text-white bg-transparent border border-slate-700 rounded-full hover:bg-slate-800 transition duration-300">
                Đăng nhập
              </button>
            </Link>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
            Nền tảng học tiếng Anh <span className="text-blue-400">toàn diện</span> cho thế hệ tương lai
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10">
            IVS English K-12 mang đến trải nghiệm học tập được cá nhân hóa, kết hợp công nghệ AI tiên tiến với chương trình giảng dạy hấp dẫn.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <button className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-200 transition-transform duration-300 transform hover:scale-105">
                Bắt đầu ngay
              </button>
            </Link>
          </div>
        </main>

        {/* Features Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-center transform transition-transform duration-300 hover:-translate-y-2">
                <i className={`${feature.icon} text-3xl text-blue-400 mb-4`}></i>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center p-6 text-slate-500 text-sm">
        <p>© 2025 IVS English K-12. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
