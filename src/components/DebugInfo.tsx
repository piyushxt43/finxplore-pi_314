import { useUserProfile } from "@/hooks/use-user-profile";
import { useState } from "react";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

export const DebugInfo = () => {
  const { profile, user, loading } = useUserProfile();
  const [isVisible, setIsVisible] = useState(false);

  // Always show in development, but make it toggleable
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="gap-2"
        >
          <Eye className="w-4 h-4" />
          Debug
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-sm z-50 border border-gray-600">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Debug Info</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 p-0 text-white hover:bg-white/20"
        >
          <EyeOff className="w-3 h-3" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <div>
          <div className="font-semibold">Environment:</div>
          <div className="text-green-400">Development Mode</div>
        </div>
        
        <div>
          <div className="font-semibold">Firebase Config:</div>
          <div className="space-y-1">
            <div>API Key: {import.meta.env.VITE_FIREBASE_API_KEY ? "✅" : "❌"}</div>
            <div>Auth Domain: {import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? "✅" : "❌"}</div>
            <div>Project ID: {import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✅" : "❌"}</div>
          </div>
        </div>
        
        <div>
          <div className="font-semibold">Auth State:</div>
          <div>User: {user ? "✅ Logged in" : "❌ Not logged in"}</div>
          <div>Loading: {loading ? "🔄 Yes" : "✅ No"}</div>
          <div>Profile: {profile ? "✅ Loaded" : "❌ Not loaded"}</div>
          {user && (
            <div className="text-xs text-gray-300">
              Email: {user.email || "N/A"}<br/>
              UID: {user.uid.slice(0, 8)}...
            </div>
          )}
        </div>
        
        {profile && (
          <div>
            <div className="font-semibold">Profile Data:</div>
            <div>XP: {profile.xp}</div>
            <div>Level: {profile.level}</div>
            <div>Lessons: {profile.completedLessons?.length || 0}</div>
            <div>Badges: {profile.badges?.length || 0}</div>
          </div>
        )}
        
        <div>
          <div className="font-semibold">Current URL:</div>
          <div className="text-xs text-gray-300 break-all">
            {window.location.href}
          </div>
        </div>
      </div>
    </div>
  );
};
