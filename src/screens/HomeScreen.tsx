import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { PrimaryButton } from '../components/PrimaryButton';
import type { HomeScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const theme = useTheme();

  const handleExperienceSelect = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
    // Navigate to Landing screen
    navigation.navigate('Train', { screen: 'Landing' });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header with Sign In button */}
      <View style={styles.header}>
        <Pressable onPress={() => {}}>
          <Text style={[theme.typography.body, { color: theme.colors.textPrimary }]}>
            Sign In
          </Text>
        </Pressable>
      </View>

      {/* Logo/Title Section */}
      <View style={styles.logoSection}>
        <Text style={[theme.typography.titleBold, { color: theme.colors.textPrimary }]}>
          SkillKick
        </Text>
      </View>

      {/* Continue as Guest */}
      <Pressable style={styles.guestButton} onPress={() => handleExperienceSelect('Beginner')}>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          Continue as Guest
        </Text>
      </Pressable>

      {/* Experience Level Selection */}
      <View style={styles.experienceSection}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.lg },
          ]}
        >
          Choose Your Experience Level
        </Text>

        {/* Beginner */}
        <Pressable
          style={[
            styles.experienceCard,
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
          ]}
          onPress={() => handleExperienceSelect('Beginner')}
        >
          <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
            Beginner
          </Text>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            New to training? Start here
          </Text>
        </Pressable>

        {/* Intermediate */}
        <Pressable
          style={[
            styles.experienceCard,
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
          ]}
          onPress={() => handleExperienceSelect('Intermediate')}
        >
          <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
            Intermediate
          </Text>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            Some experience? Perfect for you
          </Text>
        </Pressable>

        {/* Advanced */}
        <Pressable
          style={[
            styles.experienceCard,
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
          ]}
          onPress={() => handleExperienceSelect('Advanced')}
        >
          <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
            Advanced
          </Text>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            Ready for the next level
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 32,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  guestButton: {
    alignItems: 'center',
    marginBottom: 48,
  },
  experienceSection: {
    width: '100%',
  },
  experienceCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
});

