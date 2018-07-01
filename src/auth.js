import firebase from "./firebase-init"

const provider = new firebase.auth.GoogleAuthProvider();

export function onLogin(cb) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      cb(user)
    }
  });
}

export function signInWithPopup() {
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(result)
  });
}

export function isLoggedIn() {
  return firebase.auth().currentUser !== null
}