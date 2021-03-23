
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNt807G4OjmUCX2RLeXvWe6HKNK4AK144",
    authDomain: "robinhood-91c18.firebaseapp.com",
    projectId: "robinhood-91c18",
    storageBucket: "robinhood-91c18.appspot.com",
    messagingSenderId: "78562533236",
    appId: "1:78562533236:web:ae29afdc478c0193065621"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };