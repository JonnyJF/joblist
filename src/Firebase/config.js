import app from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

  // Initialize Firebase
  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();

  export {firebase,firestore,app};
