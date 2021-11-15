import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAU_HaPJZW3NCXxvobWLpJGXyS0tAgDgu8",
  authDomain: "personal-blog-e6611.firebaseapp.com",
  projectId: "personal-blog-e6611",
  storageBucket: "personal-blog-e6611.appspot.com",
  messagingSenderId: "44728060828",
  appId: "1:44728060828:web:e28a92b160e60ebe475659"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)