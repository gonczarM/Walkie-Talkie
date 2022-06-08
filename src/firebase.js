import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    apiKey: "AIzaSyA9MkE30eF7WDRtyfFvYJYVGM7NJLpuk44",
    authDomain: "walkie-talkie-8cf5d.firebaseapp.com",
    projectId: "walkie-talkie-8cf5d",
    storageBucket: "walkie-talkie-8cf5d.appspot.com",
    messagingSenderId: "878637578042",
    appId: "1:878637578042:web:689763c0da74ed5189c203",
    measurementId: "G-JBDYFNXMHC"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();