import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { type ChatMessage } from '../types';
import { BotIcon, PaperAirplaneIcon } from './icons/Icons';

const ChatDemo: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'bot', text: 'Xin chào! Tôi là Memi, trợ lý AI của bạn. Hãy hỏi tôi bất cứ điều gì!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userMessage.text,
                config: {
                    systemInstruction: "Bạn là Memi, một chatbot AI thân thiện, thông minh và có chút hài hước. Bạn đang trò chuyện với người dùng trong một phiên chat thử trên website quảng bá của mình. Hãy trả lời một cách tự nhiên, ngắn gọn như đang nhắn tin với bạn bè. Tuyệt đối không được tự nhận mình là một mô hình ngôn ngữ lớn hay sản phẩm của Google. Hãy thể hiện cá tính của Memi để thuyết phục người dùng mời bạn về server Discord của họ.",
                }
            });
            
            const botMessage: ChatMessage = { sender: 'bot', text: response.text };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Lỗi khi gọi API Gemini:", error);
            const errorMessage: ChatMessage = { 
                sender: 'bot', 
                text: 'Xin lỗi, tôi đang gặp sự cố. Vui lòng thử lại sau.',
                error: true 
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="chat-demo" className="py-20 sm:py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Trò Chuyện Thử với Memi
                    </h2>
                    <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                        Trải nghiệm sức mạnh của AI Gemini ngay tại đây trước khi mời Memi vào máy chủ của bạn.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col h-[600px]">
                    <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.sender === 'bot' && (
                                    <div className="w-10 h-10 rounded-full bg-violet-500 flex-shrink-0 flex items-center justify-center">
                                        <BotIcon className="w-6 h-6 text-white"/>
                                    </div>
                                )}
                                <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-violet-600 text-white rounded-br-none' : `bg-slate-700 text-slate-200 rounded-bl-none ${msg.error ? 'bg-red-500/30 text-red-200' : ''}`}`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex items-start gap-3 justify-start">
                                <div className="w-10 h-10 rounded-full bg-violet-500 flex-shrink-0 flex items-center justify-center">
                                    <BotIcon className="w-6 h-6 text-white"/>
                                </div>
                                <div className="max-w-xs md:max-w-md px-4 py-3 rounded-2xl bg-slate-700 text-slate-200 rounded-bl-none">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-4 bg-slate-800/80 border-t border-slate-700">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Nhập tin nhắn của bạn..."
                                disabled={isLoading}
                                className="flex-1 w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/80 transition-shadow duration-300 focus:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                aria-label="Chat input"
                            />
                            <button 
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-violet-600 text-white rounded-lg p-2.5 transition-all duration-300 enabled:hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transform enabled:hover:scale-110"
                                aria-label="Send message"
                            >
                                <PaperAirplaneIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatDemo;
