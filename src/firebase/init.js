import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB92XOeV5xz_NhfLrceNiWQv8AMeUJ6jbw",
  authDomain: "chat-app-2ac91.firebaseapp.com",
  projectId: "chat-app-2ac91",
  storageBucket: "chat-app-2ac91.appspot.com",
  messagingSenderId: "489434971277",
  appId: "1:489434971277:web:d9628040434daf80b1f6c4",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();

export { firebaseAuth };
