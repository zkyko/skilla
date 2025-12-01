import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  Dimensions,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { mockFeedback } from '../data/mockFeedback';
import type { AiFeedbackScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const skills = ['Shooting', 'Passing', 'Dribbling', 'Defending'];

export default function AiFeedbackScreen({ route }: AiFeedbackScreenProps) {
  const theme = useTheme();
  const [selectedSkill, setSelectedSkill] = useState('Shooting');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleStartRecording = () => {
    Alert.alert('Phase 1', 'Recording functionality will be available in later phases.');
  };

  const handleUpload = () => {
    Alert.alert('Phase 1', 'Upload functionality will be available in later phases.');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'strength':
        return theme.colors.primary;
      case 'improvement':
        return theme.colors.textSecondary;
      case 'technique':
        return theme.colors.textMuted;
      default:
        return theme.colors.textSecondary;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'strength':
        return 'checkmark-circle';
      case 'improvement':
        return 'arrow-up';
      case 'technique':
        return 'eye';
      default:
        return 'information-circle';
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Skill Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={[theme.typography.body, { color: theme.colors.textSecondary }]}>
          Skill:
        </Text>
        <Pressable
          style={[
            styles.dropdown,
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
          ]}
        >
          <Text style={[theme.typography.body, { color: theme.colors.textPrimary }]}>
            {selectedSkill}
          </Text>
          <Ionicons name="chevron-down" size={20} color={theme.colors.textSecondary} />
        </Pressable>
      </View>

      {/* Skill Tabs */}
      <View style={styles.tabsContainer}>
        {skills.map((skill, index) => (
          <Pressable
            key={skill}
            onPress={() => {
              setSelectedTab(index);
              setSelectedSkill(skill);
            }}
            style={[
              styles.tab,
              selectedTab === index && {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
              selectedTab !== index && {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.bodySmall,
                {
                  color:
                    selectedTab === index ? theme.colors.background : theme.colors.textSecondary,
                },
              ]}
            >
              {skill}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Camera Preview Placeholder */}
      <Card style={styles.cameraCard}>
        <View style={[styles.cameraPlaceholder, { backgroundColor: theme.colors.backgroundDark }]}>
          <Ionicons name="camera" size={48} color={theme.colors.textMuted} />
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textMuted }]}>
            Camera Preview
          </Text>
        </View>
      </Card>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <PrimaryButton onPress={handleStartRecording} style={styles.actionButton}>
          Start Recording
        </PrimaryButton>
        <PrimaryButton onPress={handleUpload} style={styles.actionButton}>
          Upload
        </PrimaryButton>
      </View>

      {/* Recent Attempts */}
      <View style={styles.section}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          Recent Attempts
        </Text>
        <Card style={styles.attemptCard}>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            No recent attempts yet
          </Text>
        </Card>
      </View>

      {/* AI Feedback Cards */}
      <View style={styles.section}>
        <Text
          style={[
            theme.typography.subtitle,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          AI Feedback
        </Text>
        {mockFeedback.map((feedback) => (
          <Card key={feedback.id} style={styles.feedbackCard}>
            <View style={styles.feedbackHeader}>
              <Ionicons
                name={getCategoryIcon(feedback.category) as any}
                size={24}
                color={getCategoryColor(feedback.category)}
              />
              <View style={styles.feedbackBadge}>
                <Text
                  style={[
                    theme.typography.caption,
                    { color: getCategoryColor(feedback.category) },
                  ]}
                >
                  {feedback.category.toUpperCase()}
                </Text>
              </View>
            </View>
            <Text
              style={[
                theme.typography.body,
                { color: theme.colors.textPrimary, marginTop: theme.spacing.sm },
              ]}
            >
              {feedback.tip}
            </Text>
            <Text
              style={[
                theme.typography.caption,
                { color: theme.colors.textMuted, marginTop: theme.spacing.xs },
              ]}
            >
              {feedback.timestamp}
            </Text>
          </Card>
        ))}
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
          "Practice makes progress. Keep pushing forward!"
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
  dropdownContainer: {
    marginBottom: 24,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  tab: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  cameraCard: {
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  cameraPlaceholder: {
    width: '100%',
    height: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  attemptCard: {
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackCard: {
    marginBottom: 16,
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  feedbackBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  quoteCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 32,
  },
});

