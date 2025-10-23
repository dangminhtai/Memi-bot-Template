import React from 'react';
import { type Feature } from '../types';
import { BrainIcon, BookOpenIcon, ImageIcon, GlobeIcon, CogIcon, MicrophoneIcon } from './icons/Icons';

const featuresData: Feature[] = [
  {
    icon: <BrainIcon className="w-10 h-10 text-violet-400" />,
    title: "Trí Tuệ Hội Thoại",
    description: "Tích hợp Gemini API, Memi có thể trò chuyện tự nhiên, ghi nhớ ngữ cảnh và 'nhân hóa' hội thoại để tương tác gần gũi hơn."
  },
  {
    icon: <BookOpenIcon className="w-10 h-10 text-sky-400" />,
    title: "Hỗ Trợ Học Tập",
    description: "Giải thích khái niệm, hướng dẫn viết code, tóm tắt tài liệu và phân tích nội dung từ tệp đính kèm (văn bản, hình ảnh)."
  },
  {
    icon: <ImageIcon className="w-10 h-10 text-emerald-400" />,
    title: "Sáng Tạo Đa Phương Tiện",
    description: "Tạo ra những hình ảnh độc đáo từ mô tả văn bản, biến ý tưởng của bạn thành hiện thực một cách nhanh chóng."
  },
  {
    icon: <GlobeIcon className="w-10 h-10 text-rose-400" />,
    title: "Tích Hợp Google Search",
    description: "Cung cấp thông tin chính xác và cập nhật về các sự kiện mới nhất, đảm bảo câu trả lời luôn phù hợp với thực tế."
  },
  {
    icon: <CogIcon className="w-10 h-10 text-amber-400" />,
    title: "Function Calling & Quản Lý",
    description: "Thực thi các hành động như tạo kênh, gán vai trò, ban/kick người dùng chỉ bằng ngôn ngữ tự nhiên, tự động hóa việc quản lý server."
  },
  {
    icon: <MicrophoneIcon className="w-10 h-10 text-fuchsia-400" />,
    title: "Giao Tiếp Bằng Giọng Nói",
    description: "Tham gia vào các cuộc trò chuyện thoại thời gian thực, mang lại trải nghiệm tương tác sống động và trực tiếp hơn."
  }
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 transition-all duration-300 hover:border-violet-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Bộ Tính Năng Toàn Diện
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Mọi thứ bạn cần để quản lý, gắn kết và phát triển cộng đồng của mình.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;