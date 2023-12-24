// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcaReLHUb4E_DcD4hwbGVAi69BiC89KE",
  authDomain: "tasknest-ec8af.firebaseapp.com",
  projectId: "tasknest-ec8af",
  storageBucket: "tasknest-ec8af.appspot.com",
  messagingSenderId: "469861594110",
  appId: "1:469861594110:web:444d617e98a0fd44c9c6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
