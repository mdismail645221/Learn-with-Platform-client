// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApEUvQyfI4HNz1TRbwkVhRPuMTp32N2ug",
  authDomain: "auth-edu-learning.firebaseapp.com",
  projectId: "auth-edu-learning",
  storageBucket: "auth-edu-learning.appspot.com",
  messagingSenderId: "771067941686",
  appId: "1:771067941686:web:fc24e934fec36b1bce9997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;