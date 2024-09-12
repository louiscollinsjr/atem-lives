// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
console.log(import.meta.env);


console.log('all env', import.meta.env);
console.log('one key', import.meta.env.VITE_FIREBASE_API_KEY);

// const db = getFirestore(app,'my_collection')
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, 'contacts');



console.log("Firestore initialized:", db);