import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD75yDc2tZ9CPg2q7Lm2MZ5yCLbG3zr5gs",
    authDomain: "crwn-db-125bc.firebaseapp.com",
    projectId: "crwn-db-125bc",
    storageBucket: "crwn-db-125bc.appspot.com",
    messagingSenderId: "952082150666",
    appId: "1:952082150666:web:ceeea314e87d7794d3f6f3"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const database = getFirestore(app)

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = ()=> signInWithPopup(auth, provider)
  .then ((response)=> {
      console.log('user logged in')
  })
  .catch ((error)=> {
      console.log(error)
  })
