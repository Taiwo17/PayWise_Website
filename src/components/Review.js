import React from 'react'
import { Link } from 'react-router-dom'

function Review() {
  return (
    <>
      <div className=''>
        <h2 className='text-center font-bold font-montserrat mb-[71px] text-[20px] text-[rgba(19,19,19,0.90)] md:text-[32px] md:leading-[150%]'>
          What our customers have to say
        </h2>
        <div className='grid gap-6 lg:grid-cols-3'>
          <div>
            <ClientTestimony
              name='Albert Einstein'
              desc='I love this platform! It has made tracking my income and expenses so much easier. The real-time alerts and notifications help me stay on top of my finances and make informed decisions'
              position='CEO, New Generation'
              imgReview='../../img/rounded_image.png'
            />
          </div>
          <div className='row-span-3 '>
            <ClientTestimony
              name='Emily'
              desc={`I've been using this financial monitoring platform for over a year now and it has completely transformed the way I manage my money. The platform is incredibly user-friendly and offers a ton of helpful features that make it easy to track my income and expenses, create budgets, and monitor my financial health in real-time. `}
              desc1={`One of the things I love about this platform is the real-time alerts and notifications. I can set up alerts for everything from large transactions to due dates for bills`}
              position='Marketer'
              imgReview='../../img/emily.png'
            />
          </div>
          <div>
            <ClientTestimony
              name='Linda P'
              desc={`As a busy mom, I don't have a lot of time to keep track of my finances. This platform makes it easy for me to stay on top of things, without taking up too much of my time`}
              position='Stay at home mum'
              imgReview='../../img/image_2.png'
            />
          </div>

          <div>
            <ClientTestimony
              name='Albert Einstein'
              desc='I love this platform! It has made tracking my income and expenses so much easier. The real-time alerts and notifications help me stay on top of my finances and make informed decisions'
              position='CEO, New Generation'
              imgReview='../../img/rounded_image.png'
            />
          </div>

          <div>
            <ClientTestimony
              name='Linda P'
              desc={`As a busy mom, I don't have a lot of time to keep track of my finances. This platform makes it easy for me to stay on top of things, without taking up too much of my time`}
              position='Stay at home mum'
              imgReview='../../img/image_2.png'
            />
          </div>
        </div>
      </div>
      <div className='hidden lg:flex bg-white opacity-70 w-full h-[217px]  -mt-[150px] lg:mb-0'></div>
      <div className='flex justify-center items-center mb-[100px] mt-[100px] lg:mt-0'>
        <Link
          className='bg-blueish px-[52px] py-4 rounded-[12px] inline-block font-inter text-white text-base font-bold'
          href='/'
        >
          See more
        </Link>
      </div>
    </>
  )
}

function ClientTestimony(props) {
  return (
    <div
      className={`${
        props.name.includes('Emily') ? 'pb-[10px] lg:pb-[71px]' : 'pb-[10px]'
      }  rounded-[12px] flex flex-col gap-4 pt-8 pl-[42px] pb-[10px] pr-[20px] bg-white shadow-[0px_10px_30px_0px_rgba(19,19,19,0.10)]`}
    >
      <div className='flex gap-6 items-center'>
        <div>
          <img src={props.imgReview} alt={props.name} />
        </div>
        <div>
          <h4 className='font-inter text-[#131313] text-[20px]  font-medium lg:text-[24px] lg:font-bold'>
            {props.name || 'Albert'}
          </h4>
          <p className='font-inter text-base text-[rgba(19,19,19,0.65)] lg:font-medium lg:text-[18px]'>
            {props.position}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-inter text-sm font-normal leading-[150%]  text-[#595956] md:text-base lg:font-medium'>
          {props.desc}
        </p>
        {props.desc1 && (
          <p className='text-inter text-sm font-normal leading-[150%] text-[#595956] md:text-base lg:font-medium'>
            {props.desc1}
          </p>
        )}
      </div>
    </div>
  )
}

export default Review
