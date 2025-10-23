import React from 'react';
import { type Command } from '../types';

const commandsData: Command[] = [
    { name: "/ask [câu hỏi]", description: "Trò chuyện và đặt câu hỏi trực tiếp với AI Gemini.", isSlash: true },
    { name: "/imagine [mô tả]", description: "Tạo một hình ảnh độc đáo dựa trên mô tả của bạn.", isSlash: true },
    { name: "/summarize [link/tệp]", description: "Tóm tắt nội dung từ một liên kết web hoặc tệp đính kèm.", isSlash: true },
    { name: "/search [chủ đề]", description: "Tìm kiếm thông tin cập nhật bằng Google Search.", isSlash: true },
    { name: "/reset-chat", description: "Xóa lịch sử trò chuyện cũ để bắt đầu một cuộc hội thoại mới.", isSlash: true },
    { name: "/help", description: "Hiển thị danh sách tất cả các lệnh có sẵn và hướng dẫn sử dụng.", isSlash: true },
    { name: "!meme", description: "Hiển thị một meme ngẫu nhiên từ reddit.", isSlash: false },
    { name: "!weather [thành phố]", description: "Lấy thông tin thời tiết hiện tại cho một thành phố.", isSlash: false },
];

const CommandItem: React.FC<Command> = ({ name, description, isSlash }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-800 transition-colors hover:border-slate-700">
        <div>
            <code className="text-violet-400 font-mono text-lg">{name}</code>
            <p className="text-slate-400 mt-1">{description}</p>
        </div>
        {isSlash && (
            <span className="mt-2 sm:mt-0 text-xs font-semibold bg-violet-600/30 text-violet-300 px-3 py-1 rounded-full">
                Lệnh Slash
            </span>
        )}
    </div>
);

const Commands: React.FC = () => {
    return (
        <section id="commands" className="py-20 sm:py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Các Lệnh Mạnh Mẽ trong Tầm Tay
                    </h2>
                    <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                        Khám phá một vài trong số rất nhiều lệnh giúp Memi trở nên không thể thiếu.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
                    {commandsData.map((command, index) => (
                        <CommandItem key={index} {...command} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commands;