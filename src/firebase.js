// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyAxcn5XfyRh54u4VUNwbs0FEWBPJalax58",
    authDomain: "react-auth-7b520.firebaseapp.com",
    projectId: "react-auth-7b520",
    storageBucket: "react-auth-7b520.appspot.com",
    messagingSenderId: "605596726008",
    appId: "1:605596726008:web:fd574d14abf243f0b6010d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

