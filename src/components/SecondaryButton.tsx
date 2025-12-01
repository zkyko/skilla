import React, { ReactNode } from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface SecondaryButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
  fullWidth = false,
}) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          borderColor: disabled ? theme.colors.textMuted : theme.colors.primary,
          opacity: pressed ? 0.8 : 1,
          width: fullWidth ? '100%' : 'auto',
        },
        style,
      ]}
    >
      <Text
        style={[
          theme.typography.bodyBold,
          {
            color: disabled ? theme.colors.textMuted : theme.colors.primary,
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    backgroundColor: 'transparent',
  },
});

