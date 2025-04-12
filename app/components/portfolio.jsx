import React from 'react';

// Unified TimelineItem Component with optional bullet points
const TimelineItem = ({ title, institution, date, points }) => (
  <div className="relative pl-8 mb-12">
    <div className="absolute left-0 top-2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
    <h3 className="text-lg font-bold text-gray-700 uppercase">{title}</h3>
    <p className="font-semibold text-gray-800">
      {institution} {date && <span className="text-sm text-gray-600">| {date}</span>}
    </p>
    {points && (
      <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

export default function Portfolio() {
  return (
    <div id="portfolio" className="px-6 mb-24 mt-24 py-20 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold text-gray-800">Resume</h1>
        <div className="w-16 h-1 bg-teal-500 mx-auto my-2"></div>
        <p className="text-gray-600 text-lg">Odoo Developer</p>
      </div>

      {/* Contact & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT</h2>
          <div className="border-l-2 border-teal-500 pl-4 space-y-2">
            <p className="font-semibold">Muhammed Ashique</p>
            <p>Tharakan House, Thrikkalangode (PO), Malappuram, Kerala, 676123</p>
            <p>Phone: 8606648865</p>
            <p>Email: ashiquetharakan@gmail.com</p>
            <p>
              GitHub: <a href="https://github.com/ashimuhammed" className="text-teal-600 hover:underline" target="_blank" rel="noreferrer">github.com/ashimuhammed</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/muhammed-ashique-9a4b5a270" className="text-teal-600 hover:underline" target="_blank" rel="noreferrer">linkedin.com/in/muhammed-ashique</a>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TECHNICAL SKILLS</h2>
          <div className="border-l-2 border-teal-500 pl-4 space-y-2">
            <p><strong>Programming Languages:</strong> Python, JavaScript</p>
            <p><strong>Web Frameworks:</strong> Odoo, Django</p>
            <p><strong>Front-end Technologies:</strong> HTML, CSS, Bootstrap, JavaScript</p>
            <p><strong>API Development:</strong> RESTful APIs</p>
            <p><strong>Databases:</strong> MySQL, PostgreSQL</p>
            <p><strong>Version Control:</strong> Git, GitHub</p>
          </div>
        </div>
        </div>
     
      
      {/* Education Section */}
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">EDUCATION</h2>
        <div className="border-l-2 border-teal-500 pl-4">
          <TimelineItem title="DIPLOMA IN ODOO DEVELOPMENT (ONGOING)" institution="BTRAC Kannur" date="October 2024" />
          <TimelineItem title="DEGREE IN ENGLISH" institution="UNIVERSITY OF CALICUT" date="Year of Completion: 2021" />
          <TimelineItem title="PLUS TWO (HIGH SCHOOL)" institution="GHSS KARAKUNNU, Manjeri" date="Year of Completion: 2018" />
        </div>

        {/* Languages Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">LANGUAGES</h2>
        <div className="border-l-2 border-teal-500 pl-4">
          <div className="relative pl-6 mb-4">
            <div className="absolute left-0 top-1 w-3 h-3 bg-white border-2 border-teal-500 rounded-full"></div>
            <p className="text-gray-800">Malayalam <span className="text-gray-500">(Fluent)</span></p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 w-3 h-3 bg-white border-2 border-teal-500 rounded-full"></div>
            <p className="text-gray-800">English <span className="text-gray-500">(Intermediate)</span></p>
          </div>
        </div>

        {/* Work Experience Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">WORK EXPERIENCE</h2>
        <div className="border-l-2 border-teal-500 pl-4">
          <TimelineItem
            title="ODOO DEVELOPER-INTERN"
            institution="BTRAC Business Technology"
            date="Nov 2024 – Present"
            points={[
              "Developed and maintained multiple Odoo modules including a hospital management system and a student-teacher portal.",
              "Collaborated with a team to design and implement features for a complaint registration system and CRM module.",
              "Assisted in integrating front-end technologies like XML, JavaScript, and QWeb templates with Odoo.",
              "Gained experience working with PostgreSQL and customizing Odoo models, views, and workflows."
            ]}
          />
        </div>

        {/* Projects Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">PROJECTS</h2>
        <div className="border-l-2 border-teal-500 pl-4">
          <TimelineItem
            title="ODOO CRM & HOSPITAL MANAGEMENT MODULE"
            institution=""
            points={[
              "Developed a hospital management system in Odoo with separate doctor login and assigned-patient views.",
              "Implemented role-based access, appointment scheduling, patient history, and notifications."
            ]}
          />
          <TimelineItem
            title="ODOO SCHOOL MANAGEMENT MODULE"
            institution=""
            points={[
              "Created a school management system to handle teacher records and student performance reports.",
              "Enabled role-based access, attendance tracking, and academic monitoring features."
            ]}
          />
          <TimelineItem
            title="ODOO CUSTOMIZATION & ADVANCED FEATURES"
            institution=""
            points={[
              "Customized `res.partner` to extend contact management.",
              "Implemented PDF generation for invoices and secure document download with token-based access.",
              "Enhanced modules with scheduled actions and workflow automation."
            ]}
          />
        </div>
      </div>
    </div>
    
  );
}
