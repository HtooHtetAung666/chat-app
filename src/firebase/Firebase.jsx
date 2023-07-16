import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBccQA_4lv8nXb5Dq1pqr_lq0wO4fDwPZE",
  authDomain: "chat-app-670ff.firebaseapp.com",
  projectId: "chat-app-670ff",
  storageBucket: "chat-app-670ff.appspot.com",
  messagingSenderId: "982423036128",
  appId: "1:982423036128:web:f431fb2cc0362172b03085",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Firebase
export const auth = getAuth(app);

// Storage Firebase
export const db = getFirestore(app);
