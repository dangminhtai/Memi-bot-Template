import React from 'react';
import { type PricingTier } from '../types';
import { CheckIcon } from './icons/Icons';

const pricingData: PricingTier[] = [
    {
        name: 'Miễn Phí',
        price: '₫0',
        period: '/mãi mãi',
        features: [
            'Các lệnh cơ bản',
            'Tương tác AI giới hạn',
            'Tạo ảnh (chất lượng thấp)',
            'Hỗ trợ cộng đồng',
        ],
        isFeatured: false,
        cta: 'Bắt đầu Miễn phí',
        ctaLink: 'https://discord.com/oauth2/authorize?client_id=1417332808422129714',
    },
    {
        name: 'Premium',
        price: '₫120.000',
        period: '/tháng',
        features: [
            'Tất cả tính năng miễn phí',
            'Tương tác AI không giới hạn',
            'Tạo ảnh chất lượng cao',
            'Giao tiếp giọng nói',
            'Truy cập tính năng mới sớm nhất',
            'Hỗ trợ ưu tiên 24/7',
        ],
        isFeatured: true,
        cta: 'Nâng cấp Ngay',
        ctaLink: '#', // Thay bằng link Ko-fi hoặc trang thanh toán
    },
];

const PricingCard: React.FC<PricingTier> = ({ name, price, period, features, isFeatured, cta, ctaLink }) => (
    <div className={`rounded-2xl p-8 transition-all duration-300 ${isFeatured ? 'featured-glow bg-slate-900' : 'card-glow-border bg-slate-800/40'}`}>
        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="mt-4">
                <span className="text-4xl font-extrabold text-white">{price}</span>
                <span className="text-slate-400">{period}</span>
            </p>
            <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <CheckIcon className={`w-5 h-5 ${isFeatured ? 'text-violet-400' : 'text-emerald-400'}`} />
                        <span className="text-slate-300">{feature}</span>
                    </li>
                ))}
            </ul>
            <a 
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center mt-8 px-6 py-3 font-semibold rounded-lg transition-transform duration-300 hover:scale-105 ${isFeatured ? 'btn-glow bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
            >
                {cta}
            </a>
        </div>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Nâng Cấp Trải Nghiệm Của Bạn
                    </h2>
                    <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                        Chọn gói phù hợp với nhu cầu và đưa máy chủ của bạn lên một tầm cao mới.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-8 items-center">
                    {pricingData.map((tier, index) => (
                        <PricingCard key={index} {...tier} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
