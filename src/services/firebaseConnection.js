import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCDdJQU58hdNTVqYcXNPHayf69_UulFAVE",
    authDomain: "tickets-7220c.firebaseapp.com",
    projectId: "tickets-7220c",
    storageBucket: "tickets-7220c.appspot.com",
    messagingSenderId: "578585964540",
    appId: "1:578585964540:web:9c9ac1ca30cba54c98cc79"
};

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };