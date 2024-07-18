// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-nekretnine-8ca37.firebaseapp.com",
  projectId: "mern-nekretnine-8ca37",
  storageBucket: "mern-nekretnine-8ca37.appspot.com",
  messagingSenderId: "739467701745",
  appId: "1:739467701745:web:d0d3c5936f82cb8360e850",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
