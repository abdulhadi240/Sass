import Image from 'next/image'
import React from 'react'

const RightHero = () => {
  return (
    <div className='bg-[#FFBA09] h-[400px] border-2 rounded-lg border-black relative'>
        <Image src={'/cv-hero.png'} width={500} height={500} alt='hero' className='mt-6 z-999999'/>
    </div>
  )
}

export default RightHero