// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfhXNmAFwYZ72nYcLfA8oo3wPVSYLpdCw",
  authDomain: "headstarterpantrytracker-32cdf.firebaseapp.com",
  projectId: "headstarterpantrytracker-32cdf",
  storageBucket: "headstarterpantrytracker-32cdf.appspot.com",
  messagingSenderId: "167021002079",
  appId: "1:167021002079:web:12a78990534f9be1f4caea",
  //measurementId: "G-ZP3TYZ6Z73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
//const analytics = getAnalytics(app);