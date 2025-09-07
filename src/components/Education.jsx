import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/Education';

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div 
      className="space-y-4 sm:space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {educationData.map((edu, index) => (
        <motion.div 
          key={index}
          className="bg-gray-50 dark:bg-gray-700 bg-opacity-50 p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{edu.period}</span>
          </div>
          {edu.grade && (
            <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">{edu.grade}</p>
          )}
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{edu.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;