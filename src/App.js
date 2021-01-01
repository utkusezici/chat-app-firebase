import "./App.css";
import React,{ useState,useRef} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom"
firebase.initializeApp({
    apiKey: "AIzaSyASyREXmKUWW2Z_8Gs8QEwRLXgVyrFfDf0",
    authDomain: "chat-app-utku.firebaseapp.com",
    projectId: "chat-app-utku",
    storageBucket: "chat-app-utku.appspot.com",
    messagingSenderId: "671421312093",
    appId: "1:671421312093:web:fbbb03990d1d063ae0b1b4",
    measurementId: "G-4FVDLLMN0P",
});

const auth = firebase.auth();
function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <section>{user ? <ChatRoom /> : <SignIn />}</section>
        </div>
    );
}
function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
    return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}


export default App;
