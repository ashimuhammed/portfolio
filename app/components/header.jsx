'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { Download, ArrowRight } from 'lucide-react'; // If you have lucide-react

const Header = () => {
  return (
    <div className='relative w-full max-w-4xl text-center mx-auto min-h-screen 
      flex flex-col items-center justify-center gap-6 pt-10 px-6 overflow-hidden'>
      
      {/* Background Decor (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/10 blur-[120px] rounded-full -z-10"></div>

      {/* Profile Image with Animated Border */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl scale-in-center">
          <Image 
            src={assets.profile_img} 
            alt="Muhammed Ashique" 
            fill
            className="object-cover transform hover:scale-110 transition duration-500"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="space-y-2">
        <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl font-Ovo text-gray-700 dark:text-gray-300'>
          Hi! I'm Muhammed Ashique 
          <Image src={assets.hand_icon} alt='Wave' className='w-6 animate-bounce' />
        </h3>

        <h1 className='text-4xl sm:text-7xl font-bold font-Ovo tracking-tight text-gray-900 dark:text-white leading-tight'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
            Python Full-Stack
          </span> 
          <br /> & Odoo Developer
        </h1>
      </div>

      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl font-Ovo leading-relaxed">
        Specializing in building robust ERP solutions and modern web applications from Malappuram, Kerala.
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-5 mt-8'>
        
        {/* Contact Me - Primary Button */}
        <a 
          href="#contact" 
          className='px-10 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold flex items-center gap-2 hover:bg-teal-600 dark:hover:bg-teal-500 dark:hover:text-white transition-all shadow-xl hover:-translate-y-1'
        >
          Contact Me <ArrowRight size={18} />
        </a>

        {/* Resume - Secondary Button */}
        <a
          href="https://drive.google.com/drive/folders/1LsybsxEQj28Ee-J_11q2Qbz2yKKpSyhY?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className='px-10 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-full font-bold flex items-center gap-2 hover:border-teal-500 hover:text-teal-500 transition-all bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm'
        >
          Download Resume
          <Download size={18} />
        </a>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
         <div className="w-1 h-12 rounded-full bg-gradient-to-b from-teal-500 to-transparent"></div>
      </div>
      
    </div>
  );
};

export default Header;