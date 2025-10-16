import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface AnimatedProgressProps {
  value: number;
  max?: number;
  className?: string;
  showPercentage?: boolean;
  color?: "primary" | "success" | "warning" | "danger";
  animated?: boolean;
}

export const AnimatedProgress = ({ 
  value, 
  max = 100, 
  className = "", 
  showPercentage = true,
  color = "primary",
  animated = true
}: AnimatedProgressProps) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colorClasses = {
    primary: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500"
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">Progress</span>
        {showPercentage && (
          <motion.span 
            className="text-sm font-bold text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {Math.round(percentage)}%
          </motion.span>
        )}
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color]} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: animated ? `${percentage}%` : `${percentage}%` }}
          transition={{ 
            duration: animated ? 1.5 : 0,
            ease: "easeOut",
            delay: animated ? 0.3 : 0
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

// XP Progress Bar specifically for level progression
interface XPProgressProps {
  currentXP: number;
  level: number;
  className?: string;
}

export const XPProgress = ({ currentXP, level, className = "" }: XPProgressProps) => {
  // Calculate XP needed for current level and next level
  const getXPForLevel = (targetLevel: number) => {
    if (targetLevel <= 1) return 0;
    return (targetLevel - 1) * 100 + ((targetLevel - 2) * (targetLevel - 1) * 50);
  };
  
  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForLevel(level + 1);
  const xpInCurrentLevel = currentXP - currentLevelXP;
  const xpNeededForNextLevel = nextLevelXP - currentLevelXP;
  const progressPercentage = (xpInCurrentLevel / xpNeededForNextLevel) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Level {level} Progress
        </span>
        <span className="text-sm font-bold text-primary">
          {xpInCurrentLevel} / {xpNeededForNextLevel} XP
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3
          }}
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>Level {level}</span>
        <span>Level {level + 1}</span>
      </div>
    </div>
  );
};
