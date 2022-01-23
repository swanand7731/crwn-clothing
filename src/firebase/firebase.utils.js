import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBnVDuS4O7zfNZ26TG3ETHlifKfkog2U6I',
  authDomain: 'crwn-db-879b4.firebaseapp.com',
  projectId: 'crwn-db-879b4',
  storageBucket: 'crwn-db-879b4.appspot.com',
  messagingSenderId: '796606495822',
  appId: '1:796606495822:web:941e3ce6a8c3caaed5571f',
  measurementId: 'G-Q1W79HTT88',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
