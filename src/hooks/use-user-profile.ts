import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, type User } from "firebase/auth";
import { ensureUserProfile } from "@/lib/user-utils";
import { migrateUserProfile } from "@/lib/migration-utils";

export type UserProfile = {
  uid: string;
  name: string;
  age: number | null;
  focusArea: string;
  email: string | null;
  photoURL: string | null;
  xp: number;
  level: number;
  completedLessons: string[];
  badges: string[];
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      if (!nextUser) {
        setProfile(null);
        setLoading(false);
      }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    
    // Ensure user profile exists and get initial data
    ensureUserProfile(user).then(async (profileData) => {
      // Migrate user profile if needed
      await migrateUserProfile(user.uid);
      setProfile(profileData);
      setLoading(false);
    }).catch((error) => {
      console.error("Error ensuring user profile:", error);
      setProfile(null);
      setLoading(false);
    });
    
    // Set up real-time listener for profile updates
    const ref = doc(db, "profiles", user.uid);
    const unsubProfile = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile({
          uid: user.uid,
          name: data.name,
          age: data.age ?? null,
          focusArea: data.focusArea ?? "stocks",
          email: data.email ?? user.email ?? null,
          photoURL: data.photoURL ?? user.photoURL ?? null,
          xp: data.xp ?? 0,
          level: data.level ?? 1,
          completedLessons: data.completedLessons ?? [],
          badges: data.badges ?? [],
        });
      }
    });
    
    return () => unsubProfile();
  }, [user]);

  return { profile, user, loading } as const;
}


