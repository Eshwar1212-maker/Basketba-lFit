import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBwJpfw2NpURiwT6-jgQb2wJECm2X3FKAk",
  authDomain: "basketballfit-15b82.firebaseapp.com",
  projectId: "basketballfit-15b82",
  storageBucket: "basketballfit-15b82.appspot.com",
  messagingSenderId: "906355673218",
  appId: "1:906355673218:web:c52159f1c962a96a1f0c9b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);