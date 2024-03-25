import React from 'react'
import Link from 'next/link';
export const Foot = () => {
  return (
    <div className='flex justify-center text-[12px] sm:gap-[40px] gap-8 '>
        <Link href={'https://linkedin-api-d02y.onrender.com/redoc'} target='_blank' className='hover:underline'>Docs</Link>
        <Link href={'https://www.linkedin.com/in/abdul-hadi-28a46221b/'} target='_blank' className='hover:underline w-64'>API Keys</Link>
        <Link href={'https://api.whatsapp.com/send/?phone=%2B923120202881&text&type=phone_number&app_absent=0'} target='_blank' className='hover:underline'>Linkedin</Link>

    </div>
  )
}
