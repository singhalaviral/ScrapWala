// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRRKA4gfZmh8Jt6Z8HL43sEu66lCUgt7Y",
  authDomain: "otp-project-2ea8c.firebaseapp.com",
  projectId: "otp-project-2ea8c",
  storageBucket: "otp-project-2ea8c.appspot.com",
  messagingSenderId: "798068145472",
  appId: "1:798068145472:web:5910737289618301304ea5",
  measurementId: "G-78CYBERBBW"

  // apiKey: "AIzaSyDu3A4SSUIHbtaDFhVO7lu_MtqR8RhkGbA",
  // authDomain: "otp-project-818d1.firebaseapp.com",
  // projectId: "otp-project-818d1",
  // storageBucket: "otp-project-818d1.appspot.com",
  // messagingSenderId: "783737769393",
  // appId: "1:783737769393:web:de66ec9b46c7e34d090190",
  // measurementId: "G-KLMT97GBFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);