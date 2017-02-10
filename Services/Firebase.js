import firebase from "firebase";


var config = {
  apiKey: "Web API Key  AIzaSyBmBH9vJr9Qs05KUe3P-snsdG1b0QeejC4",
  authDomain: "connect-for-tech.firebaseapp.com",
  databaseURL: "https://connect-for-tech.firebaseio.com/",
  storageBucket: "<BUCKET>.appspot.com",
};

export const firebaseRef = firebase.initializeApp(config);