import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Commands />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;