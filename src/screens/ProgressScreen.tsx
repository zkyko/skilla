import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { mockUser } from '../data/mockUser';
import { mockDrills } from '../data/mockDrills';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Static values for Phase 1
const daysTrained = 5;
const totalXP = 1250;
const xpProgress = 60;
const streak = 5;
const completedDrills = mockDrills.slice(0, 3);

export default function ProgressScreen() {
  const theme = useTheme();

  // Simple graph representation (static lines)
  const graphData = [20, 35, 30, 45, 40, 50, 60]; // Static data points

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Text Banner */}
      <Card style={styles.bannerCard}>
        <Text style={[theme.typography.body, { color: theme.colors.textPrimary }]}>
          You've trained {daysTrained} days this week. Keep up the great work! 💪
        </Text>
      </Card>

      {/* Total XP Card */}
      <Card style={styles.xpCard}>
        <View style={styles.xpHeader}>
          <Ionicons name="trophy" size={32} color={theme.colors.primary} />
          <View style={styles.xpInfo}>
            <Text style={[theme.typography.titleBold, { color: theme.colors.textPrimary }]}>
              {totalXP} XP
            </Text>
            <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
              Total Experience Points
            </Text>
          </View>
        </View>
        <View style={styles.xpProgressContainer}>
          <View style={styles.xpProgressHeader}>
            <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
              Progress to next level
            </Text>
            <Text style={[theme.typography.bodySmall, { color: theme.colors.primary }]}>
              {xpProgress}%
            </Text>
          </View>
          <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.card }]}>
            <View
              style={[
                styles.progressBar,
                { width: `${xpProgress}%`, backgroundColor: theme.colors.primary },
              ]}
            />
          </View>
        </View>
      </Card>

      {/* Streak */}
      <Card style={styles.streakCard}>
        <Ionicons name="flame" size={32} color={theme.colors.primary} />
        <Text style={[theme.typography.titleBold, { color: theme.colors.textPrimary }]}>
          {streak} Day Streak
        </Text>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          Keep it going!
        </Text>
      </Card>

      {/* Skill Improvement Graph */}
      <Card style={styles.graphCard}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Skill Improvement
        </Text>
        <View style={styles.graphContainer}>
          {graphData.map((value, index) => (
            <View key={index} style={styles.graphBarContainer}>
              <View
                style={[
                  styles.graphBar,
                  {
                    height: (value / 100) * 100,
                    backgroundColor: theme.colors.primary,
                  },
                ]}
              />
              <Text
                style={[
                  theme.typography.caption,
                  { color: theme.colors.textMuted, marginTop: 4 },
                ]}
              >
                {index + 1}
              </Text>
            </View>
          ))}
        </View>
      </Card>

      {/* Completed Drills */}
      <View style={styles.completedSection}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Completed Drills
        </Text>
        {completedDrills.map((drill) => (
          <Card key={drill.id} style={styles.completedDrillCard}>
            <View style={styles.completedDrillHeader}>
              <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />
              <View style={styles.completedDrillInfo}>
                <Text style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}>
                  {drill.title}
                </Text>
                <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
                  {drill.role} • {drill.duration} min
                </Text>
              </View>
            </View>
          </Card>
        ))}
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
  bannerCard: {
    marginBottom: 24,
    backgroundColor: '#082025',
  },
  xpCard: {
    marginBottom: 24,
  },
  xpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  xpInfo: {
    marginLeft: 12,
  },
  xpProgressContainer: {
    marginTop: 16,
  },
  xpProgressHeader: {
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
  streakCard: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 24,
  },
  graphCard: {
    marginBottom: 24,
  },
  graphContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 120,
    marginTop: 16,
  },
  graphBarContainer: {
    alignItems: 'center',
    flex: 1,
  },
  graphBar: {
    width: '80%',
    borderRadius: 4,
    minHeight: 4,
  },
  completedSection: {
    marginBottom: 32,
  },
  completedDrillCard: {
    marginBottom: 12,
  },
  completedDrillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedDrillInfo: {
    marginLeft: 12,
    flex: 1,
  },
});

