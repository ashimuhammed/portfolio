import React from 'react';

const experiences = [
  {
    title: 'Odoo Developer',
    organization: 'BTRAC Business Technology Research & Analytics Center',
    description: `Odoo Developer at BTRAC (Business Technology Research & Analytics Center),
developing and customizing multiple Odoo modules to enhance
business processes. Gained expertise in module development,
workflow automation, and database management while optimizing
Odoo functionality to meet business needs.`,
  },
  {
    title: 'Python Developer Internship (July–Nov)',
    organization: 'BTRAC Business Technology Research & Analytics Center',
    description: `Completed a 5-month internship at BTRAC (Business Technology Research & Analytics Center),
working on one real project (an agriculture website) and two additional
projects, gaining hands-on experience in web development and
project implementation.`,
  },
  {
    title: 'Python/Django',
    organization: 'G-TECH Computer Education Manjeri',
    description: `Completed an 8-month Python and Django course at G-TEC Computer Education,
Manjeri, gaining hands-on experience in Python programming, Django web development,
database management, and API development.`,
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full px-6 md:px-[10%] py-16 text-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-Ovo">Experience</h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto my-4"></div>

      <div className="flex flex-col gap-12 mt-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-6 py-8 text-left mx-auto max-w-3xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-teal-600 font-medium mt-1">{exp.organization}</p>
            <div className="h-px bg-gray-300 my-4"></div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
