const firebase =  require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDE7r_MhzBElGEO3dZb4bfueqXIEnLbWp8",
  authDomain: "tuyo-12aff.firebaseapp.com",
  projectId: "tuyo-12aff",
  storageBucket: "tuyo-12aff.appspot.com",
  messagingSenderId: "169096496573",
  appId: "1:169096496573:web:f46e42773ecb6205577ed4",
  measurementId: "G-KGH101TVW1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const coins = db.collection("coins");

module.exports =  
     coins;