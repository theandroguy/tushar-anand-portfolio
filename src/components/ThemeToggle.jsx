import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex space-x-2">
      {/* Light Mode Button */}
      <button 
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'light' 
            ? 'bg-blue-100 text-blue-600' 
            : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="Light mode"
        aria-label="Switch to light mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      
      {/* Dark Mode Button */}
      <button 
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'dark' 
            ? 'bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-yellow-400' 
            : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="Dark mode"
        aria-label="Switch to dark mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      
      {/* System Default Button */}
      <button 
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'system' 
            ? 'bg-blue-100 text-blue-600 dark:bg-gray-600 dark:text-blue-400' 
            : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        title="System default"
        aria-label="Use system theme settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;