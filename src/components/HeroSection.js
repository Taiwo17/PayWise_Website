import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='pt-[170.92px]  px-8 md:px-12 lg:pl-[84px] lg:pr-[35.45px]'>
      <div className='flex gap-0 justify-between'>
        <div className='flex flex-col items-start gap-6 lg:mt-[86px]'>
          <div className='flex'>
            <h1 className='font-montserrat text-[50px] font-bold text-blackish leading-[120%] md:text-[80px] after:ml-2 after:content-star-heading'>
              Meet the next Gen banking
            </h1>
          </div>
          <p className='text-base font-inter font-normal leading-normal text-blackOpacity md:max-w-[75%] lg:text-[18px]'>
            Now isn’t the time for you to be confused when making purchases
            online or making purchases abroad
          </p>
          <div className='px-[28px] text-center py-4 bg-blueish rounded-[12px] h-[56px] text-base text-white font-bold leading-[24px] md:px-[52px]'>
            <Link className='text-center inline-block' href='/'>
              Download app
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex bg-[#FCF7EF] relative rounded-lg h-[500px] bg-cover bg-no-repeat'>
          <div className='self-end  mb-[69px]'>
            <img
              className='h-[100px] -ml-[50%] w-[100px]'
              src='/img/star_bottom.svg'
              alt=''
            />
          </div>
          <div className=''>
            <img className='' src='/img/hero_image.png' alt='' />
          </div>
          <div>
            <img
              className='h-[123px] w-[142px] -mt-[50%]'
              src='/img/star_top.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
