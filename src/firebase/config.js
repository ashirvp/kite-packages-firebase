import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC9bC40iiWP2NRM6kPv9s_ow_ZcDOzeU38",
    authDomain: "myolxapp-70c50.firebaseapp.com",
    projectId: "myolxapp-70c50",
    storageBucket: "myolxapp-70c50.appspot.com",
    messagingSenderId: "418873440423",
    appId: "1:418873440423:web:5ff903e019f1b3d2880382",
    measurementId: "G-Y8JP0PPC03"
  };
  export default firebase.initializeApp(firebaseConfig)