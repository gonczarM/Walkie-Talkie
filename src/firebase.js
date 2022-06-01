import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = { 
    apiKey: "AIzaSyA9MkE30eF7WDRtyfFvYJYVGM7NJLpuk44",
    authDomain: "walkie-talkie-8cf5d.firebaseapp.com",
    projectId: "walkie-talkie-8cf5d",
    storageBucket: "walkie-talkie-8cf5d.appspot.com",
    messagingSenderId: "878637578042",
    appId: "1:878637578042:web:689763c0da74ed5189c203",
    measurementId: "G-JBDYFNXMHC"
};

const app = initializeApp(firebaseConfig);

export const db = getStorage(app);
export const auth = getAuth(app);
export const storage = getFirestore(app);