// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzVx-8P7rXauR7me0ucmhWQ4DN-YeVF4",
  authDomain: "gallery-4dfb3.firebaseapp.com",
  projectId: "gallery-4dfb3",
  storageBucket: "gallery-4dfb3.appspot.com",
  messagingSenderId: "816362941442",
  appId: "1:816362941442:web:529769354651151ef08b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
