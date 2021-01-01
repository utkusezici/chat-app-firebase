import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage";
import SignOut from "../SignOut";
function ChatRoom() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const dummy = useRef();
    const messageRef = firestore.collection("messages");
    const query = messageRef.orderBy("createdAt").limit(25);
    const [messages] = useCollectionData(query, { idField: "id" });
    const [formValue, setFormValue] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
        setFormValue("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <SignOut />
            <main>
                {messages &&
                    messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                {formValue !== "" && <button type="submit"> Gönder</button>}
            </form>
        </>
    );
}

export default ChatRoom;
