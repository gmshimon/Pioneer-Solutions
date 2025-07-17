import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Banner.css'

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { Link } from 'react-router'

const slides = [
  {
    img: banner1,
    alt: 'Pioneer Solutions - Your Pathway to Global Education',
    heading: {
      mobile: (
        <>
          <span className='text-[#1E8A6E]'>Pioneer Solutions</span>
        </>
      ),
      desktop: (
        <>
          <span className='text-[#1E8A6E] text-9xl'>Pioneer</span>
          <br />
          <span className='text-[#1E8A6E] text-7xl ml-10 text-center'>
            Solutions
          </span>
        </>
      )
    },
    subtitle: {
      mobile: <span className='italic'>Your Pathway To Global Education</span>,
      desktop: (
        <span className='italic text-3xl text-[#FFD84D]'>
          Your pathway to Global Education
        </span>
      )
    },
    description: {
      mobile: '',
      desktop: ''
    },
    link: '/consultation',
    btn: 'Get Started',
    btnColor: 'bg-[#1E8A6E] hover:bg-[#167A5C] text-white',
    align: 'center'
  },
  {
    img: banner2,
    alt: 'Study Abroad with Pioneer',
    heading: {
      mobile: (
        <>
          Study Abroad
          <br />
          with Pioneer
        </>
      ),
      desktop: (
        <>
          Explore <span className='text-[#FFD84D]'>International Study</span>{' '}
          Opportunities
        </>
      )
    },
    subtitle: {
      mobile: '',
      desktop: ''
    },
    description: {
      mobile:
        'Open doors to top universities around the world We guide you every step, from choosing a country to settling in',
      desktop: (
        <>
          <span className='text-[10px] md:text-xl'>
            Open doors to top universities around the world We guide you every
            step, from choosing a country to settling in
          </span>
        </>
      )
    },
    link: '/study/malaysia',
    btn: 'Discover',
    btnColor: 'bg-[#1E8A6E] hover:bg-[#167A5C] text-white',
    align: 'end'
  },
  {
    img: banner3,
    alt: 'Expert Guidance for Your Future',
    heading: {
      mobile: (
        <>
          <span className='text-[#FFD84D]'>APPLY NOW</span>
        </>
      ),
      desktop: (
        <>
          <span className='text-[#FFD84D]'>APPLY NOW</span>
        </>
      )
    },
    subtitle: {
      mobile: 'Expert guidance abroad.',
      desktop:(
        <span className='text-2xl'>
          Expert Guidance for Your Study Abroad Journey in Malaysia & Beyond
        </span>
      )
    },
    description: {
      mobile: 'Next intake applications open!',
      desktop:(
        <span className='text-2xl'>
          Take the first step towards your international career. Applications open for the next intake!
        </span>
      )
    },
    link: '/contact',
    btn: 'Contact Us',
    btnColor: 'bg-[#1E8A6E] hover:bg-[#167A5C] text-white',
    align: 'start'
  }
]

const Banner = () => (
  <section className='relative w-full h-[210px] xs:h-[250px] sm:h-[320px] md:h-[450px] lg:h-[850px] overflow-hidden'>
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      effect='fade'
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      navigation={true}
      loop={true}
      className='w-full h-full'
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className='relative w-full h-full min-h-[210px] xs:min-h-[250px] sm:min-h-[320px] md:min-h-[450px] lg:min-h-[850px]'>
            {/* Banner Image */}
            <img
              src={slide.img}
              alt={slide.alt}
              className='w-full h-full object-cover transition-transform duration-300'
            />
            {/* Overlay */}
            {/* <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10' /> */}
            {/* Text Content */}
            <div
              className={`
                absolute inset-0 flex flex-col justify-center
                ${idx === 1 ? 'items-end' : 'items-start'}
                px-3 xs:px-5 sm:px-8 md:px-16 z-20 h-full
              `}
            >
              {/* Responsive Heading */}
              <h1
                className={`
                  text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl
                  font-extrabold text-white mb-1 xs:mb-2 sm:mb-3 drop-shadow-lg
                  animate-fade-in-down leading-snug max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl
                  ${idx === 1 ? 'text-right w-full' : 'text-left w-full'}
                `}
              >
                <span className='block sm:hidden'>{slide.heading.mobile}</span>
                <span className='hidden sm:block'>{slide.heading.desktop}</span>
              </h1>
              {/* Responsive Subtitle */}
              <p
                className={`
                  text-xs xs:text-sm sm:text-base md:text-xl
                  text-white mb-1  xs:mb-2 sm:mb-3 drop-shadow-lg ${
                    idx == 1 && 'pl-12'
                  }
                  animate-fade-in-down leading-snug max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl
                  ${
                    idx === 1
                      ? 'text-right md:text-left w-full'
                      : 'text-left w-full'
                  }
                `}
              >
                <span className='block sm:hidden'>{slide.subtitle.mobile}</span>
                <span className='hidden sm:block'>
                  {slide.subtitle.desktop}
                </span>
              </p>
              {/* Responsive Description */}
              <p
                className={`
                  text-xs xs:text-sm sm:text-base md:text-xl ${
                    idx == 1 && 'pl-8'
                  }
                  text-white mb-3 xs:mb-4 sm:mb-7 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl
                  animate-fade-in-up animation-delay-400
                  ${
                    idx === 1
                      ? 'text-right md:text-left w-full'
                      : 'text-left w-full'
                  }
                `}
              >
                <span className='block sm:hidden'>
                  {slide.description.mobile}
                </span>
                <span className='hidden sm:block'>
                  {slide.description.desktop}
                </span>
              </p>
              {/* Centered Button */}
              <div
                className={`
                  flex ${
                    idx == 1 ? 'justify-end' : 'justify-start'
                  } md:justify-center max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl
                  text-left sm:text-right w-full`}
              >
                {slide.link ? (
                  <Link to={slide.link}>
                    <button
                      className={`
                        py-2 px-6 xs:py-2.5 xs:px-7 sm:py-3 sm:px-8 rounded-full font-bold shadow-lg
                        transition-all duration-300 animate-fade-in-up animation-delay-600
                        transform hover:scale-105 text-xs xs:text-sm sm:text-base ${slide.btnColor}
                      `}
                    >
                      {slide.btn}
                    </button>
                  </Link>
                ) : (
                  <button
                    className={`
                      py-2 px-6 xs:py-2.5 xs:px-7 sm:py-3 sm:px-8 rounded-full font-bold shadow-lg
                      transition-all duration-300 animate-fade-in-up animation-delay-600
                      transform hover:scale-105 text-xs xs:text-sm sm:text-base ${slide.btnColor}
                    `}
                  >
                    {slide.btn}
                  </button>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default Banner
