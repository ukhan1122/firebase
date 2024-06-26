// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABxk7BYt8DVymRuKDTdHgXNwY0ccOr7_8",
  authDomain: "flss-4d46a.firebaseapp.com",
  projectId: "flss-4d46a",
  storageBucket: "flss-4d46a.appspot.com",
  messagingSenderId: "168094005600",
  appId: "1:168094005600:web:80c84fd8a5d8ff5dc54605",
  measurementId: "G-Z31WESZP2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)