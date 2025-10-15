import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, type User } from "firebase/auth";

export type UserProfile = {
  uid: string;
  name: string;
  age: number | null;
  focusArea: string;
  email: string | null;
  photoURL: string | null;
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
    const ref = doc(db, "profiles", user.uid);
    const unsubProfile = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        setProfile({
          uid: user.uid,
          name: data.name,
          age: data.age ?? null,
          focusArea: data.focusArea ?? "stocks",
          email: data.email ?? user.email ?? null,
          photoURL: data.photoURL ?? user.photoURL ?? null,
        });
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubProfile();
  }, [user]);

  return { profile, user, loading } as const;
}


