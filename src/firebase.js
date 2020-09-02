import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAO4JvCsl2H2Pp4pJHYVrY-F58r6jlpeEU",
    authDomain: "facebook-clone-c8a59.firebaseapp.com",
    databaseURL: "https://facebook-clone-c8a59.firebaseio.com",
    projectId: "facebook-clone-c8a59",
    storageBucket: "facebook-clone-c8a59.appspot.com",
    messagingSenderId: "243764802509",
    appId: "1:243764802509:web:cce63fd839c2ab3afe0a84",
    measurementId: "G-5369WLRL0W"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
export const auth =firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


export default db;


