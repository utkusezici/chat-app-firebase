import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
function SignOut() {
    const auth = firebase.auth();
    return (
        auth.currentUser && (
            <button className="signOut" onClick={() => auth.signOut()}>Sign Out</button>
        )
    );
}

export default SignOut
