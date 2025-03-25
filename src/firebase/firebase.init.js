// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEkDbj127suXHixFSLlICLd1gVNdew2Vs',
  authDomain: 'coffee-project-auth-321fe.firebaseapp.com',
  projectId: 'coffee-project-auth-321fe',
  storageBucket: 'coffee-project-auth-321fe.firebasestorage.app',
  messagingSenderId: '466205693612',
  appId: '1:466205693612:web:e0460a9705cc1b16a8b109',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
