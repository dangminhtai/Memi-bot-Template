import React from 'react';
import { BotIcon, DiscordIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BotIcon className="w-8 h-8 text-violet-400" />
              <h1 className="text-2xl font-bold text-white">Memi</h1>
            </div>
            <p className="text-slate-400 max-w-md">
              Bot Discord đa năng được thiết kế để nâng cao trải nghiệm máy chủ của bạn với các tính năng mạnh mẽ và dễ sử dụng.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-violet-400 transition-colors">Tính Năng</a></li>
              <li><a href="#commands" className="text-slate-400 hover:text-violet-400 transition-colors">Lệnh</a></li>
              <li><a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Hỗ Trợ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pháp lý</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Điều khoản Dịch vụ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Chính sách Bảo mật</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Memi. Mọi quyền được bảo lưu.
          </p>
          <p className="text-slate-500 text-sm mt-4 sm:mt-0">
            Không liên kết với Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;