import React, { ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface CardProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  padding?: number;
  borderRadius?: number;
  elevation?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding,
  borderRadius = 8,
  elevation = 2,
}) => {
  const theme = useTheme();
  const cardPadding = padding ?? theme.spacing.md;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          padding: cardPadding,
          borderRadius,
          ...(elevation > 0 && {
            shadowColor: theme.colors.black,
            shadowOffset: { width: 0, height: elevation },
            shadowOpacity: 0.1,
            shadowRadius: elevation * 2,
            elevation,
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Base card styles
  },
});

