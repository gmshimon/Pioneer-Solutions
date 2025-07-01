/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  DollarSign,
  Plane,
  MapPin,
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
  MessageCircle,
  Luggage,
  CreditCard,
  Phone,
  Mail,
  AlertCircle,
  ThumbsUp,
  Wifi,
  Car,
  Building,
  ShoppingCart,
  Heart,
  Globe,
  Camera,
  Coffee,
  Utensils,
  Shirt,
  Book,
  Smartphone,
  Headphones
} from 'lucide-react'
import { Helmet } from 'react-helmet'

const PreDepartureAdvice = () => {
  const [activeCategory, setActiveCategory] = useState('budgeting')
  const [checkedItems, setCheckedItems] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('my')
  const [budgetCalculator, setBudgetCalculator] = useState({
    accommodation: 200,
    food: 150,
    transport: 50,
    personal: 100
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const categories = [
    {
      id: 'budgeting',
      title: 'Budgeting',
      icon: <DollarSign className='w-6 h-6' />,
      color: 'from-[#25B08B] to-[#1E8A6E]'
    },
    {
      id: 'travel',
      title: 'Travel Arrangements',
      icon: <Plane className='w-6 h-6' />,
      color: 'from-[#1E8A6E] to-[#25B08B]'
    },
    {
      id: 'arrival',
      title: 'What to Expect',
      icon: <MapPin className='w-6 h-6' />,
      color: 'from-[#25B08B] to-[#1E8A6E]'
    }
  ]

  const accommodationOptions = [
    {
      type: 'University Dormitory',
      description: 'On-campus housing with meal plans',
      pros: [
        'Convenient location',
        'Built-in community',
        'Meal plans available'
      ],
      cons: ['Limited privacy', 'Strict rules', 'May be expensive'],
      avgCost: '$800-1200/month',
      icon: <Building className='w-8 h-8' />
    },
    {
      type: 'Shared Apartment',
      description: 'Off-campus shared living with roommates',
      pros: ['More independence', 'Cost-effective', 'Real-world experience'],
      cons: [
        'Commute required',
        'Utility responsibilities',
        'Roommate compatibility'
      ],
      avgCost: '$600-1000/month',
      icon: <Users className='w-8 h-8' />
    },
    {
      type: 'Homestay',
      description: 'Living with a local family',
      pros: ['Cultural immersion', 'Meals included', 'Local guidance'],
      cons: ['Less independence', 'Family rules', 'Limited social life'],
      avgCost: '$700-1100/month',
      icon: <Heart className='w-8 h-8' />
    }
  ]

  const packingChecklist = [
    {
      category: 'Documents',
      items: [
        { name: 'Passport & Visa', essential: true },
        { name: 'University Documents', essential: true },
        { name: 'Medical Records', essential: true },
        { name: 'Insurance Papers', essential: true },
        { name: 'Bank Statements', essential: false }
      ],
      icon: <BookOpen className='w-6 h-6' />
    },
    {
      category: 'Electronics',
      items: [
        { name: 'Laptop & Charger', essential: true },
        { name: 'Phone & Charger', essential: true },
        { name: 'Power Adapters', essential: true },
        { name: 'Headphones', essential: false },
        { name: 'Camera', essential: false }
      ],
      icon: <Smartphone className='w-6 h-6' />
    },
    {
      category: 'Clothing',
      items: [
        { name: 'Weather-appropriate clothes', essential: true },
        { name: 'Formal attire', essential: true },
        { name: 'Comfortable shoes', essential: true },
        { name: 'Winter coat', essential: false },
        { name: 'Traditional clothing', essential: false }
      ],
      icon: <Shirt className='w-6 h-6' />
    },
    {
      category: 'Personal Items',
      items: [
        { name: 'Medications', essential: true },
        { name: 'Toiletries', essential: true },
        { name: 'Glasses/Contacts', essential: true },
        { name: 'Comfort items', essential: false },
        { name: 'Gifts from home', essential: false }
      ],
      icon: <Heart className='w-6 h-6' />
    }
  ]

  const travelTips = [
    {
      title: 'Book Early',
      description: 'Reserve flights 2-3 months in advance for better prices',
      icon: <Calendar className='w-6 h-6 text-[#1E8A6E]' />
    },
    {
      title: 'Check Baggage Limits',
      description: 'Verify weight and size restrictions with your airline',
      icon: <Luggage className='w-6 h-6 text-[#1E8A6E]' />
    },
    {
      title: 'Airport Pickup',
      description: 'Arrange transportation from airport to accommodation',
      icon: <Car className='w-6 h-6 text-[#1E8A6E]' />
    },
    {
      title: 'Travel Insurance',
      description: 'Get comprehensive travel and health insurance',
      icon: <Shield className='w-6 h-6 text-[#1E8A6E]' />
    }
  ]

  const arrivalExpectations = [
    {
      phase: 'First Week',
      tasks: [
        'Complete university registration',
        'Open bank account',
        'Get local SIM card',
        'Explore campus'
      ],
      tips: "Focus on essential tasks and don't overwhelm yourself"
    },
    {
      phase: 'First Month',
      tasks: [
        'Join student organizations',
        'Establish routines',
        'Make local friends',
        'Learn public transport'
      ],
      tips: 'Start building your social network and daily habits'
    },
    {
      phase: 'First Semester',
      tasks: [
        'Adapt to academic system',
        'Explore the city',
        'Manage homesickness',
        'Plan holiday visits'
      ],
      tips: 'Give yourself time to adjust and be patient with the process'
    }
  ]

  const countries = [
    { id: 'my', name: 'Malaysia', currency: 'RM', avgCost: 500 },
    { id: 'usa', name: 'United States', currency: 'USD', avgCost: 1500 },
    { id: 'uk', name: 'United Kingdom', currency: 'GBP', avgCost: 1200 },
    { id: 'canada', name: 'Canada', currency: 'CAD', avgCost: 1300 },
    { id: 'australia', name: 'Australia', currency: 'AUD', avgCost: 1400 }
  ]

  const stats = [
    {
      number: '95%',
      label: 'Successful Transitions',
      icon: <Target className='w-8 h-8' />
    },
    {
      number: '500+',
      label: 'Students Guided',
      icon: <Users className='w-8 h-8' />
    },
    {
      number: '24/7',
      label: 'Pre-Departure Support',
      icon: <MessageCircle className='w-8 h-8' />
    },
    {
      number: '30+',
      label: 'Destination Countries',
      icon: <Globe className='w-8 h-8' />
    }
  ]

  const totalBudget = Object.values(budgetCalculator).reduce(
    (sum, value) => sum + value,
    0
  )

  const handleItemCheck = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`
    if (checkedItems.includes(key)) {
      setCheckedItems(checkedItems.filter(item => item !== key))
    } else {
      setCheckedItems([...checkedItems, key])
    }
  }

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'budgeting':
        return (
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Budget Calculator
            </h3>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  Monthly Expenses
                </h4>

                <div className='space-y-4'>
                  {Object.entries(budgetCalculator).map(
                    ([category, amount]) => (
                      <div key={category} className='space-y-2'>
                        <div className='flex justify-between items-center'>
                          <label className='font-medium text-gray-700 capitalize'>
                            {category}
                          </label>
                          <span className='text-[#1E8A6E] font-bold'>
                            ${amount}
                          </span>
                        </div>
                        <input
                          type='range'
                          min='0'
                          max='2000'
                          value={amount}
                          onChange={e =>
                            setBudgetCalculator({
                              ...budgetCalculator,
                              [category]: parseInt(e.target.value)
                            })
                          }
                          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider'
                        />
                      </div>
                    )
                  )}
                </div>

                <div className='mt-6 p-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-xl text-white'>
                  <div className='text-center'>
                    <p className='text-sm opacity-90'>Total Monthly Budget</p>
                    <p className='text-3xl font-bold'>${totalBudget}</p>
                    <p className='text-sm opacity-90'>
                      Annual: ${totalBudget * 12}
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  Country Comparison
                </h4>

                <div className='space-y-3'>
                  {countries.map(country => (
                    <motion.button
                      key={country.id}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedCountry === country.id
                          ? 'bg-[#1E8A6E] text-white'
                          : 'bg-gray-50 hover:bg-[#E8F5F0]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className='flex justify-between items-center'>
                        <div>
                          <h5 className='font-semibold'>{country.name}</h5>
                          <p
                            className={`text-sm ${
                              selectedCountry === country.id
                                ? 'text-white/80'
                                : 'text-gray-600'
                            }`}
                          >
                            Avg. Monthly Cost
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='font-bold'>${country.avgCost}</p>
                          {/* <p
                            className={`text-sm ${
                              selectedCountry === country.id
                                ? 'text-white/80'
                                : 'text-gray-600'
                            }`}
                          >
                            {country.currency}
                          </p> */}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'travel':
        return (
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Travel Arrangements
            </h3>

            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  Essential Travel Tips
                </h4>
                <div className='space-y-4'>
                  {travelTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      className='bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className='flex items-start space-x-3'>
                        <div className='p-2 bg-[#E8F5F0] rounded-lg'>
                          {tip.icon}
                        </div>
                        <div>
                          <h5 className='font-semibold text-gray-900'>
                            {tip.title}
                          </h5>
                          <p className='text-gray-600 text-sm'>
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  Packing Checklist
                </h4>
                <div className='space-y-4'>
                  {packingChecklist.map((category, categoryIndex) => (
                    <motion.div
                      key={categoryIndex}
                      className='bg-white rounded-xl p-4 shadow-lg'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1 }}
                    >
                      <div className='flex items-center mb-3'>
                        <div className='p-2 bg-[#E8F5F0] rounded-lg text-[#1E8A6E] mr-3'>
                          {category.icon}
                        </div>
                        <h5 className='font-semibold text-gray-900'>
                          {category.category}
                        </h5>
                      </div>

                      <div className='space-y-2'>
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className='flex items-center space-x-3 cursor-pointer'
                            onClick={() =>
                              handleItemCheck(categoryIndex, itemIndex)
                            }
                            whileHover={{ x: 5 }}
                          >
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                checkedItems.includes(
                                  `${categoryIndex}-${itemIndex}`
                                )
                                  ? 'bg-[#1E8A6E] border-[#1E8A6E]'
                                  : 'border-gray-300'
                              }`}
                            >
                              {checkedItems.includes(
                                `${categoryIndex}-${itemIndex}`
                              ) && (
                                <CheckCircle className='w-3 h-3 text-white' />
                              )}
                            </div>
                            <span
                              className={`text-sm ${
                                item.essential
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-600'
                              }`}
                            >
                              {item.name}
                              {item.essential && (
                                <span className='text-red-500 ml-1'>*</span>
                              )}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'arrival':
        return (
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              What to Expect Upon Arrival
            </h3>

            <div className='space-y-6'>
              {arrivalExpectations.map((phase, index) => (
                <motion.div
                  key={index}
                  className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className='flex items-start space-x-4'>
                    <div className='p-3 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-lg text-white font-bold text-lg'>
                      {index + 1}
                    </div>

                    <div className='flex-1'>
                      <h4 className='text-xl font-bold text-gray-900 mb-3'>
                        {phase.phase}
                      </h4>

                      <div className='grid md:grid-cols-2 gap-4 mb-4'>
                        {phase.tasks.map((task, taskIndex) => (
                          <div
                            key={taskIndex}
                            className='flex items-center space-x-2'
                          >
                            <CheckCircle className='w-5 h-5 text-[#1E8A6E]' />
                            <span className='text-gray-700'>{task}</span>
                          </div>
                        ))}
                      </div>

                      <div className='p-3 bg-[#E8F5F0] rounded-lg'>
                        <p className='text-[#1E8A6E] font-medium text-sm'>
                          💡 Tip: {phase.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#E8F5F0] to-white'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Pre-Departure Advice</title>
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
          <div className='text-center mb-8'>
            <motion.div
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E8F5F0] to-[#F0FDF9] rounded-full mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <Plane className='w-5 h-5 text-[#1E8A6E] mr-2' />
              <span className='text-[#1E8A6E] font-medium'>
                Pre-Departure Advice
              </span>
            </motion.div>

            <motion.h1
              className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Prepare for Your
              <span className='bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] bg-clip-text text-transparent block'>
                Journey Abroad
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We help students prepare for their move abroad by offering advice
              on accommodation, budgeting, travel arrangements, and what to
              expect upon arrival — so you feel ready from day one.
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Preparation Guide
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button> */}
            </motion.div>
          </div>

          {/* Category Navigation */}
          <motion.div
            className='flex flex-wrap justify-center gap-4 '
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white shadow-lg'
                    : 'bg-white/70 text-gray-700 hover:bg-[#E8F5F0] hover:text-[#1E8A6E]'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span>{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className='py-6 px-4'>
        <div className='max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {renderCategoryContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      {/* <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4 text-white/80">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

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
              <span className='text-[#1E8A6E]'>Preparation Journey?</span>
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Get personalized pre-departure guidance from our experts. We'll
              help you prepare for every aspect of your international study
              experience.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Personalized Advice
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button> */}

              <a href='https://wa.me/+8801345661988' target='_blank'>
                <motion.button
                  className='px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center'
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle className='mr-2 w-5 h-5' />
                  Chat with Expert
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PreDepartureAdvice
