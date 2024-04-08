'use client'
import React from 'react'
import useApiStore from '@/components/useApiStore';
import Image from 'next/image'

const Page = () => {
  const responseData = useApiStore(state => state.responseData);
  const clicked = useApiStore(state => state.clicked);

  return (
    <div className='items-center bg-black w-[50%] h-screen justify-center overflow-hidden'>
      {clicked ? (
        responseData ? (
          <pre className='text-sm text-white max-w-3xl items-start overflow-x-hidden'>{JSON.stringify(responseData, null, 2)}</pre>
        ) : (
          <Image src='/active.gif' unoptimized width={200} height={200} alt='active'/>
        )
      ) : (
        <Image src='/notactive.png' width={200} height={200} alt='not-active'/>
      )}  
    </div>
  )
}

export default Page;
