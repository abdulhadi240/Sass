import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'
import Cards from './Cards'

const ResumeHero = () => {
  return (
    <><div className='flex gap-4'>
          <LeftHero />
          <RightHero />
      </div><div>
              <Cards />
          </div></>
  )
}

export default ResumeHero