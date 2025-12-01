export interface User {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  streak: number;
  completedDrillsCount: number;
  avatar?: string;
}

export const mockUser: User = {
  name: 'Marcus',
  level: 'Intermediate',
  xp: 1250,
  streak: 5,
  completedDrillsCount: 12,
};

