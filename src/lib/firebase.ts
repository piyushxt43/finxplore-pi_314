import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration - all values should come from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Validate that all required Firebase config values are present
const requiredConfigKeys = ['apiKey', 'authDomain', 'projectId', 'appId'] as const;
const missingConfigKeys = requiredConfigKeys.filter(key => !firebaseConfig[key]);

if (missingConfigKeys.length > 0) {
  console.error('Missing Firebase configuration:', missingConfigKeys);
  console.warn('Firebase configuration is incomplete. Please set the required environment variables.');
  // Don't throw error in development - just warn
  if (import.meta.env.PROD) {
    throw new Error(`Missing required Firebase configuration: ${missingConfigKeys.join(', ')}`);
  }
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Configure Google provider with proper settings
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');
// Remove the problematic prompt parameter that can cause auth issues
// googleProvider.setCustomParameters({ prompt: "select_account" });

export const db = getFirestore(app);

// Initialize Analytics (only in browser environment and if supported)
export const analytics = typeof window !== 'undefined' && isSupported() 
  ? getAnalytics(app) 
  : null;


