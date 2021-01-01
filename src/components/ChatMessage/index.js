import React from 'react'
import noImg from "../../public/no-photo.jpg"
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
function ChatMessage(props) {
    const auth = firebase.auth();
    const { text, uid,photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    return (
        <div className={`message ${messageClass}`}>
          <img src={photoURL ? photoURL : noImg}/>
            <p>{text}</p>
        </div>
    );
}

export default ChatMessage
