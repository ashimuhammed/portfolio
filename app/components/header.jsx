import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen 
    flex flex-col items-center justify-center gap-4 pt-20 '>

            <div className="w-32 h-32 overflow-hidden rounded-full">
            <Image src={assets.profile_img} alt="" width={128} height={128} />
            </div>


        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >Hi I'M muhammed Ashique <Image src={assets.hand_icon} alt=''
            className=' w-6 cursor-pointer hover:-translate-y-1 duration-500'/></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[35px] font-Ovo mb-5 '
            > PYTHON FULL-STACK DEVELOPER & ODOO DEVELOPER</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I'm a Odoo developer intern in Business Technology Research & Analytics Centre(BTRAC)
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white  
                flex items-center gap-2'>
                    contact me <Image src={assets.right_arrow_white} alt=''
                className=' w-4'/></a>

                <a href="/muhammed ashique odoo resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 
                flex items-center gap-2'>
                resume <Image src={assets.download_icon} alt=''
                className=' w-4'/></a>
            </div>
    </div>
  )
}

export default header
