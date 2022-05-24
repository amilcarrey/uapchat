// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf6djBw6MG61oXb3l52YCRcRhHloqU6cs",
  authDomain: "asdasda-c4888.firebaseapp.com",
  projectId: "asdasda-c4888",
  storageBucket: "asdasda-c4888.appspot.com",
  messagingSenderId: "102087229293",
  appId: "1:102087229293:web:3ca05c586fd0da8401e464"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth()

export async function login(email: string, password: string) {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password)
  return userCredentials.user
}