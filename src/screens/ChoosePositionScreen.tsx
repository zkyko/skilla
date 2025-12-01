import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import type { ChoosePositionScreenProps } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const positions = [
  { id: 'midfielder', name: 'Midfielder', icon: 'people' },
  { id: 'forward', name: 'Forward', icon: 'flash' },
  { id: 'goalkeeper', name: 'Goalkeeper', icon: 'shield' },
  { id: 'defender', name: 'Defender', icon: 'lock-closed' },
];

export default function ChoosePositionScreen({ navigation }: ChoosePositionScreenProps) {
  const theme = useTheme();

  const handlePositionSelect = (positionId: string) => {
    navigation.navigate('FocusSkills');
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
        Choose Your Position
      </Text>

      <View style={styles.positionsGrid}>
        {positions.map((position) => (
          <Pressable
            key={position.id}
            onPress={() => handlePositionSelect(position.id)}
            style={styles.positionCardContainer}
          >
            <Card style={styles.positionCard}>
              <Ionicons name={position.icon as any} size={32} color={theme.colors.primary} />
              <Text
                style={[
                  theme.typography.bodyBold,
                  { color: theme.colors.textPrimary, marginTop: theme.spacing.md },
                ]}
              >
                {position.name}
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
  positionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  positionCardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  positionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    padding: 16,
  },
});

