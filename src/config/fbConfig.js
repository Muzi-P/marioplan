import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB5OyET0fU_aV3ShtyYGIn0KQBBzGof4KQ",
    authDomain: "muzi-marioplan.firebaseapp.com",
    databaseURL: "https://muzi-marioplan.firebaseio.com",
    projectId: "muzi-marioplan",
    storageBucket: "muzi-marioplan.appspot.com",
    messagingSenderId: "335403920312",
    appId: "1:335403920312:web:c4887dd0acaaab99557d4d",
    measurementId: "G-TVB4DFBH9D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})
firebase.analytics();
firebase.firestore();

export default firebase;
