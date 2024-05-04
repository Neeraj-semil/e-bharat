// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9T6BEsmNKrjFafDYHaIjn80uyU2B1KEo",
  authDomain: "online-cart-3da2d.firebaseapp.com",
  projectId: "online-cart-3da2d",
  storageBucket: "online-cart-3da2d.appspot.com",
  messagingSenderId: "783785203471",
  appId: "1:783785203471:web:ad4d945709bd33d883907a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }