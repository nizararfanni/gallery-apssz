// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1dKKJPeBkG0HUTY33DMgzVGF0sWZ8w4",
  authDomain: "apps-gallery-20630.firebaseapp.com",
  projectId: "apps-gallery-20630",
  storageBucket: "apps-gallery-20630.firebasestorage.app",
  messagingSenderId: "129892859115",
  appId: "1:129892859115:web:600fbbe5edfb1f473592ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);
export const storage = getStorage(app);
console.log("fierebase initialized",storage);
