import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKsN2LeylWeiMgiXtx-3oiNRWAdmRL2v8",
  authDomain: "chatapp-90294.firebaseapp.com",
  projectId: "chatapp-90294",
  storageBucket: "chatapp-90294.appspot.com",
  messagingSenderId: "279492266806",
  appId: "1:279492266806:web:91070657604a1bd5dd4197",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const db = firebase.firestore();

export { firebaseAuth, db };
