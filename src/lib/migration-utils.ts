import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { UserProfile } from "@/hooks/use-user-profile";

export async function migrateUserProfile(userId: string): Promise<void> {
  const userRef = doc(db, "profiles", userId);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    return; // User doesn't exist, no migration needed
  }
  
  const data = userSnap.data();
  
  // Check if user needs migration (missing XP/level fields)
  if (data.xp === undefined || data.level === undefined || data.completedLessons === undefined || data.badges === undefined) {
    console.log(`Migrating user profile for ${userId}`);
    
    const migratedData = {
      ...data,
      xp: data.xp ?? 0,
      level: data.level ?? 1,
      completedLessons: data.completedLessons ?? [],
      badges: data.badges ?? [],
      updatedAt: serverTimestamp(),
    };
    
    await setDoc(userRef, migratedData, { merge: true });
    console.log(`Migration completed for ${userId}`);
  }
}

export async function migrateAllUsers(): Promise<void> {
  // This function would be called from an admin panel or during app initialization
  // For now, we'll handle migration on a per-user basis when they log in
  console.log("User migration will be handled individually on login");
}
