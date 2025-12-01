import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import type { FocusSkillsScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const skills = [
  { id: 'dribbling', name: 'Dribbling', icon: 'footsteps' },
  { id: 'passing', name: 'Passing', icon: 'arrow-forward' },
  { id: 'first-touch', name: 'First Touch', icon: 'hand-left' },
  { id: 'shooting', name: 'Shooting', icon: 'target', available: true },
  { id: 'defending', name: 'Defending', icon: 'shield' },
  { id: 'heading', name: 'Heading', icon: 'ellipse' },
];

export default function FocusSkillsScreen({ navigation }: FocusSkillsScreenProps) {
  const theme = useTheme();

  const handleSkillSelect = (skillId: string, available?: boolean) => {
    if (skillId === 'shooting' && available) {
      navigation.navigate('DrillDetail', { drillId: '1' });
    } else {
      Alert.alert('Coming Soon', 'This skill is not available yet.');
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text
        style={[
          theme.typography.title,
          { color: theme.colors.textPrimary, marginBottom: theme.spacing.xl },
        ]}
      >
        Focus Skills
      </Text>

      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <Pressable
            key={skill.id}
            onPress={() => handleSkillSelect(skill.id, skill.available)}
            style={styles.skillCardContainer}
          >
            <Card style={styles.skillCard}>
              <Ionicons
                name={skill.icon as any}
                size={32}
                color={skill.available ? theme.colors.primary : theme.colors.textMuted}
              />
              <Text
                style={[
                  theme.typography.body,
                  {
                    color: skill.available ? theme.colors.textPrimary : theme.colors.textMuted,
                    marginTop: theme.spacing.sm,
                    textAlign: 'center',
                  },
                ]}
              >
                {skill.name}
              </Text>
            </Card>
          </Pressable>
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
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillCardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  skillCard: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    padding: 16,
  },
});

