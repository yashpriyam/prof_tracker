import firebase from 'firebase/app';
import 'firebase/firestore';    //for database
import 'firebase/auth'; //for authentication

const config = {
    apiKey: "AIzaSyAON7wHP-MmYI05JrMdZNnXWQRl2dP_Ow0",
    authDomain: "profiletracker-eb7d0.firebaseapp.com",
    databaseURL: "https://profiletracker-eb7d0.firebaseio.com",
    projectId: "profiletracker-eb7d0",
    storageBucket: "profiletracker-eb7d0.appspot.com",
    messagingSenderId: "830976312223",
    appId: "1:830976312223:web:816a3fb7bb9c7bd12f33aa",
    measurementId: "G-MH9Q5HJVVX"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  //configuring the firebase for using the google authentication

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();   // gives access to GoogleAuth Provider class from authentication library (auth)
  provider.setCustomParameters({ prompt: 'select_account'});    //we walways want to trigger google prompt whenever we use the google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
