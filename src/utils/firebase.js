// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNgnT_DyP4RuQRaepeyRl4CcpoBKP6hys",
  authDomain: "clone-c9b9a.firebaseapp.com",
  projectId: "clone-c9b9a",
  storageBucket: "clone-c9b9a.firebasestorage.app",
  messagingSenderId: "210103554461",
  appId: "1:210103554461:web:f010f1f8fd0d6ac4c9df74",
  measurementId: "G-SWCTRWVQFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();