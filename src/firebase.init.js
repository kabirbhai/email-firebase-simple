// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfTaq3vFUSyrzvbJY9_D8SG9-epAZ5pes",
  authDomain: "email-firebase-simple.firebaseapp.com",
  projectId: "email-firebase-simple",
  storageBucket: "email-firebase-simple.appspot.com",
  messagingSenderId: "891844701094",
  appId: "1:891844701094:web:ff0f53a511ac67de1b3d67",
  measurementId: "G-LTBWWCY1F4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
