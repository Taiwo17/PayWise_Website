import React from 'react'
import { Link } from 'react-router-dom'

function PaywiseParrallex() {
  return (
    <div className='px-8 z-20 relative pt-[20px] pb-[40px] md:px-12 md:pt-0 md:pb-0 lg:pl-[84px] lg:pt-0 lg:pr-[10px] lg:pb-0'>
      <div className='flex flex-col-reverse gap-8 w-full md:flex-row md:items-center lg:gap-[50px] '>
        <div className='lg:w-[60%]'>
          <div className='flex flex-col gap-[14px] mb-[37px] md:pt-[20px] md:mb-0 lg:mb-[37px]'>
            <h3 className='text-white w-full font-montserrat font-bold text-[24px] lg:text-[48px] lg:font-bold lg:leading-[150%]'>
              Get Ready to Join Paywise?
            </h3>
            <p className='text-white font-inter opacity-90 text-base lg:leading-[150%] lg:w-[700px] lg:font-bold'>
              By joining Paywise, customers can expect a seamless and secure
              banking experience, personalized service, and access to innovative
              digital tools and resources to manage their finances.
            </p>
          </div>
          <div className='flex gap-3'>
            <Link className='inline-block' href='/'>
              <img src='../../img/android_footer.png' alt='' />
            </Link>
            <Link className='inline-block' href='/'>
              <img src='../../img/apple_footer.png' alt='' />
            </Link>
          </div>
        </div>
        <div className='md:w-full lg:w-[40%]'>
          <img
            className='md:w-full object-contain'
            src='../../img/front_view.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default PaywiseParrallex
