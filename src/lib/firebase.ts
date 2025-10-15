import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH0ZTkJDOEtyVTvh4Efo3WQ23gUmK7RE8",
  authDomain: "trial-1-9d942.firebaseapp.com",
  projectId: "trial-1-9d942",
  storageBucket: "trial-1-9d942.firebasestorage.app",
  messagingSenderId: "851953229329",
  appId: "1:851953229329:web:8c4aafb9779c007dd71bb0",
  measurementId: "G-0LVQ97PB28",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Ensure the Google account chooser is shown each time
googleProvider.setCustomParameters({ prompt: "select_account" });
export const db = getFirestore(app);


