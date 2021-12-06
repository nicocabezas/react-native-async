// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2fyqEeN2dW0z0UZ2KP1W_pVKh7ROJUAw",
  authDomain: "react-native-login-fbf75.firebaseapp.com",
  projectId: "react-native-login-fbf75",
  storageBucket: "react-native-login-fbf75.appspot.com",
  messagingSenderId: "10041914135",
  appId: "1:10041914135:web:48da4d2bcd3e4dc0307d52"
};

// Initialize Firebase
let app;
if ( firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};