import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {
  Globe2,
  BookOpen,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  Home,
  Percent,
  Minus,
  Plus,
  CornerDownRight
} from 'lucide-react'
import MalaysiaMap from '../../assets/malaysia-map.jpg' // swap in your actual path
import { Link } from 'react-router'
import { FaPhoneAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

// FlipCard Component
const FlipCard = ({ icon, title, detail }) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <div
      className='w-full h-64 cursor-pointer rounded-3xl shadow-lg hover:shadow-2xl '
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className='relative w-full h-full'
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className='absolute inset-0 bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center'
          style={{ backfaceVisibility: 'hidden' }}
        >
          {icon}
          <h4 className='text-xl font-semibold mt-4 text-gray-800 text-center'>
            {title}
          </h4>
          <div className='fixed bottom-2 right-2'>
            <CornerDownRight strokeWidth={3} />
          </div>
        </div>
        {/* Back Side */}
        <div
          className='absolute inset-0 bg-[#1E8A6E] text-white p-6 rounded-3xl shadow-lg flex items-center justify-center'
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <p className='text-center leading-relaxed'>{detail}</p>
        </div>
      </motion.div>
    </div>
  )
}

// Highlights Data remains the same...
const highlights = [
  {
    icon: <Globe2 className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Global Education Hub',
    detail:
      'Malaysia hosts 170,000 international students from 162 countries and aims for 250,000 by 2025; ranked 11th most preferred globally.'
  },
  {
    icon: <GraduationCap className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Recognized Universities',
    detail:
      'Over 20 Malaysian institutions in QS & THE rankings, offering globally accredited degrees and branch campuses.'
  },
  {
    icon: <DollarSign className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Affordable Living',
    detail:
      'Tuition and living costs up to 70% lower than Western countries; Kuala Lumpur ranked 23rd in QS Best Student Cities 2025.'
  },
  {
    icon: <Home className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Safe & Supportive',
    detail:
      'Modern infrastructure, quality healthcare, #3 in Asia for English proficiency, and warm Malaysian hospitality.'
  },
  {
    icon: <BookOpen className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Cultural Diversity',
    detail:
      'Experience festivals, cuisines, and customs from diverse ethnic groups, fostering a truly global mindset.'
  },
  {
    icon: <MapPin className='w-12 h-12 text-[#1E8A6E]' />,
    title: 'Visa & Government Support',
    detail:
      'Streamlined student visa process with government initiatives ensuring seamless academic migration.'
  }
]

// Roadmap timeline data
const roadmap = [
  {
    step: 'Choose Program',
    icon: <BookOpen />,
    label: 'Select your major',
    description:
      'Explore diverse academic programs across Malaysian universities. Our counselors help you identify the perfect course that aligns with your career goals and interests.'
  },
  {
    step: 'Apply to University',
    icon: <GraduationCap />,
    label: 'Secure your place',
    description:
      'Submit compelling applications with our expert guidance. We assist with document preparation, statement of purpose writing, and meeting all admission requirements.'
  },
  {
    step: 'Obtain Student Visa',
    icon: <Clock />,
    label: 'Get approval',
    description:
      'Navigate the visa process seamlessly with our step-by-step support. We ensure all documentation is complete and guide you through embassy procedures.'
  },
  {
    step: 'Pre-Departure Preparation',
    icon: <MapPin />,
    label: 'Pack & Prep',
    description:
      'Get ready for your Malaysian adventure with comprehensive orientation sessions covering accommodation, banking, cultural insights, and essential travel preparations.'
  },
  {
    step: 'Arrive & Settle In',
    icon: <Globe2 />,
    label: 'Begin your studies',
    description:
      'Land in Malaysia with confidence. Our local team provides airport pickup, helps with initial settlement, and ensures a smooth transition to your new academic life.'
  }
]

