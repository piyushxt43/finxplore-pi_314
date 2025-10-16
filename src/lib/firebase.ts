import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDH0ZTkJDOEtyVTvh4Efo3WQ23gUmK7RE8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "trial-1-9d942.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "trial-1-9d942",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "trial-1-9d942.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "851953229329",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:851953229329:web:8c4aafb9779c007dd71bb0",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-0LVQ97PB28",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Ensure the Google account chooser is shown each time
googleProvider.setCustomParameters({ prompt: "select_account" });
export const db = getFirestore(app);


