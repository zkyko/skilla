import React, { createContext, useContext, ReactNode } from 'react';
import { colors, Colors } from './colors';
import { typography, Typography } from './typography';
import { spacing, Spacing } from './spacing';

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
}

const theme: Theme = {
  colors,
  typography,
  spacing,
};

const ThemeContext = createContext<Theme>(theme);

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

