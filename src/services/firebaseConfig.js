import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCgimYJPX-KnOg82Vl7-NBC1FWst5q4cfw",
  authDomain: "carrer-hub-1d709.firebaseapp.com",
  projectId: "carrer-hub-1d709",
  storageBucket: "carrer-hub-1d709.firebasestorage.app",
  messagingSenderId: "1046797976831",
  appId: "1:1046797976831:web:a205f3f1ccdf45479eb8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
