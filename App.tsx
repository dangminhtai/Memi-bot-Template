import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full animated-gradient-background"></div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Commands />
        <Testimonials />
        <Pricing />
        <ChatDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
