'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  const downloadFile = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen 
    flex flex-col items-center justify-center gap-4 pt-20'>

      {/* Profile Image */}
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <Image src={assets.profile_img} alt="Profile" width={128} height={128} />
      </div>

      {/* Introduction */}
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi I'M Muhammed Ashique
        <Image src={assets.hand_icon} alt='Wave' className='w-6 cursor-pointer hover:-translate-y-1 duration-500' />
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[35px] font-Ovo mb-5'>
        PYTHON FULL-STACK & ODOO DEVELOPER
      </h1>

      {/* Buttons Block */}
      <div className='flex flex-col items-center gap-4 mt-4'>

        {/* Resume Buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-4'>

  {/* Odoo Resume Button */}
  <a
    href="https://drive.google.com/uc?export=download&id=1jUH9FxlhaZ765AKdwjaIumUWvkETleix"
    download
    target="_blank"
    rel="noopener noreferrer"
    className='px-6 py-3 border rounded-full border-gray-500 flex items-center gap-2'
  >
    Odoo Resume
    <Image src={assets.download_icon} alt='Download Odoo' className='w-4' />
  </a>

  {/* Full Stack Resume Button */}
  <a
    href="https://drive.google.com/uc?export=download&id=1GqGonWSBn_5F1NSMjY2YrhW08VWoH0WJ"
    download
    target="_blank"
    rel="noopener noreferrer"
    className='px-6 py-3 border rounded-full border-gray-500 flex items-center gap-2'
  >
    Full Stack Resume
    <Image src={assets.download_icon} alt='Download Full Stack' className='w-4' />
  </a>

</div>

        {/* Contact Me Button Below */}
        <a
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white  
                    flex items-center gap-2'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default Header;
