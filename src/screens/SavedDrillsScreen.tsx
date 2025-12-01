import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { mockDrills } from '../data/mockDrills';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const filters = ['All', 'Midfielder', 'Forward', 'Goalkeeper'];

export default function SavedDrillsScreen() {
  const theme = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Static saved drills for Phase 1
  const savedDrills = mockDrills.slice(0, 4);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Filter Tabs */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              style={[
                styles.filterTab,
                selectedFilter === filter && {
                  backgroundColor: theme.colors.primary,
                },
                selectedFilter !== filter && {
                  backgroundColor: theme.colors.card,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.bodySmall,
                  {
                    color:
                      selectedFilter === filter
                        ? theme.colors.background
                        : theme.colors.textSecondary,
                  },
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Saved Drills Grid */}
      <View style={styles.drillsGrid}>
        {savedDrills.map((drill) => (
          <Card key={drill.id} style={styles.drillCard}>
            <View style={[styles.videoThumbnail, { backgroundColor: theme.colors.backgroundDark }]}>
              <Ionicons name="play-circle" size={32} color={theme.colors.primary} />
            </View>
            <View style={styles.drillInfo}>
              <Text
                style={[theme.typography.bodyBold, { color: theme.colors.textPrimary }]}
                numberOfLines={2}
              >
                {drill.title}
              </Text>
              <Text
                style={[theme.typography.caption, { color: theme.colors.textSecondary }]}
              >
                {drill.role} • {drill.duration} min
              </Text>
            </View>
            <Pressable style={styles.downloadButton}>
              <Ionicons name="download-outline" size={20} color={theme.colors.primary} />
            </Pressable>
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
  filtersContainer: {
    marginBottom: 24,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  drillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  drillCard: {
    width: (width - 48 - 12) / 2,
    marginBottom: 16,
    padding: 0,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drillInfo: {
    padding: 12,
  },
  downloadButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

