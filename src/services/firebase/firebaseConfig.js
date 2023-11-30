import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCwj9iLXERkkNtMKNNSeUYRiIrvta6O1A0",
    authDomain: "calmer-5e187.firebaseapp.com",
    projectId: "calmer-5e187",
    storageBucket: "calmer-5e187.appspot.com",
    messagingSenderId: "12103196429",
    appId: "1:12103196429:web:074b2973745007c58c1a44"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



