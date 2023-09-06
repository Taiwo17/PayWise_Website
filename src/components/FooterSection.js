import React from 'react'
import { Link } from 'react-router-dom'

function FooterSection() {
  const date = new Date()
  return (
    <>
      <div className='grid grid-cols-2 gap-[30px] pt-[40px] pb-[50px] lg:flex lg:gap-0 lg:justify-between '>
        <div>
          <FooterLink
            name='Links'
            link1='About'
            link2='Services'
            link3='Reviews'
            link4='Testimonial'
          />
        </div>
        <div>
          <FooterLink
            name='Pages'
            link1='Company'
            link2='Use case'
            link3='Customers'
            link4='Download app'
          />
        </div>
        <div>
          <FooterLink
            name='Other'
            link1='Help center'
            link2='Services'
            link3='Shop'
            // link4='Shop'
          />
        </div>
        <div className='flex flex-col gap-[26px]'>
          <div className='flex flex-col gap-[7px]'>
            {/* <img src='../../img/logo_paywise_footer.png' alt='' /> */}
            <h2 className='text-white font-montserrat text-[30px] font-bold leading-[120%] md:text-[40px]'>
              Paywise
            </h2>
            <p className='text-white font-inter text-sm lg:text-base lg:w-[302px] lg:font-medium leading-[120%]'>
              Connect your visitors into customers with our bank app
            </p>
          </div>
          <div className='flex gap-3'>
            <Link>
              <img
                src='../../img/footer_social_icon/skill-icons_instagram.svg'
                alt=''
              />
            </Link>
            <Link>
              <img
                src='../../img/footer_social_icon/skill-icons_twitter.svg'
                alt=''
              />
            </Link>
            <Link>
              <img
                src='../../img/footer_social_icon/skill-icons_linkedin.svg'
                alt=''
              />
            </Link>
            <Link>
              <img
                src='../../img/footer_social_icon/logos_facebook.svg'
                alt=''
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='pb-[22px]'>
        <img src='../../img/line_horizontal.svg' alt='' />
      </div>
      <p className='font-inter text-center text-white pb-[20px] text-sm font-medium'>
        © {date.getFullYear()} Paywise
      </p>
    </>
  )
}

function FooterLink(props) {
  return (
    <div className='flex flex-col gap-[27px]'>
      <div>
        <h3 className='text-white font-montserrat text-[20px] font-bold leading-[120%]'>
          {props.name}
        </h3>
      </div>
      <div className='flex flex-col gap-8'>
        {props.link1 && (
          <p className='font-inter text-white text-[18px] font-medium'>
            <Link href='/'>{props.link1}</Link>
          </p>
        )}
        {props.link2 && (
          <p className='font-inter text-white text-[18px] font-medium'>
            <Link href='/'>{props.link2}</Link>
          </p>
        )}
        {props.link3 && (
          <p className='font-inter text-white text-[18px] font-medium'>
            <Link href='/'>{props.link3}</Link>
          </p>
        )}
        {props.link4 ? (
          <p className='font-inter text-white text-[18px] font-medium'>
            <Link href='/'>{props.link4}</Link>
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default FooterSection
