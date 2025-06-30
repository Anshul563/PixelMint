import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVDVcsLXV8v1EWJTiQO0NXZA6pvTBPnuU",
  authDomain: "pixel-mint.firebaseapp.com",
  projectId: "pixel-mint",
  storageBucket: "pixel-mint.firebasestorage.app",
  messagingSenderId: "874575479115",
  appId: "1:874575479115:web:9164ea637ade40e7b9a8ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };