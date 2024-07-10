// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJQh1NK06KaAZZsuWpLuYnpVurDZv52Rk",
    authDomain: "responder--response-system.firebaseapp.com",
    databaseURL: "https://responder--response-system-default-rtdb.firebaseio.com",
    projectId: "responder--response-system",
    storageBucket: "responder--response-system.appspot.com",
    messagingSenderId: "478410201618",
    appId: "1:478410201618:web:eb235e53d817eedd8e96cb"
  };

// Initialize Firebase
console.log('Firebase Config:', firebaseConfig); 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('Firebase App Initialized:', app);
export { auth };
export default app;