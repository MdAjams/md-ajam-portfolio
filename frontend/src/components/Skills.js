import React from 'react';
import { Code, Database, BarChart3, GitBranch, FileSpreadsheet, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["EDA", "Pandas", "NumPy"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Visualization",
      icon: <Database className="w-6 h-6" />,
      skills: ["Power BI", "Matplotlib", "Seaborn"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Scikit-learn"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Tools",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      skills: ["Microsoft Excel"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub"],
      color: "from-slate-500 to-gray-500"
    }
  ];

  const allSkills = [
    "Python", "SQL", "Power BI", "EDA", "Pandas", "Scikit-learn",
    "NumPy", "Matplotlib", "Seaborn", "Microsoft Excel", "Git", "GitHub"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills overview */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills by category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h4>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-slate-700 dark:text-slate-300"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Industry Experience
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Applied data analysis and visualization skills across{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Healthcare</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Fintech</span>, and{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mobility</span>{' '}
              industries, delivering data-driven insights and compelling visual narratives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;