// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router';
import './StudyComponent.css';
import malaysiaUni from '../../assets/study-aborad-malaysia.jpg';


const StudyComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="study-section w-full py-10 relative bg-gray-50"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#1E8A6E] mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Study Abroad in Malaysia
        </motion.h2>
        {/* Banner Image */}
        <img
          src={malaysiaUni}
          alt="Study in Malaysia"
          className="w-full h-96 rounded-2xl shadow-2xl object-cover mx-auto mb-10"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover why Malaysia is a top choice for international students: affordable, safe, and home to world-class education.
        </motion.p>
      </div>
      {/* Call to Action Button */}
      <div className="mt-8 text-center">
        <Link to="/study/malaysia">
          <motion.button
            className="px-8 py-3 bg-[#1E8A6E] text-white rounded-full text-lg font-medium shadow-lg hover:bg-[#176f59] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            See More
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default StudyComponent;
