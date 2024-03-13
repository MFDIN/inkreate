// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP7bOCB18ScriFJh2RT3ZETI5wwjrtr-Y",
  authDomain: "garbage-1036b.firebaseapp.com",
  projectId: "garbage-1036b",
  storageBucket: "garbage-1036b.appspot.com",
  messagingSenderId: "214754063776",
  appId: "1:214754063776:web:a918b26bdff17b8c8aa0c5",
  measurementId: "G-59W0DBVRJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);