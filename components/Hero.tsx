import React from 'react';
import { DiscordIcon } from './icons/Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-3xl"
            aria-hidden="true"
        ></div>
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Nâng Tầm Máy Chủ Discord Của Bạn
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Memi tích hợp AI Gemini mạnh mẽ, biến máy chủ của bạn thành không gian học tập, giải trí và quản lý cộng đồng hiệu quả hơn bao giờ hết.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                    href="https://discord.com/oauth2/authorize?client_id=1417332808422129714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/30 w-full sm:w-auto justify-center"
                >
                    <DiscordIcon className="w-6 h-6" />
                    <span>Mời Memi</span>
                </a>
                <a 
                    href="https://discord.gg/yksE5pNDtk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 backdrop-blur-sm w-full sm:w-auto"
                >
                    Tham gia máy chủ hỗ trợ
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;