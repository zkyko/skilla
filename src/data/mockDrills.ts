export interface Drill {
  id: string;
  title: string;
  role: string;
  duration: number; // in minutes
  description: string;
  skillType: string;
  videoUrl?: string;
  coachTip?: string;
}

export const mockDrills: Drill[] = [
  {
    id: '1',
    title: 'Power Shot Training',
    role: 'Forward',
    duration: 15,
    description: 'Practice powerful shots from different angles and distances.',
    skillType: 'Shooting',
    coachTip: 'Focus on your plant foot placement and follow through. Keep your head down and strike through the ball.',
  },
  {
    id: '2',
    title: 'Precision Passing',
    role: 'Midfielder',
    duration: 20,
    description: 'Improve your passing accuracy with targeted drills.',
    skillType: 'Passing',
    coachTip: 'Use the inside of your foot for accuracy. Keep your body over the ball.',
  },
  {
    id: '3',
    title: 'First Touch Control',
    role: 'All Positions',
    duration: 10,
    description: 'Master your first touch to maintain possession.',
    skillType: 'First Touch',
    coachTip: 'Cushion the ball with your first touch. Keep it close to your body.',
  },
  {
    id: '4',
    title: 'Dribbling Mastery',
    role: 'Forward',
    duration: 25,
    description: 'Enhance your dribbling skills in tight spaces.',
    skillType: 'Dribbling',
    coachTip: 'Keep the ball close, use both feet, and change direction quickly.',
  },
  {
    id: '5',
    title: 'Defensive Positioning',
    role: 'Defender',
    duration: 18,
    description: 'Learn proper defensive positioning and timing.',
    skillType: 'Defending',
    coachTip: 'Stay on your toes, maintain proper distance, and anticipate the attacker\'s move.',
  },
];

