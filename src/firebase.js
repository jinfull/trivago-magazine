const firebase = require('firebase/app');
require('firebase/database');

var firebaseConfig = {
  apiKey: "AIzaSyDuXBY5FHk37HgcW-aKWLevz4qUkNSodIA",
  authDomain: "trivago-4600f.firebaseapp.com",
  databaseURL: "https://trivago-4600f.firebaseio.com",
  projectId: "trivago-4600f",
  storageBucket: "trivago-4600f.appspot.com",
  messagingSenderId: "587557499680",
  appId: "1:587557499680:web:1e1fb3ebdff2b671"
};

firebase.initializeApp(firebaseConfig);
export default firebase;