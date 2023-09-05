import React from 'react'

function TimelineSection() {
  return (
    <>
      <div className='mb-[42.21px]'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h2 className='font-inter text-[32px] text-blackish font-semibold'>
            Why us
          </h2>
          <p className='text-center font-inter md:font-medium text-[#939090] leading-[150%] md:max-w-[65%] lg:font-semibold lg:max-w-[40%]'>
            Now isn’t the time for you to be confused when making purchases
            online or making purchases abroad
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse gap-8 lg:gap-[111px] lg:flex-row'>
        <div className='mb-8 md:mb-0'>
          <Timeline
            nums='01'
            heading='You aren’t charged with extra fees'
            desc='You will not be charged with extra fee when you make for the
          transactions you make transaction'
          />
          <Timeline
            nums='02'
            heading='Transaction without stress, easily and safely'
            desc='We simplify transaction processes and prioritize security, making it easy and safe to conduct transactions from the comfort of your home or office.'
          />
          <Timeline
            nums='03'
            heading='Suitable for ordinary people to companies'
            desc='This solution is versatile and can be used by both individuals and businesses of all sizes.'
          />
        </div>
        <div className='bg-[#F1EFEF] flex items-center justify-center rounded-lg pt-[23px] px-[30px] md:pt-[30px] md:px-[35px] lg:pt-[46px] lg:pl-[118.48px] pb-0 lg:pr-[118.48px]'>
          <img src='../../img/iphone.png' alt='' />
        </div>
      </div>
    </>
  )
}

function Timeline(props) {
  return (
    <div className='flex gap-2 lg:gap-4 lg:w-[537px] mb-6 md:mb-0'>
      <div>
        <p
          className={`flex flex-col items-center font-inter text-blueish text-[20px] font-semibold md:font-bold md:text-[28px] after:content-[''] after:mt-[12px] after:mb-[12px] after:rounded-lg after:bg-blueish after:w-[5px]  ${
            props.nums === '03'
              ? 'after:h-[100px] md:after:h-0'
              : 'after:h-[100px]'
          } `}
        >
          {props.nums}
        </p>
      </div>
      <div className='flex flex-col gap-3 lg:gap-[16.5px]'>
        <h3 className='font-inter text-black text-[18px] font-medium md:leading-[150%] md:font-bold md:text-[22px]'>
          {props.heading}
        </h3>
        <p className='text-greyish font-inter text-base md:text-[18px] lg:font-normal lg:leading-[150%]'>
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default TimelineSection
