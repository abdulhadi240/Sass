import React from 'react'
import Card from './Card'


const Cards = () => {
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-3 px-10 gap-4 mt-6'>
        <Card tagline={'Higher Success Rate'} percentage={'60%'}/>
        <Card tagline={'ATS Adoption in Corporation'} percentage={'90%'}/>
        <Card tagline={'Selection Increase Rate'} percentage={'50%'}/>

    </div>
    </div>
  )
}

export default Cards