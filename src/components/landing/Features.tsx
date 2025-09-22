
import React from 'react';
import { Mic, FileText, Compass, BookOpen } from 'lucide-react';

const features = [
    {
      icon: <Mic size={32} className="text-blue-400 mb-4" />,
      title: 'Luyện nói với AI',
      description: 'Cải thiện kỹ năng phát âm và sự tự tin của bạn với đối tác nói AI của chúng tôi.',
    },
    {
      icon: <FileText size={32} className="text-blue-400 mb-4" />,
      title: 'Chấm điểm bài viết tự động',
      description: 'Nhận phản hồi và chấm điểm tức thì cho bài viết của bạn để nhanh chóng tiến bộ.',
    },
    {
      icon: <Compass size={32} className="text-blue-400 mb-4" />,
      title: 'Lộ trình học tập cá nhân hóa',
      description: 'Theo dõi một lộ trình học tập được điều chỉnh theo trình độ và mục tiêu của riêng bạn.',
    },
    {
      icon: <BookOpen size={32} className="text-blue-400 mb-4" />,
      title: 'Thư viện tài liệu phong phú',
      description: 'Truy cập vào một bộ sưu tập lớn các bài học, bài báo và sách điện tử tương tác.',
    },
  ];

const Features: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-center transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center">
            {feature.icon}
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
