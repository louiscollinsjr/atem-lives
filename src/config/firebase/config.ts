// src/firebase.ts
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// console.log(import.meta.env);


// console.log('all env', import.meta.env);
// console.log('one key', import.meta.env.VITE_FIREBASE_API_KEY);



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = getFirestore(app, 'contacts');
// Initialize Firestore with settings
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});


// console.log("Firestore initialized:", db);
// console.log("Auth initialized:", auth);

export { db, auth };