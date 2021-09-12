import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { doc, getDoc, setDoc } from "firebase/firestore"; 


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
  })
  .catch ((error)=> {
      console.log(error)
  })

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if (!userAuth) return;

    const docRef = doc(database, "users", userAuth.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      
    } else {
      const {displayName, email, uid } = userAuth
      const createdAt = new Date()
      try {
        await setDoc(doc(database, "users", uid), {
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (err) {
        console.log('error creating user', err.message)
      }
    }
    return docSnap

  }
