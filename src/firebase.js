import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXg2GdyaNolNZcGN46bj2z-SmJa2RofRY",
    authDomain: "elizabeth-land.firebaseapp.com",
    projectId: "elizabeth-land",
    storageBucket: "elizabeth-land.firebasestorage.app",
    messagingSenderId: "410312851170",
    appId: "1:410312851170:web:18324cef4f384c1f4668bb",
    measurementId: "G-W6PHQ13WLY"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);