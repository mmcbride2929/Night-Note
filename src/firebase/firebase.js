// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC4Nf0E2PzPL1ugzfRNmnZMozfrjVfuqbo',
  authDomain: 'night-note-6e62e.firebaseapp.com',
  databaseURL: 'https://night-note-6e62e-default-rtdb.firebaseio.com',
  projectId: 'night-note-6e62e',
  storageBucket: 'night-note-6e62e.appspot.com',
  messagingSenderId: '98433472636',
  appId: '1:98433472636:web:36260af8aa74ffdf2951f9',
});

const db = firebaseApp.firestore();

export default db;
