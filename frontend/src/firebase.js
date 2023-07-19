// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBxm-kwPZ3McK0z5OG4N_l7MONgKl4VKw4",
  authDomain: "orchid-2ef82.firebaseapp.com",
  databaseURL: "https://orchid-2ef82-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "orchid-2ef82",
  storageBucket: "orchid-2ef82.appspot.com",
  messagingSenderId: "499171125425",
  appId: "1:499171125425:web:e790d9c6c0aed6fc515a90",
  measurementId: "G-FQ5F5XSST2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);