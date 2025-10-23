import React from 'react';
import { type Testimonial } from '../types';
import { StarIcon } from './icons/Icons';

const testimonialsData: Testimonial[] = [
  {
    avatarUrl: "https://picsum.photos/id/1005/100/100",
    name: "Jane Doe",
    title: "Chủ sở hữu máy chủ Gaming",
    quote: "Memi đã thay đổi hoàn toàn cách chúng tôi quản lý cộng đồng. Các tính năng kiểm duyệt tự động giúp chúng tôi tiết kiệm hàng giờ mỗi ngày. Không thể thiếu!"
  },
  {
    avatarUrl: "https://picsum.photos/id/1011/100/100",
    name: "John Smith",
    title: "Quản trị viên cộng đồng",
    quote: "Tính năng âm nhạc là tốt nhất tôi từng thấy. Chất lượng âm thanh tuyệt vời và không bao giờ bị trễ. Các thành viên của chúng tôi rất thích nó."
  },
  {
    avatarUrl: "https://picsum.photos/id/1027/100/100",
    name: "Alex Johnson",
    title: "Người sáng tạo nội dung",
    quote: "Tôi yêu thích hệ thống cấp độ và các trò chơi tương tác. Nó thực sự giúp tăng cường sự gắn kết và giữ cho các cuộc trò chuyện luôn sôi nổi và vui vẻ."
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ avatarUrl, name, title, quote }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col h-full">
    <div className="flex text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
    </div>
    <p className="text-slate-300 italic flex-grow">"{quote}"</p>
    <div className="flex items-center mt-6">
      <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-white">{name}</h4>
        <p className="text-sm text-slate-400">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Được Tin Dùng Bởi Hàng Ngàn Cộng Đồng
          </h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Xem những gì người dùng của chúng tôi nói về Memi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;