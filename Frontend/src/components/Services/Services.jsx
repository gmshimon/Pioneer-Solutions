import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Globe2,
  BookOpen,
  Plane,
  Phone
} from 'lucide-react';
import { SiSemanticscholar } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Study Consultation',
      description: 'Personalized sessions to help students choose the right course, university, and pathway.'
    },
    {
      icon: GraduationCap,
      title: 'University/College Placement',
      description: 'Full support with selecting institutions and managing the application process.'
    },
        {
      icon: SiSemanticscholar,
      title: 'Scholarship Information',
      description: 'Assistance with exploring and applying for available scholarship opportunities.'
    },
    {
      icon: Globe2,
      title: 'Visa Assistance',
      description: 'Guidance with preparing, submitting, and tracking student visa applications.'
    },
    {
      icon: Plane,
      title: 'Travel & Pre-Departure Support',
      description: 'Help with travel arrangements and pre-departure preparations.'
    },
    {
      icon: Phone,
      title: 'Responsive Support',
      description: 'Quick and helpful communication whenever students need assistance.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#E8F5F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Comprehensive Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We offer a wide range of educational consulting services to help you achieve your study abroad dreams
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#1E8A6E]/20"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 p-4 bg-gradient-to-br from-[#E8F5F0] to-[#F0FDF9] rounded-full group-hover:from-[#1E8A6E] group-hover:to-[#25B08B] transition-all duration-300"
                  >
                    <IconComponent className="w-8 h-8 text-[#1E8A6E] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#1E8A6E] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 ">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
