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
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { mockDrills } from '../data/mockDrills';
import { mockUser } from '../data/mockUser';
import type { DrillDetailScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function DrillDetailScreen({ route, navigation }: DrillDetailScreenProps) {
  const theme = useTheme();
  const { drillId } = route.params;
  const drill = mockDrills.find((d) => d.id === drillId) || mockDrills[0];

  const handleMarkComplete = () => {
    // Phase 1: No logic, just visual
  };

  const handleAiFeedback = () => {
    navigation.navigate('AiFeedback', { drillId });
  };

  const xpProgress = 60; // Static value for Phase 1

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Drill Title and Role */}
      <View style={styles.header}>
        <Text style={[theme.typography.titleBold, { color: theme.colors.textPrimary }]}>
          {drill.title}
        </Text>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          {drill.role} • {drill.duration} min
        </Text>
      </View>

      {/* Video Placeholder */}
      <Card style={styles.videoCard}>
        <View style={[styles.videoPlaceholder, { backgroundColor: theme.colors.backgroundDark }]}>
          <Ionicons name="play-circle" size={64} color={theme.colors.primary} />
          <Text style={[theme.typography.body, { color: theme.colors.textSecondary }]}>
            Video Placeholder
          </Text>
        </View>
      </Card>

      {/* Coach's Tip */}
      {drill.coachTip && (
        <Card style={styles.coachTipCard}>
          <View style={styles.coachTipHeader}>
            <Ionicons name="bulb" size={24} color={theme.colors.primary} />
            <Text
              style={[theme.typography.bodyBold, { color: theme.colors.textPrimary, marginLeft: 8 }]}
            >
              Coach's Tip
            </Text>
          </View>
          <Text style={[theme.typography.body, { color: theme.colors.textSecondary, marginTop: 8 }]}>
            {drill.coachTip}
          </Text>
        </Card>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <Pressable style={styles.actionButton}>
          <Ionicons name="bookmark-outline" size={24} color={theme.colors.textPrimary} />
          <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
            Save
          </Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color={theme.colors.textPrimary} />
          <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
            Like
          </Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="share-outline" size={24} color={theme.colors.textPrimary} />
          <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
            Share
          </Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="checkmark-circle-outline" size={24} color={theme.colors.textPrimary} />
          <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
            Complete
          </Text>
        </Pressable>
      </View>

      {/* Mark Complete Button */}
      <PrimaryButton onPress={handleMarkComplete} fullWidth style={styles.completeButton}>
        Mark Complete +20 XP
      </PrimaryButton>

      {/* XP Progress Bar */}
      <View style={styles.xpSection}>
        <View style={styles.xpHeader}>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            XP Progress
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

      {/* AI Feedback Section */}
      <Card style={styles.aiFeedbackCard}>
        <Pressable onPress={handleAiFeedback} style={styles.aiFeedbackButton}>
          <Ionicons name="sparkles" size={24} color={theme.colors.primary} />
          <Text
            style={[theme.typography.bodyBold, { color: theme.colors.textPrimary, marginLeft: 8 }]}
          >
            AI Feedback
          </Text>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={theme.colors.textSecondary}
            style={styles.chevron}
          />
        </Pressable>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          Get personalized feedback on your performance
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
  header: {
    marginBottom: 24,
  },
  videoCard: {
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  videoPlaceholder: {
    width: '100%',
    height: width * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coachTipCard: {
    marginBottom: 24,
  },
  coachTipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
  },
  completeButton: {
    marginBottom: 24,
  },
  xpSection: {
    marginBottom: 24,
  },
  xpHeader: {
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
  aiFeedbackCard: {
    marginBottom: 32,
  },
  aiFeedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  chevron: {
    marginLeft: 'auto',
  },
});

