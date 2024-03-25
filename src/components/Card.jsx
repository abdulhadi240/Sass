import React from 'react'

const Card = ({tagline , percentage}) => {
  return (
    <div className='flex rounded-lg bg-[#F0F0EC] w-64 h-32 p-4 border-[1px] border-black flex-col  gap-6'>
        <p className='text-xs'>{tagline}</p>
        <h1 className='text-5xl font-semibold'>{percentage}</h1>
    </div>
  )
}

export default Card