import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
  authDomain: "leve-book.firebaseapp.com",
  projectId: "leve-book",
  storageBucket: "leve-book.appspot.com",
  messagingSenderId: "406182333254",
  appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);