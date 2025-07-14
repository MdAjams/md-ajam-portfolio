import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Mirai School of Technology",
      period: "Jun 2025 – Present",
      location: "Remote",
      type: "Current",
      responsibilities: [
        "Analyzed datasets to uncover trends and business insights",
        "Built dashboards and reports using Power BI",
        "Performed data cleaning, modeling, and ad-hoc analysis"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Visualization Intern",
      company: "Cognifyz Technologies", 
      period: "Apr – May 2025",
      location: "Remote",
      type: "Completed",
      responsibilities: [
        "Designed weekly data dashboards using Power BI",
        "Visualized real-world business data clearly and effectively",
        "Transformed raw Excel/CSV data into visual stories"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${exp.color}`}>
                        {exp.type}
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {exp.company}
                    </h4>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-700 dark:text-slate-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;