import React from 'react';
import { ExternalLink, Github, Brain, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lung Cancer Prediction",
      description: "Predicts lung cancer risk from patient input using ML",
      tools: ["Python", "scikit-learn", "Streamlit"],
      github: "https://github.com/MdAjams",
      live: "https://predict-lung-cancer.onrender.com/",
      icon: <Brain className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      title: "Indian EV Market Analysis", 
      description: "Data storytelling dashboard on India's electric vehicle boom",
      tools: ["Power BI", "Python", "Streamlit"],
      github: "https://github.com/MdAjams",
      live: "https://indian-ev-markets-iyb9zidbn4dftn9lqtgeco.streamlit.app/",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "Loan Eligibility Prediction",
      description: "Predicts whether a person is eligible for a loan",
      tools: ["Python", "Pandas", "scikit-learn"],
      github: "https://github.com/MdAjams",
      live: null,
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "ForecasterX",
      description: "Time-series forecasting app for future value prediction",
      tools: ["Python", "Streamlit", "statsmodels"],
      github: "https://github.com/MdAjams",
      live: null,
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            All projects are fully open — no clicks required. Explore the code and live demos directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${project.bgGradient} rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-105`}
            >
              <div className="p-8">
                {/* Project icon and title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools/Tech stack */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${project.color} rounded-full`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                <div className={`w-full h-full bg-gradient-to-br ${project.color} rounded-full blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;