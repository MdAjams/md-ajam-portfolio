import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Md Ajam
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Data Analyst who turns{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">raw data</span>{' '}
            into{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">actionable insights</span>
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-12 animate-fade-in-up-delayed">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
            Data Storyteller
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group animate-bounce"
      >
        <div className="flex flex-col items-center space-y-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          <span className="text-sm font-medium">↓ Scroll to see my work</span>
          <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </button>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;