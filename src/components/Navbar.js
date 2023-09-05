import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { Links } from '../lib/Links'
import { motion } from 'framer-motion'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const linkVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
  return (
    <div className='z-50 fixed w-full top-0 left-0'>
      <div className='relative py-[36.5px] h-[122px] bg-[#FAFAFA] px-8 md:px-12 lg:px-[84px]'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <img src='/img/logo.png' alt='logo' />
            </Link>
          </div>
          <div
            className={`absolute top-[122px] bg-[#FAFAFA] pl-8 left-0 w-full md:pl-12 lg:relative lg:top-0 lg:flex lg:w-auto lg:bg-[#FAFAFA] ${
              openMenu ? 'flex' : 'hidden'
            }`}
          >
            <ul className='md:flex md:flex-col md:gap-8 md:mb-[40px] lg:flex lg:flex-row lg:mb-0 lg:gap-[58px]'>
              {Links.map((nav, index) => {
                return (
                  <motion.li
                    variants={linkVariant}
                    initial='hidden'
                    animate='visible'
                    className='mb-4  font-inter text-base font-normal leading-[22px] text-blackish md:mb-0 md:font-medium md:text-[18px]'
                    key={index}
                  >
                    <NavLink className='md:flex' to={nav.link}>
                      {nav.name}
                    </NavLink>
                  </motion.li>
                )
              })}
            </ul>
          </div>
          <div className='hidden lg:flex md:px-[52px] md:py-4 md:bg-blueish md:rounded-[12px] md:h-[56px] text-base text-white font-bold leading-[24px]'>
            <Link href='/'>Get Started</Link>
          </div>
          <div className='lg:hidden'>
            <button className='' onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? (
                <AiOutlineClose className='text-[24px]' />
              ) : (
                <AiOutlineMenu className='text-[24px]' />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
