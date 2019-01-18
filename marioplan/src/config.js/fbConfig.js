import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDut6ySFRceDqBqz15YOH-4oHKcZ8whrP0",
    authDomain: "mario-plan-c1ce6.firebaseapp.com",
    databaseURL: "https://mario-plan-c1ce6.firebaseio.com",
    projectId: "mario-plan-c1ce6",
    storageBucket: "mario-plan-c1ce6.appspot.com",
    messagingSenderId: "551546911483"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase