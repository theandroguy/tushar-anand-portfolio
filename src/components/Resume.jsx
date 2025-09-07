import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('resume.json');

  // Handle PDF download
  const handleDownload = () => {
    setIsDownloading(true);
    // Create a link element
    const link = document.createElement('a');
    link.href = '/tushar_anand_resume.pdf';
    link.download = 'Tushar_Anand_Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloading(false);
  };
  
  // Handle PDF preview
  const handlePreview = () => {
    window.open('/tushar_anand_resume.pdf', '_blank');
  };

  const tabs = [
    { id: 'resume.json', name: 'resume.json', type: 'JSON' },
    { id: 'skills.js', name: 'skills.js', type: 'JS' },
    { id: 'contact.md', name: 'contact.md', type: 'MD' }
  ];

  const codeContent = {
    'resume.json': [
      '  "name": "Tushar Anand",',
      '  "position": "Junior Software Developer",',
      '  "experience": "1+ years",',
      '  "location": "Bhagalpur, India",',
      '  "skills": ["ReactJS", "Java", "JavaScript", "Python", "PHP"],',
      '  "education": "B.Tech Mechanical Engineering",',
      '  "languages": ["English", "Hindi"],',
      '  "lastUpdated": "September 2025"'
    ],
    'skills.js': [
      '  programming: ["Java", "JavaScript", "PHP", "Python"],',
      '  frontend: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS"],',
      '  mobile: ["Android Development"],',
      '  database: ["Firebase", "Supabase", "Google Cloud Console"],',
      '  api: ["Bunny.net", "PhonePe", "Stripe", "Zoho Mail API", "Gemini API", "Google Maps API"],',
      '  tools: ["Git", "Android Studio", "TensorFlow"]'
    ],
    'contact.md': [
      '  📧 **Email**: tushar.anand.bpmce@gmail.com',
      '  📱 **Phone**: +91-9060177959',
      '  🌐 **Website**: tushar.com',
      '  💼 **LinkedIn**: /in/tusharanand2000',
      '  🐙 **GitHub**: /tusharanand'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto space-y-8 md:space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Resume Download
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Get My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download my complete resume or view specific sections. Available in multiple formats for your convenience.
            </p>
          </motion.div>

          {/* Code Editor Style Resume Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            {/* Editor Header with Tabs */}
            <div className="bg-gray-100 dark:bg-[#252526] px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Window Controls */}
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex space-x-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'bg-white dark:bg-[#1E1E1E] text-gray-900 dark:text-gray-100 border-t border-l border-r border-gray-200 dark:border-gray-600'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* File Info */}
                <div className="hidden sm:flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Saved
                  </span>
                  <span>{tabs.find(tab => tab.id === activeTab)?.type}</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
            
            {/* Line Numbers and Code Content */}
            <div className="flex bg-white dark:bg-[#1E1E1E]">
              {/* Line Numbers */}
              <div className="bg-gray-50 dark:bg-[#252526] px-3 py-6 border-r border-gray-200 dark:border-gray-700">
                <div className="font-mono text-xs text-gray-400 dark:text-gray-600 space-y-2 select-none">
                  <div>1</div>
                  {codeContent[activeTab].map((_, index) => (
                    <div key={index}>{index + 2}</div>
                  ))}
                  <div>{codeContent[activeTab].length + 2}</div>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="flex-1 font-mono text-sm p-6 overflow-x-auto">
                <div className="space-y-2">
                  <div className="text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-[#569CD6]">const</span>
                    <span className="text-gray-900 dark:text-gray-100 mx-2">{activeTab.split('.')[0]}</span>
                    <span className="text-blue-600 dark:text-[#569CD6]">=</span>
                    <span className="text-gray-900 dark:text-gray-100 mx-2">{'{'}</span>
                  </div>
                  
                  {codeContent[activeTab].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-700 dark:text-gray-300 pl-4"
                    >
                      {activeTab === 'contact.md' ? (
                        <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>') }} />
                      ) : (
                        <>
                          <span className="text-blue-500 dark:text-[#9CDCFE]">
                            {line.split(':')[0]}
                          </span>
                          <span className="text-gray-900 dark:text-gray-100">:</span>
                          <span className="text-green-600 dark:text-[#CE9178] ml-2">
                            {line.split(':').slice(1).join(':')}
                          </span>
                        </>
                      )}
                    </motion.div>
                  ))}
                  
                  <div className="text-gray-900 dark:text-gray-100">{'}'}</div>
                </div>
              </div>
            </div>
            
            {/* Status Bar & Action Buttons */}
            <div className="bg-blue-600 dark:bg-[#007ACC] px-6 py-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Status Info */}
                <div className="flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ready to download</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{codeContent[activeTab].length + 2} lines</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isDownloading ? (
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePreview}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Preview</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Always up-to-date</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>ATS-friendly format</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant download</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;