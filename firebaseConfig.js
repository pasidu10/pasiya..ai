// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaVnGVgNBLYWLZZFWh4klvqowrk5tDqXc",
  authDomain: "pasiya-ai.firebaseapp.com",
  projectId: "pasiya-ai",
  storageBucket: "pasiya-ai.firebasestorage.app",
  messagingSenderId: "51322829115",
  appId: "1:51322829115:web:c411a7303b0644df4edf1e",
  measurementId: "G-Z62NGWK4M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
