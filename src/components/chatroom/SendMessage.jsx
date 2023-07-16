import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(message.trim() === "") {
      alert("Enter valid message");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, 'messages'), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    }catch(error) {
      console.log(error);
    }
    console.log(message);
    setMessage("");
  }

  return (
    <div className="w-full bg-gray-200 shadow-lg py-8 fixed bottom-0">
      <form onSubmit={handleSendMessage} className="containerWrap px-2 flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          placeholder="text message"
        />
        <button type="submit" className="w-auto bg-gray-700 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};
