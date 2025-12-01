import React from 'react';
import { View, Text, StyleSheet, ScrollView, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { mockUser } from '../data/mockUser';
import { Ionicons } from '@expo/vector-icons';

const achievements = [
  { id: '1', name: 'First Steps', icon: 'footsteps', unlocked: true },
  { id: '2', name: 'Week Warrior', icon: 'calendar', unlocked: true },
  { id: '3', name: 'Skill Master', icon: 'trophy', unlocked: false },
  { id: '4', name: 'Consistency King', icon: 'flame', unlocked: true },
];

const goals = [
  { id: '1', title: 'Complete 20 drills', progress: 12, target: 20 },
  { id: '2', title: 'Train 7 days in a row', progress: 5, target: 7 },
  { id: '3', title: 'Reach 2000 XP', progress: 1250, target: 2000 },
];

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* User Card */}
      <Card style={styles.userCard}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
            <Text style={[theme.typography.titleBold, { color: theme.colors.background }]}>
              {mockUser.name.charAt(0)}
            </Text>
          </View>
        </View>
        <Text style={[theme.typography.titleBold, { color: theme.colors.textPrimary }]}>
          {mockUser.name}
        </Text>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          {mockUser.level} Level
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="trophy" size={20} color={theme.colors.primary} />
            <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
              {mockUser.xp} XP
            </Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="flame" size={20} color={theme.colors.primary} />
            <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
              {mockUser.streak} Day Streak
            </Text>
          </View>
        </View>
      </Card>

      {/* Achievements Section */}
      <View style={styles.section}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Achievements
        </Text>
        <View style={styles.achievementsGrid}>
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              style={[
                styles.achievementCard,
                { opacity: achievement.unlocked ? 1 : 0.5 },
              ]}
            >
              <Ionicons
                name={achievement.icon as any}
                size={32}
                color={achievement.unlocked ? theme.colors.primary : theme.colors.textMuted}
              />
              <Text
                style={[
                  theme.typography.bodySmall,
                  {
                    color: achievement.unlocked
                      ? theme.colors.textPrimary
                      : theme.colors.textMuted,
                    marginTop: theme.spacing.xs,
                    textAlign: 'center',
                  },
                ]}
              >
                {achievement.name}
              </Text>
            </Card>
          ))}
        </View>
      </View>

      {/* Goals Section */}
      <View style={styles.section}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Goals
        </Text>
        {goals.map((goal) => {
          const progressPercent = (goal.progress / goal.target) * 100;
          return (
            <Card key={goal.id} style={styles.goalCard}>
              <View style={styles.goalHeader}>
                <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
                  {goal.title}
                </Text>
                <Text style={[theme.typography.bodySmall, { color: theme.colors.primary }]}>
                  {goal.progress}/{goal.target}
                </Text>
              </View>
              <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.card }]}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: `${progressPercent}%`,
                      backgroundColor: theme.colors.primary,
                    },
                  ]}
                />
              </View>
            </Card>
          );
        })}
      </View>

      {/* Motivational Quote */}
      <Card style={styles.quoteCard}>
        <Ionicons name="chatbubble-ellipses" size={32} color={theme.colors.primary} />
        <Text
          style={[
            theme.typography.body,
            { color: theme.colors.textPrimary, marginTop: theme.spacing.md, textAlign: 'center' },
          ]}
        >
          "The only way to do great work is to love what you do."
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
  userCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 24,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  section: {
    marginBottom: 32,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  achievementCard: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginBottom: 12,
    padding: 16,
  },
  goalCard: {
    marginBottom: 16,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  quoteCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 32,
  },
});

