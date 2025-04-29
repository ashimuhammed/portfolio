import React from 'react';

const experiences = [
  {
    title: 'Odoo Developer Intern (Nov /24 - Present )',
    organization: 'BTRAC (Business Technology Research & Analytics Center)',
    description: `Odoo Developer at BTRAC, developing and customizing multiple Odoo modules to enhance business processes. Gained expertise in module development, workflow automation, and database management while optimizing Odoo functionality to meet business needs.`,
  },
  {
    title: 'Python full stack Developer Internship (July /24 – Nov /24)',
    organization: 'BTRAC (Business Technology Research & Analytics Center)',
    description: `Completed a 5-month internship at BTRAC, working on one real project (an agriculture website) and two additional projects. Gained hands-on experience in web development and project implementation.`,
  },
  {
    title: 'Python/Django',
    organization: 'G-TEC Computer Education, Manjeri',
    description: `Completed an 8-month Python and Django course at G-TEC Computer Education, gaining hands-on experience in Python programming, Django web development, database management, and API development.`,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-6 md:px-[10%] py-16 text-center scroll-mt-20 bg-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-Ovo">Experience</h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto my-4"></div>

      <div className="flex flex-col gap-10 mt-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-6 text-left mx-auto max-w-3xl hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-teal-600 font-medium mt-1">{exp.organization}</p>
            <hr className="my-4 border-gray-200" />
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
