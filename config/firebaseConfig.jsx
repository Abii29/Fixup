// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (Replace with your actual credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBlNLECAEjmejGRXsDdpdPgzICfSfsyouw",
  authDomain: "fixup-9bc99.firebaseapp.com",
  projectId: "fixup-9bc99",
  storageBucket: "fixup-9bc99.appspot.com", // Fixed storageBucket
  messagingSenderId: "426898474917",
  appId: "1:426898474917:web:68d686f81312305fbc0a4c",
  measurementId: "G-CWN0X83QFD",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

// Export Firebase instances
export { auth, db };
