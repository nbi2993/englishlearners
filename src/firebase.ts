
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcHFYOgJW26hE5m_yB7Uin2kT9nDHrYNs",
  authDomain: "englishlearners-8df3c.firebaseapp.com",
  databaseURL: "https://englishlearners-8df3c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "englishlearners-8df3c",
  storageBucket: "englishlearners-8df3c.firebasestorage.app",
  messagingSenderId: "319158527417",
  appId: "1:319158527417:web:2694120f09af8f33288268",
  measurementId: "G-261495R2XF"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { auth, db, analytics };
