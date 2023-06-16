import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-website-1-24a3f.firebaseapp.com",
  projectId: "react-website-1-24a3f",
  storageBucket: "react-website-1-24a3f.appspot.com",
  messagingSenderId: "63924283552",
  appId: "1:63924283552:web:8f969e78c229c5629d01c5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);