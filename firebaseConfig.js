
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaVnGVgNBLYWLZZFWh4klvqowrk5tDqXc",
    authDomain: "pasiya-ai.firebaseapp.com",
    projectId: "pasiya-ai",
    storageBucket: "pasiya-ai.firebasestorage.app",
    messagingSenderId: "51322829115",
    appId: "1:51322829115:web:bec65a5c4858bbea4edf1e",
    measurementId: "G-L7RQQGRFXS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

