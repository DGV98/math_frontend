// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxGl-KMd7Ps1aFbUWwBgXbNCAn8Icg2F8",
  authDomain: "math-generator-dae44.firebaseapp.com",
  projectId: "math-generator-dae44",
  storageBucket: "math-generator-dae44.appspot.com",
  messagingSenderId: "487232904333",
  appId: "1:487232904333:web:f9ffd983ba013d923a56c4",
  measurementId: "G-57DZ25S7ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);