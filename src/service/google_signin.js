import firebase from 'firebase';
import firebaseApp from './firebase';
class GoogleSignin {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default GoogleSignin;
