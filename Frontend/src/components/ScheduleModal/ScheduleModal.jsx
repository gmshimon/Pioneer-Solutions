// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const ScheduleModal = ({
  isOpen,
  onClose,
  form,
  status,
  handleSubmitFormat,
  handleChange
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className='fixed inset-0 bg-black/40 z-40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            className='fixed left-1/2 top-1/2 z-50 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 transform -translate-x-1/2 -translate-y-1/2'
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
          >
            {/* Close Button */}
            <button
              className='absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl'
              onClick={onClose}
              aria-label='Close'
              type='button'
            >
              &times;
            </button>
            {/* Modal Title */}
            <h2 className='text-2xl font-bold text-[#2C5F5D] mb-2 text-center'>
              Book a Consultation
            </h2>
            <p className='text-gray-600 mb-4 text-center text-sm'>
              Schedule your free study consultation with our experts.
            </p>
            {/* Form */}
            <form
              className='space-y-3'
              onSubmit={e => {
                e.preventDefault()
                handleSubmitFormat()
              }}
            >
              <div>
                <label className='block mb-1 text-gray-700 text-sm'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  value={form.name}
                  onChange={handleChange}
                  className='w-full border rounded-lg px-3 py-2 focus:ring-[#2C5F5D] focus:border-[#2C5F5D]'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label className='block mb-1 text-gray-700 text-sm'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  value={form.email}
                  onChange={handleChange}
                  className='w-full border rounded-lg px-3 py-2 focus:ring-[#2C5F5D] focus:border-[#2C5F5D]'
                  placeholder='you@email.com'
                />
              </div>
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <label className='block mb-1 text-gray-700 text-sm'>
                    Date
                  </label>
                  <input
                    type='date'
                    name='date'
                    required
                    value={form.date}
                    onChange={handleChange}
                    className='w-full border rounded-lg px-3 py-2 focus:ring-[#2C5F5D] focus:border-[#2C5F5D]'
                  />
                </div>
                <div className='flex-1'>
                  <label className='block mb-1 text-gray-700 text-sm'>
                    Time
                  </label>
                  <input
                    type='time'
                    name='time'
                    required
                    value={form.time}
                    onChange={handleChange}
                    className='w-full border rounded-lg px-3 py-2 focus:ring-[#2C5F5D] focus:border-[#2C5F5D]'
                  />
                </div>
              </div>
              <div>
                <label className='block mb-1 text-gray-700 text-sm'>
                  Message (optional)
                </label>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className='w-full border rounded-lg px-3 py-2 focus:ring-[#2C5F5D] focus:border-[#2C5F5D]'
                  placeholder="Anything specific you'd like to discuss?"
                />
              </div>
              <button
                type='submit'
                disabled={status.loading}
                className={`w-full py-2 rounded-lg font-bold text-white transition-all duration-300 bg-[#2C5F5D] hover:bg-[#167A5C] ${
                  status.loading && 'opacity-70 cursor-not-allowed'
                }`}
              >
                {status.loading ? 'Booking...' : 'Book Consultation'}
              </button>
            </form>
          </motion.div>
          {/* <ToastContainer position="top-right" /> */}
        </>
      )}
    </AnimatePresence>
  )
}

export default ScheduleModal
