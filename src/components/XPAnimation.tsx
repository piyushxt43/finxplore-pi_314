import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Zap, Trophy } from "lucide-react";

interface XPAnimationProps {
  xp: number;
  level?: number;
  badge?: string;
  isVisible: boolean;
  onComplete?: () => void;
}

export const XPAnimation = ({ xp, level, badge, isVisible, onComplete }: XPAnimationProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="bg-gradient-to-br from-primary to-primary-glow p-8 rounded-2xl shadow-2xl border-2 border-primary/30 max-w-md mx-4"
          >
            <div className="text-center">
              {/* XP Gain Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-white mb-2"
              >
                +{xp} XP!
              </motion.h2>

              {/* Level Up Animation */}
              {level && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="mb-4"
                >
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                    <Trophy className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Level {level}!</span>
                  </div>
                </motion.div>
              )}

              {/* Badge Animation */}
              {badge && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="mb-4"
                >
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">New Badge: {badge}</span>
                  </div>
                </motion.div>
              )}

              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
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
                      duration: 2,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Floating XP particles component
export const FloatingXP = ({ xp, position }: { xp: number; position: { x: number; y: number } }) => {
  return (
    <motion.div
      initial={{ 
        x: position.x, 
        y: position.y, 
        opacity: 1, 
        scale: 0.5 
      }}
      animate={{ 
        y: position.y - 100, 
        opacity: 0, 
        scale: 1 
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed z-50 pointer-events-none"
    >
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
        +{xp} XP
      </div>
    </motion.div>
  );
};
