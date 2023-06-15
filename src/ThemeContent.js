import React, { useState, useEffect, useMemo } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light

  // On component mount, we check whether user has a set preference in their system's OS, or if they've saved one 
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, []);

  // To toggle between dark and light modes
  const toggle = () => {
    localStorage.setItem('dark', !dark);
    setDark(!dark);
  };

  const value = useMemo(() => {
    return {
      dark,
      toggle,
    };
  }, [dark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}