import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBHAxeswrAussOGQ6J0Jhz4HtZtPIb2Shk",
    authDomain: "userloginsignupin.firebaseapp.com",
    projectId: "userloginsignupin",
    storageBucket: "userloginsignupin.appspot.com",
    messagingSenderId: "752881918666",
    appId: "1:752881918666:web:e2761005ba336a33ad8a33",
    measurementId: "G-EHWS08MR92"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);