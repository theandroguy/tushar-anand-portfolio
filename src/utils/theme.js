/**
 * Get the system theme preference
 * @returns {'dark'|'light'} The system theme preference
 */
export const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light'; // Default fallback
};

/**
 * Apply theme class to HTML document
 * @param {string} theme - The theme to apply ('light', 'dark', or 'system')
 */
export const applyTheme = (theme) => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'light') {
    root.classList.remove('dark');
  } else if (theme === 'system') {
    // Apply based on system preference
    if (getSystemTheme() === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
};

/**
 * Store theme preference in localStorage
 * @param {string} theme - The theme to store ('light', 'dark', or 'system')
 */
export const storeThemePreference = (theme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
};

/**
 * Get stored theme preference from localStorage
 * @returns {string|null} The stored theme or null if not found
 */
export const getStoredThemePreference = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme');
  }
  return null;
};

/**
 * Initialize theme based on stored preference or system default
 * @returns {string} The initialized theme ('light', 'dark', or 'system')
 */
export const initializeTheme = () => {
  const storedTheme = getStoredThemePreference();
  
  if (storedTheme) {
    applyTheme(storedTheme);
    return storedTheme;
  }
  
  // Default to system preference
  applyTheme('system');
  storeThemePreference('system');
  return 'system';
};