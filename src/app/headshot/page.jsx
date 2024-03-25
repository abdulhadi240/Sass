import React from 'react'
import HeadshotHero from '@/components/HeadshotHero'
import {TracingBeamDemo} from '@/components/Steps'


const page = () => {
  return (
    <div className='absolute top-28'>
      <HeadshotHero/>
      <TracingBeamDemo/>
    </div>
  )
}

export default page