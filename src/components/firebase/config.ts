// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCM4fryGTs6V9FO5Ywn8HMt_8Yq-KDo5So',
    authDomain: 'chat-app-c195d.firebaseapp.com',
    projectId: 'chat-app-c195d',
    storageBucket: 'chat-app-c195d.appspot.com',
    messagingSenderId: '1077273682284',
    appId: '1:1077273682284:web:f8650c889e6454fbe99349',
    measurementId: 'G-YENM7G45EW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
const db = getFirestore(app)
