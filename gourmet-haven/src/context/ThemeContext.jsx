import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark-mode' : 'light-mode');
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light-mode') return 'dark-mode';
      if (prevTheme === 'dark-mode') return 'dim-mode';
      if (prevTheme === 'dim-mode') return 'auto';
      return 'light-mode'; // auto to light-mode
    });
  };

  // For auto mode, listen to system changes
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        document.body.className = e.matches ? 'dark-mode' : 'light-mode';
      };
      
      mediaQuery.addEventListener('change', handleChange);
      // Set initial value
      document.body.className = mediaQuery.matches ? 'dark-mode' : 'light-mode';
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 