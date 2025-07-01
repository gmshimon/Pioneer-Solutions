import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Target,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageCircle,
} from 'lucide-react'
import consultationImg from '../../assets/consultation-pic.png'
import { MdOutlineSupportAgent } from 'react-icons/md'
import ScheduleModal from '../../components/ScheduleModal/ScheduleModal'
import { sendScheduleConsultation } from '../../Utils/sendEmail'
import { toast, ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet'

const StudyConsultation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
   const [status, setStatus] = useState({ loading: false, success: false })
    const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const consultationSteps = [
    {
      icon: <Users className='w-8 h-8' />,
      title: 'One-on-One Counselling',
      description:
        'Personalized sessions tailored to your unique needs and aspirations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Academic & Career Path Planning',
      description:
        'Strategic guidance to help you choose the right field of study and direction — aligned with long-term goals and evolving job markets.',
      color: 'from-[#1E8A6E] to-[#25B08B]'
    },
    {
      icon: <BookOpen className='w-8 h-8' />,
      title: 'Course & Institution Selection',
      description:
        'Expert recommendations for college/university and programs that best match your goals, preferences, and qualifications.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MdOutlineSupportAgent className='w-8 h-8' />,
      title: 'Ongoing Support',
      description:
        "Continued assistance throughout your journey — from application to adjustment abroad, ensuring you're supported every step of the way.",
      color: 'from-orange-500 to-red-500'
    }
  ]


  const handleSubmitFormat =async ()=>{
   setStatus({ loading: true, success: false })
    try {
      // Call the utility and pass form data
      await sendScheduleConsultation(form)

      setStatus({ loading: false, success: true })
      toast.success('Your consultation request was sent successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      setTimeout(() => {
        setStatus({ loading: false, success: false })
        setIsOpen(false)
        setForm({ name: '', email: '', phone: '', last: '', message: '' })
      }, 3000)
    } catch (error) {
      console.log(error)
      alert('There was an error submitting the form. Please try again later.')
      setStatus({ loading: false, success: false })
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Consultation</title>
      </Helmet>
      {/* Hero Section */}
      <ToastContainer />
      <motion.section
        className='relative overflow-hidden py-10 px-2 sm:py-20 sm:px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/30 rounded-full blur-3xl'
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-[#E8F5F0]/50 rounded-full blur-3xl'
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Content Side */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className='inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-[#E8F5F0] to-[#F0FDF9] rounded-full mb-4 sm:mb-6'
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className='w-5 h-5 text-blue-600 mr-2' />
                <span className='text-blue-800 font-medium'>
                  Expert Consultation
                </span>
              </motion.div>

              <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-center lg:text-left'>
                Study
                <span className='bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] bg-clip-text text-transparent ml-2'>
                  Consultation
                </span>
              </h1>

              <p className='text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left'>
                We offer one-on-one counselling sessions to help students find
                the right academic path for a successful future. Our guidance
                aligns with individuals' interests, academic background, and
                future goals.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 w-full justify-center lg:justify-start'>
                <motion.button
                  className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(true)}
                >
                  <Calendar className='w-5 h-5 mr-2' />
                  Book Consultation
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                </motion.button>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className='relative flex justify-center'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className='relative w-full max-w-xs sm:max-w-full'>
                <motion.img
                  src={consultationImg}
                  alt='Study Consultation'
                  className='w-full  sm:max-h-none h-auto rounded-2xl shadow-2xl object-cover'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Stats Cards */}
                <motion.div
                  className='absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-xl p-2 sm:p-4 shadow-lg'
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-[#1E8A6E] rounded-full animate-pulse'></div>
                    <span className='text-xs sm:text-sm font-medium text-gray-700'>
                      One to One Consultation
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className='absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl p-2 sm:p-4 shadow-lg'
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className='text-center'>
                    <div className='text-xl sm:text-2xl font-bold'>24/7</div>
                    <div className='text-xs sm:text-sm opacity-90'>Support</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Process Section */}
      <motion.section
        className='py-10 px-2 sm:py-20 sm:px-4 bg-white'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-10 sm:mb-16'>
            <motion.h2
              className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Consultation Approach
            </motion.h2>
            <motion.p
              className='text-base sm:text-xl text-gray-600 max-w-3xl mx-auto'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive approach to guide you towards academic success
            </motion.p>
          </div>

          {/* Interactive Steps */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {consultationSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-gradient-to-br from-white to-gray-50 shadow-2xl scale-105'
                    : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-full flex items-center justify-center font-bold text-sm'>
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${step.color} text-white flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
                  animate={
                    activeStep === index ? { rotate: [0, 5, -5, 0] } : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 text-center'>
                  {step.title}
                </h3>
                <p className='text-gray-600 text-sm sm:text-base text-justify leading-relaxed'>
                  {step.description}
                </p>

                {/* Active Indicator */}
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* 24/7 Support Section */}
      <motion.section
        className='py-10 px-2 sm:py-20 sm:px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-7xl mx-auto'>

          {/* Support Features */}
          <motion.div
            className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg mt-10'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8 text-center'>
              What Our Support Includes
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-6 h-6 text-blue-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Academic Guidance
                </h4>
                <p className='text-gray-600 text-sm'>
                  Course selection and academic planning support
                </p>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-6 h-6 text-green-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Visa Assistance
                </h4>
                <p className='text-gray-600 text-sm'>
                  Help with visa applications and documentation
                </p>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-6 h-6 text-purple-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Living Support
                </h4>
                <p className='text-gray-600 text-sm'>
                  Accommodation and lifestyle guidance abroad
                </p>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-6 h-6 text-orange-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Career Counseling
                </h4>
                <p className='text-gray-600 text-sm'>
                  Professional development and career planning
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className='py-10 px-2 sm:py-20 sm:px-4 bg-gray-900 max-w-7xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h2
            className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className='text-base sm:text-xl text-gray-300 mb-6 sm:mb-8'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book your free consultation today and take the first step towards
            your academic success.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(true)}
            >
              <Calendar className='w-5 h-5 mr-2' />
              Schedule Consultation
              <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
            </motion.button>

            <a
              href='https://wa.me/+8801345661988'
              target='_blank'
              rel='noopener noreferrer'
            >
              <motion.button
                className='px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className='w-5 h-5 mr-2' />
                Chat Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>
      <ScheduleModal isOpen={isOpen} onClose={() => setIsOpen(false)} form={form} handleChange={handleChange} handleSubmitFormat={handleSubmitFormat} status={status}/>
    </div>
  )
}

export default StudyConsultation
