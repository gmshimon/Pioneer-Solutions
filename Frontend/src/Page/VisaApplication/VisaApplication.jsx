import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
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
  MessageCircle,
  Camera,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  ThumbsUp
} from 'lucide-react';
import { BsPassport } from 'react-icons/bs';

const VisaApplication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkedDocuments, setCheckedDocuments] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState('student');
  const [showInterviewTips, setShowInterviewTips] = useState(false);

  const visaSteps = [
    {
      id: 1,
      title: "Document Preparation",
      description: "Gather and prepare all required documents",
      icon: <FileText className="w-8 h-8" />,
      details: "We help you compile all necessary documents including passport, photos, financial statements, and academic records",
      duration: "2-3 days"
    },
    {
      id: 2,
      title: "Application Submission",
      description: "Complete and submit your visa application",
      icon: <Upload className="w-8 h-8" />,
      details: "Expert assistance in filling out visa forms accurately and submitting through proper channels",
      duration: "1-2 days"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Prepare for your visa interview with confidence",
      icon: <MessageCircle className="w-8 h-8" />,
      details: "Comprehensive interview coaching including common questions, proper documentation, and presentation tips",
      duration: "3-5 days"
    },
    {
      id: 4,
      title: "Visa Approval",
      description: "Track your application and receive your visa",
      icon: <CheckCircle className="w-8 h-8" />,
      details: "We monitor your application status and guide you through the final steps to receive your approved visa",
      duration: "2-4 weeks"
    }
  ];

  const requiredDocuments = [
    {
      name: "Valid BsPassport",
      description: "Must be valid for at least 6 months",
      icon: <BsPassport className="w-6 h-6" />,
      required: true
    },
    {
      name: "BsPassport Photos",
      description: "Recent passport-sized photographs",
      icon: <Camera className="w-6 h-6" />,
      required: true
    },
    {
      name: "Financial Statements",
      description: "Bank statements and financial proof",
      icon: <CreditCard className="w-6 h-6" />,
      required: true
    },
    {
      name: "Acceptance Letter",
      description: "Official university acceptance letter",
      icon: <BookOpen className="w-6 h-6" />,
      required: true
    },
    {
      name: "Academic Transcripts",
      description: "Official academic records",
      icon: <Award className="w-6 h-6" />,
      required: true
    },
    {
      name: "Medical Certificate",
      description: "Health examination report",
      icon: <Shield className="w-6 h-6" />,
      required: false
    }
  ];

  const interviewTips = [
    {
      title: "Be Honest and Clear",
      description: "Answer all questions truthfully and clearly",
      icon: <ThumbsUp className="w-6 h-6 text-[#1E8A6E]" />
    },
    {
      title: "Prepare Your Documents",
      description: "Organize all documents in a clear folder",
      icon: <FileText className="w-6 h-6 text-[#1E8A6E]" />
    },
    {
      title: "Know Your Study Plan",
      description: "Be clear about your course and career goals",
      icon: <Target className="w-6 h-6 text-[#1E8A6E]" />
    },
    {
      title: "Dress Professionally",
      description: "Make a good first impression with proper attire",
      icon: <Users className="w-6 h-6 text-[#1E8A6E]" />
    }
  ];

  const visaTypes = [
    {
      id: 'student',
      name: 'Student Visa',
      description: 'For full-time study programs',
      processingTime: '2-4 weeks',
      validity: 'Duration of study'
    },
    {
      id: 'exchange',
      name: 'Exchange Visa',
      description: 'For exchange programs',
      processingTime: '1-3 weeks',
      validity: 'Program duration'
    },
    {
      id: 'research',
      name: 'Research Visa',
      description: 'For research activities',
      processingTime: '3-6 weeks',
      validity: 'Research period'
    }
  ];

  const stats = [
    { number: "99%", label: "Visa Success Rate", icon: <Target className="w-8 h-8" /> },
    { number: "1000+", label: "Visas Processed", icon: <BsPassport className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <MessageCircle className="w-8 h-8" /> },
    { number: "20+", label: "Countries Covered", icon: <MapPin className="w-8 h-8" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % visaSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDocumentCheck = (index) => {
    if (checkedDocuments.includes(index)) {
      setCheckedDocuments(checkedDocuments.filter(i => i !== index));
    } else {
      setCheckedDocuments([...checkedDocuments, index]);
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E8F5F0] to-[#F0FDF9] rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <BsPassport className="w-5 h-5 text-[#1E8A6E] mr-2" />
                <span className="text-[#1E8A6E] font-medium">Visa Application</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Student 
                <span className="bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] bg-clip-text text-transparent">
                  Visa
                </span>
                <br />Application
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We offer step-by-step guidance for your student visa application. From preparing the required documents 
                to providing interview tips, we ensure you meet all the necessary requirements with confidence and ease.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Visa Process
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setShowInterviewTips(!showInterviewTips)}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Interview Tips
                </motion.button>
              </div>

              {/* Visa Type Selector */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {visaTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedVisaType === type.id 
                        ? 'bg-[#1E8A6E] text-white' 
                        : 'bg-white/70 text-gray-700 hover:bg-[#E8F5F0]'
                    }`}
                    onClick={() => setSelectedVisaType(type.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Interactive Visa Tracker */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#1E8A6E] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Visa Application Tracker</span>
                  </div>
                  
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl p-4 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <BsPassport className="w-6 h-6" />
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  {visaSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        activeStep === index 
                          ? 'border-[#1E8A6E] bg-[#E8F5F0]/50' 
                          : 'border-gray-200 bg-white/50'
                      }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          activeStep === index ? 'bg-[#1E8A6E] text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                          <span className="text-xs text-[#1E8A6E] font-medium">{step.duration}</span>
                        </div>
                        {activeStep >= index && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Required <span className="text-[#1E8A6E]">Documents</span> Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive checklist to ensure you have all necessary documents ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer ${
                  checkedDocuments.includes(index) 
                    ? 'border-[#1E8A6E] bg-[#E8F5F0]/30' 
                    : 'border-gray-100 hover:border-[#1E8A6E]/30'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleDocumentCheck(index)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    checkedDocuments.includes(index) ? 'bg-[#1E8A6E] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {doc.icon}
                  </div>
                  
                  <motion.div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      checkedDocuments.includes(index) 
                        ? 'bg-[#1E8A6E] border-[#1E8A6E]' 
                        : 'border-gray-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {checkedDocuments.includes(index) && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h3>
                <p className="text-gray-600 mb-3">{doc.description}</p>
                
                {doc.required && (
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-500 font-medium">Required</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#E8F5F0] rounded-full">
              <CheckCircle className="w-5 h-5 text-[#1E8A6E]" />
              <span className="text-[#1E8A6E] font-medium">
                {checkedDocuments.length} of {requiredDocuments.length} documents checked
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interview Tips Section */}
      <AnimatePresence>
        {showInterviewTips && (
          <motion.section
            className="py-20 px-4 bg-gradient-to-br from-[#E8F5F0] to-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Visa <span className="text-[#1E8A6E]">Interview</span> Tips
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Expert advice to help you succeed in your visa interview
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {interviewTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#E8F5F0] rounded-lg">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] max-w-7xl mx-auto"
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
              Ready to Start Your <span className="text-[#1E8A6E]">Visa Application?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our visa experts guide you through every step of the process. 
              Get started today and secure your student visa with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#1E8A6E] to-[#25B08B] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Application
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#1E8A6E] text-[#1E8A6E] rounded-xl font-semibold hover:bg-[#1E8A6E] hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Expert
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisaApplication;