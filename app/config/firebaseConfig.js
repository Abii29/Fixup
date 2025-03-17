// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNLECAEjmejGRXsDdpdPgzICfSfsyouw",
  authDomain: "fixup-9bc99.firebaseapp.com",
  projectId: "fixup-9bc99",
  storageBucket: "fixup-9bc99.appspot.com", // 🔥 Fixed incorrect storageBucket
  messagingSenderId: "426898474917",
  appId: "1:426898474917:web:68d686f81312305fbc0a4c",
  measurementId: "G-CWN0X83QFD",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Fix for React Native Async Storage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
const analytics = getAnalytics(app);
