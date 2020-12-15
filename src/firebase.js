import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7Un_irErjVNNaXHoO3hIerxrBWLtHqWc",
  authDomain: "tinder-clone-f4114.firebaseapp.com",
  projectId: "tinder-clone-f4114",
  storageBucket: "tinder-clone-f4114.appspot.com",
  messagingSenderId: "528160911705",
  appId: "1:528160911705:web:e49a098e48a8202856dc48",
  measurementId: "G-V1EP39LEGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
