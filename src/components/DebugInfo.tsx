import { useUserProfile } from "@/hooks/use-user-profile";

export const DebugInfo = () => {
  const { profile, user, loading } = useUserProfile();

  if (process.env.NODE_ENV !== "development") {
    return null; // Only show in development
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Debug Info</h3>
      <div className="space-y-1">
        <div>User: {user ? "Logged in" : "Not logged in"}</div>
        <div>Loading: {loading ? "Yes" : "No"}</div>
        <div>Profile: {profile ? "Loaded" : "Not loaded"}</div>
        {profile && (
          <>
            <div>XP: {profile.xp}</div>
            <div>Level: {profile.level}</div>
            <div>Lessons: {profile.completedLessons?.length || 0}</div>
            <div>Badges: {profile.badges?.length || 0}</div>
          </>
        )}
      </div>
    </div>
  );
};
