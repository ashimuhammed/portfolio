import { assets, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-16 scroll-mt-20 bg-white dark:bg-gray-900 transition-colors duration-300'>
      
      {/* --- SECTION HEADER --- */}
      <div className='text-center mb-16'>
        <h4 className='text-teal-600 font-semibold text-lg mb-2 uppercase tracking-widest'>Introduction</h4>
        <h2 className='text-5xl font-bold text-gray-800 dark:text-white font-Ovo'>About Me</h2>
        <div className='w-20 h-1.5 bg-teal-500 mx-auto mt-4 rounded-full'></div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
        
        {/* --- PROFILE IMAGE WITH DECORATION --- */}
        <div className='w-full lg:w-1/3 flex justify-center relative'>
          <div className='absolute -inset-4 border-2 border-dashed border-teal-500/30 rounded-3xl -rotate-3 group-hover:rotate-0 transition duration-500'></div>
          <Image
            src={assets.profile_img}
            alt='Muhammed Ashique'
            className='rounded-3xl w-72 sm:w-80 shadow-2xl z-10 hover:scale-[1.02] transition duration-500 grayscale hover:grayscale-0'
          />
        </div>

        {/* --- BIO & PERSONAL DETAILS --- */}
        <div className='w-full lg:w-2/3'>
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6'>
            Python Full-Stack & <span className='text-teal-500'>Odoo Developer</span>
          </h3>
          
          <p className='text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-Ovo text-lg'>
            I specialize in building scalable web applications and customizing Odoo modules 
            to streamline business operations. With a background in English Literature and a 
            transition into Software Engineering, I bring a unique blend of analytical 
            thinking and technical expertise to every project.
          </p>

          {/* Info Bento Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              { label: 'Name', value: 'Muhammed Ashique', icon: '👤' },
              { label: 'Location', value: 'Malappuram, Kerala', icon: '📍' },
              { label: 'Degree', value: 'BA English Literature', icon: '🎓' },
              { label: 'Birthday', value: '1 August 1999', icon: '🎂' },
              { label: 'Email', value: 'ashiquetharakan@gmail.com', icon: '📧', isLink: true },
              { label: 'GitHub', value: 'ashimuhammed', icon: '💻', isLink: true, url: 'https://github.com/ashimuhammed' }
            ].map((item, index) => (
              <div key={index} className='p-4 border border-gray-100 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all'>
                <p className='text-xs text-teal-600 font-bold uppercase tracking-wider mb-1'>{item.icon} {item.label}</p>
                {item.isLink ? (
                  <a href={item.url || `mailto:${item.value}`} className='text-gray-800 dark:text-gray-200 font-medium hover:text-teal-500 truncate block'>
                    {item.value}
                  </a>
                ) : (
                  <p className='text-gray-800 dark:text-gray-200 font-medium'>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SKILLS SECTION --- */}
      <div className='mt-32'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-800 dark:text-white font-Ovo'>Technical Proficiency</h2>
          <p className='text-gray-500 mt-2'>Languages and Frameworks I've mastered</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {[
            { skill: 'Python', percent: 98, icon: assets.python },
            { skill: 'Odoo', percent: 96, icon: assets.odoo },
            { skill: 'Django', percent: 97, icon: assets.django },
            { skill: 'React', percent: 89, icon: assets.react },
            { skill: 'JavaScript', percent: 95, icon: assets.javascript },
            { skill: 'PostgreSQL', percent: 90, icon: assets.postgresql },
            { skill: 'HTML', percent: 100, icon: assets.html },
            { skill: 'CSS', percent: 100, icon: assets.css },
            { skill: 'XML', percent: 95, icon: assets.xml },
            { skill: 'MySQL', percent: 90, icon: assets.mysql },
          ].map(({ skill, percent, icon }, index) => (
            <div key={index} className='group p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
              <div className='bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 mb-4 flex justify-center group-hover:bg-teal-50 transition-colors'>
                <Image src={icon} alt={skill} width={40} height={40} className='grayscale group-hover:grayscale-0 transition-all' />
              </div>
              <p className='font-bold text-gray-800 dark:text-gray-100 text-center mb-3'>{skill}</p>
              <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-2 overflow-hidden'>
                <div 
                  className='bg-teal-500 h-full rounded-full transition-all duration-1000' 
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <p className='text-right text-[10px] font-bold text-teal-600'>{percent}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- TOOLS SECTION --- */}
      <div className='mt-24 text-center'>
        <h4 className='text-gray-500 font-Ovo mb-8'>Tools I Use Daily</h4>
        <div className='flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto py-4'>
          {toolsData.map((tool, index) => (
            <div key={index} className='min-w-[60px] sm:min-w-[80px] aspect-square flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-teal-500 hover:shadow-lg transition-all'>
              <Image src={tool} alt='Tool' width={35} height={35} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About;