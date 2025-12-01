import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { PrimaryButton } from '../components/PrimaryButton';
import { Card } from '../components/Card';
import { mockUser } from '../data/mockUser';
import { mockDrills } from '../data/mockDrills';
import type { LandingScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LandingScreen({ navigation }: LandingScreenProps) {
  const theme = useTheme();

  const handleStart = () => {
    navigation.navigate('ChooseSport');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Greeting Banner */}
      <View style={styles.greetingSection}>
        <Text style={[theme.typography.title, { color: theme.colors.textPrimary }]}>
          Hey {mockUser.name}, ready to train?
        </Text>
      </View>

      {/* Start Button */}
      <PrimaryButton onPress={handleStart} fullWidth style={styles.startButton}>
        Start
      </PrimaryButton>

      {/* Quick Actions Cards */}
      <View style={styles.quickActionsSection}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Quick Actions
        </Text>
        <View style={styles.quickActionsGrid}>
          <Card style={styles.quickActionCard}>
            <Ionicons name="flame" size={24} color={theme.colors.primary} />
            <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
              Streak: {mockUser.streak} days
            </Text>
          </Card>
          <Card style={styles.quickActionCard}>
            <Ionicons name="trophy" size={24} color={theme.colors.primary} />
            <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
              {mockUser.xp} XP
            </Text>
          </Card>
        </View>
      </View>

      {/* Suggested Drills Carousel */}
      <View style={styles.suggestedSection}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Suggested Drills
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockDrills.slice(0, 3).map((drill) => (
            <Card key={drill.id} style={styles.drillCard}>
              <Text
                style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}
                numberOfLines={2}
              >
                {drill.title}
              </Text>
              <Text
                style={[theme.typography.caption, { color: theme.colors.textSecondary }]}
              >
                {drill.duration} min • {drill.role}
              </Text>
            </Card>
          ))}
        </ScrollView>
      </View>

      {/* Motivation Section */}
      <Card style={styles.motivationCard}>
        <Ionicons name="bulb" size={32} color={theme.colors.primary} />
        <Text
          style={[
            theme.typography.body,
            { color: theme.colors.textPrimary, marginTop: theme.spacing.md, textAlign: 'center' },
          ]}
        >
          "Consistency is the key to improvement. Keep training!"
        </Text>
      </Card>
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
  greetingSection: {
    marginBottom: 32,
  },
  startButton: {
    marginBottom: 32,
  },
  quickActionsSection: {
    marginBottom: 32,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  quickActionCard: {
    flex: 1,
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'center',
  },
  suggestedSection: {
    marginBottom: 32,
  },
  drillCard: {
    width: width * 0.7,
    marginRight: 12,
    minHeight: 100,
  },
  motivationCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 32,
  },
});

