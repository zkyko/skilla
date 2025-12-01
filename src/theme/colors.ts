/**
 * Color palette extracted from Figma design tokens
 * All colors match the exact hex values from the design system
 */
export const colors = {
  // Background colors
  background: '#0b1a2a', // Primary dark background
  backgroundSecondary: '#071827',
  backgroundTertiary: '#082025',
  backgroundQuaternary: '#0f2830',
  backgroundDark: '#06121a',
  
  // Card background
  card: '#082025',
  
  // Primary colors
  primary: '#32ff8a', // Neon green
  primarySoft: '#e6fff4', // Light green tint
  
  // Accent colors
  accent: '#00140b',
  
  // Text colors
  textPrimary: '#ffffff', // White
  textSecondary: '#afc9c1', // Muted green-gray
  textMuted: '#ffffff59', // Semi-transparent white
  textMutedSecondary: '#ffffff2e', // More transparent white
  
  // Border colors
  border: '#ffffff14', // Semi-transparent white border
  borderSecondary: '#ffffff0a', // More transparent border
  
  // Utility colors
  black: '#000000',
  white: '#ffffff',
} as const;

export type Colors = typeof colors;

