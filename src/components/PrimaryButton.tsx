import React, { ReactNode } from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export interface PrimaryButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled ? theme.colors.textMuted : theme.colors.primary,
          opacity: pressed ? 0.8 : 1,
          width: fullWidth ? '100%' : 'auto',
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.background} />
      ) : (
        <Text
          style={[
            theme.typography.bodyBold,
            {
              color: theme.colors.background,
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
});

