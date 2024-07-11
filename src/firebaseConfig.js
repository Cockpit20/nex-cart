// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNx2SpnXkw6NPsKFTj68XZOz86X54B-vc",
    authDomain: "nex-cart.firebaseapp.com",
    projectId: "nex-cart",
    storageBucket: "nex-cart.appspot.com",
    messagingSenderId: "534550224965",
    appId: "1:534550224965:web:a9d2d41c807dc5d23ec32c",
    measurementId: "G-YYJJZRCQ62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);