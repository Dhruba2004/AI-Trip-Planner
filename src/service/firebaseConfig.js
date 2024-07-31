// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvp3HaNet5DsNAz7CZyCsubQR04FiNOiw",
  authDomain: "ai-travel-planner-132f0.firebaseapp.com",
  projectId: "ai-travel-planner-132f0",
  storageBucket: "ai-travel-planner-132f0.appspot.com",
  messagingSenderId: "1040624382062",
  appId: "1:1040624382062:web:4e467a3d117396ea45767f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
