import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBRxuWk-ePJCv7nLWQ52taYZd3mq44pwBI",
  authDomain: "new-ecommerce-7b346.firebaseapp.com",
  databaseURL: "https://new-ecommerce-7b346.firebaseio.com",
  projectId: "new-ecommerce-7b346",
  storageBucket: "new-ecommerce-7b346.appspot.com",
  messagingSenderId: "29157533833",
  appId: "1:29157533833:web:278e55096edb50cf467e58",
  measurementId: "G-LLFSLWYCGK",
};
export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if( !userAuth ) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if( !snapShot.exists ){

    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch ( error){
      console.log('error creating user', error.message)
    }
  }  
  return userRef
}

// export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
//   const collectionRef = firestore.collection( collectionKey );
 
//   const batch = firestore.batch()
//   objectsToAdd.forEach( obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set( newDocRef, obj );
//   })

//   return batch.commit()
// }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
