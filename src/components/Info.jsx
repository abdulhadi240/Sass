import React from 'react'

const Info = () => {
  return (
    <div className='flex mt-16 bg-white group-hover:bg-black'>
        <div className='flex flex-col gap-1 bg-white group'>
            <div className='flex bg-white group gap-64'>
    <h1 className='text-[24px] text-[#000000E6] bg-white group'>
    Jasmin (Jay) Alić
    </h1>
    <h2 className='bg-white group mt-2 text-sm text-[#00000099]'>
        50,000 comments
    </h2>
    </div>
    <h2 className='text-[16px] text-[#000000E6] bg-white group'>
    Serious about growing on LinkedIn? Welcome! 👋
    </h2>
    <h3 className='text-[14px] text-[#00000099] bg-white group'>
    Bosnia and Herzegovina
    </h3>
    <h4 className='flex gap-4 text-[14px] text-[#00000099] bg-white  group'>
    193,263 followers <span className='bg-white'> 500+ connections</span>
    </h4>
    </div>
    </div>
  )
}

export default Info