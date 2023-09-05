import React from 'react'
import { CheckIcon, LoanCard, CreditCard } from './Icon'
import { Link } from 'react-router-dom'

function ServicesSection() {
  return (
    <>
      <div className='flex flex-col gap-3 items-center justify-center mb-8'>
        <h2 className='font-montserrat text-[32px] text-blackish font-semibold lg:font-bold'>
          Services & Offers
        </h2>
        <p className='text-center font-inter text-[#939090] leading-[150%] md:max-w-[65%] lg:max-w-[30%]'>
          We provide our innovative way for digital payments across the globe
        </p>
      </div>
      <div className='flex flex-col-reverse gap-8 lg:gap-[54px] lg:flex-row'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 md:flex-row lg:flex-col lg:gap-[56px]'>
            <CardIcon
              className='bg-[#0072C6]'
              icon={<CheckIcon />}
              title='Checking accounts'
              desc=' Now customers can pay you directly in messengers and social customers.'
            />
            <CardIcon
              className={`bg-[#ffffff] rounded-[12px] border shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]`}
              icon={<CreditCard />}
              title='Credit Cards'
              desc='Now customers can pay you directly in messengers and social customers.'
            />
            <CardIcon
              className={`bg-[#ffffff] border shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]`}
              icon={<LoanCard />}
              title='Loan and Credits'
              desc=' Now customers can pay you directly in messengers and social customers.'
            />
          </div>
          <div className='flex gap-[21px]'>
            <Link href='/'>
              <div>
                <img src='../../img/android_store.png' alt='Android' />
              </div>
            </Link>
            <Link href=''>
              <div>
                <img src='../../img/apple_store.png' alt='Apple' />
              </div>
            </Link>
          </div>
        </div>
        <div className='shrink-0'>
          <img src='../../img/card.png' alt='ATM Card' title='credit card' />
        </div>
      </div>
    </>
  )
}

function CardIcon(props) {
  return (
    <>
      <div
        className={`flex p-4 gap-4  rounded-[12px] ${props.className} md:flex-col lg:pl-[33px] lg:pb-6 lg:flex-row`}
      >
        <div>{props.icon}</div>
        <div className='flex flex-col gap-2'>
          <h3
            className={`${
              props.title === 'Credit Cards' ||
              props.title === 'Loan and Credits'
                ? 'text-[#131313]'
                : 'text-white'
            } font-inter text-[20px]  font-semibold lg:text-[22px] lg:leading-[150%] lg:font-bold `}
          >
            {props.title}
          </h3>
          <p
            className={`${
              props.title === 'Credit Cards' ||
              props.title === 'Loan and Credits'
                ? 'text-[#131313]'
                : 'text-white'
            } font-inter text-base  opacity-80 lg:font-medium lg:pr-[43px]  lg:leading-[150%]`}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </>
  )
}

export default ServicesSection
