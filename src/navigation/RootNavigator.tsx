import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import type { RootTabParamList, TrainStackParamList } from './types';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import ChooseSportScreen from '../screens/ChooseSportScreen';
import ChoosePositionScreen from '../screens/ChoosePositionScreen';
import FocusSkillsScreen from '../screens/FocusSkillsScreen';
import DrillDetailScreen from '../screens/DrillDetailScreen';
import AiFeedbackScreen from '../screens/AiFeedbackScreen';
import SavedDrillsScreen from '../screens/SavedDrillsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();
const TrainStack = createNativeStackNavigator<TrainStackParamList>();

function TrainNavigator() {
  return (
    <TrainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TrainStack.Screen name="Landing" component={LandingScreen} />
      <TrainStack.Screen name="ChooseSport" component={ChooseSportScreen} />
      <TrainStack.Screen name="ChoosePosition" component={ChoosePositionScreen} />
      <TrainStack.Screen name="FocusSkills" component={FocusSkillsScreen} />
      <TrainStack.Screen name="DrillDetail" component={DrillDetailScreen} />
      <TrainStack.Screen name="AiFeedback" component={AiFeedbackScreen} />
    </TrainStack.Navigator>
  );
}

export default function RootNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Train') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textMuted,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Train" component={TrainNavigator} />
        <Tab.Screen name="Saved" component={SavedDrillsScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

