import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCdSradMMCpX_BncigFoAyf-GVeaD7feXQ',
  authDomain: 'crown-db-62c95.firebaseapp.com',
  databaseURL: 'https://crown-db-62c95.firebaseio.com',
  projectId: 'crown-db-62c95',
  storageBucket: 'crown-db-62c95.appspot.com',
  messagingSenderId: '71666730204',
  appId: '1:71666730204:web:aae8cc4174147a5cf5e019',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
