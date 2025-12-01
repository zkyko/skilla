import { Platform } from 'react-native';

/**
 * Typography system matching Figma design tokens
 * Uses Space Grotesk font family with exact sizes and line heights
 */
const fontFamily = Platform.select({
  ios: 'Space Grotesk',
  android: 'Space Grotesk',
  default: 'Space Grotesk',
});

export const typography = {
  // Title styles
  title: {
    fontFamily,
    fontSize: 22,
    fontWeight: '400' as const,
    lineHeight: 26.4,
  },
  titleBold: {
    fontFamily,
    fontSize: 22,
    fontWeight: '700' as const,
    lineHeight: 26.4,
  },
  
  // Subtitle styles
  subtitle: {
    fontFamily,
    fontSize: 18,
    fontWeight: '400' as const,
    lineHeight: 23.4,
  },
  subtitleBold: {
    fontFamily,
    fontSize: 18,
    fontWeight: '700' as const,
    lineHeight: 23.4,
  },
  
  // Body styles
  body: {
    fontFamily,
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 19.14,
  },
  bodyBold: {
    fontFamily,
    fontSize: 15,
    fontWeight: '700' as const,
    lineHeight: 19.14,
  },
  bodyMedium: {
    fontFamily,
    fontSize: 15,
    fontWeight: '500' as const,
    lineHeight: 19.14,
  },
  
  // Body small styles
  bodySmall: {
    fontFamily,
    fontSize: 13,
    fontWeight: '400' as const,
    lineHeight: 16.59,
  },
  bodySmallBold: {
    fontFamily,
    fontSize: 13,
    fontWeight: '700' as const,
    lineHeight: 16.59,
  },
  bodySmallMedium: {
    fontFamily,
    fontSize: 13,
    fontWeight: '500' as const,
    lineHeight: 16.59,
  },
  
  // Caption styles
  caption: {
    fontFamily,
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 15.31,
  },
  captionMedium: {
    fontFamily,
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 15.31,
  },
  
  // Additional sizes from design tokens
  large: {
    fontFamily,
    fontSize: 20,
    fontWeight: '400' as const,
    lineHeight: 25.52,
  },
  largeMedium: {
    fontFamily,
    fontSize: 20,
    fontWeight: '500' as const,
    lineHeight: 25.52,
  },
  
  medium: {
    fontFamily,
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 20.42,
  },
  mediumMedium: {
    fontFamily,
    fontSize: 16,
    fontWeight: '500' as const,
    lineHeight: 20.42,
  },
  
  small: {
    fontFamily,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 17.86,
  },
  smallMedium: {
    fontFamily,
    fontSize: 14,
    fontWeight: '500' as const,
    lineHeight: 17.86,
  },
  
  tiny: {
    fontFamily,
    fontSize: 11,
    fontWeight: '400' as const,
    lineHeight: 14.04,
  },
  tinyMedium: {
    fontFamily,
    fontSize: 11,
    fontWeight: '500' as const,
    lineHeight: 14.04,
  },
  
  extraTiny: {
    fontFamily,
    fontSize: 8,
    fontWeight: '400' as const,
    lineHeight: 10.21,
  },
} as const;

export type Typography = typeof typography;

