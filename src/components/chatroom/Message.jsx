import React from "react";
import { UserAuth } from "../../context/AuthContext";

export const Message = ({ message }) => {
  const {currentUser} = UserAuth();

  return (
    <div className="px-5 pt-4 lg:px-0 lg:pt-8">
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} alt="avatar" />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};
