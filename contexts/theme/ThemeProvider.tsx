// Theme provider
import React, { useState } from 'react';
import { ThemeContext } from './themeContext';

// theme state
export interface ThemeState {
  theme: 'indigo' | 'pink' | 'green' | 'yellow';
}

// Theme Provider
const THEME_INITIAL_STATE: ThemeState = {
  theme: 'indigo',
}

interface Props {
  children: React.ReactNode;
}
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // method for change theme
  const changeTheme = (theme: string) => {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}