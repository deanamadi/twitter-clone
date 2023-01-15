// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9jlSh5Fk924J6uG9kUkwN2icFOk8NGzo",
  authDomain: "twitter-clone-f5866.firebaseapp.com",
  projectId: "twitter-clone-f5866",
  storageBucket: "twitter-clone-f5866.appspot.com",
  messagingSenderId: "87706670184",
  appId: "1:87706670184:web:95821d0fdfe33689e5d7dd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
