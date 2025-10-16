import { useParams, Link } from "react-router-dom";
import { modules } from "@/data/modules";
import { getModuleContent } from "@/data/content";
import { ArrowLeft, Clock, Zap, CheckCircle2, Star, Play, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useUserProfile } from "@/hooks/use-user-profile";
import { doc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { calculateLevel, checkForNewBadges } from "@/lib/level-utils";
import { XPAnimation } from "@/components/XPAnimation";
import { updateUserProgress } from "@/lib/user-utils";

const LessonDetail = () => {
  const { moduleId, lessonId } = useParams();
  const { profile } = useUserProfile();
  const { toast } = useToast();
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showXPAnimation, setShowXPAnimation] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [levelUp, setLevelUp] = useState<number | null>(null);
  const [newBadge, setNewBadge] = useState<string | null>(null);

  const module = modules.find(m => m.id === moduleId);
  const moduleContent = getModuleContent(moduleId!);
  
  if (!module || !moduleContent) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Content not found</h1>
        <Link to="/learn">
          <Button>Back to Learning Hub</Button>
        </Link>
      </div>
    );
  }

  const lesson = module.lessons.find(l => l.id === lessonId);
  const article = moduleContent.articles.find(a => a.id === lessonId);
  const quiz = moduleContent.quizzes.filter(q => q.id.startsWith(lessonId!));

  if (!lesson || !article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Lesson not found</h1>
        <Link to={`/module/${moduleId}`}>
          <Button>Back to Module</Button>
        </Link>
      </div>
    );
  }

  const isCompleted = profile?.completedLessons?.includes(lessonId!) || false;

  const handleCompleteLesson = async () => {
    if (!profile || isCompleted) return;

    try {
      // Use the utility function to update progress
      await updateUserProgress(profile.uid, lessonId!, lesson.xp);
      
      // Calculate new values for animation
      const newXp = profile.xp + lesson.xp;
      const newLevel = calculateLevel(newXp).level;
      const newCompletedLessons = [...(profile.completedLessons || []), lessonId!];
      
      // Check for new badges
      const newBadges = checkForNewBadges(newCompletedLessons, newLevel, newXp);

      // Show XP animation
      setXpGained(lesson.xp);
      if (newLevel > profile.level) {
        setLevelUp(newLevel);
      }
      if (newBadges.length > 0) {
        setNewBadge(newBadges[0].name);
      }
      setShowXPAnimation(true);

      let message = `You earned ${lesson.xp} XP!`;
      if (newLevel > profile.level) {
        message += ` Level up! You're now level ${newLevel}!`;
      }
      if (newBadges.length > 0) {
        message += ` New badge earned: ${newBadges[0].name}!`;
      }

      toast({
        title: "Lesson Completed!",
        description: message,
      });
    } catch (error) {
      console.error("Error completing lesson:", error);
      toast({
        title: "Error",
        description: "Failed to complete lesson. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleQuizSubmit = () => {
    if (!profile) return;

    let correctAnswers = 0;
    quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = (correctAnswers / quiz.length) * 100;
    const xpEarned = Math.round((score / 100) * lesson.xp);

    toast({
      title: `Quiz Complete!`,
      description: `Score: ${score.toFixed(0)}% - You earned ${xpEarned} XP!`,
    });

    setQuizSubmitted(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-blue-500/20 text-blue-400";
      case "Advanced": return "bg-orange-500/20 text-orange-400";
      case "Expert": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link to={`/module/${moduleId}`}>
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to {module.title}
        </Button>
      </Link>

      {/* Lesson Header */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">{lesson.title}</h1>
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className={getDifficultyColor(lesson.difficulty)}>
                {lesson.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-primary">
                <Zap className="w-4 h-4" />
                <span>{lesson.xp} XP</span>
              </div>
            </div>
          </div>
          {isCompleted && (
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-semibold">Completed</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Learning Progress</span>
            <span>{isCompleted ? "100%" : "0%"}</span>
          </div>
          <Progress value={isCompleted ? 100 : 0} />
        </div>
      </div>

      {/* Article Content */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed mb-6">
            {article.content}
          </div>
          
          {/* External Article Link */}
          {article.externalLink && (
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Read Full Article
              </h3>
              <p className="text-muted-foreground mb-4">
                Click below to read the complete article with detailed information and examples.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open(article.externalLink, '_blank')}
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <ExternalLink className="w-4 h-4" />
                Read Full Article
              </Button>
            </div>
          )}
        </div>


        {/* Key Points */}
        <div className="mt-8 p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Key Takeaways
          </h3>
          <ul className="space-y-2">
            {article.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complete Lesson Button */}
        {!isCompleted && (
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              onClick={handleCompleteLesson}
              className="bg-primary hover:bg-primary-glow"
            >
              Mark as Complete (+{lesson.xp} XP)
            </Button>
          </div>
        )}
      </div>

      {/* Quiz Section */}
      {quiz.length > 0 && (
        <div className="glass-card p-8 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold">Test Your Knowledge</h2>
            <Button 
              variant="outline" 
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {showQuiz ? "Hide Quiz" : "Take Quiz"}
            </Button>
          </div>

          {showQuiz && (
            <div className="space-y-6">
              {quiz.map((question, index) => (
                <div key={question.id} className="p-6 bg-card/50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={optionIndex}
                          checked={quizAnswers[question.id] === optionIndex}
                          onChange={(e) => setQuizAnswers(prev => ({
                            ...prev,
                            [question.id]: parseInt(e.target.value)
                          }))}
                          className="w-4 h-4"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {quizSubmitted && (
                    <div className="mt-4 p-4 rounded-lg bg-muted">
                      <p className="font-semibold mb-2">
                        {quizAnswers[question.id] === question.correctAnswer ? "✅ Correct!" : "❌ Incorrect"}
                      </p>
                      <p className="text-sm text-muted-foreground">{question.explanation}</p>
                    </div>
                  )}
                </div>
              ))}

              {!quizSubmitted ? (
                <div className="text-center">
                  <Button 
                    size="lg" 
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length !== quiz.length}
                  >
                    Submit Quiz
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <Button size="lg" variant="outline" onClick={() => window.location.reload()}>
                    Retake Quiz
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* XP Animation */}
      <XPAnimation
        xp={xpGained}
        level={levelUp || undefined}
        badge={newBadge || undefined}
        isVisible={showXPAnimation}
        onComplete={() => {
          setShowXPAnimation(false);
          setLevelUp(null);
          setNewBadge(null);
        }}
      />
    </div>
  );
};

export default LessonDetail;
