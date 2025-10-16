import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Calendar, 
  Target, 
  TrendingUp, 
  Bitcoin, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Star
} from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [focusArea, setFocusArea] = useState("stocks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate("/");
      return;
    }
    // Prefill display name if available
    if (user.displayName && !name) setName(user.displayName);
    // If profile already exists, skip
    const checkProfile = async () => {
      const ref = doc(db, "profiles", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        navigate("/profile");
      }
    };
    checkProfile();
  }, [navigate, name]);

  const steps = [
    { id: 1, title: "Personal Info", icon: User, description: "Tell us about yourself" },
    { id: 2, title: "Investment Focus", icon: Target, description: "Choose your learning path" },
    { id: 3, title: "Welcome!", icon: Trophy, description: "You're all set!" }
  ];

  const focusAreas = [
    {
      id: "stocks",
      title: "Stocks & Equity",
      description: "Learn about stock market investing",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: "crypto",
      title: "Cryptocurrency",
      description: "Master digital assets safely",
      icon: Bitcoin,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      id: "forex",
      title: "Forex Trading",
      description: "Navigate currency markets",
      icon: DollarSign,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: "options",
      title: "Options Trading",
      description: "Advanced derivatives strategies",
      icon: BarChart3,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(step => step !== currentStep - 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
    setLoading(true);
    setError(null);
    
    try {
      // Show success animation
      setShowSuccess(true);
      setCompletedSteps([...completedSteps, currentStep]);
      
      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const ref = doc(db, "profiles", user.uid);
      await setDoc(ref, {
        uid: user.uid,
        name: name.trim(),
        age: age ? Number(age) : null,
        focusArea,
        email: user.email ?? null,
        photoURL: user.photoURL ?? null,
        // Initialize XP and level system
        xp: 0,
        level: 1,
        completedLessons: [],
        badges: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      
      // Wait for the profile to be saved and detected
      await new Promise((resolve) => setTimeout(resolve, 200));
      
      toast({ 
        title: "🎉 Welcome to FinXplore!", 
        description: "Your learning journey starts now!" 
      });
      navigate("/", { replace: true });
    } catch (err) {
      setError("Failed to save profile. Please try again.");
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-2">
            <span className="gradient-text">Welcome to FinXplore!</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's set up your personalized learning journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isCurrent 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <StepIcon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {step.description}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`absolute top-6 left-1/2 w-full h-0.5 -z-10 ${
                      isCompleted ? 'bg-green-500' : 'bg-muted'
                    }`} style={{ left: 'calc(50% + 24px)', width: 'calc(100% - 48px)' }} />
                  )}
                </div>
              );
            })}
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-2" />
        </div>

        {/* Main Content */}
        <div className="glass-card p-8 rounded-xl">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="w-12 h-12 text-primary mx-auto mb-3" />
                <h2 className="text-2xl font-heading font-bold mb-2">Tell us about yourself</h2>
                <p className="text-muted-foreground">This helps us personalize your learning experience</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">What's your name?</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your full name"
                    className="h-12 text-base"
                    required 
                  />
          </div>
          <div className="space-y-2">
                  <Label htmlFor="age" className="text-base font-medium">How old are you? (Optional)</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    min="10" 
                    max="100" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    className="h-12 text-base"
                  />
                </div>
              </div>
              
              <Button 
                onClick={nextStep}
                disabled={!name.trim()}
                className="w-full h-12 text-base gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-3" />
                <h2 className="text-2xl font-heading font-bold mb-2">Choose your focus area</h2>
                <p className="text-muted-foreground">What would you like to learn about first?</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {focusAreas.map((area) => {
                  const AreaIcon = area.icon;
                  const isSelected = focusArea === area.id;
                  
                  return (
                    <button
                      key={area.id}
                      onClick={() => setFocusArea(area.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                        isSelected 
                          ? `${area.borderColor} ${area.bgColor} border-2` 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg ${area.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <AreaIcon className={`w-5 h-5 ${area.color}`} />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-base mb-1">{area.title}</h3>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  className="flex-1 h-12 text-base"
                >
                  Back
                </Button>
                <Button 
                  onClick={nextStep}
                  className="flex-1 h-12 text-base gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              {!showSuccess ? (
                <>
                  <div className="text-center mb-6">
                    <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h2 className="text-2xl font-heading font-bold mb-2">You're all set!</h2>
                    <p className="text-muted-foreground">Let's create your profile and start learning</p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Your Profile Summary
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{name}</span>
                      </div>
                      {age && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span className="font-medium">{age} years</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Area:</span>
                        <span className="font-medium">
                          {focusAreas.find(area => area.id === focusArea)?.title}
                        </span>
                      </div>
                    </div>
          </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                      className="flex-1 h-12 text-base"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 h-12 text-base gap-2"
                    >
                      {loading ? "Creating Profile..." : "Start Learning!"}
                      <Sparkles className="w-4 h-4" />
          </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2 text-green-600">
                    Profile Created Successfully!
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Welcome to your personalized learning journey
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">Redirecting to dashboard...</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;


