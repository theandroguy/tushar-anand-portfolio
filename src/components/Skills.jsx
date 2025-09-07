import React, { useState } from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

// Group skills by category
const groupedSkills = {
  programming: skillsData.filter(skill => skill.category === 'programming'),
  frontend: skillsData.filter(skill => skill.category === 'frontend'),
  mobile: skillsData.filter(skill => skill.category === 'mobile'),
  database: skillsData.filter(skill => skill.category === 'database'),
  api: skillsData.filter(skill => skill.category === 'api'),
  tools: skillsData.filter(skill => skill.category === 'tools')
};

// Define category info
const categoryInfo = {
  programming: {
    label: 'Programming',
    icon: '💻',
    color: 'from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700',
    description: 'Programming languages and core development skills'
  },
  frontend: {
    label: 'Frontend & Mobile',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700',
    description: 'Building responsive, modern user interfaces with the latest technologies'
  },
  database: {
    label: 'Database & Cloud',
    icon: '☁️',
    color: 'from-green-400 to-green-600 dark:from-green-500 dark:to-green-700',
    description: 'Database management and cloud platform expertise'
  },
  api: {
    label: 'APIs & Integration',
    icon: '🔌',
    color: 'from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700',
    description: 'API integration and third-party service connectivity'
  },
  tools: {
    label: 'Tools & Technology',
    icon: '🛠️',
    color: 'from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700',
    description: 'Development tools and technologies that enhance productivity'
  }
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-12 md:space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Technical Expertise
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, tools, and frameworks that I use to build exceptional digital experiences.
            </p>
          </motion.div>
          
          {/* Category Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {Object.keys(categoryInfo).map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative group bg-gradient-to-br ${categoryInfo[category].color} rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        {categoryInfo[category].icon}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                          {categoryInfo[category].label}
                        </h3>
                        <div className="text-white/80 text-sm">
                          {groupedSkills[category].length} skills
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                      {categoryInfo[category].description}
                    </p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {groupedSkills[category].map(skill => (
                        <span 
                          key={skill.name} 
                          className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium hover:bg-white/30 transition-colors duration-200 cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;