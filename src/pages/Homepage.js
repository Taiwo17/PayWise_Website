import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TimelineSection from '../components/TimelineSection'
import ServicesSection from '../components/ServicesSection'
import Review from '../components/Review'
import PaywiseParrallex from '../components/PaywiseParrallex'
import FooterSection from '../components/FooterSection'
// import ParrallexImage from ''

function Homepage() {
  return (
    <>
      <Navbar />
      <div className='mb-[3.4375rem]'>
        <HeroSection />
      </div>
      <div className='px-8 md:px-12 lg:px-[84px] mb-[81.5px]'>
        <TimelineSection />
      </div>
      <div className='px-8 md:px-12 lg:pl-[84px] lg:pr-[43px]  mb-[81.5px]'>
        <ServicesSection />
      </div>
      <div className='px-8 md:px-12 lg:pl-[84px] lg:pr-[43px]  mb-[81.5px]'>
        <Review />
      </div>
      <div
        style={{
          backgroundImage: `url('../../img/parrallex.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className='z-0 relative lg:pt-0'
      >
        <div className='absolute inset-0 bg-[#131313] opacity-[.65] z-10'></div>
        <PaywiseParrallex />
      </div>
      <footer>
        <FooterSection />
      </footer>
    </>
  )
}

export default Homepage
