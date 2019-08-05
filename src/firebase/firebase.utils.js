import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlEKWnBy29ANdhkeYIHdBDTnM6tgWFLaw",
  authDomain: "crwn-db-75344.firebaseapp.com",
  databaseURL: "https://crwn-db-75344.firebaseio.com",
  projectId: "crwn-db-75344",
  storageBucket: "",
  messagingSenderId: "260704505501",
  appId: "1:260704505501:web:be82575443ad314d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
