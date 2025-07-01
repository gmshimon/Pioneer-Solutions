/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion } from 'framer-motion'
import studentPhoto from '../../assets/student-photo.jpg'
import worldMap from '../../assets/world-map.svg'
import { sendConsultationEmail } from '../../Utils/sendEmail'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    last: '',
    message: ''
  })
  const [status, setStatus] = useState({ loading: false, success: false })

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
    <div className='min-h-screen bg-gray-100 w-full flex items-center justify-center py-2 relative mt-5'>
      <ToastContainer />
      {/* Background overlay for better readability */}
      <div className='absolute inset-0 bg-white bg-opacity-80'></div>
      <div
        className='relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0  rounded-2xl shadow-2xl overflow-hidden'
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Left: Student Photo */}
        <motion.div
          className='w-full flex justify-center'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <img
              src={studentPhoto}
              alt='Happy student with books'
              className='w-full h-full '
            />
          </div>
        </motion.div>

        {/* Right: Form Section */}
        <motion.div
          className='p-4 lg:p-2 flex flex-col justify-center bg-gray-50'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Header */}
          <div className='text-center '>
            <motion.h1
              className='text-3xl lg:text-5xl font-bold text-[#2C5F5D] mb-2'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book a Free Study Consultation
            </motion.h1>
            <motion.p
              className='text-md text-gray-600 text-justify mb-1'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get personalized guidance for your educational journey abroad from
              Pioneer Solutions. Our experts are here to help you
              achieve your dreams.
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            className='bg-white rounded-xl shadow-lg p-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                  'Book Now'
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ConsultationForm
