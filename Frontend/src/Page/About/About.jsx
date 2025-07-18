import { useState, useEffect } from 'react'
import {
  FaChevronDown,
  FaUniversity,
  FaPassport,
  FaPlaneDeparture,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaPhoneAlt
} from 'react-icons/fa'
import { Link } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
import logo from '../../assets/logo.jpg'

const BRAND = '#176651'

export default function About () {
  const [accordionOpen, setAccordionOpen] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const steps = [
    {
      icon: <FaMapMarkedAlt size={26} style={{ color: BRAND }} />,
      title: 'Discover & Consult',
      desc: 'We listen to your story, ambitions, and preferences to design a roadmap just for you.'
    },
    {
      icon: <FaUniversity size={26} style={{ color: BRAND }} />,
      title: 'Match & Apply',
      desc: 'From course shortlisting to applications, our experts ensure your strengths are presented clearly.'
    },
    {
      icon: <FaPassport size={26} style={{ color: BRAND }} />,
      title: 'Visa & Documents',
      desc: 'Our visa experts guide you through every document, form, and requirement with clarity and care.'
    },
    {
      icon: <FaPlaneDeparture size={26} style={{ color: BRAND }} />,
      title: 'Prepare & Settle',
      desc: 'We provide pre-departure briefings and ongoing support so you feel confident—every step of the way.'
    }
  ]

  const benefits = [
    'Truly personalized, student-centric guidance',
    'Transparent and honest at every step',
    'Dedicated to your academic and career success',
    'Friendly, experienced counselors—always here for you',
    'Seamless support from Bangladesh to your destination country'
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.14,
        duration: 0.6,
        type: 'spring',
        stiffness: 55
      }
    })
  }

  return (
    <section className='bg-[#F7FDFB] min-h-screen pb-16'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About Us</title>
      </Helmet>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className='w-full pt-12 pb-10 px-6 md:px-12 text-center'
        style={{
          background: `linear-gradient(115deg, ${BRAND} 0%, #68C9A8 80%)`,
          borderBottomLeftRadius: '2rem',
          borderBottomRightRadius: '2rem'
        }}
      >
        <motion.h1
          className='text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          About Pioneer Solutions
        </motion.h1>
        <motion.p
          className='max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-2'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23, duration: 0.5 }}
        >
          A trusted partner in education consulting, helping students achieve
          their dream of studying abroad.
          <br />
          <blockquote className='relative border-l-4 border-blue-500 bg-blue-50/50 rounded-lg shadow-sm px-6 py-4 mt-4 mb-6 italic text-gray-800'>
            <svg
              className='absolute -left-3 -top-2 w-8 h-8 text-blue-300 opacity-40'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M7.17 15.59C7.17 18.01 9.16 19 11.46 19c1.64 0 2.79-1.1 2.79-2.7 0-1.4-1.13-2.23-2.58-2.23-.46 0-.95.08-1.46.22v-1.15c2.09-.37 4.27-1.76 4.27-4.37 0-2.31-1.93-3.67-4.21-3.67C6.66 5.1 5 7.13 5 9.28c0 1.68.95 2.76 2.17 3.12zm11.33 0c0 2.42 1.99 3.41 4.29 3.41 1.64 0 2.79-1.1 2.79-2.7 0-1.4-1.13-2.23-2.58-2.23-.46 0-.95.08-1.46.22v-1.15c2.09-.37 4.27-1.76 4.27-4.37 0-2.31-1.93-3.67-4.21-3.67C18.66 5.1 17 7.13 17 9.28c0 1.68.95 2.76 2.17 3.12z' />
            </svg>
            <span className='font-semibold text-xl block'>
              “Your Pathway To Global Education.”
            </span>
          </blockquote>
        </motion.p>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        className='max-w-4xl mx-auto mt-14 mb-16 flex flex-col-reverse md:flex-row items-center gap-8 px-3'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <motion.div className='flex-1' custom={0}>
          <h2 className='text-2xl font-bold mb-2' style={{ color: BRAND }}>
            Who We Are
          </h2>
          <p className='text-gray-700 text-base mb-4 text-justify'>
            <span className='font-semibold' style={{ color: BRAND }}>
              Pioneer Solutions
            </span>{' '}
            is a thriving international education consultancy based in
            Bangladesh, specializing in student recruitment and placement. We
            are committed to helping students turn their dreams of pursuing
            higher education abroad, starting with Malaysia as our main
            destination.
            <br />
            <br />
            We combine industry knowledge with a student-focused approach to
            deliver tailored support that meets individual academic and career
            goals. From the initial stages of institution selection and
            application guidance to visa support and comprehensive pre-departure
            preparation, we provide end-to-end assistance to ensure a smooth and
            confident transition for every student.
            <br />
            <br />
            All our services are provided completely free of charge, ensuring
            that students receive honest, accessible, and unbiased guidance
            throughout their journey. Our goal is to simplify the complex
            process of studying abroad by offering personalized, transparent,
            and reliable support—making quality international education
            accessible, achievable, and rewarding for all students we serve.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-800'>
            <li>100% personalized counseling</li>
            <li>Proven expertise & real results</li>
            <li>Supportive every step of your journey</li>
          </ul>
        </motion.div>
        <motion.div className='flex-1 flex justify-center' custom={1}>
          <motion.img
            src={logo}
            alt='Company Logo'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
          {/* <motion.div
            className='rounded-xl shadow-lg p-7 bg-white border border-[#1E8A6E]/10 max-w-xs flex flex-col items-center'
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px #17665122' }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <FaUniversity size={50} className='text-[#176651] mb-3 mx-auto' />
            <h3 className='text-lg font-semibold mb-2 text-center text-[#176651]'>
              Global Reach
            </h3>
            <p className='text-sm text-gray-600 text-center'>
              We’ve placed students in top universities across Malaysia and
              beyond—making quality education a reality.
            </p>
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Vision & Mission Accordion */}
      <motion.div
        className='max-w-3xl mx-auto mb-14 px-3'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
      >
        <motion.div className='rounded-xl bg-white shadow-md p-4' custom={0}>
          {[
            {
              title: 'Our Vision',
              content:
                'To grow as a trusted and student-centric education consultancy with a global footprint.'
            },
            {
              title: 'Our Mission',
              content:
                'To empower students with tools, guidance, and global opportunities to achieve their educational dreams.'
            }
          ].map((item, idx) => (
            <div key={idx} className='mb-2'>
              <button
                onClick={() =>
                  setAccordionOpen(accordionOpen === idx ? null : idx)
                }
                className='flex justify-between items-center w-full py-3 px-4 rounded-lg text-lg font-semibold outline-none focus:ring-2 focus:ring-[#17665122] transition'
                style={{
                  background: accordionOpen === idx ? '#E6FAF4' : '#F8FAF9',
                  color: BRAND
                }}
              >
                {item.title}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    accordionOpen === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {accordionOpen === idx && (
                  <motion.div
                    className='bg-[#F8FAF9] rounded-b-lg px-4 py-3 text-gray-700 text-base'
                    key={item.title}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* How We Guide You */}
      <motion.div
        className='max-w-5xl mx-auto mb-16 px-3'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          className='text-2xl font-bold mb-6 text-center'
          style={{ color: BRAND }}
          variants={fadeInUp}
          custom={0}
        >
          How We Guide You
        </motion.h2>
        <div className='flex flex-col md:flex-row gap-6'>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className='flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4'
              style={{ borderLeftColor: BRAND }}
              variants={fadeInUp}
              custom={idx + 1}
              whileHover={{ y: -6, boxShadow: '0 8px 36px #17665126' }}
              transition={{ type: 'spring', stiffness: 110 }}
            >
              <div className='mb-2'>{step.icon}</div>
              <div className='font-semibold mb-1' style={{ color: BRAND }}>
                {step.title}
              </div>
              <div className='text-gray-700 text-base'>{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      {/* <motion.div
        className='max-w-2xl mx-auto mb-16 px-3'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <div
          className='bg-white rounded-2xl shadow-md p-8 border-l-4'
          style={{ borderLeftColor: BRAND }}
        >
          <h2 className='text-2xl font-bold mb-3' style={{ color: BRAND }}>
            Why Partner With Us?
          </h2>
          <ul className='space-y-3'>
            {benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                className='flex items-start gap-2 text-gray-800 text-base'
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.13, duration: 0.4 }}
              >
                <FaCheckCircle style={{ color: BRAND, marginTop: 3 }} />{' '}
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div> */}

      {/* CTA */}
      <motion.div
        className='text-center mb-6 px-2'
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div
          className='inline-block rounded-full px-10 py-6 shadow-xl'
          style={{ background: BRAND }}
        >
          <p className='text-lg font-semibold mb-2 text-white'>
            Ready to take your first step toward global education?
          </p>
          <Link to='/contact'>
            <button
              className='btn font-bold border-none px-6 py-2 rounded-full hover:scale-105 transition'
              style={{
                background: 'white',
                color: BRAND,
                fontSize: '1.1rem'
              }}
            >
              <FaPhoneAlt className='inline mr-2' />
              Contact Us Now
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
