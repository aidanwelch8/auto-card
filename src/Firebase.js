import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKttmz1earv4jdRI091cuj71mDx-Ivtj4",
  authDomain: "auto-card-5f7d2.firebaseapp.com",
  projectId: "auto-card-5f7d2",
  storageBucket: "auto-card-5f7d2.appspot.com",
  messagingSenderId: "1040560043952",
  appId: "1:1040560043952:web:4851e06ab35d3fcdef0875",
  measurementId: "G-DMMVD5S7KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
