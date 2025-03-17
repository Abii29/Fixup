// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth,getReactNativePeristance} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNLECAEjmejGRXsDdpdPgzICfSfsyouw",
  authDomain: "fixup-9bc99.firebaseapp.com",
  projectId: "fixup-9bc99",
  storageBucket: "fixup-9bc99.firebasestorage.app",
  messagingSenderId: "426898474917",
  appId: "1:426898474917:web:68d686f81312305fbc0a4c",
  measurementId: "G-CWN0X83QFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app, {
    persistence:getReactNativePeristance(ReactNativeAsyncStorage)
})
const analytics = getAnalytics(app);