// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDKXbVLNuF1q51ZSfHNbV9Wzz0CBZZy14",
  authDomain: "medicinal-plants-44256.firebaseapp.com",
  projectId: "medicinal-plants-44256",
  storageBucket: "medicinal-plants-44256.firebasestorage.app",
  messagingSenderId: "877647956380",
  appId: "1:877647956380:web:4a3f0b271cf0ecd9a02059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const firestore = getFirestore(app);
 const db = firestore;
export {app, auth, firestore,db};
