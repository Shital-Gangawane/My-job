// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBODekWsobUY_T0e9aaAwR2NbdZQdNF2kc",
  authDomain: "projob-13ccd.firebaseapp.com",
  projectId: "projob-13ccd",
  storageBucket: "projob-13ccd.appspot.com",
  messagingSenderId: "991601853348",
  appId: "1:991601853348:web:03d97fd890a5c5cc823731",
  measurementId: "G-XN44HBH253",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
