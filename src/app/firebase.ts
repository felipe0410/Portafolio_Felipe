// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEAYFut0tS073N7PLih4XTbzV_ofVtBq0",
    authDomain: "felipemontana0410.firebaseapp.com",
    projectId: "felipemontana0410",
    storageBucket: "felipemontana0410.appspot.com",
    messagingSenderId: "846242265464",
    appId: "1:846242265464:web:8de09de16516b7d4eeb08d",
    measurementId: "G-LPHJE6Z1JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);