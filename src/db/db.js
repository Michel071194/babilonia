
import { initializeApp } from "firebase/app";

import { collection, getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUywbQ60xpBZsxxzhwvStEVktRyw-fuY",
  authDomain: "react-project-8f67d.firebaseapp.com",
  projectId: "react-project-8f67d",
  storageBucket: "react-project-8f67d.appspot.com",
  messagingSenderId: "694115153362",
  appId: "1:694115153362:web:ef1420a88da719e3de840b"
};

// Initialize Firebase
 const app =initializeApp(firebaseConfig);

 export const db = getFirestore()

 export const orderCollection= collection(db, 'orders')
