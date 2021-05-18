import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBxtSwxV1dYEpR1c6eYordYd_eiP_XsOvQ",
  authDomain: "react-restauran-app-db.firebaseapp.com",
  projectId: "react-restauran-app-db",
  storageBucket: "react-restauran-app-db.appspot.com",
  messagingSenderId: "599553179292",
  appId: "1:599553179292:web:d9d38c0c698f3d88757759",
  measurementId: "G-53083SD9BJ",
};

firebase.initializeApp(config);

const Firebase = {
  // auth
  loginWithEmail: async (email, password) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signupWithEmail: async (email, password) => {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
  signOut: async () => {
    return await firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err.message));
  },
  checkUserAuth: async () => {
    return await firebase.auth().currentUser;
  },

  // firestore
  createNewUser: (userData) => {
    return firebase
      .firestore()
      .collection("users")
      .doc(`${userData.uid}`)
      .set(userData);
  },

  createTable: async (tableData, currentUser, restaurantName, table) => {
    return await firebase
      .database()
      .chid("users")
      .child(currentUser)
      .child(restaurantName)
      .child("tables")
      .child(table).set(tableData)
      
  },
};

export default Firebase;
