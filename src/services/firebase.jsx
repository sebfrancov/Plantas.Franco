import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyO8koM6GhBY959z7gz9gavARRD-IuWcQ",
  authDomain: "plantas-454e9.firebaseapp.com",
  projectId: "plantas-454e9",
  storageBucket: "plantas-454e9.firebasestorage.app",
  messagingSenderId: "548780198231",
  appId: "1:548780198231:web:b10fc0872ca0905729d612"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)