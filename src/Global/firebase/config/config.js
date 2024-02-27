// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE3FdxxCnn77h4bru9dybnLSgJItE1Jcw",
  authDomain: "ecommerce-codo-a-codo.firebaseapp.com",
  projectId: "ecommerce-codo-a-codo",
  storageBucket: "ecommerce-codo-a-codo.appspot.com",
  messagingSenderId: "1049684460368",
  appId: "1:1049684460368:web:17b61aed8dca66d5ac2255",
  measurementId: "G-H1H9653W1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseDb = getFirestore(app);
export const firebaseAuth = getAuth(app)