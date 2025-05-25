import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBRMxEW6Sku_oOs0KvN_OFNQ2Q_XkRiY3c",
  authDomain: "neww-d7675.firebaseapp.com",
  projectId: "neww-d7675",
  storageBucket: "neww-d7675.firebasestorage.app",
  messagingSenderId: "187982683877",
  appId: "1:187982683877:web:b561c61c5f389a31e5fe0c"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Messaging instance
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export { app, auth, provider, signInWithPopup, messaging, getToken, onMessage };
