import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL8WvynnKUh2dhQ1uEdiuF4pdOas5zPZE",
  authDomain: "e-comm-store-2bba5.firebaseapp.com",
  projectId: "e-comm-store-2bba5",
  storageBucket: "e-comm-store-2bba5.appspot.com",
  messagingSenderId: "389473158114",
  appId: "1:389473158114:web:0152b27084b5b2cfb06fbb",
  measurementId: "G-JE6X3R57GM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };