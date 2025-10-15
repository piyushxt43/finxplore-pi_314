import { Progress } from "@/components/ui/progress";
import { Flame } from "lucide-react";
import { useUserProfile } from "@/hooks/use-user-profile";

const Profile = () => {
  const { profile, loading } = useUserProfile();
  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 rounded-xl mb-8">Loading...</div>
      </div>
    );
  }
  if (!profile) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 rounded-xl mb-8">Please complete onboarding.</div>
      </div>
    );
  }
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex items-center gap-6 mb-6">
          {profile.photoURL ? (
            <img src={profile.photoURL} alt={profile.name} className="w-24 h-24 rounded-full object-cover" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">
                {profile.name?.[0]?.toUpperCase() ?? "U"}
              </span>
            </div>
          )}
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">{profile.name}</h1>
            <p className="text-muted-foreground">
              {profile.age ? `${profile.age} years` : "Age not set"} • Focus: {profile.focusArea}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">Welcome back!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold gradient-text">18</div>
            <div className="text-sm text-muted-foreground">Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold gradient-text">8/45</div>
            <div className="text-sm text-muted-foreground">Badges</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold gradient-text">#127</div>
            <div className="text-sm text-muted-foreground">Rank</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-2xl font-heading font-bold mb-6">Learning Progress</h2>
        {["Stocks 101", "Crypto Fundamentals", "Options Trading"].map((module, i) => (
          <div key={module} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{module}</span>
              <span className="text-muted-foreground">{[75, 60, 30][i]}%</span>
            </div>
            <Progress value={[75, 60, 30][i]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
