import React, { useState } from 'react';

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ title, description, tags, link, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="h-48 bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center p-6 relative">
      {/* If you have images, you can uncomment this and use the image prop */}
      {/* <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
      <h3 className="text-white text-2xl font-bold text-center leading-tight relative z-10">{title}</h3>
    </div>
    <div className="p-6 flex-grow">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a href={link} target="_blank" rel="noreferrer" className="text-teal-500 font-bold text-sm hover:text-teal-700 inline-flex items-center">
        View Project 
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
  </div>
);

export default function EnhancedPortfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 text-center scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Future of ERP</span> & Web.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            I’m Muhammed Ashique. I bridge the gap between robust Python backends 
            and pixel-perfect React frontends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/918606648865?text=Hi%20Muhammed%20Ashique!" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500 hover:text-green-600 transition-all flex items-center gap-2"
            >
              Let's Talk
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- PROJECT SHOWCASE --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-gray-500 mt-2">A selection of my recent technical work</p>
          </div>
          <div className="h-1 flex-grow bg-gray-100 dark:bg-gray-800 mx-8 hidden md:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Odoo Hospital Pro"
            description="Custom Odoo module for healthcare. Features doctor/patient dashboards, automated billing, and secure appointment scheduling."
            tags={['Odoo', 'Python', 'XML', 'PostgreSQL']}
            link="https://github.com/ashimuhammed/hospital-crm"
            image="/hospital-erp.jpg" 
          />
          <ProjectCard 
            title="Hotel Booking System"
            description="Full-stack booking system with room filtering, secure Razorpay integration, and a React-based admin dashboard."
            tags={['Django', 'React', 'REST API', 'Tailwind']}
            link="https://github.com/ashimuhammed/hotel-booking"
            image="/hotel-booking.jpg"
          />
          <ProjectCard 
            title="Odoo School Module"
            description="Enterprise module for managing student performance, teacher records, and automated attendance tracking."
            tags={['Odoo', 'Python', 'QWeb Reports']}
            link="https://github.com/ashimuhammed/school-crm"
            image="/school-erp.jpg"
          />
          <ProjectCard 
            title="Agri-Connect Portal"
            description="A platform for farmers to access real-time crop market data and expert consultations via a ticketing system."
            tags={['Python', 'Django', 'JavaScript']}
            link="https://github.com/ashimuhammed/agriculture-project"
            image="/agri-portal.jpg"
          />
          <ProjectCard 
            title="Sales Analytics Tool"
            description="Data visualization dashboard built with Chart.js and Django to track monthly sales performance and salesperson KPIs."
            tags={['Python', 'PostgreSQL', 'Chart.js']}
            link="https://github.com/ashimuhammed/sales-dashboard"
            image="/sales-dashboard.jpg"
          />
          <ProjectCard 
            title="Task Management App"
            description="A productivity tool with drag-and-drop features, token-based authentication, and user-specific data views."
            tags={['React', 'Django REST', 'JWT']}
            link="https://github.com/ashimuhammed/task-app"
            image="/task-app.jpg"
          />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'Django', 'Odoo', 'React', 'JavaScript', 'PostgreSQL', 'Git', 'Tailwind'].map(skill => (
              <div key={skill} className="p-8 border border-gray-100 dark:border-gray-700 rounded-2xl text-center hover:border-teal-500 transition-colors group bg-white dark:bg-gray-800">
                <p className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-teal-500">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}