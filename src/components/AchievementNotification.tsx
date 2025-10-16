import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Zap, Award } from "lucide-react";

interface AchievementNotificationProps {
  isVisible: boolean;
  type: "level-up" | "badge" | "streak" | "milestone";
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClose: () => void;
}

export const AchievementNotification = ({
  isVisible,
  type,
  title,
  description,
  icon,
  onClose
}: AchievementNotificationProps) => {
  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case "level-up":
        return <Trophy className="w-8 h-8 text-yellow-500" />;
      case "badge":
        return <Award className="w-8 h-8 text-blue-500" />;
      case "streak":
        return <Zap className="w-8 h-8 text-orange-500" />;
      case "milestone":
        return <Star className="w-8 h-8 text-purple-500" />;
      default:
        return <Trophy className="w-8 h-8 text-primary" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "level-up":
        return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      case "badge":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      case "streak":
        return "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30";
      case "milestone":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30";
      default:
        return "bg-gradient-to-r from-primary/20 to-primary-glow/20 border-primary/30";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className={`${getBackgroundColor()} border rounded-xl p-4 shadow-2xl backdrop-blur-sm`}>
            <div className="flex items-start gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                {getIcon()}
              </motion.div>
              
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-bold text-white text-lg"
                >
                  {title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 text-sm mt-1"
                >
                  {description}
                </motion.p>
              </div>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </motion.button>
            </div>
            
            {/* Progress bar animation */}
            <motion.div
              className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-white/60 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={onClose}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Floating particles effect for celebrations
export const CelebrationParticles = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{
            x: "50%",
            y: "50%",
            opacity: 1,
            scale: 0
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 1,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};
