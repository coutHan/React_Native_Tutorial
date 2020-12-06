import * as firebase from 'firebase';

import "firebase/database";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZzW_zMeSYO5vfB1dKLq3bCQCAF5D9avU",
    authDomain: "tutorial-5e34f.firebaseapp.com",
    databaseURL: "https://tutorial-5e34f.firebaseio.com",
    projectId: "tutorial-5e34f",
    storageBucket: "tutorial-5e34f.appspot.com",
    messagingSenderId: "734009038382",
    appId: "1:734009038382:web:52c4d541308fcdfd08b1bf",
    measurementId: "G-KDS6PQ1Q24"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };