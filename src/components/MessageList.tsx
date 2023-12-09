// MessageList.js
import React from "react";
import Message from "./Message";
import "./chat.css";
import { TypeMessage } from "../App";

interface MessageListProps {
  messages: TypeMessage[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (messages.length === 0) return <p className="textData">No Data !!</p>;

  return (
    <div className="messages">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} message={message} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
