import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5JBiTFFKVPFHGdlQp0AV8KLGjz_Bxx3w",
  authDomain: "coderhouse-reactjs-14b90.firebaseapp.com",
  projectId: "coderhouse-reactjs-14b90",
  storageBucket: "coderhouse-reactjs-14b90.appspot.com",
  messagingSenderId: "129363112289",
  appId: "1:129363112289:web:a7016f096349791f4d9520"
};


initializeApp(firebaseConfig);

export const db = getFirestore()