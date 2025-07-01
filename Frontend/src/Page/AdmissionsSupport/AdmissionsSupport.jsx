/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  Calendar,
  BookOpen,
  Target,
  Shield,
  Star,
  Download,
  Upload,
  MessageCircle
} from 'lucide-react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet'

const AdmissionsSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const admissionSteps = [
    {
      id: 1,
      title: 'Document Review',
      description: 'Comprehensive review of all your application documents',
      icon: <FileText className='w-8 h-8' />,
      details:
        'We meticulously review transcripts, essays, recommendations, and supporting documents'
    },
    {
      id: 2,
      title: 'Form Completion',
      description: 'Accurate completion of all application forms',
      icon: <CheckCircle className='w-8 h-8' />,
      details:
        'Expert assistance in filling out complex application forms with precision'
    },
    {
      id: 3,
      title: 'Deadline Management',
      description: 'Ensuring timely submission within all deadlines',
      icon: <Clock className='w-8 h-8' />,
      details:
        'Strategic timeline planning to meet all critical application deadlines'
    },
    {
      id: 4,
      title: 'Quality Assurance',
      description: 'Final review and submission for a smooth process',
      icon: <Shield className='w-8 h-8' />,
      details:
        'Thorough quality check before submission to ensure everything is perfect'
    }
  ]

  const services = [
    {
      title: 'Document Preparation',
      description:
        'Professional review and formatting of all required documents',
      icon: <FileText className='w-12 h-12' />,
      features: [
        'Verify all certificates and transcripts',
        'Customize documents for each university',
        'Advise on personal statements and CVs',
        'Proofread and improve document clarity'
      ]
    },
    {
      title: 'Application Form Assistance',
      description: 'Expert assistance with complex application forms',
      icon: <BookOpen className='w-12 h-12' />,
      features: [
        'Assist in accurate form completion',
        'Clarify university-specific queries',
        'Prevent common application mistakes',
        'Ensure consistency with documents'
      ]
    },
    {
      title: ' Timeline & Deadline Management',
      description: 'Strategic planning to meet all critical deadlines',
      icon: <Calendar className='w-12 h-12' />,
      features: [
        'Build personalized application timelines',
        'Send deadline reminders',
        'Coordinate deadlines with universities'
      ]
    },
    {
      title: ' Quality Review & Tracking',
      description: 'Comprehensive review before final submission',
      icon: <Award className='w-12 h-12' />,
      features: [
        'Ensure university compliance',
        'Offer final improvement feedback',
        'Confirm receipt and track status',
        'Final Approval'
      ]
    }
  ]

  const stats = [
    {
      number: '98%',
      label: 'Success Rate',
      icon: <Target className='w-8 h-8' />
    },
    {
      number: '500+',
      label: 'Applications Processed',
      icon: <FileText className='w-8 h-8' />
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <MessageCircle className='w-8 h-8' />
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: <Star className='w-8 h-8' />
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className='w-6 h-6' />,
      text: 'Expert Document Review'
    },
    { icon: <Clock className='w-6 h-6' />, text: 'Deadline Management' },
    { icon: <Shield className='w-6 h-6' />, text: 'Quality Assurance' },
    { icon: <Users className='w-6 h-6' />, text: 'Personalized Support' }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#E8F5F0] to-white'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Admission & Visa</title>
      </Helmet>
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'>
        {/* Animated Background Elements */}
        <div className='absolute inset-0'>
          <motion.div
            className='absolute top-20 left-10 w-72 h-72 bg-[#1E8A6E]/10 rounded-full blur-3xl'
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute bottom-20 right-10 w-96 h-96 bg-[#25B08B]/20 rounded-full blur-3xl'
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E8F5F0] to-[#F0FDF9] rounded-full mb-6'
                whileHover={{ scale: 1.05 }}
              >
                <FileText className='w-5 h-5 text-[#1E8A6E] mr-2' />
                <span className='text-[#1E8A6E] font-medium'>
                  Admissions Support
                </span>
              </motion.div>

              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                <span className='bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] bg-clip-text text-transparent'>
                  Admissions{'  '}
                </span>
                Assistance
              </h1>

              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                We provide comprehensive assistance with preparing and
                submitting college or university applications. This includes
                reviewing your documents, accurately completing forms, and
                ensuring everything is submitted within deadlines for a smooth
                process.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <a href='https://wa.me/+8801345661988'>
                  <motion.button
                    className='px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </motion.button>
                </a>
              </div>

              {/* <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-[#1E8A6E]">{benefit.icon}</div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            {/* Interactive Application Preview */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20'>
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-[#1E8A6E] rounded-full animate-pulse'></div>
                    <span className='text-sm font-medium text-gray-700'>
                      Live Application Status
                    </span>
                  </div>

                  <motion.div
                    className='absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl p-4 shadow-lg'
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Upload className='w-6 h-6' />
                  </motion.div>
                </div>

                <div className='space-y-4'>
                  {admissionSteps.map(step => (
                    <motion.div
                      key={step.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer `}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className='flex items-center space-x-3'>
                        <div className={`p-2 rounded-lg `}>{step.icon}</div>
                        <div className='flex-1'>
                          <h3 className='font-semibold text-gray-900'>
                            {step.title}
                          </h3>
                          <p className='text-sm text-gray-600'>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Our <span className='text-[#1E8A6E]'>Admissions</span> Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive support throughout your entire application journey
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
               
                whileHover={{ y: -10 }}
              >
                <div className='text-[#1E8A6E] mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-4'>{service.description}</p>

                <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='space-y-2'
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className='flex items-center space-x-2 text-sm text-gray-600'
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className='w-4 h-4 text-[#1E8A6E]' />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Applications Service Section */}
      <section className='py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Visa Applications <span className='text-[#1E8A6E]'>Service</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              After securing admission through Pioneer Solutions, receive comprehensive visa application support to help your study abroad journey start smoothly.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-xl flex items-center justify-center mr-4'>
                    <FileText className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    Expert Visa Guidance
                  </h3>
                </div>

                <p className='text-gray-600 mb-6 leading-relaxed'>
                  Our experienced team provides end-to-end visa application
                  support, ensuring all documentation is properly prepared and
                  submitted according to embassy requirements.
                </p>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-[#1E8A6E] mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Document Preparation
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Complete assistance with all required visa documents
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-[#1E8A6E] mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Application Review
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Thorough review before submission to avoid delays
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-[#1E8A6E] mt-1 flex-shrink-0' />
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Interview Preparation
                      </h4>
                      <p className='text-gray-600 text-sm'>
                        Mock interviews and guidance for visa interviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visa Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-8'>
                  Visa Application Process
                </h3>

                {[
                  {
                    step: '01',
                    title: 'Initial Consultation',
                    description:
                      'Assessment of your visa requirements and eligibility',
                    icon: <Users className='w-6 h-6' />
                  },
                  {
                    step: '02',
                    title: 'Document Collection',
                    description:
                      'Gathering and organizing all necessary documents',
                    icon: <FileText className='w-6 h-6' />
                  },
                  {
                    step: '03',
                    title: 'Application Submission',
                    description:
                      'Professional submission of your visa application',
                    icon: <Upload className='w-6 h-6' />
                  },
                  {
                    step: '04',
                    title: 'Follow-up & Support',
                    description: 'Continuous support until visa approval',
                    icon: <MessageCircle className='w-6 h-6' />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-full flex items-center justify-center text-white font-bold'>
                        {item.step}
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-center mb-2'>
                        <div className='text-[#1E8A6E] mr-2'>{item.icon}</div>
                        <h4 className='font-semibold text-gray-900'>
                          {item.title}
                        </h4>
                      </div>
                      <p className='text-gray-600 text-sm'>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Ready to Start Your{' '}
              <span className='text-[#1E8A6E]'>Application Journey?</span>
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Let our experts guide you through every step of the admissions
              process. Get started today and increase your chances of
              acceptance.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button> */}

              <Link to={'/contact'}>
                <motion.button
                  className='cursor-pointer px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle className='mr-2 w-5 h-5' />
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionsSupport
