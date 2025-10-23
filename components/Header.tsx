import React, { useState, useEffect } from 'react';
import { BotIcon, DiscordIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BotIcon className="w-8 h-8 text-violet-400" />
          <h1 className="text-2xl font-bold text-white">Memi</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-violet-400 transition-colors">Tính Năng</a>
          <a href="#commands" className="text-slate-300 hover:text-violet-400 transition-colors">Lệnh</a>
          <a href="#testimonials" className="text-slate-300 hover:text-violet-400 transition-colors">Đánh Giá</a>
          <a href="#pricing" className="text-slate-300 hover:text-violet-400 transition-colors">Gói Premium</a>
          <a href="#chat-demo" className="text-slate-300 hover:text-violet-400 transition-colors">Chat Thử</a>
          <a href="https://discord.gg/yksE5pNDtk" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-violet-400 transition-colors">Hỗ Trợ</a>
        </nav>
        <a 
          href="https://discord.com/oauth2/authorize?client_id=1417332808422129714" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <DiscordIcon className="w-5 h-5" />
          <span>Thêm vào Discord</span>
        </a>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;