export interface AiFeedback {
  id: string;
  skill: string;
  tip: string;
  category: 'strength' | 'improvement' | 'technique';
  icon: string;
  timestamp: string;
}

export const mockFeedback: AiFeedback[] = [
  {
    id: '1',
    skill: 'Shooting',
    tip: 'Your plant foot is positioned well, but try to lean forward slightly more to generate more power.',
    category: 'improvement',
    icon: 'target',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    skill: 'Shooting',
    tip: 'Excellent follow-through! Your technique is improving consistently.',
    category: 'strength',
    icon: 'checkmark-circle',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    skill: 'Shooting',
    tip: 'Focus on keeping your head down during the shot. This will improve accuracy significantly.',
    category: 'technique',
    icon: 'eye',
    timestamp: '3 days ago',
  },
];

