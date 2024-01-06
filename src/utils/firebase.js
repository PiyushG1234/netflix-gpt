// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW9D_hjgam65pYscLn8BHzPVQIsfK-Yy0",
  authDomain: "netflixgpt-962e9.firebaseapp.com",
  projectId: "netflixgpt-962e9",
  storageBucket: "netflixgpt-962e9.appspot.com",
  messagingSenderId: "399286363654",
  appId: "1:399286363654:web:1f10e9863aca2ddf0a0587",
  measurementId: "G-3YGFVX6TJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
