import Image from 'next/image'
import React from 'react'

const Skills = ({Name}) => {
  return (
    <div className='bg-white'>
        <h1 className='w-auto p-2 text-base font-medium bg-white text-center hover:text-white hover:bg-black hover:transition-all border-[1px] rounded-full hover:border-white'>{Name}</h1>
    </div>
  )
}

export default Skills