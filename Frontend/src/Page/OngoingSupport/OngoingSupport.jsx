import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Calendar,
  BookOpen,
  Target,
  Shield,
  Phone,
  Mail,
  AlertCircle,
  ThumbsUp,
  Headphones,
  Globe,
  Home,
  Coffee,
  Smile,
  TrendingUp,
  Award,
  Lightbulb,
  HelpCircle,
  Settings,
  MapPin,
  Camera,
  Music,
  Utensils,
  Gamepad2,
  Book,
  Briefcase,
  GraduationCap,
  Zap,
  Compass,
  Wifi,
  Smartphone,
  Video,
  FileText,
  Download
} from 'lucide-react';

const OngoingSupport = () => {
  const [activeSupport, setActiveSupport] = useState('general');
  const [selectedMood, setSelectedMood] = useState(null);
  const [showChatBot, setShowChatBot] = useState(false);
  const [supportTickets, setSupportTickets] = useState([
    { id: 1, type: 'Academic', status: 'resolved', priority: 'high' },
    { id: 2, type: 'Housing', status: 'pending', priority: 'medium' },
    { id: 3, type: 'Social', status: 'in-progress', priority: 'low' }
  ]);

  const supportCategories = [
    {
      id: 'general',
      title: 'General Queries',
      icon: <HelpCircle className="w-6 h-6" />,
      description: 'Get answers to common questions',
      color: 'from-[#1E8A6E] to-[#25B08B]'
    },
    {
      id: 'adjustment',
      title: 'Adjustment Tips',
      icon: <Compass className="w-6 h-6" />,
      description: 'Navigate cultural and social adaptation',
      color: 'from-[#25B08B] to-[#1E8A6E]'
    },
    {
      id: 'community',
      title: 'Community Support',
      icon: <Users className="w-6 h-6" />,
      description: 'Connect with fellow students',
      color: 'from-[#1E8A6E] to-[#25B08B]'
    },
    {
      id: 'wellness',
      title: 'Mental Wellness',
      icon: <Heart className="w-6 h-6" />,
      description: 'Support for emotional well-being',
      color: 'from-[#25B08B] to-[#1E8A6E]'
    }
  ];

  const adjustmentTips = [
    {
      category: 'Academic Adjustment',
      tips: [
        {
          title: 'Understand the Grading System',
          description: 'Learn how grades work in your new country',
          icon: <GraduationCap className="w-6 h-6" />,
          difficulty: 'Easy'
        },
        {
          title: 'Participate in Class Discussions',
          description: 'Engage actively to improve language and understanding',
          icon: <MessageCircle className="w-6 h-6" />,
          difficulty: 'Medium'
        },
        {
          title: 'Form Study Groups',
          description: 'Collaborate with classmates for better learning',
          icon: <Users className="w-6 h-6" />,
          difficulty: 'Easy'
        }
      ]
    },
    {
      category: 'Social Integration',
      tips: [
        {
          title: 'Join Student Organizations',
          description: 'Find clubs that match your interests',
          icon: <Star className="w-6 h-6" />,
          difficulty: 'Easy'
        },
        {
          title: 'Attend Cultural Events',
          description: 'Participate in local festivals and celebrations',
          icon: <Calendar className="w-6 h-6" />,
          difficulty: 'Medium'
        },
        {
          title: 'Practice Local Language',
          description: 'Improve communication with locals',
          icon: <Globe className="w-6 h-6" />,
          difficulty: 'Hard'
        }
      ]
    },
    {
      category: 'Daily Life Skills',
      tips: [
        {
          title: 'Learn Public Transportation',
          description: 'Master the local transit system',
          icon: <MapPin className="w-6 h-6" />,
          difficulty: 'Medium'
        },
        {
          title: 'Explore Local Cuisine',
          description: 'Try new foods and cooking techniques',
          icon: <Utensils className="w-6 h-6" />,
          difficulty: 'Easy'
        },
        {
          title: 'Manage Finances',
          description: 'Budget effectively in a new currency',
          icon: <Briefcase className="w-6 h-6" />,
          difficulty: 'Medium'
        }
      ]
    }
  ];

  const supportServices = [
    {
      title: '24/7 Helpline',
      description: 'Round-the-clock support for urgent matters',
      icon: <Phone className="w-8 h-8" />,
      availability: 'Always Available',
      responseTime: 'Immediate'
    },
    {
      title: 'Live Chat Support',
      description: 'Instant messaging with support agents',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: '9 AM - 9 PM',
      responseTime: '< 5 minutes'
    },
    {
      title: 'Video Consultations',
      description: 'Face-to-face sessions with counselors',
      icon: <Video className="w-8 h-8" />,
      availability: 'By Appointment',
      responseTime: 'Same Day'
    },
    {
      title: 'Peer Mentorship',
      description: 'Connect with experienced students',
      icon: <Users className="w-8 h-8" />,
      availability: 'Flexible',
      responseTime: '< 24 hours'
    }
  ];

  const communityFeatures = [
    {
      title: 'Student Forums',
      description: 'Discuss topics with fellow international students',
      icon: <MessageCircle className="w-6 h-6" />,
      members: '2,500+',
      activity: 'Very Active'
    },
    {
      title: 'Study Groups',
      description: 'Form or join academic study sessions',
      icon: <BookOpen className="w-6 h-6" />,
      members: '800+',
      activity: 'Active'
    },
    {
      title: 'Social Events',
      description: 'Attend meetups and cultural gatherings',
      icon: <Calendar className="w-6 h-6" />,
      members: '1,200+',
      activity: 'Weekly Events'
    },
    {
      title: 'Hobby Clubs',
      description: 'Connect through shared interests and hobbies',
      icon: <Heart className="w-6 h-6" />,
      members: '600+',
      activity: 'Regular Meetups'
    }
  ];

  const moodOptions = [
    { emoji: '😊', label: 'Great', color: 'text-green-500' },
    { emoji: '🙂', label: 'Good', color: 'text-blue-500' },
    { emoji: '😐', label: 'Okay', color: 'text-yellow-500' },
    { emoji: '😔', label: 'Down', color: 'text-orange-500' },
    { emoji: '😰', label: 'Stressed', color: 'text-red-500' }
  ];

  const wellnessResources = [
    {
      title: 'Mindfulness Sessions',
      description: 'Guided meditation and relaxation techniques',
      icon: <Heart className="w-6 h-6" />,
      duration: '15-30 min',
      type: 'Interactive'
    },
    {
      title: 'Counseling Services',
      description: 'Professional mental health support',
      icon: <Headphones className="w-6 h-6" />,
      duration: '45-60 min',
      type: 'One-on-One'
    },
    {
      title: 'Stress Management',
      description: 'Learn coping strategies for academic pressure',
      icon: <Shield className="w-6 h-6" />,
      duration: '20-40 min',
      type: 'Workshop'
    },
    {
      title: 'Peer Support Groups',
      description: 'Share experiences with other students',
      icon: <Users className="w-6 h-6" />,
      duration: '60-90 min',
      type: 'Group Session'
    }
  ];

  const stats = [
    { number: "98%", label: "Student Satisfaction", icon: <ThumbsUp className="w-8 h-8" /> },
    { number: "24/7", label: "Support Availability", icon: <Clock className="w-8 h-8" /> },
    { number: "5000+", label: "Students Supported", icon: <Users className="w-8 h-8" /> },
    { number: "<2hrs", label: "Average Response Time", icon: <Zap className="w-8 h-8" /> }
  ];

  const faqItems = [
    {
      question: "How can I get help with homesickness?",
      answer: "We offer counseling services, peer support groups, and regular check-ins to help you cope with homesickness. Our 24/7 helpline is always available."
    },
    {
      question: "What if I'm struggling academically?",
      answer: "We provide academic support through tutoring services, study groups, and consultation with academic advisors to help improve your performance."
    },
    {
      question: "How do I make friends in a new country?",
      answer: "Join our community events, student organizations, and hobby clubs. We also have a buddy system that pairs you with local students."
    },
    {
      question: "What support is available for emergencies?",
      answer: "Our 24/7 emergency helpline provides immediate assistance. We also have partnerships with local emergency services and hospitals."
    }
  ];

  const renderSupportContent = () => {
    switch (activeSupport) {
      case 'general':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Services</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {supportServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#E8F5F0] rounded-lg text-[#1E8A6E]">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Availability:</span>
                          <span className="text-sm font-medium text-[#1E8A6E]">{service.availability}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Response Time:</span>
                          <span className="text-sm font-medium text-[#1E8A6E]">{service.responseTime}</span>
                        </div>
                      </div>
                      
                      <motion.button
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Support
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h5 className="font-semibold text-gray-900 mb-2">{faq.question}</h5>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'adjustment':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Adjustment Tips & Strategies</h3>
            
            {adjustmentTips.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {category.tips.map((tip, tipIndex) => (
                    <motion.div
                      key={tipIndex}
                      className="p-4 border border-gray-100 rounded-xl hover:border-[#1E8A6E] transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-[#E8F5F0] rounded-lg text-[#1E8A6E] mr-3">
                          {tip.icon}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          tip.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {tip.difficulty}
                        </span>
                      </div>
                      
                      <h5 className="font-semibold text-gray-900 mb-2">{tip.title}</h5>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'community':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] rounded-lg text-white">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#1E8A6E]">{feature.members}</div>
                          <div className="text-xs text-gray-500">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-[#25B08B]">{feature.activity}</div>
                          <div className="text-xs text-gray-500">Activity Level</div>
                        </div>
                      </div>
                      
                      <motion.button
                        className="w-full px-4 py-2 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-lg font-medium hover:bg-[#1E8A6E] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Join Community
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'wellness':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mental Wellness Support</h3>
            
            {/* Mood Tracker */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">How are you feeling today?</h4>
              
              <div className="flex justify-center space-x-4 mb-6">
                {moodOptions.map((mood, index) => (
                  <motion.button
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedMood === index 
                        ? 'border-[#1E8A6E] bg-[#E8F5F0]' 
                        : 'border-gray-200 hover:border-[#1E8A6E]/50'
                    }`}
                    onClick={() => setSelectedMood(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className={`text-sm font-medium ${mood.color}`}>{mood.label}</div>
                  </motion.button>
                ))}
              </div>
              
              {selectedMood !== null && (
                <motion.div
                  className="p-4 bg-[#E8F5F0] rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-[#1E8A6E] font-medium text-center">
                    {selectedMood <= 1 ? "Great to hear you're doing well! Keep it up!" :
                     selectedMood === 2 ? "That's okay. Remember, it's normal to have ups and downs." :
                     "We're here to support you. Consider reaching out to our wellness resources."}
                  </p>
                </motion.div>
              )}
            </div>
            
            {/* Wellness Resources */}
            <div className="grid md:grid-cols-2 gap-6">
              {wellnessResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#E8F5F0] rounded-lg text-[#1E8A6E]">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Duration: {resource.duration}</span>
                        <span className="text-sm font-medium text-[#1E8A6E]">{resource.type}</span>
                      </div>
                      
                      <motion.button
                        className="w-full px-4 py-2 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Access Resource
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5F0] to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-[#1E8A6E]/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#25B08B]/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E8F5F0] to-[#F0FDF9] rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-5 h-5 text-[#1E8A6E] mr-2" />
              <span className="text-[#1E8A6E] font-medium">Ongoing Support</span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Continuous Support
              <span className="bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] bg-clip-text text-transparent block">
                Throughout Your Journey
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Our support doesn't end once you're accepted. We continue to assist with general queries, 
              offer adjustment tips, and help students adapt to their new environment for a comfortable transition.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowChatBot(true)}
              >
                Get Instant Support
                <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Support
              </motion.button>
            </motion.div>
          </div>

          {/* Support Category Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {supportCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeSupport === category.id
                    ? 'bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white shadow-lg'
                    : 'bg-white/70 text-gray-700 hover:bg-[#E8F5F0] hover:text-[#1E8A6E]'
                }`}
                onClick={() => setActiveSupport(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <div className="text-left">
                  <div>{category.title}</div>
                  <div className={`text-xs ${
                    activeSupport === category.id ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {category.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Support Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSupport}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {renderSupportContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Chat Bot Modal */}
      <AnimatePresence>
        {showChatBot && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowChatBot(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Support Chat</h3>
                <button
                  onClick={() => setShowChatBot(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="bg-[#E8F5F0] p-3 rounded-lg">
                  <p className="text-[#1E8A6E] font-medium">Hi! I'm here to help. What can I assist you with today?</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 text-sm bg-gray-100 hover:bg-[#E8F5F0] rounded-lg transition-colors">
                    Academic Help
                  </button>
                  <button className="p-2 text-sm bg-gray-100 hover:bg-[#E8F5F0] rounded-lg transition-colors">
                    Housing Issues
                  </button>
                  <button className="p-2 text-sm bg-gray-100 hover:bg-[#E8F5F0] rounded-lg transition-colors">
                    Social Support
                  </button>
                  <button className="p-2 text-sm bg-gray-100 hover:bg-[#E8F5F0] rounded-lg transition-colors">
                    Emergency Help
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E8A6E]"
                />
                <button className="px-4 py-3 bg-[#1E8A6E] text-white rounded-lg hover:bg-[#25B08B] transition-colors">
                  Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <motion.section 
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
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Support? <span className="text-[#1E8A6E]">We're Here for You</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't hesitate to reach out. Our dedicated support team is available 24/7 
              to help you succeed in your international education journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="mr-2 w-5 h-5" />
                Download Support Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OngoingSupport;