import React from "react";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats-container">
      <h4 className="text-center">This is the Chats Page</h4>
      <p>
        Welcome to the Chats section. Here you can find recent chat
        conversations, messages, and information about our chat features.
      </p>
      <div className="chat-list">
        <div className="chat-item">
          <h6>Chat with John Doe</h6>
          <p>Hey, are we still on for the meeting tomorrow?</p>
        </div>
        <div className="chat-item">
          <h6>Chat with Jane Smith</h6>
          <p>
            Don't forget to review the project proposal before the deadline.
          </p>
        </div>
        <div className="chat-item">
          <h6>Chat with Michael Johnson</h6>
          <p>Can you send me the latest updates on the project?</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
