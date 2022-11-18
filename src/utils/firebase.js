// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXeLOZDq34mrgJrfuT4aJvFuyKqhqsm6E",
  authDomain: "rc-react-c8ed1.firebaseapp.com",
  projectId: "rc-react-c8ed1",
  storageBucket: "rc-react-c8ed1.appspot.com",
  messagingSenderId: "261813743761",
  appId: "1:261813743761:web:01a4887304ede6e9708f30",
  measurementId: "G-ELB35L064V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);