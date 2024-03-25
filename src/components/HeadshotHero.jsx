import Image from 'next/image'
import React from 'react'

const HeadshotHero = () => {
  return (
    <><div />
    <div className='flex mx-10'>
      <div >
        <div className="category flex relative gap-2">
          <div className="1 rounded-[6px] bg-[#FFF6ED] px-4 py-2 text-sm font-semibold uppercase text-[#C63608]">STUDENT</div>
          <div className="1 rounded-[6px] bg-[#FFF6ED] px-4 py-2 text-sm font-semibold uppercase text-[#C63608]">PROFESSIONAL</div>
        </div>
        <div className="title text-[#383838] z-10 pt-[25px] text-[44px] max-w-[700px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px]">Land more jobs with our professional AI headshots</div>
        <div className="tagline font z-10 flex max-w-[450px] items-center justify-center pt-[30px] text-[14px] leading-[1.4] tracking-[-0.4px] opacity-[86] sm:text-[16px]">Get affordable professional headshots in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.</div>
        <div className="button flex pb-8 pt-6 lg:pt-[45px]"></div>
        
      </div>
      <div className="image flex h-full w-full flex-1 grow flex-row items-center justify-center ">
          <Image src={'/hero.webp'} width={2000} height={2000} alt='hero'/>
        </div>
    </div></>
  )
}

export default HeadshotHero