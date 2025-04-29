import { assets,toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-gray-50'>
      <h1 className=' my-24 mb-2 text-4xl font-Ovo text-center text-gray-800'>About Me</h1>
      <div className='w-20 h-1 bg-teal-500 mx-auto mt-0 mb-4'></div>

      <p className='text-center mt-6 max-w-3xl mx-auto text-gray-700 font-Ovo'>
      Enthusiastic Odoo ERP Developer with expertise in Python Full-Stack Development.
      Skilled in both backend and frontend technologies, including Django, REST APIs, React.js, and database management. 
      Strong knowledge in building scalable web applications, managing databases, and customizing Odoo modules to meet diverse business needs.
      Passionate about delivering efficient, user-centric, and maintainable business solutions.
      </p>

      <div className='flex flex-col lg:flex-row items-start justify-between gap-10 mt-16'>
  {/* Profile Image */}
  <div className='w-full lg:w-1/3 flex justify-center'>
    <Image
      src={assets.profile_img}
      alt='Profile'
      className='rounded-3xl w-64 sm:w-72 shadow-lg hover:-translate-y-1 transition duration-500'
    />
  </div>

  {/* Details */}
  <div className='w-full lg:w-2/3'>
    <h3 className='text-2xl font-Ovo text-gray-800 mb-6'>Python Full-Stack Developer & Odoo Developer.</h3>
    

    <div className='grid grid-cols-1 sm:grid-cols-1 gap-y-4 gap-x-8 text-gray-700 text-[16px]'>
  <p><span className='font-semibold'>👤 Name:</span> Muhammed Ashique</p>
  <p><span className='font-semibold'>📞 Phone:</span> +91 8606648865</p>
  <p><span className='font-semibold'>🎂 Birthday:</span> 1 August 1999</p>
  <p><span className='font-semibold'>📍 Place:</span> Malappuram, Kerala, India</p>
  <p><span className='font-semibold'>🎓 Degree:</span> BA English Literature</p>
  <p><span className='font-semibold'>📧 Email:</span> ashiquetharakan@gmail.com</p>
  <p>
    <span className='font-semibold'>💻 Github:</span>{' '}
    <a
      href='https://github.com/ashimuhammed'
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-600 hover:underline break-all'
    >
      https://github.com/ashimuhammed
    </a>
  </p>
  <p>
  <span className='font-semibold'>🔗 LinkedIn:</span>{' '}
  <a
    href='https://www.linkedin.com/in/muhammed-ashique-9a4b5a270'
    target='_blank'
    rel='noopener noreferrer'
    className='text-blue-600 hover:underline break-all'
  >
    https://www.linkedin.com/in/MuhammedAshique
  </a>
</p>

</div>

  </div>
</div>

{/* Skills Section - move this OUTSIDE the above flex container */}

<h1 className=' my-24 mb-2 text-4xl font-Ovo text-center text-gray-800'>Skills</h1>
<div className='w-20 h-1 bg-teal-500 mx-auto mt-0 mb-4'></div>




<div className='my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
  {[
    { skill: 'HTML', percent: 100, icon: assets.html },
    { skill: 'CSS', percent: 97, icon: assets.css },
    { skill: 'JavaScript', percent: 85, icon: assets.javascript },
    { skill: 'Odoo', percent: 90, icon: assets.odoo },
    { skill: 'Python', percent: 95, icon: assets.python },
    { skill: 'Django', percent: 90, icon: assets.django },
    { skill: 'XML', percent: 90, icon: assets.xml },
    { skill: 'PostgreSQL', percent: 85, icon: assets.postgresql },
    { skill: 'MySQL', percent: 89, icon: assets.mysql },
    { skill: 'React', percent: 75, icon: assets.react },

  ].map(({ skill, percent, icon }, index) => (
    <div
      key={index}
      className='p-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center'
    >
      <Image src={icon} alt={skill} width={48} height={48} className='mb-2' />
      <p className='font-medium text-gray-800 mb-1'>{skill}</p>
      <div className='w-full bg-gray-200 rounded-full h-2.5 mb-1'>
        <div
          className='bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out'
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className='text-sm text-gray-600'>{percent}%</span>
    </div>
  ))}
</div>

    </div>
  )
}

export default About;