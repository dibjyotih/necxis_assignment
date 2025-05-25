# Necxis Project

Necxis is a cross-platform app combining a **Next.js web frontend** with an **Expo Android app backend**. It features **Firebase Google Sign-In** and **Push Notifications** using **Firebase Cloud Messaging (FCM)**.

Website can be viewed via : https://necxis-assignment-phi.vercel.app/

---
![Screenshot 2025-05-24 175100](https://github.com/user-attachments/assets/0b4ba56e-8a38-4b21-9182-fe7601f062eb)


## 🔥 Frontend: `nextjs-web`

### 🔧 Features
- Google Sign-In via Firebase
- Firebase Cloud Messaging (FCM)
- MUI UI with Dark/Light toggle
- Runs inside Expo WebView

### 🛠 Setup
1. Create Firebase project
2. Enable Google Sign-In (Authentication → Google)
3. Enable FCM (Settings → Cloud Messaging → Generate VAPID key)

### 📁 Firebase Config
Paste your Firebase config into `lib/firebase.ts` or use `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_VAPID_KEY=...

## Run
git clone https://github.com/YOUR_USERNAME/nextjs-web.git
cd nextjs-web
npm install
npm run dev

## Folder Structure
![Screenshot 2025-05-25 151821](https://github.com/user-attachments/assets/f086bcbf-2efa-4dd4-8ae1-0736aba8f331)

The front end runs on localhost:3000 after lauching the firebase.ts as npm run dev
## Expo

Expo part is available in https://github.com/dibjyotih/necxis_submit
you can run the website in your expo-go app

## 📦 Tech Stack
Frontend: Next.js, MUI, Firebase

Mobile: Expo, WebView, Firebase Native FCM

✅ Done
 Google Auth via Firebase

 Web Push with VAPID

 Native FCM on Android
