// Level calculation utilities
export interface LevelInfo {
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  totalXpForLevel: number;
  progressPercentage: number;
}

// XP required for each level (exponential growth)
const XP_PER_LEVEL = [
  0,    // Level 1 (0 XP)
  100,  // Level 2 (100 XP)
  250,  // Level 3 (250 XP)
  450,  // Level 4 (450 XP)
  700,  // Level 5 (700 XP)
  1000, // Level 6 (1000 XP)
  1350, // Level 7 (1350 XP)
  1750, // Level 8 (1750 XP)
  2200, // Level 9 (2200 XP)
  2700, // Level 10 (2700 XP)
  3250, // Level 11 (3250 XP)
  3850, // Level 12 (3850 XP)
  4500, // Level 13 (4500 XP)
  5200, // Level 14 (5200 XP)
  5950, // Level 15 (5950 XP)
  6750, // Level 16 (6750 XP)
  7600, // Level 17 (7600 XP)
  8500, // Level 18 (8500 XP)
  9450, // Level 19 (9450 XP)
  10450, // Level 20 (10450 XP)
  11500, // Level 21 (11500 XP)
  12600, // Level 22 (12600 XP)
  13750, // Level 23 (13750 XP)
  14950, // Level 24 (14950 XP)
  16200, // Level 25 (16200 XP)
  17500, // Level 26 (17500 XP)
  18850, // Level 27 (18850 XP)
  20250, // Level 28 (20250 XP)
  21700, // Level 29 (21700 XP)
  23200, // Level 30 (23200 XP)
];

export function calculateLevel(xp: number): LevelInfo {
  let level = 1;
  let totalXpForLevel = 0;
  
  // Find current level
  for (let i = 0; i < XP_PER_LEVEL.length - 1; i++) {
    if (xp >= XP_PER_LEVEL[i] && xp < XP_PER_LEVEL[i + 1]) {
      level = i + 1;
      totalXpForLevel = XP_PER_LEVEL[i];
      break;
    }
  }
  
  // If XP is higher than our predefined levels, calculate dynamically
  if (xp >= XP_PER_LEVEL[XP_PER_LEVEL.length - 1]) {
    level = XP_PER_LEVEL.length;
    totalXpForLevel = XP_PER_LEVEL[level - 1];
  }
  
  const xpToNextLevel = XP_PER_LEVEL[level] - xp;
  const levelXpRange = XP_PER_LEVEL[level] - XP_PER_LEVEL[level - 1];
  const progressInLevel = xp - XP_PER_LEVEL[level - 1];
  const progressPercentage = Math.round((progressInLevel / levelXpRange) * 100);
  
  return {
    level,
    currentXp: xp,
    xpToNextLevel: Math.max(0, xpToNextLevel),
    totalXpForLevel,
    progressPercentage: Math.min(100, Math.max(0, progressPercentage))
  };
}

export function getXpForLevel(targetLevel: number): number {
  if (targetLevel < 1) return 0;
  if (targetLevel <= XP_PER_LEVEL.length) {
    return XP_PER_LEVEL[targetLevel - 1];
  }
  
  // For levels beyond our predefined list, use exponential formula
  const baseXp = XP_PER_LEVEL[XP_PER_LEVEL.length - 1];
  const levelsBeyond = targetLevel - XP_PER_LEVEL.length;
  return baseXp + (levelsBeyond * 1500); // 1500 XP per level beyond 30
}

export function getLevelTitle(level: number): string {
  if (level <= 5) return "Novice";
  if (level <= 10) return "Apprentice";
  if (level <= 15) return "Intermediate";
  if (level <= 20) return "Advanced";
  if (level <= 25) return "Expert";
  if (level <= 30) return "Master";
  return "Legend";
}

export function getLevelColor(level: number): string {
  if (level <= 5) return "text-green-400";
  if (level <= 10) return "text-blue-400";
  if (level <= 15) return "text-yellow-400";
  if (level <= 20) return "text-orange-400";
  if (level <= 25) return "text-red-400";
  if (level <= 30) return "text-purple-400";
  return "text-pink-400";
}

// Badge system
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  xpReward: number;
}

export const BADGES: Badge[] = [
  {
    id: "first-lesson",
    name: "First Steps",
    description: "Completed your first lesson",
    icon: "🎯",
    requirement: "Complete 1 lesson",
    xpReward: 50
  },
  {
    id: "crypto-basics",
    name: "Crypto Curious",
    description: "Completed Crypto Fundamentals module",
    icon: "₿",
    requirement: "Complete all crypto lessons",
    xpReward: 200
  },
  {
    id: "stocks-master",
    name: "Stock Market Savvy",
    description: "Mastered stock market basics",
    icon: "📈",
    requirement: "Complete all stocks lessons",
    xpReward: 200
  },
  {
    id: "scam-buster",
    name: "Scam Buster",
    description: "Completed scam awareness training",
    icon: "🛡️",
    requirement: "Complete scam awareness module",
    xpReward: 250
  },
  {
    id: "level-10",
    name: "Rising Star",
    description: "Reached level 10",
    icon: "⭐",
    requirement: "Reach level 10",
    xpReward: 100
  },
  {
    id: "level-20",
    name: "Financial Expert",
    description: "Reached level 20",
    icon: "🏆",
    requirement: "Reach level 20",
    xpReward: 200
  },
  {
    id: "quiz-master",
    name: "Quiz Master",
    description: "Scored 100% on 10 quizzes",
    icon: "🧠",
    requirement: "Perfect score on 10 quizzes",
    xpReward: 300
  },
  {
    id: "streak-7",
    name: "Consistent Learner",
    description: "7-day learning streak",
    icon: "🔥",
    requirement: "Learn for 7 consecutive days",
    xpReward: 150
  }
];

export function checkForNewBadges(
  completedLessons: string[],
  level: number,
  totalXp: number
): Badge[] {
  const earnedBadges: Badge[] = [];
  
  // Check lesson-based badges
  const lessonCount = completedLessons.length;
  if (lessonCount >= 1) {
    earnedBadges.push(BADGES[0]); // First Steps
  }
  
  // Check module completion badges
  const modules = ["stocks-101", "crypto-fundamentals", "scam-awareness"];
  modules.forEach((moduleId, index) => {
    const moduleLessons = completedLessons.filter(lessonId => 
      lessonId.startsWith(moduleId)
    );
    if (moduleLessons.length >= 3) { // Assuming 3+ lessons per module
      earnedBadges.push(BADGES[index + 1]); // Module completion badges
    }
  });
  
  // Check level badges
  if (level >= 10) {
    earnedBadges.push(BADGES[4]); // Rising Star
  }
  if (level >= 20) {
    earnedBadges.push(BADGES[5]); // Financial Expert
  }
  
  return earnedBadges;
}
