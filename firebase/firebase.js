// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXpEVW8mxPHgAkDFv_BKkA1xX_C9V5IT4",
  authDomain: "absenku-fe810.firebaseapp.com",
  projectId: "absenku-fe810",
  storageBucket: "absenku-fe810.appspot.com",
  messagingSenderId: "135310368249",
  appId: "1:135310368249:web:08ed2c9ea09c827bd6b128"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

export { db };
