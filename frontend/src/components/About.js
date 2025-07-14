import React from 'react';
import { BarChart3, Database, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Md Ajam</span>, a results-driven Data Analyst who loves solving business problems using data. I work with tools like{' '}
              <span className="font-medium text-purple-600 dark:text-purple-400">Power BI</span>,{' '}
              <span className="font-medium text-purple-600 dark:text-purple-400">Python</span>, and{' '}
              <span className="font-medium text-purple-600 dark:text-purple-400">SQL</span>{' '}
              to uncover insights and build meaningful dashboards.
            </p>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I've worked across industries — <span className="font-medium text-indigo-600 dark:text-indigo-400">healthcare</span>,{' '}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">fintech</span>, and{' '}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">mobility</span> — using data storytelling, EDA, and machine learning to create impact.
            </p>
            
            <blockquote className="text-xl font-medium text-slate-800 dark:text-slate-200 italic border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-r-lg">
              "I believe every dataset has a story, and I'm here to tell it with clarity and color."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data Visualization",
                description: "Creating compelling visual stories from complex datasets using Power BI and Python libraries",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Analysis",
                description: "Performing EDA, data cleaning, modeling, and statistical analysis to uncover insights",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Business Intelligence",
                description: "Transforming raw data into actionable business insights and strategic recommendations",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;