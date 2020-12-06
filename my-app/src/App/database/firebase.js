// database/firebaseDb.js

import firebase from "firebase";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyDoCInWmZMkYuJ90ZIxQ0JnPzNC1HWSE8A",
  authDomain: "mentorup-info442.firebaseapp.com",
  databaseURL: "https://mentorup-info442.firebaseio.com",
  projectId: "mentorup-info442",
  storageBucket: "mentorup-info442.appspot.com",
  messagingSenderId: "719726267731",
  appId: "1:719726267731:web:2e802ac2dadcf69bada5a6",
  measurementId: "G-VEM7980GD7",
});

export const auth = firebase.auth();
export default fire;
