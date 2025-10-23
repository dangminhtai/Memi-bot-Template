import React from 'react';
import { type Testimonial } from '../types';
import { StarIcon } from './icons/Icons';

const testimonialsData: Testimonial[] = [
  {
    avatarUrl: "https://picsum.photos/id/1005/100/100",
    name: "Minh Anh",
    title: "Sinh viên IT",
    quote: "Memi đã trở thành trợ thủ học tập đắc lực của mình. Từ việc giải thích các thuật toán phức tạp đến tóm tắt tài liệu, nó giúp mình tiết kiệm rất nhiều thời gian."
  },
  {
    avatarUrl: "https://picsum.photos/id/1011/100/100",
    name: "John Smith",
    title: "Quản trị viên cộng đồng",
    quote: "Tính năng Function Calling thật tuyệt vời. Giờ đây mình có thể tự động hóa các tác vụ quản lý server chỉ bằng một câu lệnh tự nhiên. Memi thực sự thông minh và hiệu quả."
  },
  {
    avatarUrl: "https://picsum.photos/id/1027/100/100",
    name: "Alex Johnson",
    title: "Người sáng tạo nội dung",
    quote: "Mình rất thích tính năng tạo ảnh của Memi. Chỉ cần mô tả ý tưởng là có ngay một tác phẩm nghệ thuật để chia sẻ với mọi người. Nó giúp server của chúng mình trở nên sáng tạo hơn!"
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ avatarUrl, name, title, quote }) => (
  <div className="card-glow-border bg-slate-800/40 p-6 rounded-xl flex flex-col h-full transition-all duration-300 hover:-translate-y-1">
    <div className="relative z-10 flex flex-col h-full">
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
