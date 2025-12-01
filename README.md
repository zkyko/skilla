# SkillKick Mobile App

A React Native mobile application built with Expo for sports training and skill development. This app converts Figma wireframes into a fully functional mobile app with navigation, theming, and UI components.

## 🚀 Features

- **Complete UI Implementation** - All screens matching Figma designs
- **Navigation System** - Bottom tabs + Stack navigation
- **Theme System** - Centralized colors, typography, and spacing
- **10 Screens** - Home, Landing, Sport Selection, Position Selection, Skills, Drill Details, AI Feedback, Progress, Saved Drills, and Profile
- **TypeScript** - Full type safety throughout the app
- **Expo** - Easy development and deployment

## 📱 Screens

- **Home** - Experience level selection (Beginner/Intermediate/Advanced)
- **Landing** - Greeting screen with quick actions and suggested drills
- **Choose Sport** - Sport selection (Soccer active, others coming soon)
- **Choose Position** - Position selection (Midfielder, Forward, Goalkeeper, etc.)
- **Focus Skills** - Skills grid (Dribbling, Passing, Shooting, etc.)
- **Drill Detail** - Detailed drill view with video, coach tips, and XP tracking
- **AI Feedback** - AI-powered feedback interface
- **Progress** - XP tracking, streaks, and completed drills
- **Saved Drills** - Collection of saved training drills
- **Profile** - User profile with achievements and goals

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **Expo Vector Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## 🎨 Design System

The app uses a centralized theme system with:

- **Colors** - Dark theme palette extracted from Figma
- **Typography** - Space Grotesk font family with consistent sizing
- **Spacing** - Consistent spacing values (4, 8, 12, 16, 24, 32)

All colors and typography are defined in `src/theme/` and accessed via the `useTheme()` hook.

## 📁 Project Structure

```
skillkick-mobile/
├── src/
│   ├── components/      # Reusable components (Card, Buttons)
│   ├── screens/         # All app screens
│   ├── navigation/      # Navigation setup
│   ├── theme/          # Theme system (colors, typography, spacing)
│   └── data/           # Mock data for Phase 1
├── App.tsx             # Root component
└── package.json
```

## 🚧 Development Status

**Phase 1 Complete** - UI implementation with static mock data
- ✅ All screens implemented
- ✅ Navigation working
- ✅ Theme system in place
- ✅ TypeScript types defined

**Next Phases:**
- Phase 2: Local state management with Zustand/Context
- Phase 3: Backend integration (FastAPI)
- Phase 4: AI feedback integration (DeepSeek API)

## 📝 License

Private project

## 👤 Author

SkillKick Development Team

