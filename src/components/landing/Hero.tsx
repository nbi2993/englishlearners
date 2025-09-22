
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 sm:py-28">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight">
        Nền tảng học tiếng Anh <span className="text-blue-400">toàn diện</span> cho thế hệ tương lai
      </h1>
      <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10">
        IVS English K-12 mang đến trải nghiệm học tập được cá nhân hóa, kết hợp công nghệ AI tiên tiến với chương trình giảng dạy hấp dẫn.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/signup">
          <button className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
            <span>Bắt đầu ngay</span>
            <ArrowRight size={20}/>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Hero;
