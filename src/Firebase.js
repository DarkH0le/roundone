import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB94dUGJnP01-kfCYeE_rkfBTbSPK7EgEU",
    authDomain: "roundone-a9744.firebaseapp.com",
    databaseURL: "https://roundone-a9744.firebaseio.com",
    projectId: "roundone-a9744",
    storageBucket: "roundone-a9744.appspot.com",
    messagingSenderId: "274372309627"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
