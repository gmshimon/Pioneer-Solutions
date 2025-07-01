/* eslint-disable no-unused-vars */
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { sendConsultationEmail } from '../../Utils/sendEmail'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Helmet } from 'react-helmet'
import { ChevronDown, MessageSquare, ArrowDown } from 'react-feather'
const faqs = [
  {
    question: 'What are the basic admission requirements for Malaysian universities?',
    answer:
      'Most universities require transcripts, English proficiency proof (like IELTS), passport, and a completed application form.'
  },
  {
    question: 'Can I apply to multiple universities in Malaysia at once?',
    answer:
      "Yes, you can apply to several institutions simultaneously.",
  },
  {
    question: 'How long does it take to process an admission application?',
    answer:
      'Processing typically takes 2–6 weeks after submitting complete documents.'
  },
  {
    question: 'When do admissions open for Malaysian universities?',
    answer:
      "Intakes are usually in February/March and September/October each year."
  },
  {
    question: 'What is the next step after receiving an offer letter?',
    answer:
      'Pay the initial fees and begin the student visa application process.'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    last: '',
    message: ''
  })
  const [status, setStatus] = useState({ loading: false, success: false })
  const [activeIndex, setActiveIndex] = useState(0) // First item expanded by default
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleDownload = () => {
    // Mock PDF download function
    console.log('Downloading visa checklist...')
    // Actual implementation would use your PDF file:
    // window.open('/path/to/visa-checklist.pdf', '_blank');
  }
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus({ loading: true, success: false })
    try {
      // Call the utility and pass form data
      await sendConsultationEmail(formData)

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
        setFormData({ name: '', email: '', phone: '', last: '', message: '' })
      }, 3000)
    } catch (error) {
      console.log(error)
      alert('There was an error submitting the form. Please try again later.')
      setStatus({ loading: false, success: false })
    }
  }
  return (
    <section className='mt-2 mb-10  px-4 md:px-10 lg:px-20 pb-8'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact Us</title>
      </Helmet>
      <ToastContainer />
      {/* Header */}
      <div className='text-center max-w-2xl mx-auto mb-8'>
        <motion.h2
          className='text-4xl font-bold text-[#1E8A6E] mb-4'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className='text-gray-600 text-lg'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have questions or need guidance? Reach out to us anytime – we're here
          to help.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className='grid md:grid-cols-2 gap-12 max-w-7xl mx-auto'>
        {/* Form */}
        <motion.div
          className='bg-white rounded-xl shadow-lg p-3 md:h-[600px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className='text-xl font-semibold text-gray-800 mb-4 text-center'>
            Send us a message
          </h3>
          <form onSubmit={handleSubmit} className='space-y-2'>
            {/* Full Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F5D] focus:border-transparent transition-all duration-300'
                placeholder='Full Name'
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F5D] focus:border-transparent transition-all duration-300'
                placeholder='john@example.com'
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Phone Number
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F5D] focus:border-transparent transition-all duration-300'
                placeholder='Preferred Study Destination'
              />
            </div>

            {/* Last Qualification*/}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Last Qualification
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type='tel'
                id='phone'
                name='last'
                value={formData.last}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F5D] focus:border-transparent transition-all duration-300'
                placeholder="Bachelor's Computer Science"
              />
            </div>

            {/*Message*/}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                type='tel'
                id='phone'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full h-28 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F5D] focus:border-transparent transition-all duration-300'
                placeholder="Bachelor's Computer Science"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={status.loading || status.success}
              className={`w-full py-2 rounded-lg text-white font-semibold text-lg transition-all duration-300 ${
                status.loading || status.success
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'w-full bg-[#1E8A6E] text-white py-2 px-6 rounded-lg hover:bg-[#166d57] transition-all'
              }`}
            >
              {status.loading ? (
                <div className='flex items-center justify-center space-x-2'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                  <span>Submitting...</span>
                </div>
              ) : status.success ? (
                'Submitted Successfully!'
              ) : (
                'Send'
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className='flex flex-col justify-between'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='space-y-6'>
            <div className='flex items-start gap-4'>
              <FaPhoneAlt className='text-[#1E8A6E]' size={18} />
              <div>
                <h4 className='font-semibold text-gray-800'>Call Us</h4>
                <p className='text-gray-600 text-sm'>+8801345661988</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <FaEnvelope className='text-[#1E8A6E]' size={20} />
              <div>
                <h4 className='font-semibold text-gray-800'>Email</h4>
                <p className='text-gray-600 text-sm'>pioneersolutions.bd@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-10 mt-10'>

            {/* <motion.h3
              className='text-3xl font-bold text-center text-[#1E8A6E] mb-12'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Study Abroad FAQs
            </motion.h3> */}

    
            <div className='space-y-4'>
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className='border border-gray-200 rounded-xl overflow-hidden bg-white'
                >
      
                  <motion.button
                    whileHover={{ backgroundColor: '#f0fdf4' }}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${
                      activeIndex === index ? 'bg-green-50' : ''
                    }`}
                  >
                    <span className='font-semibold text-gray-800 text-lg md:text-xl'>
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className='text-[#1E8A6E] min-w-5' />
                    </motion.span>
                  </motion.button>


                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === index ? 'auto' : 0,
                      opacity: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-4 text-gray-600'>
                      <p className='mb-3'>{item.answer}</p>
                      {item.hasDownload && (
                        <button
                          onClick={handleDownload}
                          className='mt-2 text-[#1E8A6E] font-medium flex items-center hover:underline'
                        >
                          Download visa checklist{' '}
                          <ArrowDown className='ml-1' size={14} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Social Icons */}
          <div className='flex items-center space-x-4 mt-8'>
            <a
              href='#'
              className='text-[#1E8A6E] hover:text-[#166d57] transition'
            >
              <FaFacebook size={20} />
            </a>
            <a
              href='#'
              className='text-[#1E8A6E] hover:text-[#166d57] transition'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href='#'
              className='text-[#1E8A6E] hover:text-[#166d57] transition'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='#'
              className='text-[#1E8A6E] hover:text-[#166d57] transition'
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
