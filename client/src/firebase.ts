// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d2e25.firebaseapp.com",
  projectId: "mern-estate-d2e25",
  storageBucket: "mern-estate-d2e25.appspot.com",
  messagingSenderId: "187110279495",
  appId: "1:187110279495:web:ff90920cc235e7ecc86462",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
