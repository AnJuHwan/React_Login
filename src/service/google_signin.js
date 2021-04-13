import firebase from 'firebase';

class GoogleSignin {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }
}

export default GoogleSignin;
