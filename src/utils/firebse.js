// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDaFP_RMHP3HExOJ7Ig8CO90aX0SqPceQ",
  authDomain: "food-pp.firebaseapp.com",
  projectId: "food-pp",
  storageBucket: "food-pp.appspot.com",
  messagingSenderId: "30126655668",
  appId: "1:30126655668:web:3f081c4c099554ead86fe1",
  measurementId: "G-9ZDG8K4YDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();