import { Trophy, Clock, Users, Target, Star, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUserProfile } from "@/hooks/use-user-profile";
import { Link } from "react-router-dom";

const Challenges = () => {
  const { profile } = useUserProfile();
  
  // Calculate real progress based on user's completed lessons
  const calculateChallengeProgress = (challengeId: string) => {
    if (!profile) return 0;
    
    switch (challengeId) {
      case "scam-hunter":
        const scamLessons = profile.completedLessons?.filter(lesson => 
          lesson.includes("fake-trading-apps") || 
          lesson.includes("wallet-drain-attacks") || 
          lesson.includes("pump-dump-schemes")
        ).length || 0;
        return Math.min(100, (scamLessons / 3) * 100);
      
      case "crypto-master":
        const cryptoLessons = profile.completedLessons?.filter(lesson => 
          lesson.includes("blockchain-basics") || 
          lesson.includes("bitcoin-vs-altcoins") || 
          lesson.includes("wallet-security-101")
        ).length || 0;
        return Math.min(100, (cryptoLessons / 3) * 100);
      
      case "stocks-expert":
        const stocksLessons = profile.completedLessons?.filter(lesson => 
          lesson.includes("what-are-stocks") || 
          lesson.includes("nse-bse-basics") || 
          lesson.includes("reading-stock-charts")
        ).length || 0;
        return Math.min(100, (stocksLessons / 3) * 100);
      
      case "options-trader":
        const optionsLessons = profile.completedLessons?.filter(lesson => 
          lesson.includes("calls-puts-basics") || 
          lesson.includes("strike-price-selection") || 
          lesson.includes("greeks-simplified")
        ).length || 0;
        return Math.min(100, (optionsLessons / 3) * 100);
      
      case "forex-explorer":
        const forexLessons = profile.completedLessons?.filter(lesson => 
          lesson.includes("currency-pairs-101") || 
          lesson.includes("rbi-forex-rules") || 
          lesson.includes("leverage-dangers")
        ).length || 0;
        return Math.min(100, (forexLessons / 3) * 100);
      
      default:
        return 0;
    }
  };

  const challenges = [
    {
      id: "scam-hunter",
      title: "Scam Hunter Week",
      description: "Identify and report fake trading apps, phishing attempts, and investment scams",
      icon: Shield,
      difficulty: "Intermediate",
      duration: "7 days",
      participants: 2847,
      xpReward: 500,
      progress: calculateChallengeProgress("scam-hunter"),
      tasks: [
        "Complete Scam Awareness module",
        "Report 3 suspicious apps/websites",
        "Share scam prevention tips",
        "Take the Scam Detection quiz"
      ],
      rewards: [
        "500 XP Bonus",
        "Scam Hunter Badge",
        "Exclusive Scam Prevention Guide",
        "Community Recognition"
      ],
      daysLeft: 5,
      status: "active"
    },
    {
      id: "crypto-master",
      title: "Crypto Fundamentals Master",
      description: "Master blockchain technology, cryptocurrency trading, and DeFi concepts",
      icon: TrendingUp,
      difficulty: "Advanced",
      duration: "14 days",
      participants: 1923,
      xpReward: 1000,
      progress: calculateChallengeProgress("crypto-master"),
      tasks: [
        "Complete all Crypto Fundamentals lessons",
        "Score 90%+ on all crypto quizzes",
        "Write a DeFi analysis report",
        "Participate in crypto discussions"
      ],
      rewards: [
        "1000 XP Bonus",
        "Crypto Master Badge",
        "Advanced Trading Strategies Guide",
        "Early access to new crypto content"
      ],
      daysLeft: 12,
      status: "active"
    },
    {
      id: "options-expert",
      title: "Options Trading Expert",
      description: "Become proficient in options strategies, Greeks, and risk management",
      icon: Target,
      difficulty: "Expert",
      duration: "21 days",
      participants: 856,
      xpReward: 1500,
      progress: calculateChallengeProgress("stocks-expert"),
      tasks: [
        "Complete Options Trading module",
        "Master all Greeks concepts",
        "Create a hedging strategy",
        "Simulate 10 profitable trades"
      ],
      rewards: [
        "1500 XP Bonus",
        "Options Expert Badge",
        "Premium Options Calculator",
        "1-on-1 mentor session"
      ],
      daysLeft: 18,
      status: "active"
    },
    {
      id: "budget-prediction",
      title: "Budget 2025 Prediction Challenge",
      description: "Predict key budget announcements and their impact on markets",
      icon: Star,
      difficulty: "Advanced",
      duration: "10 days",
      participants: 3421,
      xpReward: 800,
      progress: calculateChallengeProgress("options-trader"),
      tasks: [
        "Research budget history and trends",
        "Predict 5 key announcements",
        "Analyze sector-wise impact",
        "Submit detailed market analysis"
      ],
      rewards: [
        "800 XP Bonus",
        "Market Analyst Badge",
        "Exclusive Budget Impact Report",
        "Portfolio optimization consultation"
      ],
      daysLeft: 8,
      status: "upcoming"
    },
    {
      id: "streak-champion",
      title: "30-Day Learning Streak",
      description: "Maintain consistent learning habits for 30 consecutive days",
      icon: Zap,
      difficulty: "Beginner",
      duration: "30 days",
      participants: 4567,
      xpReward: 2000,
      progress: calculateChallengeProgress("forex-explorer"),
      tasks: [
        "Learn for at least 30 minutes daily",
        "Complete 1 lesson per day",
        "Maintain streak for 30 days",
        "Share learning progress"
      ],
      rewards: [
        "2000 XP Bonus",
        "Streak Champion Badge",
        "Exclusive Learning Resources",
        "Priority support access"
      ],
      daysLeft: 6,
      status: "active"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-blue-500/20 text-blue-400";
      case "Advanced": return "bg-orange-500/20 text-orange-400";
      case "Expert": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400";
      case "upcoming": return "bg-blue-500/20 text-blue-400";
      case "completed": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          <Trophy className="inline-block w-10 h-10 mr-3 text-primary" />
          <span className="gradient-text">Learning Challenges</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Test your skills, earn rewards, and compete with fellow learners in these exciting challenges!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="glass-card p-8 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                <challenge.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-heading font-bold">{challenge.title}</h2>
                  <Badge className={getDifficultyColor(challenge.difficulty)}>
                    {challenge.difficulty}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-3">{challenge.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants.toLocaleString()} participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    <span>{challenge.xpReward} XP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {challenge.status === "active" && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Your Progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} />
              </div>
            )}

            {/* Status Badge */}
            <div className="mb-6">
              <Badge className={getStatusColor(challenge.status)}>
                {challenge.status === "active" ? "Active" : 
                 challenge.status === "upcoming" ? "Starting Soon" : "Completed"}
              </Badge>
            </div>

            {/* Tasks */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Tasks to Complete
              </h3>
              <ul className="space-y-2">
                {challenge.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 flex-shrink-0"></div>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rewards */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Rewards
              </h3>
              <ul className="space-y-2">
                {challenge.rewards.map((reward, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <Link to={`/learn`}>
              <Button 
                className="w-full"
                disabled={challenge.status === "upcoming"}
              >
                {challenge.status === "active" ? "Continue Challenge" : 
                 challenge.status === "upcoming" ? "Starting Soon" : "View Results"}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Leaderboard Preview */}
      <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center">
          🏆 Top Performers This Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Raj Kumar", xp: 15420, challenges: 8, badge: "🥇" },
            { name: "Priya Sharma", xp: 12850, challenges: 7, badge: "🥈" },
            { name: "Amit Patel", xp: 11230, challenges: 6, badge: "🥉" }
          ].map((performer, index) => (
            <div key={index} className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-3xl mb-2">{performer.badge}</div>
              <h3 className="font-semibold">{performer.name}</h3>
              <p className="text-sm text-muted-foreground">{performer.xp.toLocaleString()} XP</p>
              <p className="text-xs text-muted-foreground">{performer.challenges} challenges</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/leaderboard">
            <Button variant="outline">
              View Full Leaderboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
