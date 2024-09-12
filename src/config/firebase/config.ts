// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCtEfkjnf6YZzSlsv-p_mZCTmW6uhkvkBE",
  authDomain: "atem-gdn.firebaseapp.com",
  projectId: "atem-gdn",
  storageBucket: "atem-gdn.appspot.com",
  messagingSenderId: "1002160339608",
  appId: "1:1002160339608:web:03e3e0f807ecf1f495aeed",
  measurementId: "G-XMWK2D9LLS"
};


console.log('Firebase config:', import.meta.env);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



console.log("Firestore initialized:", db);