// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWi2pHsiV3hO0wAJRORnJE5VuXhvrgLIk",
  authDomain: "eshop-aa148.firebaseapp.com",
  projectId: "eshop-aa148",
  storageBucket: "eshop-aa148.appspot.com",
  messagingSenderId: "838835105499",
  appId: "1:838835105499:web:b1829727662d589ace66fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth