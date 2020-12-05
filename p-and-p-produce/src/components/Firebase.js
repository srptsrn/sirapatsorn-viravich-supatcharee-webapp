import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD3ktWl5wShJBLVvSFE4c0SrjC6j7mGzxE",
    authDomain: "p-and-p-produce-web-app.firebaseapp.com",
    databaseURL: "https://p-and-p-produce-web-app.firebaseio.com",
    projectId: "p-and-p-produce-web-app",
    storageBucket: "p-and-p-produce-web-app.appspot.com",
    messagingSenderId: "13991733033",
    appId: "1:13991733033:web:203ce16be6eef45feb7938",
    measurementId: "G-PMFN2319FL",
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;