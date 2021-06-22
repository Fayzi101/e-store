import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const config = {
    
        apiKey: "AIzaSyCZs1uI4N2ZRcX2yrTNEmlQDNXNDpMx5LY",
        authDomain: "e-store-6a039.firebaseapp.com",
        projectId: "e-store-6a039",
        storageBucket: "e-store-6a039.appspot.com",
        messagingSenderId: "71655008797",
        appId: "1:71655008797:web:618c976adc0cd962c234f4",
        measurementId: "G-W77GHHFTXF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select-account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
