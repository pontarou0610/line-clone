import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbh5WIX46E__v2s4bZvmDebJO7GkTm1go",
    authDomain: "line-clone-aef80.firebaseapp.com",
    projectId: "line-clone-aef80",
    storageBucket: "line-clone-aef80.appspot.com",
    messagingSenderId: "1014442180046",
    appId: "1:1014442180046:web:eaa490a17586253c903f9f",
    measurementId: "G-PWT90Z61GJ"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db,auth};