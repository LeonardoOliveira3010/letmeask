// import { initializeApp }  from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

import firebase from 'firebase/app'

// Importando a autenticação e o banco de dados
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    // apiKey: "AIzaSyDQi2c63hnObavEEy1yRM33pzFL-RUJpeY",
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID

    apiKey: "AIzaSyDQi2c63hnObavEEy1yRM33pzFL-RUJpeY",
    authDomain: "letmeask-1fb4d.firebaseapp.com",
    databaseURL: "https://letmeask-1fb4d-default-rtdb.firebaseio.com",
    projectId: "letmeask-1fb4d",
    storageBucket: "letmeask-1fb4d.appspot.com",
    messagingSenderId: "716204357225",
    appId: "1:716204357225:web:9f7ade5fbb539c13bc94f8"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
  

 const auth = firebase.auth()
 const database = firebase.database()

export {firebase, auth, database}