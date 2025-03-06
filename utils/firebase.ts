import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBJf1-73Asq-v5n6P8kB8P-0_org8_X1g",
  authDomain: "findanagency-c0cbe.firebaseapp.com",
  projectId: "findanagency-c0cbe",
  storageBucket: "findanagency-c0cbe.appspot.com",
  messagingSenderId: "569465110884",
  appId: "1:569465110884:web:df6d18853b792cbfa7ba71",
  measurementId: "G-LN5F7FS3JS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `campaigns/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
