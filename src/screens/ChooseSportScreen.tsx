import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import type { ChooseSportScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const sports = [
  { id: 'soccer', name: 'Soccer', icon: 'football', available: true },
  { id: 'basketball', name: 'Basketball', icon: 'basketball', available: false },
  { id: 'volleyball', name: 'Volleyball', icon: 'ellipse', available: false },
];

export default function ChooseSportScreen({ navigation }: ChooseSportScreenProps) {
  const theme = useTheme();

  const handleSportSelect = (sportId: string, available: boolean) => {
    if (sportId === 'soccer' && available) {
      navigation.navigate('ChoosePosition');
    } else {
      // Show coming soon alert or do nothing
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
        Choose Your Sport
      </Text>

      {sports.map((sport) => (
        <Pressable
          key={sport.id}
          onPress={() => handleSportSelect(sport.id, sport.available)}
          style={styles.sportCardContainer}
        >
          <Card
            style={[
              styles.sportCard,
              {
                backgroundColor: sport.available ? theme.colors.primary : theme.colors.card,
                opacity: sport.available ? 1 : 0.6,
              },
            ]}
          >
            <Ionicons
              name={sport.icon as any}
              size={48}
              color={sport.available ? theme.colors.background : theme.colors.textMuted}
            />
            <Text
              style={[
                theme.typography.bodyBold,
                {
                  color: sport.available ? theme.colors.background : theme.colors.textMuted,
                  marginTop: theme.spacing.md,
                },
              ]}
            >
              {sport.name}
            </Text>
            {!sport.available && (
              <Text
                style={[
                  theme.typography.caption,
                  { color: theme.colors.textMuted, marginTop: theme.spacing.xs },
                ]}
              >
                Coming Soon / Notify me
              </Text>
            )}
          </Card>
        </Pressable>
      ))}
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
  sportCardContainer: {
    marginBottom: 16,
  },
  sportCard: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    padding: 24,
  },
});

