import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDlX9xp6rslo5YiVbzVOXM26lLPLCiyFn8",
    authDomain: "mysends-322a2.firebaseapp.com",
    projectId: "mysends-322a2",
    storageBucket: "mysends-322a2.appspot.com",
    messagingSenderId: "41387525652",
    appId: "1:41387525652:web:85889c2124a37618c98901"
  };

  //init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }