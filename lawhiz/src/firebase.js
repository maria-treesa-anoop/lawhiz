import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {  GoogleAuthProvider,signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAQxcCQARDrZapGHg0hmBMKjxQcjrVv4CA",
  authDomain: "lawhiz.firebaseapp.com",
  projectId: "lawhiz",
  storageBucket: "lawhiz.appspot.com",
  messagingSenderId: "339119170668",
  appId: "1:339119170668:web:7bf780cca735a98a8ee449",
  measurementId: "G-CPN3T0J30D"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services (optional, depending on usage)
const analytics = getAnalytics(app);  // Enable analytics if needed
const auth = getAuth(app);    
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, googleAuthProvider,signInWithPopup,db };
export const firestore = getFirestore(app);