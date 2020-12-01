import firebase from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyAshRKKynxgKek8hFD0IJDT9E3_oRfRQ7s",
    authDomain: "ad-assignment-one.firebaseapp.com",
    databaseURL: "https://ad-assignment-one.firebaseio.com",
    projectId: "ad-assignment-one",
    storageBucket: "ad-assignment-one.appspot.com",
    messagingSenderId: "787651067232",
    appId: "1:787651067232:web:aa41ac398c369aa44d3205",
    measurementId: "G-WSJYWXSZ2L"
};

export const SignInWithGoogle = async () => {
    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
}

export const SignOut =  () => firebase.auth().signOut();

export const GetUserIdToken = async () => await firebase.auth().currentUser?.getIdToken()

