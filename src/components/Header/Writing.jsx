import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Writing = () => {
  return (
    <Link href={'/'}><div className='text-xl font-bold mt-6 z-50 text-black'>
        <Typewriter
  options={{
    strings: ['Abdul Hadi'],
    autoStart: true,
    loop: true,
  }}
/>
    </div></Link>
  )
}

export default Writing