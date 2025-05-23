// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRMxEW6Sku_oOs0KvN_OFNQ2Q_XkRiY3c",
  authDomain: "228e-2401-4900-1c0f-5551-412a-198f-5c76-160f.ngrok-free.app",
  projectId: "neww-d7675",
  storageBucket: "neww-d7675.firebasestorage.app",
  messagingSenderId: "187982683877",
  appId: "1:187982683877:web:b561c61c5f389a31e5fe0c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
