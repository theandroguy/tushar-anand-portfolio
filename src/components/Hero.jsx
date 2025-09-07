import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Tech stack data with icons
  const techStack = [
    { name: 'React', color: 'text-blue-500', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'PHP', color: 'text-purple-500', bgColor: 'bg-purple-100 dark:bg-purple-900/30' },
    { name: 'HTML5', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'CSS3', color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Tailwind', color: 'text-cyan-500', bgColor: 'bg-cyan-100 dark:bg-cyan-900/30' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 md:space-y-16"
          >
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                variants={itemVariants}
                className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
              >
                {/* Greeting Badge */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Available for work
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                      Tushar Anand
                    </span>
                  </h1>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
                    Frontend Developer
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Building modern, responsive web applications with React, PHP, and more.
                  Passionate about crafting user-friendly interfaces with clean and efficient code.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <a 
                    href="#projects"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/25"
                  >
                    <span className="relative z-10">View Projects</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <a 
                    href="#contact"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/25 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <span>Contact Me</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="hidden sm:flex items-center justify-center lg:justify-start gap-8 pt-4"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">1+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
          
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Avatar */}
              <motion.div
                variants={imageVariants}
                className="flex items-center justify-center order-1 lg:order-2"
              >
                <div className="relative">
                  {/* Main Avatar */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-2 animate-spin-slow">
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-2">
                        <img
                          src="/my-photo.jpg"
                          alt="Tushar Anand - Frontend Developer"
                          className="w-full h-full object-cover rounded-full shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg rotate-12"
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg -rotate-12"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  Technologies I Work With
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group flex items-center gap-3 px-6 py-3 ${tech.bgColor} rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-default`}
                  >
                    <div className={`w-2 h-2 ${tech.color} bg-current rounded-full`}></div>
                    <span className={`font-medium ${tech.color}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;