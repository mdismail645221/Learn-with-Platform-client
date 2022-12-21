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
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;