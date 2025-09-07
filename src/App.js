import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects'; 
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { ThemeProvider } from './context/ThemeContext';

// Import Superman image
import supermanImg from './images/superman.png';

function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [direction, setDirection] = useState('up');
  const [currentPage, setCurrentPage] = useState('home');

  // Track previous scroll position with useRef
  const prevScrollY = useRef(0);

  // Handle routing based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fixed Superman animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set direction based on comparison with previous position
      if (currentScrollY > prevScrollY.current) {
        setDirection('down');
      } else {
        setDirection('up');
      }
      
      // Update ref
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this only runs once

  // Render the appropriate page based on current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return (
          <>
            {/* Hero Section - No top padding since it's after navbar */}
            <div className="pb-12 md:pb-16">
              <Hero />
            </div>
            
            {/* Resume Section */}
            <div className="py-12 md:py-16">
              <Resume />
            </div>
            
            {/* Projects Section */}
            <div className="py-12 md:py-16">
              <Projects />
            </div>
            
            {/* About Section with Tabs (Experience & Education) */}
            <section id="about" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with proper spacing */}
                <div className="text-center mb-8 md:mb-12">
                  <div className="inline-block mb-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      Professional Background
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Experience & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Education</span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    My professional journey and academic qualifications
                  </p>
                </div>
                
                {/* Tabs and Content Container */}
                <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Tabs Header */}
                  <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setActiveTab('experience')}
                        className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeTab === 'experience'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Experience</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('education')}
                        className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeTab === 'education'
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                            : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <span>Education</span>
                      </button>
                    </div>
                  </div>

                  {/* Tab Content with proper padding */}
                  <div className="p-6 md:p-8 lg:p-10">
                    {activeTab === 'experience' ? <Experience /> : <Education />}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Skills Section */}
            <div className="pb-8 md:pb-12">
              <Skills />
            </div>
            
            {/* Contact Section */}
            <div className="py-12 md:py-16">
              <Contact />
            </div>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Navbar */}
        <Navbar />
        
        {/* Superman Scrolling Animation - Fixed Version */}
        <div>
          <img
            src={supermanImg}
            alt="Superman"
            className={`superman-scroll ${direction}`}
            style={{
              position: 'fixed',
              top: '50%',
              right: '15px',
              transform: direction === 'up' 
                ? 'translateY(-50%) rotate(-10deg)' 
                : 'translateY(-50%) rotate(10deg)',
              width: '50px',
              height: 'auto',
              transition: 'transform 0.3s ease, top 0.3s ease',
              zIndex: 100,
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>

        {/* Main Content Container with Better Spacing */}
        <main>
          {renderPage()}
        </main>
        
        {/* Footer with proper spacing - only show on home page */}
        {currentPage === 'home' && (
          <div className="pt-6 md:pt-8">
            <Footer />
          </div>
        )}
      </div>

      {/* Improved CSS for Superman animation */}
      <style jsx>{`
        @keyframes fly-up {
          0% { transform: translateY(-50%) rotate(-10deg); }
          50% { transform: translateY(-60%) rotate(-15deg); }
          100% { transform: translateY(-50%) rotate(-10deg); }
        }
        
        @keyframes fly-down {
          0% { transform: translateY(-50%) rotate(10deg); }
          50% { transform: translateY(-40%) rotate(15deg); }
          100% { transform: translateY(-50%) rotate(10deg); }
        }
        
        .superman-scroll.up {
          animation: fly-up 2s ease-in-out infinite;
        }
        
        .superman-scroll.down {
          animation: fly-down 2s ease-in-out infinite;
        }

        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }

        /* Container utility for consistent max-width */
        .container {
          max-width: 1200px;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;