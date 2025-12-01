import type { NavigatorScreenParams } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Root Navigator Types
export type RootTabParamList = {
  Home: undefined;
  Train: NavigatorScreenParams<TrainStackParamList>;
  Saved: undefined;
  Progress: undefined;
  Profile: undefined;
};

// Train Stack Navigator Types
export type TrainStackParamList = {
  Landing: undefined;
  ChooseSport: undefined;
  ChoosePosition: undefined;
  FocusSkills: undefined;
  DrillDetail: { drillId: string };
  AiFeedback: { drillId?: string };
};

// Screen Props Types
export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type TrainScreenProps = BottomTabScreenProps<RootTabParamList, 'Train'>;
export type SavedScreenProps = BottomTabScreenProps<RootTabParamList, 'Saved'>;
export type ProgressScreenProps = BottomTabScreenProps<RootTabParamList, 'Progress'>;
export type ProfileScreenProps = BottomTabScreenProps<RootTabParamList, 'Profile'>;

export type LandingScreenProps = NativeStackScreenProps<TrainStackParamList, 'Landing'>;
export type ChooseSportScreenProps = NativeStackScreenProps<TrainStackParamList, 'ChooseSport'>;
export type ChoosePositionScreenProps = NativeStackScreenProps<TrainStackParamList, 'ChoosePosition'>;
export type FocusSkillsScreenProps = NativeStackScreenProps<TrainStackParamList, 'FocusSkills'>;
export type DrillDetailScreenProps = NativeStackScreenProps<TrainStackParamList, 'DrillDetail'>;
export type AiFeedbackScreenProps = NativeStackScreenProps<TrainStackParamList, 'AiFeedback'>;

