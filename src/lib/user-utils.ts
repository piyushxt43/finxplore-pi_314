import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";
import { UserProfile } from "@/hooks/use-user-profile";

export async function ensureUserProfile(user: User): Promise<UserProfile> {
  const userRef = doc(db, "profiles", user.uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    // User profile exists, return it
    const data = userSnap.data();
    return {
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
    };
  } else {
    // User profile doesn't exist, create it with default values
    const defaultProfile = {
      uid: user.uid,
      name: user.displayName || "User",
      age: null,
      focusArea: "stocks",
      email: user.email ?? null,
      photoURL: user.photoURL ?? null,
      xp: 0,
      level: 1,
      completedLessons: [],
      badges: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    
    await setDoc(userRef, defaultProfile, { merge: true });
    
    return {
      uid: user.uid,
      name: defaultProfile.name,
      age: defaultProfile.age,
      focusArea: defaultProfile.focusArea,
      email: defaultProfile.email,
      photoURL: defaultProfile.photoURL,
      xp: defaultProfile.xp,
      level: defaultProfile.level,
      completedLessons: defaultProfile.completedLessons,
      badges: defaultProfile.badges,
    };
  }
}

export async function updateUserProgress(
  userId: string, 
  lessonId: string, 
  xpGained: number
): Promise<void> {
  const userRef = doc(db, "profiles", userId);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    throw new Error("User profile not found");
  }
  
  const currentData = userSnap.data();
  const currentXp = currentData.xp || 0;
  const currentLevel = currentData.level || 1;
  const completedLessons = currentData.completedLessons || [];
  
  // Check if lesson is already completed
  if (completedLessons.includes(lessonId)) {
    return; // Already completed, don't add XP again
  }
  
  const newXp = currentXp + xpGained;
  const newLevel = Math.floor(newXp / 100) + 1; // Simple level calculation
  const newCompletedLessons = [...completedLessons, lessonId];
  
  await setDoc(userRef, {
    xp: newXp,
    level: newLevel,
    completedLessons: newCompletedLessons,
    updatedAt: serverTimestamp(),
  }, { merge: true });
}
