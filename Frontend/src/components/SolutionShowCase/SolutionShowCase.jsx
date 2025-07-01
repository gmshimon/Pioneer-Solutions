import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation
} from 'swiper/modules'
import {
  UserCheck,
  ClipboardList,
  Gift,
  Compass,
  TrendingUp
} from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Custom styles
import './SolutionShowCase.css'

const features = [
  {
    icon: <UserCheck className='solution-icon' />, // Personalized Guidance
    title: 'Personalized Guidance',
    description:
      'Our expert team works one-on-one with you to craft a roadmap tailored to your academic and career goals.',
    stats: [
      { value: '1:1', label: 'Sessions' },
      { value: 'Bespoke', label: 'Plans' }
    ],
    tag: 'Just Launched'
  },
  {
    icon: <ClipboardList className='solution-icon' />, // Complete Application Support
    title: 'Complete Application Support',
    description:
      'From document prep to submission and follow-up, we handle every step of your college or university application process.',
    stats: [
      { value: 'End-to-End', label: 'Service' },
      { value: 'Streamlined', label: 'Process' }
    ],
    tag: 'Full-Service'
  },
  {
    icon: <Gift className='solution-icon' />, // Free of Charge
    title: 'Free of Charge',
    description:
      'All our services are 100% free, ensuring that expert guidance is accessible to everyone.',
    stats: [
      { value: '100%', label: 'Free' },
      { value: 'No Hidden', label: 'Fees' }
    ],
    tag: 'No Cost'
  },
  {
    icon: <Compass className='solution-icon' />, // Firsthand International Experience
    title: 'Firsthand International Experience',
    description:
      'Learn from counselors who have navigated studying abroad themselves, ready to share insider tips.',
    stats: [
      { value: 'Insider', label: 'Tips' },
      { value: 'Real', label: 'Stories' }
    ],
    tag: 'Insider Tips'
  },
  {
    icon: <TrendingUp className='solution-icon' />, // Committed to Growth and Long-Term Support
    title: 'Committed to Growth and Long-Term Support',
    description:
      'Dedicated to grow alongside our students — offering continued guidance and value beyond placement.',
    stats: [
      { value: 'Reliable', label: 'Support' },
      { value: 'Networking', label: 'Events' }
    ],
    tag: 'Future-Ready'
  }
]

const SolutionShowCase = () => {
  return (
    <div className='solution-showcase'>
      <h1 className='text-center text-4xl font-bold text-[#1E8A6E] mb-12'>
        Why Choose Pioneer Solutions?
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1.2,
          slideShadows: true
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className='mySwiper'
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='solution-card hover:scale-105 transition-transform duration-300 shadow-lg'>
              {item.icon}
              <h3 className='solution-title'>{item.title}</h3>
              <p className='solution-description'>{item.description}</p>
              <div className='solution-stats'>
                {item.stats.map((stat, idx) => (
                  <div className='stat-item' key={idx} title={stat.label}>
                    <span className='stat-value'>{stat.value}</span>
                    <span className='stat-label'>{stat.label}</span>
                  </div>
                ))}
              </div>
              <span className='solution-tag pulse-animation'>{item.tag}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SolutionShowCase
