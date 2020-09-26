import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC21ydG7jEmoEyaak2iEnNIb9qROZ7E7Xc",
  authDomain: "arpittomar-ecommerce.firebaseapp.com",
  databaseURL: "https://arpittomar-ecommerce.firebaseio.com",
  projectId: "arpittomar-ecommerce",
  storageBucket: "arpittomar-ecommerce.appspot.com",
  messagingSenderId: "201269524958",
  appId: "1:201269524958:web:bc192845127d7659d4454f",
  measurementId: "G-D6162CCP6R",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
