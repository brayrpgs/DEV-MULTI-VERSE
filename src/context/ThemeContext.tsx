import React, { createContext } from 'react'
import type { Theme } from '../enums/Theme'

/**
 * ThemeContext provides the current theme and a method to toggle between themes.
 */
export interface ThemeContextType {
  theme: Theme
  toggleTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
