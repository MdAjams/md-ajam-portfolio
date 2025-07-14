import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "mdajamansari099@gmail.com",
      href: "mailto:mdajamansari099@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mdajam",
      href: "https://linkedin.com/in/mdajam",
      icon: <Linkedin className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      label: "GitHub",
      value: "github.com/MdAjams",
      href: "https://github.com/MdAjams",
      icon: <Github className="w-6 h-6" />,
      color: "from-slate-700 to-slate-800",
      hoverColor: "hover:bg-slate-50 dark:hover:bg-slate-800/50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Let's connect and discuss how data can drive your next big decision.
          </p>
        </div>

        <div className="space-y-6">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg ${contact.hoverColor} transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {contact.label}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {contact.value}
                  </p>
                </div>
              </div>
              <Send className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Let's collaborate to uncover insights that drive business growth.
            </p>
            <a
              href="mailto:mdajamansari099@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-600 dark:text-slate-400">
          <p className="text-sm">
            © 2025 Md Ajam. Built with passion for data and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;