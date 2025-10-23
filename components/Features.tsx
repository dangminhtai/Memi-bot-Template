import React from 'react';
import { type Feature } from '../types';
import { ShieldCheckIcon, MusicNoteIcon, PuzzleIcon, CogIcon, ChartBarIcon, UsersIcon } from './icons/Icons';

const featuresData: Feature[] = [
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-emerald-400" />,
    title: "Kiểm Duyệt Nâng Cao",
    description: "Tự động hóa việc kiểm duyệt với bộ lọc mạnh mẽ, nhật ký kiểm tra chi tiết và các lệnh trừng phạt dễ sử dụng."
  },
  {
    icon: <MusicNoteIcon className="w-10 h-10 text-rose-400" />,
    title: "Âm Nhạc Chất Lượng Cao",
    description: "Phát nhạc từ YouTube, Spotify và hơn thế nữa với chất lượng âm thanh nguyên bản và không bị gián đoạn."
  },
  {
    icon: <PuzzleIcon className="w-10 h-10 text-amber-400" />,
    title: "Trò Chơi Tương Tác",
    description: "Gắn kết cộng đồng của bạn với các trò chơi đố vui, kinh tế và các trò chơi nhỏ thú vị khác."
  },
  {
    icon: <CogIcon className="w-10 h-10 text-sky-400" />,
    title: "Tùy Chỉnh Dễ Dàng",
    description: "Cấu hình tiền tố, tin nhắn chào mừng, vai trò tự động và nhiều hơn nữa thông qua bảng điều khiển web trực quan."
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-orange-400" />,
    title: "Hệ Thống Lên Cấp",
    description: "Thưởng cho các thành viên tích cực bằng hệ thống lên cấp và các vai trò có thể tùy chỉnh để mở khóa."
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-fuchsia-400" />,
    title: "Vai Trò Phản Ứng",
    description: "Cho phép người dùng tự gán vai trò cho mình bằng cách phản ứng với tin nhắn, giúp đơn giản hóa việc quản lý vai trò."
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