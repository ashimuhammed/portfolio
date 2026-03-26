import React from 'react';
import { GraduationCap, Code, Briefcase, BookOpen } from 'lucide-react';

const TimelineStep = ({ year, title, institution, description, icon, isLast }) => (
  <div className="relative flex gap-8 group">
    {/* Line and Icon Column */}
    <div className="flex flex-col items-center">
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-teal-500 shadow-xl group-hover:scale-110 transition-transform duration-300 text-teal-600">
        {icon}
      </div>
      {!isLast && (
        <div className="w-1 h-full bg-gradient-to-b from-teal-500 to-gray-200 dark:to-gray-700 -mt-1 mb-2"></div>
      )}
    </div>

    {/* Content Card */}
    <div className="pb-16 pt-1">
      <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-white uppercase bg-teal-500 rounded-full">
        {year}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-teal-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4 italic uppercase tracking-wide">
        {institution}
      </p>
      <div className="max-w-xl p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-Ovo">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CareerTimeline = () => {
  const journey = [
    {
      year: "2025 - 2025",
      title: "Junior Odoo Developer",
      institution: "Code-OX Technologies, Calicut",
      description: "Leading technical implementations and enterprise-level customizations. Specializing in Hospital Management Systems and complex database architecture using PostgreSQL.",
      icon: <Briefcase size={22} />,
    },
    {
      year: "2024 - 2025",
      title: "Odoo ERP Developer Intern",
      institution: "BTRAC Business Technology, Kannur",
      description: "Gained hands-on experience in Odoo module development, XML/QWeb view customization, and workflow automation for business solutions.",
      icon: <Briefcase size={22} />,
    },
    {
      year: "2024",
      title: "Python Full-Stack Developer Internship",
      institution: "BTRAC Business Technology, Kannur",
      description: "Mastered the Django + React stack. Built high-performance applications including a Hotel Booking System with REST APIs and secure payment gateways.",
      icon: <Code size={22} />,
    },
    {
      year: "2023",
      title: "Diploma in Software Engineering",
      institution: "G-TEC Computer Education",
      description: "Intensive training in core programming logic, data structures, and web technologies, marking my transition into the tech industry.",
      icon: <GraduationCap size={22} />,
    },
    {
      year: "2021",
      title: "Bachelor of Arts in English",
      institution: "University of Calicut",
      description: "Cultivated strong communication and analytical skills, which I now apply to writing clean documentation and structured code.",
      icon: <BookOpen size={22} />,
    },
  ];

  return (
    /* Added scroll-mt-20 to ensure the navbar doesn't cover the title when scrolling */
    <section id="portfolio" className="py-24 px-[12%] bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-20">
      <div className="text-center mb-20">
        <h4 className="text-teal-600 font-semibold text-lg mb-2 uppercase tracking-widest">The Story So Far</h4>
        <h2 className="text-5xl font-bold text-gray-800 dark:text-white font-Ovo">My Career Journey</h2>
        <div className="w-20 h-1.5 bg-teal-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        {journey.map((item, index) => (
          <TimelineStep
            key={index}
            year={item.year}
            title={item.title}
            institution={item.institution}
            description={item.description}
            icon={item.icon}
            isLast={index === journey.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;