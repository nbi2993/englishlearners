// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);