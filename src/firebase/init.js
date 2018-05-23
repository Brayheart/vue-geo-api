import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvlMB0BngQOxvqbCIBeBAbCemc-d5Y3Ys",
    authDomain: "geo-ninjas-19466.firebaseapp.com",
    databaseURL: "https://geo-ninjas-19466.firebaseio.com",
    projectId: "geo-ninjas-19466",
    storageBucket: "",
    messagingSenderId: "696251446970"
};
const firebaseApp = firebase.initializeApp(config); 
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()