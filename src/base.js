import Rebase from 're-base';
import firebase from'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLg85g10uBqR7kJXFaAvZsp3hm-iXzSw4",
    authDomain: "catch-of-the-day-wes-bos-36623.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-wes-bos-36623.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is named export
export { firebaseApp}

// this is a default export
export default base;