const SingleStudyAbroad = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Study Abroad</title>
      </Helmet>
      {/* Header */}
      <div className='text-center mb-16 h-full'>
        <img
          src={MalaysiaMap}
          alt='Map of Malaysia'
          className='mx-auto md:h-[900px] w-full  object-center shadow-2xl '
        />
      </div>
      <div className='max-w-7xl mx-auto text-justify text-lg text-gray-700 mb-4'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          About Malaysia
        </h1>
        <p>
          Malaysia is a Southeast Asian country known for its cultural diversity, modern cities, and natural beauty. Located just a short flight away from Bangladesh, it offers an ideal destination for students seeking quality education close to home. Over the years, Malaysia has become a prominent hub for international education, attracting students from across the globe. The country is home to globally recognized universities, including several branch campuses of renowned institutions. With affordable tuition fees, English-medium instruction, and a safe, welcoming environment, Malaysia offers a balanced and enriching study experience. Its multicultural society and excellent student support services make it easier for Bangladeshi students to adapt and thrive.
        </p>
      </div>
      {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6 bg-white/80 rounded-xl shadow-md mt-8 mb-6'>
        <blockquote className='border-l-4 border-[#1E8A6E] bg-[#E9F9F5] pl-8 py-3 mb-6 rounded-md italic text-gray-700 text-xl relative'>
          <svg
            className='absolute -left-2 top-3 w-8 h-8 text-[#1E8A6E] opacity-30'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M7.17 15.59C7.17 18.01 9.16 19 11.46 19c1.64 0 2.79-1.1 2.79-2.7 0-1.4-1.13-2.23-2.58-2.23-.46 0-.95.08-1.46.22v-1.15c2.09-.37 4.27-1.76 4.27-4.37 0-2.31-1.93-3.67-4.21-3.67C6.66 5.1 5 7.13 5 9.28c0 1.68.95 2.76 2.17 3.12zm11.33 0c0 2.42 1.99 3.41 4.29 3.41 1.64 0 2.79-1.1 2.79-2.7 0-1.4-1.13-2.23-2.58-2.23-.46 0-.95.08-1.46.22v-1.15c2.09-.37 4.27-1.76 4.27-4.37 0-2.31-1.93-3.67-4.21-3.67C18.66 5.1 17 7.13 17 9.28c0 1.68.95 2.76 2.17 3.12z' />
          </svg>
          <span className='font-semibold text-[#1E8A6E] ml-2'>
            Your pathway to global education.
          </span>
        </blockquote>

        <p className='text-lg text-gray-700 leading-relaxed mb-5 text-justify'>
          Malaysia, a vibrant Southeast Asian nation, blends cultural diversity
          with modern infrastructure and breathtaking natural landscapes. Just a
          short flight from Bangladesh, it has emerged as a premier education
          hub for international students.
        </p>

        <div className='space-y-4'>
          <div className='flex items-start gap-3'>
            <span className='flex-none mt-1'>
              <svg
                className='w-7 h-7 text-[#1E8A6E]'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v18m9-9H3'
                />
              </svg>
            </span>
            <div>
              <span className='font-bold text-[#1E8A6E] block mb-1'>
                Globally Recognized Education
              </span>
              <span className='text-gray-700 leading-relaxed'>
                Malaysia hosts branch campuses of world-renowned universities
                alongside excellent local institutions, offering internationally
                accredited degrees at competitive tuition rates.
              </span>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='flex-none mt-1'>
              <svg
                className='w-7 h-7 text-[#1E8A6E]'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v10m0 0c-3.866 0-7-1.343-7-3V5c0-1.657 3.134-3 7-3s7 1.343 7 3v10c0 1.657-3.134 3-7 3z'
                />
              </svg>
            </span>
            <div>
              <span className='font-bold text-[#1E8A6E] block mb-1'>
                Student-Friendly Environment
              </span>
              <span className='text-gray-700 leading-relaxed'>
                With English as the medium of instruction, comprehensive support
                services, and a safe, welcoming society, Bangladeshi students
                find it exceptionally easy to adapt and excel.
              </span>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='flex-none mt-1'>
              <svg
                className='w-7 h-7 text-[#1E8A6E]'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 8v8c0 1.657 3.134 3 7 3s7-1.343 7-3V8'
                />
              </svg>
            </span>
            <div>
              <span className='font-bold text-[#1E8A6E] block mb-1'>
                Cultural Advantage
              </span>
              <span className='text-gray-700 leading-relaxed'>
                Malaysia's multicultural tapestry—blending Malay, Chinese,
                Indian, and indigenous influences—creates a home-away-from-home
                experience while broadening global perspectives.
              </span>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <span className='flex-none mt-1'>
              <svg
                className='w-7 h-7 text-[#1E8A6E]'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z'
                />
              </svg>
            </span>
            <div>
              <span className='font-bold text-[#1E8A6E] block mb-1'>
                Strategic Location
              </span>
              <span className='text-gray-700 leading-relaxed'>
                Its proximity to Bangladesh means affordable travel costs and
                minimal time difference, making it ideal for maintaining close
                family connections while pursuing international education.
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className='max-w-7xl mx-auto space-y-10 mb-10'>
        <div>
          <h3 className='text-3xl font-bold mb-6 text-center'>
            Key Advantages
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {highlights.map((h, i) => (
              <FlipCard
                key={i}
                icon={h.icon}
                title={h.title}
                detail={h.detail}
              />
            ))}
          </div>
        </div>

        {/* Tuition & Costs */}
        <div>
          <h3 className='text-3xl font-bold mb-6'>Tuition & Costs</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow'>
              <DollarSign className='w-12 h-12 text-[#1E8A6E] mb-4 animate-pulse' />
              <h4 className='text-2xl font-semibold'>Avg. Tuition Fees</h4>
              <p className='mt-2 text-gray-700'>MYR 20,000 – 40,000/year</p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow'>
              <Home className='w-12 h-12 text-[#1E8A6E] mb-4 animate-pulse' />
              <h4 className='text-2xl font-semibold'>Living Expenses</h4>
              <p className='mt-2 text-gray-700'>MYR 12,000 – 18,000/year</p>
            </div>
            <div className='flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow'>
              <Percent className='w-12 h-12 text-[#1E8A6E] mb-4 animate-pulse' />
              <h4 className='text-2xl font-semibold'>Scholarship Coverage</h4>
              <p className='mt-2 text-gray-700'>Up to 100% tuition support</p>
            </div>
          </div>
        </div>

        <motion.section
          className='pt-10 pb-40 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden rounded-3xl'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated background circles */}
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>
          </div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center mb-36'>
              <motion.h2
                className='text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent mb-6'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Your Study Abroad Roadmap
              </motion.h2>
              <motion.p
                className='text-xl text-gray-300 max-w-3xl mx-auto'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Follow our proven step-by-step process to achieve your dream of
                studying in Malaysia
              </motion.p>
            </div>

            {/* Desktop Timeline */}
            <div className='relative hidden md:flex flex-col items-center'>
              {/* Horizontal Timeline Line */}
              <div
                className='absolute w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full top-1/2 left-0 z-0'
                style={{ transform: 'translateY(-50%)' }}
              ></div>

              {/* University image in the center of timeline */}
              <motion.div
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className='relative'>
                  <div className='absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-xl animate-pulse'></div>
                </div>
              </motion.div>

              {/* Alternating Timeline Steps */}
              <div className='w-full grid grid-cols-5 gap-2 relative z-10'>
                {roadmap.map((step, idx) => {
                  const isTop = idx % 2 === 0
                  return (
                    <div
                      key={idx}
                      className='relative flex flex-col items-center min-h-[300px]'
                    >
                      {/* Connector line from card to timeline */}
                      <div
                        className={`
                      absolute left-1/2 ${isTop ? 'bottom-1/2' : 'top-1/2'}
                      transform -translate-x-1/2 w-1 h-24
                      bg-gradient-to-b 
                      ${
                        isTop
                          ? 'from-emerald-500/80 to-transparent'
                          : 'from-transparent to-emerald-500/80'
                      }
                      z-0
                    `}
                      ></div>

                      {/* Card */}
                      <div
                        className={`
                        relative w-64 p-2 rounded-xl backdrop-blur-lg border border-white/20
                        bg-gradient-to-br from-emerald-500/30 to-green-500/30 shadow-xl shadow-emerald-500/20
                        ${isTop ? 'mb-auto -mt-30' : 'mt-auto -mb-30'}
                        z-10
                      `}
                        style={{
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Card content */}
                        <div className='relative z-10 text-center'>
                          <div className='flex justify-center mb-3'>
                            <div className='w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-500/40'>
                              {idx + 1}
                            </div>
                          </div>
                          <h3 className='text-sm font-bold text-white mb-1 leading-tight'>
                            {step.step}
                          </h3>
                          <p className='text-gray-300 text-md leading-relaxed mb-1'>
                            {step.label}
                          </p>
                          <p className='text-gray-200 text-[13px] text-justify leading-relaxed'>
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div
                        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-3 border-white z-30
                        bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/40 scale-110
                      `}
                      ></div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className='relative md:hidden flex flex-col items-center space-y-8'>
              {/* Vertical Timeline Line */}
              <div className='absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 rounded-full transform -translate-x-1/2 z-0'></div>

              {roadmap.map((step, idx) => (
                <motion.div
                  key={idx}
                  className='relative flex items-center w-full z-10'
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/40 z-20'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-white font-bold text-xs'>
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`
                    relative w-72 mx-auto p-4 rounded-xl backdrop-blur-lg border border-white/20
                    bg-gradient-to-br from-emerald-500/30 to-green-500/30 shadow-xl shadow-emerald-500/20
                    ${idx % 2 === 0 ? 'ml-8' : 'mr-8'}
                  `}
                  >
                    {/* Connector line to timeline */}
                    <div
                      className={`
                      absolute top-1/2 transform -translate-y-1/2 w-8 h-1
                      bg-gradient-to-r from-emerald-500/80 to-transparent
                      ${idx % 2 === 0 ? '-left-8' : '-right-8 rotate-180'}
                    `}
                    ></div>

                    <div className='text-center'>
                      <div className='flex justify-center mb-3'>
                        <div className='w-12 h-12 rounded-full flex items-center justify-center text-emerald-600 bg-white/20 backdrop-blur-sm'>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className='text-lg font-bold text-white mb-2 leading-tight'>
                        {step.step}
                      </h3>
                      <p className='text-emerald-200 text-sm font-medium mb-3'>
                        {step.label}
                      </p>
                      <p className='text-gray-200 text-sm leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className='text-center max-w-3xl mx-auto mt-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-2xl font-bold text-[#1E8A6E] mb-4'>
            Let’s Start Your Journey Today
          </h3>
          <p className='text-gray-600 mb-6'>
            Our dedicated team is ready to help you choose the right path toward
            international education.
          </p>
          <Link to='/contact'>
            <a className='inline-flex items-center gap-2 px-6 py-3 bg-[#1E8A6E] text-white rounded-full hover:bg-[#176f59] transition'>
              <FaPhoneAlt /> Contact Our Counselors
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default SingleStudyAbroad
