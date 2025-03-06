import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO162lQ_QqKKhlov1S9jtGApVqY6rJWok",
  authDomain: "mont-1ccf4.firebaseapp.com",
  projectId: "mont-1ccf4",
  storageBucket: "mont-1ccf4.firebasestorage.app",
  messagingSenderId: "844313679592",
  appId: "1:844313679592:web:7b388f5927ee756729db5d",
  measurementId: "G-H6MW1E5X7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

