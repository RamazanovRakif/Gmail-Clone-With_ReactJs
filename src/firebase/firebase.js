import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCxBcvwZDOTV44sn2I4GPzm3BRBB23-zk0",
    authDomain: "copy-17983.firebaseapp.com",
    projectId: "copy-17983",
    storageBucket: "copy-17983.appspot.com",
    messagingSenderId: "19305590814",
    appId: "1:19305590814:web:f0717a1d0d824434893e0f"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth,provider};