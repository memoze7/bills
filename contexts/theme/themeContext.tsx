import React from 'react'

// type for ThemeContextType
interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}


// create context for theme
export const ThemeContext = React.createContext({} as ThemeContextType)